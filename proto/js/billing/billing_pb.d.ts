// package: nocloud.billing
// file: billing/billing.proto

import * as jspb from "google-protobuf";
import * as states_states_pb from "../states/states_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as google_api_annotations_pb from "../google/api/annotations_pb";

export class FeeRange extends jspb.Message {
  getFrom(): number;
  setFrom(value: number): void;

  getTo(): number;
  setTo(value: number): void;

  getFactor(): number;
  setFactor(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeeRange.AsObject;
  static toObject(includeInstance: boolean, msg: FeeRange): FeeRange.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FeeRange, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeeRange;
  static deserializeBinaryFromReader(message: FeeRange, reader: jspb.BinaryReader): FeeRange;
}

export namespace FeeRange {
  export type AsObject = {
    from: number,
    to: number,
    factor: number,
  }
}

export class Fee extends jspb.Message {
  getPrecision(): number;
  setPrecision(value: number): void;

  getRound(): RoundMap[keyof RoundMap];
  setRound(value: RoundMap[keyof RoundMap]): void;

  getDefault(): number;
  setDefault(value: number): void;

  clearRangesList(): void;
  getRangesList(): Array<FeeRange>;
  setRangesList(value: Array<FeeRange>): void;
  addRanges(value?: FeeRange, index?: number): FeeRange;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Fee.AsObject;
  static toObject(includeInstance: boolean, msg: Fee): Fee.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Fee, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Fee;
  static deserializeBinaryFromReader(message: Fee, reader: jspb.BinaryReader): Fee;
}

export namespace Fee {
  export type AsObject = {
    precision: number,
    round: RoundMap[keyof RoundMap],
    pb_default: number,
    rangesList: Array<FeeRange.AsObject>,
  }
}

export class Plan extends jspb.Message {
  getUuid(): string;
  setUuid(value: string): void;

  getTitle(): string;
  setTitle(value: string): void;

  getType(): string;
  setType(value: string): void;

  getPublic(): boolean;
  setPublic(value: boolean): void;

  getKind(): PlanKindMap[keyof PlanKindMap];
  setKind(value: PlanKindMap[keyof PlanKindMap]): void;

  clearResourcesList(): void;
  getResourcesList(): Array<ResourceConf>;
  setResourcesList(value: Array<ResourceConf>): void;
  addResources(value?: ResourceConf, index?: number): ResourceConf;

  getProductsMap(): jspb.Map<string, Product>;
  clearProductsMap(): void;
  getMetaMap(): jspb.Map<string, google_protobuf_struct_pb.Value>;
  clearMetaMap(): void;
  hasFee(): boolean;
  clearFee(): void;
  getFee(): Fee | undefined;
  setFee(value?: Fee): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Plan.AsObject;
  static toObject(includeInstance: boolean, msg: Plan): Plan.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Plan, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Plan;
  static deserializeBinaryFromReader(message: Plan, reader: jspb.BinaryReader): Plan;
}

export namespace Plan {
  export type AsObject = {
    uuid: string,
    title: string,
    type: string,
    pb_public: boolean,
    kind: PlanKindMap[keyof PlanKindMap],
    resourcesList: Array<ResourceConf.AsObject>,
    productsMap: Array<[string, Product.AsObject]>,
    metaMap: Array<[string, google_protobuf_struct_pb.Value.AsObject]>,
    fee?: Fee.AsObject,
  }
}

export class ListRequest extends jspb.Message {
  getSpUuid(): string;
  setSpUuid(value: string): void;

  getAnonymously(): boolean;
  setAnonymously(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListRequest): ListRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRequest;
  static deserializeBinaryFromReader(message: ListRequest, reader: jspb.BinaryReader): ListRequest;
}

export namespace ListRequest {
  export type AsObject = {
    spUuid: string,
    anonymously: boolean,
  }
}

export class ListResponse extends jspb.Message {
  clearPoolList(): void;
  getPoolList(): Array<Plan>;
  setPoolList(value: Array<Plan>): void;
  addPool(value?: Plan, index?: number): Plan;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListResponse): ListResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListResponse;
  static deserializeBinaryFromReader(message: ListResponse, reader: jspb.BinaryReader): ListResponse;
}

