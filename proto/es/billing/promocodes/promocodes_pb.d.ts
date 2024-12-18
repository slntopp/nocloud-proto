// @generated by protoc-gen-es v1.10.0 with parameter "target=js+dts"
// @generated from file billing/promocodes/promocodes.proto (package nocloud.billing.promocodes, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage, Value } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * User defined status
 *
 * @generated from enum nocloud.billing.promocodes.PromocodeStatus
 */
export declare enum PromocodeStatus {
  /**
   * @generated from enum value: ACTIVE = 0;
   */
  ACTIVE = 0,

  /**
   * Temporary inactive for applying (still active for users which entered this promocode)
   *
   * @generated from enum value: SUSPENDED = 1;
   */
  SUSPENDED = 1,

  /**
   * @generated from enum value: DELETED = 2;
   */
  DELETED = 2,
}

/**
 * Read-only state for visualization
 *
 * @generated from enum nocloud.billing.promocodes.PromocodeState
 */
export declare enum PromocodeState {
  /**
   * OK.
   *
   * @generated from enum value: USABLE = 0;
   */
  USABLE = 0,

  /**
   * Due date passed
   *
   * @generated from enum value: EXPIRED = 1;
   */
  EXPIRED = 1,

  /**
   * All available promocodes are taken
   *
   * @generated from enum value: ALL_TAKEN = 2;
   */
  ALL_TAKEN = 2,

  /**
   * Already used by this user maximum times
   *
   * @generated from enum value: USED = 3;
   */
  USED = 3,
}

/**
 * @generated from message nocloud.billing.promocodes.Promocode
 */
export declare class Promocode extends Message<Promocode> {
  /**
   * @generated from field: string uuid = 1;
   */
  uuid: string;

  /**
   * @generated from field: string title = 2;
   */
  title: string;

  /**
   * @generated from field: string description = 3;
   */
  description: string;

  /**
   * Unique code, which user must enter as promocode
   *
   * @generated from field: string code = 4;
   */
  code: string;

  /**
   * @generated from field: nocloud.billing.promocodes.PromocodeStatus status = 5;
   */
  status: PromocodeStatus;

  /**
   * @generated from field: nocloud.billing.promocodes.PromocodeState state = 6;
   */
  state: PromocodeState;

  /**
   * User can't apply promocode after due_date. 0 - unlimited
   *
   * @generated from field: int64 due_date = 7;
   */
  dueDate: bigint;

  /**
   * How many times this promocode can be used globally. 0 - unlimited
   *
   * @generated from field: int64 limit = 8;
   */
  limit: bigint;

  /**
   * How many times this promocode can be used per one user. 0 - unlimited
   *
   * @generated from field: int64 uses_per_user = 9;
   */
  usesPerUser: bigint;

  /**
   * If true, then promocode will be applied only on instance start payment
   *
   * @generated from field: bool one_time = 10;
   */
  oneTime: boolean;

  /**
   * How many seconds promocode is active after it was applied. 0 - unlimited
   *
   * @generated from field: int64 active_time = 11;
   */
  activeTime: bigint;

  /**
   * @generated from field: map<string, google.protobuf.Value> meta = 12;
   */
  meta: { [key: string]: Value };

  /**
   * @generated from field: int64 created = 13;
   */
  created: bigint;

  /**
   * @generated from field: repeated nocloud.billing.promocodes.PromoItem promo_items = 14;
   */
  promoItems: PromoItem[];

  /**
   * Read-only field containing all promocode uses
   *
   * @generated from field: repeated nocloud.billing.promocodes.EntryResource uses = 15;
   */
  uses: EntryResource[];

  constructor(data?: PartialMessage<Promocode>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.billing.promocodes.Promocode";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Promocode;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Promocode;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Promocode;

  static equals(a: Promocode | PlainMessage<Promocode> | undefined, b: Promocode | PlainMessage<Promocode> | undefined): boolean;
}

/**
 * If no optional fields are specified, then applied to ALL billing items
 *
 * @generated from message nocloud.billing.promocodes.PromoItem
 */
export declare class PromoItem extends Message<PromoItem> {
  /**
   * @generated from field: nocloud.billing.promocodes.PromoSchema schema = 1;
   */
  schema?: PromoSchema;

