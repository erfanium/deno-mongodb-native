import { AbstractOperation, OperationOptions } from './operation.ts';
import { MongoAPIError } from '../error.ts';
import type { Callback } from '../utils.ts';
import type { Document } from '../bson.ts';
import type { Collection } from '../collection.ts';
import type { Server } from '../sdam/server.ts';
import type { ClientSession } from '../sessions.ts';

/** @internal */
export class OptionsOperation extends AbstractOperation<Document> {
  options: OperationOptions;
  collection: Collection;

  constructor(collection: Collection, options: OperationOptions) {
    super(options);
    this.options = options;
    this.collection = collection;
  }

  execute(server: Server, session: ClientSession, callback: Callback<Document>): void {
    const coll = this.collection;

    coll.s.db
      .listCollections(
        { name: coll.collectionName },
        { ...this.options, nameOnly: false, readPreference: this.readPreference, session }
      )
      .toArray((err, collections) => {
        if (err || !collections) return callback(err);
        if (collections.length === 0) {
          // TODO(NODE-3485)
          return callback(new MongoAPIError(`collection ${coll.namespace} not found`));
        }

        callback(err, collections[0].options);
      });
  }
}