export namespace ListResponse {
  export type AsObject = {
    poolList: Array<Plan.AsObject>,
  }
}

export class ResourceConf extends jspb.Message {
  getKey(): string;
  setKey(value: string): void;

  getKind(): KindMap[keyof KindMap];
  setKind(value: KindMap[keyof KindMap]): void;

  getPrice(): number;
  setPrice(value: number): void;

  getPeriod(): number;
  setPeriod(value: number): void;

  getExcept(): boolean;
  setExcept(value: boolean): void;

  clearOnList(): void;
  getOnList(): Array<states_states_pb.NoCloudStateMap[keyof states_states_pb.NoCloudStateMap]>;
  setOnList(value: Array<states_states_pb.NoCloudStateMap[keyof states_states_pb.NoCloudStateMap]>): void;
  addOn(value: states_states_pb.NoCloudStateMap[keyof states_states_pb.NoCloudStateMap], index?: number): states_states_pb.NoCloudStateMap[keyof states_states_pb.NoCloudStateMap];

  hasFee(): boolean;
  clearFee(): void;
  getFee(): Fee | undefined;
  setFee(value?: Fee): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResourceConf.AsObject;
  static toObject(includeInstance: boolean, msg: ResourceConf): ResourceConf.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResourceConf, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResourceConf;
  static deserializeBinaryFromReader(message: ResourceConf, reader: jspb.BinaryReader): ResourceConf;
}

export namespace ResourceConf {
  export type AsObject = {
    key: string,
    kind: KindMap[keyof KindMap],
    price: number,
    period: number,
    except: boolean,
    onList: Array<states_states_pb.NoCloudStateMap[keyof states_states_pb.NoCloudStateMap]>,
    fee?: Fee.AsObject,
  }
}

export class Product extends jspb.Message {
  getKind(): KindMap[keyof KindMap];
  setKind(value: KindMap[keyof KindMap]): void;

  getTitle(): string;
  setTitle(value: string): void;

  getPrice(): number;
  setPrice(value: number): void;

  getPeriod(): number;
  setPeriod(value: number): void;

  getResourcesMap(): jspb.Map<string, google_protobuf_struct_pb.Value>;
  clearResourcesMap(): void;
  getMetaMap(): jspb.Map<string, google_protobuf_struct_pb.Value>;
  clearMetaMap(): void;
  hasSorter(): boolean;
  clearSorter(): void;
  getSorter(): number;
  setSorter(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Product.AsObject;
  static toObject(includeInstance: boolean, msg: Product): Product.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Product, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Product;
  static deserializeBinaryFromReader(message: Product, reader: jspb.BinaryReader): Product;
}

export namespace Product {
  export type AsObject = {
    kind: KindMap[keyof KindMap],
    title: string,
    price: number,
    period: number,
    resourcesMap: Array<[string, google_protobuf_struct_pb.Value.AsObject]>,
    metaMap: Array<[string, google_protobuf_struct_pb.Value.AsObject]>,
    sorter: number,
  }
}

export class Transaction extends jspb.Message {
  getUuid(): string;
  setUuid(value: string): void;

  getExec(): number;
  setExec(value: number): void;

  getProc(): number;
  setProc(value: number): void;

  getProcessed(): boolean;
  setProcessed(value: boolean): void;

  getAccount(): string;
  setAccount(value: string): void;

  getService(): string;
  setService(value: string): void;

  clearRecordsList(): void;
  getRecordsList(): Array<string>;
  setRecordsList(value: Array<string>): void;
  addRecords(value: string, index?: number): string;

  getTotal(): number;
  setTotal(value: number): void;