  /**
   * @generated from field: optional nocloud.billing.promocodes.BillingPlanPromo plan_promo = 2;
   */
  planPromo?: BillingPlanPromo;

  /**
   * @generated from field: optional nocloud.billing.promocodes.AddonPromo addon_promo = 3;
   */
  addonPromo?: AddonPromo;

  /**
   * If specified, then applied to all showcase billing plans
   *
   * @generated from field: optional nocloud.billing.promocodes.ShowcasePromo showcase_promo = 4;
   */
  showcasePromo?: ShowcasePromo;

  constructor(data?: PartialMessage<PromoItem>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.billing.promocodes.PromoItem";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PromoItem;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PromoItem;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PromoItem;

  static equals(a: PromoItem | PlainMessage<PromoItem> | undefined, b: PromoItem | PlainMessage<PromoItem> | undefined): boolean;
}

/**
 * At least 1 field must be specified
 *
 * @generated from message nocloud.billing.promocodes.PromoSchema
 */
export declare class PromoSchema extends Message<PromoSchema> {
  /**
   * [0, 1]; Highest priority when specified more than 1
   *
   * @generated from field: optional double discount_percent = 1;
   */
  discountPercent?: number;

  /**
   * Fixed discount amount in NCU
   *
   * @generated from field: optional int64 discount_amount = 2;
   */
  discountAmount?: bigint;

  /**
   * Fixed price in NCU
   *
   * @generated from field: optional int64 fixed_price = 3;
   */
  fixedPrice?: bigint;

  constructor(data?: PartialMessage<PromoSchema>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.billing.promocodes.PromoSchema";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PromoSchema;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PromoSchema;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PromoSchema;

  static equals(a: PromoSchema | PlainMessage<PromoSchema> | undefined, b: PromoSchema | PlainMessage<PromoSchema> | undefined): boolean;
}

/**
 * billing_plan must be not empty string
 * If optional fields are not specified, then applied to ALL billing plan items.
 * If at least 1 optional item specified, then applied only to specified items
 *
 * @generated from message nocloud.billing.promocodes.BillingPlanPromo
 */
export declare class BillingPlanPromo extends Message<BillingPlanPromo> {
  /**
   * @generated from field: string billing_plan = 1;
   */
  billingPlan: string;

  /**
   * @generated from field: optional string resource = 2;
   */
  resource?: string;

  /**
   * @generated from field: optional string product = 3;
   */
  product?: string;

  /**
   * @generated from field: optional string addon = 4;
   */
  addon?: string;

  constructor(data?: PartialMessage<BillingPlanPromo>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.billing.promocodes.BillingPlanPromo";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BillingPlanPromo;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BillingPlanPromo;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BillingPlanPromo;

  static equals(a: BillingPlanPromo | PlainMessage<BillingPlanPromo> | undefined, b: BillingPlanPromo | PlainMessage<BillingPlanPromo> | undefined): boolean;
}

/**
 * addon must be not empty string
 *
 * @generated from message nocloud.billing.promocodes.AddonPromo
 */
export declare class AddonPromo extends Message<AddonPromo> {
  /**
   * @generated from field: string addon = 1;
   */
  addon: string;

  constructor(data?: PartialMessage<AddonPromo>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.billing.promocodes.AddonPromo";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AddonPromo;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AddonPromo;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AddonPromo;

  static equals(a: AddonPromo | PlainMessage<AddonPromo> | undefined, b: AddonPromo | PlainMessage<AddonPromo> | undefined): boolean;
}

/**
 * @generated from message nocloud.billing.promocodes.ShowcasePromo
 */
export declare class ShowcasePromo extends Message<ShowcasePromo> {
  /**
   * valid showcase uuid
   *
   * @generated from field: string showcase = 1;
   */
  showcase: string;

