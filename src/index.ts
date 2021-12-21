import { AbstractCursor } from "./cursor/abstract_cursor.ts";
import { AggregationCursor } from "./cursor/aggregation_cursor.ts";
import { FindCursor } from "./cursor/find_cursor.ts";
import { ListIndexesCursor } from "./operations/indexes.ts";
import { ListCollectionsCursor } from "./operations/list_collections.ts";
import { PromiseProvider } from "./promise_provider.ts";
import { Admin } from "./admin.ts";
import { MongoClient } from "./mongo_client.ts";
import { Db } from "./db.ts";
import { Collection } from "./collection.ts";
import { Logger } from "./logger.ts";
import { GridFSBucket } from "./gridfs/index.ts";
import { CancellationToken } from "./mongo_types.ts";

export {
  Binary,
  BSONRegExp,
  BSONSymbol,
  Code,
  DBRef,
  Decimal128,
  Double,
  Int32,
  Long,
  Map,
  MaxKey,
  MinKey,
  ObjectId,
  Timestamp,
} from "./bson.ts";

import { ObjectId } from "bson";
/**
 * @public
 * @deprecated Please use `ObjectId`
 */
export const ObjectID = ObjectId;

export {
  MongoAPIError,
  MongoBatchReExecutionError,
  MongoChangeStreamError,
  MongoCompatibilityError,
  MongoCursorExhaustedError,
  MongoCursorInUseError,
  MongoDecompressionError,
  MongoDriverError,
  MongoError,
  MongoExpiredSessionError,
  MongoGridFSChunkError,
  MongoGridFSStreamError,
  MongoInvalidArgumentError,
  MongoKerberosError,
  MongoMissingCredentialsError,
  MongoMissingDependencyError,
  MongoNetworkError,
  MongoNetworkTimeoutError,
  MongoNotConnectedError,
  MongoParseError,
  MongoRuntimeError,
  MongoServerClosedError,
  MongoServerError,
  MongoServerSelectionError,
  MongoSystemError,
  MongoTopologyClosedError,
  MongoTransactionError,
  MongoWriteConcernError,
} from "./error.ts";
export type {
  AnyBulkWriteOperation,
  BulkWriteOptions,
  MongoBulkWriteError,
} from "./bulk/common.ts";
export {
  AbstractCursor,
  // Actual driver classes exported
  Admin,
  AggregationCursor,
  CancellationToken,
  Collection,
  Db,
  FindCursor,
  GridFSBucket,
  ListCollectionsCursor,
  ListIndexesCursor,
  Logger,
  MongoClient,
  // Utils
  PromiseProvider as Promise,
};

// enums
export { ProfilingLevel } from "./operations/set_profiling_level.ts";
export { ServerType, TopologyType } from "./sdam/common.ts";
export { LoggerLevel } from "./logger.ts";
export { AutoEncryptionLoggerLevel } from "./deps.ts";
export { BatchType } from "./bulk/common.ts";
export { AuthMechanism } from "./cmap/auth/defaultAuthProviders.ts";
export { CURSOR_FLAGS } from "./cursor/abstract_cursor.ts";
export { Compressor } from "./cmap/wire_protocol/compression.ts";
export { ReturnDocument } from "./operations/find_and_modify.ts";
export { ExplainVerbosity } from "./explain.ts";
export { ReadConcernLevel } from "./read_concern.ts";
export { ReadPreferenceMode } from "./read_preference.ts";
export { ServerApiVersion } from "./mongo_client.ts";
export { BSONType } from "./mongo_types.ts";

// Helper classes
export { WriteConcern } from "./write_concern.ts";
export { ReadConcern } from "./read_concern.ts";
export { ReadPreference } from "./read_preference.ts";