  getMetaMap(): jspb.Map<string, google_protobuf_struct_pb.Value>;
  clearMetaMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Transaction.AsObject;
  static toObject(includeInstance: boolean, msg: Transaction): Transaction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Transaction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Transaction;
  static deserializeBinaryFromReader(message: Transaction, reader: jspb.BinaryReader): Transaction;
}

export namespace Transaction {
  export type AsObject = {
    uuid: string,
    exec: number,
    proc: number,
    processed: boolean,
    account: string,
    service: string,
    recordsList: Array<string>,
    total: number,
    metaMap: Array<[string, google_protobuf_struct_pb.Value.AsObject]>,
  }
}

export class Transactions extends jspb.Message {
  clearPoolList(): void;
  getPoolList(): Array<Transaction>;
  setPoolList(value: Array<Transaction>): void;
  addPool(value?: Transaction, index?: number): Transaction;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Transactions.AsObject;
  static toObject(includeInstance: boolean, msg: Transactions): Transactions.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Transactions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Transactions;
  static deserializeBinaryFromReader(message: Transactions, reader: jspb.BinaryReader): Transactions;
}

export namespace Transactions {
  export type AsObject = {
    poolList: Array<Transaction.AsObject>,
  }
}

export class Record extends jspb.Message {
  getUuid(): string;
  setUuid(value: string): void;

  getStart(): number;
  setStart(value: number): void;

  getEnd(): number;
  setEnd(value: number): void;

  getExec(): number;
  setExec(value: number): void;

  getProcessed(): boolean;
  setProcessed(value: boolean): void;

  getInstance(): string;
  setInstance(value: string): void;

  getState(): states_states_pb.NoCloudStateMap[keyof states_states_pb.NoCloudStateMap];
  setState(value: states_states_pb.NoCloudStateMap[keyof states_states_pb.NoCloudStateMap]): void;

  getResource(): string;
  setResource(value: string): void;

  getProduct(): string;
  setProduct(value: string): void;

  getTotal(): number;
  setTotal(value: number): void;

  getMetaMap(): jspb.Map<string, google_protobuf_struct_pb.Value>;
  clearMetaMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Record.AsObject;
  static toObject(includeInstance: boolean, msg: Record): Record.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Record, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Record;
  static deserializeBinaryFromReader(message: Record, reader: jspb.BinaryReader): Record;
}

export namespace Record {
  export type AsObject = {
    uuid: string,
    start: number,
    end: number,
    exec: number,
    processed: boolean,
    instance: string,
    state: states_states_pb.NoCloudStateMap[keyof states_states_pb.NoCloudStateMap],
    resource: string,
    product: string,
    total: number,
    metaMap: Array<[string, google_protobuf_struct_pb.Value.AsObject]>,
  }
}

export class Records extends jspb.Message {
  clearPoolList(): void;
  getPoolList(): Array<Record>;
  setPoolList(value: Array<Record>): void;
  addPool(value?: Record, index?: number): Record;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Records.AsObject;
  static toObject(includeInstance: boolean, msg: Records): Records.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Records, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Records;
  static deserializeBinaryFromReader(message: Records, reader: jspb.BinaryReader): Records;
}

export namespace Records {
  export type AsObject = {
    poolList: Array<Record.AsObject>,
  }
}

export class GetActiveRequest extends jspb.Message {
  getUuid(): string;
  setUuid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetActiveRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetActiveRequest): GetActiveRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetActiveRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetActiveRequest;
  static deserializeBinaryFromReader(message: GetActiveRequest, reader: jspb.BinaryReader): GetActiveRequest;
}

export namespace GetActiveRequest {
  export type AsObject = {
    uuid: string,
  }
}

export class GetTransactionsRequest extends jspb.Message {
  hasAccount(): boolean;
  clearAccount(): void;
  getAccount(): string;
  setAccount(value: string): void;

  hasService(): boolean;
  clearService(): void;
  getService(): string;
  setService(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTransactionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTransactionsRequest): GetTransactionsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetTransactionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTransactionsRequest;
  static deserializeBinaryFromReader(message: GetTransactionsRequest, reader: jspb.BinaryReader): GetTransactionsRequest;
}

export namespace GetTransactionsRequest {
  export type AsObject = {
    account: string,
    service: string,
  }
}

export class ReprocessTransactionsRequest extends jspb.Message {
  getAccount(): string;
  setAccount(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReprocessTransactionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ReprocessTransactionsRequest): ReprocessTransactionsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReprocessTransactionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReprocessTransactionsRequest;
  static deserializeBinaryFromReader(message: ReprocessTransactionsRequest, reader: jspb.BinaryReader): ReprocessTransactionsRequest;
}