  constructor(data?: PartialMessage<ShowcasePromo>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.billing.promocodes.ShowcasePromo";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ShowcasePromo;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ShowcasePromo;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ShowcasePromo;

  static equals(a: ShowcasePromo | PlainMessage<ShowcasePromo> | undefined, b: ShowcasePromo | PlainMessage<ShowcasePromo> | undefined): boolean;
}

/**
 * @generated from message nocloud.billing.promocodes.EntryResource
 */
export declare class EntryResource extends Message<EntryResource> {
  /**
   * Connected invoice (not used yet)
   *
   * @generated from field: optional string invoice = 1;
   */
  invoice?: string;

  /**
   * Connected instance
   *
   * @generated from field: optional string instance = 2;
   */
  instance?: string;

  /**
   * Time of promocode usage
   *
   * @generated from field: int64 exec = 3;
   */
  exec: bigint;

  /**
   * Account, that used promocode
   *
   * @generated from field: string account = 4;
   */
  account: string;

  constructor(data?: PartialMessage<EntryResource>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.billing.promocodes.EntryResource";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EntryResource;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EntryResource;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EntryResource;

  static equals(a: EntryResource | PlainMessage<EntryResource> | undefined, b: EntryResource | PlainMessage<EntryResource> | undefined): boolean;
}

/**
 * API
 *
 * @generated from message nocloud.billing.promocodes.ListPromocodesRequest
 */
export declare class ListPromocodesRequest extends Message<ListPromocodesRequest> {
  /**
   * @generated from field: optional uint64 page = 1;
   */
  page?: bigint;

  /**
   * @generated from field: optional uint64 limit = 2;
   */
  limit?: bigint;

  /**
   * @generated from field: optional string field = 3;
   */
  field?: string;

  /**
   * @generated from field: optional string sort = 4;
   */
  sort?: string;

  /**
   * @generated from field: map<string, google.protobuf.Value> filters = 5;
   */
  filters: { [key: string]: Value };

  constructor(data?: PartialMessage<ListPromocodesRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.billing.promocodes.ListPromocodesRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListPromocodesRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListPromocodesRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListPromocodesRequest;

  static equals(a: ListPromocodesRequest | PlainMessage<ListPromocodesRequest> | undefined, b: ListPromocodesRequest | PlainMessage<ListPromocodesRequest> | undefined): boolean;
}

/**
 * @generated from message nocloud.billing.promocodes.CountPromocodesRequest
 */
export declare class CountPromocodesRequest extends Message<CountPromocodesRequest> {
  /**
   * @generated from field: map<string, google.protobuf.Value> filters = 1;
   */
  filters: { [key: string]: Value };

  constructor(data?: PartialMessage<CountPromocodesRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.billing.promocodes.CountPromocodesRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CountPromocodesRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CountPromocodesRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CountPromocodesRequest;

  static equals(a: CountPromocodesRequest | PlainMessage<CountPromocodesRequest> | undefined, b: CountPromocodesRequest | PlainMessage<CountPromocodesRequest> | undefined): boolean;
}

/**
 * @generated from message nocloud.billing.promocodes.GetPromocodeByCodeRequest
 */
export declare class GetPromocodeByCodeRequest extends Message<GetPromocodeByCodeRequest> {
  /**
   * @generated from field: string code = 1;
   */
  code: string;

  constructor(data?: PartialMessage<GetPromocodeByCodeRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.billing.promocodes.GetPromocodeByCodeRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetPromocodeByCodeRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetPromocodeByCodeRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetPromocodeByCodeRequest;

  static equals(a: GetPromocodeByCodeRequest | PlainMessage<GetPromocodeByCodeRequest> | undefined, b: GetPromocodeByCodeRequest | PlainMessage<GetPromocodeByCodeRequest> | undefined): boolean;
}

/**
 * @generated from message nocloud.billing.promocodes.ApplyPromocodeRequest
 */
export declare class ApplyPromocodeRequest extends Message<ApplyPromocodeRequest> {
  /**
   * @generated from field: string code = 1;
   */
  code: string;

