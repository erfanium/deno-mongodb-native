'use strict';
const { expect } = require('chai');
const { filterForCommands, withClientV2 } = require('./shared');

describe('AbstractCursor', function () {
  before(
    withClientV2((client, done) => {
      const docs = [{ a: 1 }, { a: 2 }, { a: 3 }, { a: 4 }, { a: 5 }, { a: 6 }];
      const coll = client.db().collection('find_cursor');
      const tryNextColl = client.db().collection('try_next');
      coll.drop(() => tryNextColl.drop(() => coll.insertMany(docs, done)));
    })
  );

  context('#next', function () {
    it(
      'should support a batch size',
      withClientV2(function (client, done) {
        const commands = [];
        client.on('commandStarted', filterForCommands(['getMore'], commands));

        const coll = client.db().collection('find_cursor');
        const cursor = coll.find({}, { batchSize: 2 });
        this.defer(() => cursor.close());

        cursor.toArray((err, docs) => {
          expect(err).to.not.exist;
          expect(docs).to.have.length(6);
          expect(commands).to.have.length(3);
          done();
        });
      })
    );
  });

  context('#close', function () {
    it(
      'should send a killCursors command when closed before completely iterated',
      withClientV2(function (client, done) {
        const commands = [];
        client.on('commandStarted', filterForCommands(['killCursors'], commands));

        const coll = client.db().collection('find_cursor');
        const cursor = coll.find({}, { batchSize: 2 });
        cursor.next(err => {
          expect(err).to.not.exist;
          cursor.close(err => {
            expect(err).to.not.exist;
            expect(commands).to.have.length(1);
            done();
          });
        });
      })
    );

    it(
      'should not send a killCursors command when closed after completely iterated',
      withClientV2(function (client, done) {
        const commands = [];
        client.on('commandStarted', filterForCommands(['killCursors'], commands));

        const coll = client.db().collection('find_cursor');
        const cursor = coll.find({}, { batchSize: 2 });
        cursor.toArray(err => {
          expect(err).to.not.exist;

          cursor.close(err => {
            expect(err).to.not.exist;
            expect(commands).to.have.length(0);
            done();
          });
        });
      })
    );

    it(
      'should not send a killCursors command when closed before initialization',
      withClientV2(function (client, done) {
        const commands = [];
        client.on('commandStarted', filterForCommands(['killCursors'], commands));

        const coll = client.db().collection('find_cursor');
        const cursor = coll.find({}, { batchSize: 2 });
        cursor.close(err => {
          expect(err).to.not.exist;
          expect(commands).to.have.length(0);
          done();
        });
      })
    );
  });

  context('#forEach', function () {
    it(
      'should iterate each document in a cursor',
      withClientV2(function (client, done) {
        const coll = client.db().collection('find_cursor');
        const cursor = coll.find({}, { batchSize: 2 });

        const bag = [];
        cursor.forEach(
          doc => bag.push(doc),
          err => {
            expect(err).to.not.exist;
            expect(bag).to.have.lengthOf(6);
            done();
          }
        );
      })
    );
  });

  context('#tryNext', function () {
    it(
      'should return control to the user if an empty batch is returned',
      withClientV2(function (client, done) {
        const db = client.db();
        db.createCollection('try_next', { capped: true, size: 10000000 }, () => {
          const coll = db.collection('try_next');
          coll.insertMany([{}, {}], err => {
            expect(err).to.not.exist;

            const cursor = coll.find({}, { tailable: true, awaitData: true });
            this.defer(() => cursor.close());

            cursor.tryNext((err, doc) => {
              expect(err).to.not.exist;
              expect(doc).to.exist;

              cursor.tryNext((err, doc) => {
                expect(err).to.not.exist;
                expect(doc).to.exist;

                cursor.tryNext((err, doc) => {
                  expect(err).to.not.exist;
                  expect(doc).to.be.null;
                  done();
                });
              });
            });
          });
        });
      })
    );
  });
});
