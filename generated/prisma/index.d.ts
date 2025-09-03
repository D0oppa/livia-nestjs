
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Test
 * 
 */
export type Test = $Result.DefaultSelection<Prisma.$TestPayload>
/**
 * Model appointment
 * 
 */
export type appointment = $Result.DefaultSelection<Prisma.$appointmentPayload>
/**
 * Model appointment_states
 * 
 */
export type appointment_states = $Result.DefaultSelection<Prisma.$appointment_statesPayload>
/**
 * Model business
 * 
 */
export type business = $Result.DefaultSelection<Prisma.$businessPayload>
/**
 * Model conversations
 * 
 */
export type conversations = $Result.DefaultSelection<Prisma.$conversationsPayload>
/**
 * Model doctor
 * 
 */
export type doctor = $Result.DefaultSelection<Prisma.$doctorPayload>
/**
 * Model messages
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type messages = $Result.DefaultSelection<Prisma.$messagesPayload>
/**
 * Model notes
 * 
 */
export type notes = $Result.DefaultSelection<Prisma.$notesPayload>
/**
 * Model notifications
 * 
 */
export type notifications = $Result.DefaultSelection<Prisma.$notificationsPayload>
/**
 * Model patient
 * 
 */
export type patient = $Result.DefaultSelection<Prisma.$patientPayload>
/**
 * Model payment_method
 * 
 */
export type payment_method = $Result.DefaultSelection<Prisma.$payment_methodPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Tests
 * const tests = await prisma.test.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Tests
   * const tests = await prisma.test.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.test`: Exposes CRUD operations for the **Test** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tests
    * const tests = await prisma.test.findMany()
    * ```
    */
  get test(): Prisma.TestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.appointment`: Exposes CRUD operations for the **appointment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Appointments
    * const appointments = await prisma.appointment.findMany()
    * ```
    */
  get appointment(): Prisma.appointmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.appointment_states`: Exposes CRUD operations for the **appointment_states** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Appointment_states
    * const appointment_states = await prisma.appointment_states.findMany()
    * ```
    */
  get appointment_states(): Prisma.appointment_statesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.business`: Exposes CRUD operations for the **business** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Businesses
    * const businesses = await prisma.business.findMany()
    * ```
    */
  get business(): Prisma.businessDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.conversations`: Exposes CRUD operations for the **conversations** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Conversations
    * const conversations = await prisma.conversations.findMany()
    * ```
    */
  get conversations(): Prisma.conversationsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.doctor`: Exposes CRUD operations for the **doctor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Doctors
    * const doctors = await prisma.doctor.findMany()
    * ```
    */
  get doctor(): Prisma.doctorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.messages`: Exposes CRUD operations for the **messages** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.messages.findMany()
    * ```
    */
  get messages(): Prisma.messagesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notes`: Exposes CRUD operations for the **notes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notes
    * const notes = await prisma.notes.findMany()
    * ```
    */
  get notes(): Prisma.notesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notifications`: Exposes CRUD operations for the **notifications** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notifications.findMany()
    * ```
    */
  get notifications(): Prisma.notificationsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.patient`: Exposes CRUD operations for the **patient** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Patients
    * const patients = await prisma.patient.findMany()
    * ```
    */
  get patient(): Prisma.patientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payment_method`: Exposes CRUD operations for the **payment_method** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payment_methods
    * const payment_methods = await prisma.payment_method.findMany()
    * ```
    */
  get payment_method(): Prisma.payment_methodDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.14.0
   * Query Engine version: 717184b7b35ea05dfa71a3236b7af656013e1e49
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Test: 'Test',
    appointment: 'appointment',
    appointment_states: 'appointment_states',
    business: 'business',
    conversations: 'conversations',
    doctor: 'doctor',
    messages: 'messages',
    notes: 'notes',
    notifications: 'notifications',
    patient: 'patient',
    payment_method: 'payment_method'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "test" | "appointment" | "appointment_states" | "business" | "conversations" | "doctor" | "messages" | "notes" | "notifications" | "patient" | "payment_method"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Test: {
        payload: Prisma.$TestPayload<ExtArgs>
        fields: Prisma.TestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload>
          }
          findFirst: {
            args: Prisma.TestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload>
          }
          findMany: {
            args: Prisma.TestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload>[]
          }
          create: {
            args: Prisma.TestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload>
          }
          createMany: {
            args: Prisma.TestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload>[]
          }
          delete: {
            args: Prisma.TestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload>
          }
          update: {
            args: Prisma.TestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload>
          }
          deleteMany: {
            args: Prisma.TestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload>[]
          }
          upsert: {
            args: Prisma.TestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload>
          }
          aggregate: {
            args: Prisma.TestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTest>
          }
          groupBy: {
            args: Prisma.TestGroupByArgs<ExtArgs>
            result: $Utils.Optional<TestGroupByOutputType>[]
          }
          count: {
            args: Prisma.TestCountArgs<ExtArgs>
            result: $Utils.Optional<TestCountAggregateOutputType> | number
          }
        }
      }
      appointment: {
        payload: Prisma.$appointmentPayload<ExtArgs>
        fields: Prisma.appointmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.appointmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$appointmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.appointmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$appointmentPayload>
          }
          findFirst: {
            args: Prisma.appointmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$appointmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.appointmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$appointmentPayload>
          }
          findMany: {
            args: Prisma.appointmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$appointmentPayload>[]
          }
          create: {
            args: Prisma.appointmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$appointmentPayload>
          }
          createMany: {
            args: Prisma.appointmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.appointmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$appointmentPayload>[]
          }
          delete: {
            args: Prisma.appointmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$appointmentPayload>
          }
          update: {
            args: Prisma.appointmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$appointmentPayload>
          }
          deleteMany: {
            args: Prisma.appointmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.appointmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.appointmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$appointmentPayload>[]
          }
          upsert: {
            args: Prisma.appointmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$appointmentPayload>
          }
          aggregate: {
            args: Prisma.AppointmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAppointment>
          }
          groupBy: {
            args: Prisma.appointmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AppointmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.appointmentCountArgs<ExtArgs>
            result: $Utils.Optional<AppointmentCountAggregateOutputType> | number
          }
        }
      }
      appointment_states: {
        payload: Prisma.$appointment_statesPayload<ExtArgs>
        fields: Prisma.appointment_statesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.appointment_statesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$appointment_statesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.appointment_statesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$appointment_statesPayload>
          }
          findFirst: {
            args: Prisma.appointment_statesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$appointment_statesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.appointment_statesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$appointment_statesPayload>
          }
          findMany: {
            args: Prisma.appointment_statesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$appointment_statesPayload>[]
          }
          create: {
            args: Prisma.appointment_statesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$appointment_statesPayload>
          }
          createMany: {
            args: Prisma.appointment_statesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.appointment_statesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$appointment_statesPayload>[]
          }
          delete: {
            args: Prisma.appointment_statesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$appointment_statesPayload>
          }
          update: {
            args: Prisma.appointment_statesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$appointment_statesPayload>
          }
          deleteMany: {
            args: Prisma.appointment_statesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.appointment_statesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.appointment_statesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$appointment_statesPayload>[]
          }
          upsert: {
            args: Prisma.appointment_statesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$appointment_statesPayload>
          }
          aggregate: {
            args: Prisma.Appointment_statesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAppointment_states>
          }
          groupBy: {
            args: Prisma.appointment_statesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Appointment_statesGroupByOutputType>[]
          }
          count: {
            args: Prisma.appointment_statesCountArgs<ExtArgs>
            result: $Utils.Optional<Appointment_statesCountAggregateOutputType> | number
          }
        }
      }
      business: {
        payload: Prisma.$businessPayload<ExtArgs>
        fields: Prisma.businessFieldRefs
        operations: {
          findUnique: {
            args: Prisma.businessFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$businessPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.businessFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$businessPayload>
          }
          findFirst: {
            args: Prisma.businessFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$businessPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.businessFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$businessPayload>
          }
          findMany: {
            args: Prisma.businessFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$businessPayload>[]
          }
          create: {
            args: Prisma.businessCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$businessPayload>
          }
          createMany: {
            args: Prisma.businessCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.businessCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$businessPayload>[]
          }
          delete: {
            args: Prisma.businessDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$businessPayload>
          }
          update: {
            args: Prisma.businessUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$businessPayload>
          }
          deleteMany: {
            args: Prisma.businessDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.businessUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.businessUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$businessPayload>[]
          }
          upsert: {
            args: Prisma.businessUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$businessPayload>
          }
          aggregate: {
            args: Prisma.BusinessAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBusiness>
          }
          groupBy: {
            args: Prisma.businessGroupByArgs<ExtArgs>
            result: $Utils.Optional<BusinessGroupByOutputType>[]
          }
          count: {
            args: Prisma.businessCountArgs<ExtArgs>
            result: $Utils.Optional<BusinessCountAggregateOutputType> | number
          }
        }
      }
      conversations: {
        payload: Prisma.$conversationsPayload<ExtArgs>
        fields: Prisma.conversationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.conversationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$conversationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.conversationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$conversationsPayload>
          }
          findFirst: {
            args: Prisma.conversationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$conversationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.conversationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$conversationsPayload>
          }
          findMany: {
            args: Prisma.conversationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$conversationsPayload>[]
          }
          create: {
            args: Prisma.conversationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$conversationsPayload>
          }
          createMany: {
            args: Prisma.conversationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.conversationsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$conversationsPayload>[]
          }
          delete: {
            args: Prisma.conversationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$conversationsPayload>
          }
          update: {
            args: Prisma.conversationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$conversationsPayload>
          }
          deleteMany: {
            args: Prisma.conversationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.conversationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.conversationsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$conversationsPayload>[]
          }
          upsert: {
            args: Prisma.conversationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$conversationsPayload>
          }
          aggregate: {
            args: Prisma.ConversationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConversations>
          }
          groupBy: {
            args: Prisma.conversationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConversationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.conversationsCountArgs<ExtArgs>
            result: $Utils.Optional<ConversationsCountAggregateOutputType> | number
          }
        }
      }
      doctor: {
        payload: Prisma.$doctorPayload<ExtArgs>
        fields: Prisma.doctorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.doctorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$doctorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.doctorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$doctorPayload>
          }
          findFirst: {
            args: Prisma.doctorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$doctorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.doctorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$doctorPayload>
          }
          findMany: {
            args: Prisma.doctorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$doctorPayload>[]
          }
          create: {
            args: Prisma.doctorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$doctorPayload>
          }
          createMany: {
            args: Prisma.doctorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.doctorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$doctorPayload>[]
          }
          delete: {
            args: Prisma.doctorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$doctorPayload>
          }
          update: {
            args: Prisma.doctorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$doctorPayload>
          }
          deleteMany: {
            args: Prisma.doctorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.doctorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.doctorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$doctorPayload>[]
          }
          upsert: {
            args: Prisma.doctorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$doctorPayload>
          }
          aggregate: {
            args: Prisma.DoctorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDoctor>
          }
          groupBy: {
            args: Prisma.doctorGroupByArgs<ExtArgs>
            result: $Utils.Optional<DoctorGroupByOutputType>[]
          }
          count: {
            args: Prisma.doctorCountArgs<ExtArgs>
            result: $Utils.Optional<DoctorCountAggregateOutputType> | number
          }
        }
      }
      messages: {
        payload: Prisma.$messagesPayload<ExtArgs>
        fields: Prisma.messagesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.messagesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.messagesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>
          }
          findFirst: {
            args: Prisma.messagesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.messagesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>
          }
          findMany: {
            args: Prisma.messagesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>[]
          }
          create: {
            args: Prisma.messagesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>
          }
          createMany: {
            args: Prisma.messagesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.messagesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>[]
          }
          delete: {
            args: Prisma.messagesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>
          }
          update: {
            args: Prisma.messagesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>
          }
          deleteMany: {
            args: Prisma.messagesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.messagesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.messagesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>[]
          }
          upsert: {
            args: Prisma.messagesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>
          }
          aggregate: {
            args: Prisma.MessagesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessages>
          }
          groupBy: {
            args: Prisma.messagesGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessagesGroupByOutputType>[]
          }
          count: {
            args: Prisma.messagesCountArgs<ExtArgs>
            result: $Utils.Optional<MessagesCountAggregateOutputType> | number
          }
        }
      }
      notes: {
        payload: Prisma.$notesPayload<ExtArgs>
        fields: Prisma.notesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.notesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.notesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notesPayload>
          }
          findFirst: {
            args: Prisma.notesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.notesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notesPayload>
          }
          findMany: {
            args: Prisma.notesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notesPayload>[]
          }
          create: {
            args: Prisma.notesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notesPayload>
          }
          createMany: {
            args: Prisma.notesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.notesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notesPayload>[]
          }
          delete: {
            args: Prisma.notesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notesPayload>
          }
          update: {
            args: Prisma.notesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notesPayload>
          }
          deleteMany: {
            args: Prisma.notesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.notesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.notesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notesPayload>[]
          }
          upsert: {
            args: Prisma.notesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notesPayload>
          }
          aggregate: {
            args: Prisma.NotesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotes>
          }
          groupBy: {
            args: Prisma.notesGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotesGroupByOutputType>[]
          }
          count: {
            args: Prisma.notesCountArgs<ExtArgs>
            result: $Utils.Optional<NotesCountAggregateOutputType> | number
          }
        }
      }
      notifications: {
        payload: Prisma.$notificationsPayload<ExtArgs>
        fields: Prisma.notificationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.notificationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.notificationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>
          }
          findFirst: {
            args: Prisma.notificationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.notificationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>
          }
          findMany: {
            args: Prisma.notificationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>[]
          }
          create: {
            args: Prisma.notificationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>
          }
          createMany: {
            args: Prisma.notificationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.notificationsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>[]
          }
          delete: {
            args: Prisma.notificationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>
          }
          update: {
            args: Prisma.notificationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>
          }
          deleteMany: {
            args: Prisma.notificationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.notificationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.notificationsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>[]
          }
          upsert: {
            args: Prisma.notificationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>
          }
          aggregate: {
            args: Prisma.NotificationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotifications>
          }
          groupBy: {
            args: Prisma.notificationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.notificationsCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationsCountAggregateOutputType> | number
          }
        }
      }
      patient: {
        payload: Prisma.$patientPayload<ExtArgs>
        fields: Prisma.patientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.patientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$patientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.patientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$patientPayload>
          }
          findFirst: {
            args: Prisma.patientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$patientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.patientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$patientPayload>
          }
          findMany: {
            args: Prisma.patientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$patientPayload>[]
          }
          create: {
            args: Prisma.patientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$patientPayload>
          }
          createMany: {
            args: Prisma.patientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.patientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$patientPayload>[]
          }
          delete: {
            args: Prisma.patientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$patientPayload>
          }
          update: {
            args: Prisma.patientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$patientPayload>
          }
          deleteMany: {
            args: Prisma.patientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.patientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.patientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$patientPayload>[]
          }
          upsert: {
            args: Prisma.patientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$patientPayload>
          }
          aggregate: {
            args: Prisma.PatientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePatient>
          }
          groupBy: {
            args: Prisma.patientGroupByArgs<ExtArgs>
            result: $Utils.Optional<PatientGroupByOutputType>[]
          }
          count: {
            args: Prisma.patientCountArgs<ExtArgs>
            result: $Utils.Optional<PatientCountAggregateOutputType> | number
          }
        }
      }
      payment_method: {
        payload: Prisma.$payment_methodPayload<ExtArgs>
        fields: Prisma.payment_methodFieldRefs
        operations: {
          findUnique: {
            args: Prisma.payment_methodFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$payment_methodPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.payment_methodFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$payment_methodPayload>
          }
          findFirst: {
            args: Prisma.payment_methodFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$payment_methodPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.payment_methodFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$payment_methodPayload>
          }
          findMany: {
            args: Prisma.payment_methodFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$payment_methodPayload>[]
          }
          create: {
            args: Prisma.payment_methodCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$payment_methodPayload>
          }
          createMany: {
            args: Prisma.payment_methodCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.payment_methodCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$payment_methodPayload>[]
          }
          delete: {
            args: Prisma.payment_methodDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$payment_methodPayload>
          }
          update: {
            args: Prisma.payment_methodUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$payment_methodPayload>
          }
          deleteMany: {
            args: Prisma.payment_methodDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.payment_methodUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.payment_methodUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$payment_methodPayload>[]
          }
          upsert: {
            args: Prisma.payment_methodUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$payment_methodPayload>
          }
          aggregate: {
            args: Prisma.Payment_methodAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment_method>
          }
          groupBy: {
            args: Prisma.payment_methodGroupByArgs<ExtArgs>
            result: $Utils.Optional<Payment_methodGroupByOutputType>[]
          }
          count: {
            args: Prisma.payment_methodCountArgs<ExtArgs>
            result: $Utils.Optional<Payment_methodCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    test?: TestOmit
    appointment?: appointmentOmit
    appointment_states?: appointment_statesOmit
    business?: businessOmit
    conversations?: conversationsOmit
    doctor?: doctorOmit
    messages?: messagesOmit
    notes?: notesOmit
    notifications?: notificationsOmit
    patient?: patientOmit
    payment_method?: payment_methodOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type Appointment_statesCountOutputType
   */

  export type Appointment_statesCountOutputType = {
    appointment: number
  }

  export type Appointment_statesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointment?: boolean | Appointment_statesCountOutputTypeCountAppointmentArgs
  }

  // Custom InputTypes
  /**
   * Appointment_statesCountOutputType without action
   */
  export type Appointment_statesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment_statesCountOutputType
     */
    select?: Appointment_statesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Appointment_statesCountOutputType without action
   */
  export type Appointment_statesCountOutputTypeCountAppointmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: appointmentWhereInput
  }


  /**
   * Count Type BusinessCountOutputType
   */

  export type BusinessCountOutputType = {
    conversations: number
    doctor: number
  }

  export type BusinessCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversations?: boolean | BusinessCountOutputTypeCountConversationsArgs
    doctor?: boolean | BusinessCountOutputTypeCountDoctorArgs
  }

  // Custom InputTypes
  /**
   * BusinessCountOutputType without action
   */
  export type BusinessCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessCountOutputType
     */
    select?: BusinessCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BusinessCountOutputType without action
   */
  export type BusinessCountOutputTypeCountConversationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: conversationsWhereInput
  }

  /**
   * BusinessCountOutputType without action
   */
  export type BusinessCountOutputTypeCountDoctorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: doctorWhereInput
  }


  /**
   * Count Type ConversationsCountOutputType
   */

  export type ConversationsCountOutputType = {
    messages: number
  }

  export type ConversationsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | ConversationsCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes
  /**
   * ConversationsCountOutputType without action
   */
  export type ConversationsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationsCountOutputType
     */
    select?: ConversationsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ConversationsCountOutputType without action
   */
  export type ConversationsCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: messagesWhereInput
  }


  /**
   * Count Type DoctorCountOutputType
   */

  export type DoctorCountOutputType = {
    appointment: number
    notes: number
    notifications: number
  }

  export type DoctorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointment?: boolean | DoctorCountOutputTypeCountAppointmentArgs
    notes?: boolean | DoctorCountOutputTypeCountNotesArgs
    notifications?: boolean | DoctorCountOutputTypeCountNotificationsArgs
  }

  // Custom InputTypes
  /**
   * DoctorCountOutputType without action
   */
  export type DoctorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorCountOutputType
     */
    select?: DoctorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DoctorCountOutputType without action
   */
  export type DoctorCountOutputTypeCountAppointmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: appointmentWhereInput
  }

  /**
   * DoctorCountOutputType without action
   */
  export type DoctorCountOutputTypeCountNotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: notesWhereInput
  }

  /**
   * DoctorCountOutputType without action
   */
  export type DoctorCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: notificationsWhereInput
  }


  /**
   * Count Type PatientCountOutputType
   */

  export type PatientCountOutputType = {
    appointment: number
    conversations: number
    messages: number
    notes: number
    notifications: number
  }

  export type PatientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointment?: boolean | PatientCountOutputTypeCountAppointmentArgs
    conversations?: boolean | PatientCountOutputTypeCountConversationsArgs
    messages?: boolean | PatientCountOutputTypeCountMessagesArgs
    notes?: boolean | PatientCountOutputTypeCountNotesArgs
    notifications?: boolean | PatientCountOutputTypeCountNotificationsArgs
  }

  // Custom InputTypes
  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientCountOutputType
     */
    select?: PatientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeCountAppointmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: appointmentWhereInput
  }

  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeCountConversationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: conversationsWhereInput
  }

  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: messagesWhereInput
  }

  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeCountNotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: notesWhereInput
  }

  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: notificationsWhereInput
  }


  /**
   * Count Type Payment_methodCountOutputType
   */

  export type Payment_methodCountOutputType = {
    appointment: number
  }

  export type Payment_methodCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointment?: boolean | Payment_methodCountOutputTypeCountAppointmentArgs
  }

  // Custom InputTypes
  /**
   * Payment_methodCountOutputType without action
   */
  export type Payment_methodCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment_methodCountOutputType
     */
    select?: Payment_methodCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Payment_methodCountOutputType without action
   */
  export type Payment_methodCountOutputTypeCountAppointmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: appointmentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Test
   */

  export type AggregateTest = {
    _count: TestCountAggregateOutputType | null
    _avg: TestAvgAggregateOutputType | null
    _sum: TestSumAggregateOutputType | null
    _min: TestMinAggregateOutputType | null
    _max: TestMaxAggregateOutputType | null
  }

  export type TestAvgAggregateOutputType = {
    id: number | null
  }

  export type TestSumAggregateOutputType = {
    id: number | null
  }

  export type TestMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type TestMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type TestCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type TestAvgAggregateInputType = {
    id?: true
  }

  export type TestSumAggregateInputType = {
    id?: true
  }

  export type TestMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type TestMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type TestCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type TestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Test to aggregate.
     */
    where?: TestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tests to fetch.
     */
    orderBy?: TestOrderByWithRelationInput | TestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tests
    **/
    _count?: true | TestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TestMaxAggregateInputType
  }

  export type GetTestAggregateType<T extends TestAggregateArgs> = {
        [P in keyof T & keyof AggregateTest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTest[P]>
      : GetScalarType<T[P], AggregateTest[P]>
  }




  export type TestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestWhereInput
    orderBy?: TestOrderByWithAggregationInput | TestOrderByWithAggregationInput[]
    by: TestScalarFieldEnum[] | TestScalarFieldEnum
    having?: TestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TestCountAggregateInputType | true
    _avg?: TestAvgAggregateInputType
    _sum?: TestSumAggregateInputType
    _min?: TestMinAggregateInputType
    _max?: TestMaxAggregateInputType
  }

  export type TestGroupByOutputType = {
    id: number
    name: string
    _count: TestCountAggregateOutputType | null
    _avg: TestAvgAggregateOutputType | null
    _sum: TestSumAggregateOutputType | null
    _min: TestMinAggregateOutputType | null
    _max: TestMaxAggregateOutputType | null
  }

  type GetTestGroupByPayload<T extends TestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TestGroupByOutputType[P]>
            : GetScalarType<T[P], TestGroupByOutputType[P]>
        }
      >
    >


  export type TestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["test"]>

  export type TestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["test"]>

  export type TestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["test"]>

  export type TestSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type TestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["test"]>

  export type $TestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Test"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["test"]>
    composites: {}
  }

  type TestGetPayload<S extends boolean | null | undefined | TestDefaultArgs> = $Result.GetResult<Prisma.$TestPayload, S>

  type TestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TestCountAggregateInputType | true
    }

  export interface TestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Test'], meta: { name: 'Test' } }
    /**
     * Find zero or one Test that matches the filter.
     * @param {TestFindUniqueArgs} args - Arguments to find a Test
     * @example
     * // Get one Test
     * const test = await prisma.test.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TestFindUniqueArgs>(args: SelectSubset<T, TestFindUniqueArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Test that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TestFindUniqueOrThrowArgs} args - Arguments to find a Test
     * @example
     * // Get one Test
     * const test = await prisma.test.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TestFindUniqueOrThrowArgs>(args: SelectSubset<T, TestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Test that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestFindFirstArgs} args - Arguments to find a Test
     * @example
     * // Get one Test
     * const test = await prisma.test.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TestFindFirstArgs>(args?: SelectSubset<T, TestFindFirstArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Test that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestFindFirstOrThrowArgs} args - Arguments to find a Test
     * @example
     * // Get one Test
     * const test = await prisma.test.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TestFindFirstOrThrowArgs>(args?: SelectSubset<T, TestFindFirstOrThrowArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tests
     * const tests = await prisma.test.findMany()
     * 
     * // Get first 10 Tests
     * const tests = await prisma.test.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const testWithIdOnly = await prisma.test.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TestFindManyArgs>(args?: SelectSubset<T, TestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Test.
     * @param {TestCreateArgs} args - Arguments to create a Test.
     * @example
     * // Create one Test
     * const Test = await prisma.test.create({
     *   data: {
     *     // ... data to create a Test
     *   }
     * })
     * 
     */
    create<T extends TestCreateArgs>(args: SelectSubset<T, TestCreateArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tests.
     * @param {TestCreateManyArgs} args - Arguments to create many Tests.
     * @example
     * // Create many Tests
     * const test = await prisma.test.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TestCreateManyArgs>(args?: SelectSubset<T, TestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tests and returns the data saved in the database.
     * @param {TestCreateManyAndReturnArgs} args - Arguments to create many Tests.
     * @example
     * // Create many Tests
     * const test = await prisma.test.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tests and only return the `id`
     * const testWithIdOnly = await prisma.test.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TestCreateManyAndReturnArgs>(args?: SelectSubset<T, TestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Test.
     * @param {TestDeleteArgs} args - Arguments to delete one Test.
     * @example
     * // Delete one Test
     * const Test = await prisma.test.delete({
     *   where: {
     *     // ... filter to delete one Test
     *   }
     * })
     * 
     */
    delete<T extends TestDeleteArgs>(args: SelectSubset<T, TestDeleteArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Test.
     * @param {TestUpdateArgs} args - Arguments to update one Test.
     * @example
     * // Update one Test
     * const test = await prisma.test.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TestUpdateArgs>(args: SelectSubset<T, TestUpdateArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tests.
     * @param {TestDeleteManyArgs} args - Arguments to filter Tests to delete.
     * @example
     * // Delete a few Tests
     * const { count } = await prisma.test.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TestDeleteManyArgs>(args?: SelectSubset<T, TestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tests
     * const test = await prisma.test.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TestUpdateManyArgs>(args: SelectSubset<T, TestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tests and returns the data updated in the database.
     * @param {TestUpdateManyAndReturnArgs} args - Arguments to update many Tests.
     * @example
     * // Update many Tests
     * const test = await prisma.test.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tests and only return the `id`
     * const testWithIdOnly = await prisma.test.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TestUpdateManyAndReturnArgs>(args: SelectSubset<T, TestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Test.
     * @param {TestUpsertArgs} args - Arguments to update or create a Test.
     * @example
     * // Update or create a Test
     * const test = await prisma.test.upsert({
     *   create: {
     *     // ... data to create a Test
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Test we want to update
     *   }
     * })
     */
    upsert<T extends TestUpsertArgs>(args: SelectSubset<T, TestUpsertArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestCountArgs} args - Arguments to filter Tests to count.
     * @example
     * // Count the number of Tests
     * const count = await prisma.test.count({
     *   where: {
     *     // ... the filter for the Tests we want to count
     *   }
     * })
    **/
    count<T extends TestCountArgs>(
      args?: Subset<T, TestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Test.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TestAggregateArgs>(args: Subset<T, TestAggregateArgs>): Prisma.PrismaPromise<GetTestAggregateType<T>>

    /**
     * Group by Test.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TestGroupByArgs['orderBy'] }
        : { orderBy?: TestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Test model
   */
  readonly fields: TestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Test.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Test model
   */
  interface TestFieldRefs {
    readonly id: FieldRef<"Test", 'Int'>
    readonly name: FieldRef<"Test", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Test findUnique
   */
  export type TestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * Filter, which Test to fetch.
     */
    where: TestWhereUniqueInput
  }

  /**
   * Test findUniqueOrThrow
   */
  export type TestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * Filter, which Test to fetch.
     */
    where: TestWhereUniqueInput
  }

  /**
   * Test findFirst
   */
  export type TestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * Filter, which Test to fetch.
     */
    where?: TestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tests to fetch.
     */
    orderBy?: TestOrderByWithRelationInput | TestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tests.
     */
    cursor?: TestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tests.
     */
    distinct?: TestScalarFieldEnum | TestScalarFieldEnum[]
  }

  /**
   * Test findFirstOrThrow
   */
  export type TestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * Filter, which Test to fetch.
     */
    where?: TestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tests to fetch.
     */
    orderBy?: TestOrderByWithRelationInput | TestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tests.
     */
    cursor?: TestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tests.
     */
    distinct?: TestScalarFieldEnum | TestScalarFieldEnum[]
  }

  /**
   * Test findMany
   */
  export type TestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * Filter, which Tests to fetch.
     */
    where?: TestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tests to fetch.
     */
    orderBy?: TestOrderByWithRelationInput | TestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tests.
     */
    cursor?: TestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tests.
     */
    skip?: number
    distinct?: TestScalarFieldEnum | TestScalarFieldEnum[]
  }

  /**
   * Test create
   */
  export type TestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * The data needed to create a Test.
     */
    data: XOR<TestCreateInput, TestUncheckedCreateInput>
  }

  /**
   * Test createMany
   */
  export type TestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tests.
     */
    data: TestCreateManyInput | TestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Test createManyAndReturn
   */
  export type TestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * The data used to create many Tests.
     */
    data: TestCreateManyInput | TestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Test update
   */
  export type TestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * The data needed to update a Test.
     */
    data: XOR<TestUpdateInput, TestUncheckedUpdateInput>
    /**
     * Choose, which Test to update.
     */
    where: TestWhereUniqueInput
  }

  /**
   * Test updateMany
   */
  export type TestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tests.
     */
    data: XOR<TestUpdateManyMutationInput, TestUncheckedUpdateManyInput>
    /**
     * Filter which Tests to update
     */
    where?: TestWhereInput
    /**
     * Limit how many Tests to update.
     */
    limit?: number
  }

  /**
   * Test updateManyAndReturn
   */
  export type TestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * The data used to update Tests.
     */
    data: XOR<TestUpdateManyMutationInput, TestUncheckedUpdateManyInput>
    /**
     * Filter which Tests to update
     */
    where?: TestWhereInput
    /**
     * Limit how many Tests to update.
     */
    limit?: number
  }

  /**
   * Test upsert
   */
  export type TestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * The filter to search for the Test to update in case it exists.
     */
    where: TestWhereUniqueInput
    /**
     * In case the Test found by the `where` argument doesn't exist, create a new Test with this data.
     */
    create: XOR<TestCreateInput, TestUncheckedCreateInput>
    /**
     * In case the Test was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TestUpdateInput, TestUncheckedUpdateInput>
  }

  /**
   * Test delete
   */
  export type TestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * Filter which Test to delete.
     */
    where: TestWhereUniqueInput
  }

  /**
   * Test deleteMany
   */
  export type TestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tests to delete
     */
    where?: TestWhereInput
    /**
     * Limit how many Tests to delete.
     */
    limit?: number
  }

  /**
   * Test without action
   */
  export type TestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
  }


  /**
   * Model appointment
   */

  export type AggregateAppointment = {
    _count: AppointmentCountAggregateOutputType | null
    _avg: AppointmentAvgAggregateOutputType | null
    _sum: AppointmentSumAggregateOutputType | null
    _min: AppointmentMinAggregateOutputType | null
    _max: AppointmentMaxAggregateOutputType | null
  }

  export type AppointmentAvgAggregateOutputType = {
    id: number | null
    patient_id: number | null
    doctor_id: number | null
    payment_method_id: number | null
    state_id: number | null
  }

  export type AppointmentSumAggregateOutputType = {
    id: bigint | null
    patient_id: bigint | null
    doctor_id: bigint | null
    payment_method_id: bigint | null
    state_id: bigint | null
  }

  export type AppointmentMinAggregateOutputType = {
    id: bigint | null
    patient_id: bigint | null
    doctor_id: bigint | null
    date: Date | null
    ailment: string | null
    area: string | null
    payment_method_id: bigint | null
    state_id: bigint | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type AppointmentMaxAggregateOutputType = {
    id: bigint | null
    patient_id: bigint | null
    doctor_id: bigint | null
    date: Date | null
    ailment: string | null
    area: string | null
    payment_method_id: bigint | null
    state_id: bigint | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type AppointmentCountAggregateOutputType = {
    id: number
    patient_id: number
    doctor_id: number
    date: number
    ailment: number
    area: number
    payment_method_id: number
    state_id: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type AppointmentAvgAggregateInputType = {
    id?: true
    patient_id?: true
    doctor_id?: true
    payment_method_id?: true
    state_id?: true
  }

  export type AppointmentSumAggregateInputType = {
    id?: true
    patient_id?: true
    doctor_id?: true
    payment_method_id?: true
    state_id?: true
  }

  export type AppointmentMinAggregateInputType = {
    id?: true
    patient_id?: true
    doctor_id?: true
    date?: true
    ailment?: true
    area?: true
    payment_method_id?: true
    state_id?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type AppointmentMaxAggregateInputType = {
    id?: true
    patient_id?: true
    doctor_id?: true
    date?: true
    ailment?: true
    area?: true
    payment_method_id?: true
    state_id?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type AppointmentCountAggregateInputType = {
    id?: true
    patient_id?: true
    doctor_id?: true
    date?: true
    ailment?: true
    area?: true
    payment_method_id?: true
    state_id?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type AppointmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which appointment to aggregate.
     */
    where?: appointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of appointments to fetch.
     */
    orderBy?: appointmentOrderByWithRelationInput | appointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: appointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned appointments
    **/
    _count?: true | AppointmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AppointmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AppointmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AppointmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AppointmentMaxAggregateInputType
  }

  export type GetAppointmentAggregateType<T extends AppointmentAggregateArgs> = {
        [P in keyof T & keyof AggregateAppointment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAppointment[P]>
      : GetScalarType<T[P], AggregateAppointment[P]>
  }




  export type appointmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: appointmentWhereInput
    orderBy?: appointmentOrderByWithAggregationInput | appointmentOrderByWithAggregationInput[]
    by: AppointmentScalarFieldEnum[] | AppointmentScalarFieldEnum
    having?: appointmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AppointmentCountAggregateInputType | true
    _avg?: AppointmentAvgAggregateInputType
    _sum?: AppointmentSumAggregateInputType
    _min?: AppointmentMinAggregateInputType
    _max?: AppointmentMaxAggregateInputType
  }

  export type AppointmentGroupByOutputType = {
    id: bigint
    patient_id: bigint | null
    doctor_id: bigint | null
    date: Date
    ailment: string
    area: string | null
    payment_method_id: bigint | null
    state_id: bigint | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    _count: AppointmentCountAggregateOutputType | null
    _avg: AppointmentAvgAggregateOutputType | null
    _sum: AppointmentSumAggregateOutputType | null
    _min: AppointmentMinAggregateOutputType | null
    _max: AppointmentMaxAggregateOutputType | null
  }

  type GetAppointmentGroupByPayload<T extends appointmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AppointmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AppointmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AppointmentGroupByOutputType[P]>
            : GetScalarType<T[P], AppointmentGroupByOutputType[P]>
        }
      >
    >


  export type appointmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patient_id?: boolean
    doctor_id?: boolean
    date?: boolean
    ailment?: boolean
    area?: boolean
    payment_method_id?: boolean
    state_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    doctor?: boolean | appointment$doctorArgs<ExtArgs>
    patient?: boolean | appointment$patientArgs<ExtArgs>
    payment_method?: boolean | appointment$payment_methodArgs<ExtArgs>
    appointment_states?: boolean | appointment$appointment_statesArgs<ExtArgs>
  }, ExtArgs["result"]["appointment"]>

  export type appointmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patient_id?: boolean
    doctor_id?: boolean
    date?: boolean
    ailment?: boolean
    area?: boolean
    payment_method_id?: boolean
    state_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    doctor?: boolean | appointment$doctorArgs<ExtArgs>
    patient?: boolean | appointment$patientArgs<ExtArgs>
    payment_method?: boolean | appointment$payment_methodArgs<ExtArgs>
    appointment_states?: boolean | appointment$appointment_statesArgs<ExtArgs>
  }, ExtArgs["result"]["appointment"]>

  export type appointmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patient_id?: boolean
    doctor_id?: boolean
    date?: boolean
    ailment?: boolean
    area?: boolean
    payment_method_id?: boolean
    state_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    doctor?: boolean | appointment$doctorArgs<ExtArgs>
    patient?: boolean | appointment$patientArgs<ExtArgs>
    payment_method?: boolean | appointment$payment_methodArgs<ExtArgs>
    appointment_states?: boolean | appointment$appointment_statesArgs<ExtArgs>
  }, ExtArgs["result"]["appointment"]>

  export type appointmentSelectScalar = {
    id?: boolean
    patient_id?: boolean
    doctor_id?: boolean
    date?: boolean
    ailment?: boolean
    area?: boolean
    payment_method_id?: boolean
    state_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }

  export type appointmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "patient_id" | "doctor_id" | "date" | "ailment" | "area" | "payment_method_id" | "state_id" | "created_at" | "updated_at" | "deleted_at", ExtArgs["result"]["appointment"]>
  export type appointmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctor?: boolean | appointment$doctorArgs<ExtArgs>
    patient?: boolean | appointment$patientArgs<ExtArgs>
    payment_method?: boolean | appointment$payment_methodArgs<ExtArgs>
    appointment_states?: boolean | appointment$appointment_statesArgs<ExtArgs>
  }
  export type appointmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctor?: boolean | appointment$doctorArgs<ExtArgs>
    patient?: boolean | appointment$patientArgs<ExtArgs>
    payment_method?: boolean | appointment$payment_methodArgs<ExtArgs>
    appointment_states?: boolean | appointment$appointment_statesArgs<ExtArgs>
  }
  export type appointmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctor?: boolean | appointment$doctorArgs<ExtArgs>
    patient?: boolean | appointment$patientArgs<ExtArgs>
    payment_method?: boolean | appointment$payment_methodArgs<ExtArgs>
    appointment_states?: boolean | appointment$appointment_statesArgs<ExtArgs>
  }

  export type $appointmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "appointment"
    objects: {
      doctor: Prisma.$doctorPayload<ExtArgs> | null
      patient: Prisma.$patientPayload<ExtArgs> | null
      payment_method: Prisma.$payment_methodPayload<ExtArgs> | null
      appointment_states: Prisma.$appointment_statesPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      patient_id: bigint | null
      doctor_id: bigint | null
      date: Date
      ailment: string
      area: string | null
      payment_method_id: bigint | null
      state_id: bigint | null
      created_at: Date | null
      updated_at: Date | null
      deleted_at: Date | null
    }, ExtArgs["result"]["appointment"]>
    composites: {}
  }

  type appointmentGetPayload<S extends boolean | null | undefined | appointmentDefaultArgs> = $Result.GetResult<Prisma.$appointmentPayload, S>

  type appointmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<appointmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AppointmentCountAggregateInputType | true
    }

  export interface appointmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['appointment'], meta: { name: 'appointment' } }
    /**
     * Find zero or one Appointment that matches the filter.
     * @param {appointmentFindUniqueArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends appointmentFindUniqueArgs>(args: SelectSubset<T, appointmentFindUniqueArgs<ExtArgs>>): Prisma__appointmentClient<$Result.GetResult<Prisma.$appointmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Appointment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {appointmentFindUniqueOrThrowArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends appointmentFindUniqueOrThrowArgs>(args: SelectSubset<T, appointmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__appointmentClient<$Result.GetResult<Prisma.$appointmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Appointment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {appointmentFindFirstArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends appointmentFindFirstArgs>(args?: SelectSubset<T, appointmentFindFirstArgs<ExtArgs>>): Prisma__appointmentClient<$Result.GetResult<Prisma.$appointmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Appointment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {appointmentFindFirstOrThrowArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends appointmentFindFirstOrThrowArgs>(args?: SelectSubset<T, appointmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__appointmentClient<$Result.GetResult<Prisma.$appointmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Appointments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {appointmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Appointments
     * const appointments = await prisma.appointment.findMany()
     * 
     * // Get first 10 Appointments
     * const appointments = await prisma.appointment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const appointmentWithIdOnly = await prisma.appointment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends appointmentFindManyArgs>(args?: SelectSubset<T, appointmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$appointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Appointment.
     * @param {appointmentCreateArgs} args - Arguments to create a Appointment.
     * @example
     * // Create one Appointment
     * const Appointment = await prisma.appointment.create({
     *   data: {
     *     // ... data to create a Appointment
     *   }
     * })
     * 
     */
    create<T extends appointmentCreateArgs>(args: SelectSubset<T, appointmentCreateArgs<ExtArgs>>): Prisma__appointmentClient<$Result.GetResult<Prisma.$appointmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Appointments.
     * @param {appointmentCreateManyArgs} args - Arguments to create many Appointments.
     * @example
     * // Create many Appointments
     * const appointment = await prisma.appointment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends appointmentCreateManyArgs>(args?: SelectSubset<T, appointmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Appointments and returns the data saved in the database.
     * @param {appointmentCreateManyAndReturnArgs} args - Arguments to create many Appointments.
     * @example
     * // Create many Appointments
     * const appointment = await prisma.appointment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Appointments and only return the `id`
     * const appointmentWithIdOnly = await prisma.appointment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends appointmentCreateManyAndReturnArgs>(args?: SelectSubset<T, appointmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$appointmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Appointment.
     * @param {appointmentDeleteArgs} args - Arguments to delete one Appointment.
     * @example
     * // Delete one Appointment
     * const Appointment = await prisma.appointment.delete({
     *   where: {
     *     // ... filter to delete one Appointment
     *   }
     * })
     * 
     */
    delete<T extends appointmentDeleteArgs>(args: SelectSubset<T, appointmentDeleteArgs<ExtArgs>>): Prisma__appointmentClient<$Result.GetResult<Prisma.$appointmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Appointment.
     * @param {appointmentUpdateArgs} args - Arguments to update one Appointment.
     * @example
     * // Update one Appointment
     * const appointment = await prisma.appointment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends appointmentUpdateArgs>(args: SelectSubset<T, appointmentUpdateArgs<ExtArgs>>): Prisma__appointmentClient<$Result.GetResult<Prisma.$appointmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Appointments.
     * @param {appointmentDeleteManyArgs} args - Arguments to filter Appointments to delete.
     * @example
     * // Delete a few Appointments
     * const { count } = await prisma.appointment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends appointmentDeleteManyArgs>(args?: SelectSubset<T, appointmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {appointmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Appointments
     * const appointment = await prisma.appointment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends appointmentUpdateManyArgs>(args: SelectSubset<T, appointmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Appointments and returns the data updated in the database.
     * @param {appointmentUpdateManyAndReturnArgs} args - Arguments to update many Appointments.
     * @example
     * // Update many Appointments
     * const appointment = await prisma.appointment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Appointments and only return the `id`
     * const appointmentWithIdOnly = await prisma.appointment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends appointmentUpdateManyAndReturnArgs>(args: SelectSubset<T, appointmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$appointmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Appointment.
     * @param {appointmentUpsertArgs} args - Arguments to update or create a Appointment.
     * @example
     * // Update or create a Appointment
     * const appointment = await prisma.appointment.upsert({
     *   create: {
     *     // ... data to create a Appointment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Appointment we want to update
     *   }
     * })
     */
    upsert<T extends appointmentUpsertArgs>(args: SelectSubset<T, appointmentUpsertArgs<ExtArgs>>): Prisma__appointmentClient<$Result.GetResult<Prisma.$appointmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {appointmentCountArgs} args - Arguments to filter Appointments to count.
     * @example
     * // Count the number of Appointments
     * const count = await prisma.appointment.count({
     *   where: {
     *     // ... the filter for the Appointments we want to count
     *   }
     * })
    **/
    count<T extends appointmentCountArgs>(
      args?: Subset<T, appointmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppointmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Appointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AppointmentAggregateArgs>(args: Subset<T, AppointmentAggregateArgs>): Prisma.PrismaPromise<GetAppointmentAggregateType<T>>

    /**
     * Group by Appointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {appointmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends appointmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: appointmentGroupByArgs['orderBy'] }
        : { orderBy?: appointmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, appointmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppointmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the appointment model
   */
  readonly fields: appointmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for appointment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__appointmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    doctor<T extends appointment$doctorArgs<ExtArgs> = {}>(args?: Subset<T, appointment$doctorArgs<ExtArgs>>): Prisma__doctorClient<$Result.GetResult<Prisma.$doctorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    patient<T extends appointment$patientArgs<ExtArgs> = {}>(args?: Subset<T, appointment$patientArgs<ExtArgs>>): Prisma__patientClient<$Result.GetResult<Prisma.$patientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    payment_method<T extends appointment$payment_methodArgs<ExtArgs> = {}>(args?: Subset<T, appointment$payment_methodArgs<ExtArgs>>): Prisma__payment_methodClient<$Result.GetResult<Prisma.$payment_methodPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    appointment_states<T extends appointment$appointment_statesArgs<ExtArgs> = {}>(args?: Subset<T, appointment$appointment_statesArgs<ExtArgs>>): Prisma__appointment_statesClient<$Result.GetResult<Prisma.$appointment_statesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the appointment model
   */
  interface appointmentFieldRefs {
    readonly id: FieldRef<"appointment", 'BigInt'>
    readonly patient_id: FieldRef<"appointment", 'BigInt'>
    readonly doctor_id: FieldRef<"appointment", 'BigInt'>
    readonly date: FieldRef<"appointment", 'DateTime'>
    readonly ailment: FieldRef<"appointment", 'String'>
    readonly area: FieldRef<"appointment", 'String'>
    readonly payment_method_id: FieldRef<"appointment", 'BigInt'>
    readonly state_id: FieldRef<"appointment", 'BigInt'>
    readonly created_at: FieldRef<"appointment", 'DateTime'>
    readonly updated_at: FieldRef<"appointment", 'DateTime'>
    readonly deleted_at: FieldRef<"appointment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * appointment findUnique
   */
  export type appointmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment
     */
    select?: appointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the appointment
     */
    omit?: appointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: appointmentInclude<ExtArgs> | null
    /**
     * Filter, which appointment to fetch.
     */
    where: appointmentWhereUniqueInput
  }

  /**
   * appointment findUniqueOrThrow
   */
  export type appointmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment
     */
    select?: appointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the appointment
     */
    omit?: appointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: appointmentInclude<ExtArgs> | null
    /**
     * Filter, which appointment to fetch.
     */
    where: appointmentWhereUniqueInput
  }

  /**
   * appointment findFirst
   */
  export type appointmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment
     */
    select?: appointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the appointment
     */
    omit?: appointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: appointmentInclude<ExtArgs> | null
    /**
     * Filter, which appointment to fetch.
     */
    where?: appointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of appointments to fetch.
     */
    orderBy?: appointmentOrderByWithRelationInput | appointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for appointments.
     */
    cursor?: appointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of appointments.
     */
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * appointment findFirstOrThrow
   */
  export type appointmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment
     */
    select?: appointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the appointment
     */
    omit?: appointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: appointmentInclude<ExtArgs> | null
    /**
     * Filter, which appointment to fetch.
     */
    where?: appointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of appointments to fetch.
     */
    orderBy?: appointmentOrderByWithRelationInput | appointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for appointments.
     */
    cursor?: appointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of appointments.
     */
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * appointment findMany
   */
  export type appointmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment
     */
    select?: appointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the appointment
     */
    omit?: appointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: appointmentInclude<ExtArgs> | null
    /**
     * Filter, which appointments to fetch.
     */
    where?: appointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of appointments to fetch.
     */
    orderBy?: appointmentOrderByWithRelationInput | appointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing appointments.
     */
    cursor?: appointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` appointments.
     */
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * appointment create
   */
  export type appointmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment
     */
    select?: appointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the appointment
     */
    omit?: appointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: appointmentInclude<ExtArgs> | null
    /**
     * The data needed to create a appointment.
     */
    data: XOR<appointmentCreateInput, appointmentUncheckedCreateInput>
  }

  /**
   * appointment createMany
   */
  export type appointmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many appointments.
     */
    data: appointmentCreateManyInput | appointmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * appointment createManyAndReturn
   */
  export type appointmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment
     */
    select?: appointmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the appointment
     */
    omit?: appointmentOmit<ExtArgs> | null
    /**
     * The data used to create many appointments.
     */
    data: appointmentCreateManyInput | appointmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: appointmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * appointment update
   */
  export type appointmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment
     */
    select?: appointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the appointment
     */
    omit?: appointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: appointmentInclude<ExtArgs> | null
    /**
     * The data needed to update a appointment.
     */
    data: XOR<appointmentUpdateInput, appointmentUncheckedUpdateInput>
    /**
     * Choose, which appointment to update.
     */
    where: appointmentWhereUniqueInput
  }

  /**
   * appointment updateMany
   */
  export type appointmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update appointments.
     */
    data: XOR<appointmentUpdateManyMutationInput, appointmentUncheckedUpdateManyInput>
    /**
     * Filter which appointments to update
     */
    where?: appointmentWhereInput
    /**
     * Limit how many appointments to update.
     */
    limit?: number
  }

  /**
   * appointment updateManyAndReturn
   */
  export type appointmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment
     */
    select?: appointmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the appointment
     */
    omit?: appointmentOmit<ExtArgs> | null
    /**
     * The data used to update appointments.
     */
    data: XOR<appointmentUpdateManyMutationInput, appointmentUncheckedUpdateManyInput>
    /**
     * Filter which appointments to update
     */
    where?: appointmentWhereInput
    /**
     * Limit how many appointments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: appointmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * appointment upsert
   */
  export type appointmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment
     */
    select?: appointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the appointment
     */
    omit?: appointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: appointmentInclude<ExtArgs> | null
    /**
     * The filter to search for the appointment to update in case it exists.
     */
    where: appointmentWhereUniqueInput
    /**
     * In case the appointment found by the `where` argument doesn't exist, create a new appointment with this data.
     */
    create: XOR<appointmentCreateInput, appointmentUncheckedCreateInput>
    /**
     * In case the appointment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<appointmentUpdateInput, appointmentUncheckedUpdateInput>
  }

  /**
   * appointment delete
   */
  export type appointmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment
     */
    select?: appointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the appointment
     */
    omit?: appointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: appointmentInclude<ExtArgs> | null
    /**
     * Filter which appointment to delete.
     */
    where: appointmentWhereUniqueInput
  }

  /**
   * appointment deleteMany
   */
  export type appointmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which appointments to delete
     */
    where?: appointmentWhereInput
    /**
     * Limit how many appointments to delete.
     */
    limit?: number
  }

  /**
   * appointment.doctor
   */
  export type appointment$doctorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctor
     */
    select?: doctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the doctor
     */
    omit?: doctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: doctorInclude<ExtArgs> | null
    where?: doctorWhereInput
  }

  /**
   * appointment.patient
   */
  export type appointment$patientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient
     */
    select?: patientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the patient
     */
    omit?: patientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patientInclude<ExtArgs> | null
    where?: patientWhereInput
  }

  /**
   * appointment.payment_method
   */
  export type appointment$payment_methodArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_method
     */
    select?: payment_methodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment_method
     */
    omit?: payment_methodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: payment_methodInclude<ExtArgs> | null
    where?: payment_methodWhereInput
  }

  /**
   * appointment.appointment_states
   */
  export type appointment$appointment_statesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment_states
     */
    select?: appointment_statesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the appointment_states
     */
    omit?: appointment_statesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: appointment_statesInclude<ExtArgs> | null
    where?: appointment_statesWhereInput
  }

  /**
   * appointment without action
   */
  export type appointmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment
     */
    select?: appointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the appointment
     */
    omit?: appointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: appointmentInclude<ExtArgs> | null
  }


  /**
   * Model appointment_states
   */

  export type AggregateAppointment_states = {
    _count: Appointment_statesCountAggregateOutputType | null
    _avg: Appointment_statesAvgAggregateOutputType | null
    _sum: Appointment_statesSumAggregateOutputType | null
    _min: Appointment_statesMinAggregateOutputType | null
    _max: Appointment_statesMaxAggregateOutputType | null
  }

  export type Appointment_statesAvgAggregateOutputType = {
    id: number | null
  }

  export type Appointment_statesSumAggregateOutputType = {
    id: bigint | null
  }

  export type Appointment_statesMinAggregateOutputType = {
    id: bigint | null
    name: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type Appointment_statesMaxAggregateOutputType = {
    id: bigint | null
    name: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type Appointment_statesCountAggregateOutputType = {
    id: number
    name: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type Appointment_statesAvgAggregateInputType = {
    id?: true
  }

  export type Appointment_statesSumAggregateInputType = {
    id?: true
  }

  export type Appointment_statesMinAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type Appointment_statesMaxAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type Appointment_statesCountAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type Appointment_statesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which appointment_states to aggregate.
     */
    where?: appointment_statesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of appointment_states to fetch.
     */
    orderBy?: appointment_statesOrderByWithRelationInput | appointment_statesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: appointment_statesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` appointment_states from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` appointment_states.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned appointment_states
    **/
    _count?: true | Appointment_statesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Appointment_statesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Appointment_statesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Appointment_statesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Appointment_statesMaxAggregateInputType
  }

  export type GetAppointment_statesAggregateType<T extends Appointment_statesAggregateArgs> = {
        [P in keyof T & keyof AggregateAppointment_states]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAppointment_states[P]>
      : GetScalarType<T[P], AggregateAppointment_states[P]>
  }




  export type appointment_statesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: appointment_statesWhereInput
    orderBy?: appointment_statesOrderByWithAggregationInput | appointment_statesOrderByWithAggregationInput[]
    by: Appointment_statesScalarFieldEnum[] | Appointment_statesScalarFieldEnum
    having?: appointment_statesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Appointment_statesCountAggregateInputType | true
    _avg?: Appointment_statesAvgAggregateInputType
    _sum?: Appointment_statesSumAggregateInputType
    _min?: Appointment_statesMinAggregateInputType
    _max?: Appointment_statesMaxAggregateInputType
  }

  export type Appointment_statesGroupByOutputType = {
    id: bigint
    name: string
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    _count: Appointment_statesCountAggregateOutputType | null
    _avg: Appointment_statesAvgAggregateOutputType | null
    _sum: Appointment_statesSumAggregateOutputType | null
    _min: Appointment_statesMinAggregateOutputType | null
    _max: Appointment_statesMaxAggregateOutputType | null
  }

  type GetAppointment_statesGroupByPayload<T extends appointment_statesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Appointment_statesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Appointment_statesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Appointment_statesGroupByOutputType[P]>
            : GetScalarType<T[P], Appointment_statesGroupByOutputType[P]>
        }
      >
    >


  export type appointment_statesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    appointment?: boolean | appointment_states$appointmentArgs<ExtArgs>
    _count?: boolean | Appointment_statesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointment_states"]>

  export type appointment_statesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }, ExtArgs["result"]["appointment_states"]>

  export type appointment_statesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }, ExtArgs["result"]["appointment_states"]>

  export type appointment_statesSelectScalar = {
    id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }

  export type appointment_statesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "created_at" | "updated_at" | "deleted_at", ExtArgs["result"]["appointment_states"]>
  export type appointment_statesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointment?: boolean | appointment_states$appointmentArgs<ExtArgs>
    _count?: boolean | Appointment_statesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type appointment_statesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type appointment_statesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $appointment_statesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "appointment_states"
    objects: {
      appointment: Prisma.$appointmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      name: string
      created_at: Date | null
      updated_at: Date | null
      deleted_at: Date | null
    }, ExtArgs["result"]["appointment_states"]>
    composites: {}
  }

  type appointment_statesGetPayload<S extends boolean | null | undefined | appointment_statesDefaultArgs> = $Result.GetResult<Prisma.$appointment_statesPayload, S>

  type appointment_statesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<appointment_statesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Appointment_statesCountAggregateInputType | true
    }

  export interface appointment_statesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['appointment_states'], meta: { name: 'appointment_states' } }
    /**
     * Find zero or one Appointment_states that matches the filter.
     * @param {appointment_statesFindUniqueArgs} args - Arguments to find a Appointment_states
     * @example
     * // Get one Appointment_states
     * const appointment_states = await prisma.appointment_states.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends appointment_statesFindUniqueArgs>(args: SelectSubset<T, appointment_statesFindUniqueArgs<ExtArgs>>): Prisma__appointment_statesClient<$Result.GetResult<Prisma.$appointment_statesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Appointment_states that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {appointment_statesFindUniqueOrThrowArgs} args - Arguments to find a Appointment_states
     * @example
     * // Get one Appointment_states
     * const appointment_states = await prisma.appointment_states.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends appointment_statesFindUniqueOrThrowArgs>(args: SelectSubset<T, appointment_statesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__appointment_statesClient<$Result.GetResult<Prisma.$appointment_statesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Appointment_states that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {appointment_statesFindFirstArgs} args - Arguments to find a Appointment_states
     * @example
     * // Get one Appointment_states
     * const appointment_states = await prisma.appointment_states.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends appointment_statesFindFirstArgs>(args?: SelectSubset<T, appointment_statesFindFirstArgs<ExtArgs>>): Prisma__appointment_statesClient<$Result.GetResult<Prisma.$appointment_statesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Appointment_states that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {appointment_statesFindFirstOrThrowArgs} args - Arguments to find a Appointment_states
     * @example
     * // Get one Appointment_states
     * const appointment_states = await prisma.appointment_states.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends appointment_statesFindFirstOrThrowArgs>(args?: SelectSubset<T, appointment_statesFindFirstOrThrowArgs<ExtArgs>>): Prisma__appointment_statesClient<$Result.GetResult<Prisma.$appointment_statesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Appointment_states that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {appointment_statesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Appointment_states
     * const appointment_states = await prisma.appointment_states.findMany()
     * 
     * // Get first 10 Appointment_states
     * const appointment_states = await prisma.appointment_states.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const appointment_statesWithIdOnly = await prisma.appointment_states.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends appointment_statesFindManyArgs>(args?: SelectSubset<T, appointment_statesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$appointment_statesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Appointment_states.
     * @param {appointment_statesCreateArgs} args - Arguments to create a Appointment_states.
     * @example
     * // Create one Appointment_states
     * const Appointment_states = await prisma.appointment_states.create({
     *   data: {
     *     // ... data to create a Appointment_states
     *   }
     * })
     * 
     */
    create<T extends appointment_statesCreateArgs>(args: SelectSubset<T, appointment_statesCreateArgs<ExtArgs>>): Prisma__appointment_statesClient<$Result.GetResult<Prisma.$appointment_statesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Appointment_states.
     * @param {appointment_statesCreateManyArgs} args - Arguments to create many Appointment_states.
     * @example
     * // Create many Appointment_states
     * const appointment_states = await prisma.appointment_states.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends appointment_statesCreateManyArgs>(args?: SelectSubset<T, appointment_statesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Appointment_states and returns the data saved in the database.
     * @param {appointment_statesCreateManyAndReturnArgs} args - Arguments to create many Appointment_states.
     * @example
     * // Create many Appointment_states
     * const appointment_states = await prisma.appointment_states.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Appointment_states and only return the `id`
     * const appointment_statesWithIdOnly = await prisma.appointment_states.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends appointment_statesCreateManyAndReturnArgs>(args?: SelectSubset<T, appointment_statesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$appointment_statesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Appointment_states.
     * @param {appointment_statesDeleteArgs} args - Arguments to delete one Appointment_states.
     * @example
     * // Delete one Appointment_states
     * const Appointment_states = await prisma.appointment_states.delete({
     *   where: {
     *     // ... filter to delete one Appointment_states
     *   }
     * })
     * 
     */
    delete<T extends appointment_statesDeleteArgs>(args: SelectSubset<T, appointment_statesDeleteArgs<ExtArgs>>): Prisma__appointment_statesClient<$Result.GetResult<Prisma.$appointment_statesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Appointment_states.
     * @param {appointment_statesUpdateArgs} args - Arguments to update one Appointment_states.
     * @example
     * // Update one Appointment_states
     * const appointment_states = await prisma.appointment_states.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends appointment_statesUpdateArgs>(args: SelectSubset<T, appointment_statesUpdateArgs<ExtArgs>>): Prisma__appointment_statesClient<$Result.GetResult<Prisma.$appointment_statesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Appointment_states.
     * @param {appointment_statesDeleteManyArgs} args - Arguments to filter Appointment_states to delete.
     * @example
     * // Delete a few Appointment_states
     * const { count } = await prisma.appointment_states.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends appointment_statesDeleteManyArgs>(args?: SelectSubset<T, appointment_statesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Appointment_states.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {appointment_statesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Appointment_states
     * const appointment_states = await prisma.appointment_states.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends appointment_statesUpdateManyArgs>(args: SelectSubset<T, appointment_statesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Appointment_states and returns the data updated in the database.
     * @param {appointment_statesUpdateManyAndReturnArgs} args - Arguments to update many Appointment_states.
     * @example
     * // Update many Appointment_states
     * const appointment_states = await prisma.appointment_states.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Appointment_states and only return the `id`
     * const appointment_statesWithIdOnly = await prisma.appointment_states.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends appointment_statesUpdateManyAndReturnArgs>(args: SelectSubset<T, appointment_statesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$appointment_statesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Appointment_states.
     * @param {appointment_statesUpsertArgs} args - Arguments to update or create a Appointment_states.
     * @example
     * // Update or create a Appointment_states
     * const appointment_states = await prisma.appointment_states.upsert({
     *   create: {
     *     // ... data to create a Appointment_states
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Appointment_states we want to update
     *   }
     * })
     */
    upsert<T extends appointment_statesUpsertArgs>(args: SelectSubset<T, appointment_statesUpsertArgs<ExtArgs>>): Prisma__appointment_statesClient<$Result.GetResult<Prisma.$appointment_statesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Appointment_states.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {appointment_statesCountArgs} args - Arguments to filter Appointment_states to count.
     * @example
     * // Count the number of Appointment_states
     * const count = await prisma.appointment_states.count({
     *   where: {
     *     // ... the filter for the Appointment_states we want to count
     *   }
     * })
    **/
    count<T extends appointment_statesCountArgs>(
      args?: Subset<T, appointment_statesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Appointment_statesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Appointment_states.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Appointment_statesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Appointment_statesAggregateArgs>(args: Subset<T, Appointment_statesAggregateArgs>): Prisma.PrismaPromise<GetAppointment_statesAggregateType<T>>

    /**
     * Group by Appointment_states.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {appointment_statesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends appointment_statesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: appointment_statesGroupByArgs['orderBy'] }
        : { orderBy?: appointment_statesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, appointment_statesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppointment_statesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the appointment_states model
   */
  readonly fields: appointment_statesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for appointment_states.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__appointment_statesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    appointment<T extends appointment_states$appointmentArgs<ExtArgs> = {}>(args?: Subset<T, appointment_states$appointmentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$appointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the appointment_states model
   */
  interface appointment_statesFieldRefs {
    readonly id: FieldRef<"appointment_states", 'BigInt'>
    readonly name: FieldRef<"appointment_states", 'String'>
    readonly created_at: FieldRef<"appointment_states", 'DateTime'>
    readonly updated_at: FieldRef<"appointment_states", 'DateTime'>
    readonly deleted_at: FieldRef<"appointment_states", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * appointment_states findUnique
   */
  export type appointment_statesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment_states
     */
    select?: appointment_statesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the appointment_states
     */
    omit?: appointment_statesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: appointment_statesInclude<ExtArgs> | null
    /**
     * Filter, which appointment_states to fetch.
     */
    where: appointment_statesWhereUniqueInput
  }

  /**
   * appointment_states findUniqueOrThrow
   */
  export type appointment_statesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment_states
     */
    select?: appointment_statesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the appointment_states
     */
    omit?: appointment_statesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: appointment_statesInclude<ExtArgs> | null
    /**
     * Filter, which appointment_states to fetch.
     */
    where: appointment_statesWhereUniqueInput
  }

  /**
   * appointment_states findFirst
   */
  export type appointment_statesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment_states
     */
    select?: appointment_statesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the appointment_states
     */
    omit?: appointment_statesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: appointment_statesInclude<ExtArgs> | null
    /**
     * Filter, which appointment_states to fetch.
     */
    where?: appointment_statesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of appointment_states to fetch.
     */
    orderBy?: appointment_statesOrderByWithRelationInput | appointment_statesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for appointment_states.
     */
    cursor?: appointment_statesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` appointment_states from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` appointment_states.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of appointment_states.
     */
    distinct?: Appointment_statesScalarFieldEnum | Appointment_statesScalarFieldEnum[]
  }

  /**
   * appointment_states findFirstOrThrow
   */
  export type appointment_statesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment_states
     */
    select?: appointment_statesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the appointment_states
     */
    omit?: appointment_statesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: appointment_statesInclude<ExtArgs> | null
    /**
     * Filter, which appointment_states to fetch.
     */
    where?: appointment_statesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of appointment_states to fetch.
     */
    orderBy?: appointment_statesOrderByWithRelationInput | appointment_statesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for appointment_states.
     */
    cursor?: appointment_statesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` appointment_states from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` appointment_states.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of appointment_states.
     */
    distinct?: Appointment_statesScalarFieldEnum | Appointment_statesScalarFieldEnum[]
  }

  /**
   * appointment_states findMany
   */
  export type appointment_statesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment_states
     */
    select?: appointment_statesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the appointment_states
     */
    omit?: appointment_statesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: appointment_statesInclude<ExtArgs> | null
    /**
     * Filter, which appointment_states to fetch.
     */
    where?: appointment_statesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of appointment_states to fetch.
     */
    orderBy?: appointment_statesOrderByWithRelationInput | appointment_statesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing appointment_states.
     */
    cursor?: appointment_statesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` appointment_states from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` appointment_states.
     */
    skip?: number
    distinct?: Appointment_statesScalarFieldEnum | Appointment_statesScalarFieldEnum[]
  }

  /**
   * appointment_states create
   */
  export type appointment_statesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment_states
     */
    select?: appointment_statesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the appointment_states
     */
    omit?: appointment_statesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: appointment_statesInclude<ExtArgs> | null
    /**
     * The data needed to create a appointment_states.
     */
    data: XOR<appointment_statesCreateInput, appointment_statesUncheckedCreateInput>
  }

  /**
   * appointment_states createMany
   */
  export type appointment_statesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many appointment_states.
     */
    data: appointment_statesCreateManyInput | appointment_statesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * appointment_states createManyAndReturn
   */
  export type appointment_statesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment_states
     */
    select?: appointment_statesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the appointment_states
     */
    omit?: appointment_statesOmit<ExtArgs> | null
    /**
     * The data used to create many appointment_states.
     */
    data: appointment_statesCreateManyInput | appointment_statesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * appointment_states update
   */
  export type appointment_statesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment_states
     */
    select?: appointment_statesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the appointment_states
     */
    omit?: appointment_statesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: appointment_statesInclude<ExtArgs> | null
    /**
     * The data needed to update a appointment_states.
     */
    data: XOR<appointment_statesUpdateInput, appointment_statesUncheckedUpdateInput>
    /**
     * Choose, which appointment_states to update.
     */
    where: appointment_statesWhereUniqueInput
  }

  /**
   * appointment_states updateMany
   */
  export type appointment_statesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update appointment_states.
     */
    data: XOR<appointment_statesUpdateManyMutationInput, appointment_statesUncheckedUpdateManyInput>
    /**
     * Filter which appointment_states to update
     */
    where?: appointment_statesWhereInput
    /**
     * Limit how many appointment_states to update.
     */
    limit?: number
  }

  /**
   * appointment_states updateManyAndReturn
   */
  export type appointment_statesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment_states
     */
    select?: appointment_statesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the appointment_states
     */
    omit?: appointment_statesOmit<ExtArgs> | null
    /**
     * The data used to update appointment_states.
     */
    data: XOR<appointment_statesUpdateManyMutationInput, appointment_statesUncheckedUpdateManyInput>
    /**
     * Filter which appointment_states to update
     */
    where?: appointment_statesWhereInput
    /**
     * Limit how many appointment_states to update.
     */
    limit?: number
  }

  /**
   * appointment_states upsert
   */
  export type appointment_statesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment_states
     */
    select?: appointment_statesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the appointment_states
     */
    omit?: appointment_statesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: appointment_statesInclude<ExtArgs> | null
    /**
     * The filter to search for the appointment_states to update in case it exists.
     */
    where: appointment_statesWhereUniqueInput
    /**
     * In case the appointment_states found by the `where` argument doesn't exist, create a new appointment_states with this data.
     */
    create: XOR<appointment_statesCreateInput, appointment_statesUncheckedCreateInput>
    /**
     * In case the appointment_states was found with the provided `where` argument, update it with this data.
     */
    update: XOR<appointment_statesUpdateInput, appointment_statesUncheckedUpdateInput>
  }

  /**
   * appointment_states delete
   */
  export type appointment_statesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment_states
     */
    select?: appointment_statesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the appointment_states
     */
    omit?: appointment_statesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: appointment_statesInclude<ExtArgs> | null
    /**
     * Filter which appointment_states to delete.
     */
    where: appointment_statesWhereUniqueInput
  }

  /**
   * appointment_states deleteMany
   */
  export type appointment_statesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which appointment_states to delete
     */
    where?: appointment_statesWhereInput
    /**
     * Limit how many appointment_states to delete.
     */
    limit?: number
  }

  /**
   * appointment_states.appointment
   */
  export type appointment_states$appointmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment
     */
    select?: appointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the appointment
     */
    omit?: appointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: appointmentInclude<ExtArgs> | null
    where?: appointmentWhereInput
    orderBy?: appointmentOrderByWithRelationInput | appointmentOrderByWithRelationInput[]
    cursor?: appointmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * appointment_states without action
   */
  export type appointment_statesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment_states
     */
    select?: appointment_statesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the appointment_states
     */
    omit?: appointment_statesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: appointment_statesInclude<ExtArgs> | null
  }


  /**
   * Model business
   */

  export type AggregateBusiness = {
    _count: BusinessCountAggregateOutputType | null
    _avg: BusinessAvgAggregateOutputType | null
    _sum: BusinessSumAggregateOutputType | null
    _min: BusinessMinAggregateOutputType | null
    _max: BusinessMaxAggregateOutputType | null
  }

  export type BusinessAvgAggregateOutputType = {
    id: number | null
  }

  export type BusinessSumAggregateOutputType = {
    id: bigint | null
  }

  export type BusinessMinAggregateOutputType = {
    id: bigint | null
    name: string | null
    address: string | null
    hours: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type BusinessMaxAggregateOutputType = {
    id: bigint | null
    name: string | null
    address: string | null
    hours: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type BusinessCountAggregateOutputType = {
    id: number
    name: number
    address: number
    hours: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type BusinessAvgAggregateInputType = {
    id?: true
  }

  export type BusinessSumAggregateInputType = {
    id?: true
  }

  export type BusinessMinAggregateInputType = {
    id?: true
    name?: true
    address?: true
    hours?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type BusinessMaxAggregateInputType = {
    id?: true
    name?: true
    address?: true
    hours?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type BusinessCountAggregateInputType = {
    id?: true
    name?: true
    address?: true
    hours?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type BusinessAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which business to aggregate.
     */
    where?: businessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of businesses to fetch.
     */
    orderBy?: businessOrderByWithRelationInput | businessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: businessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` businesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` businesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned businesses
    **/
    _count?: true | BusinessCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BusinessAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BusinessSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BusinessMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BusinessMaxAggregateInputType
  }

  export type GetBusinessAggregateType<T extends BusinessAggregateArgs> = {
        [P in keyof T & keyof AggregateBusiness]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBusiness[P]>
      : GetScalarType<T[P], AggregateBusiness[P]>
  }




  export type businessGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: businessWhereInput
    orderBy?: businessOrderByWithAggregationInput | businessOrderByWithAggregationInput[]
    by: BusinessScalarFieldEnum[] | BusinessScalarFieldEnum
    having?: businessScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BusinessCountAggregateInputType | true
    _avg?: BusinessAvgAggregateInputType
    _sum?: BusinessSumAggregateInputType
    _min?: BusinessMinAggregateInputType
    _max?: BusinessMaxAggregateInputType
  }

  export type BusinessGroupByOutputType = {
    id: bigint
    name: string
    address: string
    hours: string
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    _count: BusinessCountAggregateOutputType | null
    _avg: BusinessAvgAggregateOutputType | null
    _sum: BusinessSumAggregateOutputType | null
    _min: BusinessMinAggregateOutputType | null
    _max: BusinessMaxAggregateOutputType | null
  }

  type GetBusinessGroupByPayload<T extends businessGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BusinessGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BusinessGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BusinessGroupByOutputType[P]>
            : GetScalarType<T[P], BusinessGroupByOutputType[P]>
        }
      >
    >


  export type businessSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    hours?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    conversations?: boolean | business$conversationsArgs<ExtArgs>
    doctor?: boolean | business$doctorArgs<ExtArgs>
    _count?: boolean | BusinessCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["business"]>

  export type businessSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    hours?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }, ExtArgs["result"]["business"]>

  export type businessSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    hours?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }, ExtArgs["result"]["business"]>

  export type businessSelectScalar = {
    id?: boolean
    name?: boolean
    address?: boolean
    hours?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }

  export type businessOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "address" | "hours" | "created_at" | "updated_at" | "deleted_at", ExtArgs["result"]["business"]>
  export type businessInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversations?: boolean | business$conversationsArgs<ExtArgs>
    doctor?: boolean | business$doctorArgs<ExtArgs>
    _count?: boolean | BusinessCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type businessIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type businessIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $businessPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "business"
    objects: {
      conversations: Prisma.$conversationsPayload<ExtArgs>[]
      doctor: Prisma.$doctorPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      name: string
      address: string
      hours: string
      created_at: Date | null
      updated_at: Date | null
      deleted_at: Date | null
    }, ExtArgs["result"]["business"]>
    composites: {}
  }

  type businessGetPayload<S extends boolean | null | undefined | businessDefaultArgs> = $Result.GetResult<Prisma.$businessPayload, S>

  type businessCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<businessFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BusinessCountAggregateInputType | true
    }

  export interface businessDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['business'], meta: { name: 'business' } }
    /**
     * Find zero or one Business that matches the filter.
     * @param {businessFindUniqueArgs} args - Arguments to find a Business
     * @example
     * // Get one Business
     * const business = await prisma.business.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends businessFindUniqueArgs>(args: SelectSubset<T, businessFindUniqueArgs<ExtArgs>>): Prisma__businessClient<$Result.GetResult<Prisma.$businessPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Business that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {businessFindUniqueOrThrowArgs} args - Arguments to find a Business
     * @example
     * // Get one Business
     * const business = await prisma.business.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends businessFindUniqueOrThrowArgs>(args: SelectSubset<T, businessFindUniqueOrThrowArgs<ExtArgs>>): Prisma__businessClient<$Result.GetResult<Prisma.$businessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Business that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {businessFindFirstArgs} args - Arguments to find a Business
     * @example
     * // Get one Business
     * const business = await prisma.business.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends businessFindFirstArgs>(args?: SelectSubset<T, businessFindFirstArgs<ExtArgs>>): Prisma__businessClient<$Result.GetResult<Prisma.$businessPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Business that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {businessFindFirstOrThrowArgs} args - Arguments to find a Business
     * @example
     * // Get one Business
     * const business = await prisma.business.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends businessFindFirstOrThrowArgs>(args?: SelectSubset<T, businessFindFirstOrThrowArgs<ExtArgs>>): Prisma__businessClient<$Result.GetResult<Prisma.$businessPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Businesses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {businessFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Businesses
     * const businesses = await prisma.business.findMany()
     * 
     * // Get first 10 Businesses
     * const businesses = await prisma.business.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const businessWithIdOnly = await prisma.business.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends businessFindManyArgs>(args?: SelectSubset<T, businessFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$businessPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Business.
     * @param {businessCreateArgs} args - Arguments to create a Business.
     * @example
     * // Create one Business
     * const Business = await prisma.business.create({
     *   data: {
     *     // ... data to create a Business
     *   }
     * })
     * 
     */
    create<T extends businessCreateArgs>(args: SelectSubset<T, businessCreateArgs<ExtArgs>>): Prisma__businessClient<$Result.GetResult<Prisma.$businessPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Businesses.
     * @param {businessCreateManyArgs} args - Arguments to create many Businesses.
     * @example
     * // Create many Businesses
     * const business = await prisma.business.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends businessCreateManyArgs>(args?: SelectSubset<T, businessCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Businesses and returns the data saved in the database.
     * @param {businessCreateManyAndReturnArgs} args - Arguments to create many Businesses.
     * @example
     * // Create many Businesses
     * const business = await prisma.business.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Businesses and only return the `id`
     * const businessWithIdOnly = await prisma.business.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends businessCreateManyAndReturnArgs>(args?: SelectSubset<T, businessCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$businessPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Business.
     * @param {businessDeleteArgs} args - Arguments to delete one Business.
     * @example
     * // Delete one Business
     * const Business = await prisma.business.delete({
     *   where: {
     *     // ... filter to delete one Business
     *   }
     * })
     * 
     */
    delete<T extends businessDeleteArgs>(args: SelectSubset<T, businessDeleteArgs<ExtArgs>>): Prisma__businessClient<$Result.GetResult<Prisma.$businessPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Business.
     * @param {businessUpdateArgs} args - Arguments to update one Business.
     * @example
     * // Update one Business
     * const business = await prisma.business.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends businessUpdateArgs>(args: SelectSubset<T, businessUpdateArgs<ExtArgs>>): Prisma__businessClient<$Result.GetResult<Prisma.$businessPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Businesses.
     * @param {businessDeleteManyArgs} args - Arguments to filter Businesses to delete.
     * @example
     * // Delete a few Businesses
     * const { count } = await prisma.business.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends businessDeleteManyArgs>(args?: SelectSubset<T, businessDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Businesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {businessUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Businesses
     * const business = await prisma.business.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends businessUpdateManyArgs>(args: SelectSubset<T, businessUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Businesses and returns the data updated in the database.
     * @param {businessUpdateManyAndReturnArgs} args - Arguments to update many Businesses.
     * @example
     * // Update many Businesses
     * const business = await prisma.business.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Businesses and only return the `id`
     * const businessWithIdOnly = await prisma.business.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends businessUpdateManyAndReturnArgs>(args: SelectSubset<T, businessUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$businessPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Business.
     * @param {businessUpsertArgs} args - Arguments to update or create a Business.
     * @example
     * // Update or create a Business
     * const business = await prisma.business.upsert({
     *   create: {
     *     // ... data to create a Business
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Business we want to update
     *   }
     * })
     */
    upsert<T extends businessUpsertArgs>(args: SelectSubset<T, businessUpsertArgs<ExtArgs>>): Prisma__businessClient<$Result.GetResult<Prisma.$businessPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Businesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {businessCountArgs} args - Arguments to filter Businesses to count.
     * @example
     * // Count the number of Businesses
     * const count = await prisma.business.count({
     *   where: {
     *     // ... the filter for the Businesses we want to count
     *   }
     * })
    **/
    count<T extends businessCountArgs>(
      args?: Subset<T, businessCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BusinessCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Business.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BusinessAggregateArgs>(args: Subset<T, BusinessAggregateArgs>): Prisma.PrismaPromise<GetBusinessAggregateType<T>>

    /**
     * Group by Business.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {businessGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends businessGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: businessGroupByArgs['orderBy'] }
        : { orderBy?: businessGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, businessGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBusinessGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the business model
   */
  readonly fields: businessFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for business.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__businessClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    conversations<T extends business$conversationsArgs<ExtArgs> = {}>(args?: Subset<T, business$conversationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$conversationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    doctor<T extends business$doctorArgs<ExtArgs> = {}>(args?: Subset<T, business$doctorArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$doctorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the business model
   */
  interface businessFieldRefs {
    readonly id: FieldRef<"business", 'BigInt'>
    readonly name: FieldRef<"business", 'String'>
    readonly address: FieldRef<"business", 'String'>
    readonly hours: FieldRef<"business", 'String'>
    readonly created_at: FieldRef<"business", 'DateTime'>
    readonly updated_at: FieldRef<"business", 'DateTime'>
    readonly deleted_at: FieldRef<"business", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * business findUnique
   */
  export type businessFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the business
     */
    select?: businessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the business
     */
    omit?: businessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: businessInclude<ExtArgs> | null
    /**
     * Filter, which business to fetch.
     */
    where: businessWhereUniqueInput
  }

  /**
   * business findUniqueOrThrow
   */
  export type businessFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the business
     */
    select?: businessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the business
     */
    omit?: businessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: businessInclude<ExtArgs> | null
    /**
     * Filter, which business to fetch.
     */
    where: businessWhereUniqueInput
  }

  /**
   * business findFirst
   */
  export type businessFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the business
     */
    select?: businessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the business
     */
    omit?: businessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: businessInclude<ExtArgs> | null
    /**
     * Filter, which business to fetch.
     */
    where?: businessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of businesses to fetch.
     */
    orderBy?: businessOrderByWithRelationInput | businessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for businesses.
     */
    cursor?: businessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` businesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` businesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of businesses.
     */
    distinct?: BusinessScalarFieldEnum | BusinessScalarFieldEnum[]
  }

  /**
   * business findFirstOrThrow
   */
  export type businessFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the business
     */
    select?: businessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the business
     */
    omit?: businessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: businessInclude<ExtArgs> | null
    /**
     * Filter, which business to fetch.
     */
    where?: businessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of businesses to fetch.
     */
    orderBy?: businessOrderByWithRelationInput | businessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for businesses.
     */
    cursor?: businessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` businesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` businesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of businesses.
     */
    distinct?: BusinessScalarFieldEnum | BusinessScalarFieldEnum[]
  }

  /**
   * business findMany
   */
  export type businessFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the business
     */
    select?: businessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the business
     */
    omit?: businessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: businessInclude<ExtArgs> | null
    /**
     * Filter, which businesses to fetch.
     */
    where?: businessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of businesses to fetch.
     */
    orderBy?: businessOrderByWithRelationInput | businessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing businesses.
     */
    cursor?: businessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` businesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` businesses.
     */
    skip?: number
    distinct?: BusinessScalarFieldEnum | BusinessScalarFieldEnum[]
  }

  /**
   * business create
   */
  export type businessCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the business
     */
    select?: businessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the business
     */
    omit?: businessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: businessInclude<ExtArgs> | null
    /**
     * The data needed to create a business.
     */
    data: XOR<businessCreateInput, businessUncheckedCreateInput>
  }

  /**
   * business createMany
   */
  export type businessCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many businesses.
     */
    data: businessCreateManyInput | businessCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * business createManyAndReturn
   */
  export type businessCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the business
     */
    select?: businessSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the business
     */
    omit?: businessOmit<ExtArgs> | null
    /**
     * The data used to create many businesses.
     */
    data: businessCreateManyInput | businessCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * business update
   */
  export type businessUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the business
     */
    select?: businessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the business
     */
    omit?: businessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: businessInclude<ExtArgs> | null
    /**
     * The data needed to update a business.
     */
    data: XOR<businessUpdateInput, businessUncheckedUpdateInput>
    /**
     * Choose, which business to update.
     */
    where: businessWhereUniqueInput
  }

  /**
   * business updateMany
   */
  export type businessUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update businesses.
     */
    data: XOR<businessUpdateManyMutationInput, businessUncheckedUpdateManyInput>
    /**
     * Filter which businesses to update
     */
    where?: businessWhereInput
    /**
     * Limit how many businesses to update.
     */
    limit?: number
  }

  /**
   * business updateManyAndReturn
   */
  export type businessUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the business
     */
    select?: businessSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the business
     */
    omit?: businessOmit<ExtArgs> | null
    /**
     * The data used to update businesses.
     */
    data: XOR<businessUpdateManyMutationInput, businessUncheckedUpdateManyInput>
    /**
     * Filter which businesses to update
     */
    where?: businessWhereInput
    /**
     * Limit how many businesses to update.
     */
    limit?: number
  }

  /**
   * business upsert
   */
  export type businessUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the business
     */
    select?: businessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the business
     */
    omit?: businessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: businessInclude<ExtArgs> | null
    /**
     * The filter to search for the business to update in case it exists.
     */
    where: businessWhereUniqueInput
    /**
     * In case the business found by the `where` argument doesn't exist, create a new business with this data.
     */
    create: XOR<businessCreateInput, businessUncheckedCreateInput>
    /**
     * In case the business was found with the provided `where` argument, update it with this data.
     */
    update: XOR<businessUpdateInput, businessUncheckedUpdateInput>
  }

  /**
   * business delete
   */
  export type businessDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the business
     */
    select?: businessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the business
     */
    omit?: businessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: businessInclude<ExtArgs> | null
    /**
     * Filter which business to delete.
     */
    where: businessWhereUniqueInput
  }

  /**
   * business deleteMany
   */
  export type businessDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which businesses to delete
     */
    where?: businessWhereInput
    /**
     * Limit how many businesses to delete.
     */
    limit?: number
  }

  /**
   * business.conversations
   */
  export type business$conversationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversations
     */
    select?: conversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conversations
     */
    omit?: conversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conversationsInclude<ExtArgs> | null
    where?: conversationsWhereInput
    orderBy?: conversationsOrderByWithRelationInput | conversationsOrderByWithRelationInput[]
    cursor?: conversationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConversationsScalarFieldEnum | ConversationsScalarFieldEnum[]
  }

  /**
   * business.doctor
   */
  export type business$doctorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctor
     */
    select?: doctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the doctor
     */
    omit?: doctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: doctorInclude<ExtArgs> | null
    where?: doctorWhereInput
    orderBy?: doctorOrderByWithRelationInput | doctorOrderByWithRelationInput[]
    cursor?: doctorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DoctorScalarFieldEnum | DoctorScalarFieldEnum[]
  }

  /**
   * business without action
   */
  export type businessDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the business
     */
    select?: businessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the business
     */
    omit?: businessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: businessInclude<ExtArgs> | null
  }


  /**
   * Model conversations
   */

  export type AggregateConversations = {
    _count: ConversationsCountAggregateOutputType | null
    _avg: ConversationsAvgAggregateOutputType | null
    _sum: ConversationsSumAggregateOutputType | null
    _min: ConversationsMinAggregateOutputType | null
    _max: ConversationsMaxAggregateOutputType | null
  }

  export type ConversationsAvgAggregateOutputType = {
    id: number | null
    patient_id: number | null
    business_id: number | null
  }

  export type ConversationsSumAggregateOutputType = {
    id: bigint | null
    patient_id: bigint | null
    business_id: bigint | null
  }

  export type ConversationsMinAggregateOutputType = {
    id: bigint | null
    patient_id: bigint | null
    business_id: bigint | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type ConversationsMaxAggregateOutputType = {
    id: bigint | null
    patient_id: bigint | null
    business_id: bigint | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type ConversationsCountAggregateOutputType = {
    id: number
    patient_id: number
    business_id: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type ConversationsAvgAggregateInputType = {
    id?: true
    patient_id?: true
    business_id?: true
  }

  export type ConversationsSumAggregateInputType = {
    id?: true
    patient_id?: true
    business_id?: true
  }

  export type ConversationsMinAggregateInputType = {
    id?: true
    patient_id?: true
    business_id?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type ConversationsMaxAggregateInputType = {
    id?: true
    patient_id?: true
    business_id?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type ConversationsCountAggregateInputType = {
    id?: true
    patient_id?: true
    business_id?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type ConversationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which conversations to aggregate.
     */
    where?: conversationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of conversations to fetch.
     */
    orderBy?: conversationsOrderByWithRelationInput | conversationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: conversationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` conversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned conversations
    **/
    _count?: true | ConversationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ConversationsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ConversationsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConversationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConversationsMaxAggregateInputType
  }

  export type GetConversationsAggregateType<T extends ConversationsAggregateArgs> = {
        [P in keyof T & keyof AggregateConversations]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConversations[P]>
      : GetScalarType<T[P], AggregateConversations[P]>
  }




  export type conversationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: conversationsWhereInput
    orderBy?: conversationsOrderByWithAggregationInput | conversationsOrderByWithAggregationInput[]
    by: ConversationsScalarFieldEnum[] | ConversationsScalarFieldEnum
    having?: conversationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConversationsCountAggregateInputType | true
    _avg?: ConversationsAvgAggregateInputType
    _sum?: ConversationsSumAggregateInputType
    _min?: ConversationsMinAggregateInputType
    _max?: ConversationsMaxAggregateInputType
  }

  export type ConversationsGroupByOutputType = {
    id: bigint
    patient_id: bigint | null
    business_id: bigint | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    _count: ConversationsCountAggregateOutputType | null
    _avg: ConversationsAvgAggregateOutputType | null
    _sum: ConversationsSumAggregateOutputType | null
    _min: ConversationsMinAggregateOutputType | null
    _max: ConversationsMaxAggregateOutputType | null
  }

  type GetConversationsGroupByPayload<T extends conversationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConversationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConversationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConversationsGroupByOutputType[P]>
            : GetScalarType<T[P], ConversationsGroupByOutputType[P]>
        }
      >
    >


  export type conversationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patient_id?: boolean
    business_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    business?: boolean | conversations$businessArgs<ExtArgs>
    patient?: boolean | conversations$patientArgs<ExtArgs>
    messages?: boolean | conversations$messagesArgs<ExtArgs>
    _count?: boolean | ConversationsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conversations"]>

  export type conversationsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patient_id?: boolean
    business_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    business?: boolean | conversations$businessArgs<ExtArgs>
    patient?: boolean | conversations$patientArgs<ExtArgs>
  }, ExtArgs["result"]["conversations"]>

  export type conversationsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patient_id?: boolean
    business_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    business?: boolean | conversations$businessArgs<ExtArgs>
    patient?: boolean | conversations$patientArgs<ExtArgs>
  }, ExtArgs["result"]["conversations"]>

  export type conversationsSelectScalar = {
    id?: boolean
    patient_id?: boolean
    business_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }

  export type conversationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "patient_id" | "business_id" | "created_at" | "updated_at" | "deleted_at", ExtArgs["result"]["conversations"]>
  export type conversationsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    business?: boolean | conversations$businessArgs<ExtArgs>
    patient?: boolean | conversations$patientArgs<ExtArgs>
    messages?: boolean | conversations$messagesArgs<ExtArgs>
    _count?: boolean | ConversationsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type conversationsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    business?: boolean | conversations$businessArgs<ExtArgs>
    patient?: boolean | conversations$patientArgs<ExtArgs>
  }
  export type conversationsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    business?: boolean | conversations$businessArgs<ExtArgs>
    patient?: boolean | conversations$patientArgs<ExtArgs>
  }

  export type $conversationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "conversations"
    objects: {
      business: Prisma.$businessPayload<ExtArgs> | null
      patient: Prisma.$patientPayload<ExtArgs> | null
      messages: Prisma.$messagesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      patient_id: bigint | null
      business_id: bigint | null
      created_at: Date | null
      updated_at: Date | null
      deleted_at: Date | null
    }, ExtArgs["result"]["conversations"]>
    composites: {}
  }

  type conversationsGetPayload<S extends boolean | null | undefined | conversationsDefaultArgs> = $Result.GetResult<Prisma.$conversationsPayload, S>

  type conversationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<conversationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConversationsCountAggregateInputType | true
    }

  export interface conversationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['conversations'], meta: { name: 'conversations' } }
    /**
     * Find zero or one Conversations that matches the filter.
     * @param {conversationsFindUniqueArgs} args - Arguments to find a Conversations
     * @example
     * // Get one Conversations
     * const conversations = await prisma.conversations.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends conversationsFindUniqueArgs>(args: SelectSubset<T, conversationsFindUniqueArgs<ExtArgs>>): Prisma__conversationsClient<$Result.GetResult<Prisma.$conversationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Conversations that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {conversationsFindUniqueOrThrowArgs} args - Arguments to find a Conversations
     * @example
     * // Get one Conversations
     * const conversations = await prisma.conversations.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends conversationsFindUniqueOrThrowArgs>(args: SelectSubset<T, conversationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__conversationsClient<$Result.GetResult<Prisma.$conversationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Conversations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {conversationsFindFirstArgs} args - Arguments to find a Conversations
     * @example
     * // Get one Conversations
     * const conversations = await prisma.conversations.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends conversationsFindFirstArgs>(args?: SelectSubset<T, conversationsFindFirstArgs<ExtArgs>>): Prisma__conversationsClient<$Result.GetResult<Prisma.$conversationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Conversations that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {conversationsFindFirstOrThrowArgs} args - Arguments to find a Conversations
     * @example
     * // Get one Conversations
     * const conversations = await prisma.conversations.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends conversationsFindFirstOrThrowArgs>(args?: SelectSubset<T, conversationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__conversationsClient<$Result.GetResult<Prisma.$conversationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Conversations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {conversationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Conversations
     * const conversations = await prisma.conversations.findMany()
     * 
     * // Get first 10 Conversations
     * const conversations = await prisma.conversations.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const conversationsWithIdOnly = await prisma.conversations.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends conversationsFindManyArgs>(args?: SelectSubset<T, conversationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$conversationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Conversations.
     * @param {conversationsCreateArgs} args - Arguments to create a Conversations.
     * @example
     * // Create one Conversations
     * const Conversations = await prisma.conversations.create({
     *   data: {
     *     // ... data to create a Conversations
     *   }
     * })
     * 
     */
    create<T extends conversationsCreateArgs>(args: SelectSubset<T, conversationsCreateArgs<ExtArgs>>): Prisma__conversationsClient<$Result.GetResult<Prisma.$conversationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Conversations.
     * @param {conversationsCreateManyArgs} args - Arguments to create many Conversations.
     * @example
     * // Create many Conversations
     * const conversations = await prisma.conversations.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends conversationsCreateManyArgs>(args?: SelectSubset<T, conversationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Conversations and returns the data saved in the database.
     * @param {conversationsCreateManyAndReturnArgs} args - Arguments to create many Conversations.
     * @example
     * // Create many Conversations
     * const conversations = await prisma.conversations.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Conversations and only return the `id`
     * const conversationsWithIdOnly = await prisma.conversations.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends conversationsCreateManyAndReturnArgs>(args?: SelectSubset<T, conversationsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$conversationsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Conversations.
     * @param {conversationsDeleteArgs} args - Arguments to delete one Conversations.
     * @example
     * // Delete one Conversations
     * const Conversations = await prisma.conversations.delete({
     *   where: {
     *     // ... filter to delete one Conversations
     *   }
     * })
     * 
     */
    delete<T extends conversationsDeleteArgs>(args: SelectSubset<T, conversationsDeleteArgs<ExtArgs>>): Prisma__conversationsClient<$Result.GetResult<Prisma.$conversationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Conversations.
     * @param {conversationsUpdateArgs} args - Arguments to update one Conversations.
     * @example
     * // Update one Conversations
     * const conversations = await prisma.conversations.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends conversationsUpdateArgs>(args: SelectSubset<T, conversationsUpdateArgs<ExtArgs>>): Prisma__conversationsClient<$Result.GetResult<Prisma.$conversationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Conversations.
     * @param {conversationsDeleteManyArgs} args - Arguments to filter Conversations to delete.
     * @example
     * // Delete a few Conversations
     * const { count } = await prisma.conversations.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends conversationsDeleteManyArgs>(args?: SelectSubset<T, conversationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Conversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {conversationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Conversations
     * const conversations = await prisma.conversations.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends conversationsUpdateManyArgs>(args: SelectSubset<T, conversationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Conversations and returns the data updated in the database.
     * @param {conversationsUpdateManyAndReturnArgs} args - Arguments to update many Conversations.
     * @example
     * // Update many Conversations
     * const conversations = await prisma.conversations.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Conversations and only return the `id`
     * const conversationsWithIdOnly = await prisma.conversations.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends conversationsUpdateManyAndReturnArgs>(args: SelectSubset<T, conversationsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$conversationsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Conversations.
     * @param {conversationsUpsertArgs} args - Arguments to update or create a Conversations.
     * @example
     * // Update or create a Conversations
     * const conversations = await prisma.conversations.upsert({
     *   create: {
     *     // ... data to create a Conversations
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Conversations we want to update
     *   }
     * })
     */
    upsert<T extends conversationsUpsertArgs>(args: SelectSubset<T, conversationsUpsertArgs<ExtArgs>>): Prisma__conversationsClient<$Result.GetResult<Prisma.$conversationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Conversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {conversationsCountArgs} args - Arguments to filter Conversations to count.
     * @example
     * // Count the number of Conversations
     * const count = await prisma.conversations.count({
     *   where: {
     *     // ... the filter for the Conversations we want to count
     *   }
     * })
    **/
    count<T extends conversationsCountArgs>(
      args?: Subset<T, conversationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConversationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Conversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ConversationsAggregateArgs>(args: Subset<T, ConversationsAggregateArgs>): Prisma.PrismaPromise<GetConversationsAggregateType<T>>

    /**
     * Group by Conversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {conversationsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends conversationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: conversationsGroupByArgs['orderBy'] }
        : { orderBy?: conversationsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, conversationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConversationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the conversations model
   */
  readonly fields: conversationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for conversations.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__conversationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    business<T extends conversations$businessArgs<ExtArgs> = {}>(args?: Subset<T, conversations$businessArgs<ExtArgs>>): Prisma__businessClient<$Result.GetResult<Prisma.$businessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    patient<T extends conversations$patientArgs<ExtArgs> = {}>(args?: Subset<T, conversations$patientArgs<ExtArgs>>): Prisma__patientClient<$Result.GetResult<Prisma.$patientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    messages<T extends conversations$messagesArgs<ExtArgs> = {}>(args?: Subset<T, conversations$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the conversations model
   */
  interface conversationsFieldRefs {
    readonly id: FieldRef<"conversations", 'BigInt'>
    readonly patient_id: FieldRef<"conversations", 'BigInt'>
    readonly business_id: FieldRef<"conversations", 'BigInt'>
    readonly created_at: FieldRef<"conversations", 'DateTime'>
    readonly updated_at: FieldRef<"conversations", 'DateTime'>
    readonly deleted_at: FieldRef<"conversations", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * conversations findUnique
   */
  export type conversationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversations
     */
    select?: conversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conversations
     */
    omit?: conversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conversationsInclude<ExtArgs> | null
    /**
     * Filter, which conversations to fetch.
     */
    where: conversationsWhereUniqueInput
  }

  /**
   * conversations findUniqueOrThrow
   */
  export type conversationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversations
     */
    select?: conversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conversations
     */
    omit?: conversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conversationsInclude<ExtArgs> | null
    /**
     * Filter, which conversations to fetch.
     */
    where: conversationsWhereUniqueInput
  }

  /**
   * conversations findFirst
   */
  export type conversationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversations
     */
    select?: conversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conversations
     */
    omit?: conversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conversationsInclude<ExtArgs> | null
    /**
     * Filter, which conversations to fetch.
     */
    where?: conversationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of conversations to fetch.
     */
    orderBy?: conversationsOrderByWithRelationInput | conversationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for conversations.
     */
    cursor?: conversationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` conversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of conversations.
     */
    distinct?: ConversationsScalarFieldEnum | ConversationsScalarFieldEnum[]
  }

  /**
   * conversations findFirstOrThrow
   */
  export type conversationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversations
     */
    select?: conversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conversations
     */
    omit?: conversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conversationsInclude<ExtArgs> | null
    /**
     * Filter, which conversations to fetch.
     */
    where?: conversationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of conversations to fetch.
     */
    orderBy?: conversationsOrderByWithRelationInput | conversationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for conversations.
     */
    cursor?: conversationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` conversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of conversations.
     */
    distinct?: ConversationsScalarFieldEnum | ConversationsScalarFieldEnum[]
  }

  /**
   * conversations findMany
   */
  export type conversationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversations
     */
    select?: conversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conversations
     */
    omit?: conversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conversationsInclude<ExtArgs> | null
    /**
     * Filter, which conversations to fetch.
     */
    where?: conversationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of conversations to fetch.
     */
    orderBy?: conversationsOrderByWithRelationInput | conversationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing conversations.
     */
    cursor?: conversationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` conversations.
     */
    skip?: number
    distinct?: ConversationsScalarFieldEnum | ConversationsScalarFieldEnum[]
  }

  /**
   * conversations create
   */
  export type conversationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversations
     */
    select?: conversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conversations
     */
    omit?: conversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conversationsInclude<ExtArgs> | null
    /**
     * The data needed to create a conversations.
     */
    data?: XOR<conversationsCreateInput, conversationsUncheckedCreateInput>
  }

  /**
   * conversations createMany
   */
  export type conversationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many conversations.
     */
    data: conversationsCreateManyInput | conversationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * conversations createManyAndReturn
   */
  export type conversationsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversations
     */
    select?: conversationsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the conversations
     */
    omit?: conversationsOmit<ExtArgs> | null
    /**
     * The data used to create many conversations.
     */
    data: conversationsCreateManyInput | conversationsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conversationsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * conversations update
   */
  export type conversationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversations
     */
    select?: conversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conversations
     */
    omit?: conversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conversationsInclude<ExtArgs> | null
    /**
     * The data needed to update a conversations.
     */
    data: XOR<conversationsUpdateInput, conversationsUncheckedUpdateInput>
    /**
     * Choose, which conversations to update.
     */
    where: conversationsWhereUniqueInput
  }

  /**
   * conversations updateMany
   */
  export type conversationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update conversations.
     */
    data: XOR<conversationsUpdateManyMutationInput, conversationsUncheckedUpdateManyInput>
    /**
     * Filter which conversations to update
     */
    where?: conversationsWhereInput
    /**
     * Limit how many conversations to update.
     */
    limit?: number
  }

  /**
   * conversations updateManyAndReturn
   */
  export type conversationsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversations
     */
    select?: conversationsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the conversations
     */
    omit?: conversationsOmit<ExtArgs> | null
    /**
     * The data used to update conversations.
     */
    data: XOR<conversationsUpdateManyMutationInput, conversationsUncheckedUpdateManyInput>
    /**
     * Filter which conversations to update
     */
    where?: conversationsWhereInput
    /**
     * Limit how many conversations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conversationsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * conversations upsert
   */
  export type conversationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversations
     */
    select?: conversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conversations
     */
    omit?: conversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conversationsInclude<ExtArgs> | null
    /**
     * The filter to search for the conversations to update in case it exists.
     */
    where: conversationsWhereUniqueInput
    /**
     * In case the conversations found by the `where` argument doesn't exist, create a new conversations with this data.
     */
    create: XOR<conversationsCreateInput, conversationsUncheckedCreateInput>
    /**
     * In case the conversations was found with the provided `where` argument, update it with this data.
     */
    update: XOR<conversationsUpdateInput, conversationsUncheckedUpdateInput>
  }

  /**
   * conversations delete
   */
  export type conversationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversations
     */
    select?: conversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conversations
     */
    omit?: conversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conversationsInclude<ExtArgs> | null
    /**
     * Filter which conversations to delete.
     */
    where: conversationsWhereUniqueInput
  }

  /**
   * conversations deleteMany
   */
  export type conversationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which conversations to delete
     */
    where?: conversationsWhereInput
    /**
     * Limit how many conversations to delete.
     */
    limit?: number
  }

  /**
   * conversations.business
   */
  export type conversations$businessArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the business
     */
    select?: businessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the business
     */
    omit?: businessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: businessInclude<ExtArgs> | null
    where?: businessWhereInput
  }

  /**
   * conversations.patient
   */
  export type conversations$patientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient
     */
    select?: patientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the patient
     */
    omit?: patientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patientInclude<ExtArgs> | null
    where?: patientWhereInput
  }

  /**
   * conversations.messages
   */
  export type conversations$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    where?: messagesWhereInput
    orderBy?: messagesOrderByWithRelationInput | messagesOrderByWithRelationInput[]
    cursor?: messagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * conversations without action
   */
  export type conversationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversations
     */
    select?: conversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conversations
     */
    omit?: conversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conversationsInclude<ExtArgs> | null
  }


  /**
   * Model doctor
   */

  export type AggregateDoctor = {
    _count: DoctorCountAggregateOutputType | null
    _avg: DoctorAvgAggregateOutputType | null
    _sum: DoctorSumAggregateOutputType | null
    _min: DoctorMinAggregateOutputType | null
    _max: DoctorMaxAggregateOutputType | null
  }

  export type DoctorAvgAggregateOutputType = {
    id: number | null
    negocio_id: number | null
  }

  export type DoctorSumAggregateOutputType = {
    id: bigint | null
    negocio_id: bigint | null
  }

  export type DoctorMinAggregateOutputType = {
    id: bigint | null
    name: string | null
    specialty: string | null
    negocio_id: bigint | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type DoctorMaxAggregateOutputType = {
    id: bigint | null
    name: string | null
    specialty: string | null
    negocio_id: bigint | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type DoctorCountAggregateOutputType = {
    id: number
    name: number
    specialty: number
    negocio_id: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type DoctorAvgAggregateInputType = {
    id?: true
    negocio_id?: true
  }

  export type DoctorSumAggregateInputType = {
    id?: true
    negocio_id?: true
  }

  export type DoctorMinAggregateInputType = {
    id?: true
    name?: true
    specialty?: true
    negocio_id?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type DoctorMaxAggregateInputType = {
    id?: true
    name?: true
    specialty?: true
    negocio_id?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type DoctorCountAggregateInputType = {
    id?: true
    name?: true
    specialty?: true
    negocio_id?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type DoctorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which doctor to aggregate.
     */
    where?: doctorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of doctors to fetch.
     */
    orderBy?: doctorOrderByWithRelationInput | doctorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: doctorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` doctors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned doctors
    **/
    _count?: true | DoctorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DoctorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DoctorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DoctorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DoctorMaxAggregateInputType
  }

  export type GetDoctorAggregateType<T extends DoctorAggregateArgs> = {
        [P in keyof T & keyof AggregateDoctor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDoctor[P]>
      : GetScalarType<T[P], AggregateDoctor[P]>
  }




  export type doctorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: doctorWhereInput
    orderBy?: doctorOrderByWithAggregationInput | doctorOrderByWithAggregationInput[]
    by: DoctorScalarFieldEnum[] | DoctorScalarFieldEnum
    having?: doctorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DoctorCountAggregateInputType | true
    _avg?: DoctorAvgAggregateInputType
    _sum?: DoctorSumAggregateInputType
    _min?: DoctorMinAggregateInputType
    _max?: DoctorMaxAggregateInputType
  }

  export type DoctorGroupByOutputType = {
    id: bigint
    name: string
    specialty: string
    negocio_id: bigint | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    _count: DoctorCountAggregateOutputType | null
    _avg: DoctorAvgAggregateOutputType | null
    _sum: DoctorSumAggregateOutputType | null
    _min: DoctorMinAggregateOutputType | null
    _max: DoctorMaxAggregateOutputType | null
  }

  type GetDoctorGroupByPayload<T extends doctorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DoctorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DoctorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DoctorGroupByOutputType[P]>
            : GetScalarType<T[P], DoctorGroupByOutputType[P]>
        }
      >
    >


  export type doctorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    specialty?: boolean
    negocio_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    appointment?: boolean | doctor$appointmentArgs<ExtArgs>
    business?: boolean | doctor$businessArgs<ExtArgs>
    notes?: boolean | doctor$notesArgs<ExtArgs>
    notifications?: boolean | doctor$notificationsArgs<ExtArgs>
    _count?: boolean | DoctorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doctor"]>

  export type doctorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    specialty?: boolean
    negocio_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    business?: boolean | doctor$businessArgs<ExtArgs>
  }, ExtArgs["result"]["doctor"]>

  export type doctorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    specialty?: boolean
    negocio_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    business?: boolean | doctor$businessArgs<ExtArgs>
  }, ExtArgs["result"]["doctor"]>

  export type doctorSelectScalar = {
    id?: boolean
    name?: boolean
    specialty?: boolean
    negocio_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }

  export type doctorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "specialty" | "negocio_id" | "created_at" | "updated_at" | "deleted_at", ExtArgs["result"]["doctor"]>
  export type doctorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointment?: boolean | doctor$appointmentArgs<ExtArgs>
    business?: boolean | doctor$businessArgs<ExtArgs>
    notes?: boolean | doctor$notesArgs<ExtArgs>
    notifications?: boolean | doctor$notificationsArgs<ExtArgs>
    _count?: boolean | DoctorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type doctorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    business?: boolean | doctor$businessArgs<ExtArgs>
  }
  export type doctorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    business?: boolean | doctor$businessArgs<ExtArgs>
  }

  export type $doctorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "doctor"
    objects: {
      appointment: Prisma.$appointmentPayload<ExtArgs>[]
      business: Prisma.$businessPayload<ExtArgs> | null
      notes: Prisma.$notesPayload<ExtArgs>[]
      notifications: Prisma.$notificationsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      name: string
      specialty: string
      negocio_id: bigint | null
      created_at: Date | null
      updated_at: Date | null
      deleted_at: Date | null
    }, ExtArgs["result"]["doctor"]>
    composites: {}
  }

  type doctorGetPayload<S extends boolean | null | undefined | doctorDefaultArgs> = $Result.GetResult<Prisma.$doctorPayload, S>

  type doctorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<doctorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DoctorCountAggregateInputType | true
    }

  export interface doctorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['doctor'], meta: { name: 'doctor' } }
    /**
     * Find zero or one Doctor that matches the filter.
     * @param {doctorFindUniqueArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends doctorFindUniqueArgs>(args: SelectSubset<T, doctorFindUniqueArgs<ExtArgs>>): Prisma__doctorClient<$Result.GetResult<Prisma.$doctorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Doctor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {doctorFindUniqueOrThrowArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends doctorFindUniqueOrThrowArgs>(args: SelectSubset<T, doctorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__doctorClient<$Result.GetResult<Prisma.$doctorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Doctor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {doctorFindFirstArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends doctorFindFirstArgs>(args?: SelectSubset<T, doctorFindFirstArgs<ExtArgs>>): Prisma__doctorClient<$Result.GetResult<Prisma.$doctorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Doctor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {doctorFindFirstOrThrowArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends doctorFindFirstOrThrowArgs>(args?: SelectSubset<T, doctorFindFirstOrThrowArgs<ExtArgs>>): Prisma__doctorClient<$Result.GetResult<Prisma.$doctorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Doctors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {doctorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Doctors
     * const doctors = await prisma.doctor.findMany()
     * 
     * // Get first 10 Doctors
     * const doctors = await prisma.doctor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const doctorWithIdOnly = await prisma.doctor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends doctorFindManyArgs>(args?: SelectSubset<T, doctorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$doctorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Doctor.
     * @param {doctorCreateArgs} args - Arguments to create a Doctor.
     * @example
     * // Create one Doctor
     * const Doctor = await prisma.doctor.create({
     *   data: {
     *     // ... data to create a Doctor
     *   }
     * })
     * 
     */
    create<T extends doctorCreateArgs>(args: SelectSubset<T, doctorCreateArgs<ExtArgs>>): Prisma__doctorClient<$Result.GetResult<Prisma.$doctorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Doctors.
     * @param {doctorCreateManyArgs} args - Arguments to create many Doctors.
     * @example
     * // Create many Doctors
     * const doctor = await prisma.doctor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends doctorCreateManyArgs>(args?: SelectSubset<T, doctorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Doctors and returns the data saved in the database.
     * @param {doctorCreateManyAndReturnArgs} args - Arguments to create many Doctors.
     * @example
     * // Create many Doctors
     * const doctor = await prisma.doctor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Doctors and only return the `id`
     * const doctorWithIdOnly = await prisma.doctor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends doctorCreateManyAndReturnArgs>(args?: SelectSubset<T, doctorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$doctorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Doctor.
     * @param {doctorDeleteArgs} args - Arguments to delete one Doctor.
     * @example
     * // Delete one Doctor
     * const Doctor = await prisma.doctor.delete({
     *   where: {
     *     // ... filter to delete one Doctor
     *   }
     * })
     * 
     */
    delete<T extends doctorDeleteArgs>(args: SelectSubset<T, doctorDeleteArgs<ExtArgs>>): Prisma__doctorClient<$Result.GetResult<Prisma.$doctorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Doctor.
     * @param {doctorUpdateArgs} args - Arguments to update one Doctor.
     * @example
     * // Update one Doctor
     * const doctor = await prisma.doctor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends doctorUpdateArgs>(args: SelectSubset<T, doctorUpdateArgs<ExtArgs>>): Prisma__doctorClient<$Result.GetResult<Prisma.$doctorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Doctors.
     * @param {doctorDeleteManyArgs} args - Arguments to filter Doctors to delete.
     * @example
     * // Delete a few Doctors
     * const { count } = await prisma.doctor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends doctorDeleteManyArgs>(args?: SelectSubset<T, doctorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Doctors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {doctorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Doctors
     * const doctor = await prisma.doctor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends doctorUpdateManyArgs>(args: SelectSubset<T, doctorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Doctors and returns the data updated in the database.
     * @param {doctorUpdateManyAndReturnArgs} args - Arguments to update many Doctors.
     * @example
     * // Update many Doctors
     * const doctor = await prisma.doctor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Doctors and only return the `id`
     * const doctorWithIdOnly = await prisma.doctor.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends doctorUpdateManyAndReturnArgs>(args: SelectSubset<T, doctorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$doctorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Doctor.
     * @param {doctorUpsertArgs} args - Arguments to update or create a Doctor.
     * @example
     * // Update or create a Doctor
     * const doctor = await prisma.doctor.upsert({
     *   create: {
     *     // ... data to create a Doctor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Doctor we want to update
     *   }
     * })
     */
    upsert<T extends doctorUpsertArgs>(args: SelectSubset<T, doctorUpsertArgs<ExtArgs>>): Prisma__doctorClient<$Result.GetResult<Prisma.$doctorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Doctors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {doctorCountArgs} args - Arguments to filter Doctors to count.
     * @example
     * // Count the number of Doctors
     * const count = await prisma.doctor.count({
     *   where: {
     *     // ... the filter for the Doctors we want to count
     *   }
     * })
    **/
    count<T extends doctorCountArgs>(
      args?: Subset<T, doctorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DoctorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Doctor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DoctorAggregateArgs>(args: Subset<T, DoctorAggregateArgs>): Prisma.PrismaPromise<GetDoctorAggregateType<T>>

    /**
     * Group by Doctor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {doctorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends doctorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: doctorGroupByArgs['orderBy'] }
        : { orderBy?: doctorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, doctorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDoctorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the doctor model
   */
  readonly fields: doctorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for doctor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__doctorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    appointment<T extends doctor$appointmentArgs<ExtArgs> = {}>(args?: Subset<T, doctor$appointmentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$appointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    business<T extends doctor$businessArgs<ExtArgs> = {}>(args?: Subset<T, doctor$businessArgs<ExtArgs>>): Prisma__businessClient<$Result.GetResult<Prisma.$businessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    notes<T extends doctor$notesArgs<ExtArgs> = {}>(args?: Subset<T, doctor$notesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications<T extends doctor$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, doctor$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the doctor model
   */
  interface doctorFieldRefs {
    readonly id: FieldRef<"doctor", 'BigInt'>
    readonly name: FieldRef<"doctor", 'String'>
    readonly specialty: FieldRef<"doctor", 'String'>
    readonly negocio_id: FieldRef<"doctor", 'BigInt'>
    readonly created_at: FieldRef<"doctor", 'DateTime'>
    readonly updated_at: FieldRef<"doctor", 'DateTime'>
    readonly deleted_at: FieldRef<"doctor", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * doctor findUnique
   */
  export type doctorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctor
     */
    select?: doctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the doctor
     */
    omit?: doctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: doctorInclude<ExtArgs> | null
    /**
     * Filter, which doctor to fetch.
     */
    where: doctorWhereUniqueInput
  }

  /**
   * doctor findUniqueOrThrow
   */
  export type doctorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctor
     */
    select?: doctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the doctor
     */
    omit?: doctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: doctorInclude<ExtArgs> | null
    /**
     * Filter, which doctor to fetch.
     */
    where: doctorWhereUniqueInput
  }

  /**
   * doctor findFirst
   */
  export type doctorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctor
     */
    select?: doctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the doctor
     */
    omit?: doctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: doctorInclude<ExtArgs> | null
    /**
     * Filter, which doctor to fetch.
     */
    where?: doctorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of doctors to fetch.
     */
    orderBy?: doctorOrderByWithRelationInput | doctorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for doctors.
     */
    cursor?: doctorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` doctors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of doctors.
     */
    distinct?: DoctorScalarFieldEnum | DoctorScalarFieldEnum[]
  }

  /**
   * doctor findFirstOrThrow
   */
  export type doctorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctor
     */
    select?: doctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the doctor
     */
    omit?: doctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: doctorInclude<ExtArgs> | null
    /**
     * Filter, which doctor to fetch.
     */
    where?: doctorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of doctors to fetch.
     */
    orderBy?: doctorOrderByWithRelationInput | doctorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for doctors.
     */
    cursor?: doctorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` doctors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of doctors.
     */
    distinct?: DoctorScalarFieldEnum | DoctorScalarFieldEnum[]
  }

  /**
   * doctor findMany
   */
  export type doctorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctor
     */
    select?: doctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the doctor
     */
    omit?: doctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: doctorInclude<ExtArgs> | null
    /**
     * Filter, which doctors to fetch.
     */
    where?: doctorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of doctors to fetch.
     */
    orderBy?: doctorOrderByWithRelationInput | doctorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing doctors.
     */
    cursor?: doctorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` doctors.
     */
    skip?: number
    distinct?: DoctorScalarFieldEnum | DoctorScalarFieldEnum[]
  }

  /**
   * doctor create
   */
  export type doctorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctor
     */
    select?: doctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the doctor
     */
    omit?: doctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: doctorInclude<ExtArgs> | null
    /**
     * The data needed to create a doctor.
     */
    data: XOR<doctorCreateInput, doctorUncheckedCreateInput>
  }

  /**
   * doctor createMany
   */
  export type doctorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many doctors.
     */
    data: doctorCreateManyInput | doctorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * doctor createManyAndReturn
   */
  export type doctorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctor
     */
    select?: doctorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the doctor
     */
    omit?: doctorOmit<ExtArgs> | null
    /**
     * The data used to create many doctors.
     */
    data: doctorCreateManyInput | doctorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: doctorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * doctor update
   */
  export type doctorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctor
     */
    select?: doctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the doctor
     */
    omit?: doctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: doctorInclude<ExtArgs> | null
    /**
     * The data needed to update a doctor.
     */
    data: XOR<doctorUpdateInput, doctorUncheckedUpdateInput>
    /**
     * Choose, which doctor to update.
     */
    where: doctorWhereUniqueInput
  }

  /**
   * doctor updateMany
   */
  export type doctorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update doctors.
     */
    data: XOR<doctorUpdateManyMutationInput, doctorUncheckedUpdateManyInput>
    /**
     * Filter which doctors to update
     */
    where?: doctorWhereInput
    /**
     * Limit how many doctors to update.
     */
    limit?: number
  }

  /**
   * doctor updateManyAndReturn
   */
  export type doctorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctor
     */
    select?: doctorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the doctor
     */
    omit?: doctorOmit<ExtArgs> | null
    /**
     * The data used to update doctors.
     */
    data: XOR<doctorUpdateManyMutationInput, doctorUncheckedUpdateManyInput>
    /**
     * Filter which doctors to update
     */
    where?: doctorWhereInput
    /**
     * Limit how many doctors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: doctorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * doctor upsert
   */
  export type doctorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctor
     */
    select?: doctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the doctor
     */
    omit?: doctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: doctorInclude<ExtArgs> | null
    /**
     * The filter to search for the doctor to update in case it exists.
     */
    where: doctorWhereUniqueInput
    /**
     * In case the doctor found by the `where` argument doesn't exist, create a new doctor with this data.
     */
    create: XOR<doctorCreateInput, doctorUncheckedCreateInput>
    /**
     * In case the doctor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<doctorUpdateInput, doctorUncheckedUpdateInput>
  }

  /**
   * doctor delete
   */
  export type doctorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctor
     */
    select?: doctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the doctor
     */
    omit?: doctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: doctorInclude<ExtArgs> | null
    /**
     * Filter which doctor to delete.
     */
    where: doctorWhereUniqueInput
  }

  /**
   * doctor deleteMany
   */
  export type doctorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which doctors to delete
     */
    where?: doctorWhereInput
    /**
     * Limit how many doctors to delete.
     */
    limit?: number
  }

  /**
   * doctor.appointment
   */
  export type doctor$appointmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment
     */
    select?: appointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the appointment
     */
    omit?: appointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: appointmentInclude<ExtArgs> | null
    where?: appointmentWhereInput
    orderBy?: appointmentOrderByWithRelationInput | appointmentOrderByWithRelationInput[]
    cursor?: appointmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * doctor.business
   */
  export type doctor$businessArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the business
     */
    select?: businessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the business
     */
    omit?: businessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: businessInclude<ExtArgs> | null
    where?: businessWhereInput
  }

  /**
   * doctor.notes
   */
  export type doctor$notesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notes
     */
    select?: notesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notes
     */
    omit?: notesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notesInclude<ExtArgs> | null
    where?: notesWhereInput
    orderBy?: notesOrderByWithRelationInput | notesOrderByWithRelationInput[]
    cursor?: notesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotesScalarFieldEnum | NotesScalarFieldEnum[]
  }

  /**
   * doctor.notifications
   */
  export type doctor$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
    where?: notificationsWhereInput
    orderBy?: notificationsOrderByWithRelationInput | notificationsOrderByWithRelationInput[]
    cursor?: notificationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * doctor without action
   */
  export type doctorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctor
     */
    select?: doctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the doctor
     */
    omit?: doctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: doctorInclude<ExtArgs> | null
  }


  /**
   * Model messages
   */

  export type AggregateMessages = {
    _count: MessagesCountAggregateOutputType | null
    _avg: MessagesAvgAggregateOutputType | null
    _sum: MessagesSumAggregateOutputType | null
    _min: MessagesMinAggregateOutputType | null
    _max: MessagesMaxAggregateOutputType | null
  }

  export type MessagesAvgAggregateOutputType = {
    id: number | null
    patient_id: number | null
    conversation_id: number | null
  }

  export type MessagesSumAggregateOutputType = {
    id: bigint | null
    patient_id: bigint | null
    conversation_id: bigint | null
  }

  export type MessagesMinAggregateOutputType = {
    id: bigint | null
    content: string | null
    date: Date | null
    patient_id: bigint | null
    conversation_id: bigint | null
    type: string | null
    wss_number: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type MessagesMaxAggregateOutputType = {
    id: bigint | null
    content: string | null
    date: Date | null
    patient_id: bigint | null
    conversation_id: bigint | null
    type: string | null
    wss_number: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type MessagesCountAggregateOutputType = {
    id: number
    content: number
    date: number
    patient_id: number
    conversation_id: number
    type: number
    wss_number: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type MessagesAvgAggregateInputType = {
    id?: true
    patient_id?: true
    conversation_id?: true
  }

  export type MessagesSumAggregateInputType = {
    id?: true
    patient_id?: true
    conversation_id?: true
  }

  export type MessagesMinAggregateInputType = {
    id?: true
    content?: true
    date?: true
    patient_id?: true
    conversation_id?: true
    type?: true
    wss_number?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type MessagesMaxAggregateInputType = {
    id?: true
    content?: true
    date?: true
    patient_id?: true
    conversation_id?: true
    type?: true
    wss_number?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type MessagesCountAggregateInputType = {
    id?: true
    content?: true
    date?: true
    patient_id?: true
    conversation_id?: true
    type?: true
    wss_number?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type MessagesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which messages to aggregate.
     */
    where?: messagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of messages to fetch.
     */
    orderBy?: messagesOrderByWithRelationInput | messagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: messagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned messages
    **/
    _count?: true | MessagesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MessagesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MessagesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessagesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessagesMaxAggregateInputType
  }

  export type GetMessagesAggregateType<T extends MessagesAggregateArgs> = {
        [P in keyof T & keyof AggregateMessages]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessages[P]>
      : GetScalarType<T[P], AggregateMessages[P]>
  }




  export type messagesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: messagesWhereInput
    orderBy?: messagesOrderByWithAggregationInput | messagesOrderByWithAggregationInput[]
    by: MessagesScalarFieldEnum[] | MessagesScalarFieldEnum
    having?: messagesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessagesCountAggregateInputType | true
    _avg?: MessagesAvgAggregateInputType
    _sum?: MessagesSumAggregateInputType
    _min?: MessagesMinAggregateInputType
    _max?: MessagesMaxAggregateInputType
  }

  export type MessagesGroupByOutputType = {
    id: bigint
    content: string
    date: Date | null
    patient_id: bigint | null
    conversation_id: bigint | null
    type: string | null
    wss_number: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    _count: MessagesCountAggregateOutputType | null
    _avg: MessagesAvgAggregateOutputType | null
    _sum: MessagesSumAggregateOutputType | null
    _min: MessagesMinAggregateOutputType | null
    _max: MessagesMaxAggregateOutputType | null
  }

  type GetMessagesGroupByPayload<T extends messagesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessagesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessagesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessagesGroupByOutputType[P]>
            : GetScalarType<T[P], MessagesGroupByOutputType[P]>
        }
      >
    >


  export type messagesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    date?: boolean
    patient_id?: boolean
    conversation_id?: boolean
    type?: boolean
    wss_number?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    conversations?: boolean | messages$conversationsArgs<ExtArgs>
    patient?: boolean | messages$patientArgs<ExtArgs>
  }, ExtArgs["result"]["messages"]>

  export type messagesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    date?: boolean
    patient_id?: boolean
    conversation_id?: boolean
    type?: boolean
    wss_number?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    conversations?: boolean | messages$conversationsArgs<ExtArgs>
    patient?: boolean | messages$patientArgs<ExtArgs>
  }, ExtArgs["result"]["messages"]>

  export type messagesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    date?: boolean
    patient_id?: boolean
    conversation_id?: boolean
    type?: boolean
    wss_number?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    conversations?: boolean | messages$conversationsArgs<ExtArgs>
    patient?: boolean | messages$patientArgs<ExtArgs>
  }, ExtArgs["result"]["messages"]>

  export type messagesSelectScalar = {
    id?: boolean
    content?: boolean
    date?: boolean
    patient_id?: boolean
    conversation_id?: boolean
    type?: boolean
    wss_number?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }

  export type messagesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "date" | "patient_id" | "conversation_id" | "type" | "wss_number" | "created_at" | "updated_at" | "deleted_at", ExtArgs["result"]["messages"]>
  export type messagesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversations?: boolean | messages$conversationsArgs<ExtArgs>
    patient?: boolean | messages$patientArgs<ExtArgs>
  }
  export type messagesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversations?: boolean | messages$conversationsArgs<ExtArgs>
    patient?: boolean | messages$patientArgs<ExtArgs>
  }
  export type messagesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversations?: boolean | messages$conversationsArgs<ExtArgs>
    patient?: boolean | messages$patientArgs<ExtArgs>
  }

  export type $messagesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "messages"
    objects: {
      conversations: Prisma.$conversationsPayload<ExtArgs> | null
      patient: Prisma.$patientPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      content: string
      date: Date | null
      patient_id: bigint | null
      conversation_id: bigint | null
      type: string | null
      wss_number: string | null
      created_at: Date | null
      updated_at: Date | null
      deleted_at: Date | null
    }, ExtArgs["result"]["messages"]>
    composites: {}
  }

  type messagesGetPayload<S extends boolean | null | undefined | messagesDefaultArgs> = $Result.GetResult<Prisma.$messagesPayload, S>

  type messagesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<messagesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessagesCountAggregateInputType | true
    }

  export interface messagesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['messages'], meta: { name: 'messages' } }
    /**
     * Find zero or one Messages that matches the filter.
     * @param {messagesFindUniqueArgs} args - Arguments to find a Messages
     * @example
     * // Get one Messages
     * const messages = await prisma.messages.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends messagesFindUniqueArgs>(args: SelectSubset<T, messagesFindUniqueArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Messages that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {messagesFindUniqueOrThrowArgs} args - Arguments to find a Messages
     * @example
     * // Get one Messages
     * const messages = await prisma.messages.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends messagesFindUniqueOrThrowArgs>(args: SelectSubset<T, messagesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messagesFindFirstArgs} args - Arguments to find a Messages
     * @example
     * // Get one Messages
     * const messages = await prisma.messages.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends messagesFindFirstArgs>(args?: SelectSubset<T, messagesFindFirstArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Messages that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messagesFindFirstOrThrowArgs} args - Arguments to find a Messages
     * @example
     * // Get one Messages
     * const messages = await prisma.messages.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends messagesFindFirstOrThrowArgs>(args?: SelectSubset<T, messagesFindFirstOrThrowArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messagesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.messages.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.messages.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messagesWithIdOnly = await prisma.messages.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends messagesFindManyArgs>(args?: SelectSubset<T, messagesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Messages.
     * @param {messagesCreateArgs} args - Arguments to create a Messages.
     * @example
     * // Create one Messages
     * const Messages = await prisma.messages.create({
     *   data: {
     *     // ... data to create a Messages
     *   }
     * })
     * 
     */
    create<T extends messagesCreateArgs>(args: SelectSubset<T, messagesCreateArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Messages.
     * @param {messagesCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const messages = await prisma.messages.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends messagesCreateManyArgs>(args?: SelectSubset<T, messagesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Messages and returns the data saved in the database.
     * @param {messagesCreateManyAndReturnArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const messages = await prisma.messages.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Messages and only return the `id`
     * const messagesWithIdOnly = await prisma.messages.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends messagesCreateManyAndReturnArgs>(args?: SelectSubset<T, messagesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Messages.
     * @param {messagesDeleteArgs} args - Arguments to delete one Messages.
     * @example
     * // Delete one Messages
     * const Messages = await prisma.messages.delete({
     *   where: {
     *     // ... filter to delete one Messages
     *   }
     * })
     * 
     */
    delete<T extends messagesDeleteArgs>(args: SelectSubset<T, messagesDeleteArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Messages.
     * @param {messagesUpdateArgs} args - Arguments to update one Messages.
     * @example
     * // Update one Messages
     * const messages = await prisma.messages.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends messagesUpdateArgs>(args: SelectSubset<T, messagesUpdateArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Messages.
     * @param {messagesDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.messages.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends messagesDeleteManyArgs>(args?: SelectSubset<T, messagesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messagesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const messages = await prisma.messages.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends messagesUpdateManyArgs>(args: SelectSubset<T, messagesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages and returns the data updated in the database.
     * @param {messagesUpdateManyAndReturnArgs} args - Arguments to update many Messages.
     * @example
     * // Update many Messages
     * const messages = await prisma.messages.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Messages and only return the `id`
     * const messagesWithIdOnly = await prisma.messages.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends messagesUpdateManyAndReturnArgs>(args: SelectSubset<T, messagesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Messages.
     * @param {messagesUpsertArgs} args - Arguments to update or create a Messages.
     * @example
     * // Update or create a Messages
     * const messages = await prisma.messages.upsert({
     *   create: {
     *     // ... data to create a Messages
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Messages we want to update
     *   }
     * })
     */
    upsert<T extends messagesUpsertArgs>(args: SelectSubset<T, messagesUpsertArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messagesCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.messages.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends messagesCountArgs>(
      args?: Subset<T, messagesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessagesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessagesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MessagesAggregateArgs>(args: Subset<T, MessagesAggregateArgs>): Prisma.PrismaPromise<GetMessagesAggregateType<T>>

    /**
     * Group by Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messagesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends messagesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: messagesGroupByArgs['orderBy'] }
        : { orderBy?: messagesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, messagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the messages model
   */
  readonly fields: messagesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for messages.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__messagesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    conversations<T extends messages$conversationsArgs<ExtArgs> = {}>(args?: Subset<T, messages$conversationsArgs<ExtArgs>>): Prisma__conversationsClient<$Result.GetResult<Prisma.$conversationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    patient<T extends messages$patientArgs<ExtArgs> = {}>(args?: Subset<T, messages$patientArgs<ExtArgs>>): Prisma__patientClient<$Result.GetResult<Prisma.$patientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the messages model
   */
  interface messagesFieldRefs {
    readonly id: FieldRef<"messages", 'BigInt'>
    readonly content: FieldRef<"messages", 'String'>
    readonly date: FieldRef<"messages", 'DateTime'>
    readonly patient_id: FieldRef<"messages", 'BigInt'>
    readonly conversation_id: FieldRef<"messages", 'BigInt'>
    readonly type: FieldRef<"messages", 'String'>
    readonly wss_number: FieldRef<"messages", 'String'>
    readonly created_at: FieldRef<"messages", 'DateTime'>
    readonly updated_at: FieldRef<"messages", 'DateTime'>
    readonly deleted_at: FieldRef<"messages", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * messages findUnique
   */
  export type messagesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * Filter, which messages to fetch.
     */
    where: messagesWhereUniqueInput
  }

  /**
   * messages findUniqueOrThrow
   */
  export type messagesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * Filter, which messages to fetch.
     */
    where: messagesWhereUniqueInput
  }

  /**
   * messages findFirst
   */
  export type messagesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * Filter, which messages to fetch.
     */
    where?: messagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of messages to fetch.
     */
    orderBy?: messagesOrderByWithRelationInput | messagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for messages.
     */
    cursor?: messagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of messages.
     */
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * messages findFirstOrThrow
   */
  export type messagesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * Filter, which messages to fetch.
     */
    where?: messagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of messages to fetch.
     */
    orderBy?: messagesOrderByWithRelationInput | messagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for messages.
     */
    cursor?: messagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of messages.
     */
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * messages findMany
   */
  export type messagesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * Filter, which messages to fetch.
     */
    where?: messagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of messages to fetch.
     */
    orderBy?: messagesOrderByWithRelationInput | messagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing messages.
     */
    cursor?: messagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` messages.
     */
    skip?: number
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * messages create
   */
  export type messagesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * The data needed to create a messages.
     */
    data: XOR<messagesCreateInput, messagesUncheckedCreateInput>
  }

  /**
   * messages createMany
   */
  export type messagesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many messages.
     */
    data: messagesCreateManyInput | messagesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * messages createManyAndReturn
   */
  export type messagesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * The data used to create many messages.
     */
    data: messagesCreateManyInput | messagesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * messages update
   */
  export type messagesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * The data needed to update a messages.
     */
    data: XOR<messagesUpdateInput, messagesUncheckedUpdateInput>
    /**
     * Choose, which messages to update.
     */
    where: messagesWhereUniqueInput
  }

  /**
   * messages updateMany
   */
  export type messagesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update messages.
     */
    data: XOR<messagesUpdateManyMutationInput, messagesUncheckedUpdateManyInput>
    /**
     * Filter which messages to update
     */
    where?: messagesWhereInput
    /**
     * Limit how many messages to update.
     */
    limit?: number
  }

  /**
   * messages updateManyAndReturn
   */
  export type messagesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * The data used to update messages.
     */
    data: XOR<messagesUpdateManyMutationInput, messagesUncheckedUpdateManyInput>
    /**
     * Filter which messages to update
     */
    where?: messagesWhereInput
    /**
     * Limit how many messages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * messages upsert
   */
  export type messagesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * The filter to search for the messages to update in case it exists.
     */
    where: messagesWhereUniqueInput
    /**
     * In case the messages found by the `where` argument doesn't exist, create a new messages with this data.
     */
    create: XOR<messagesCreateInput, messagesUncheckedCreateInput>
    /**
     * In case the messages was found with the provided `where` argument, update it with this data.
     */
    update: XOR<messagesUpdateInput, messagesUncheckedUpdateInput>
  }

  /**
   * messages delete
   */
  export type messagesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * Filter which messages to delete.
     */
    where: messagesWhereUniqueInput
  }

  /**
   * messages deleteMany
   */
  export type messagesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which messages to delete
     */
    where?: messagesWhereInput
    /**
     * Limit how many messages to delete.
     */
    limit?: number
  }

  /**
   * messages.conversations
   */
  export type messages$conversationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversations
     */
    select?: conversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conversations
     */
    omit?: conversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conversationsInclude<ExtArgs> | null
    where?: conversationsWhereInput
  }

  /**
   * messages.patient
   */
  export type messages$patientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient
     */
    select?: patientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the patient
     */
    omit?: patientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patientInclude<ExtArgs> | null
    where?: patientWhereInput
  }

  /**
   * messages without action
   */
  export type messagesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
  }


  /**
   * Model notes
   */

  export type AggregateNotes = {
    _count: NotesCountAggregateOutputType | null
    _avg: NotesAvgAggregateOutputType | null
    _sum: NotesSumAggregateOutputType | null
    _min: NotesMinAggregateOutputType | null
    _max: NotesMaxAggregateOutputType | null
  }

  export type NotesAvgAggregateOutputType = {
    id: number | null
    doctor_id: number | null
    patient_id: number | null
  }

  export type NotesSumAggregateOutputType = {
    id: bigint | null
    doctor_id: bigint | null
    patient_id: bigint | null
  }

  export type NotesMinAggregateOutputType = {
    id: bigint | null
    doctor_id: bigint | null
    patient_id: bigint | null
    content: string | null
    date: Date | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type NotesMaxAggregateOutputType = {
    id: bigint | null
    doctor_id: bigint | null
    patient_id: bigint | null
    content: string | null
    date: Date | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type NotesCountAggregateOutputType = {
    id: number
    doctor_id: number
    patient_id: number
    content: number
    date: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type NotesAvgAggregateInputType = {
    id?: true
    doctor_id?: true
    patient_id?: true
  }

  export type NotesSumAggregateInputType = {
    id?: true
    doctor_id?: true
    patient_id?: true
  }

  export type NotesMinAggregateInputType = {
    id?: true
    doctor_id?: true
    patient_id?: true
    content?: true
    date?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type NotesMaxAggregateInputType = {
    id?: true
    doctor_id?: true
    patient_id?: true
    content?: true
    date?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type NotesCountAggregateInputType = {
    id?: true
    doctor_id?: true
    patient_id?: true
    content?: true
    date?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type NotesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which notes to aggregate.
     */
    where?: notesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notes to fetch.
     */
    orderBy?: notesOrderByWithRelationInput | notesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: notesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned notes
    **/
    _count?: true | NotesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NotesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotesMaxAggregateInputType
  }

  export type GetNotesAggregateType<T extends NotesAggregateArgs> = {
        [P in keyof T & keyof AggregateNotes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotes[P]>
      : GetScalarType<T[P], AggregateNotes[P]>
  }




  export type notesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: notesWhereInput
    orderBy?: notesOrderByWithAggregationInput | notesOrderByWithAggregationInput[]
    by: NotesScalarFieldEnum[] | NotesScalarFieldEnum
    having?: notesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotesCountAggregateInputType | true
    _avg?: NotesAvgAggregateInputType
    _sum?: NotesSumAggregateInputType
    _min?: NotesMinAggregateInputType
    _max?: NotesMaxAggregateInputType
  }

  export type NotesGroupByOutputType = {
    id: bigint
    doctor_id: bigint | null
    patient_id: bigint | null
    content: string
    date: Date | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    _count: NotesCountAggregateOutputType | null
    _avg: NotesAvgAggregateOutputType | null
    _sum: NotesSumAggregateOutputType | null
    _min: NotesMinAggregateOutputType | null
    _max: NotesMaxAggregateOutputType | null
  }

  type GetNotesGroupByPayload<T extends notesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotesGroupByOutputType[P]>
            : GetScalarType<T[P], NotesGroupByOutputType[P]>
        }
      >
    >


  export type notesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    doctor_id?: boolean
    patient_id?: boolean
    content?: boolean
    date?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    doctor?: boolean | notes$doctorArgs<ExtArgs>
    patient?: boolean | notes$patientArgs<ExtArgs>
  }, ExtArgs["result"]["notes"]>

  export type notesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    doctor_id?: boolean
    patient_id?: boolean
    content?: boolean
    date?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    doctor?: boolean | notes$doctorArgs<ExtArgs>
    patient?: boolean | notes$patientArgs<ExtArgs>
  }, ExtArgs["result"]["notes"]>

  export type notesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    doctor_id?: boolean
    patient_id?: boolean
    content?: boolean
    date?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    doctor?: boolean | notes$doctorArgs<ExtArgs>
    patient?: boolean | notes$patientArgs<ExtArgs>
  }, ExtArgs["result"]["notes"]>

  export type notesSelectScalar = {
    id?: boolean
    doctor_id?: boolean
    patient_id?: boolean
    content?: boolean
    date?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }

  export type notesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "doctor_id" | "patient_id" | "content" | "date" | "created_at" | "updated_at" | "deleted_at", ExtArgs["result"]["notes"]>
  export type notesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctor?: boolean | notes$doctorArgs<ExtArgs>
    patient?: boolean | notes$patientArgs<ExtArgs>
  }
  export type notesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctor?: boolean | notes$doctorArgs<ExtArgs>
    patient?: boolean | notes$patientArgs<ExtArgs>
  }
  export type notesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctor?: boolean | notes$doctorArgs<ExtArgs>
    patient?: boolean | notes$patientArgs<ExtArgs>
  }

  export type $notesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "notes"
    objects: {
      doctor: Prisma.$doctorPayload<ExtArgs> | null
      patient: Prisma.$patientPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      doctor_id: bigint | null
      patient_id: bigint | null
      content: string
      date: Date | null
      created_at: Date | null
      updated_at: Date | null
      deleted_at: Date | null
    }, ExtArgs["result"]["notes"]>
    composites: {}
  }

  type notesGetPayload<S extends boolean | null | undefined | notesDefaultArgs> = $Result.GetResult<Prisma.$notesPayload, S>

  type notesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<notesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotesCountAggregateInputType | true
    }

  export interface notesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['notes'], meta: { name: 'notes' } }
    /**
     * Find zero or one Notes that matches the filter.
     * @param {notesFindUniqueArgs} args - Arguments to find a Notes
     * @example
     * // Get one Notes
     * const notes = await prisma.notes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends notesFindUniqueArgs>(args: SelectSubset<T, notesFindUniqueArgs<ExtArgs>>): Prisma__notesClient<$Result.GetResult<Prisma.$notesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {notesFindUniqueOrThrowArgs} args - Arguments to find a Notes
     * @example
     * // Get one Notes
     * const notes = await prisma.notes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends notesFindUniqueOrThrowArgs>(args: SelectSubset<T, notesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__notesClient<$Result.GetResult<Prisma.$notesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notesFindFirstArgs} args - Arguments to find a Notes
     * @example
     * // Get one Notes
     * const notes = await prisma.notes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends notesFindFirstArgs>(args?: SelectSubset<T, notesFindFirstArgs<ExtArgs>>): Prisma__notesClient<$Result.GetResult<Prisma.$notesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notesFindFirstOrThrowArgs} args - Arguments to find a Notes
     * @example
     * // Get one Notes
     * const notes = await prisma.notes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends notesFindFirstOrThrowArgs>(args?: SelectSubset<T, notesFindFirstOrThrowArgs<ExtArgs>>): Prisma__notesClient<$Result.GetResult<Prisma.$notesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notes
     * const notes = await prisma.notes.findMany()
     * 
     * // Get first 10 Notes
     * const notes = await prisma.notes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notesWithIdOnly = await prisma.notes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends notesFindManyArgs>(args?: SelectSubset<T, notesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notes.
     * @param {notesCreateArgs} args - Arguments to create a Notes.
     * @example
     * // Create one Notes
     * const Notes = await prisma.notes.create({
     *   data: {
     *     // ... data to create a Notes
     *   }
     * })
     * 
     */
    create<T extends notesCreateArgs>(args: SelectSubset<T, notesCreateArgs<ExtArgs>>): Prisma__notesClient<$Result.GetResult<Prisma.$notesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notes.
     * @param {notesCreateManyArgs} args - Arguments to create many Notes.
     * @example
     * // Create many Notes
     * const notes = await prisma.notes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends notesCreateManyArgs>(args?: SelectSubset<T, notesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notes and returns the data saved in the database.
     * @param {notesCreateManyAndReturnArgs} args - Arguments to create many Notes.
     * @example
     * // Create many Notes
     * const notes = await prisma.notes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notes and only return the `id`
     * const notesWithIdOnly = await prisma.notes.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends notesCreateManyAndReturnArgs>(args?: SelectSubset<T, notesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notes.
     * @param {notesDeleteArgs} args - Arguments to delete one Notes.
     * @example
     * // Delete one Notes
     * const Notes = await prisma.notes.delete({
     *   where: {
     *     // ... filter to delete one Notes
     *   }
     * })
     * 
     */
    delete<T extends notesDeleteArgs>(args: SelectSubset<T, notesDeleteArgs<ExtArgs>>): Prisma__notesClient<$Result.GetResult<Prisma.$notesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notes.
     * @param {notesUpdateArgs} args - Arguments to update one Notes.
     * @example
     * // Update one Notes
     * const notes = await prisma.notes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends notesUpdateArgs>(args: SelectSubset<T, notesUpdateArgs<ExtArgs>>): Prisma__notesClient<$Result.GetResult<Prisma.$notesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notes.
     * @param {notesDeleteManyArgs} args - Arguments to filter Notes to delete.
     * @example
     * // Delete a few Notes
     * const { count } = await prisma.notes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends notesDeleteManyArgs>(args?: SelectSubset<T, notesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notes
     * const notes = await prisma.notes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends notesUpdateManyArgs>(args: SelectSubset<T, notesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notes and returns the data updated in the database.
     * @param {notesUpdateManyAndReturnArgs} args - Arguments to update many Notes.
     * @example
     * // Update many Notes
     * const notes = await prisma.notes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notes and only return the `id`
     * const notesWithIdOnly = await prisma.notes.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends notesUpdateManyAndReturnArgs>(args: SelectSubset<T, notesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notes.
     * @param {notesUpsertArgs} args - Arguments to update or create a Notes.
     * @example
     * // Update or create a Notes
     * const notes = await prisma.notes.upsert({
     *   create: {
     *     // ... data to create a Notes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notes we want to update
     *   }
     * })
     */
    upsert<T extends notesUpsertArgs>(args: SelectSubset<T, notesUpsertArgs<ExtArgs>>): Prisma__notesClient<$Result.GetResult<Prisma.$notesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notesCountArgs} args - Arguments to filter Notes to count.
     * @example
     * // Count the number of Notes
     * const count = await prisma.notes.count({
     *   where: {
     *     // ... the filter for the Notes we want to count
     *   }
     * })
    **/
    count<T extends notesCountArgs>(
      args?: Subset<T, notesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotesAggregateArgs>(args: Subset<T, NotesAggregateArgs>): Prisma.PrismaPromise<GetNotesAggregateType<T>>

    /**
     * Group by Notes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends notesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: notesGroupByArgs['orderBy'] }
        : { orderBy?: notesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, notesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the notes model
   */
  readonly fields: notesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for notes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__notesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    doctor<T extends notes$doctorArgs<ExtArgs> = {}>(args?: Subset<T, notes$doctorArgs<ExtArgs>>): Prisma__doctorClient<$Result.GetResult<Prisma.$doctorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    patient<T extends notes$patientArgs<ExtArgs> = {}>(args?: Subset<T, notes$patientArgs<ExtArgs>>): Prisma__patientClient<$Result.GetResult<Prisma.$patientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the notes model
   */
  interface notesFieldRefs {
    readonly id: FieldRef<"notes", 'BigInt'>
    readonly doctor_id: FieldRef<"notes", 'BigInt'>
    readonly patient_id: FieldRef<"notes", 'BigInt'>
    readonly content: FieldRef<"notes", 'String'>
    readonly date: FieldRef<"notes", 'DateTime'>
    readonly created_at: FieldRef<"notes", 'DateTime'>
    readonly updated_at: FieldRef<"notes", 'DateTime'>
    readonly deleted_at: FieldRef<"notes", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * notes findUnique
   */
  export type notesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notes
     */
    select?: notesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notes
     */
    omit?: notesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notesInclude<ExtArgs> | null
    /**
     * Filter, which notes to fetch.
     */
    where: notesWhereUniqueInput
  }

  /**
   * notes findUniqueOrThrow
   */
  export type notesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notes
     */
    select?: notesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notes
     */
    omit?: notesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notesInclude<ExtArgs> | null
    /**
     * Filter, which notes to fetch.
     */
    where: notesWhereUniqueInput
  }

  /**
   * notes findFirst
   */
  export type notesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notes
     */
    select?: notesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notes
     */
    omit?: notesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notesInclude<ExtArgs> | null
    /**
     * Filter, which notes to fetch.
     */
    where?: notesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notes to fetch.
     */
    orderBy?: notesOrderByWithRelationInput | notesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for notes.
     */
    cursor?: notesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of notes.
     */
    distinct?: NotesScalarFieldEnum | NotesScalarFieldEnum[]
  }

  /**
   * notes findFirstOrThrow
   */
  export type notesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notes
     */
    select?: notesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notes
     */
    omit?: notesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notesInclude<ExtArgs> | null
    /**
     * Filter, which notes to fetch.
     */
    where?: notesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notes to fetch.
     */
    orderBy?: notesOrderByWithRelationInput | notesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for notes.
     */
    cursor?: notesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of notes.
     */
    distinct?: NotesScalarFieldEnum | NotesScalarFieldEnum[]
  }

  /**
   * notes findMany
   */
  export type notesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notes
     */
    select?: notesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notes
     */
    omit?: notesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notesInclude<ExtArgs> | null
    /**
     * Filter, which notes to fetch.
     */
    where?: notesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notes to fetch.
     */
    orderBy?: notesOrderByWithRelationInput | notesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing notes.
     */
    cursor?: notesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notes.
     */
    skip?: number
    distinct?: NotesScalarFieldEnum | NotesScalarFieldEnum[]
  }

  /**
   * notes create
   */
  export type notesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notes
     */
    select?: notesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notes
     */
    omit?: notesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notesInclude<ExtArgs> | null
    /**
     * The data needed to create a notes.
     */
    data: XOR<notesCreateInput, notesUncheckedCreateInput>
  }

  /**
   * notes createMany
   */
  export type notesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many notes.
     */
    data: notesCreateManyInput | notesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * notes createManyAndReturn
   */
  export type notesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notes
     */
    select?: notesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the notes
     */
    omit?: notesOmit<ExtArgs> | null
    /**
     * The data used to create many notes.
     */
    data: notesCreateManyInput | notesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * notes update
   */
  export type notesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notes
     */
    select?: notesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notes
     */
    omit?: notesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notesInclude<ExtArgs> | null
    /**
     * The data needed to update a notes.
     */
    data: XOR<notesUpdateInput, notesUncheckedUpdateInput>
    /**
     * Choose, which notes to update.
     */
    where: notesWhereUniqueInput
  }

  /**
   * notes updateMany
   */
  export type notesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update notes.
     */
    data: XOR<notesUpdateManyMutationInput, notesUncheckedUpdateManyInput>
    /**
     * Filter which notes to update
     */
    where?: notesWhereInput
    /**
     * Limit how many notes to update.
     */
    limit?: number
  }

  /**
   * notes updateManyAndReturn
   */
  export type notesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notes
     */
    select?: notesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the notes
     */
    omit?: notesOmit<ExtArgs> | null
    /**
     * The data used to update notes.
     */
    data: XOR<notesUpdateManyMutationInput, notesUncheckedUpdateManyInput>
    /**
     * Filter which notes to update
     */
    where?: notesWhereInput
    /**
     * Limit how many notes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * notes upsert
   */
  export type notesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notes
     */
    select?: notesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notes
     */
    omit?: notesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notesInclude<ExtArgs> | null
    /**
     * The filter to search for the notes to update in case it exists.
     */
    where: notesWhereUniqueInput
    /**
     * In case the notes found by the `where` argument doesn't exist, create a new notes with this data.
     */
    create: XOR<notesCreateInput, notesUncheckedCreateInput>
    /**
     * In case the notes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<notesUpdateInput, notesUncheckedUpdateInput>
  }

  /**
   * notes delete
   */
  export type notesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notes
     */
    select?: notesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notes
     */
    omit?: notesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notesInclude<ExtArgs> | null
    /**
     * Filter which notes to delete.
     */
    where: notesWhereUniqueInput
  }

  /**
   * notes deleteMany
   */
  export type notesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which notes to delete
     */
    where?: notesWhereInput
    /**
     * Limit how many notes to delete.
     */
    limit?: number
  }

  /**
   * notes.doctor
   */
  export type notes$doctorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctor
     */
    select?: doctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the doctor
     */
    omit?: doctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: doctorInclude<ExtArgs> | null
    where?: doctorWhereInput
  }

  /**
   * notes.patient
   */
  export type notes$patientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient
     */
    select?: patientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the patient
     */
    omit?: patientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patientInclude<ExtArgs> | null
    where?: patientWhereInput
  }

  /**
   * notes without action
   */
  export type notesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notes
     */
    select?: notesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notes
     */
    omit?: notesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notesInclude<ExtArgs> | null
  }


  /**
   * Model notifications
   */

  export type AggregateNotifications = {
    _count: NotificationsCountAggregateOutputType | null
    _avg: NotificationsAvgAggregateOutputType | null
    _sum: NotificationsSumAggregateOutputType | null
    _min: NotificationsMinAggregateOutputType | null
    _max: NotificationsMaxAggregateOutputType | null
  }

  export type NotificationsAvgAggregateOutputType = {
    id: number | null
    patient_id: number | null
    doctor_id: number | null
  }

  export type NotificationsSumAggregateOutputType = {
    id: bigint | null
    patient_id: bigint | null
    doctor_id: bigint | null
  }

  export type NotificationsMinAggregateOutputType = {
    id: bigint | null
    patient_id: bigint | null
    doctor_id: bigint | null
    message: string | null
    title: string | null
    description: string | null
    link: string | null
    external_id: string | null
    seen: boolean | null
    seen_time: Date | null
    date: Date | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type NotificationsMaxAggregateOutputType = {
    id: bigint | null
    patient_id: bigint | null
    doctor_id: bigint | null
    message: string | null
    title: string | null
    description: string | null
    link: string | null
    external_id: string | null
    seen: boolean | null
    seen_time: Date | null
    date: Date | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type NotificationsCountAggregateOutputType = {
    id: number
    patient_id: number
    doctor_id: number
    message: number
    title: number
    description: number
    link: number
    external_id: number
    seen: number
    seen_time: number
    date: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type NotificationsAvgAggregateInputType = {
    id?: true
    patient_id?: true
    doctor_id?: true
  }

  export type NotificationsSumAggregateInputType = {
    id?: true
    patient_id?: true
    doctor_id?: true
  }

  export type NotificationsMinAggregateInputType = {
    id?: true
    patient_id?: true
    doctor_id?: true
    message?: true
    title?: true
    description?: true
    link?: true
    external_id?: true
    seen?: true
    seen_time?: true
    date?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type NotificationsMaxAggregateInputType = {
    id?: true
    patient_id?: true
    doctor_id?: true
    message?: true
    title?: true
    description?: true
    link?: true
    external_id?: true
    seen?: true
    seen_time?: true
    date?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type NotificationsCountAggregateInputType = {
    id?: true
    patient_id?: true
    doctor_id?: true
    message?: true
    title?: true
    description?: true
    link?: true
    external_id?: true
    seen?: true
    seen_time?: true
    date?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type NotificationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which notifications to aggregate.
     */
    where?: notificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifications to fetch.
     */
    orderBy?: notificationsOrderByWithRelationInput | notificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: notificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned notifications
    **/
    _count?: true | NotificationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NotificationsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotificationsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationsMaxAggregateInputType
  }

  export type GetNotificationsAggregateType<T extends NotificationsAggregateArgs> = {
        [P in keyof T & keyof AggregateNotifications]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotifications[P]>
      : GetScalarType<T[P], AggregateNotifications[P]>
  }




  export type notificationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: notificationsWhereInput
    orderBy?: notificationsOrderByWithAggregationInput | notificationsOrderByWithAggregationInput[]
    by: NotificationsScalarFieldEnum[] | NotificationsScalarFieldEnum
    having?: notificationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationsCountAggregateInputType | true
    _avg?: NotificationsAvgAggregateInputType
    _sum?: NotificationsSumAggregateInputType
    _min?: NotificationsMinAggregateInputType
    _max?: NotificationsMaxAggregateInputType
  }

  export type NotificationsGroupByOutputType = {
    id: bigint
    patient_id: bigint | null
    doctor_id: bigint | null
    message: string
    title: string | null
    description: string | null
    link: string | null
    external_id: string | null
    seen: boolean | null
    seen_time: Date | null
    date: Date | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    _count: NotificationsCountAggregateOutputType | null
    _avg: NotificationsAvgAggregateOutputType | null
    _sum: NotificationsSumAggregateOutputType | null
    _min: NotificationsMinAggregateOutputType | null
    _max: NotificationsMaxAggregateOutputType | null
  }

  type GetNotificationsGroupByPayload<T extends notificationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationsGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationsGroupByOutputType[P]>
        }
      >
    >


  export type notificationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patient_id?: boolean
    doctor_id?: boolean
    message?: boolean
    title?: boolean
    description?: boolean
    link?: boolean
    external_id?: boolean
    seen?: boolean
    seen_time?: boolean
    date?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    doctor?: boolean | notifications$doctorArgs<ExtArgs>
    patient?: boolean | notifications$patientArgs<ExtArgs>
  }, ExtArgs["result"]["notifications"]>

  export type notificationsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patient_id?: boolean
    doctor_id?: boolean
    message?: boolean
    title?: boolean
    description?: boolean
    link?: boolean
    external_id?: boolean
    seen?: boolean
    seen_time?: boolean
    date?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    doctor?: boolean | notifications$doctorArgs<ExtArgs>
    patient?: boolean | notifications$patientArgs<ExtArgs>
  }, ExtArgs["result"]["notifications"]>

  export type notificationsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patient_id?: boolean
    doctor_id?: boolean
    message?: boolean
    title?: boolean
    description?: boolean
    link?: boolean
    external_id?: boolean
    seen?: boolean
    seen_time?: boolean
    date?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    doctor?: boolean | notifications$doctorArgs<ExtArgs>
    patient?: boolean | notifications$patientArgs<ExtArgs>
  }, ExtArgs["result"]["notifications"]>

  export type notificationsSelectScalar = {
    id?: boolean
    patient_id?: boolean
    doctor_id?: boolean
    message?: boolean
    title?: boolean
    description?: boolean
    link?: boolean
    external_id?: boolean
    seen?: boolean
    seen_time?: boolean
    date?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }

  export type notificationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "patient_id" | "doctor_id" | "message" | "title" | "description" | "link" | "external_id" | "seen" | "seen_time" | "date" | "created_at" | "updated_at" | "deleted_at", ExtArgs["result"]["notifications"]>
  export type notificationsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctor?: boolean | notifications$doctorArgs<ExtArgs>
    patient?: boolean | notifications$patientArgs<ExtArgs>
  }
  export type notificationsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctor?: boolean | notifications$doctorArgs<ExtArgs>
    patient?: boolean | notifications$patientArgs<ExtArgs>
  }
  export type notificationsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctor?: boolean | notifications$doctorArgs<ExtArgs>
    patient?: boolean | notifications$patientArgs<ExtArgs>
  }

  export type $notificationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "notifications"
    objects: {
      doctor: Prisma.$doctorPayload<ExtArgs> | null
      patient: Prisma.$patientPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      patient_id: bigint | null
      doctor_id: bigint | null
      message: string
      title: string | null
      description: string | null
      link: string | null
      external_id: string | null
      seen: boolean | null
      seen_time: Date | null
      date: Date | null
      created_at: Date | null
      updated_at: Date | null
      deleted_at: Date | null
    }, ExtArgs["result"]["notifications"]>
    composites: {}
  }

  type notificationsGetPayload<S extends boolean | null | undefined | notificationsDefaultArgs> = $Result.GetResult<Prisma.$notificationsPayload, S>

  type notificationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<notificationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationsCountAggregateInputType | true
    }

  export interface notificationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['notifications'], meta: { name: 'notifications' } }
    /**
     * Find zero or one Notifications that matches the filter.
     * @param {notificationsFindUniqueArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends notificationsFindUniqueArgs>(args: SelectSubset<T, notificationsFindUniqueArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notifications that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {notificationsFindUniqueOrThrowArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends notificationsFindUniqueOrThrowArgs>(args: SelectSubset<T, notificationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationsFindFirstArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends notificationsFindFirstArgs>(args?: SelectSubset<T, notificationsFindFirstArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notifications that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationsFindFirstOrThrowArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends notificationsFindFirstOrThrowArgs>(args?: SelectSubset<T, notificationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notifications.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notifications.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationsWithIdOnly = await prisma.notifications.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends notificationsFindManyArgs>(args?: SelectSubset<T, notificationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notifications.
     * @param {notificationsCreateArgs} args - Arguments to create a Notifications.
     * @example
     * // Create one Notifications
     * const Notifications = await prisma.notifications.create({
     *   data: {
     *     // ... data to create a Notifications
     *   }
     * })
     * 
     */
    create<T extends notificationsCreateArgs>(args: SelectSubset<T, notificationsCreateArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {notificationsCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notifications = await prisma.notifications.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends notificationsCreateManyArgs>(args?: SelectSubset<T, notificationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {notificationsCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notifications = await prisma.notifications.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifications and only return the `id`
     * const notificationsWithIdOnly = await prisma.notifications.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends notificationsCreateManyAndReturnArgs>(args?: SelectSubset<T, notificationsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notifications.
     * @param {notificationsDeleteArgs} args - Arguments to delete one Notifications.
     * @example
     * // Delete one Notifications
     * const Notifications = await prisma.notifications.delete({
     *   where: {
     *     // ... filter to delete one Notifications
     *   }
     * })
     * 
     */
    delete<T extends notificationsDeleteArgs>(args: SelectSubset<T, notificationsDeleteArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notifications.
     * @param {notificationsUpdateArgs} args - Arguments to update one Notifications.
     * @example
     * // Update one Notifications
     * const notifications = await prisma.notifications.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends notificationsUpdateArgs>(args: SelectSubset<T, notificationsUpdateArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {notificationsDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notifications.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends notificationsDeleteManyArgs>(args?: SelectSubset<T, notificationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notifications = await prisma.notifications.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends notificationsUpdateManyArgs>(args: SelectSubset<T, notificationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications and returns the data updated in the database.
     * @param {notificationsUpdateManyAndReturnArgs} args - Arguments to update many Notifications.
     * @example
     * // Update many Notifications
     * const notifications = await prisma.notifications.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notifications and only return the `id`
     * const notificationsWithIdOnly = await prisma.notifications.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends notificationsUpdateManyAndReturnArgs>(args: SelectSubset<T, notificationsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notifications.
     * @param {notificationsUpsertArgs} args - Arguments to update or create a Notifications.
     * @example
     * // Update or create a Notifications
     * const notifications = await prisma.notifications.upsert({
     *   create: {
     *     // ... data to create a Notifications
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notifications we want to update
     *   }
     * })
     */
    upsert<T extends notificationsUpsertArgs>(args: SelectSubset<T, notificationsUpsertArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationsCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notifications.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends notificationsCountArgs>(
      args?: Subset<T, notificationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotificationsAggregateArgs>(args: Subset<T, NotificationsAggregateArgs>): Prisma.PrismaPromise<GetNotificationsAggregateType<T>>

    /**
     * Group by Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends notificationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: notificationsGroupByArgs['orderBy'] }
        : { orderBy?: notificationsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, notificationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the notifications model
   */
  readonly fields: notificationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for notifications.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__notificationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    doctor<T extends notifications$doctorArgs<ExtArgs> = {}>(args?: Subset<T, notifications$doctorArgs<ExtArgs>>): Prisma__doctorClient<$Result.GetResult<Prisma.$doctorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    patient<T extends notifications$patientArgs<ExtArgs> = {}>(args?: Subset<T, notifications$patientArgs<ExtArgs>>): Prisma__patientClient<$Result.GetResult<Prisma.$patientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the notifications model
   */
  interface notificationsFieldRefs {
    readonly id: FieldRef<"notifications", 'BigInt'>
    readonly patient_id: FieldRef<"notifications", 'BigInt'>
    readonly doctor_id: FieldRef<"notifications", 'BigInt'>
    readonly message: FieldRef<"notifications", 'String'>
    readonly title: FieldRef<"notifications", 'String'>
    readonly description: FieldRef<"notifications", 'String'>
    readonly link: FieldRef<"notifications", 'String'>
    readonly external_id: FieldRef<"notifications", 'String'>
    readonly seen: FieldRef<"notifications", 'Boolean'>
    readonly seen_time: FieldRef<"notifications", 'DateTime'>
    readonly date: FieldRef<"notifications", 'DateTime'>
    readonly created_at: FieldRef<"notifications", 'DateTime'>
    readonly updated_at: FieldRef<"notifications", 'DateTime'>
    readonly deleted_at: FieldRef<"notifications", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * notifications findUnique
   */
  export type notificationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
    /**
     * Filter, which notifications to fetch.
     */
    where: notificationsWhereUniqueInput
  }

  /**
   * notifications findUniqueOrThrow
   */
  export type notificationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
    /**
     * Filter, which notifications to fetch.
     */
    where: notificationsWhereUniqueInput
  }

  /**
   * notifications findFirst
   */
  export type notificationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
    /**
     * Filter, which notifications to fetch.
     */
    where?: notificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifications to fetch.
     */
    orderBy?: notificationsOrderByWithRelationInput | notificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for notifications.
     */
    cursor?: notificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of notifications.
     */
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * notifications findFirstOrThrow
   */
  export type notificationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
    /**
     * Filter, which notifications to fetch.
     */
    where?: notificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifications to fetch.
     */
    orderBy?: notificationsOrderByWithRelationInput | notificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for notifications.
     */
    cursor?: notificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of notifications.
     */
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * notifications findMany
   */
  export type notificationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
    /**
     * Filter, which notifications to fetch.
     */
    where?: notificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifications to fetch.
     */
    orderBy?: notificationsOrderByWithRelationInput | notificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing notifications.
     */
    cursor?: notificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifications.
     */
    skip?: number
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * notifications create
   */
  export type notificationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
    /**
     * The data needed to create a notifications.
     */
    data: XOR<notificationsCreateInput, notificationsUncheckedCreateInput>
  }

  /**
   * notifications createMany
   */
  export type notificationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many notifications.
     */
    data: notificationsCreateManyInput | notificationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * notifications createManyAndReturn
   */
  export type notificationsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * The data used to create many notifications.
     */
    data: notificationsCreateManyInput | notificationsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * notifications update
   */
  export type notificationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
    /**
     * The data needed to update a notifications.
     */
    data: XOR<notificationsUpdateInput, notificationsUncheckedUpdateInput>
    /**
     * Choose, which notifications to update.
     */
    where: notificationsWhereUniqueInput
  }

  /**
   * notifications updateMany
   */
  export type notificationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update notifications.
     */
    data: XOR<notificationsUpdateManyMutationInput, notificationsUncheckedUpdateManyInput>
    /**
     * Filter which notifications to update
     */
    where?: notificationsWhereInput
    /**
     * Limit how many notifications to update.
     */
    limit?: number
  }

  /**
   * notifications updateManyAndReturn
   */
  export type notificationsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * The data used to update notifications.
     */
    data: XOR<notificationsUpdateManyMutationInput, notificationsUncheckedUpdateManyInput>
    /**
     * Filter which notifications to update
     */
    where?: notificationsWhereInput
    /**
     * Limit how many notifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * notifications upsert
   */
  export type notificationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
    /**
     * The filter to search for the notifications to update in case it exists.
     */
    where: notificationsWhereUniqueInput
    /**
     * In case the notifications found by the `where` argument doesn't exist, create a new notifications with this data.
     */
    create: XOR<notificationsCreateInput, notificationsUncheckedCreateInput>
    /**
     * In case the notifications was found with the provided `where` argument, update it with this data.
     */
    update: XOR<notificationsUpdateInput, notificationsUncheckedUpdateInput>
  }

  /**
   * notifications delete
   */
  export type notificationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
    /**
     * Filter which notifications to delete.
     */
    where: notificationsWhereUniqueInput
  }

  /**
   * notifications deleteMany
   */
  export type notificationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which notifications to delete
     */
    where?: notificationsWhereInput
    /**
     * Limit how many notifications to delete.
     */
    limit?: number
  }

  /**
   * notifications.doctor
   */
  export type notifications$doctorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctor
     */
    select?: doctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the doctor
     */
    omit?: doctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: doctorInclude<ExtArgs> | null
    where?: doctorWhereInput
  }

  /**
   * notifications.patient
   */
  export type notifications$patientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient
     */
    select?: patientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the patient
     */
    omit?: patientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patientInclude<ExtArgs> | null
    where?: patientWhereInput
  }

  /**
   * notifications without action
   */
  export type notificationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
  }


  /**
   * Model patient
   */

  export type AggregatePatient = {
    _count: PatientCountAggregateOutputType | null
    _avg: PatientAvgAggregateOutputType | null
    _sum: PatientSumAggregateOutputType | null
    _min: PatientMinAggregateOutputType | null
    _max: PatientMaxAggregateOutputType | null
  }

  export type PatientAvgAggregateOutputType = {
    id: number | null
    age: number | null
  }

  export type PatientSumAggregateOutputType = {
    id: bigint | null
    age: number | null
  }

  export type PatientMinAggregateOutputType = {
    id: bigint | null
    id_number: string | null
    age: number | null
    name: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type PatientMaxAggregateOutputType = {
    id: bigint | null
    id_number: string | null
    age: number | null
    name: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type PatientCountAggregateOutputType = {
    id: number
    id_number: number
    age: number
    name: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type PatientAvgAggregateInputType = {
    id?: true
    age?: true
  }

  export type PatientSumAggregateInputType = {
    id?: true
    age?: true
  }

  export type PatientMinAggregateInputType = {
    id?: true
    id_number?: true
    age?: true
    name?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type PatientMaxAggregateInputType = {
    id?: true
    id_number?: true
    age?: true
    name?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type PatientCountAggregateInputType = {
    id?: true
    id_number?: true
    age?: true
    name?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type PatientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which patient to aggregate.
     */
    where?: patientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of patients to fetch.
     */
    orderBy?: patientOrderByWithRelationInput | patientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: patientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned patients
    **/
    _count?: true | PatientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PatientAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PatientSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PatientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PatientMaxAggregateInputType
  }

  export type GetPatientAggregateType<T extends PatientAggregateArgs> = {
        [P in keyof T & keyof AggregatePatient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePatient[P]>
      : GetScalarType<T[P], AggregatePatient[P]>
  }




  export type patientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: patientWhereInput
    orderBy?: patientOrderByWithAggregationInput | patientOrderByWithAggregationInput[]
    by: PatientScalarFieldEnum[] | PatientScalarFieldEnum
    having?: patientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PatientCountAggregateInputType | true
    _avg?: PatientAvgAggregateInputType
    _sum?: PatientSumAggregateInputType
    _min?: PatientMinAggregateInputType
    _max?: PatientMaxAggregateInputType
  }

  export type PatientGroupByOutputType = {
    id: bigint
    id_number: string
    age: number
    name: string
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    _count: PatientCountAggregateOutputType | null
    _avg: PatientAvgAggregateOutputType | null
    _sum: PatientSumAggregateOutputType | null
    _min: PatientMinAggregateOutputType | null
    _max: PatientMaxAggregateOutputType | null
  }

  type GetPatientGroupByPayload<T extends patientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PatientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PatientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PatientGroupByOutputType[P]>
            : GetScalarType<T[P], PatientGroupByOutputType[P]>
        }
      >
    >


  export type patientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_number?: boolean
    age?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    appointment?: boolean | patient$appointmentArgs<ExtArgs>
    conversations?: boolean | patient$conversationsArgs<ExtArgs>
    messages?: boolean | patient$messagesArgs<ExtArgs>
    notes?: boolean | patient$notesArgs<ExtArgs>
    notifications?: boolean | patient$notificationsArgs<ExtArgs>
    _count?: boolean | PatientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patient"]>

  export type patientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_number?: boolean
    age?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }, ExtArgs["result"]["patient"]>

  export type patientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_number?: boolean
    age?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }, ExtArgs["result"]["patient"]>

  export type patientSelectScalar = {
    id?: boolean
    id_number?: boolean
    age?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }

  export type patientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_number" | "age" | "name" | "created_at" | "updated_at" | "deleted_at", ExtArgs["result"]["patient"]>
  export type patientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointment?: boolean | patient$appointmentArgs<ExtArgs>
    conversations?: boolean | patient$conversationsArgs<ExtArgs>
    messages?: boolean | patient$messagesArgs<ExtArgs>
    notes?: boolean | patient$notesArgs<ExtArgs>
    notifications?: boolean | patient$notificationsArgs<ExtArgs>
    _count?: boolean | PatientCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type patientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type patientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $patientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "patient"
    objects: {
      appointment: Prisma.$appointmentPayload<ExtArgs>[]
      conversations: Prisma.$conversationsPayload<ExtArgs>[]
      messages: Prisma.$messagesPayload<ExtArgs>[]
      notes: Prisma.$notesPayload<ExtArgs>[]
      notifications: Prisma.$notificationsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      id_number: string
      age: number
      name: string
      created_at: Date | null
      updated_at: Date | null
      deleted_at: Date | null
    }, ExtArgs["result"]["patient"]>
    composites: {}
  }

  type patientGetPayload<S extends boolean | null | undefined | patientDefaultArgs> = $Result.GetResult<Prisma.$patientPayload, S>

  type patientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<patientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PatientCountAggregateInputType | true
    }

  export interface patientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['patient'], meta: { name: 'patient' } }
    /**
     * Find zero or one Patient that matches the filter.
     * @param {patientFindUniqueArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends patientFindUniqueArgs>(args: SelectSubset<T, patientFindUniqueArgs<ExtArgs>>): Prisma__patientClient<$Result.GetResult<Prisma.$patientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Patient that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {patientFindUniqueOrThrowArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends patientFindUniqueOrThrowArgs>(args: SelectSubset<T, patientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__patientClient<$Result.GetResult<Prisma.$patientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Patient that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {patientFindFirstArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends patientFindFirstArgs>(args?: SelectSubset<T, patientFindFirstArgs<ExtArgs>>): Prisma__patientClient<$Result.GetResult<Prisma.$patientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Patient that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {patientFindFirstOrThrowArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends patientFindFirstOrThrowArgs>(args?: SelectSubset<T, patientFindFirstOrThrowArgs<ExtArgs>>): Prisma__patientClient<$Result.GetResult<Prisma.$patientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Patients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {patientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Patients
     * const patients = await prisma.patient.findMany()
     * 
     * // Get first 10 Patients
     * const patients = await prisma.patient.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const patientWithIdOnly = await prisma.patient.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends patientFindManyArgs>(args?: SelectSubset<T, patientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$patientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Patient.
     * @param {patientCreateArgs} args - Arguments to create a Patient.
     * @example
     * // Create one Patient
     * const Patient = await prisma.patient.create({
     *   data: {
     *     // ... data to create a Patient
     *   }
     * })
     * 
     */
    create<T extends patientCreateArgs>(args: SelectSubset<T, patientCreateArgs<ExtArgs>>): Prisma__patientClient<$Result.GetResult<Prisma.$patientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Patients.
     * @param {patientCreateManyArgs} args - Arguments to create many Patients.
     * @example
     * // Create many Patients
     * const patient = await prisma.patient.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends patientCreateManyArgs>(args?: SelectSubset<T, patientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Patients and returns the data saved in the database.
     * @param {patientCreateManyAndReturnArgs} args - Arguments to create many Patients.
     * @example
     * // Create many Patients
     * const patient = await prisma.patient.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Patients and only return the `id`
     * const patientWithIdOnly = await prisma.patient.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends patientCreateManyAndReturnArgs>(args?: SelectSubset<T, patientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$patientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Patient.
     * @param {patientDeleteArgs} args - Arguments to delete one Patient.
     * @example
     * // Delete one Patient
     * const Patient = await prisma.patient.delete({
     *   where: {
     *     // ... filter to delete one Patient
     *   }
     * })
     * 
     */
    delete<T extends patientDeleteArgs>(args: SelectSubset<T, patientDeleteArgs<ExtArgs>>): Prisma__patientClient<$Result.GetResult<Prisma.$patientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Patient.
     * @param {patientUpdateArgs} args - Arguments to update one Patient.
     * @example
     * // Update one Patient
     * const patient = await prisma.patient.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends patientUpdateArgs>(args: SelectSubset<T, patientUpdateArgs<ExtArgs>>): Prisma__patientClient<$Result.GetResult<Prisma.$patientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Patients.
     * @param {patientDeleteManyArgs} args - Arguments to filter Patients to delete.
     * @example
     * // Delete a few Patients
     * const { count } = await prisma.patient.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends patientDeleteManyArgs>(args?: SelectSubset<T, patientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {patientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Patients
     * const patient = await prisma.patient.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends patientUpdateManyArgs>(args: SelectSubset<T, patientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Patients and returns the data updated in the database.
     * @param {patientUpdateManyAndReturnArgs} args - Arguments to update many Patients.
     * @example
     * // Update many Patients
     * const patient = await prisma.patient.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Patients and only return the `id`
     * const patientWithIdOnly = await prisma.patient.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends patientUpdateManyAndReturnArgs>(args: SelectSubset<T, patientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$patientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Patient.
     * @param {patientUpsertArgs} args - Arguments to update or create a Patient.
     * @example
     * // Update or create a Patient
     * const patient = await prisma.patient.upsert({
     *   create: {
     *     // ... data to create a Patient
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Patient we want to update
     *   }
     * })
     */
    upsert<T extends patientUpsertArgs>(args: SelectSubset<T, patientUpsertArgs<ExtArgs>>): Prisma__patientClient<$Result.GetResult<Prisma.$patientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {patientCountArgs} args - Arguments to filter Patients to count.
     * @example
     * // Count the number of Patients
     * const count = await prisma.patient.count({
     *   where: {
     *     // ... the filter for the Patients we want to count
     *   }
     * })
    **/
    count<T extends patientCountArgs>(
      args?: Subset<T, patientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PatientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Patient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PatientAggregateArgs>(args: Subset<T, PatientAggregateArgs>): Prisma.PrismaPromise<GetPatientAggregateType<T>>

    /**
     * Group by Patient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {patientGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends patientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: patientGroupByArgs['orderBy'] }
        : { orderBy?: patientGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, patientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPatientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the patient model
   */
  readonly fields: patientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for patient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__patientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    appointment<T extends patient$appointmentArgs<ExtArgs> = {}>(args?: Subset<T, patient$appointmentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$appointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    conversations<T extends patient$conversationsArgs<ExtArgs> = {}>(args?: Subset<T, patient$conversationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$conversationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    messages<T extends patient$messagesArgs<ExtArgs> = {}>(args?: Subset<T, patient$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notes<T extends patient$notesArgs<ExtArgs> = {}>(args?: Subset<T, patient$notesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications<T extends patient$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, patient$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the patient model
   */
  interface patientFieldRefs {
    readonly id: FieldRef<"patient", 'BigInt'>
    readonly id_number: FieldRef<"patient", 'String'>
    readonly age: FieldRef<"patient", 'Int'>
    readonly name: FieldRef<"patient", 'String'>
    readonly created_at: FieldRef<"patient", 'DateTime'>
    readonly updated_at: FieldRef<"patient", 'DateTime'>
    readonly deleted_at: FieldRef<"patient", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * patient findUnique
   */
  export type patientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient
     */
    select?: patientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the patient
     */
    omit?: patientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patientInclude<ExtArgs> | null
    /**
     * Filter, which patient to fetch.
     */
    where: patientWhereUniqueInput
  }

  /**
   * patient findUniqueOrThrow
   */
  export type patientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient
     */
    select?: patientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the patient
     */
    omit?: patientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patientInclude<ExtArgs> | null
    /**
     * Filter, which patient to fetch.
     */
    where: patientWhereUniqueInput
  }

  /**
   * patient findFirst
   */
  export type patientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient
     */
    select?: patientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the patient
     */
    omit?: patientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patientInclude<ExtArgs> | null
    /**
     * Filter, which patient to fetch.
     */
    where?: patientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of patients to fetch.
     */
    orderBy?: patientOrderByWithRelationInput | patientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for patients.
     */
    cursor?: patientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of patients.
     */
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * patient findFirstOrThrow
   */
  export type patientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient
     */
    select?: patientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the patient
     */
    omit?: patientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patientInclude<ExtArgs> | null
    /**
     * Filter, which patient to fetch.
     */
    where?: patientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of patients to fetch.
     */
    orderBy?: patientOrderByWithRelationInput | patientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for patients.
     */
    cursor?: patientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of patients.
     */
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * patient findMany
   */
  export type patientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient
     */
    select?: patientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the patient
     */
    omit?: patientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patientInclude<ExtArgs> | null
    /**
     * Filter, which patients to fetch.
     */
    where?: patientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of patients to fetch.
     */
    orderBy?: patientOrderByWithRelationInput | patientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing patients.
     */
    cursor?: patientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` patients.
     */
    skip?: number
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * patient create
   */
  export type patientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient
     */
    select?: patientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the patient
     */
    omit?: patientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patientInclude<ExtArgs> | null
    /**
     * The data needed to create a patient.
     */
    data: XOR<patientCreateInput, patientUncheckedCreateInput>
  }

  /**
   * patient createMany
   */
  export type patientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many patients.
     */
    data: patientCreateManyInput | patientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * patient createManyAndReturn
   */
  export type patientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient
     */
    select?: patientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the patient
     */
    omit?: patientOmit<ExtArgs> | null
    /**
     * The data used to create many patients.
     */
    data: patientCreateManyInput | patientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * patient update
   */
  export type patientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient
     */
    select?: patientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the patient
     */
    omit?: patientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patientInclude<ExtArgs> | null
    /**
     * The data needed to update a patient.
     */
    data: XOR<patientUpdateInput, patientUncheckedUpdateInput>
    /**
     * Choose, which patient to update.
     */
    where: patientWhereUniqueInput
  }

  /**
   * patient updateMany
   */
  export type patientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update patients.
     */
    data: XOR<patientUpdateManyMutationInput, patientUncheckedUpdateManyInput>
    /**
     * Filter which patients to update
     */
    where?: patientWhereInput
    /**
     * Limit how many patients to update.
     */
    limit?: number
  }

  /**
   * patient updateManyAndReturn
   */
  export type patientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient
     */
    select?: patientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the patient
     */
    omit?: patientOmit<ExtArgs> | null
    /**
     * The data used to update patients.
     */
    data: XOR<patientUpdateManyMutationInput, patientUncheckedUpdateManyInput>
    /**
     * Filter which patients to update
     */
    where?: patientWhereInput
    /**
     * Limit how many patients to update.
     */
    limit?: number
  }

  /**
   * patient upsert
   */
  export type patientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient
     */
    select?: patientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the patient
     */
    omit?: patientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patientInclude<ExtArgs> | null
    /**
     * The filter to search for the patient to update in case it exists.
     */
    where: patientWhereUniqueInput
    /**
     * In case the patient found by the `where` argument doesn't exist, create a new patient with this data.
     */
    create: XOR<patientCreateInput, patientUncheckedCreateInput>
    /**
     * In case the patient was found with the provided `where` argument, update it with this data.
     */
    update: XOR<patientUpdateInput, patientUncheckedUpdateInput>
  }

  /**
   * patient delete
   */
  export type patientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient
     */
    select?: patientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the patient
     */
    omit?: patientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patientInclude<ExtArgs> | null
    /**
     * Filter which patient to delete.
     */
    where: patientWhereUniqueInput
  }

  /**
   * patient deleteMany
   */
  export type patientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which patients to delete
     */
    where?: patientWhereInput
    /**
     * Limit how many patients to delete.
     */
    limit?: number
  }

  /**
   * patient.appointment
   */
  export type patient$appointmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment
     */
    select?: appointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the appointment
     */
    omit?: appointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: appointmentInclude<ExtArgs> | null
    where?: appointmentWhereInput
    orderBy?: appointmentOrderByWithRelationInput | appointmentOrderByWithRelationInput[]
    cursor?: appointmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * patient.conversations
   */
  export type patient$conversationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversations
     */
    select?: conversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conversations
     */
    omit?: conversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conversationsInclude<ExtArgs> | null
    where?: conversationsWhereInput
    orderBy?: conversationsOrderByWithRelationInput | conversationsOrderByWithRelationInput[]
    cursor?: conversationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConversationsScalarFieldEnum | ConversationsScalarFieldEnum[]
  }

  /**
   * patient.messages
   */
  export type patient$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    where?: messagesWhereInput
    orderBy?: messagesOrderByWithRelationInput | messagesOrderByWithRelationInput[]
    cursor?: messagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * patient.notes
   */
  export type patient$notesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notes
     */
    select?: notesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notes
     */
    omit?: notesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notesInclude<ExtArgs> | null
    where?: notesWhereInput
    orderBy?: notesOrderByWithRelationInput | notesOrderByWithRelationInput[]
    cursor?: notesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotesScalarFieldEnum | NotesScalarFieldEnum[]
  }

  /**
   * patient.notifications
   */
  export type patient$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
    where?: notificationsWhereInput
    orderBy?: notificationsOrderByWithRelationInput | notificationsOrderByWithRelationInput[]
    cursor?: notificationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * patient without action
   */
  export type patientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient
     */
    select?: patientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the patient
     */
    omit?: patientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patientInclude<ExtArgs> | null
  }


  /**
   * Model payment_method
   */

  export type AggregatePayment_method = {
    _count: Payment_methodCountAggregateOutputType | null
    _avg: Payment_methodAvgAggregateOutputType | null
    _sum: Payment_methodSumAggregateOutputType | null
    _min: Payment_methodMinAggregateOutputType | null
    _max: Payment_methodMaxAggregateOutputType | null
  }

  export type Payment_methodAvgAggregateOutputType = {
    id: number | null
  }

  export type Payment_methodSumAggregateOutputType = {
    id: bigint | null
  }

  export type Payment_methodMinAggregateOutputType = {
    id: bigint | null
    type: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type Payment_methodMaxAggregateOutputType = {
    id: bigint | null
    type: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type Payment_methodCountAggregateOutputType = {
    id: number
    type: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type Payment_methodAvgAggregateInputType = {
    id?: true
  }

  export type Payment_methodSumAggregateInputType = {
    id?: true
  }

  export type Payment_methodMinAggregateInputType = {
    id?: true
    type?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type Payment_methodMaxAggregateInputType = {
    id?: true
    type?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type Payment_methodCountAggregateInputType = {
    id?: true
    type?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type Payment_methodAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which payment_method to aggregate.
     */
    where?: payment_methodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payment_methods to fetch.
     */
    orderBy?: payment_methodOrderByWithRelationInput | payment_methodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: payment_methodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payment_methods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payment_methods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned payment_methods
    **/
    _count?: true | Payment_methodCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Payment_methodAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Payment_methodSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Payment_methodMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Payment_methodMaxAggregateInputType
  }

  export type GetPayment_methodAggregateType<T extends Payment_methodAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment_method]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment_method[P]>
      : GetScalarType<T[P], AggregatePayment_method[P]>
  }




  export type payment_methodGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: payment_methodWhereInput
    orderBy?: payment_methodOrderByWithAggregationInput | payment_methodOrderByWithAggregationInput[]
    by: Payment_methodScalarFieldEnum[] | Payment_methodScalarFieldEnum
    having?: payment_methodScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Payment_methodCountAggregateInputType | true
    _avg?: Payment_methodAvgAggregateInputType
    _sum?: Payment_methodSumAggregateInputType
    _min?: Payment_methodMinAggregateInputType
    _max?: Payment_methodMaxAggregateInputType
  }

  export type Payment_methodGroupByOutputType = {
    id: bigint
    type: string
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    _count: Payment_methodCountAggregateOutputType | null
    _avg: Payment_methodAvgAggregateOutputType | null
    _sum: Payment_methodSumAggregateOutputType | null
    _min: Payment_methodMinAggregateOutputType | null
    _max: Payment_methodMaxAggregateOutputType | null
  }

  type GetPayment_methodGroupByPayload<T extends payment_methodGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Payment_methodGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Payment_methodGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Payment_methodGroupByOutputType[P]>
            : GetScalarType<T[P], Payment_methodGroupByOutputType[P]>
        }
      >
    >


  export type payment_methodSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    appointment?: boolean | payment_method$appointmentArgs<ExtArgs>
    _count?: boolean | Payment_methodCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment_method"]>

  export type payment_methodSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }, ExtArgs["result"]["payment_method"]>

  export type payment_methodSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }, ExtArgs["result"]["payment_method"]>

  export type payment_methodSelectScalar = {
    id?: boolean
    type?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }

  export type payment_methodOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "created_at" | "updated_at" | "deleted_at", ExtArgs["result"]["payment_method"]>
  export type payment_methodInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointment?: boolean | payment_method$appointmentArgs<ExtArgs>
    _count?: boolean | Payment_methodCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type payment_methodIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type payment_methodIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $payment_methodPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "payment_method"
    objects: {
      appointment: Prisma.$appointmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      type: string
      created_at: Date | null
      updated_at: Date | null
      deleted_at: Date | null
    }, ExtArgs["result"]["payment_method"]>
    composites: {}
  }

  type payment_methodGetPayload<S extends boolean | null | undefined | payment_methodDefaultArgs> = $Result.GetResult<Prisma.$payment_methodPayload, S>

  type payment_methodCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<payment_methodFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Payment_methodCountAggregateInputType | true
    }

  export interface payment_methodDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['payment_method'], meta: { name: 'payment_method' } }
    /**
     * Find zero or one Payment_method that matches the filter.
     * @param {payment_methodFindUniqueArgs} args - Arguments to find a Payment_method
     * @example
     * // Get one Payment_method
     * const payment_method = await prisma.payment_method.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends payment_methodFindUniqueArgs>(args: SelectSubset<T, payment_methodFindUniqueArgs<ExtArgs>>): Prisma__payment_methodClient<$Result.GetResult<Prisma.$payment_methodPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payment_method that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {payment_methodFindUniqueOrThrowArgs} args - Arguments to find a Payment_method
     * @example
     * // Get one Payment_method
     * const payment_method = await prisma.payment_method.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends payment_methodFindUniqueOrThrowArgs>(args: SelectSubset<T, payment_methodFindUniqueOrThrowArgs<ExtArgs>>): Prisma__payment_methodClient<$Result.GetResult<Prisma.$payment_methodPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment_method that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {payment_methodFindFirstArgs} args - Arguments to find a Payment_method
     * @example
     * // Get one Payment_method
     * const payment_method = await prisma.payment_method.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends payment_methodFindFirstArgs>(args?: SelectSubset<T, payment_methodFindFirstArgs<ExtArgs>>): Prisma__payment_methodClient<$Result.GetResult<Prisma.$payment_methodPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment_method that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {payment_methodFindFirstOrThrowArgs} args - Arguments to find a Payment_method
     * @example
     * // Get one Payment_method
     * const payment_method = await prisma.payment_method.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends payment_methodFindFirstOrThrowArgs>(args?: SelectSubset<T, payment_methodFindFirstOrThrowArgs<ExtArgs>>): Prisma__payment_methodClient<$Result.GetResult<Prisma.$payment_methodPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payment_methods that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {payment_methodFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payment_methods
     * const payment_methods = await prisma.payment_method.findMany()
     * 
     * // Get first 10 Payment_methods
     * const payment_methods = await prisma.payment_method.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const payment_methodWithIdOnly = await prisma.payment_method.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends payment_methodFindManyArgs>(args?: SelectSubset<T, payment_methodFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$payment_methodPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payment_method.
     * @param {payment_methodCreateArgs} args - Arguments to create a Payment_method.
     * @example
     * // Create one Payment_method
     * const Payment_method = await prisma.payment_method.create({
     *   data: {
     *     // ... data to create a Payment_method
     *   }
     * })
     * 
     */
    create<T extends payment_methodCreateArgs>(args: SelectSubset<T, payment_methodCreateArgs<ExtArgs>>): Prisma__payment_methodClient<$Result.GetResult<Prisma.$payment_methodPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payment_methods.
     * @param {payment_methodCreateManyArgs} args - Arguments to create many Payment_methods.
     * @example
     * // Create many Payment_methods
     * const payment_method = await prisma.payment_method.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends payment_methodCreateManyArgs>(args?: SelectSubset<T, payment_methodCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payment_methods and returns the data saved in the database.
     * @param {payment_methodCreateManyAndReturnArgs} args - Arguments to create many Payment_methods.
     * @example
     * // Create many Payment_methods
     * const payment_method = await prisma.payment_method.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payment_methods and only return the `id`
     * const payment_methodWithIdOnly = await prisma.payment_method.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends payment_methodCreateManyAndReturnArgs>(args?: SelectSubset<T, payment_methodCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$payment_methodPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payment_method.
     * @param {payment_methodDeleteArgs} args - Arguments to delete one Payment_method.
     * @example
     * // Delete one Payment_method
     * const Payment_method = await prisma.payment_method.delete({
     *   where: {
     *     // ... filter to delete one Payment_method
     *   }
     * })
     * 
     */
    delete<T extends payment_methodDeleteArgs>(args: SelectSubset<T, payment_methodDeleteArgs<ExtArgs>>): Prisma__payment_methodClient<$Result.GetResult<Prisma.$payment_methodPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payment_method.
     * @param {payment_methodUpdateArgs} args - Arguments to update one Payment_method.
     * @example
     * // Update one Payment_method
     * const payment_method = await prisma.payment_method.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends payment_methodUpdateArgs>(args: SelectSubset<T, payment_methodUpdateArgs<ExtArgs>>): Prisma__payment_methodClient<$Result.GetResult<Prisma.$payment_methodPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payment_methods.
     * @param {payment_methodDeleteManyArgs} args - Arguments to filter Payment_methods to delete.
     * @example
     * // Delete a few Payment_methods
     * const { count } = await prisma.payment_method.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends payment_methodDeleteManyArgs>(args?: SelectSubset<T, payment_methodDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payment_methods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {payment_methodUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payment_methods
     * const payment_method = await prisma.payment_method.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends payment_methodUpdateManyArgs>(args: SelectSubset<T, payment_methodUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payment_methods and returns the data updated in the database.
     * @param {payment_methodUpdateManyAndReturnArgs} args - Arguments to update many Payment_methods.
     * @example
     * // Update many Payment_methods
     * const payment_method = await prisma.payment_method.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payment_methods and only return the `id`
     * const payment_methodWithIdOnly = await prisma.payment_method.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends payment_methodUpdateManyAndReturnArgs>(args: SelectSubset<T, payment_methodUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$payment_methodPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payment_method.
     * @param {payment_methodUpsertArgs} args - Arguments to update or create a Payment_method.
     * @example
     * // Update or create a Payment_method
     * const payment_method = await prisma.payment_method.upsert({
     *   create: {
     *     // ... data to create a Payment_method
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment_method we want to update
     *   }
     * })
     */
    upsert<T extends payment_methodUpsertArgs>(args: SelectSubset<T, payment_methodUpsertArgs<ExtArgs>>): Prisma__payment_methodClient<$Result.GetResult<Prisma.$payment_methodPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payment_methods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {payment_methodCountArgs} args - Arguments to filter Payment_methods to count.
     * @example
     * // Count the number of Payment_methods
     * const count = await prisma.payment_method.count({
     *   where: {
     *     // ... the filter for the Payment_methods we want to count
     *   }
     * })
    **/
    count<T extends payment_methodCountArgs>(
      args?: Subset<T, payment_methodCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Payment_methodCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment_method.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Payment_methodAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Payment_methodAggregateArgs>(args: Subset<T, Payment_methodAggregateArgs>): Prisma.PrismaPromise<GetPayment_methodAggregateType<T>>

    /**
     * Group by Payment_method.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {payment_methodGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends payment_methodGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: payment_methodGroupByArgs['orderBy'] }
        : { orderBy?: payment_methodGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, payment_methodGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPayment_methodGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the payment_method model
   */
  readonly fields: payment_methodFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for payment_method.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__payment_methodClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    appointment<T extends payment_method$appointmentArgs<ExtArgs> = {}>(args?: Subset<T, payment_method$appointmentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$appointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the payment_method model
   */
  interface payment_methodFieldRefs {
    readonly id: FieldRef<"payment_method", 'BigInt'>
    readonly type: FieldRef<"payment_method", 'String'>
    readonly created_at: FieldRef<"payment_method", 'DateTime'>
    readonly updated_at: FieldRef<"payment_method", 'DateTime'>
    readonly deleted_at: FieldRef<"payment_method", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * payment_method findUnique
   */
  export type payment_methodFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_method
     */
    select?: payment_methodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment_method
     */
    omit?: payment_methodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: payment_methodInclude<ExtArgs> | null
    /**
     * Filter, which payment_method to fetch.
     */
    where: payment_methodWhereUniqueInput
  }

  /**
   * payment_method findUniqueOrThrow
   */
  export type payment_methodFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_method
     */
    select?: payment_methodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment_method
     */
    omit?: payment_methodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: payment_methodInclude<ExtArgs> | null
    /**
     * Filter, which payment_method to fetch.
     */
    where: payment_methodWhereUniqueInput
  }

  /**
   * payment_method findFirst
   */
  export type payment_methodFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_method
     */
    select?: payment_methodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment_method
     */
    omit?: payment_methodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: payment_methodInclude<ExtArgs> | null
    /**
     * Filter, which payment_method to fetch.
     */
    where?: payment_methodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payment_methods to fetch.
     */
    orderBy?: payment_methodOrderByWithRelationInput | payment_methodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for payment_methods.
     */
    cursor?: payment_methodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payment_methods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payment_methods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of payment_methods.
     */
    distinct?: Payment_methodScalarFieldEnum | Payment_methodScalarFieldEnum[]
  }

  /**
   * payment_method findFirstOrThrow
   */
  export type payment_methodFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_method
     */
    select?: payment_methodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment_method
     */
    omit?: payment_methodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: payment_methodInclude<ExtArgs> | null
    /**
     * Filter, which payment_method to fetch.
     */
    where?: payment_methodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payment_methods to fetch.
     */
    orderBy?: payment_methodOrderByWithRelationInput | payment_methodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for payment_methods.
     */
    cursor?: payment_methodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payment_methods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payment_methods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of payment_methods.
     */
    distinct?: Payment_methodScalarFieldEnum | Payment_methodScalarFieldEnum[]
  }

  /**
   * payment_method findMany
   */
  export type payment_methodFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_method
     */
    select?: payment_methodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment_method
     */
    omit?: payment_methodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: payment_methodInclude<ExtArgs> | null
    /**
     * Filter, which payment_methods to fetch.
     */
    where?: payment_methodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payment_methods to fetch.
     */
    orderBy?: payment_methodOrderByWithRelationInput | payment_methodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing payment_methods.
     */
    cursor?: payment_methodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payment_methods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payment_methods.
     */
    skip?: number
    distinct?: Payment_methodScalarFieldEnum | Payment_methodScalarFieldEnum[]
  }

  /**
   * payment_method create
   */
  export type payment_methodCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_method
     */
    select?: payment_methodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment_method
     */
    omit?: payment_methodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: payment_methodInclude<ExtArgs> | null
    /**
     * The data needed to create a payment_method.
     */
    data: XOR<payment_methodCreateInput, payment_methodUncheckedCreateInput>
  }

  /**
   * payment_method createMany
   */
  export type payment_methodCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many payment_methods.
     */
    data: payment_methodCreateManyInput | payment_methodCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * payment_method createManyAndReturn
   */
  export type payment_methodCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_method
     */
    select?: payment_methodSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the payment_method
     */
    omit?: payment_methodOmit<ExtArgs> | null
    /**
     * The data used to create many payment_methods.
     */
    data: payment_methodCreateManyInput | payment_methodCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * payment_method update
   */
  export type payment_methodUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_method
     */
    select?: payment_methodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment_method
     */
    omit?: payment_methodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: payment_methodInclude<ExtArgs> | null
    /**
     * The data needed to update a payment_method.
     */
    data: XOR<payment_methodUpdateInput, payment_methodUncheckedUpdateInput>
    /**
     * Choose, which payment_method to update.
     */
    where: payment_methodWhereUniqueInput
  }

  /**
   * payment_method updateMany
   */
  export type payment_methodUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update payment_methods.
     */
    data: XOR<payment_methodUpdateManyMutationInput, payment_methodUncheckedUpdateManyInput>
    /**
     * Filter which payment_methods to update
     */
    where?: payment_methodWhereInput
    /**
     * Limit how many payment_methods to update.
     */
    limit?: number
  }

  /**
   * payment_method updateManyAndReturn
   */
  export type payment_methodUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_method
     */
    select?: payment_methodSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the payment_method
     */
    omit?: payment_methodOmit<ExtArgs> | null
    /**
     * The data used to update payment_methods.
     */
    data: XOR<payment_methodUpdateManyMutationInput, payment_methodUncheckedUpdateManyInput>
    /**
     * Filter which payment_methods to update
     */
    where?: payment_methodWhereInput
    /**
     * Limit how many payment_methods to update.
     */
    limit?: number
  }

  /**
   * payment_method upsert
   */
  export type payment_methodUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_method
     */
    select?: payment_methodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment_method
     */
    omit?: payment_methodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: payment_methodInclude<ExtArgs> | null
    /**
     * The filter to search for the payment_method to update in case it exists.
     */
    where: payment_methodWhereUniqueInput
    /**
     * In case the payment_method found by the `where` argument doesn't exist, create a new payment_method with this data.
     */
    create: XOR<payment_methodCreateInput, payment_methodUncheckedCreateInput>
    /**
     * In case the payment_method was found with the provided `where` argument, update it with this data.
     */
    update: XOR<payment_methodUpdateInput, payment_methodUncheckedUpdateInput>
  }

  /**
   * payment_method delete
   */
  export type payment_methodDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_method
     */
    select?: payment_methodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment_method
     */
    omit?: payment_methodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: payment_methodInclude<ExtArgs> | null
    /**
     * Filter which payment_method to delete.
     */
    where: payment_methodWhereUniqueInput
  }

  /**
   * payment_method deleteMany
   */
  export type payment_methodDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which payment_methods to delete
     */
    where?: payment_methodWhereInput
    /**
     * Limit how many payment_methods to delete.
     */
    limit?: number
  }

  /**
   * payment_method.appointment
   */
  export type payment_method$appointmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment
     */
    select?: appointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the appointment
     */
    omit?: appointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: appointmentInclude<ExtArgs> | null
    where?: appointmentWhereInput
    orderBy?: appointmentOrderByWithRelationInput | appointmentOrderByWithRelationInput[]
    cursor?: appointmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * payment_method without action
   */
  export type payment_methodDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_method
     */
    select?: payment_methodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment_method
     */
    omit?: payment_methodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: payment_methodInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const TestScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type TestScalarFieldEnum = (typeof TestScalarFieldEnum)[keyof typeof TestScalarFieldEnum]


  export const AppointmentScalarFieldEnum: {
    id: 'id',
    patient_id: 'patient_id',
    doctor_id: 'doctor_id',
    date: 'date',
    ailment: 'ailment',
    area: 'area',
    payment_method_id: 'payment_method_id',
    state_id: 'state_id',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type AppointmentScalarFieldEnum = (typeof AppointmentScalarFieldEnum)[keyof typeof AppointmentScalarFieldEnum]


  export const Appointment_statesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type Appointment_statesScalarFieldEnum = (typeof Appointment_statesScalarFieldEnum)[keyof typeof Appointment_statesScalarFieldEnum]


  export const BusinessScalarFieldEnum: {
    id: 'id',
    name: 'name',
    address: 'address',
    hours: 'hours',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type BusinessScalarFieldEnum = (typeof BusinessScalarFieldEnum)[keyof typeof BusinessScalarFieldEnum]


  export const ConversationsScalarFieldEnum: {
    id: 'id',
    patient_id: 'patient_id',
    business_id: 'business_id',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type ConversationsScalarFieldEnum = (typeof ConversationsScalarFieldEnum)[keyof typeof ConversationsScalarFieldEnum]


  export const DoctorScalarFieldEnum: {
    id: 'id',
    name: 'name',
    specialty: 'specialty',
    negocio_id: 'negocio_id',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type DoctorScalarFieldEnum = (typeof DoctorScalarFieldEnum)[keyof typeof DoctorScalarFieldEnum]


  export const MessagesScalarFieldEnum: {
    id: 'id',
    content: 'content',
    date: 'date',
    patient_id: 'patient_id',
    conversation_id: 'conversation_id',
    type: 'type',
    wss_number: 'wss_number',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type MessagesScalarFieldEnum = (typeof MessagesScalarFieldEnum)[keyof typeof MessagesScalarFieldEnum]


  export const NotesScalarFieldEnum: {
    id: 'id',
    doctor_id: 'doctor_id',
    patient_id: 'patient_id',
    content: 'content',
    date: 'date',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type NotesScalarFieldEnum = (typeof NotesScalarFieldEnum)[keyof typeof NotesScalarFieldEnum]


  export const NotificationsScalarFieldEnum: {
    id: 'id',
    patient_id: 'patient_id',
    doctor_id: 'doctor_id',
    message: 'message',
    title: 'title',
    description: 'description',
    link: 'link',
    external_id: 'external_id',
    seen: 'seen',
    seen_time: 'seen_time',
    date: 'date',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type NotificationsScalarFieldEnum = (typeof NotificationsScalarFieldEnum)[keyof typeof NotificationsScalarFieldEnum]


  export const PatientScalarFieldEnum: {
    id: 'id',
    id_number: 'id_number',
    age: 'age',
    name: 'name',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type PatientScalarFieldEnum = (typeof PatientScalarFieldEnum)[keyof typeof PatientScalarFieldEnum]


  export const Payment_methodScalarFieldEnum: {
    id: 'id',
    type: 'type',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type Payment_methodScalarFieldEnum = (typeof Payment_methodScalarFieldEnum)[keyof typeof Payment_methodScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type TestWhereInput = {
    AND?: TestWhereInput | TestWhereInput[]
    OR?: TestWhereInput[]
    NOT?: TestWhereInput | TestWhereInput[]
    id?: IntFilter<"Test"> | number
    name?: StringFilter<"Test"> | string
  }

  export type TestOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TestWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TestWhereInput | TestWhereInput[]
    OR?: TestWhereInput[]
    NOT?: TestWhereInput | TestWhereInput[]
    name?: StringFilter<"Test"> | string
  }, "id">

  export type TestOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: TestCountOrderByAggregateInput
    _avg?: TestAvgOrderByAggregateInput
    _max?: TestMaxOrderByAggregateInput
    _min?: TestMinOrderByAggregateInput
    _sum?: TestSumOrderByAggregateInput
  }

  export type TestScalarWhereWithAggregatesInput = {
    AND?: TestScalarWhereWithAggregatesInput | TestScalarWhereWithAggregatesInput[]
    OR?: TestScalarWhereWithAggregatesInput[]
    NOT?: TestScalarWhereWithAggregatesInput | TestScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Test"> | number
    name?: StringWithAggregatesFilter<"Test"> | string
  }

  export type appointmentWhereInput = {
    AND?: appointmentWhereInput | appointmentWhereInput[]
    OR?: appointmentWhereInput[]
    NOT?: appointmentWhereInput | appointmentWhereInput[]
    id?: BigIntFilter<"appointment"> | bigint | number
    patient_id?: BigIntNullableFilter<"appointment"> | bigint | number | null
    doctor_id?: BigIntNullableFilter<"appointment"> | bigint | number | null
    date?: DateTimeFilter<"appointment"> | Date | string
    ailment?: StringFilter<"appointment"> | string
    area?: StringNullableFilter<"appointment"> | string | null
    payment_method_id?: BigIntNullableFilter<"appointment"> | bigint | number | null
    state_id?: BigIntNullableFilter<"appointment"> | bigint | number | null
    created_at?: DateTimeNullableFilter<"appointment"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"appointment"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"appointment"> | Date | string | null
    doctor?: XOR<DoctorNullableScalarRelationFilter, doctorWhereInput> | null
    patient?: XOR<PatientNullableScalarRelationFilter, patientWhereInput> | null
    payment_method?: XOR<Payment_methodNullableScalarRelationFilter, payment_methodWhereInput> | null
    appointment_states?: XOR<Appointment_statesNullableScalarRelationFilter, appointment_statesWhereInput> | null
  }

  export type appointmentOrderByWithRelationInput = {
    id?: SortOrder
    patient_id?: SortOrderInput | SortOrder
    doctor_id?: SortOrderInput | SortOrder
    date?: SortOrder
    ailment?: SortOrder
    area?: SortOrderInput | SortOrder
    payment_method_id?: SortOrderInput | SortOrder
    state_id?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    doctor?: doctorOrderByWithRelationInput
    patient?: patientOrderByWithRelationInput
    payment_method?: payment_methodOrderByWithRelationInput
    appointment_states?: appointment_statesOrderByWithRelationInput
  }

  export type appointmentWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: appointmentWhereInput | appointmentWhereInput[]
    OR?: appointmentWhereInput[]
    NOT?: appointmentWhereInput | appointmentWhereInput[]
    patient_id?: BigIntNullableFilter<"appointment"> | bigint | number | null
    doctor_id?: BigIntNullableFilter<"appointment"> | bigint | number | null
    date?: DateTimeFilter<"appointment"> | Date | string
    ailment?: StringFilter<"appointment"> | string
    area?: StringNullableFilter<"appointment"> | string | null
    payment_method_id?: BigIntNullableFilter<"appointment"> | bigint | number | null
    state_id?: BigIntNullableFilter<"appointment"> | bigint | number | null
    created_at?: DateTimeNullableFilter<"appointment"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"appointment"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"appointment"> | Date | string | null
    doctor?: XOR<DoctorNullableScalarRelationFilter, doctorWhereInput> | null
    patient?: XOR<PatientNullableScalarRelationFilter, patientWhereInput> | null
    payment_method?: XOR<Payment_methodNullableScalarRelationFilter, payment_methodWhereInput> | null
    appointment_states?: XOR<Appointment_statesNullableScalarRelationFilter, appointment_statesWhereInput> | null
  }, "id">

  export type appointmentOrderByWithAggregationInput = {
    id?: SortOrder
    patient_id?: SortOrderInput | SortOrder
    doctor_id?: SortOrderInput | SortOrder
    date?: SortOrder
    ailment?: SortOrder
    area?: SortOrderInput | SortOrder
    payment_method_id?: SortOrderInput | SortOrder
    state_id?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: appointmentCountOrderByAggregateInput
    _avg?: appointmentAvgOrderByAggregateInput
    _max?: appointmentMaxOrderByAggregateInput
    _min?: appointmentMinOrderByAggregateInput
    _sum?: appointmentSumOrderByAggregateInput
  }

  export type appointmentScalarWhereWithAggregatesInput = {
    AND?: appointmentScalarWhereWithAggregatesInput | appointmentScalarWhereWithAggregatesInput[]
    OR?: appointmentScalarWhereWithAggregatesInput[]
    NOT?: appointmentScalarWhereWithAggregatesInput | appointmentScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"appointment"> | bigint | number
    patient_id?: BigIntNullableWithAggregatesFilter<"appointment"> | bigint | number | null
    doctor_id?: BigIntNullableWithAggregatesFilter<"appointment"> | bigint | number | null
    date?: DateTimeWithAggregatesFilter<"appointment"> | Date | string
    ailment?: StringWithAggregatesFilter<"appointment"> | string
    area?: StringNullableWithAggregatesFilter<"appointment"> | string | null
    payment_method_id?: BigIntNullableWithAggregatesFilter<"appointment"> | bigint | number | null
    state_id?: BigIntNullableWithAggregatesFilter<"appointment"> | bigint | number | null
    created_at?: DateTimeNullableWithAggregatesFilter<"appointment"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"appointment"> | Date | string | null
    deleted_at?: DateTimeNullableWithAggregatesFilter<"appointment"> | Date | string | null
  }

  export type appointment_statesWhereInput = {
    AND?: appointment_statesWhereInput | appointment_statesWhereInput[]
    OR?: appointment_statesWhereInput[]
    NOT?: appointment_statesWhereInput | appointment_statesWhereInput[]
    id?: BigIntFilter<"appointment_states"> | bigint | number
    name?: StringFilter<"appointment_states"> | string
    created_at?: DateTimeNullableFilter<"appointment_states"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"appointment_states"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"appointment_states"> | Date | string | null
    appointment?: AppointmentListRelationFilter
  }

  export type appointment_statesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    appointment?: appointmentOrderByRelationAggregateInput
  }

  export type appointment_statesWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: appointment_statesWhereInput | appointment_statesWhereInput[]
    OR?: appointment_statesWhereInput[]
    NOT?: appointment_statesWhereInput | appointment_statesWhereInput[]
    name?: StringFilter<"appointment_states"> | string
    created_at?: DateTimeNullableFilter<"appointment_states"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"appointment_states"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"appointment_states"> | Date | string | null
    appointment?: AppointmentListRelationFilter
  }, "id">

  export type appointment_statesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: appointment_statesCountOrderByAggregateInput
    _avg?: appointment_statesAvgOrderByAggregateInput
    _max?: appointment_statesMaxOrderByAggregateInput
    _min?: appointment_statesMinOrderByAggregateInput
    _sum?: appointment_statesSumOrderByAggregateInput
  }

  export type appointment_statesScalarWhereWithAggregatesInput = {
    AND?: appointment_statesScalarWhereWithAggregatesInput | appointment_statesScalarWhereWithAggregatesInput[]
    OR?: appointment_statesScalarWhereWithAggregatesInput[]
    NOT?: appointment_statesScalarWhereWithAggregatesInput | appointment_statesScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"appointment_states"> | bigint | number
    name?: StringWithAggregatesFilter<"appointment_states"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"appointment_states"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"appointment_states"> | Date | string | null
    deleted_at?: DateTimeNullableWithAggregatesFilter<"appointment_states"> | Date | string | null
  }

  export type businessWhereInput = {
    AND?: businessWhereInput | businessWhereInput[]
    OR?: businessWhereInput[]
    NOT?: businessWhereInput | businessWhereInput[]
    id?: BigIntFilter<"business"> | bigint | number
    name?: StringFilter<"business"> | string
    address?: StringFilter<"business"> | string
    hours?: StringFilter<"business"> | string
    created_at?: DateTimeNullableFilter<"business"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"business"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"business"> | Date | string | null
    conversations?: ConversationsListRelationFilter
    doctor?: DoctorListRelationFilter
  }

  export type businessOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    hours?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    conversations?: conversationsOrderByRelationAggregateInput
    doctor?: doctorOrderByRelationAggregateInput
  }

  export type businessWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: businessWhereInput | businessWhereInput[]
    OR?: businessWhereInput[]
    NOT?: businessWhereInput | businessWhereInput[]
    name?: StringFilter<"business"> | string
    address?: StringFilter<"business"> | string
    hours?: StringFilter<"business"> | string
    created_at?: DateTimeNullableFilter<"business"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"business"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"business"> | Date | string | null
    conversations?: ConversationsListRelationFilter
    doctor?: DoctorListRelationFilter
  }, "id">

  export type businessOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    hours?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: businessCountOrderByAggregateInput
    _avg?: businessAvgOrderByAggregateInput
    _max?: businessMaxOrderByAggregateInput
    _min?: businessMinOrderByAggregateInput
    _sum?: businessSumOrderByAggregateInput
  }

  export type businessScalarWhereWithAggregatesInput = {
    AND?: businessScalarWhereWithAggregatesInput | businessScalarWhereWithAggregatesInput[]
    OR?: businessScalarWhereWithAggregatesInput[]
    NOT?: businessScalarWhereWithAggregatesInput | businessScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"business"> | bigint | number
    name?: StringWithAggregatesFilter<"business"> | string
    address?: StringWithAggregatesFilter<"business"> | string
    hours?: StringWithAggregatesFilter<"business"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"business"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"business"> | Date | string | null
    deleted_at?: DateTimeNullableWithAggregatesFilter<"business"> | Date | string | null
  }

  export type conversationsWhereInput = {
    AND?: conversationsWhereInput | conversationsWhereInput[]
    OR?: conversationsWhereInput[]
    NOT?: conversationsWhereInput | conversationsWhereInput[]
    id?: BigIntFilter<"conversations"> | bigint | number
    patient_id?: BigIntNullableFilter<"conversations"> | bigint | number | null
    business_id?: BigIntNullableFilter<"conversations"> | bigint | number | null
    created_at?: DateTimeNullableFilter<"conversations"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"conversations"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"conversations"> | Date | string | null
    business?: XOR<BusinessNullableScalarRelationFilter, businessWhereInput> | null
    patient?: XOR<PatientNullableScalarRelationFilter, patientWhereInput> | null
    messages?: MessagesListRelationFilter
  }

  export type conversationsOrderByWithRelationInput = {
    id?: SortOrder
    patient_id?: SortOrderInput | SortOrder
    business_id?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    business?: businessOrderByWithRelationInput
    patient?: patientOrderByWithRelationInput
    messages?: messagesOrderByRelationAggregateInput
  }

  export type conversationsWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: conversationsWhereInput | conversationsWhereInput[]
    OR?: conversationsWhereInput[]
    NOT?: conversationsWhereInput | conversationsWhereInput[]
    patient_id?: BigIntNullableFilter<"conversations"> | bigint | number | null
    business_id?: BigIntNullableFilter<"conversations"> | bigint | number | null
    created_at?: DateTimeNullableFilter<"conversations"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"conversations"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"conversations"> | Date | string | null
    business?: XOR<BusinessNullableScalarRelationFilter, businessWhereInput> | null
    patient?: XOR<PatientNullableScalarRelationFilter, patientWhereInput> | null
    messages?: MessagesListRelationFilter
  }, "id">

  export type conversationsOrderByWithAggregationInput = {
    id?: SortOrder
    patient_id?: SortOrderInput | SortOrder
    business_id?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: conversationsCountOrderByAggregateInput
    _avg?: conversationsAvgOrderByAggregateInput
    _max?: conversationsMaxOrderByAggregateInput
    _min?: conversationsMinOrderByAggregateInput
    _sum?: conversationsSumOrderByAggregateInput
  }

  export type conversationsScalarWhereWithAggregatesInput = {
    AND?: conversationsScalarWhereWithAggregatesInput | conversationsScalarWhereWithAggregatesInput[]
    OR?: conversationsScalarWhereWithAggregatesInput[]
    NOT?: conversationsScalarWhereWithAggregatesInput | conversationsScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"conversations"> | bigint | number
    patient_id?: BigIntNullableWithAggregatesFilter<"conversations"> | bigint | number | null
    business_id?: BigIntNullableWithAggregatesFilter<"conversations"> | bigint | number | null
    created_at?: DateTimeNullableWithAggregatesFilter<"conversations"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"conversations"> | Date | string | null
    deleted_at?: DateTimeNullableWithAggregatesFilter<"conversations"> | Date | string | null
  }

  export type doctorWhereInput = {
    AND?: doctorWhereInput | doctorWhereInput[]
    OR?: doctorWhereInput[]
    NOT?: doctorWhereInput | doctorWhereInput[]
    id?: BigIntFilter<"doctor"> | bigint | number
    name?: StringFilter<"doctor"> | string
    specialty?: StringFilter<"doctor"> | string
    negocio_id?: BigIntNullableFilter<"doctor"> | bigint | number | null
    created_at?: DateTimeNullableFilter<"doctor"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"doctor"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"doctor"> | Date | string | null
    appointment?: AppointmentListRelationFilter
    business?: XOR<BusinessNullableScalarRelationFilter, businessWhereInput> | null
    notes?: NotesListRelationFilter
    notifications?: NotificationsListRelationFilter
  }

  export type doctorOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    specialty?: SortOrder
    negocio_id?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    appointment?: appointmentOrderByRelationAggregateInput
    business?: businessOrderByWithRelationInput
    notes?: notesOrderByRelationAggregateInput
    notifications?: notificationsOrderByRelationAggregateInput
  }

  export type doctorWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: doctorWhereInput | doctorWhereInput[]
    OR?: doctorWhereInput[]
    NOT?: doctorWhereInput | doctorWhereInput[]
    name?: StringFilter<"doctor"> | string
    specialty?: StringFilter<"doctor"> | string
    negocio_id?: BigIntNullableFilter<"doctor"> | bigint | number | null
    created_at?: DateTimeNullableFilter<"doctor"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"doctor"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"doctor"> | Date | string | null
    appointment?: AppointmentListRelationFilter
    business?: XOR<BusinessNullableScalarRelationFilter, businessWhereInput> | null
    notes?: NotesListRelationFilter
    notifications?: NotificationsListRelationFilter
  }, "id">

  export type doctorOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    specialty?: SortOrder
    negocio_id?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: doctorCountOrderByAggregateInput
    _avg?: doctorAvgOrderByAggregateInput
    _max?: doctorMaxOrderByAggregateInput
    _min?: doctorMinOrderByAggregateInput
    _sum?: doctorSumOrderByAggregateInput
  }

  export type doctorScalarWhereWithAggregatesInput = {
    AND?: doctorScalarWhereWithAggregatesInput | doctorScalarWhereWithAggregatesInput[]
    OR?: doctorScalarWhereWithAggregatesInput[]
    NOT?: doctorScalarWhereWithAggregatesInput | doctorScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"doctor"> | bigint | number
    name?: StringWithAggregatesFilter<"doctor"> | string
    specialty?: StringWithAggregatesFilter<"doctor"> | string
    negocio_id?: BigIntNullableWithAggregatesFilter<"doctor"> | bigint | number | null
    created_at?: DateTimeNullableWithAggregatesFilter<"doctor"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"doctor"> | Date | string | null
    deleted_at?: DateTimeNullableWithAggregatesFilter<"doctor"> | Date | string | null
  }

  export type messagesWhereInput = {
    AND?: messagesWhereInput | messagesWhereInput[]
    OR?: messagesWhereInput[]
    NOT?: messagesWhereInput | messagesWhereInput[]
    id?: BigIntFilter<"messages"> | bigint | number
    content?: StringFilter<"messages"> | string
    date?: DateTimeNullableFilter<"messages"> | Date | string | null
    patient_id?: BigIntNullableFilter<"messages"> | bigint | number | null
    conversation_id?: BigIntNullableFilter<"messages"> | bigint | number | null
    type?: StringNullableFilter<"messages"> | string | null
    wss_number?: StringNullableFilter<"messages"> | string | null
    created_at?: DateTimeNullableFilter<"messages"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"messages"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"messages"> | Date | string | null
    conversations?: XOR<ConversationsNullableScalarRelationFilter, conversationsWhereInput> | null
    patient?: XOR<PatientNullableScalarRelationFilter, patientWhereInput> | null
  }

  export type messagesOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    date?: SortOrderInput | SortOrder
    patient_id?: SortOrderInput | SortOrder
    conversation_id?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    wss_number?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    conversations?: conversationsOrderByWithRelationInput
    patient?: patientOrderByWithRelationInput
  }

  export type messagesWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: messagesWhereInput | messagesWhereInput[]
    OR?: messagesWhereInput[]
    NOT?: messagesWhereInput | messagesWhereInput[]
    content?: StringFilter<"messages"> | string
    date?: DateTimeNullableFilter<"messages"> | Date | string | null
    patient_id?: BigIntNullableFilter<"messages"> | bigint | number | null
    conversation_id?: BigIntNullableFilter<"messages"> | bigint | number | null
    type?: StringNullableFilter<"messages"> | string | null
    wss_number?: StringNullableFilter<"messages"> | string | null
    created_at?: DateTimeNullableFilter<"messages"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"messages"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"messages"> | Date | string | null
    conversations?: XOR<ConversationsNullableScalarRelationFilter, conversationsWhereInput> | null
    patient?: XOR<PatientNullableScalarRelationFilter, patientWhereInput> | null
  }, "id">

  export type messagesOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    date?: SortOrderInput | SortOrder
    patient_id?: SortOrderInput | SortOrder
    conversation_id?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    wss_number?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: messagesCountOrderByAggregateInput
    _avg?: messagesAvgOrderByAggregateInput
    _max?: messagesMaxOrderByAggregateInput
    _min?: messagesMinOrderByAggregateInput
    _sum?: messagesSumOrderByAggregateInput
  }

  export type messagesScalarWhereWithAggregatesInput = {
    AND?: messagesScalarWhereWithAggregatesInput | messagesScalarWhereWithAggregatesInput[]
    OR?: messagesScalarWhereWithAggregatesInput[]
    NOT?: messagesScalarWhereWithAggregatesInput | messagesScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"messages"> | bigint | number
    content?: StringWithAggregatesFilter<"messages"> | string
    date?: DateTimeNullableWithAggregatesFilter<"messages"> | Date | string | null
    patient_id?: BigIntNullableWithAggregatesFilter<"messages"> | bigint | number | null
    conversation_id?: BigIntNullableWithAggregatesFilter<"messages"> | bigint | number | null
    type?: StringNullableWithAggregatesFilter<"messages"> | string | null
    wss_number?: StringNullableWithAggregatesFilter<"messages"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"messages"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"messages"> | Date | string | null
    deleted_at?: DateTimeNullableWithAggregatesFilter<"messages"> | Date | string | null
  }

  export type notesWhereInput = {
    AND?: notesWhereInput | notesWhereInput[]
    OR?: notesWhereInput[]
    NOT?: notesWhereInput | notesWhereInput[]
    id?: BigIntFilter<"notes"> | bigint | number
    doctor_id?: BigIntNullableFilter<"notes"> | bigint | number | null
    patient_id?: BigIntNullableFilter<"notes"> | bigint | number | null
    content?: StringFilter<"notes"> | string
    date?: DateTimeNullableFilter<"notes"> | Date | string | null
    created_at?: DateTimeNullableFilter<"notes"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"notes"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"notes"> | Date | string | null
    doctor?: XOR<DoctorNullableScalarRelationFilter, doctorWhereInput> | null
    patient?: XOR<PatientNullableScalarRelationFilter, patientWhereInput> | null
  }

  export type notesOrderByWithRelationInput = {
    id?: SortOrder
    doctor_id?: SortOrderInput | SortOrder
    patient_id?: SortOrderInput | SortOrder
    content?: SortOrder
    date?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    doctor?: doctorOrderByWithRelationInput
    patient?: patientOrderByWithRelationInput
  }

  export type notesWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: notesWhereInput | notesWhereInput[]
    OR?: notesWhereInput[]
    NOT?: notesWhereInput | notesWhereInput[]
    doctor_id?: BigIntNullableFilter<"notes"> | bigint | number | null
    patient_id?: BigIntNullableFilter<"notes"> | bigint | number | null
    content?: StringFilter<"notes"> | string
    date?: DateTimeNullableFilter<"notes"> | Date | string | null
    created_at?: DateTimeNullableFilter<"notes"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"notes"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"notes"> | Date | string | null
    doctor?: XOR<DoctorNullableScalarRelationFilter, doctorWhereInput> | null
    patient?: XOR<PatientNullableScalarRelationFilter, patientWhereInput> | null
  }, "id">

  export type notesOrderByWithAggregationInput = {
    id?: SortOrder
    doctor_id?: SortOrderInput | SortOrder
    patient_id?: SortOrderInput | SortOrder
    content?: SortOrder
    date?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: notesCountOrderByAggregateInput
    _avg?: notesAvgOrderByAggregateInput
    _max?: notesMaxOrderByAggregateInput
    _min?: notesMinOrderByAggregateInput
    _sum?: notesSumOrderByAggregateInput
  }

  export type notesScalarWhereWithAggregatesInput = {
    AND?: notesScalarWhereWithAggregatesInput | notesScalarWhereWithAggregatesInput[]
    OR?: notesScalarWhereWithAggregatesInput[]
    NOT?: notesScalarWhereWithAggregatesInput | notesScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"notes"> | bigint | number
    doctor_id?: BigIntNullableWithAggregatesFilter<"notes"> | bigint | number | null
    patient_id?: BigIntNullableWithAggregatesFilter<"notes"> | bigint | number | null
    content?: StringWithAggregatesFilter<"notes"> | string
    date?: DateTimeNullableWithAggregatesFilter<"notes"> | Date | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"notes"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"notes"> | Date | string | null
    deleted_at?: DateTimeNullableWithAggregatesFilter<"notes"> | Date | string | null
  }

  export type notificationsWhereInput = {
    AND?: notificationsWhereInput | notificationsWhereInput[]
    OR?: notificationsWhereInput[]
    NOT?: notificationsWhereInput | notificationsWhereInput[]
    id?: BigIntFilter<"notifications"> | bigint | number
    patient_id?: BigIntNullableFilter<"notifications"> | bigint | number | null
    doctor_id?: BigIntNullableFilter<"notifications"> | bigint | number | null
    message?: StringFilter<"notifications"> | string
    title?: StringNullableFilter<"notifications"> | string | null
    description?: StringNullableFilter<"notifications"> | string | null
    link?: StringNullableFilter<"notifications"> | string | null
    external_id?: StringNullableFilter<"notifications"> | string | null
    seen?: BoolNullableFilter<"notifications"> | boolean | null
    seen_time?: DateTimeNullableFilter<"notifications"> | Date | string | null
    date?: DateTimeNullableFilter<"notifications"> | Date | string | null
    created_at?: DateTimeNullableFilter<"notifications"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"notifications"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"notifications"> | Date | string | null
    doctor?: XOR<DoctorNullableScalarRelationFilter, doctorWhereInput> | null
    patient?: XOR<PatientNullableScalarRelationFilter, patientWhereInput> | null
  }

  export type notificationsOrderByWithRelationInput = {
    id?: SortOrder
    patient_id?: SortOrderInput | SortOrder
    doctor_id?: SortOrderInput | SortOrder
    message?: SortOrder
    title?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    link?: SortOrderInput | SortOrder
    external_id?: SortOrderInput | SortOrder
    seen?: SortOrderInput | SortOrder
    seen_time?: SortOrderInput | SortOrder
    date?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    doctor?: doctorOrderByWithRelationInput
    patient?: patientOrderByWithRelationInput
  }

  export type notificationsWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: notificationsWhereInput | notificationsWhereInput[]
    OR?: notificationsWhereInput[]
    NOT?: notificationsWhereInput | notificationsWhereInput[]
    patient_id?: BigIntNullableFilter<"notifications"> | bigint | number | null
    doctor_id?: BigIntNullableFilter<"notifications"> | bigint | number | null
    message?: StringFilter<"notifications"> | string
    title?: StringNullableFilter<"notifications"> | string | null
    description?: StringNullableFilter<"notifications"> | string | null
    link?: StringNullableFilter<"notifications"> | string | null
    external_id?: StringNullableFilter<"notifications"> | string | null
    seen?: BoolNullableFilter<"notifications"> | boolean | null
    seen_time?: DateTimeNullableFilter<"notifications"> | Date | string | null
    date?: DateTimeNullableFilter<"notifications"> | Date | string | null
    created_at?: DateTimeNullableFilter<"notifications"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"notifications"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"notifications"> | Date | string | null
    doctor?: XOR<DoctorNullableScalarRelationFilter, doctorWhereInput> | null
    patient?: XOR<PatientNullableScalarRelationFilter, patientWhereInput> | null
  }, "id">

  export type notificationsOrderByWithAggregationInput = {
    id?: SortOrder
    patient_id?: SortOrderInput | SortOrder
    doctor_id?: SortOrderInput | SortOrder
    message?: SortOrder
    title?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    link?: SortOrderInput | SortOrder
    external_id?: SortOrderInput | SortOrder
    seen?: SortOrderInput | SortOrder
    seen_time?: SortOrderInput | SortOrder
    date?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: notificationsCountOrderByAggregateInput
    _avg?: notificationsAvgOrderByAggregateInput
    _max?: notificationsMaxOrderByAggregateInput
    _min?: notificationsMinOrderByAggregateInput
    _sum?: notificationsSumOrderByAggregateInput
  }

  export type notificationsScalarWhereWithAggregatesInput = {
    AND?: notificationsScalarWhereWithAggregatesInput | notificationsScalarWhereWithAggregatesInput[]
    OR?: notificationsScalarWhereWithAggregatesInput[]
    NOT?: notificationsScalarWhereWithAggregatesInput | notificationsScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"notifications"> | bigint | number
    patient_id?: BigIntNullableWithAggregatesFilter<"notifications"> | bigint | number | null
    doctor_id?: BigIntNullableWithAggregatesFilter<"notifications"> | bigint | number | null
    message?: StringWithAggregatesFilter<"notifications"> | string
    title?: StringNullableWithAggregatesFilter<"notifications"> | string | null
    description?: StringNullableWithAggregatesFilter<"notifications"> | string | null
    link?: StringNullableWithAggregatesFilter<"notifications"> | string | null
    external_id?: StringNullableWithAggregatesFilter<"notifications"> | string | null
    seen?: BoolNullableWithAggregatesFilter<"notifications"> | boolean | null
    seen_time?: DateTimeNullableWithAggregatesFilter<"notifications"> | Date | string | null
    date?: DateTimeNullableWithAggregatesFilter<"notifications"> | Date | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"notifications"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"notifications"> | Date | string | null
    deleted_at?: DateTimeNullableWithAggregatesFilter<"notifications"> | Date | string | null
  }

  export type patientWhereInput = {
    AND?: patientWhereInput | patientWhereInput[]
    OR?: patientWhereInput[]
    NOT?: patientWhereInput | patientWhereInput[]
    id?: BigIntFilter<"patient"> | bigint | number
    id_number?: StringFilter<"patient"> | string
    age?: IntFilter<"patient"> | number
    name?: StringFilter<"patient"> | string
    created_at?: DateTimeNullableFilter<"patient"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"patient"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"patient"> | Date | string | null
    appointment?: AppointmentListRelationFilter
    conversations?: ConversationsListRelationFilter
    messages?: MessagesListRelationFilter
    notes?: NotesListRelationFilter
    notifications?: NotificationsListRelationFilter
  }

  export type patientOrderByWithRelationInput = {
    id?: SortOrder
    id_number?: SortOrder
    age?: SortOrder
    name?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    appointment?: appointmentOrderByRelationAggregateInput
    conversations?: conversationsOrderByRelationAggregateInput
    messages?: messagesOrderByRelationAggregateInput
    notes?: notesOrderByRelationAggregateInput
    notifications?: notificationsOrderByRelationAggregateInput
  }

  export type patientWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    id_number?: string
    AND?: patientWhereInput | patientWhereInput[]
    OR?: patientWhereInput[]
    NOT?: patientWhereInput | patientWhereInput[]
    age?: IntFilter<"patient"> | number
    name?: StringFilter<"patient"> | string
    created_at?: DateTimeNullableFilter<"patient"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"patient"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"patient"> | Date | string | null
    appointment?: AppointmentListRelationFilter
    conversations?: ConversationsListRelationFilter
    messages?: MessagesListRelationFilter
    notes?: NotesListRelationFilter
    notifications?: NotificationsListRelationFilter
  }, "id" | "id_number">

  export type patientOrderByWithAggregationInput = {
    id?: SortOrder
    id_number?: SortOrder
    age?: SortOrder
    name?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: patientCountOrderByAggregateInput
    _avg?: patientAvgOrderByAggregateInput
    _max?: patientMaxOrderByAggregateInput
    _min?: patientMinOrderByAggregateInput
    _sum?: patientSumOrderByAggregateInput
  }

  export type patientScalarWhereWithAggregatesInput = {
    AND?: patientScalarWhereWithAggregatesInput | patientScalarWhereWithAggregatesInput[]
    OR?: patientScalarWhereWithAggregatesInput[]
    NOT?: patientScalarWhereWithAggregatesInput | patientScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"patient"> | bigint | number
    id_number?: StringWithAggregatesFilter<"patient"> | string
    age?: IntWithAggregatesFilter<"patient"> | number
    name?: StringWithAggregatesFilter<"patient"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"patient"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"patient"> | Date | string | null
    deleted_at?: DateTimeNullableWithAggregatesFilter<"patient"> | Date | string | null
  }

  export type payment_methodWhereInput = {
    AND?: payment_methodWhereInput | payment_methodWhereInput[]
    OR?: payment_methodWhereInput[]
    NOT?: payment_methodWhereInput | payment_methodWhereInput[]
    id?: BigIntFilter<"payment_method"> | bigint | number
    type?: StringFilter<"payment_method"> | string
    created_at?: DateTimeNullableFilter<"payment_method"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"payment_method"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"payment_method"> | Date | string | null
    appointment?: AppointmentListRelationFilter
  }

  export type payment_methodOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    appointment?: appointmentOrderByRelationAggregateInput
  }

  export type payment_methodWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: payment_methodWhereInput | payment_methodWhereInput[]
    OR?: payment_methodWhereInput[]
    NOT?: payment_methodWhereInput | payment_methodWhereInput[]
    type?: StringFilter<"payment_method"> | string
    created_at?: DateTimeNullableFilter<"payment_method"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"payment_method"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"payment_method"> | Date | string | null
    appointment?: AppointmentListRelationFilter
  }, "id">

  export type payment_methodOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: payment_methodCountOrderByAggregateInput
    _avg?: payment_methodAvgOrderByAggregateInput
    _max?: payment_methodMaxOrderByAggregateInput
    _min?: payment_methodMinOrderByAggregateInput
    _sum?: payment_methodSumOrderByAggregateInput
  }

  export type payment_methodScalarWhereWithAggregatesInput = {
    AND?: payment_methodScalarWhereWithAggregatesInput | payment_methodScalarWhereWithAggregatesInput[]
    OR?: payment_methodScalarWhereWithAggregatesInput[]
    NOT?: payment_methodScalarWhereWithAggregatesInput | payment_methodScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"payment_method"> | bigint | number
    type?: StringWithAggregatesFilter<"payment_method"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"payment_method"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"payment_method"> | Date | string | null
    deleted_at?: DateTimeNullableWithAggregatesFilter<"payment_method"> | Date | string | null
  }

  export type TestCreateInput = {
    name: string
  }

  export type TestUncheckedCreateInput = {
    id?: number
    name: string
  }

  export type TestUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TestUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TestCreateManyInput = {
    id?: number
    name: string
  }

  export type TestUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TestUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type appointmentCreateInput = {
    id?: bigint | number
    date: Date | string
    ailment: string
    area?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    doctor?: doctorCreateNestedOneWithoutAppointmentInput
    patient?: patientCreateNestedOneWithoutAppointmentInput
    payment_method?: payment_methodCreateNestedOneWithoutAppointmentInput
    appointment_states?: appointment_statesCreateNestedOneWithoutAppointmentInput
  }

  export type appointmentUncheckedCreateInput = {
    id?: bigint | number
    patient_id?: bigint | number | null
    doctor_id?: bigint | number | null
    date: Date | string
    ailment: string
    area?: string | null
    payment_method_id?: bigint | number | null
    state_id?: bigint | number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type appointmentUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    ailment?: StringFieldUpdateOperationsInput | string
    area?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    doctor?: doctorUpdateOneWithoutAppointmentNestedInput
    patient?: patientUpdateOneWithoutAppointmentNestedInput
    payment_method?: payment_methodUpdateOneWithoutAppointmentNestedInput
    appointment_states?: appointment_statesUpdateOneWithoutAppointmentNestedInput
  }

  export type appointmentUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    patient_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    doctor_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    ailment?: StringFieldUpdateOperationsInput | string
    area?: NullableStringFieldUpdateOperationsInput | string | null
    payment_method_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    state_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type appointmentCreateManyInput = {
    id?: bigint | number
    patient_id?: bigint | number | null
    doctor_id?: bigint | number | null
    date: Date | string
    ailment: string
    area?: string | null
    payment_method_id?: bigint | number | null
    state_id?: bigint | number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type appointmentUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    ailment?: StringFieldUpdateOperationsInput | string
    area?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type appointmentUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    patient_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    doctor_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    ailment?: StringFieldUpdateOperationsInput | string
    area?: NullableStringFieldUpdateOperationsInput | string | null
    payment_method_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    state_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type appointment_statesCreateInput = {
    id?: bigint | number
    name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    appointment?: appointmentCreateNestedManyWithoutAppointment_statesInput
  }

  export type appointment_statesUncheckedCreateInput = {
    id?: bigint | number
    name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    appointment?: appointmentUncheckedCreateNestedManyWithoutAppointment_statesInput
  }

  export type appointment_statesUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    appointment?: appointmentUpdateManyWithoutAppointment_statesNestedInput
  }

  export type appointment_statesUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    appointment?: appointmentUncheckedUpdateManyWithoutAppointment_statesNestedInput
  }

  export type appointment_statesCreateManyInput = {
    id?: bigint | number
    name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type appointment_statesUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type appointment_statesUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type businessCreateInput = {
    id?: bigint | number
    name: string
    address: string
    hours: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    conversations?: conversationsCreateNestedManyWithoutBusinessInput
    doctor?: doctorCreateNestedManyWithoutBusinessInput
  }

  export type businessUncheckedCreateInput = {
    id?: bigint | number
    name: string
    address: string
    hours: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    conversations?: conversationsUncheckedCreateNestedManyWithoutBusinessInput
    doctor?: doctorUncheckedCreateNestedManyWithoutBusinessInput
  }

  export type businessUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    hours?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    conversations?: conversationsUpdateManyWithoutBusinessNestedInput
    doctor?: doctorUpdateManyWithoutBusinessNestedInput
  }

  export type businessUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    hours?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    conversations?: conversationsUncheckedUpdateManyWithoutBusinessNestedInput
    doctor?: doctorUncheckedUpdateManyWithoutBusinessNestedInput
  }

  export type businessCreateManyInput = {
    id?: bigint | number
    name: string
    address: string
    hours: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type businessUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    hours?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type businessUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    hours?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type conversationsCreateInput = {
    id?: bigint | number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    business?: businessCreateNestedOneWithoutConversationsInput
    patient?: patientCreateNestedOneWithoutConversationsInput
    messages?: messagesCreateNestedManyWithoutConversationsInput
  }

  export type conversationsUncheckedCreateInput = {
    id?: bigint | number
    patient_id?: bigint | number | null
    business_id?: bigint | number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    messages?: messagesUncheckedCreateNestedManyWithoutConversationsInput
  }

  export type conversationsUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    business?: businessUpdateOneWithoutConversationsNestedInput
    patient?: patientUpdateOneWithoutConversationsNestedInput
    messages?: messagesUpdateManyWithoutConversationsNestedInput
  }

  export type conversationsUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    patient_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    business_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    messages?: messagesUncheckedUpdateManyWithoutConversationsNestedInput
  }

  export type conversationsCreateManyInput = {
    id?: bigint | number
    patient_id?: bigint | number | null
    business_id?: bigint | number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type conversationsUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type conversationsUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    patient_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    business_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type doctorCreateInput = {
    id?: bigint | number
    name: string
    specialty: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    appointment?: appointmentCreateNestedManyWithoutDoctorInput
    business?: businessCreateNestedOneWithoutDoctorInput
    notes?: notesCreateNestedManyWithoutDoctorInput
    notifications?: notificationsCreateNestedManyWithoutDoctorInput
  }

  export type doctorUncheckedCreateInput = {
    id?: bigint | number
    name: string
    specialty: string
    negocio_id?: bigint | number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    appointment?: appointmentUncheckedCreateNestedManyWithoutDoctorInput
    notes?: notesUncheckedCreateNestedManyWithoutDoctorInput
    notifications?: notificationsUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type doctorUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    specialty?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    appointment?: appointmentUpdateManyWithoutDoctorNestedInput
    business?: businessUpdateOneWithoutDoctorNestedInput
    notes?: notesUpdateManyWithoutDoctorNestedInput
    notifications?: notificationsUpdateManyWithoutDoctorNestedInput
  }

  export type doctorUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    specialty?: StringFieldUpdateOperationsInput | string
    negocio_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    appointment?: appointmentUncheckedUpdateManyWithoutDoctorNestedInput
    notes?: notesUncheckedUpdateManyWithoutDoctorNestedInput
    notifications?: notificationsUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type doctorCreateManyInput = {
    id?: bigint | number
    name: string
    specialty: string
    negocio_id?: bigint | number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type doctorUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    specialty?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type doctorUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    specialty?: StringFieldUpdateOperationsInput | string
    negocio_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type messagesCreateInput = {
    id?: bigint | number
    content: string
    date?: Date | string | null
    type?: string | null
    wss_number?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    conversations?: conversationsCreateNestedOneWithoutMessagesInput
    patient?: patientCreateNestedOneWithoutMessagesInput
  }

  export type messagesUncheckedCreateInput = {
    id?: bigint | number
    content: string
    date?: Date | string | null
    patient_id?: bigint | number | null
    conversation_id?: bigint | number | null
    type?: string | null
    wss_number?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type messagesUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    content?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    wss_number?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    conversations?: conversationsUpdateOneWithoutMessagesNestedInput
    patient?: patientUpdateOneWithoutMessagesNestedInput
  }

  export type messagesUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    content?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    patient_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    conversation_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    wss_number?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type messagesCreateManyInput = {
    id?: bigint | number
    content: string
    date?: Date | string | null
    patient_id?: bigint | number | null
    conversation_id?: bigint | number | null
    type?: string | null
    wss_number?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type messagesUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    content?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    wss_number?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type messagesUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    content?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    patient_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    conversation_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    wss_number?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type notesCreateInput = {
    id?: bigint | number
    content: string
    date?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    doctor?: doctorCreateNestedOneWithoutNotesInput
    patient?: patientCreateNestedOneWithoutNotesInput
  }

  export type notesUncheckedCreateInput = {
    id?: bigint | number
    doctor_id?: bigint | number | null
    patient_id?: bigint | number | null
    content: string
    date?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type notesUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    content?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    doctor?: doctorUpdateOneWithoutNotesNestedInput
    patient?: patientUpdateOneWithoutNotesNestedInput
  }

  export type notesUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    doctor_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    patient_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    content?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type notesCreateManyInput = {
    id?: bigint | number
    doctor_id?: bigint | number | null
    patient_id?: bigint | number | null
    content: string
    date?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type notesUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    content?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type notesUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    doctor_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    patient_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    content?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type notificationsCreateInput = {
    id?: bigint | number
    message: string
    title?: string | null
    description?: string | null
    link?: string | null
    external_id?: string | null
    seen?: boolean | null
    seen_time?: Date | string | null
    date?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    doctor?: doctorCreateNestedOneWithoutNotificationsInput
    patient?: patientCreateNestedOneWithoutNotificationsInput
  }

  export type notificationsUncheckedCreateInput = {
    id?: bigint | number
    patient_id?: bigint | number | null
    doctor_id?: bigint | number | null
    message: string
    title?: string | null
    description?: string | null
    link?: string | null
    external_id?: string | null
    seen?: boolean | null
    seen_time?: Date | string | null
    date?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type notificationsUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    message?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    external_id?: NullableStringFieldUpdateOperationsInput | string | null
    seen?: NullableBoolFieldUpdateOperationsInput | boolean | null
    seen_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    doctor?: doctorUpdateOneWithoutNotificationsNestedInput
    patient?: patientUpdateOneWithoutNotificationsNestedInput
  }

  export type notificationsUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    patient_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    doctor_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    message?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    external_id?: NullableStringFieldUpdateOperationsInput | string | null
    seen?: NullableBoolFieldUpdateOperationsInput | boolean | null
    seen_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type notificationsCreateManyInput = {
    id?: bigint | number
    patient_id?: bigint | number | null
    doctor_id?: bigint | number | null
    message: string
    title?: string | null
    description?: string | null
    link?: string | null
    external_id?: string | null
    seen?: boolean | null
    seen_time?: Date | string | null
    date?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type notificationsUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    message?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    external_id?: NullableStringFieldUpdateOperationsInput | string | null
    seen?: NullableBoolFieldUpdateOperationsInput | boolean | null
    seen_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type notificationsUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    patient_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    doctor_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    message?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    external_id?: NullableStringFieldUpdateOperationsInput | string | null
    seen?: NullableBoolFieldUpdateOperationsInput | boolean | null
    seen_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type patientCreateInput = {
    id?: bigint | number
    id_number: string
    age: number
    name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    appointment?: appointmentCreateNestedManyWithoutPatientInput
    conversations?: conversationsCreateNestedManyWithoutPatientInput
    messages?: messagesCreateNestedManyWithoutPatientInput
    notes?: notesCreateNestedManyWithoutPatientInput
    notifications?: notificationsCreateNestedManyWithoutPatientInput
  }

  export type patientUncheckedCreateInput = {
    id?: bigint | number
    id_number: string
    age: number
    name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    appointment?: appointmentUncheckedCreateNestedManyWithoutPatientInput
    conversations?: conversationsUncheckedCreateNestedManyWithoutPatientInput
    messages?: messagesUncheckedCreateNestedManyWithoutPatientInput
    notes?: notesUncheckedCreateNestedManyWithoutPatientInput
    notifications?: notificationsUncheckedCreateNestedManyWithoutPatientInput
  }

  export type patientUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    id_number?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    appointment?: appointmentUpdateManyWithoutPatientNestedInput
    conversations?: conversationsUpdateManyWithoutPatientNestedInput
    messages?: messagesUpdateManyWithoutPatientNestedInput
    notes?: notesUpdateManyWithoutPatientNestedInput
    notifications?: notificationsUpdateManyWithoutPatientNestedInput
  }

  export type patientUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    id_number?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    appointment?: appointmentUncheckedUpdateManyWithoutPatientNestedInput
    conversations?: conversationsUncheckedUpdateManyWithoutPatientNestedInput
    messages?: messagesUncheckedUpdateManyWithoutPatientNestedInput
    notes?: notesUncheckedUpdateManyWithoutPatientNestedInput
    notifications?: notificationsUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type patientCreateManyInput = {
    id?: bigint | number
    id_number: string
    age: number
    name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type patientUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    id_number?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type patientUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    id_number?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type payment_methodCreateInput = {
    id?: bigint | number
    type: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    appointment?: appointmentCreateNestedManyWithoutPayment_methodInput
  }

  export type payment_methodUncheckedCreateInput = {
    id?: bigint | number
    type: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    appointment?: appointmentUncheckedCreateNestedManyWithoutPayment_methodInput
  }

  export type payment_methodUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    type?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    appointment?: appointmentUpdateManyWithoutPayment_methodNestedInput
  }

  export type payment_methodUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    type?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    appointment?: appointmentUncheckedUpdateManyWithoutPayment_methodNestedInput
  }

  export type payment_methodCreateManyInput = {
    id?: bigint | number
    type: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type payment_methodUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    type?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type payment_methodUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    type?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type TestCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TestAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TestMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TestMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TestSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DoctorNullableScalarRelationFilter = {
    is?: doctorWhereInput | null
    isNot?: doctorWhereInput | null
  }

  export type PatientNullableScalarRelationFilter = {
    is?: patientWhereInput | null
    isNot?: patientWhereInput | null
  }

  export type Payment_methodNullableScalarRelationFilter = {
    is?: payment_methodWhereInput | null
    isNot?: payment_methodWhereInput | null
  }

  export type Appointment_statesNullableScalarRelationFilter = {
    is?: appointment_statesWhereInput | null
    isNot?: appointment_statesWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type appointmentCountOrderByAggregateInput = {
    id?: SortOrder
    patient_id?: SortOrder
    doctor_id?: SortOrder
    date?: SortOrder
    ailment?: SortOrder
    area?: SortOrder
    payment_method_id?: SortOrder
    state_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type appointmentAvgOrderByAggregateInput = {
    id?: SortOrder
    patient_id?: SortOrder
    doctor_id?: SortOrder
    payment_method_id?: SortOrder
    state_id?: SortOrder
  }

  export type appointmentMaxOrderByAggregateInput = {
    id?: SortOrder
    patient_id?: SortOrder
    doctor_id?: SortOrder
    date?: SortOrder
    ailment?: SortOrder
    area?: SortOrder
    payment_method_id?: SortOrder
    state_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type appointmentMinOrderByAggregateInput = {
    id?: SortOrder
    patient_id?: SortOrder
    doctor_id?: SortOrder
    date?: SortOrder
    ailment?: SortOrder
    area?: SortOrder
    payment_method_id?: SortOrder
    state_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type appointmentSumOrderByAggregateInput = {
    id?: SortOrder
    patient_id?: SortOrder
    doctor_id?: SortOrder
    payment_method_id?: SortOrder
    state_id?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type AppointmentListRelationFilter = {
    every?: appointmentWhereInput
    some?: appointmentWhereInput
    none?: appointmentWhereInput
  }

  export type appointmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type appointment_statesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type appointment_statesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type appointment_statesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type appointment_statesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type appointment_statesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ConversationsListRelationFilter = {
    every?: conversationsWhereInput
    some?: conversationsWhereInput
    none?: conversationsWhereInput
  }

  export type DoctorListRelationFilter = {
    every?: doctorWhereInput
    some?: doctorWhereInput
    none?: doctorWhereInput
  }

  export type conversationsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type doctorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type businessCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    hours?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type businessAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type businessMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    hours?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type businessMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    hours?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type businessSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BusinessNullableScalarRelationFilter = {
    is?: businessWhereInput | null
    isNot?: businessWhereInput | null
  }

  export type MessagesListRelationFilter = {
    every?: messagesWhereInput
    some?: messagesWhereInput
    none?: messagesWhereInput
  }

  export type messagesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type conversationsCountOrderByAggregateInput = {
    id?: SortOrder
    patient_id?: SortOrder
    business_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type conversationsAvgOrderByAggregateInput = {
    id?: SortOrder
    patient_id?: SortOrder
    business_id?: SortOrder
  }

  export type conversationsMaxOrderByAggregateInput = {
    id?: SortOrder
    patient_id?: SortOrder
    business_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type conversationsMinOrderByAggregateInput = {
    id?: SortOrder
    patient_id?: SortOrder
    business_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type conversationsSumOrderByAggregateInput = {
    id?: SortOrder
    patient_id?: SortOrder
    business_id?: SortOrder
  }

  export type NotesListRelationFilter = {
    every?: notesWhereInput
    some?: notesWhereInput
    none?: notesWhereInput
  }

  export type NotificationsListRelationFilter = {
    every?: notificationsWhereInput
    some?: notificationsWhereInput
    none?: notificationsWhereInput
  }

  export type notesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type notificationsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type doctorCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    specialty?: SortOrder
    negocio_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type doctorAvgOrderByAggregateInput = {
    id?: SortOrder
    negocio_id?: SortOrder
  }

  export type doctorMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    specialty?: SortOrder
    negocio_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type doctorMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    specialty?: SortOrder
    negocio_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type doctorSumOrderByAggregateInput = {
    id?: SortOrder
    negocio_id?: SortOrder
  }

  export type ConversationsNullableScalarRelationFilter = {
    is?: conversationsWhereInput | null
    isNot?: conversationsWhereInput | null
  }

  export type messagesCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    date?: SortOrder
    patient_id?: SortOrder
    conversation_id?: SortOrder
    type?: SortOrder
    wss_number?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type messagesAvgOrderByAggregateInput = {
    id?: SortOrder
    patient_id?: SortOrder
    conversation_id?: SortOrder
  }

  export type messagesMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    date?: SortOrder
    patient_id?: SortOrder
    conversation_id?: SortOrder
    type?: SortOrder
    wss_number?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type messagesMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    date?: SortOrder
    patient_id?: SortOrder
    conversation_id?: SortOrder
    type?: SortOrder
    wss_number?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type messagesSumOrderByAggregateInput = {
    id?: SortOrder
    patient_id?: SortOrder
    conversation_id?: SortOrder
  }

  export type notesCountOrderByAggregateInput = {
    id?: SortOrder
    doctor_id?: SortOrder
    patient_id?: SortOrder
    content?: SortOrder
    date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type notesAvgOrderByAggregateInput = {
    id?: SortOrder
    doctor_id?: SortOrder
    patient_id?: SortOrder
  }

  export type notesMaxOrderByAggregateInput = {
    id?: SortOrder
    doctor_id?: SortOrder
    patient_id?: SortOrder
    content?: SortOrder
    date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type notesMinOrderByAggregateInput = {
    id?: SortOrder
    doctor_id?: SortOrder
    patient_id?: SortOrder
    content?: SortOrder
    date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type notesSumOrderByAggregateInput = {
    id?: SortOrder
    doctor_id?: SortOrder
    patient_id?: SortOrder
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type notificationsCountOrderByAggregateInput = {
    id?: SortOrder
    patient_id?: SortOrder
    doctor_id?: SortOrder
    message?: SortOrder
    title?: SortOrder
    description?: SortOrder
    link?: SortOrder
    external_id?: SortOrder
    seen?: SortOrder
    seen_time?: SortOrder
    date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type notificationsAvgOrderByAggregateInput = {
    id?: SortOrder
    patient_id?: SortOrder
    doctor_id?: SortOrder
  }

  export type notificationsMaxOrderByAggregateInput = {
    id?: SortOrder
    patient_id?: SortOrder
    doctor_id?: SortOrder
    message?: SortOrder
    title?: SortOrder
    description?: SortOrder
    link?: SortOrder
    external_id?: SortOrder
    seen?: SortOrder
    seen_time?: SortOrder
    date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type notificationsMinOrderByAggregateInput = {
    id?: SortOrder
    patient_id?: SortOrder
    doctor_id?: SortOrder
    message?: SortOrder
    title?: SortOrder
    description?: SortOrder
    link?: SortOrder
    external_id?: SortOrder
    seen?: SortOrder
    seen_time?: SortOrder
    date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type notificationsSumOrderByAggregateInput = {
    id?: SortOrder
    patient_id?: SortOrder
    doctor_id?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type patientCountOrderByAggregateInput = {
    id?: SortOrder
    id_number?: SortOrder
    age?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type patientAvgOrderByAggregateInput = {
    id?: SortOrder
    age?: SortOrder
  }

  export type patientMaxOrderByAggregateInput = {
    id?: SortOrder
    id_number?: SortOrder
    age?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type patientMinOrderByAggregateInput = {
    id?: SortOrder
    id_number?: SortOrder
    age?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type patientSumOrderByAggregateInput = {
    id?: SortOrder
    age?: SortOrder
  }

  export type payment_methodCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type payment_methodAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type payment_methodMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type payment_methodMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type payment_methodSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type doctorCreateNestedOneWithoutAppointmentInput = {
    create?: XOR<doctorCreateWithoutAppointmentInput, doctorUncheckedCreateWithoutAppointmentInput>
    connectOrCreate?: doctorCreateOrConnectWithoutAppointmentInput
    connect?: doctorWhereUniqueInput
  }

  export type patientCreateNestedOneWithoutAppointmentInput = {
    create?: XOR<patientCreateWithoutAppointmentInput, patientUncheckedCreateWithoutAppointmentInput>
    connectOrCreate?: patientCreateOrConnectWithoutAppointmentInput
    connect?: patientWhereUniqueInput
  }

  export type payment_methodCreateNestedOneWithoutAppointmentInput = {
    create?: XOR<payment_methodCreateWithoutAppointmentInput, payment_methodUncheckedCreateWithoutAppointmentInput>
    connectOrCreate?: payment_methodCreateOrConnectWithoutAppointmentInput
    connect?: payment_methodWhereUniqueInput
  }

  export type appointment_statesCreateNestedOneWithoutAppointmentInput = {
    create?: XOR<appointment_statesCreateWithoutAppointmentInput, appointment_statesUncheckedCreateWithoutAppointmentInput>
    connectOrCreate?: appointment_statesCreateOrConnectWithoutAppointmentInput
    connect?: appointment_statesWhereUniqueInput
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type doctorUpdateOneWithoutAppointmentNestedInput = {
    create?: XOR<doctorCreateWithoutAppointmentInput, doctorUncheckedCreateWithoutAppointmentInput>
    connectOrCreate?: doctorCreateOrConnectWithoutAppointmentInput
    upsert?: doctorUpsertWithoutAppointmentInput
    disconnect?: doctorWhereInput | boolean
    delete?: doctorWhereInput | boolean
    connect?: doctorWhereUniqueInput
    update?: XOR<XOR<doctorUpdateToOneWithWhereWithoutAppointmentInput, doctorUpdateWithoutAppointmentInput>, doctorUncheckedUpdateWithoutAppointmentInput>
  }

  export type patientUpdateOneWithoutAppointmentNestedInput = {
    create?: XOR<patientCreateWithoutAppointmentInput, patientUncheckedCreateWithoutAppointmentInput>
    connectOrCreate?: patientCreateOrConnectWithoutAppointmentInput
    upsert?: patientUpsertWithoutAppointmentInput
    disconnect?: patientWhereInput | boolean
    delete?: patientWhereInput | boolean
    connect?: patientWhereUniqueInput
    update?: XOR<XOR<patientUpdateToOneWithWhereWithoutAppointmentInput, patientUpdateWithoutAppointmentInput>, patientUncheckedUpdateWithoutAppointmentInput>
  }

  export type payment_methodUpdateOneWithoutAppointmentNestedInput = {
    create?: XOR<payment_methodCreateWithoutAppointmentInput, payment_methodUncheckedCreateWithoutAppointmentInput>
    connectOrCreate?: payment_methodCreateOrConnectWithoutAppointmentInput
    upsert?: payment_methodUpsertWithoutAppointmentInput
    disconnect?: payment_methodWhereInput | boolean
    delete?: payment_methodWhereInput | boolean
    connect?: payment_methodWhereUniqueInput
    update?: XOR<XOR<payment_methodUpdateToOneWithWhereWithoutAppointmentInput, payment_methodUpdateWithoutAppointmentInput>, payment_methodUncheckedUpdateWithoutAppointmentInput>
  }

  export type appointment_statesUpdateOneWithoutAppointmentNestedInput = {
    create?: XOR<appointment_statesCreateWithoutAppointmentInput, appointment_statesUncheckedCreateWithoutAppointmentInput>
    connectOrCreate?: appointment_statesCreateOrConnectWithoutAppointmentInput
    upsert?: appointment_statesUpsertWithoutAppointmentInput
    disconnect?: appointment_statesWhereInput | boolean
    delete?: appointment_statesWhereInput | boolean
    connect?: appointment_statesWhereUniqueInput
    update?: XOR<XOR<appointment_statesUpdateToOneWithWhereWithoutAppointmentInput, appointment_statesUpdateWithoutAppointmentInput>, appointment_statesUncheckedUpdateWithoutAppointmentInput>
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type appointmentCreateNestedManyWithoutAppointment_statesInput = {
    create?: XOR<appointmentCreateWithoutAppointment_statesInput, appointmentUncheckedCreateWithoutAppointment_statesInput> | appointmentCreateWithoutAppointment_statesInput[] | appointmentUncheckedCreateWithoutAppointment_statesInput[]
    connectOrCreate?: appointmentCreateOrConnectWithoutAppointment_statesInput | appointmentCreateOrConnectWithoutAppointment_statesInput[]
    createMany?: appointmentCreateManyAppointment_statesInputEnvelope
    connect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[]
  }

  export type appointmentUncheckedCreateNestedManyWithoutAppointment_statesInput = {
    create?: XOR<appointmentCreateWithoutAppointment_statesInput, appointmentUncheckedCreateWithoutAppointment_statesInput> | appointmentCreateWithoutAppointment_statesInput[] | appointmentUncheckedCreateWithoutAppointment_statesInput[]
    connectOrCreate?: appointmentCreateOrConnectWithoutAppointment_statesInput | appointmentCreateOrConnectWithoutAppointment_statesInput[]
    createMany?: appointmentCreateManyAppointment_statesInputEnvelope
    connect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[]
  }

  export type appointmentUpdateManyWithoutAppointment_statesNestedInput = {
    create?: XOR<appointmentCreateWithoutAppointment_statesInput, appointmentUncheckedCreateWithoutAppointment_statesInput> | appointmentCreateWithoutAppointment_statesInput[] | appointmentUncheckedCreateWithoutAppointment_statesInput[]
    connectOrCreate?: appointmentCreateOrConnectWithoutAppointment_statesInput | appointmentCreateOrConnectWithoutAppointment_statesInput[]
    upsert?: appointmentUpsertWithWhereUniqueWithoutAppointment_statesInput | appointmentUpsertWithWhereUniqueWithoutAppointment_statesInput[]
    createMany?: appointmentCreateManyAppointment_statesInputEnvelope
    set?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[]
    disconnect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[]
    delete?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[]
    connect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[]
    update?: appointmentUpdateWithWhereUniqueWithoutAppointment_statesInput | appointmentUpdateWithWhereUniqueWithoutAppointment_statesInput[]
    updateMany?: appointmentUpdateManyWithWhereWithoutAppointment_statesInput | appointmentUpdateManyWithWhereWithoutAppointment_statesInput[]
    deleteMany?: appointmentScalarWhereInput | appointmentScalarWhereInput[]
  }

  export type appointmentUncheckedUpdateManyWithoutAppointment_statesNestedInput = {
    create?: XOR<appointmentCreateWithoutAppointment_statesInput, appointmentUncheckedCreateWithoutAppointment_statesInput> | appointmentCreateWithoutAppointment_statesInput[] | appointmentUncheckedCreateWithoutAppointment_statesInput[]
    connectOrCreate?: appointmentCreateOrConnectWithoutAppointment_statesInput | appointmentCreateOrConnectWithoutAppointment_statesInput[]
    upsert?: appointmentUpsertWithWhereUniqueWithoutAppointment_statesInput | appointmentUpsertWithWhereUniqueWithoutAppointment_statesInput[]
    createMany?: appointmentCreateManyAppointment_statesInputEnvelope
    set?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[]
    disconnect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[]
    delete?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[]
    connect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[]
    update?: appointmentUpdateWithWhereUniqueWithoutAppointment_statesInput | appointmentUpdateWithWhereUniqueWithoutAppointment_statesInput[]
    updateMany?: appointmentUpdateManyWithWhereWithoutAppointment_statesInput | appointmentUpdateManyWithWhereWithoutAppointment_statesInput[]
    deleteMany?: appointmentScalarWhereInput | appointmentScalarWhereInput[]
  }

  export type conversationsCreateNestedManyWithoutBusinessInput = {
    create?: XOR<conversationsCreateWithoutBusinessInput, conversationsUncheckedCreateWithoutBusinessInput> | conversationsCreateWithoutBusinessInput[] | conversationsUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: conversationsCreateOrConnectWithoutBusinessInput | conversationsCreateOrConnectWithoutBusinessInput[]
    createMany?: conversationsCreateManyBusinessInputEnvelope
    connect?: conversationsWhereUniqueInput | conversationsWhereUniqueInput[]
  }

  export type doctorCreateNestedManyWithoutBusinessInput = {
    create?: XOR<doctorCreateWithoutBusinessInput, doctorUncheckedCreateWithoutBusinessInput> | doctorCreateWithoutBusinessInput[] | doctorUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: doctorCreateOrConnectWithoutBusinessInput | doctorCreateOrConnectWithoutBusinessInput[]
    createMany?: doctorCreateManyBusinessInputEnvelope
    connect?: doctorWhereUniqueInput | doctorWhereUniqueInput[]
  }

  export type conversationsUncheckedCreateNestedManyWithoutBusinessInput = {
    create?: XOR<conversationsCreateWithoutBusinessInput, conversationsUncheckedCreateWithoutBusinessInput> | conversationsCreateWithoutBusinessInput[] | conversationsUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: conversationsCreateOrConnectWithoutBusinessInput | conversationsCreateOrConnectWithoutBusinessInput[]
    createMany?: conversationsCreateManyBusinessInputEnvelope
    connect?: conversationsWhereUniqueInput | conversationsWhereUniqueInput[]
  }

  export type doctorUncheckedCreateNestedManyWithoutBusinessInput = {
    create?: XOR<doctorCreateWithoutBusinessInput, doctorUncheckedCreateWithoutBusinessInput> | doctorCreateWithoutBusinessInput[] | doctorUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: doctorCreateOrConnectWithoutBusinessInput | doctorCreateOrConnectWithoutBusinessInput[]
    createMany?: doctorCreateManyBusinessInputEnvelope
    connect?: doctorWhereUniqueInput | doctorWhereUniqueInput[]
  }

  export type conversationsUpdateManyWithoutBusinessNestedInput = {
    create?: XOR<conversationsCreateWithoutBusinessInput, conversationsUncheckedCreateWithoutBusinessInput> | conversationsCreateWithoutBusinessInput[] | conversationsUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: conversationsCreateOrConnectWithoutBusinessInput | conversationsCreateOrConnectWithoutBusinessInput[]
    upsert?: conversationsUpsertWithWhereUniqueWithoutBusinessInput | conversationsUpsertWithWhereUniqueWithoutBusinessInput[]
    createMany?: conversationsCreateManyBusinessInputEnvelope
    set?: conversationsWhereUniqueInput | conversationsWhereUniqueInput[]
    disconnect?: conversationsWhereUniqueInput | conversationsWhereUniqueInput[]
    delete?: conversationsWhereUniqueInput | conversationsWhereUniqueInput[]
    connect?: conversationsWhereUniqueInput | conversationsWhereUniqueInput[]
    update?: conversationsUpdateWithWhereUniqueWithoutBusinessInput | conversationsUpdateWithWhereUniqueWithoutBusinessInput[]
    updateMany?: conversationsUpdateManyWithWhereWithoutBusinessInput | conversationsUpdateManyWithWhereWithoutBusinessInput[]
    deleteMany?: conversationsScalarWhereInput | conversationsScalarWhereInput[]
  }

  export type doctorUpdateManyWithoutBusinessNestedInput = {
    create?: XOR<doctorCreateWithoutBusinessInput, doctorUncheckedCreateWithoutBusinessInput> | doctorCreateWithoutBusinessInput[] | doctorUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: doctorCreateOrConnectWithoutBusinessInput | doctorCreateOrConnectWithoutBusinessInput[]
    upsert?: doctorUpsertWithWhereUniqueWithoutBusinessInput | doctorUpsertWithWhereUniqueWithoutBusinessInput[]
    createMany?: doctorCreateManyBusinessInputEnvelope
    set?: doctorWhereUniqueInput | doctorWhereUniqueInput[]
    disconnect?: doctorWhereUniqueInput | doctorWhereUniqueInput[]
    delete?: doctorWhereUniqueInput | doctorWhereUniqueInput[]
    connect?: doctorWhereUniqueInput | doctorWhereUniqueInput[]
    update?: doctorUpdateWithWhereUniqueWithoutBusinessInput | doctorUpdateWithWhereUniqueWithoutBusinessInput[]
    updateMany?: doctorUpdateManyWithWhereWithoutBusinessInput | doctorUpdateManyWithWhereWithoutBusinessInput[]
    deleteMany?: doctorScalarWhereInput | doctorScalarWhereInput[]
  }

  export type conversationsUncheckedUpdateManyWithoutBusinessNestedInput = {
    create?: XOR<conversationsCreateWithoutBusinessInput, conversationsUncheckedCreateWithoutBusinessInput> | conversationsCreateWithoutBusinessInput[] | conversationsUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: conversationsCreateOrConnectWithoutBusinessInput | conversationsCreateOrConnectWithoutBusinessInput[]
    upsert?: conversationsUpsertWithWhereUniqueWithoutBusinessInput | conversationsUpsertWithWhereUniqueWithoutBusinessInput[]
    createMany?: conversationsCreateManyBusinessInputEnvelope
    set?: conversationsWhereUniqueInput | conversationsWhereUniqueInput[]
    disconnect?: conversationsWhereUniqueInput | conversationsWhereUniqueInput[]
    delete?: conversationsWhereUniqueInput | conversationsWhereUniqueInput[]
    connect?: conversationsWhereUniqueInput | conversationsWhereUniqueInput[]
    update?: conversationsUpdateWithWhereUniqueWithoutBusinessInput | conversationsUpdateWithWhereUniqueWithoutBusinessInput[]
    updateMany?: conversationsUpdateManyWithWhereWithoutBusinessInput | conversationsUpdateManyWithWhereWithoutBusinessInput[]
    deleteMany?: conversationsScalarWhereInput | conversationsScalarWhereInput[]
  }

  export type doctorUncheckedUpdateManyWithoutBusinessNestedInput = {
    create?: XOR<doctorCreateWithoutBusinessInput, doctorUncheckedCreateWithoutBusinessInput> | doctorCreateWithoutBusinessInput[] | doctorUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: doctorCreateOrConnectWithoutBusinessInput | doctorCreateOrConnectWithoutBusinessInput[]
    upsert?: doctorUpsertWithWhereUniqueWithoutBusinessInput | doctorUpsertWithWhereUniqueWithoutBusinessInput[]
    createMany?: doctorCreateManyBusinessInputEnvelope
    set?: doctorWhereUniqueInput | doctorWhereUniqueInput[]
    disconnect?: doctorWhereUniqueInput | doctorWhereUniqueInput[]
    delete?: doctorWhereUniqueInput | doctorWhereUniqueInput[]
    connect?: doctorWhereUniqueInput | doctorWhereUniqueInput[]
    update?: doctorUpdateWithWhereUniqueWithoutBusinessInput | doctorUpdateWithWhereUniqueWithoutBusinessInput[]
    updateMany?: doctorUpdateManyWithWhereWithoutBusinessInput | doctorUpdateManyWithWhereWithoutBusinessInput[]
    deleteMany?: doctorScalarWhereInput | doctorScalarWhereInput[]
  }

  export type businessCreateNestedOneWithoutConversationsInput = {
    create?: XOR<businessCreateWithoutConversationsInput, businessUncheckedCreateWithoutConversationsInput>
    connectOrCreate?: businessCreateOrConnectWithoutConversationsInput
    connect?: businessWhereUniqueInput
  }

  export type patientCreateNestedOneWithoutConversationsInput = {
    create?: XOR<patientCreateWithoutConversationsInput, patientUncheckedCreateWithoutConversationsInput>
    connectOrCreate?: patientCreateOrConnectWithoutConversationsInput
    connect?: patientWhereUniqueInput
  }

  export type messagesCreateNestedManyWithoutConversationsInput = {
    create?: XOR<messagesCreateWithoutConversationsInput, messagesUncheckedCreateWithoutConversationsInput> | messagesCreateWithoutConversationsInput[] | messagesUncheckedCreateWithoutConversationsInput[]
    connectOrCreate?: messagesCreateOrConnectWithoutConversationsInput | messagesCreateOrConnectWithoutConversationsInput[]
    createMany?: messagesCreateManyConversationsInputEnvelope
    connect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
  }

  export type messagesUncheckedCreateNestedManyWithoutConversationsInput = {
    create?: XOR<messagesCreateWithoutConversationsInput, messagesUncheckedCreateWithoutConversationsInput> | messagesCreateWithoutConversationsInput[] | messagesUncheckedCreateWithoutConversationsInput[]
    connectOrCreate?: messagesCreateOrConnectWithoutConversationsInput | messagesCreateOrConnectWithoutConversationsInput[]
    createMany?: messagesCreateManyConversationsInputEnvelope
    connect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
  }

  export type businessUpdateOneWithoutConversationsNestedInput = {
    create?: XOR<businessCreateWithoutConversationsInput, businessUncheckedCreateWithoutConversationsInput>
    connectOrCreate?: businessCreateOrConnectWithoutConversationsInput
    upsert?: businessUpsertWithoutConversationsInput
    disconnect?: businessWhereInput | boolean
    delete?: businessWhereInput | boolean
    connect?: businessWhereUniqueInput
    update?: XOR<XOR<businessUpdateToOneWithWhereWithoutConversationsInput, businessUpdateWithoutConversationsInput>, businessUncheckedUpdateWithoutConversationsInput>
  }

  export type patientUpdateOneWithoutConversationsNestedInput = {
    create?: XOR<patientCreateWithoutConversationsInput, patientUncheckedCreateWithoutConversationsInput>
    connectOrCreate?: patientCreateOrConnectWithoutConversationsInput
    upsert?: patientUpsertWithoutConversationsInput
    disconnect?: patientWhereInput | boolean
    delete?: patientWhereInput | boolean
    connect?: patientWhereUniqueInput
    update?: XOR<XOR<patientUpdateToOneWithWhereWithoutConversationsInput, patientUpdateWithoutConversationsInput>, patientUncheckedUpdateWithoutConversationsInput>
  }

  export type messagesUpdateManyWithoutConversationsNestedInput = {
    create?: XOR<messagesCreateWithoutConversationsInput, messagesUncheckedCreateWithoutConversationsInput> | messagesCreateWithoutConversationsInput[] | messagesUncheckedCreateWithoutConversationsInput[]
    connectOrCreate?: messagesCreateOrConnectWithoutConversationsInput | messagesCreateOrConnectWithoutConversationsInput[]
    upsert?: messagesUpsertWithWhereUniqueWithoutConversationsInput | messagesUpsertWithWhereUniqueWithoutConversationsInput[]
    createMany?: messagesCreateManyConversationsInputEnvelope
    set?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    disconnect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    delete?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    connect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    update?: messagesUpdateWithWhereUniqueWithoutConversationsInput | messagesUpdateWithWhereUniqueWithoutConversationsInput[]
    updateMany?: messagesUpdateManyWithWhereWithoutConversationsInput | messagesUpdateManyWithWhereWithoutConversationsInput[]
    deleteMany?: messagesScalarWhereInput | messagesScalarWhereInput[]
  }

  export type messagesUncheckedUpdateManyWithoutConversationsNestedInput = {
    create?: XOR<messagesCreateWithoutConversationsInput, messagesUncheckedCreateWithoutConversationsInput> | messagesCreateWithoutConversationsInput[] | messagesUncheckedCreateWithoutConversationsInput[]
    connectOrCreate?: messagesCreateOrConnectWithoutConversationsInput | messagesCreateOrConnectWithoutConversationsInput[]
    upsert?: messagesUpsertWithWhereUniqueWithoutConversationsInput | messagesUpsertWithWhereUniqueWithoutConversationsInput[]
    createMany?: messagesCreateManyConversationsInputEnvelope
    set?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    disconnect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    delete?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    connect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    update?: messagesUpdateWithWhereUniqueWithoutConversationsInput | messagesUpdateWithWhereUniqueWithoutConversationsInput[]
    updateMany?: messagesUpdateManyWithWhereWithoutConversationsInput | messagesUpdateManyWithWhereWithoutConversationsInput[]
    deleteMany?: messagesScalarWhereInput | messagesScalarWhereInput[]
  }

  export type appointmentCreateNestedManyWithoutDoctorInput = {
    create?: XOR<appointmentCreateWithoutDoctorInput, appointmentUncheckedCreateWithoutDoctorInput> | appointmentCreateWithoutDoctorInput[] | appointmentUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: appointmentCreateOrConnectWithoutDoctorInput | appointmentCreateOrConnectWithoutDoctorInput[]
    createMany?: appointmentCreateManyDoctorInputEnvelope
    connect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[]
  }

  export type businessCreateNestedOneWithoutDoctorInput = {
    create?: XOR<businessCreateWithoutDoctorInput, businessUncheckedCreateWithoutDoctorInput>
    connectOrCreate?: businessCreateOrConnectWithoutDoctorInput
    connect?: businessWhereUniqueInput
  }

  export type notesCreateNestedManyWithoutDoctorInput = {
    create?: XOR<notesCreateWithoutDoctorInput, notesUncheckedCreateWithoutDoctorInput> | notesCreateWithoutDoctorInput[] | notesUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: notesCreateOrConnectWithoutDoctorInput | notesCreateOrConnectWithoutDoctorInput[]
    createMany?: notesCreateManyDoctorInputEnvelope
    connect?: notesWhereUniqueInput | notesWhereUniqueInput[]
  }

  export type notificationsCreateNestedManyWithoutDoctorInput = {
    create?: XOR<notificationsCreateWithoutDoctorInput, notificationsUncheckedCreateWithoutDoctorInput> | notificationsCreateWithoutDoctorInput[] | notificationsUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: notificationsCreateOrConnectWithoutDoctorInput | notificationsCreateOrConnectWithoutDoctorInput[]
    createMany?: notificationsCreateManyDoctorInputEnvelope
    connect?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
  }

  export type appointmentUncheckedCreateNestedManyWithoutDoctorInput = {
    create?: XOR<appointmentCreateWithoutDoctorInput, appointmentUncheckedCreateWithoutDoctorInput> | appointmentCreateWithoutDoctorInput[] | appointmentUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: appointmentCreateOrConnectWithoutDoctorInput | appointmentCreateOrConnectWithoutDoctorInput[]
    createMany?: appointmentCreateManyDoctorInputEnvelope
    connect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[]
  }

  export type notesUncheckedCreateNestedManyWithoutDoctorInput = {
    create?: XOR<notesCreateWithoutDoctorInput, notesUncheckedCreateWithoutDoctorInput> | notesCreateWithoutDoctorInput[] | notesUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: notesCreateOrConnectWithoutDoctorInput | notesCreateOrConnectWithoutDoctorInput[]
    createMany?: notesCreateManyDoctorInputEnvelope
    connect?: notesWhereUniqueInput | notesWhereUniqueInput[]
  }

  export type notificationsUncheckedCreateNestedManyWithoutDoctorInput = {
    create?: XOR<notificationsCreateWithoutDoctorInput, notificationsUncheckedCreateWithoutDoctorInput> | notificationsCreateWithoutDoctorInput[] | notificationsUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: notificationsCreateOrConnectWithoutDoctorInput | notificationsCreateOrConnectWithoutDoctorInput[]
    createMany?: notificationsCreateManyDoctorInputEnvelope
    connect?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
  }

  export type appointmentUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<appointmentCreateWithoutDoctorInput, appointmentUncheckedCreateWithoutDoctorInput> | appointmentCreateWithoutDoctorInput[] | appointmentUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: appointmentCreateOrConnectWithoutDoctorInput | appointmentCreateOrConnectWithoutDoctorInput[]
    upsert?: appointmentUpsertWithWhereUniqueWithoutDoctorInput | appointmentUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: appointmentCreateManyDoctorInputEnvelope
    set?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[]
    disconnect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[]
    delete?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[]
    connect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[]
    update?: appointmentUpdateWithWhereUniqueWithoutDoctorInput | appointmentUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: appointmentUpdateManyWithWhereWithoutDoctorInput | appointmentUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: appointmentScalarWhereInput | appointmentScalarWhereInput[]
  }

  export type businessUpdateOneWithoutDoctorNestedInput = {
    create?: XOR<businessCreateWithoutDoctorInput, businessUncheckedCreateWithoutDoctorInput>
    connectOrCreate?: businessCreateOrConnectWithoutDoctorInput
    upsert?: businessUpsertWithoutDoctorInput
    disconnect?: businessWhereInput | boolean
    delete?: businessWhereInput | boolean
    connect?: businessWhereUniqueInput
    update?: XOR<XOR<businessUpdateToOneWithWhereWithoutDoctorInput, businessUpdateWithoutDoctorInput>, businessUncheckedUpdateWithoutDoctorInput>
  }

  export type notesUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<notesCreateWithoutDoctorInput, notesUncheckedCreateWithoutDoctorInput> | notesCreateWithoutDoctorInput[] | notesUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: notesCreateOrConnectWithoutDoctorInput | notesCreateOrConnectWithoutDoctorInput[]
    upsert?: notesUpsertWithWhereUniqueWithoutDoctorInput | notesUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: notesCreateManyDoctorInputEnvelope
    set?: notesWhereUniqueInput | notesWhereUniqueInput[]
    disconnect?: notesWhereUniqueInput | notesWhereUniqueInput[]
    delete?: notesWhereUniqueInput | notesWhereUniqueInput[]
    connect?: notesWhereUniqueInput | notesWhereUniqueInput[]
    update?: notesUpdateWithWhereUniqueWithoutDoctorInput | notesUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: notesUpdateManyWithWhereWithoutDoctorInput | notesUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: notesScalarWhereInput | notesScalarWhereInput[]
  }

  export type notificationsUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<notificationsCreateWithoutDoctorInput, notificationsUncheckedCreateWithoutDoctorInput> | notificationsCreateWithoutDoctorInput[] | notificationsUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: notificationsCreateOrConnectWithoutDoctorInput | notificationsCreateOrConnectWithoutDoctorInput[]
    upsert?: notificationsUpsertWithWhereUniqueWithoutDoctorInput | notificationsUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: notificationsCreateManyDoctorInputEnvelope
    set?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    disconnect?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    delete?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    connect?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    update?: notificationsUpdateWithWhereUniqueWithoutDoctorInput | notificationsUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: notificationsUpdateManyWithWhereWithoutDoctorInput | notificationsUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: notificationsScalarWhereInput | notificationsScalarWhereInput[]
  }

  export type appointmentUncheckedUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<appointmentCreateWithoutDoctorInput, appointmentUncheckedCreateWithoutDoctorInput> | appointmentCreateWithoutDoctorInput[] | appointmentUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: appointmentCreateOrConnectWithoutDoctorInput | appointmentCreateOrConnectWithoutDoctorInput[]
    upsert?: appointmentUpsertWithWhereUniqueWithoutDoctorInput | appointmentUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: appointmentCreateManyDoctorInputEnvelope
    set?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[]
    disconnect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[]
    delete?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[]
    connect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[]
    update?: appointmentUpdateWithWhereUniqueWithoutDoctorInput | appointmentUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: appointmentUpdateManyWithWhereWithoutDoctorInput | appointmentUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: appointmentScalarWhereInput | appointmentScalarWhereInput[]
  }

  export type notesUncheckedUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<notesCreateWithoutDoctorInput, notesUncheckedCreateWithoutDoctorInput> | notesCreateWithoutDoctorInput[] | notesUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: notesCreateOrConnectWithoutDoctorInput | notesCreateOrConnectWithoutDoctorInput[]
    upsert?: notesUpsertWithWhereUniqueWithoutDoctorInput | notesUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: notesCreateManyDoctorInputEnvelope
    set?: notesWhereUniqueInput | notesWhereUniqueInput[]
    disconnect?: notesWhereUniqueInput | notesWhereUniqueInput[]
    delete?: notesWhereUniqueInput | notesWhereUniqueInput[]
    connect?: notesWhereUniqueInput | notesWhereUniqueInput[]
    update?: notesUpdateWithWhereUniqueWithoutDoctorInput | notesUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: notesUpdateManyWithWhereWithoutDoctorInput | notesUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: notesScalarWhereInput | notesScalarWhereInput[]
  }

  export type notificationsUncheckedUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<notificationsCreateWithoutDoctorInput, notificationsUncheckedCreateWithoutDoctorInput> | notificationsCreateWithoutDoctorInput[] | notificationsUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: notificationsCreateOrConnectWithoutDoctorInput | notificationsCreateOrConnectWithoutDoctorInput[]
    upsert?: notificationsUpsertWithWhereUniqueWithoutDoctorInput | notificationsUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: notificationsCreateManyDoctorInputEnvelope
    set?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    disconnect?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    delete?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    connect?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    update?: notificationsUpdateWithWhereUniqueWithoutDoctorInput | notificationsUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: notificationsUpdateManyWithWhereWithoutDoctorInput | notificationsUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: notificationsScalarWhereInput | notificationsScalarWhereInput[]
  }

  export type conversationsCreateNestedOneWithoutMessagesInput = {
    create?: XOR<conversationsCreateWithoutMessagesInput, conversationsUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: conversationsCreateOrConnectWithoutMessagesInput
    connect?: conversationsWhereUniqueInput
  }

  export type patientCreateNestedOneWithoutMessagesInput = {
    create?: XOR<patientCreateWithoutMessagesInput, patientUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: patientCreateOrConnectWithoutMessagesInput
    connect?: patientWhereUniqueInput
  }

  export type conversationsUpdateOneWithoutMessagesNestedInput = {
    create?: XOR<conversationsCreateWithoutMessagesInput, conversationsUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: conversationsCreateOrConnectWithoutMessagesInput
    upsert?: conversationsUpsertWithoutMessagesInput
    disconnect?: conversationsWhereInput | boolean
    delete?: conversationsWhereInput | boolean
    connect?: conversationsWhereUniqueInput
    update?: XOR<XOR<conversationsUpdateToOneWithWhereWithoutMessagesInput, conversationsUpdateWithoutMessagesInput>, conversationsUncheckedUpdateWithoutMessagesInput>
  }

  export type patientUpdateOneWithoutMessagesNestedInput = {
    create?: XOR<patientCreateWithoutMessagesInput, patientUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: patientCreateOrConnectWithoutMessagesInput
    upsert?: patientUpsertWithoutMessagesInput
    disconnect?: patientWhereInput | boolean
    delete?: patientWhereInput | boolean
    connect?: patientWhereUniqueInput
    update?: XOR<XOR<patientUpdateToOneWithWhereWithoutMessagesInput, patientUpdateWithoutMessagesInput>, patientUncheckedUpdateWithoutMessagesInput>
  }

  export type doctorCreateNestedOneWithoutNotesInput = {
    create?: XOR<doctorCreateWithoutNotesInput, doctorUncheckedCreateWithoutNotesInput>
    connectOrCreate?: doctorCreateOrConnectWithoutNotesInput
    connect?: doctorWhereUniqueInput
  }

  export type patientCreateNestedOneWithoutNotesInput = {
    create?: XOR<patientCreateWithoutNotesInput, patientUncheckedCreateWithoutNotesInput>
    connectOrCreate?: patientCreateOrConnectWithoutNotesInput
    connect?: patientWhereUniqueInput
  }

  export type doctorUpdateOneWithoutNotesNestedInput = {
    create?: XOR<doctorCreateWithoutNotesInput, doctorUncheckedCreateWithoutNotesInput>
    connectOrCreate?: doctorCreateOrConnectWithoutNotesInput
    upsert?: doctorUpsertWithoutNotesInput
    disconnect?: doctorWhereInput | boolean
    delete?: doctorWhereInput | boolean
    connect?: doctorWhereUniqueInput
    update?: XOR<XOR<doctorUpdateToOneWithWhereWithoutNotesInput, doctorUpdateWithoutNotesInput>, doctorUncheckedUpdateWithoutNotesInput>
  }

  export type patientUpdateOneWithoutNotesNestedInput = {
    create?: XOR<patientCreateWithoutNotesInput, patientUncheckedCreateWithoutNotesInput>
    connectOrCreate?: patientCreateOrConnectWithoutNotesInput
    upsert?: patientUpsertWithoutNotesInput
    disconnect?: patientWhereInput | boolean
    delete?: patientWhereInput | boolean
    connect?: patientWhereUniqueInput
    update?: XOR<XOR<patientUpdateToOneWithWhereWithoutNotesInput, patientUpdateWithoutNotesInput>, patientUncheckedUpdateWithoutNotesInput>
  }

  export type doctorCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<doctorCreateWithoutNotificationsInput, doctorUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: doctorCreateOrConnectWithoutNotificationsInput
    connect?: doctorWhereUniqueInput
  }

  export type patientCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<patientCreateWithoutNotificationsInput, patientUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: patientCreateOrConnectWithoutNotificationsInput
    connect?: patientWhereUniqueInput
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type doctorUpdateOneWithoutNotificationsNestedInput = {
    create?: XOR<doctorCreateWithoutNotificationsInput, doctorUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: doctorCreateOrConnectWithoutNotificationsInput
    upsert?: doctorUpsertWithoutNotificationsInput
    disconnect?: doctorWhereInput | boolean
    delete?: doctorWhereInput | boolean
    connect?: doctorWhereUniqueInput
    update?: XOR<XOR<doctorUpdateToOneWithWhereWithoutNotificationsInput, doctorUpdateWithoutNotificationsInput>, doctorUncheckedUpdateWithoutNotificationsInput>
  }

  export type patientUpdateOneWithoutNotificationsNestedInput = {
    create?: XOR<patientCreateWithoutNotificationsInput, patientUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: patientCreateOrConnectWithoutNotificationsInput
    upsert?: patientUpsertWithoutNotificationsInput
    disconnect?: patientWhereInput | boolean
    delete?: patientWhereInput | boolean
    connect?: patientWhereUniqueInput
    update?: XOR<XOR<patientUpdateToOneWithWhereWithoutNotificationsInput, patientUpdateWithoutNotificationsInput>, patientUncheckedUpdateWithoutNotificationsInput>
  }

  export type appointmentCreateNestedManyWithoutPatientInput = {
    create?: XOR<appointmentCreateWithoutPatientInput, appointmentUncheckedCreateWithoutPatientInput> | appointmentCreateWithoutPatientInput[] | appointmentUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: appointmentCreateOrConnectWithoutPatientInput | appointmentCreateOrConnectWithoutPatientInput[]
    createMany?: appointmentCreateManyPatientInputEnvelope
    connect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[]
  }

  export type conversationsCreateNestedManyWithoutPatientInput = {
    create?: XOR<conversationsCreateWithoutPatientInput, conversationsUncheckedCreateWithoutPatientInput> | conversationsCreateWithoutPatientInput[] | conversationsUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: conversationsCreateOrConnectWithoutPatientInput | conversationsCreateOrConnectWithoutPatientInput[]
    createMany?: conversationsCreateManyPatientInputEnvelope
    connect?: conversationsWhereUniqueInput | conversationsWhereUniqueInput[]
  }

  export type messagesCreateNestedManyWithoutPatientInput = {
    create?: XOR<messagesCreateWithoutPatientInput, messagesUncheckedCreateWithoutPatientInput> | messagesCreateWithoutPatientInput[] | messagesUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: messagesCreateOrConnectWithoutPatientInput | messagesCreateOrConnectWithoutPatientInput[]
    createMany?: messagesCreateManyPatientInputEnvelope
    connect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
  }

  export type notesCreateNestedManyWithoutPatientInput = {
    create?: XOR<notesCreateWithoutPatientInput, notesUncheckedCreateWithoutPatientInput> | notesCreateWithoutPatientInput[] | notesUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: notesCreateOrConnectWithoutPatientInput | notesCreateOrConnectWithoutPatientInput[]
    createMany?: notesCreateManyPatientInputEnvelope
    connect?: notesWhereUniqueInput | notesWhereUniqueInput[]
  }

  export type notificationsCreateNestedManyWithoutPatientInput = {
    create?: XOR<notificationsCreateWithoutPatientInput, notificationsUncheckedCreateWithoutPatientInput> | notificationsCreateWithoutPatientInput[] | notificationsUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: notificationsCreateOrConnectWithoutPatientInput | notificationsCreateOrConnectWithoutPatientInput[]
    createMany?: notificationsCreateManyPatientInputEnvelope
    connect?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
  }

  export type appointmentUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<appointmentCreateWithoutPatientInput, appointmentUncheckedCreateWithoutPatientInput> | appointmentCreateWithoutPatientInput[] | appointmentUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: appointmentCreateOrConnectWithoutPatientInput | appointmentCreateOrConnectWithoutPatientInput[]
    createMany?: appointmentCreateManyPatientInputEnvelope
    connect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[]
  }

  export type conversationsUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<conversationsCreateWithoutPatientInput, conversationsUncheckedCreateWithoutPatientInput> | conversationsCreateWithoutPatientInput[] | conversationsUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: conversationsCreateOrConnectWithoutPatientInput | conversationsCreateOrConnectWithoutPatientInput[]
    createMany?: conversationsCreateManyPatientInputEnvelope
    connect?: conversationsWhereUniqueInput | conversationsWhereUniqueInput[]
  }

  export type messagesUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<messagesCreateWithoutPatientInput, messagesUncheckedCreateWithoutPatientInput> | messagesCreateWithoutPatientInput[] | messagesUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: messagesCreateOrConnectWithoutPatientInput | messagesCreateOrConnectWithoutPatientInput[]
    createMany?: messagesCreateManyPatientInputEnvelope
    connect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
  }

  export type notesUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<notesCreateWithoutPatientInput, notesUncheckedCreateWithoutPatientInput> | notesCreateWithoutPatientInput[] | notesUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: notesCreateOrConnectWithoutPatientInput | notesCreateOrConnectWithoutPatientInput[]
    createMany?: notesCreateManyPatientInputEnvelope
    connect?: notesWhereUniqueInput | notesWhereUniqueInput[]
  }

  export type notificationsUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<notificationsCreateWithoutPatientInput, notificationsUncheckedCreateWithoutPatientInput> | notificationsCreateWithoutPatientInput[] | notificationsUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: notificationsCreateOrConnectWithoutPatientInput | notificationsCreateOrConnectWithoutPatientInput[]
    createMany?: notificationsCreateManyPatientInputEnvelope
    connect?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
  }

  export type appointmentUpdateManyWithoutPatientNestedInput = {
    create?: XOR<appointmentCreateWithoutPatientInput, appointmentUncheckedCreateWithoutPatientInput> | appointmentCreateWithoutPatientInput[] | appointmentUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: appointmentCreateOrConnectWithoutPatientInput | appointmentCreateOrConnectWithoutPatientInput[]
    upsert?: appointmentUpsertWithWhereUniqueWithoutPatientInput | appointmentUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: appointmentCreateManyPatientInputEnvelope
    set?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[]
    disconnect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[]
    delete?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[]
    connect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[]
    update?: appointmentUpdateWithWhereUniqueWithoutPatientInput | appointmentUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: appointmentUpdateManyWithWhereWithoutPatientInput | appointmentUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: appointmentScalarWhereInput | appointmentScalarWhereInput[]
  }

  export type conversationsUpdateManyWithoutPatientNestedInput = {
    create?: XOR<conversationsCreateWithoutPatientInput, conversationsUncheckedCreateWithoutPatientInput> | conversationsCreateWithoutPatientInput[] | conversationsUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: conversationsCreateOrConnectWithoutPatientInput | conversationsCreateOrConnectWithoutPatientInput[]
    upsert?: conversationsUpsertWithWhereUniqueWithoutPatientInput | conversationsUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: conversationsCreateManyPatientInputEnvelope
    set?: conversationsWhereUniqueInput | conversationsWhereUniqueInput[]
    disconnect?: conversationsWhereUniqueInput | conversationsWhereUniqueInput[]
    delete?: conversationsWhereUniqueInput | conversationsWhereUniqueInput[]
    connect?: conversationsWhereUniqueInput | conversationsWhereUniqueInput[]
    update?: conversationsUpdateWithWhereUniqueWithoutPatientInput | conversationsUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: conversationsUpdateManyWithWhereWithoutPatientInput | conversationsUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: conversationsScalarWhereInput | conversationsScalarWhereInput[]
  }

  export type messagesUpdateManyWithoutPatientNestedInput = {
    create?: XOR<messagesCreateWithoutPatientInput, messagesUncheckedCreateWithoutPatientInput> | messagesCreateWithoutPatientInput[] | messagesUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: messagesCreateOrConnectWithoutPatientInput | messagesCreateOrConnectWithoutPatientInput[]
    upsert?: messagesUpsertWithWhereUniqueWithoutPatientInput | messagesUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: messagesCreateManyPatientInputEnvelope
    set?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    disconnect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    delete?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    connect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    update?: messagesUpdateWithWhereUniqueWithoutPatientInput | messagesUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: messagesUpdateManyWithWhereWithoutPatientInput | messagesUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: messagesScalarWhereInput | messagesScalarWhereInput[]
  }

  export type notesUpdateManyWithoutPatientNestedInput = {
    create?: XOR<notesCreateWithoutPatientInput, notesUncheckedCreateWithoutPatientInput> | notesCreateWithoutPatientInput[] | notesUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: notesCreateOrConnectWithoutPatientInput | notesCreateOrConnectWithoutPatientInput[]
    upsert?: notesUpsertWithWhereUniqueWithoutPatientInput | notesUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: notesCreateManyPatientInputEnvelope
    set?: notesWhereUniqueInput | notesWhereUniqueInput[]
    disconnect?: notesWhereUniqueInput | notesWhereUniqueInput[]
    delete?: notesWhereUniqueInput | notesWhereUniqueInput[]
    connect?: notesWhereUniqueInput | notesWhereUniqueInput[]
    update?: notesUpdateWithWhereUniqueWithoutPatientInput | notesUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: notesUpdateManyWithWhereWithoutPatientInput | notesUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: notesScalarWhereInput | notesScalarWhereInput[]
  }

  export type notificationsUpdateManyWithoutPatientNestedInput = {
    create?: XOR<notificationsCreateWithoutPatientInput, notificationsUncheckedCreateWithoutPatientInput> | notificationsCreateWithoutPatientInput[] | notificationsUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: notificationsCreateOrConnectWithoutPatientInput | notificationsCreateOrConnectWithoutPatientInput[]
    upsert?: notificationsUpsertWithWhereUniqueWithoutPatientInput | notificationsUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: notificationsCreateManyPatientInputEnvelope
    set?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    disconnect?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    delete?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    connect?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    update?: notificationsUpdateWithWhereUniqueWithoutPatientInput | notificationsUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: notificationsUpdateManyWithWhereWithoutPatientInput | notificationsUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: notificationsScalarWhereInput | notificationsScalarWhereInput[]
  }

  export type appointmentUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<appointmentCreateWithoutPatientInput, appointmentUncheckedCreateWithoutPatientInput> | appointmentCreateWithoutPatientInput[] | appointmentUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: appointmentCreateOrConnectWithoutPatientInput | appointmentCreateOrConnectWithoutPatientInput[]
    upsert?: appointmentUpsertWithWhereUniqueWithoutPatientInput | appointmentUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: appointmentCreateManyPatientInputEnvelope
    set?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[]
    disconnect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[]
    delete?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[]
    connect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[]
    update?: appointmentUpdateWithWhereUniqueWithoutPatientInput | appointmentUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: appointmentUpdateManyWithWhereWithoutPatientInput | appointmentUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: appointmentScalarWhereInput | appointmentScalarWhereInput[]
  }

  export type conversationsUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<conversationsCreateWithoutPatientInput, conversationsUncheckedCreateWithoutPatientInput> | conversationsCreateWithoutPatientInput[] | conversationsUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: conversationsCreateOrConnectWithoutPatientInput | conversationsCreateOrConnectWithoutPatientInput[]
    upsert?: conversationsUpsertWithWhereUniqueWithoutPatientInput | conversationsUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: conversationsCreateManyPatientInputEnvelope
    set?: conversationsWhereUniqueInput | conversationsWhereUniqueInput[]
    disconnect?: conversationsWhereUniqueInput | conversationsWhereUniqueInput[]
    delete?: conversationsWhereUniqueInput | conversationsWhereUniqueInput[]
    connect?: conversationsWhereUniqueInput | conversationsWhereUniqueInput[]
    update?: conversationsUpdateWithWhereUniqueWithoutPatientInput | conversationsUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: conversationsUpdateManyWithWhereWithoutPatientInput | conversationsUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: conversationsScalarWhereInput | conversationsScalarWhereInput[]
  }

  export type messagesUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<messagesCreateWithoutPatientInput, messagesUncheckedCreateWithoutPatientInput> | messagesCreateWithoutPatientInput[] | messagesUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: messagesCreateOrConnectWithoutPatientInput | messagesCreateOrConnectWithoutPatientInput[]
    upsert?: messagesUpsertWithWhereUniqueWithoutPatientInput | messagesUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: messagesCreateManyPatientInputEnvelope
    set?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    disconnect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    delete?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    connect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    update?: messagesUpdateWithWhereUniqueWithoutPatientInput | messagesUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: messagesUpdateManyWithWhereWithoutPatientInput | messagesUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: messagesScalarWhereInput | messagesScalarWhereInput[]
  }

  export type notesUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<notesCreateWithoutPatientInput, notesUncheckedCreateWithoutPatientInput> | notesCreateWithoutPatientInput[] | notesUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: notesCreateOrConnectWithoutPatientInput | notesCreateOrConnectWithoutPatientInput[]
    upsert?: notesUpsertWithWhereUniqueWithoutPatientInput | notesUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: notesCreateManyPatientInputEnvelope
    set?: notesWhereUniqueInput | notesWhereUniqueInput[]
    disconnect?: notesWhereUniqueInput | notesWhereUniqueInput[]
    delete?: notesWhereUniqueInput | notesWhereUniqueInput[]
    connect?: notesWhereUniqueInput | notesWhereUniqueInput[]
    update?: notesUpdateWithWhereUniqueWithoutPatientInput | notesUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: notesUpdateManyWithWhereWithoutPatientInput | notesUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: notesScalarWhereInput | notesScalarWhereInput[]
  }

  export type notificationsUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<notificationsCreateWithoutPatientInput, notificationsUncheckedCreateWithoutPatientInput> | notificationsCreateWithoutPatientInput[] | notificationsUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: notificationsCreateOrConnectWithoutPatientInput | notificationsCreateOrConnectWithoutPatientInput[]
    upsert?: notificationsUpsertWithWhereUniqueWithoutPatientInput | notificationsUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: notificationsCreateManyPatientInputEnvelope
    set?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    disconnect?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    delete?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    connect?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    update?: notificationsUpdateWithWhereUniqueWithoutPatientInput | notificationsUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: notificationsUpdateManyWithWhereWithoutPatientInput | notificationsUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: notificationsScalarWhereInput | notificationsScalarWhereInput[]
  }

  export type appointmentCreateNestedManyWithoutPayment_methodInput = {
    create?: XOR<appointmentCreateWithoutPayment_methodInput, appointmentUncheckedCreateWithoutPayment_methodInput> | appointmentCreateWithoutPayment_methodInput[] | appointmentUncheckedCreateWithoutPayment_methodInput[]
    connectOrCreate?: appointmentCreateOrConnectWithoutPayment_methodInput | appointmentCreateOrConnectWithoutPayment_methodInput[]
    createMany?: appointmentCreateManyPayment_methodInputEnvelope
    connect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[]
  }

  export type appointmentUncheckedCreateNestedManyWithoutPayment_methodInput = {
    create?: XOR<appointmentCreateWithoutPayment_methodInput, appointmentUncheckedCreateWithoutPayment_methodInput> | appointmentCreateWithoutPayment_methodInput[] | appointmentUncheckedCreateWithoutPayment_methodInput[]
    connectOrCreate?: appointmentCreateOrConnectWithoutPayment_methodInput | appointmentCreateOrConnectWithoutPayment_methodInput[]
    createMany?: appointmentCreateManyPayment_methodInputEnvelope
    connect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[]
  }

  export type appointmentUpdateManyWithoutPayment_methodNestedInput = {
    create?: XOR<appointmentCreateWithoutPayment_methodInput, appointmentUncheckedCreateWithoutPayment_methodInput> | appointmentCreateWithoutPayment_methodInput[] | appointmentUncheckedCreateWithoutPayment_methodInput[]
    connectOrCreate?: appointmentCreateOrConnectWithoutPayment_methodInput | appointmentCreateOrConnectWithoutPayment_methodInput[]
    upsert?: appointmentUpsertWithWhereUniqueWithoutPayment_methodInput | appointmentUpsertWithWhereUniqueWithoutPayment_methodInput[]
    createMany?: appointmentCreateManyPayment_methodInputEnvelope
    set?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[]
    disconnect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[]
    delete?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[]
    connect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[]
    update?: appointmentUpdateWithWhereUniqueWithoutPayment_methodInput | appointmentUpdateWithWhereUniqueWithoutPayment_methodInput[]
    updateMany?: appointmentUpdateManyWithWhereWithoutPayment_methodInput | appointmentUpdateManyWithWhereWithoutPayment_methodInput[]
    deleteMany?: appointmentScalarWhereInput | appointmentScalarWhereInput[]
  }

  export type appointmentUncheckedUpdateManyWithoutPayment_methodNestedInput = {
    create?: XOR<appointmentCreateWithoutPayment_methodInput, appointmentUncheckedCreateWithoutPayment_methodInput> | appointmentCreateWithoutPayment_methodInput[] | appointmentUncheckedCreateWithoutPayment_methodInput[]
    connectOrCreate?: appointmentCreateOrConnectWithoutPayment_methodInput | appointmentCreateOrConnectWithoutPayment_methodInput[]
    upsert?: appointmentUpsertWithWhereUniqueWithoutPayment_methodInput | appointmentUpsertWithWhereUniqueWithoutPayment_methodInput[]
    createMany?: appointmentCreateManyPayment_methodInputEnvelope
    set?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[]
    disconnect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[]
    delete?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[]
    connect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[]
    update?: appointmentUpdateWithWhereUniqueWithoutPayment_methodInput | appointmentUpdateWithWhereUniqueWithoutPayment_methodInput[]
    updateMany?: appointmentUpdateManyWithWhereWithoutPayment_methodInput | appointmentUpdateManyWithWhereWithoutPayment_methodInput[]
    deleteMany?: appointmentScalarWhereInput | appointmentScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type doctorCreateWithoutAppointmentInput = {
    id?: bigint | number
    name: string
    specialty: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    business?: businessCreateNestedOneWithoutDoctorInput
    notes?: notesCreateNestedManyWithoutDoctorInput
    notifications?: notificationsCreateNestedManyWithoutDoctorInput
  }

  export type doctorUncheckedCreateWithoutAppointmentInput = {
    id?: bigint | number
    name: string
    specialty: string
    negocio_id?: bigint | number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    notes?: notesUncheckedCreateNestedManyWithoutDoctorInput
    notifications?: notificationsUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type doctorCreateOrConnectWithoutAppointmentInput = {
    where: doctorWhereUniqueInput
    create: XOR<doctorCreateWithoutAppointmentInput, doctorUncheckedCreateWithoutAppointmentInput>
  }

  export type patientCreateWithoutAppointmentInput = {
    id?: bigint | number
    id_number: string
    age: number
    name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    conversations?: conversationsCreateNestedManyWithoutPatientInput
    messages?: messagesCreateNestedManyWithoutPatientInput
    notes?: notesCreateNestedManyWithoutPatientInput
    notifications?: notificationsCreateNestedManyWithoutPatientInput
  }

  export type patientUncheckedCreateWithoutAppointmentInput = {
    id?: bigint | number
    id_number: string
    age: number
    name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    conversations?: conversationsUncheckedCreateNestedManyWithoutPatientInput
    messages?: messagesUncheckedCreateNestedManyWithoutPatientInput
    notes?: notesUncheckedCreateNestedManyWithoutPatientInput
    notifications?: notificationsUncheckedCreateNestedManyWithoutPatientInput
  }

  export type patientCreateOrConnectWithoutAppointmentInput = {
    where: patientWhereUniqueInput
    create: XOR<patientCreateWithoutAppointmentInput, patientUncheckedCreateWithoutAppointmentInput>
  }

  export type payment_methodCreateWithoutAppointmentInput = {
    id?: bigint | number
    type: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type payment_methodUncheckedCreateWithoutAppointmentInput = {
    id?: bigint | number
    type: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type payment_methodCreateOrConnectWithoutAppointmentInput = {
    where: payment_methodWhereUniqueInput
    create: XOR<payment_methodCreateWithoutAppointmentInput, payment_methodUncheckedCreateWithoutAppointmentInput>
  }

  export type appointment_statesCreateWithoutAppointmentInput = {
    id?: bigint | number
    name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type appointment_statesUncheckedCreateWithoutAppointmentInput = {
    id?: bigint | number
    name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type appointment_statesCreateOrConnectWithoutAppointmentInput = {
    where: appointment_statesWhereUniqueInput
    create: XOR<appointment_statesCreateWithoutAppointmentInput, appointment_statesUncheckedCreateWithoutAppointmentInput>
  }

  export type doctorUpsertWithoutAppointmentInput = {
    update: XOR<doctorUpdateWithoutAppointmentInput, doctorUncheckedUpdateWithoutAppointmentInput>
    create: XOR<doctorCreateWithoutAppointmentInput, doctorUncheckedCreateWithoutAppointmentInput>
    where?: doctorWhereInput
  }

  export type doctorUpdateToOneWithWhereWithoutAppointmentInput = {
    where?: doctorWhereInput
    data: XOR<doctorUpdateWithoutAppointmentInput, doctorUncheckedUpdateWithoutAppointmentInput>
  }

  export type doctorUpdateWithoutAppointmentInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    specialty?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    business?: businessUpdateOneWithoutDoctorNestedInput
    notes?: notesUpdateManyWithoutDoctorNestedInput
    notifications?: notificationsUpdateManyWithoutDoctorNestedInput
  }

  export type doctorUncheckedUpdateWithoutAppointmentInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    specialty?: StringFieldUpdateOperationsInput | string
    negocio_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: notesUncheckedUpdateManyWithoutDoctorNestedInput
    notifications?: notificationsUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type patientUpsertWithoutAppointmentInput = {
    update: XOR<patientUpdateWithoutAppointmentInput, patientUncheckedUpdateWithoutAppointmentInput>
    create: XOR<patientCreateWithoutAppointmentInput, patientUncheckedCreateWithoutAppointmentInput>
    where?: patientWhereInput
  }

  export type patientUpdateToOneWithWhereWithoutAppointmentInput = {
    where?: patientWhereInput
    data: XOR<patientUpdateWithoutAppointmentInput, patientUncheckedUpdateWithoutAppointmentInput>
  }

  export type patientUpdateWithoutAppointmentInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    id_number?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    conversations?: conversationsUpdateManyWithoutPatientNestedInput
    messages?: messagesUpdateManyWithoutPatientNestedInput
    notes?: notesUpdateManyWithoutPatientNestedInput
    notifications?: notificationsUpdateManyWithoutPatientNestedInput
  }

  export type patientUncheckedUpdateWithoutAppointmentInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    id_number?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    conversations?: conversationsUncheckedUpdateManyWithoutPatientNestedInput
    messages?: messagesUncheckedUpdateManyWithoutPatientNestedInput
    notes?: notesUncheckedUpdateManyWithoutPatientNestedInput
    notifications?: notificationsUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type payment_methodUpsertWithoutAppointmentInput = {
    update: XOR<payment_methodUpdateWithoutAppointmentInput, payment_methodUncheckedUpdateWithoutAppointmentInput>
    create: XOR<payment_methodCreateWithoutAppointmentInput, payment_methodUncheckedCreateWithoutAppointmentInput>
    where?: payment_methodWhereInput
  }

  export type payment_methodUpdateToOneWithWhereWithoutAppointmentInput = {
    where?: payment_methodWhereInput
    data: XOR<payment_methodUpdateWithoutAppointmentInput, payment_methodUncheckedUpdateWithoutAppointmentInput>
  }

  export type payment_methodUpdateWithoutAppointmentInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    type?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type payment_methodUncheckedUpdateWithoutAppointmentInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    type?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type appointment_statesUpsertWithoutAppointmentInput = {
    update: XOR<appointment_statesUpdateWithoutAppointmentInput, appointment_statesUncheckedUpdateWithoutAppointmentInput>
    create: XOR<appointment_statesCreateWithoutAppointmentInput, appointment_statesUncheckedCreateWithoutAppointmentInput>
    where?: appointment_statesWhereInput
  }

  export type appointment_statesUpdateToOneWithWhereWithoutAppointmentInput = {
    where?: appointment_statesWhereInput
    data: XOR<appointment_statesUpdateWithoutAppointmentInput, appointment_statesUncheckedUpdateWithoutAppointmentInput>
  }

  export type appointment_statesUpdateWithoutAppointmentInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type appointment_statesUncheckedUpdateWithoutAppointmentInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type appointmentCreateWithoutAppointment_statesInput = {
    id?: bigint | number
    date: Date | string
    ailment: string
    area?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    doctor?: doctorCreateNestedOneWithoutAppointmentInput
    patient?: patientCreateNestedOneWithoutAppointmentInput
    payment_method?: payment_methodCreateNestedOneWithoutAppointmentInput
  }

  export type appointmentUncheckedCreateWithoutAppointment_statesInput = {
    id?: bigint | number
    patient_id?: bigint | number | null
    doctor_id?: bigint | number | null
    date: Date | string
    ailment: string
    area?: string | null
    payment_method_id?: bigint | number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type appointmentCreateOrConnectWithoutAppointment_statesInput = {
    where: appointmentWhereUniqueInput
    create: XOR<appointmentCreateWithoutAppointment_statesInput, appointmentUncheckedCreateWithoutAppointment_statesInput>
  }

  export type appointmentCreateManyAppointment_statesInputEnvelope = {
    data: appointmentCreateManyAppointment_statesInput | appointmentCreateManyAppointment_statesInput[]
    skipDuplicates?: boolean
  }

  export type appointmentUpsertWithWhereUniqueWithoutAppointment_statesInput = {
    where: appointmentWhereUniqueInput
    update: XOR<appointmentUpdateWithoutAppointment_statesInput, appointmentUncheckedUpdateWithoutAppointment_statesInput>
    create: XOR<appointmentCreateWithoutAppointment_statesInput, appointmentUncheckedCreateWithoutAppointment_statesInput>
  }

  export type appointmentUpdateWithWhereUniqueWithoutAppointment_statesInput = {
    where: appointmentWhereUniqueInput
    data: XOR<appointmentUpdateWithoutAppointment_statesInput, appointmentUncheckedUpdateWithoutAppointment_statesInput>
  }

  export type appointmentUpdateManyWithWhereWithoutAppointment_statesInput = {
    where: appointmentScalarWhereInput
    data: XOR<appointmentUpdateManyMutationInput, appointmentUncheckedUpdateManyWithoutAppointment_statesInput>
  }

  export type appointmentScalarWhereInput = {
    AND?: appointmentScalarWhereInput | appointmentScalarWhereInput[]
    OR?: appointmentScalarWhereInput[]
    NOT?: appointmentScalarWhereInput | appointmentScalarWhereInput[]
    id?: BigIntFilter<"appointment"> | bigint | number
    patient_id?: BigIntNullableFilter<"appointment"> | bigint | number | null
    doctor_id?: BigIntNullableFilter<"appointment"> | bigint | number | null
    date?: DateTimeFilter<"appointment"> | Date | string
    ailment?: StringFilter<"appointment"> | string
    area?: StringNullableFilter<"appointment"> | string | null
    payment_method_id?: BigIntNullableFilter<"appointment"> | bigint | number | null
    state_id?: BigIntNullableFilter<"appointment"> | bigint | number | null
    created_at?: DateTimeNullableFilter<"appointment"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"appointment"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"appointment"> | Date | string | null
  }

  export type conversationsCreateWithoutBusinessInput = {
    id?: bigint | number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    patient?: patientCreateNestedOneWithoutConversationsInput
    messages?: messagesCreateNestedManyWithoutConversationsInput
  }

  export type conversationsUncheckedCreateWithoutBusinessInput = {
    id?: bigint | number
    patient_id?: bigint | number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    messages?: messagesUncheckedCreateNestedManyWithoutConversationsInput
  }

  export type conversationsCreateOrConnectWithoutBusinessInput = {
    where: conversationsWhereUniqueInput
    create: XOR<conversationsCreateWithoutBusinessInput, conversationsUncheckedCreateWithoutBusinessInput>
  }

  export type conversationsCreateManyBusinessInputEnvelope = {
    data: conversationsCreateManyBusinessInput | conversationsCreateManyBusinessInput[]
    skipDuplicates?: boolean
  }

  export type doctorCreateWithoutBusinessInput = {
    id?: bigint | number
    name: string
    specialty: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    appointment?: appointmentCreateNestedManyWithoutDoctorInput
    notes?: notesCreateNestedManyWithoutDoctorInput
    notifications?: notificationsCreateNestedManyWithoutDoctorInput
  }

  export type doctorUncheckedCreateWithoutBusinessInput = {
    id?: bigint | number
    name: string
    specialty: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    appointment?: appointmentUncheckedCreateNestedManyWithoutDoctorInput
    notes?: notesUncheckedCreateNestedManyWithoutDoctorInput
    notifications?: notificationsUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type doctorCreateOrConnectWithoutBusinessInput = {
    where: doctorWhereUniqueInput
    create: XOR<doctorCreateWithoutBusinessInput, doctorUncheckedCreateWithoutBusinessInput>
  }

  export type doctorCreateManyBusinessInputEnvelope = {
    data: doctorCreateManyBusinessInput | doctorCreateManyBusinessInput[]
    skipDuplicates?: boolean
  }

  export type conversationsUpsertWithWhereUniqueWithoutBusinessInput = {
    where: conversationsWhereUniqueInput
    update: XOR<conversationsUpdateWithoutBusinessInput, conversationsUncheckedUpdateWithoutBusinessInput>
    create: XOR<conversationsCreateWithoutBusinessInput, conversationsUncheckedCreateWithoutBusinessInput>
  }

  export type conversationsUpdateWithWhereUniqueWithoutBusinessInput = {
    where: conversationsWhereUniqueInput
    data: XOR<conversationsUpdateWithoutBusinessInput, conversationsUncheckedUpdateWithoutBusinessInput>
  }

  export type conversationsUpdateManyWithWhereWithoutBusinessInput = {
    where: conversationsScalarWhereInput
    data: XOR<conversationsUpdateManyMutationInput, conversationsUncheckedUpdateManyWithoutBusinessInput>
  }

  export type conversationsScalarWhereInput = {
    AND?: conversationsScalarWhereInput | conversationsScalarWhereInput[]
    OR?: conversationsScalarWhereInput[]
    NOT?: conversationsScalarWhereInput | conversationsScalarWhereInput[]
    id?: BigIntFilter<"conversations"> | bigint | number
    patient_id?: BigIntNullableFilter<"conversations"> | bigint | number | null
    business_id?: BigIntNullableFilter<"conversations"> | bigint | number | null
    created_at?: DateTimeNullableFilter<"conversations"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"conversations"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"conversations"> | Date | string | null
  }

  export type doctorUpsertWithWhereUniqueWithoutBusinessInput = {
    where: doctorWhereUniqueInput
    update: XOR<doctorUpdateWithoutBusinessInput, doctorUncheckedUpdateWithoutBusinessInput>
    create: XOR<doctorCreateWithoutBusinessInput, doctorUncheckedCreateWithoutBusinessInput>
  }

  export type doctorUpdateWithWhereUniqueWithoutBusinessInput = {
    where: doctorWhereUniqueInput
    data: XOR<doctorUpdateWithoutBusinessInput, doctorUncheckedUpdateWithoutBusinessInput>
  }

  export type doctorUpdateManyWithWhereWithoutBusinessInput = {
    where: doctorScalarWhereInput
    data: XOR<doctorUpdateManyMutationInput, doctorUncheckedUpdateManyWithoutBusinessInput>
  }

  export type doctorScalarWhereInput = {
    AND?: doctorScalarWhereInput | doctorScalarWhereInput[]
    OR?: doctorScalarWhereInput[]
    NOT?: doctorScalarWhereInput | doctorScalarWhereInput[]
    id?: BigIntFilter<"doctor"> | bigint | number
    name?: StringFilter<"doctor"> | string
    specialty?: StringFilter<"doctor"> | string
    negocio_id?: BigIntNullableFilter<"doctor"> | bigint | number | null
    created_at?: DateTimeNullableFilter<"doctor"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"doctor"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"doctor"> | Date | string | null
  }

  export type businessCreateWithoutConversationsInput = {
    id?: bigint | number
    name: string
    address: string
    hours: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    doctor?: doctorCreateNestedManyWithoutBusinessInput
  }

  export type businessUncheckedCreateWithoutConversationsInput = {
    id?: bigint | number
    name: string
    address: string
    hours: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    doctor?: doctorUncheckedCreateNestedManyWithoutBusinessInput
  }

  export type businessCreateOrConnectWithoutConversationsInput = {
    where: businessWhereUniqueInput
    create: XOR<businessCreateWithoutConversationsInput, businessUncheckedCreateWithoutConversationsInput>
  }

  export type patientCreateWithoutConversationsInput = {
    id?: bigint | number
    id_number: string
    age: number
    name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    appointment?: appointmentCreateNestedManyWithoutPatientInput
    messages?: messagesCreateNestedManyWithoutPatientInput
    notes?: notesCreateNestedManyWithoutPatientInput
    notifications?: notificationsCreateNestedManyWithoutPatientInput
  }

  export type patientUncheckedCreateWithoutConversationsInput = {
    id?: bigint | number
    id_number: string
    age: number
    name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    appointment?: appointmentUncheckedCreateNestedManyWithoutPatientInput
    messages?: messagesUncheckedCreateNestedManyWithoutPatientInput
    notes?: notesUncheckedCreateNestedManyWithoutPatientInput
    notifications?: notificationsUncheckedCreateNestedManyWithoutPatientInput
  }

  export type patientCreateOrConnectWithoutConversationsInput = {
    where: patientWhereUniqueInput
    create: XOR<patientCreateWithoutConversationsInput, patientUncheckedCreateWithoutConversationsInput>
  }

  export type messagesCreateWithoutConversationsInput = {
    id?: bigint | number
    content: string
    date?: Date | string | null
    type?: string | null
    wss_number?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    patient?: patientCreateNestedOneWithoutMessagesInput
  }

  export type messagesUncheckedCreateWithoutConversationsInput = {
    id?: bigint | number
    content: string
    date?: Date | string | null
    patient_id?: bigint | number | null
    type?: string | null
    wss_number?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type messagesCreateOrConnectWithoutConversationsInput = {
    where: messagesWhereUniqueInput
    create: XOR<messagesCreateWithoutConversationsInput, messagesUncheckedCreateWithoutConversationsInput>
  }

  export type messagesCreateManyConversationsInputEnvelope = {
    data: messagesCreateManyConversationsInput | messagesCreateManyConversationsInput[]
    skipDuplicates?: boolean
  }

  export type businessUpsertWithoutConversationsInput = {
    update: XOR<businessUpdateWithoutConversationsInput, businessUncheckedUpdateWithoutConversationsInput>
    create: XOR<businessCreateWithoutConversationsInput, businessUncheckedCreateWithoutConversationsInput>
    where?: businessWhereInput
  }

  export type businessUpdateToOneWithWhereWithoutConversationsInput = {
    where?: businessWhereInput
    data: XOR<businessUpdateWithoutConversationsInput, businessUncheckedUpdateWithoutConversationsInput>
  }

  export type businessUpdateWithoutConversationsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    hours?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    doctor?: doctorUpdateManyWithoutBusinessNestedInput
  }

  export type businessUncheckedUpdateWithoutConversationsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    hours?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    doctor?: doctorUncheckedUpdateManyWithoutBusinessNestedInput
  }

  export type patientUpsertWithoutConversationsInput = {
    update: XOR<patientUpdateWithoutConversationsInput, patientUncheckedUpdateWithoutConversationsInput>
    create: XOR<patientCreateWithoutConversationsInput, patientUncheckedCreateWithoutConversationsInput>
    where?: patientWhereInput
  }

  export type patientUpdateToOneWithWhereWithoutConversationsInput = {
    where?: patientWhereInput
    data: XOR<patientUpdateWithoutConversationsInput, patientUncheckedUpdateWithoutConversationsInput>
  }

  export type patientUpdateWithoutConversationsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    id_number?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    appointment?: appointmentUpdateManyWithoutPatientNestedInput
    messages?: messagesUpdateManyWithoutPatientNestedInput
    notes?: notesUpdateManyWithoutPatientNestedInput
    notifications?: notificationsUpdateManyWithoutPatientNestedInput
  }

  export type patientUncheckedUpdateWithoutConversationsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    id_number?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    appointment?: appointmentUncheckedUpdateManyWithoutPatientNestedInput
    messages?: messagesUncheckedUpdateManyWithoutPatientNestedInput
    notes?: notesUncheckedUpdateManyWithoutPatientNestedInput
    notifications?: notificationsUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type messagesUpsertWithWhereUniqueWithoutConversationsInput = {
    where: messagesWhereUniqueInput
    update: XOR<messagesUpdateWithoutConversationsInput, messagesUncheckedUpdateWithoutConversationsInput>
    create: XOR<messagesCreateWithoutConversationsInput, messagesUncheckedCreateWithoutConversationsInput>
  }

  export type messagesUpdateWithWhereUniqueWithoutConversationsInput = {
    where: messagesWhereUniqueInput
    data: XOR<messagesUpdateWithoutConversationsInput, messagesUncheckedUpdateWithoutConversationsInput>
  }

  export type messagesUpdateManyWithWhereWithoutConversationsInput = {
    where: messagesScalarWhereInput
    data: XOR<messagesUpdateManyMutationInput, messagesUncheckedUpdateManyWithoutConversationsInput>
  }

  export type messagesScalarWhereInput = {
    AND?: messagesScalarWhereInput | messagesScalarWhereInput[]
    OR?: messagesScalarWhereInput[]
    NOT?: messagesScalarWhereInput | messagesScalarWhereInput[]
    id?: BigIntFilter<"messages"> | bigint | number
    content?: StringFilter<"messages"> | string
    date?: DateTimeNullableFilter<"messages"> | Date | string | null
    patient_id?: BigIntNullableFilter<"messages"> | bigint | number | null
    conversation_id?: BigIntNullableFilter<"messages"> | bigint | number | null
    type?: StringNullableFilter<"messages"> | string | null
    wss_number?: StringNullableFilter<"messages"> | string | null
    created_at?: DateTimeNullableFilter<"messages"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"messages"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"messages"> | Date | string | null
  }

  export type appointmentCreateWithoutDoctorInput = {
    id?: bigint | number
    date: Date | string
    ailment: string
    area?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    patient?: patientCreateNestedOneWithoutAppointmentInput
    payment_method?: payment_methodCreateNestedOneWithoutAppointmentInput
    appointment_states?: appointment_statesCreateNestedOneWithoutAppointmentInput
  }

  export type appointmentUncheckedCreateWithoutDoctorInput = {
    id?: bigint | number
    patient_id?: bigint | number | null
    date: Date | string
    ailment: string
    area?: string | null
    payment_method_id?: bigint | number | null
    state_id?: bigint | number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type appointmentCreateOrConnectWithoutDoctorInput = {
    where: appointmentWhereUniqueInput
    create: XOR<appointmentCreateWithoutDoctorInput, appointmentUncheckedCreateWithoutDoctorInput>
  }

  export type appointmentCreateManyDoctorInputEnvelope = {
    data: appointmentCreateManyDoctorInput | appointmentCreateManyDoctorInput[]
    skipDuplicates?: boolean
  }

  export type businessCreateWithoutDoctorInput = {
    id?: bigint | number
    name: string
    address: string
    hours: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    conversations?: conversationsCreateNestedManyWithoutBusinessInput
  }

  export type businessUncheckedCreateWithoutDoctorInput = {
    id?: bigint | number
    name: string
    address: string
    hours: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    conversations?: conversationsUncheckedCreateNestedManyWithoutBusinessInput
  }

  export type businessCreateOrConnectWithoutDoctorInput = {
    where: businessWhereUniqueInput
    create: XOR<businessCreateWithoutDoctorInput, businessUncheckedCreateWithoutDoctorInput>
  }

  export type notesCreateWithoutDoctorInput = {
    id?: bigint | number
    content: string
    date?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    patient?: patientCreateNestedOneWithoutNotesInput
  }

  export type notesUncheckedCreateWithoutDoctorInput = {
    id?: bigint | number
    patient_id?: bigint | number | null
    content: string
    date?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type notesCreateOrConnectWithoutDoctorInput = {
    where: notesWhereUniqueInput
    create: XOR<notesCreateWithoutDoctorInput, notesUncheckedCreateWithoutDoctorInput>
  }

  export type notesCreateManyDoctorInputEnvelope = {
    data: notesCreateManyDoctorInput | notesCreateManyDoctorInput[]
    skipDuplicates?: boolean
  }

  export type notificationsCreateWithoutDoctorInput = {
    id?: bigint | number
    message: string
    title?: string | null
    description?: string | null
    link?: string | null
    external_id?: string | null
    seen?: boolean | null
    seen_time?: Date | string | null
    date?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    patient?: patientCreateNestedOneWithoutNotificationsInput
  }

  export type notificationsUncheckedCreateWithoutDoctorInput = {
    id?: bigint | number
    patient_id?: bigint | number | null
    message: string
    title?: string | null
    description?: string | null
    link?: string | null
    external_id?: string | null
    seen?: boolean | null
    seen_time?: Date | string | null
    date?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type notificationsCreateOrConnectWithoutDoctorInput = {
    where: notificationsWhereUniqueInput
    create: XOR<notificationsCreateWithoutDoctorInput, notificationsUncheckedCreateWithoutDoctorInput>
  }

  export type notificationsCreateManyDoctorInputEnvelope = {
    data: notificationsCreateManyDoctorInput | notificationsCreateManyDoctorInput[]
    skipDuplicates?: boolean
  }

  export type appointmentUpsertWithWhereUniqueWithoutDoctorInput = {
    where: appointmentWhereUniqueInput
    update: XOR<appointmentUpdateWithoutDoctorInput, appointmentUncheckedUpdateWithoutDoctorInput>
    create: XOR<appointmentCreateWithoutDoctorInput, appointmentUncheckedCreateWithoutDoctorInput>
  }

  export type appointmentUpdateWithWhereUniqueWithoutDoctorInput = {
    where: appointmentWhereUniqueInput
    data: XOR<appointmentUpdateWithoutDoctorInput, appointmentUncheckedUpdateWithoutDoctorInput>
  }

  export type appointmentUpdateManyWithWhereWithoutDoctorInput = {
    where: appointmentScalarWhereInput
    data: XOR<appointmentUpdateManyMutationInput, appointmentUncheckedUpdateManyWithoutDoctorInput>
  }

  export type businessUpsertWithoutDoctorInput = {
    update: XOR<businessUpdateWithoutDoctorInput, businessUncheckedUpdateWithoutDoctorInput>
    create: XOR<businessCreateWithoutDoctorInput, businessUncheckedCreateWithoutDoctorInput>
    where?: businessWhereInput
  }

  export type businessUpdateToOneWithWhereWithoutDoctorInput = {
    where?: businessWhereInput
    data: XOR<businessUpdateWithoutDoctorInput, businessUncheckedUpdateWithoutDoctorInput>
  }

  export type businessUpdateWithoutDoctorInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    hours?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    conversations?: conversationsUpdateManyWithoutBusinessNestedInput
  }

  export type businessUncheckedUpdateWithoutDoctorInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    hours?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    conversations?: conversationsUncheckedUpdateManyWithoutBusinessNestedInput
  }

  export type notesUpsertWithWhereUniqueWithoutDoctorInput = {
    where: notesWhereUniqueInput
    update: XOR<notesUpdateWithoutDoctorInput, notesUncheckedUpdateWithoutDoctorInput>
    create: XOR<notesCreateWithoutDoctorInput, notesUncheckedCreateWithoutDoctorInput>
  }

  export type notesUpdateWithWhereUniqueWithoutDoctorInput = {
    where: notesWhereUniqueInput
    data: XOR<notesUpdateWithoutDoctorInput, notesUncheckedUpdateWithoutDoctorInput>
  }

  export type notesUpdateManyWithWhereWithoutDoctorInput = {
    where: notesScalarWhereInput
    data: XOR<notesUpdateManyMutationInput, notesUncheckedUpdateManyWithoutDoctorInput>
  }

  export type notesScalarWhereInput = {
    AND?: notesScalarWhereInput | notesScalarWhereInput[]
    OR?: notesScalarWhereInput[]
    NOT?: notesScalarWhereInput | notesScalarWhereInput[]
    id?: BigIntFilter<"notes"> | bigint | number
    doctor_id?: BigIntNullableFilter<"notes"> | bigint | number | null
    patient_id?: BigIntNullableFilter<"notes"> | bigint | number | null
    content?: StringFilter<"notes"> | string
    date?: DateTimeNullableFilter<"notes"> | Date | string | null
    created_at?: DateTimeNullableFilter<"notes"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"notes"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"notes"> | Date | string | null
  }

  export type notificationsUpsertWithWhereUniqueWithoutDoctorInput = {
    where: notificationsWhereUniqueInput
    update: XOR<notificationsUpdateWithoutDoctorInput, notificationsUncheckedUpdateWithoutDoctorInput>
    create: XOR<notificationsCreateWithoutDoctorInput, notificationsUncheckedCreateWithoutDoctorInput>
  }

  export type notificationsUpdateWithWhereUniqueWithoutDoctorInput = {
    where: notificationsWhereUniqueInput
    data: XOR<notificationsUpdateWithoutDoctorInput, notificationsUncheckedUpdateWithoutDoctorInput>
  }

  export type notificationsUpdateManyWithWhereWithoutDoctorInput = {
    where: notificationsScalarWhereInput
    data: XOR<notificationsUpdateManyMutationInput, notificationsUncheckedUpdateManyWithoutDoctorInput>
  }

  export type notificationsScalarWhereInput = {
    AND?: notificationsScalarWhereInput | notificationsScalarWhereInput[]
    OR?: notificationsScalarWhereInput[]
    NOT?: notificationsScalarWhereInput | notificationsScalarWhereInput[]
    id?: BigIntFilter<"notifications"> | bigint | number
    patient_id?: BigIntNullableFilter<"notifications"> | bigint | number | null
    doctor_id?: BigIntNullableFilter<"notifications"> | bigint | number | null
    message?: StringFilter<"notifications"> | string
    title?: StringNullableFilter<"notifications"> | string | null
    description?: StringNullableFilter<"notifications"> | string | null
    link?: StringNullableFilter<"notifications"> | string | null
    external_id?: StringNullableFilter<"notifications"> | string | null
    seen?: BoolNullableFilter<"notifications"> | boolean | null
    seen_time?: DateTimeNullableFilter<"notifications"> | Date | string | null
    date?: DateTimeNullableFilter<"notifications"> | Date | string | null
    created_at?: DateTimeNullableFilter<"notifications"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"notifications"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"notifications"> | Date | string | null
  }

  export type conversationsCreateWithoutMessagesInput = {
    id?: bigint | number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    business?: businessCreateNestedOneWithoutConversationsInput
    patient?: patientCreateNestedOneWithoutConversationsInput
  }

  export type conversationsUncheckedCreateWithoutMessagesInput = {
    id?: bigint | number
    patient_id?: bigint | number | null
    business_id?: bigint | number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type conversationsCreateOrConnectWithoutMessagesInput = {
    where: conversationsWhereUniqueInput
    create: XOR<conversationsCreateWithoutMessagesInput, conversationsUncheckedCreateWithoutMessagesInput>
  }

  export type patientCreateWithoutMessagesInput = {
    id?: bigint | number
    id_number: string
    age: number
    name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    appointment?: appointmentCreateNestedManyWithoutPatientInput
    conversations?: conversationsCreateNestedManyWithoutPatientInput
    notes?: notesCreateNestedManyWithoutPatientInput
    notifications?: notificationsCreateNestedManyWithoutPatientInput
  }

  export type patientUncheckedCreateWithoutMessagesInput = {
    id?: bigint | number
    id_number: string
    age: number
    name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    appointment?: appointmentUncheckedCreateNestedManyWithoutPatientInput
    conversations?: conversationsUncheckedCreateNestedManyWithoutPatientInput
    notes?: notesUncheckedCreateNestedManyWithoutPatientInput
    notifications?: notificationsUncheckedCreateNestedManyWithoutPatientInput
  }

  export type patientCreateOrConnectWithoutMessagesInput = {
    where: patientWhereUniqueInput
    create: XOR<patientCreateWithoutMessagesInput, patientUncheckedCreateWithoutMessagesInput>
  }

  export type conversationsUpsertWithoutMessagesInput = {
    update: XOR<conversationsUpdateWithoutMessagesInput, conversationsUncheckedUpdateWithoutMessagesInput>
    create: XOR<conversationsCreateWithoutMessagesInput, conversationsUncheckedCreateWithoutMessagesInput>
    where?: conversationsWhereInput
  }

  export type conversationsUpdateToOneWithWhereWithoutMessagesInput = {
    where?: conversationsWhereInput
    data: XOR<conversationsUpdateWithoutMessagesInput, conversationsUncheckedUpdateWithoutMessagesInput>
  }

  export type conversationsUpdateWithoutMessagesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    business?: businessUpdateOneWithoutConversationsNestedInput
    patient?: patientUpdateOneWithoutConversationsNestedInput
  }

  export type conversationsUncheckedUpdateWithoutMessagesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    patient_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    business_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type patientUpsertWithoutMessagesInput = {
    update: XOR<patientUpdateWithoutMessagesInput, patientUncheckedUpdateWithoutMessagesInput>
    create: XOR<patientCreateWithoutMessagesInput, patientUncheckedCreateWithoutMessagesInput>
    where?: patientWhereInput
  }

  export type patientUpdateToOneWithWhereWithoutMessagesInput = {
    where?: patientWhereInput
    data: XOR<patientUpdateWithoutMessagesInput, patientUncheckedUpdateWithoutMessagesInput>
  }

  export type patientUpdateWithoutMessagesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    id_number?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    appointment?: appointmentUpdateManyWithoutPatientNestedInput
    conversations?: conversationsUpdateManyWithoutPatientNestedInput
    notes?: notesUpdateManyWithoutPatientNestedInput
    notifications?: notificationsUpdateManyWithoutPatientNestedInput
  }

  export type patientUncheckedUpdateWithoutMessagesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    id_number?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    appointment?: appointmentUncheckedUpdateManyWithoutPatientNestedInput
    conversations?: conversationsUncheckedUpdateManyWithoutPatientNestedInput
    notes?: notesUncheckedUpdateManyWithoutPatientNestedInput
    notifications?: notificationsUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type doctorCreateWithoutNotesInput = {
    id?: bigint | number
    name: string
    specialty: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    appointment?: appointmentCreateNestedManyWithoutDoctorInput
    business?: businessCreateNestedOneWithoutDoctorInput
    notifications?: notificationsCreateNestedManyWithoutDoctorInput
  }

  export type doctorUncheckedCreateWithoutNotesInput = {
    id?: bigint | number
    name: string
    specialty: string
    negocio_id?: bigint | number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    appointment?: appointmentUncheckedCreateNestedManyWithoutDoctorInput
    notifications?: notificationsUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type doctorCreateOrConnectWithoutNotesInput = {
    where: doctorWhereUniqueInput
    create: XOR<doctorCreateWithoutNotesInput, doctorUncheckedCreateWithoutNotesInput>
  }

  export type patientCreateWithoutNotesInput = {
    id?: bigint | number
    id_number: string
    age: number
    name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    appointment?: appointmentCreateNestedManyWithoutPatientInput
    conversations?: conversationsCreateNestedManyWithoutPatientInput
    messages?: messagesCreateNestedManyWithoutPatientInput
    notifications?: notificationsCreateNestedManyWithoutPatientInput
  }

  export type patientUncheckedCreateWithoutNotesInput = {
    id?: bigint | number
    id_number: string
    age: number
    name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    appointment?: appointmentUncheckedCreateNestedManyWithoutPatientInput
    conversations?: conversationsUncheckedCreateNestedManyWithoutPatientInput
    messages?: messagesUncheckedCreateNestedManyWithoutPatientInput
    notifications?: notificationsUncheckedCreateNestedManyWithoutPatientInput
  }

  export type patientCreateOrConnectWithoutNotesInput = {
    where: patientWhereUniqueInput
    create: XOR<patientCreateWithoutNotesInput, patientUncheckedCreateWithoutNotesInput>
  }

  export type doctorUpsertWithoutNotesInput = {
    update: XOR<doctorUpdateWithoutNotesInput, doctorUncheckedUpdateWithoutNotesInput>
    create: XOR<doctorCreateWithoutNotesInput, doctorUncheckedCreateWithoutNotesInput>
    where?: doctorWhereInput
  }

  export type doctorUpdateToOneWithWhereWithoutNotesInput = {
    where?: doctorWhereInput
    data: XOR<doctorUpdateWithoutNotesInput, doctorUncheckedUpdateWithoutNotesInput>
  }

  export type doctorUpdateWithoutNotesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    specialty?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    appointment?: appointmentUpdateManyWithoutDoctorNestedInput
    business?: businessUpdateOneWithoutDoctorNestedInput
    notifications?: notificationsUpdateManyWithoutDoctorNestedInput
  }

  export type doctorUncheckedUpdateWithoutNotesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    specialty?: StringFieldUpdateOperationsInput | string
    negocio_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    appointment?: appointmentUncheckedUpdateManyWithoutDoctorNestedInput
    notifications?: notificationsUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type patientUpsertWithoutNotesInput = {
    update: XOR<patientUpdateWithoutNotesInput, patientUncheckedUpdateWithoutNotesInput>
    create: XOR<patientCreateWithoutNotesInput, patientUncheckedCreateWithoutNotesInput>
    where?: patientWhereInput
  }

  export type patientUpdateToOneWithWhereWithoutNotesInput = {
    where?: patientWhereInput
    data: XOR<patientUpdateWithoutNotesInput, patientUncheckedUpdateWithoutNotesInput>
  }

  export type patientUpdateWithoutNotesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    id_number?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    appointment?: appointmentUpdateManyWithoutPatientNestedInput
    conversations?: conversationsUpdateManyWithoutPatientNestedInput
    messages?: messagesUpdateManyWithoutPatientNestedInput
    notifications?: notificationsUpdateManyWithoutPatientNestedInput
  }

  export type patientUncheckedUpdateWithoutNotesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    id_number?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    appointment?: appointmentUncheckedUpdateManyWithoutPatientNestedInput
    conversations?: conversationsUncheckedUpdateManyWithoutPatientNestedInput
    messages?: messagesUncheckedUpdateManyWithoutPatientNestedInput
    notifications?: notificationsUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type doctorCreateWithoutNotificationsInput = {
    id?: bigint | number
    name: string
    specialty: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    appointment?: appointmentCreateNestedManyWithoutDoctorInput
    business?: businessCreateNestedOneWithoutDoctorInput
    notes?: notesCreateNestedManyWithoutDoctorInput
  }

  export type doctorUncheckedCreateWithoutNotificationsInput = {
    id?: bigint | number
    name: string
    specialty: string
    negocio_id?: bigint | number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    appointment?: appointmentUncheckedCreateNestedManyWithoutDoctorInput
    notes?: notesUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type doctorCreateOrConnectWithoutNotificationsInput = {
    where: doctorWhereUniqueInput
    create: XOR<doctorCreateWithoutNotificationsInput, doctorUncheckedCreateWithoutNotificationsInput>
  }

  export type patientCreateWithoutNotificationsInput = {
    id?: bigint | number
    id_number: string
    age: number
    name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    appointment?: appointmentCreateNestedManyWithoutPatientInput
    conversations?: conversationsCreateNestedManyWithoutPatientInput
    messages?: messagesCreateNestedManyWithoutPatientInput
    notes?: notesCreateNestedManyWithoutPatientInput
  }

  export type patientUncheckedCreateWithoutNotificationsInput = {
    id?: bigint | number
    id_number: string
    age: number
    name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    appointment?: appointmentUncheckedCreateNestedManyWithoutPatientInput
    conversations?: conversationsUncheckedCreateNestedManyWithoutPatientInput
    messages?: messagesUncheckedCreateNestedManyWithoutPatientInput
    notes?: notesUncheckedCreateNestedManyWithoutPatientInput
  }

  export type patientCreateOrConnectWithoutNotificationsInput = {
    where: patientWhereUniqueInput
    create: XOR<patientCreateWithoutNotificationsInput, patientUncheckedCreateWithoutNotificationsInput>
  }

  export type doctorUpsertWithoutNotificationsInput = {
    update: XOR<doctorUpdateWithoutNotificationsInput, doctorUncheckedUpdateWithoutNotificationsInput>
    create: XOR<doctorCreateWithoutNotificationsInput, doctorUncheckedCreateWithoutNotificationsInput>
    where?: doctorWhereInput
  }

  export type doctorUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: doctorWhereInput
    data: XOR<doctorUpdateWithoutNotificationsInput, doctorUncheckedUpdateWithoutNotificationsInput>
  }

  export type doctorUpdateWithoutNotificationsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    specialty?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    appointment?: appointmentUpdateManyWithoutDoctorNestedInput
    business?: businessUpdateOneWithoutDoctorNestedInput
    notes?: notesUpdateManyWithoutDoctorNestedInput
  }

  export type doctorUncheckedUpdateWithoutNotificationsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    specialty?: StringFieldUpdateOperationsInput | string
    negocio_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    appointment?: appointmentUncheckedUpdateManyWithoutDoctorNestedInput
    notes?: notesUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type patientUpsertWithoutNotificationsInput = {
    update: XOR<patientUpdateWithoutNotificationsInput, patientUncheckedUpdateWithoutNotificationsInput>
    create: XOR<patientCreateWithoutNotificationsInput, patientUncheckedCreateWithoutNotificationsInput>
    where?: patientWhereInput
  }

  export type patientUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: patientWhereInput
    data: XOR<patientUpdateWithoutNotificationsInput, patientUncheckedUpdateWithoutNotificationsInput>
  }

  export type patientUpdateWithoutNotificationsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    id_number?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    appointment?: appointmentUpdateManyWithoutPatientNestedInput
    conversations?: conversationsUpdateManyWithoutPatientNestedInput
    messages?: messagesUpdateManyWithoutPatientNestedInput
    notes?: notesUpdateManyWithoutPatientNestedInput
  }

  export type patientUncheckedUpdateWithoutNotificationsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    id_number?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    appointment?: appointmentUncheckedUpdateManyWithoutPatientNestedInput
    conversations?: conversationsUncheckedUpdateManyWithoutPatientNestedInput
    messages?: messagesUncheckedUpdateManyWithoutPatientNestedInput
    notes?: notesUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type appointmentCreateWithoutPatientInput = {
    id?: bigint | number
    date: Date | string
    ailment: string
    area?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    doctor?: doctorCreateNestedOneWithoutAppointmentInput
    payment_method?: payment_methodCreateNestedOneWithoutAppointmentInput
    appointment_states?: appointment_statesCreateNestedOneWithoutAppointmentInput
  }

  export type appointmentUncheckedCreateWithoutPatientInput = {
    id?: bigint | number
    doctor_id?: bigint | number | null
    date: Date | string
    ailment: string
    area?: string | null
    payment_method_id?: bigint | number | null
    state_id?: bigint | number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type appointmentCreateOrConnectWithoutPatientInput = {
    where: appointmentWhereUniqueInput
    create: XOR<appointmentCreateWithoutPatientInput, appointmentUncheckedCreateWithoutPatientInput>
  }

  export type appointmentCreateManyPatientInputEnvelope = {
    data: appointmentCreateManyPatientInput | appointmentCreateManyPatientInput[]
    skipDuplicates?: boolean
  }

  export type conversationsCreateWithoutPatientInput = {
    id?: bigint | number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    business?: businessCreateNestedOneWithoutConversationsInput
    messages?: messagesCreateNestedManyWithoutConversationsInput
  }

  export type conversationsUncheckedCreateWithoutPatientInput = {
    id?: bigint | number
    business_id?: bigint | number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    messages?: messagesUncheckedCreateNestedManyWithoutConversationsInput
  }

  export type conversationsCreateOrConnectWithoutPatientInput = {
    where: conversationsWhereUniqueInput
    create: XOR<conversationsCreateWithoutPatientInput, conversationsUncheckedCreateWithoutPatientInput>
  }

  export type conversationsCreateManyPatientInputEnvelope = {
    data: conversationsCreateManyPatientInput | conversationsCreateManyPatientInput[]
    skipDuplicates?: boolean
  }

  export type messagesCreateWithoutPatientInput = {
    id?: bigint | number
    content: string
    date?: Date | string | null
    type?: string | null
    wss_number?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    conversations?: conversationsCreateNestedOneWithoutMessagesInput
  }

  export type messagesUncheckedCreateWithoutPatientInput = {
    id?: bigint | number
    content: string
    date?: Date | string | null
    conversation_id?: bigint | number | null
    type?: string | null
    wss_number?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type messagesCreateOrConnectWithoutPatientInput = {
    where: messagesWhereUniqueInput
    create: XOR<messagesCreateWithoutPatientInput, messagesUncheckedCreateWithoutPatientInput>
  }

  export type messagesCreateManyPatientInputEnvelope = {
    data: messagesCreateManyPatientInput | messagesCreateManyPatientInput[]
    skipDuplicates?: boolean
  }

  export type notesCreateWithoutPatientInput = {
    id?: bigint | number
    content: string
    date?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    doctor?: doctorCreateNestedOneWithoutNotesInput
  }

  export type notesUncheckedCreateWithoutPatientInput = {
    id?: bigint | number
    doctor_id?: bigint | number | null
    content: string
    date?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type notesCreateOrConnectWithoutPatientInput = {
    where: notesWhereUniqueInput
    create: XOR<notesCreateWithoutPatientInput, notesUncheckedCreateWithoutPatientInput>
  }

  export type notesCreateManyPatientInputEnvelope = {
    data: notesCreateManyPatientInput | notesCreateManyPatientInput[]
    skipDuplicates?: boolean
  }

  export type notificationsCreateWithoutPatientInput = {
    id?: bigint | number
    message: string
    title?: string | null
    description?: string | null
    link?: string | null
    external_id?: string | null
    seen?: boolean | null
    seen_time?: Date | string | null
    date?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    doctor?: doctorCreateNestedOneWithoutNotificationsInput
  }

  export type notificationsUncheckedCreateWithoutPatientInput = {
    id?: bigint | number
    doctor_id?: bigint | number | null
    message: string
    title?: string | null
    description?: string | null
    link?: string | null
    external_id?: string | null
    seen?: boolean | null
    seen_time?: Date | string | null
    date?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type notificationsCreateOrConnectWithoutPatientInput = {
    where: notificationsWhereUniqueInput
    create: XOR<notificationsCreateWithoutPatientInput, notificationsUncheckedCreateWithoutPatientInput>
  }

  export type notificationsCreateManyPatientInputEnvelope = {
    data: notificationsCreateManyPatientInput | notificationsCreateManyPatientInput[]
    skipDuplicates?: boolean
  }

  export type appointmentUpsertWithWhereUniqueWithoutPatientInput = {
    where: appointmentWhereUniqueInput
    update: XOR<appointmentUpdateWithoutPatientInput, appointmentUncheckedUpdateWithoutPatientInput>
    create: XOR<appointmentCreateWithoutPatientInput, appointmentUncheckedCreateWithoutPatientInput>
  }

  export type appointmentUpdateWithWhereUniqueWithoutPatientInput = {
    where: appointmentWhereUniqueInput
    data: XOR<appointmentUpdateWithoutPatientInput, appointmentUncheckedUpdateWithoutPatientInput>
  }

  export type appointmentUpdateManyWithWhereWithoutPatientInput = {
    where: appointmentScalarWhereInput
    data: XOR<appointmentUpdateManyMutationInput, appointmentUncheckedUpdateManyWithoutPatientInput>
  }

  export type conversationsUpsertWithWhereUniqueWithoutPatientInput = {
    where: conversationsWhereUniqueInput
    update: XOR<conversationsUpdateWithoutPatientInput, conversationsUncheckedUpdateWithoutPatientInput>
    create: XOR<conversationsCreateWithoutPatientInput, conversationsUncheckedCreateWithoutPatientInput>
  }

  export type conversationsUpdateWithWhereUniqueWithoutPatientInput = {
    where: conversationsWhereUniqueInput
    data: XOR<conversationsUpdateWithoutPatientInput, conversationsUncheckedUpdateWithoutPatientInput>
  }

  export type conversationsUpdateManyWithWhereWithoutPatientInput = {
    where: conversationsScalarWhereInput
    data: XOR<conversationsUpdateManyMutationInput, conversationsUncheckedUpdateManyWithoutPatientInput>
  }

  export type messagesUpsertWithWhereUniqueWithoutPatientInput = {
    where: messagesWhereUniqueInput
    update: XOR<messagesUpdateWithoutPatientInput, messagesUncheckedUpdateWithoutPatientInput>
    create: XOR<messagesCreateWithoutPatientInput, messagesUncheckedCreateWithoutPatientInput>
  }

  export type messagesUpdateWithWhereUniqueWithoutPatientInput = {
    where: messagesWhereUniqueInput
    data: XOR<messagesUpdateWithoutPatientInput, messagesUncheckedUpdateWithoutPatientInput>
  }

  export type messagesUpdateManyWithWhereWithoutPatientInput = {
    where: messagesScalarWhereInput
    data: XOR<messagesUpdateManyMutationInput, messagesUncheckedUpdateManyWithoutPatientInput>
  }

  export type notesUpsertWithWhereUniqueWithoutPatientInput = {
    where: notesWhereUniqueInput
    update: XOR<notesUpdateWithoutPatientInput, notesUncheckedUpdateWithoutPatientInput>
    create: XOR<notesCreateWithoutPatientInput, notesUncheckedCreateWithoutPatientInput>
  }

  export type notesUpdateWithWhereUniqueWithoutPatientInput = {
    where: notesWhereUniqueInput
    data: XOR<notesUpdateWithoutPatientInput, notesUncheckedUpdateWithoutPatientInput>
  }

  export type notesUpdateManyWithWhereWithoutPatientInput = {
    where: notesScalarWhereInput
    data: XOR<notesUpdateManyMutationInput, notesUncheckedUpdateManyWithoutPatientInput>
  }

  export type notificationsUpsertWithWhereUniqueWithoutPatientInput = {
    where: notificationsWhereUniqueInput
    update: XOR<notificationsUpdateWithoutPatientInput, notificationsUncheckedUpdateWithoutPatientInput>
    create: XOR<notificationsCreateWithoutPatientInput, notificationsUncheckedCreateWithoutPatientInput>
  }

  export type notificationsUpdateWithWhereUniqueWithoutPatientInput = {
    where: notificationsWhereUniqueInput
    data: XOR<notificationsUpdateWithoutPatientInput, notificationsUncheckedUpdateWithoutPatientInput>
  }

  export type notificationsUpdateManyWithWhereWithoutPatientInput = {
    where: notificationsScalarWhereInput
    data: XOR<notificationsUpdateManyMutationInput, notificationsUncheckedUpdateManyWithoutPatientInput>
  }

  export type appointmentCreateWithoutPayment_methodInput = {
    id?: bigint | number
    date: Date | string
    ailment: string
    area?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    doctor?: doctorCreateNestedOneWithoutAppointmentInput
    patient?: patientCreateNestedOneWithoutAppointmentInput
    appointment_states?: appointment_statesCreateNestedOneWithoutAppointmentInput
  }

  export type appointmentUncheckedCreateWithoutPayment_methodInput = {
    id?: bigint | number
    patient_id?: bigint | number | null
    doctor_id?: bigint | number | null
    date: Date | string
    ailment: string
    area?: string | null
    state_id?: bigint | number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type appointmentCreateOrConnectWithoutPayment_methodInput = {
    where: appointmentWhereUniqueInput
    create: XOR<appointmentCreateWithoutPayment_methodInput, appointmentUncheckedCreateWithoutPayment_methodInput>
  }

  export type appointmentCreateManyPayment_methodInputEnvelope = {
    data: appointmentCreateManyPayment_methodInput | appointmentCreateManyPayment_methodInput[]
    skipDuplicates?: boolean
  }

  export type appointmentUpsertWithWhereUniqueWithoutPayment_methodInput = {
    where: appointmentWhereUniqueInput
    update: XOR<appointmentUpdateWithoutPayment_methodInput, appointmentUncheckedUpdateWithoutPayment_methodInput>
    create: XOR<appointmentCreateWithoutPayment_methodInput, appointmentUncheckedCreateWithoutPayment_methodInput>
  }

  export type appointmentUpdateWithWhereUniqueWithoutPayment_methodInput = {
    where: appointmentWhereUniqueInput
    data: XOR<appointmentUpdateWithoutPayment_methodInput, appointmentUncheckedUpdateWithoutPayment_methodInput>
  }

  export type appointmentUpdateManyWithWhereWithoutPayment_methodInput = {
    where: appointmentScalarWhereInput
    data: XOR<appointmentUpdateManyMutationInput, appointmentUncheckedUpdateManyWithoutPayment_methodInput>
  }

  export type appointmentCreateManyAppointment_statesInput = {
    id?: bigint | number
    patient_id?: bigint | number | null
    doctor_id?: bigint | number | null
    date: Date | string
    ailment: string
    area?: string | null
    payment_method_id?: bigint | number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type appointmentUpdateWithoutAppointment_statesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    ailment?: StringFieldUpdateOperationsInput | string
    area?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    doctor?: doctorUpdateOneWithoutAppointmentNestedInput
    patient?: patientUpdateOneWithoutAppointmentNestedInput
    payment_method?: payment_methodUpdateOneWithoutAppointmentNestedInput
  }

  export type appointmentUncheckedUpdateWithoutAppointment_statesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    patient_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    doctor_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    ailment?: StringFieldUpdateOperationsInput | string
    area?: NullableStringFieldUpdateOperationsInput | string | null
    payment_method_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type appointmentUncheckedUpdateManyWithoutAppointment_statesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    patient_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    doctor_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    ailment?: StringFieldUpdateOperationsInput | string
    area?: NullableStringFieldUpdateOperationsInput | string | null
    payment_method_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type conversationsCreateManyBusinessInput = {
    id?: bigint | number
    patient_id?: bigint | number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type doctorCreateManyBusinessInput = {
    id?: bigint | number
    name: string
    specialty: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type conversationsUpdateWithoutBusinessInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    patient?: patientUpdateOneWithoutConversationsNestedInput
    messages?: messagesUpdateManyWithoutConversationsNestedInput
  }

  export type conversationsUncheckedUpdateWithoutBusinessInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    patient_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    messages?: messagesUncheckedUpdateManyWithoutConversationsNestedInput
  }

  export type conversationsUncheckedUpdateManyWithoutBusinessInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    patient_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type doctorUpdateWithoutBusinessInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    specialty?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    appointment?: appointmentUpdateManyWithoutDoctorNestedInput
    notes?: notesUpdateManyWithoutDoctorNestedInput
    notifications?: notificationsUpdateManyWithoutDoctorNestedInput
  }

  export type doctorUncheckedUpdateWithoutBusinessInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    specialty?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    appointment?: appointmentUncheckedUpdateManyWithoutDoctorNestedInput
    notes?: notesUncheckedUpdateManyWithoutDoctorNestedInput
    notifications?: notificationsUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type doctorUncheckedUpdateManyWithoutBusinessInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    specialty?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type messagesCreateManyConversationsInput = {
    id?: bigint | number
    content: string
    date?: Date | string | null
    patient_id?: bigint | number | null
    type?: string | null
    wss_number?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type messagesUpdateWithoutConversationsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    content?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    wss_number?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    patient?: patientUpdateOneWithoutMessagesNestedInput
  }

  export type messagesUncheckedUpdateWithoutConversationsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    content?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    patient_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    wss_number?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type messagesUncheckedUpdateManyWithoutConversationsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    content?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    patient_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    wss_number?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type appointmentCreateManyDoctorInput = {
    id?: bigint | number
    patient_id?: bigint | number | null
    date: Date | string
    ailment: string
    area?: string | null
    payment_method_id?: bigint | number | null
    state_id?: bigint | number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type notesCreateManyDoctorInput = {
    id?: bigint | number
    patient_id?: bigint | number | null
    content: string
    date?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type notificationsCreateManyDoctorInput = {
    id?: bigint | number
    patient_id?: bigint | number | null
    message: string
    title?: string | null
    description?: string | null
    link?: string | null
    external_id?: string | null
    seen?: boolean | null
    seen_time?: Date | string | null
    date?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type appointmentUpdateWithoutDoctorInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    ailment?: StringFieldUpdateOperationsInput | string
    area?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    patient?: patientUpdateOneWithoutAppointmentNestedInput
    payment_method?: payment_methodUpdateOneWithoutAppointmentNestedInput
    appointment_states?: appointment_statesUpdateOneWithoutAppointmentNestedInput
  }

  export type appointmentUncheckedUpdateWithoutDoctorInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    patient_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    ailment?: StringFieldUpdateOperationsInput | string
    area?: NullableStringFieldUpdateOperationsInput | string | null
    payment_method_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    state_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type appointmentUncheckedUpdateManyWithoutDoctorInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    patient_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    ailment?: StringFieldUpdateOperationsInput | string
    area?: NullableStringFieldUpdateOperationsInput | string | null
    payment_method_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    state_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type notesUpdateWithoutDoctorInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    content?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    patient?: patientUpdateOneWithoutNotesNestedInput
  }

  export type notesUncheckedUpdateWithoutDoctorInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    patient_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    content?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type notesUncheckedUpdateManyWithoutDoctorInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    patient_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    content?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type notificationsUpdateWithoutDoctorInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    message?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    external_id?: NullableStringFieldUpdateOperationsInput | string | null
    seen?: NullableBoolFieldUpdateOperationsInput | boolean | null
    seen_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    patient?: patientUpdateOneWithoutNotificationsNestedInput
  }

  export type notificationsUncheckedUpdateWithoutDoctorInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    patient_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    message?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    external_id?: NullableStringFieldUpdateOperationsInput | string | null
    seen?: NullableBoolFieldUpdateOperationsInput | boolean | null
    seen_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type notificationsUncheckedUpdateManyWithoutDoctorInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    patient_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    message?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    external_id?: NullableStringFieldUpdateOperationsInput | string | null
    seen?: NullableBoolFieldUpdateOperationsInput | boolean | null
    seen_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type appointmentCreateManyPatientInput = {
    id?: bigint | number
    doctor_id?: bigint | number | null
    date: Date | string
    ailment: string
    area?: string | null
    payment_method_id?: bigint | number | null
    state_id?: bigint | number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type conversationsCreateManyPatientInput = {
    id?: bigint | number
    business_id?: bigint | number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type messagesCreateManyPatientInput = {
    id?: bigint | number
    content: string
    date?: Date | string | null
    conversation_id?: bigint | number | null
    type?: string | null
    wss_number?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type notesCreateManyPatientInput = {
    id?: bigint | number
    doctor_id?: bigint | number | null
    content: string
    date?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type notificationsCreateManyPatientInput = {
    id?: bigint | number
    doctor_id?: bigint | number | null
    message: string
    title?: string | null
    description?: string | null
    link?: string | null
    external_id?: string | null
    seen?: boolean | null
    seen_time?: Date | string | null
    date?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type appointmentUpdateWithoutPatientInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    ailment?: StringFieldUpdateOperationsInput | string
    area?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    doctor?: doctorUpdateOneWithoutAppointmentNestedInput
    payment_method?: payment_methodUpdateOneWithoutAppointmentNestedInput
    appointment_states?: appointment_statesUpdateOneWithoutAppointmentNestedInput
  }

  export type appointmentUncheckedUpdateWithoutPatientInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    doctor_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    ailment?: StringFieldUpdateOperationsInput | string
    area?: NullableStringFieldUpdateOperationsInput | string | null
    payment_method_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    state_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type appointmentUncheckedUpdateManyWithoutPatientInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    doctor_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    ailment?: StringFieldUpdateOperationsInput | string
    area?: NullableStringFieldUpdateOperationsInput | string | null
    payment_method_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    state_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type conversationsUpdateWithoutPatientInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    business?: businessUpdateOneWithoutConversationsNestedInput
    messages?: messagesUpdateManyWithoutConversationsNestedInput
  }

  export type conversationsUncheckedUpdateWithoutPatientInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    business_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    messages?: messagesUncheckedUpdateManyWithoutConversationsNestedInput
  }

  export type conversationsUncheckedUpdateManyWithoutPatientInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    business_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type messagesUpdateWithoutPatientInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    content?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    wss_number?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    conversations?: conversationsUpdateOneWithoutMessagesNestedInput
  }

  export type messagesUncheckedUpdateWithoutPatientInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    content?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    conversation_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    wss_number?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type messagesUncheckedUpdateManyWithoutPatientInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    content?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    conversation_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    wss_number?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type notesUpdateWithoutPatientInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    content?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    doctor?: doctorUpdateOneWithoutNotesNestedInput
  }

  export type notesUncheckedUpdateWithoutPatientInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    doctor_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    content?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type notesUncheckedUpdateManyWithoutPatientInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    doctor_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    content?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type notificationsUpdateWithoutPatientInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    message?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    external_id?: NullableStringFieldUpdateOperationsInput | string | null
    seen?: NullableBoolFieldUpdateOperationsInput | boolean | null
    seen_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    doctor?: doctorUpdateOneWithoutNotificationsNestedInput
  }

  export type notificationsUncheckedUpdateWithoutPatientInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    doctor_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    message?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    external_id?: NullableStringFieldUpdateOperationsInput | string | null
    seen?: NullableBoolFieldUpdateOperationsInput | boolean | null
    seen_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type notificationsUncheckedUpdateManyWithoutPatientInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    doctor_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    message?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    external_id?: NullableStringFieldUpdateOperationsInput | string | null
    seen?: NullableBoolFieldUpdateOperationsInput | boolean | null
    seen_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type appointmentCreateManyPayment_methodInput = {
    id?: bigint | number
    patient_id?: bigint | number | null
    doctor_id?: bigint | number | null
    date: Date | string
    ailment: string
    area?: string | null
    state_id?: bigint | number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type appointmentUpdateWithoutPayment_methodInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    ailment?: StringFieldUpdateOperationsInput | string
    area?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    doctor?: doctorUpdateOneWithoutAppointmentNestedInput
    patient?: patientUpdateOneWithoutAppointmentNestedInput
    appointment_states?: appointment_statesUpdateOneWithoutAppointmentNestedInput
  }

  export type appointmentUncheckedUpdateWithoutPayment_methodInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    patient_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    doctor_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    ailment?: StringFieldUpdateOperationsInput | string
    area?: NullableStringFieldUpdateOperationsInput | string | null
    state_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type appointmentUncheckedUpdateManyWithoutPayment_methodInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    patient_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    doctor_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    ailment?: StringFieldUpdateOperationsInput | string
    area?: NullableStringFieldUpdateOperationsInput | string | null
    state_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}