  /**
   * @generated from field: string resource = 2;
   */
  resource: string;

  constructor(data?: PartialMessage<ApplyPromocodeRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.billing.promocodes.ApplyPromocodeRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ApplyPromocodeRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ApplyPromocodeRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ApplyPromocodeRequest;

  static equals(a: ApplyPromocodeRequest | PlainMessage<ApplyPromocodeRequest> | undefined, b: ApplyPromocodeRequest | PlainMessage<ApplyPromocodeRequest> | undefined): boolean;
}

/**
 * @generated from message nocloud.billing.promocodes.DetachPromocodeRequest
 */
export declare class DetachPromocodeRequest extends Message<DetachPromocodeRequest> {
  /**
   * @generated from field: string uuid = 1;
   */
  uuid: string;

  /**
   * @generated from field: string resource = 2;
   */
  resource: string;

  constructor(data?: PartialMessage<DetachPromocodeRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.billing.promocodes.DetachPromocodeRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DetachPromocodeRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DetachPromocodeRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DetachPromocodeRequest;

  static equals(a: DetachPromocodeRequest | PlainMessage<DetachPromocodeRequest> | undefined, b: DetachPromocodeRequest | PlainMessage<DetachPromocodeRequest> | undefined): boolean;
}

/**
 * @generated from message nocloud.billing.promocodes.CountPromocodesResponse
 */
export declare class CountPromocodesResponse extends Message<CountPromocodesResponse> {
  /**
   * @generated from field: int64 total = 1;
   */
  total: bigint;

  constructor(data?: PartialMessage<CountPromocodesResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.billing.promocodes.CountPromocodesResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CountPromocodesResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CountPromocodesResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CountPromocodesResponse;

  static equals(a: CountPromocodesResponse | PlainMessage<CountPromocodesResponse> | undefined, b: CountPromocodesResponse | PlainMessage<CountPromocodesResponse> | undefined): boolean;
}

/**
 * @generated from message nocloud.billing.promocodes.ListPromocodesResponse
 */
export declare class ListPromocodesResponse extends Message<ListPromocodesResponse> {
  /**
   * @generated from field: repeated nocloud.billing.promocodes.Promocode promocodes = 1;
   */
  promocodes: Promocode[];

  constructor(data?: PartialMessage<ListPromocodesResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.billing.promocodes.ListPromocodesResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListPromocodesResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListPromocodesResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListPromocodesResponse;

  static equals(a: ListPromocodesResponse | PlainMessage<ListPromocodesResponse> | undefined, b: ListPromocodesResponse | PlainMessage<ListPromocodesResponse> | undefined): boolean;
}

/**
 * @generated from message nocloud.billing.promocodes.ApplyPromocodeResponse
 */
export declare class ApplyPromocodeResponse extends Message<ApplyPromocodeResponse> {
  /**
   * @generated from field: bool success = 1;
   */
  success: boolean;

  constructor(data?: PartialMessage<ApplyPromocodeResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.billing.promocodes.ApplyPromocodeResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ApplyPromocodeResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ApplyPromocodeResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ApplyPromocodeResponse;

  static equals(a: ApplyPromocodeResponse | PlainMessage<ApplyPromocodeResponse> | undefined, b: ApplyPromocodeResponse | PlainMessage<ApplyPromocodeResponse> | undefined): boolean;
}

/**
 * @generated from message nocloud.billing.promocodes.DetachPromocodeResponse
 */
export declare class DetachPromocodeResponse extends Message<DetachPromocodeResponse> {
  /**
   * @generated from field: bool success = 1;
   */
  success: boolean;

  constructor(data?: PartialMessage<DetachPromocodeResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.billing.promocodes.DetachPromocodeResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DetachPromocodeResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DetachPromocodeResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DetachPromocodeResponse;

  static equals(a: DetachPromocodeResponse | PlainMessage<DetachPromocodeResponse> | undefined, b: DetachPromocodeResponse | PlainMessage<DetachPromocodeResponse> | undefined): boolean;
}