export namespace ReprocessTransactionsRequest {
  export type AsObject = {
    account: string,
  }
}

export class CreateExchangeRateRequest extends jspb.Message {
  getFrom(): CurrencyMap[keyof CurrencyMap];
  setFrom(value: CurrencyMap[keyof CurrencyMap]): void;

  getTo(): CurrencyMap[keyof CurrencyMap];
  setTo(value: CurrencyMap[keyof CurrencyMap]): void;

  getRate(): number;
  setRate(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateExchangeRateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateExchangeRateRequest): CreateExchangeRateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateExchangeRateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateExchangeRateRequest;
  static deserializeBinaryFromReader(message: CreateExchangeRateRequest, reader: jspb.BinaryReader): CreateExchangeRateRequest;
}

export namespace CreateExchangeRateRequest {
  export type AsObject = {
    from: CurrencyMap[keyof CurrencyMap],
    to: CurrencyMap[keyof CurrencyMap],
    rate: number,
  }
}

export class CreateExchangeRateResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateExchangeRateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateExchangeRateResponse): CreateExchangeRateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateExchangeRateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateExchangeRateResponse;
  static deserializeBinaryFromReader(message: CreateExchangeRateResponse, reader: jspb.BinaryReader): CreateExchangeRateResponse;
}

export namespace CreateExchangeRateResponse {
  export type AsObject = {
  }
}

export class UpdateExchangeRateRequest extends jspb.Message {
  getFrom(): CurrencyMap[keyof CurrencyMap];
  setFrom(value: CurrencyMap[keyof CurrencyMap]): void;

  getTo(): CurrencyMap[keyof CurrencyMap];
  setTo(value: CurrencyMap[keyof CurrencyMap]): void;

  getRate(): number;
  setRate(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateExchangeRateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateExchangeRateRequest): UpdateExchangeRateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateExchangeRateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateExchangeRateRequest;
  static deserializeBinaryFromReader(message: UpdateExchangeRateRequest, reader: jspb.BinaryReader): UpdateExchangeRateRequest;
}

export namespace UpdateExchangeRateRequest {
  export type AsObject = {
    from: CurrencyMap[keyof CurrencyMap],
    to: CurrencyMap[keyof CurrencyMap],
    rate: number,
  }
}

export class UpdateExchangeRateResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateExchangeRateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateExchangeRateResponse): UpdateExchangeRateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateExchangeRateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateExchangeRateResponse;
  static deserializeBinaryFromReader(message: UpdateExchangeRateResponse, reader: jspb.BinaryReader): UpdateExchangeRateResponse;
}

export namespace UpdateExchangeRateResponse {
  export type AsObject = {
  }
}

export class DeleteExchangeRateRequest extends jspb.Message {
  getFrom(): CurrencyMap[keyof CurrencyMap];
  setFrom(value: CurrencyMap[keyof CurrencyMap]): void;

  getTo(): CurrencyMap[keyof CurrencyMap];
  setTo(value: CurrencyMap[keyof CurrencyMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteExchangeRateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteExchangeRateRequest): DeleteExchangeRateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteExchangeRateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteExchangeRateRequest;
  static deserializeBinaryFromReader(message: DeleteExchangeRateRequest, reader: jspb.BinaryReader): DeleteExchangeRateRequest;
}

export namespace DeleteExchangeRateRequest {
  export type AsObject = {
    from: CurrencyMap[keyof CurrencyMap],
    to: CurrencyMap[keyof CurrencyMap],
  }
}

export class DeleteExchangeRateResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteExchangeRateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteExchangeRateResponse): DeleteExchangeRateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteExchangeRateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteExchangeRateResponse;
  static deserializeBinaryFromReader(message: DeleteExchangeRateResponse, reader: jspb.BinaryReader): DeleteExchangeRateResponse;
}

export namespace DeleteExchangeRateResponse {
  export type AsObject = {
  }
}

export class GetCurrenciesRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCurrenciesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCurrenciesRequest): GetCurrenciesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCurrenciesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCurrenciesRequest;
  static deserializeBinaryFromReader(message: GetCurrenciesRequest, reader: jspb.BinaryReader): GetCurrenciesRequest;
}