// events
export {
  CommandFailedEvent,
  CommandStartedEvent,
  CommandSucceededEvent,
} from "./cmap/command_monitoring_events.ts";
export {
  ConnectionCheckedInEvent,
  ConnectionCheckedOutEvent,
  ConnectionCheckOutFailedEvent,
  ConnectionCheckOutStartedEvent,
  ConnectionClosedEvent,
  ConnectionCreatedEvent,
  ConnectionPoolClearedEvent,
  ConnectionPoolClosedEvent,
  ConnectionPoolCreatedEvent,
  ConnectionPoolMonitoringEvent,
  ConnectionReadyEvent,
} from "./cmap/connection_pool_events.ts";
export {
  ServerClosedEvent,
  ServerDescriptionChangedEvent,
  ServerHeartbeatFailedEvent,
  ServerHeartbeatStartedEvent,
  ServerHeartbeatSucceededEvent,
  ServerOpeningEvent,
  TopologyClosedEvent,
  TopologyDescriptionChangedEvent,
  TopologyOpeningEvent,
} from "./sdam/events.ts";
export { SrvPollingEvent } from "./sdam/srv_polling.ts";

// type only exports below, these are removed from emitted JS
export type { AdminPrivate } from "./admin.ts";
export type { BSONSerializeOptions, Document } from "./bson.ts";
export type {
  BulkResult,
  BulkWriteOperationError,
  BulkWriteResult,
  DeleteManyModel,
  DeleteOneModel,
  InsertOneModel,
  ReplaceOneModel,
  UpdateManyModel,
  UpdateOneModel,
  WriteConcernError,
  WriteError,
} from "./bulk/common.ts";
export type {
  ChangeStream,
  ChangeStreamCursor,
  ChangeStreamCursorOptions,
  ChangeStreamDocument,
  ChangeStreamEvents,
  ChangeStreamOptions,
  OperationTime,
  PipeOptions,
  ResumeOptions,
  ResumeToken,
  UpdateDescription,
} from "./change_stream.ts";
export type {
  AuthMechanismProperties,
  MongoCredentials,
  MongoCredentialsOptions,
} from "./cmap/auth/mongo_credentials.ts";
export type {
  GetMore,
  KillCursor,
  Msg,
  OpGetMoreOptions,
  OpQueryOptions,
  Query,
  WriteProtocolMessageType,
} from "./cmap/commands.ts";
export type {
  LEGAL_TCP_SOCKET_OPTIONS,
  LEGAL_TLS_SOCKET_OPTIONS,
  Stream,
} from "./cmap/connect.ts";
export type {
  CommandOptions,
  Connection,
  ConnectionEvents,
  ConnectionOptions,
  DestroyOptions,
  GetMoreOptions,
  QueryOptions,
} from "./cmap/connection.ts";
export type { ConnectionPoolMetrics } from "./cmap/metrics.ts";
export type {
  CloseOptions,
  ConnectionPool,
  ConnectionPoolEvents,
  ConnectionPoolOptions,
  WaitQueueMember,
  WithConnectionCallback,
} from "./cmap/connection_pool.ts";
export type {
  MessageStream,
  MessageStreamOptions,
  OperationDescription,
} from "./cmap/message_stream.ts";
export type {
  StreamDescription,
  StreamDescriptionOptions,
} from "./cmap/stream_description.ts";
export type { CompressorName } from "./cmap/wire_protocol/compression.ts";
export type {
  CollectionOptions,
  CollectionPrivate,
  ModifyResult,
} from "./collection.ts";
export type { AggregationCursorOptions } from "./cursor/aggregation_cursor.ts";
export type {
  AbstractCursorEvents,
  AbstractCursorOptions,
  CursorCloseOptions,
  CursorFlag,
  CursorStreamOptions,
} from "./cursor/abstract_cursor.ts";
export type { DbOptions, DbPrivate } from "./db.ts";
export type { AutoEncrypter, AutoEncryptionOptions } from "./deps.ts";
export type {
  AnyError,
  ErrorDescription,
  MongoNetworkErrorOptions,
} from "./error.ts";
export type {
  Explain,
  ExplainOptions,
  ExplainVerbosityLike,
} from "./explain.ts";
export type {
  GridFSBucketReadStream,
  GridFSBucketReadStreamOptions,
  GridFSBucketReadStreamOptionsWithRevision,
  GridFSBucketReadStreamPrivate,
  GridFSFile,
} from "./gridfs/download.ts";
export type {
  GridFSBucketEvents,
  GridFSBucketOptions,
  GridFSBucketPrivate,
} from "./gridfs/index.ts";
export type {
  GridFSBucketWriteStream,
  GridFSBucketWriteStreamOptions,
  GridFSChunk,
} from "./gridfs/upload.ts";
export type { LoggerFunction, LoggerOptions } from "./logger.ts";
export type {
  Auth,
  DriverInfo,
  MongoClientEvents,
  MongoClientOptions,
  MongoClientPrivate,
  MongoOptions,
  PkFactory,
  ServerApi,
  SupportedNodeConnectionOptions,
  SupportedSocketOptions,
  SupportedTLSConnectionOptions,
  SupportedTLSSocketOptions,
  WithSessionCallback,
} from "./mongo_client.ts";
export type {
  CommonEvents,
  EventsDescription,
  GenericListener,
  TypedEventEmitter,
} from "./mongo_types.ts";
export type {
  AddUserOptions,
  RoleSpecification,
} from "./operations/add_user.ts";
export type {
  AggregateOperation,
  AggregateOptions,
  DB_AGGREGATE_COLLECTION,
} from "./operations/aggregate.ts";
export type { MONGO_CLIENT_EVENTS } from "./operations/connect.ts";
export type {
  CollationOptions,
  CommandOperation,
  CommandOperationOptions,
  OperationParent,
} from "./operations/command.ts";
export type { IndexInformationOptions } from "./operations/common_functions.ts";
export type { CountOptions } from "./operations/count.ts";
export type { CountDocumentsOptions } from "./operations/count_documents.ts";
export type {
  CreateCollectionOptions,
  TimeSeriesCollectionOptions,
} from "./operations/create_collection.ts";
export type {
  DeleteOptions,
  DeleteResult,
  DeleteStatement,
} from "./operations/delete.ts";
export type { DistinctOptions } from "./operations/distinct.ts";
export type {
  DropCollectionOptions,
  DropDatabaseOptions,
} from "./operations/drop.ts";
export type { EstimatedDocumentCountOptions } from "./operations/estimated_document_count.ts";
export type { EvalOptions } from "./operations/eval.ts";
export type { FindOptions } from "./operations/find.ts";
export type {
  Sort,
  SortDirection,
  SortDirectionForCmd,
  SortForCmd,
} from "./sort.ts";
export type {
  FindOneAndDeleteOptions,
  FindOneAndReplaceOptions,
  FindOneAndUpdateOptions,
} from "./operations/find_and_modify.ts";
export type {
  CreateIndexesOptions,
  DropIndexesOptions,
  IndexDescription,
  IndexDirection,
  IndexSpecification,
  ListIndexesOptions,
} from "./operations/indexes.ts";
export type {
  InsertManyResult,
  InsertOneOptions,
  InsertOneResult,
} from "./operations/insert.ts";
export type {
  CollectionInfo,
  ListCollectionsOptions,
} from "./operations/list_collections.ts";
export type {
  ListDatabasesOptions,
  ListDatabasesResult,
} from "./operations/list_databases.ts";
export type {
  FinalizeFunction,
  MapFunction,
  MapReduceOptions,
  ReduceFunction,
} from "./operations/map_reduce.ts";
export type {
  AbstractOperation,
  Hint,
  OperationOptions,
} from "./operations/operation.ts";
export type { ProfilingLevelOptions } from "./operations/profiling_level.ts";
export type { RemoveUserOptions } from "./operations/remove_user.ts";
export type { RenameOptions } from "./operations/rename.ts";
export type { RunCommandOptions } from "./operations/run_command.ts";
export type { SetProfilingLevelOptions } from "./operations/set_profiling_level.ts";
export type {
  CollStats,
  CollStatsOptions,
  DbStatsOptions,
  WiredTigerData,
} from "./operations/stats.ts";
export type {
  ReplaceOptions,
  UpdateOptions,
  UpdateResult,
  UpdateStatement,
} from "./operations/update.ts";
export type { ValidateCollectionOptions } from "./operations/validate_collection.ts";
export type { ReadConcernLike } from "./read_concern.ts";
export type {
  HedgeOptions,
  ReadPreferenceFromOptions,
  ReadPreferenceLike,
  ReadPreferenceLikeOptions,
  ReadPreferenceOptions,
} from "./read_preference.ts";
export type { ClusterTime, TimerQueue } from "./sdam/common.ts";
export type {
  Monitor,
  MonitorEvents,
  MonitorOptions,
  MonitorPrivate,
  RTTPinger,
  RTTPingerOptions,
} from "./sdam/monitor.ts";
export type {
  Server,
  ServerEvents,
  ServerOptions,
  ServerPrivate,
} from "./sdam/server.ts";
export type {
  ServerDescription,
  ServerDescriptionOptions,
  TagSet,
  TopologyVersion,
} from "./sdam/server_description.ts";
export type { ServerSelector } from "./sdam/server_selection.ts";
export type {
  SrvPoller,
  SrvPollerEvents,
  SrvPollerOptions,
} from "./sdam/srv_polling.ts";
export type {
  ConnectOptions,
  SelectServerOptions,
  ServerCapabilities,
  ServerSelectionCallback,
  ServerSelectionRequest,
  Topology,
  TopologyEvents,
  TopologyOptions,
  TopologyPrivate,
} from "./sdam/topology.ts";
export type {
  TopologyDescription,
  TopologyDescriptionOptions,
} from "./sdam/topology_description.ts";
export type {
  ClientSession,
  ClientSessionEvents,
  ClientSessionOptions,
  EndSessionOptions,
  ServerSession,
  ServerSessionId,
  ServerSessionPool,
  WithTransactionCallback,
} from "./sessions.ts";
export type {
  Transaction,
  TransactionOptions,
  TxnState,
} from "./transactions.ts";
export type {
  BufferPool,
  Callback,
  ClientMetadata,
  ClientMetadataOptions,
  EventEmitterWithState,
  HostAddress,
  InterruptibleAsyncInterval,
  MongoDBNamespace,
} from "./utils.ts";
export type {
  W,
  WriteConcernOptions,
  WriteConcernSettings,
} from "./write_concern.ts";
export type { ExecutionResult } from "./operations/execute_operation.ts";
export type { InternalAbstractCursorOptions } from "./cursor/abstract_cursor.ts";
export type {
  Batch,
  BulkOperationBase,
  BulkOperationPrivate,
  FindOperators,
  WriteConcernErrorData,
} from "./bulk/common.ts";
export type { OrderedBulkOperation } from "./bulk/ordered.ts";
export type { UnorderedBulkOperation } from "./bulk/unordered.ts";
export type { Encrypter, EncrypterOptions } from "./encrypter.ts";
export type {
  AcceptedFields,
  AddToSetOperators,
  AlternativeType,
  ArrayOperator,
  BitwiseFilter,
  BSONTypeAlias,
  Condition,
  EnhancedOmit,
  Filter,
  FilterOperations,
  FilterOperators,
  Flatten,
  InferIdType,
  IntegerType,
  IsAny,
  KeysOfAType,
  KeysOfOtherType,
  MatchKeysAndValues,
  NotAcceptedFields,
  NumericType,
  OneOrMore,
  OnlyFieldsOfType,
  OptionalId,
  Projection,
  ProjectionOperators,
  PullAllOperator,
  PullOperator,
  PushOperator,
  RegExpOrString,
  RootFilterOperators,
  SchemaMember,
  SetFields,
  UpdateFilter,
  WithId,
  WithoutId,
} from "./mongo_types.ts";
export type { deserialize, serialize } from "./bson.ts";
