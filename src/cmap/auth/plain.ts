import { Binary } from '../../bson.ts';
import { AuthProvider, AuthContext } from './auth_provider.ts';
import { MongoMissingCredentialsError } from '../../error.ts';
import { Callback, ns } from '../../utils.ts';

export class Plain extends AuthProvider {
  auth(authContext: AuthContext, callback: Callback): void {
    const { connection, credentials } = authContext;
    if (!credentials) {
      return callback(new MongoMissingCredentialsError('AuthContext must provide credentials.'));
    }
    const username = credentials.username;
    const password = credentials.password;

    const payload = new Binary(Buffer.from(`\x00${username}\x00${password}`));
    const command = {
      saslStart: 1,
      mechanism: 'PLAIN',
      payload: payload,
      autoAuthorize: 1
    };

    connection.command(ns('$external.$cmd'), command, undefined, callback);
  }
}