export namespace GetCurrenciesRequest {
  export type AsObject = {
  }
}

export class GetCurrenciesResponse extends jspb.Message {
  clearCurrenciesList(): void;
  getCurrenciesList(): Array<CurrencyMap[keyof CurrencyMap]>;
  setCurrenciesList(value: Array<CurrencyMap[keyof CurrencyMap]>): void;
  addCurrencies(value: CurrencyMap[keyof CurrencyMap], index?: number): CurrencyMap[keyof CurrencyMap];

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCurrenciesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetCurrenciesResponse): GetCurrenciesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCurrenciesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCurrenciesResponse;
  static deserializeBinaryFromReader(message: GetCurrenciesResponse, reader: jspb.BinaryReader): GetCurrenciesResponse;
}

export namespace GetCurrenciesResponse {
  export type AsObject = {
    currenciesList: Array<CurrencyMap[keyof CurrencyMap]>,
  }
}

export class GetExchangeRateRequest extends jspb.Message {
  getFrom(): CurrencyMap[keyof CurrencyMap];
  setFrom(value: CurrencyMap[keyof CurrencyMap]): void;

  getTo(): CurrencyMap[keyof CurrencyMap];
  setTo(value: CurrencyMap[keyof CurrencyMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetExchangeRateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetExchangeRateRequest): GetExchangeRateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetExchangeRateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetExchangeRateRequest;
  static deserializeBinaryFromReader(message: GetExchangeRateRequest, reader: jspb.BinaryReader): GetExchangeRateRequest;
}

export namespace GetExchangeRateRequest {
  export type AsObject = {
    from: CurrencyMap[keyof CurrencyMap],
    to: CurrencyMap[keyof CurrencyMap],
  }
}

export class GetExchangeRateResponse extends jspb.Message {
  getRate(): number;
  setRate(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetExchangeRateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetExchangeRateResponse): GetExchangeRateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetExchangeRateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetExchangeRateResponse;
  static deserializeBinaryFromReader(message: GetExchangeRateResponse, reader: jspb.BinaryReader): GetExchangeRateResponse;
}

export namespace GetExchangeRateResponse {
  export type AsObject = {
    rate: number,
  }
}

export class ConversionRequest extends jspb.Message {
  getFrom(): CurrencyMap[keyof CurrencyMap];
  setFrom(value: CurrencyMap[keyof CurrencyMap]): void;

  getTo(): CurrencyMap[keyof CurrencyMap];
  setTo(value: CurrencyMap[keyof CurrencyMap]): void;

  getAmount(): number;
  setAmount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConversionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ConversionRequest): ConversionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConversionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConversionRequest;
  static deserializeBinaryFromReader(message: ConversionRequest, reader: jspb.BinaryReader): ConversionRequest;
}

export namespace ConversionRequest {
  export type AsObject = {
    from: CurrencyMap[keyof CurrencyMap],
    to: CurrencyMap[keyof CurrencyMap],
    amount: number,
  }
}

export class ConversionResponse extends jspb.Message {
  getAmount(): number;
  setAmount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConversionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ConversionResponse): ConversionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConversionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConversionResponse;
  static deserializeBinaryFromReader(message: ConversionResponse, reader: jspb.BinaryReader): ConversionResponse;
}

export namespace ConversionResponse {
  export type AsObject = {
    amount: number,
  }
}

export interface PlanKindMap {
  UNKNOWN: 0;
  DYNAMIC: 1;
  STATIC: 2;
}

export const PlanKind: PlanKindMap;

export interface RoundMap {
  NONE: 0;
  FLOOR: 1;
  ROUND: 2;
  CEIL: 3;
}

export const Round: RoundMap;

export interface KindMap {
  UNSPECIFIED: 0;
  POSTPAID: 1;
  PREPAID: 2;
}

export const Kind: KindMap;

export interface CurrencyMap {
  NCU: 0;
  USD: 1;
  EUR: 2;
  BYN: 3;
  PLN: 4;
}

export const Currency: CurrencyMap;

