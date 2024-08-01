//
//Copyright © 2021-2023 Nikita Ivanovski info@slnt-opp.xyz
//
//Licensed under the Apache License, Version 2.0 (the "License");
//you may not use this file except in compliance with the License.
//You may obtain a copy of the License at
//
//http://www.apache.org/licenses/LICENSE-2.0
//
//Unless required by applicable law or agreed to in writing, software
//distributed under the License is distributed on an "AS IS" BASIS,
//WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//See the License for the specific language governing permissions and
//limitations under the License.

// @generated by protoc-gen-es v2.0.0 with parameter "target=js+dts"
// @generated from file billing/billing.proto (package nocloud.billing, syntax proto3)
/* eslint-disable */

import { enumDesc, fileDesc, messageDesc, serviceDesc, tsEnum } from "@bufbuild/protobuf/codegenv1";
import { file_ansible_ansible } from "../ansible/ansible_pb";
import { file_billing_addons_addons } from "./addons/addons_pb";
import { file_billing_descriptions_descriptions } from "./descriptions/descriptions_pb";
import { file_google_api_annotations } from "../google/api/annotations_pb";
import { file_google_protobuf_struct } from "@bufbuild/protobuf/wkt";
import { file_states_states } from "../states/states_pb";
import { file_statuses_statuses } from "../statuses/statuses_pb";

/**
 * Describes the file billing/billing.proto.
 */
export const file_billing_billing = /*@__PURE__*/
  fileDesc("ChViaWxsaW5nL2JpbGxpbmcucHJvdG8SD25vY2xvdWQuYmlsbGluZyI0CghGZWVSYW5nZRIMCgRmcm9tGAEgASgBEgoKAnRvGAIgASgBEg4KBmZhY3RvchgDIAEoASJ7CgNGZWUSEQoJcHJlY2lzaW9uGAEgASgDEiUKBXJvdW5kGAIgASgOMhYubm9jbG91ZC5iaWxsaW5nLlJvdW5kEg8KB2RlZmF1bHQYAyABKAESKQoGcmFuZ2VzGAQgAygLMhkubm9jbG91ZC5iaWxsaW5nLkZlZVJhbmdlIqMECgRQbGFuEgwKBHV1aWQYASABKAkSDQoFdGl0bGUYAiABKAkSDAoEdHlwZRgDIAEoCRIOCgZwdWJsaWMYBCABKAgSJwoEa2luZBgFIAEoDjIZLm5vY2xvdWQuYmlsbGluZy5QbGFuS2luZBIwCglyZXNvdXJjZXMYBiADKAsyHS5ub2Nsb3VkLmJpbGxpbmcuUmVzb3VyY2VDb25mEjUKCHByb2R1Y3RzGAcgAygLMiMubm9jbG91ZC5iaWxsaW5nLlBsYW4uUHJvZHVjdHNFbnRyeRItCgRtZXRhGAggAygLMh8ubm9jbG91ZC5iaWxsaW5nLlBsYW4uTWV0YUVudHJ5EiEKA2ZlZRgJIAEoCzIULm5vY2xvdWQuYmlsbGluZy5GZWUSKwoIc29mdHdhcmUYCiADKAsyGS5ub2Nsb3VkLmFuc2libGUuU29mdHdhcmUSLwoGc3RhdHVzGAsgASgOMh8ubm9jbG91ZC5zdGF0dXNlcy5Ob0Nsb3VkU3RhdHVzEg4KBmFkZG9ucxgMIAMoCRpJCg1Qcm9kdWN0c0VudHJ5EgsKA2tleRgBIAEoCRInCgV2YWx1ZRgCIAEoCzIYLm5vY2xvdWQuYmlsbGluZy5Qcm9kdWN0OgI4ARpDCglNZXRhRW50cnkSCwoDa2V5GAEgASgJEiUKBXZhbHVlGAIgASgLMhYuZ29vZ2xlLnByb3RvYnVmLlZhbHVlOgI4ASJJCgtMaXN0UmVxdWVzdBIPCgdzcF91dWlkGAEgASgJEhMKC2Fub255bW91c2x5GAIgASgIEhQKDHNob3dfZGVsZXRlZBgDIAEoCCIzCgxMaXN0UmVzcG9uc2USIwoEcG9vbBgBIAMoCzIVLm5vY2xvdWQuYmlsbGluZy5QbGFuIjAKGUxpc3RQbGFuc0luc3RhbmNlc1JlcXVlc3QSEwoLYW5vbnltb3VzbHkYASABKAgiqQEKGkxpc3RQbGFuc0luc3RhbmNlc1Jlc3BvbnNlEkUKBXBsYW5zGAEgAygLMjYubm9jbG91ZC5iaWxsaW5nLkxpc3RQbGFuc0luc3RhbmNlc1Jlc3BvbnNlLlBsYW5zRW50cnkaRAoKUGxhbnNFbnRyeRILCgNrZXkYASABKAkSJQoFdmFsdWUYAiABKAsyFi5nb29nbGUucHJvdG9idWYuVmFsdWU6AjgBIuYDCgxSZXNvdXJjZUNvbmYSCwoDa2V5GAEgASgJEiMKBGtpbmQYAiABKA4yFS5ub2Nsb3VkLmJpbGxpbmcuS2luZBINCgVwcmljZRgDIAEoARIOCgZwZXJpb2QYBCABKAMSDgoGZXhjZXB0GAUgASgIEigKAm9uGAYgAygOMhwubm9jbG91ZC5zdGF0ZXMuTm9DbG91ZFN0YXRlEiEKA2ZlZRgHIAEoCzIULm5vY2xvdWQuYmlsbGluZy5GZWUSDQoFdGl0bGUYCCABKAkSNQoEbWV0YRgJIAMoCzInLm5vY2xvdWQuYmlsbGluZy5SZXNvdXJjZUNvbmYuTWV0YUVudHJ5Eg4KBnB1YmxpYxgKIAEoCBIPCgd2aXJ0dWFsGAsgASgIEhAKA21pbhgMIAEoBUgAiAEBEhAKA21heBgNIAEoBUgBiAEBEjAKC3BlcmlvZF9raW5kGA4gASgOMhsubm9jbG91ZC5iaWxsaW5nLlBlcmlvZEtpbmQSFgoOZGVzY3JpcHRpb25faWQYDyABKAkaQwoJTWV0YUVudHJ5EgsKA2tleRgBIAEoCRIlCgV2YWx1ZRgCIAEoCzIWLmdvb2dsZS5wcm90b2J1Zi5WYWx1ZToCOAFCBgoEX21pbkIGCgRfbWF4IqYECgdQcm9kdWN0EiMKBGtpbmQYASABKA4yFS5ub2Nsb3VkLmJpbGxpbmcuS2luZBINCgV0aXRsZRgCIAEoCRINCgVwcmljZRgDIAEoARIOCgZwZXJpb2QYBCABKAMSOgoJcmVzb3VyY2VzGAUgAygLMicubm9jbG91ZC5iaWxsaW5nLlByb2R1Y3QuUmVzb3VyY2VzRW50cnkSMAoEbWV0YRgGIAMoCzIiLm5vY2xvdWQuYmlsbGluZy5Qcm9kdWN0Lk1ldGFFbnRyeRITCgZzb3J0ZXIYByABKAVIAIgBARIdChBpbnN0YWxsYXRpb25fZmVlGAggASgBSAGIAQESDgoGcHVibGljGAkgASgIEg0KBWdyb3VwGAogASgJEjAKC3BlcmlvZF9raW5kGAsgASgOMhsubm9jbG91ZC5iaWxsaW5nLlBlcmlvZEtpbmQSFgoOZGVzY3JpcHRpb25faWQYDCABKAkSDgoGYWRkb25zGA0gAygJGkgKDlJlc291cmNlc0VudHJ5EgsKA2tleRgBIAEoCRIlCgV2YWx1ZRgCIAEoCzIWLmdvb2dsZS5wcm90b2J1Zi5WYWx1ZToCOAEaQwoJTWV0YUVudHJ5EgsKA2tleRgBIAEoCRIlCgV2YWx1ZRgCIAEoCzIWLmdvb2dsZS5wcm90b2J1Zi5WYWx1ZToCOAFCCQoHX3NvcnRlckITChFfaW5zdGFsbGF0aW9uX2ZlZSKyAwoLVHJhbnNhY3Rpb24SDAoEdXVpZBgBIAEoCRIMCgRleGVjGAIgASgDEgwKBHByb2MYAyABKAMSEQoJcHJvY2Vzc2VkGAQgASgIEisKCHByaW9yaXR5GAUgASgOMhkubm9jbG91ZC5iaWxsaW5nLlByaW9yaXR5Eg8KB2FjY291bnQYBiABKAkSDwoHc2VydmljZRgHIAEoCRIPCgdyZWNvcmRzGAggAygJEg0KBXRvdGFsGAkgASgBEjQKBG1ldGEYCiADKAsyJi5ub2Nsb3VkLmJpbGxpbmcuVHJhbnNhY3Rpb24uTWV0YUVudHJ5EisKCGN1cnJlbmN5GAsgASgLMhkubm9jbG91ZC5iaWxsaW5nLkN1cnJlbmN5Eg8KB2NyZWF0ZWQYDCABKAMSEQoEYmFzZRgNIAEoCUgAiAEBEhUKCHByZXZpb3VzGA4gASgJSAGIAQEaQwoJTWV0YUVudHJ5EgsKA2tleRgBIAEoCRIlCgV2YWx1ZRgCIAEoCzIWLmdvb2dsZS5wcm90b2J1Zi5WYWx1ZToCOAFCBwoFX2Jhc2VCCwoJX3ByZXZpb3VzIloKBEl0ZW0SDgoGYW1vdW50GAEgASgFEgwKBHVuaXQYAiABKAkSDQoFcHJpY2UYAyABKAESEAoIaW5zdGFuY2UYBCABKAkSEwoLZGVzY3JpcHRpb24YBSABKAki2wMKB0ludm9pY2USDAoEdXVpZBgBIAEoCRIPCgdwYXltZW50GAIgASgDEhEKCXByb2Nlc3NlZBgDIAEoAxIQCghyZXR1cm5lZBgEIAEoAxIQCghkZWFkbGluZRgFIAEoAxIuCgZzdGF0dXMYBiABKA4yHi5ub2Nsb3VkLmJpbGxpbmcuQmlsbGluZ1N0YXR1cxIPCgdhY2NvdW50GAcgASgJEhQKDHRyYW5zYWN0aW9ucxgIIAMoCRINCgV0b3RhbBgJIAEoARIwCgRtZXRhGAogAygLMiIubm9jbG91ZC5iaWxsaW5nLkludm9pY2UuTWV0YUVudHJ5EisKCGN1cnJlbmN5GAsgASgLMhkubm9jbG91ZC5iaWxsaW5nLkN1cnJlbmN5Eg8KB2NyZWF0ZWQYDCABKAMSJAoFaXRlbXMYDSADKAsyFS5ub2Nsb3VkLmJpbGxpbmcuSXRlbRIpCgR0eXBlGA4gASgOMhsubm9jbG91ZC5iaWxsaW5nLkFjdGlvblR5cGUSDgoGbnVtYmVyGA8gASgJGkMKCU1ldGFFbnRyeRILCgNrZXkYASABKAkSJQoFdmFsdWUYAiABKAsyFi5nb29nbGUucHJvdG9idWYuVmFsdWU6AjgBIjIKCEludm9pY2VzEiYKBHBvb2wYASADKAsyGC5ub2Nsb3VkLmJpbGxpbmcuSW52b2ljZSI6CgxUcmFuc2FjdGlvbnMSKgoEcG9vbBgBIAMoCzIcLm5vY2xvdWQuYmlsbGluZy5UcmFuc2FjdGlvbiKTBAoGUmVjb3JkEgwKBHV1aWQYASABKAkSDQoFc3RhcnQYAiABKAMSCwoDZW5kGAMgASgDEgwKBGV4ZWMYBCABKAMSEQoJcHJvY2Vzc2VkGAUgASgIEisKCHByaW9yaXR5GAYgASgOMhkubm9jbG91ZC5iaWxsaW5nLlByaW9yaXR5EhAKCGluc3RhbmNlGAcgASgJEisKBXN0YXRlGAggASgOMhwubm9jbG91ZC5zdGF0ZXMuTm9DbG91ZFN0YXRlEhAKCHJlc291cmNlGAkgASgJEg8KB3Byb2R1Y3QYCiABKAkSDQoFdG90YWwYCyABKAESLwoEbWV0YRgMIAMoCzIhLm5vY2xvdWQuYmlsbGluZy5SZWNvcmQuTWV0YUVudHJ5EisKCGN1cnJlbmN5GA0gASgLMhkubm9jbG91ZC5iaWxsaW5nLkN1cnJlbmN5Eg8KB3NlcnZpY2UYDiABKAkSDwoHYWNjb3VudBgPIAEoCRIRCgRiYXNlGBAgASgJSACIAQESFQoIcHJldmlvdXMYESABKAlIAYgBARIMCgRjb3N0GBIgASgBEg0KBWFkZG9uGBMgASgJGkMKCU1ldGFFbnRyeRILCgNrZXkYASABKAkSJQoFdmFsdWUYAiABKAsyFi5nb29nbGUucHJvdG9idWYuVmFsdWU6AjgBQgcKBV9iYXNlQgsKCV9wcmV2aW91cyIwCgdSZWNvcmRzEiUKBHBvb2wYASADKAsyFy5ub2Nsb3VkLmJpbGxpbmcuUmVjb3JkIiAKEEdldEFjdGl2ZVJlcXVlc3QSDAoEdXVpZBgBIAEoCSKIAgoWR2V0VHJhbnNhY3Rpb25zUmVxdWVzdBIUCgdhY2NvdW50GAEgASgJSACIAQESFAoHc2VydmljZRgCIAEoCUgBiAEBEhEKBHBhZ2UYAyABKARIAogBARISCgVsaW1pdBgEIAEoBEgDiAEBEhIKBWZpZWxkGAUgASgJSASIAQESEQoEc29ydBgGIAEoCUgFiAEBEhEKBHV1aWQYByABKAlIBogBARIRCgR0eXBlGAggASgJSAeIAQFCCgoIX2FjY291bnRCCgoIX3NlcnZpY2VCBwoFX3BhZ2VCCAoGX2xpbWl0QggKBl9maWVsZEIHCgVfc29ydEIHCgVfdXVpZEIHCgVfdHlwZSIvChxSZXByb2Nlc3NUcmFuc2FjdGlvbnNSZXF1ZXN0Eg8KB2FjY291bnQYASABKAkifQobR2V0VHJhbnNhY3Rpb25zQ291bnRSZXF1ZXN0EhQKB2FjY291bnQYASABKAlIAIgBARIUCgdzZXJ2aWNlGAIgASgJSAGIAQESEQoEdHlwZRgDIAEoCUgCiAEBQgoKCF9hY2NvdW50QgoKCF9zZXJ2aWNlQgcKBV90eXBlIi0KHEdldFRyYW5zYWN0aW9uc0NvdW50UmVzcG9uc2USDQoFdG90YWwYASABKAQiNgoYVXBkYXRlVHJhbnNhY3Rpb25SZXF1ZXN0EgwKBHV1aWQYASABKAkSDAoEZXhlYxgCIAEoAyJYChRDcmVhdGVJbnZvaWNlUmVxdWVzdBIpCgdpbnZvaWNlGAEgASgLMhgubm9jbG91ZC5iaWxsaW5nLkludm9pY2USFQoNaXNfc2VuZF9lbWFpbBgCIAEoCCJYChRVcGRhdGVJbnZvaWNlUmVxdWVzdBIpCgdpbnZvaWNlGAEgASgLMhgubm9jbG91ZC5iaWxsaW5nLkludm9pY2USFQoNaXNfc2VuZF9lbWFpbBgCIAEoCCLVAQoaVXBkYXRlSW52b2ljZVN0YXR1c1JlcXVlc3QSDAoEdXVpZBgBIAEoCRIuCgZzdGF0dXMYAiABKA4yHi5ub2Nsb3VkLmJpbGxpbmcuQmlsbGluZ1N0YXR1cxJCCgZwYXJhbXMYAyABKAsyMi5ub2Nsb3VkLmJpbGxpbmcuVXBkYXRlSW52b2ljZVN0YXR1c1JlcXVlc3QuUGFyYW1zGjUKBlBhcmFtcxIUCgxwYXltZW50X2RhdGUYASABKAMSFQoNaXNfc2VuZF9lbWFpbBgCIAEoCCKtAgoXR2V0SW52b2ljZXNDb3VudFJlcXVlc3QSFAoHYWNjb3VudBgBIAEoCUgAiAEBEhQKB3NlcnZpY2UYAiABKAlIAYgBARIzCgZzdGF0dXMYAyABKA4yHi5ub2Nsb3VkLmJpbGxpbmcuQmlsbGluZ1N0YXR1c0gCiAEBEkYKB2ZpbHRlcnMYBCADKAsyNS5ub2Nsb3VkLmJpbGxpbmcuR2V0SW52b2ljZXNDb3VudFJlcXVlc3QuRmlsdGVyc0VudHJ5GkYKDEZpbHRlcnNFbnRyeRILCgNrZXkYASABKAkSJQoFdmFsdWUYAiABKAsyFi5nb29nbGUucHJvdG9idWYuVmFsdWU6AjgBQgoKCF9hY2NvdW50QgoKCF9zZXJ2aWNlQgkKB19zdGF0dXMiswMKEkdldEludm9pY2VzUmVxdWVzdBIUCgdhY2NvdW50GAEgASgJSACIAQESFAoHc2VydmljZRgCIAEoCUgBiAEBEhEKBHBhZ2UYAyABKARIAogBARISCgVsaW1pdBgEIAEoBEgDiAEBEhIKBWZpZWxkGAUgASgJSASIAQESEQoEc29ydBgGIAEoCUgFiAEBEhEKBHV1aWQYByABKAlIBogBARIzCgZzdGF0dXMYCCABKA4yHi5ub2Nsb3VkLmJpbGxpbmcuQmlsbGluZ1N0YXR1c0gHiAEBEkEKB2ZpbHRlcnMYCSADKAsyMC5ub2Nsb3VkLmJpbGxpbmcuR2V0SW52b2ljZXNSZXF1ZXN0LkZpbHRlcnNFbnRyeRpGCgxGaWx0ZXJzRW50cnkSCwoDa2V5GAEgASgJEiUKBXZhbHVlGAIgASgLMhYuZ29vZ2xlLnByb3RvYnVmLlZhbHVlOgI4AUIKCghfYWNjb3VudEIKCghfc2VydmljZUIHCgVfcGFnZUIICgZfbGltaXRCCAoGX2ZpZWxkQgcKBV9zb3J0QgcKBV91dWlkQgkKB19zdGF0dXMiKQoYR2V0SW52b2ljZXNDb3VudFJlc3BvbnNlEg0KBXRvdGFsGAEgASgEIisKGVVwZGF0ZVRyYW5zYWN0aW9uUmVzcG9uc2USDgoGcmVzdWx0GAEgASgIIqUBCg5Db3N0RXN0aW1hdGlvbhJBCglyZXNvdXJjZXMYASADKAsyLi5ub2Nsb3VkLmJpbGxpbmcuQ29zdEVzdGltYXRpb24uUmVzb3VyY2VzRW50cnkSDwoHcHJvZHVjdBgCIAEoARINCgV0b3RhbBgDIAEoARowCg5SZXNvdXJjZXNFbnRyeRILCgNrZXkYASABKAkSDQoFdmFsdWUYAiABKAE6AjgBIsMBChlHZXRJbnN0YW5jZXNSZXBvcnRSZXF1ZXN0EhEKBGZyb20YASABKANIAIgBARIPCgJ0bxgCIAEoA0gBiAEBEhEKBHBhZ2UYAyABKANIAogBARISCgVsaW1pdBgEIAEoA0gDiAEBEhIKBWZpZWxkGAUgASgJSASIAQESEQoEc29ydBgGIAEoCUgFiAEBQgcKBV9mcm9tQgUKA190b0IHCgVfcGFnZUIICgZfbGltaXRCCAoGX2ZpZWxkQgcKBV9zb3J0IloKDkluc3RhbmNlUmVwb3J0EgwKBHV1aWQYASABKAkSDQoFdG90YWwYAiABKAESKwoIY3VycmVuY3kYAyABKAsyGS5ub2Nsb3VkLmJpbGxpbmcuQ3VycmVuY3kiTgoaR2V0SW5zdGFuY2VzUmVwb3J0UmVzcG9uc2USMAoHcmVwb3J0cxgBIAMoCzIfLm5vY2xvdWQuYmlsbGluZy5JbnN0YW5jZVJlcG9ydCLjAgoYR2V0UmVjb3Jkc1JlcG9ydHNSZXF1ZXN0EhEKBHBhZ2UYASABKANIAIgBARISCgVsaW1pdBgCIAEoA0gBiAEBEhIKBWZpZWxkGAMgASgJSAKIAQESEQoEc29ydBgEIAEoCUgDiAEBEkcKB2ZpbHRlcnMYBSADKAsyNi5ub2Nsb3VkLmJpbGxpbmcuR2V0UmVjb3Jkc1JlcG9ydHNSZXF1ZXN0LkZpbHRlcnNFbnRyeRIUCgdhY2NvdW50GAYgASgJSASIAQESFAoHc2VydmljZRgHIAEoCUgFiAEBGkYKDEZpbHRlcnNFbnRyeRILCgNrZXkYASABKAkSJQoFdmFsdWUYAiABKAsyFi5nb29nbGUucHJvdG9idWYuVmFsdWU6AjgBQgcKBV9wYWdlQggKBl9saW1pdEIICgZfZmllbGRCBwoFX3NvcnRCCgoIX2FjY291bnRCCgoIX3NlcnZpY2UiYwoZR2V0UmVjb3Jkc1JlcG9ydHNSZXNwb25zZRIoCgdyZWNvcmRzGAEgAygLMhcubm9jbG91ZC5iaWxsaW5nLlJlY29yZBINCgV0b3RhbBgCIAEoARINCgVjb3VudBgDIAEoAyIhCh9HZXRJbnN0YW5jZXNSZXBvcnRzQ291bnRSZXF1ZXN0IvkBCh1HZXRSZWNvcmRzUmVwb3J0c0NvdW50UmVxdWVzdBJMCgdmaWx0ZXJzGAEgAygLMjsubm9jbG91ZC5iaWxsaW5nLkdldFJlY29yZHNSZXBvcnRzQ291bnRSZXF1ZXN0LkZpbHRlcnNFbnRyeRIUCgdhY2NvdW50GAIgASgJSACIAQESFAoHc2VydmljZRgDIAEoCUgBiAEBGkYKDEZpbHRlcnNFbnRyeRILCgNrZXkYASABKAkSJQoFdmFsdWUYAiABKAsyFi5nb29nbGUucHJvdG9idWYuVmFsdWU6AjgBQgoKCF9hY2NvdW50QgoKCF9zZXJ2aWNlIlAKF0dldFJlcG9ydHNDb3VudFJlc3BvbnNlEg0KBXRvdGFsGAEgASgDEiYKBnVuaXF1ZRgCIAEoCzIWLmdvb2dsZS5wcm90b2J1Zi5WYWx1ZSIqCihHZXRJbnZvaWNlU2V0dGluZ3NUZW1wbGF0ZUV4YW1wbGVSZXF1ZXN0IjwKKUdldEludm9pY2VTZXR0aW5nc1RlbXBsYXRlRXhhbXBsZVJlc3BvbnNlEg8KB2V4YW1wbGUYASABKAkiJQoIQ3VycmVuY3kSCgoCaWQYASABKAUSDQoFdGl0bGUYAiABKAkiRAoVQ3JlYXRlQ3VycmVuY3lSZXF1ZXN0EisKCGN1cnJlbmN5GAEgASgLMhkubm9jbG91ZC5iaWxsaW5nLkN1cnJlbmN5IhgKFkNyZWF0ZUN1cnJlbmN5UmVzcG9uc2UijQEKGUNyZWF0ZUV4Y2hhbmdlUmF0ZVJlcXVlc3QSJwoEZnJvbRgBIAEoCzIZLm5vY2xvdWQuYmlsbGluZy5DdXJyZW5jeRIlCgJ0bxgCIAEoCzIZLm5vY2xvdWQuYmlsbGluZy5DdXJyZW5jeRIMCgRyYXRlGAMgASgBEhIKCmNvbW1pc3Npb24YBCABKAEiHAoaQ3JlYXRlRXhjaGFuZ2VSYXRlUmVzcG9uc2UijQEKGVVwZGF0ZUV4Y2hhbmdlUmF0ZVJlcXVlc3QSJwoEZnJvbRgBIAEoCzIZLm5vY2xvdWQuYmlsbGluZy5DdXJyZW5jeRIlCgJ0bxgCIAEoCzIZLm5vY2xvdWQuYmlsbGluZy5DdXJyZW5jeRIMCgRyYXRlGAMgASgBEhIKCmNvbW1pc3Npb24YBCABKAEiHAoaVXBkYXRlRXhjaGFuZ2VSYXRlUmVzcG9uc2UiawoZRGVsZXRlRXhjaGFuZ2VSYXRlUmVxdWVzdBInCgRmcm9tGAEgASgLMhkubm9jbG91ZC5iaWxsaW5nLkN1cnJlbmN5EiUKAnRvGAIgASgLMhkubm9jbG91ZC5iaWxsaW5nLkN1cnJlbmN5IhwKGkRlbGV0ZUV4Y2hhbmdlUmF0ZVJlc3BvbnNlIhYKFEdldEN1cnJlbmNpZXNSZXF1ZXN0IkYKFUdldEN1cnJlbmNpZXNSZXNwb25zZRItCgpjdXJyZW5jaWVzGAEgAygLMhkubm9jbG91ZC5iaWxsaW5nLkN1cnJlbmN5ImgKFkdldEV4Y2hhbmdlUmF0ZVJlcXVlc3QSJwoEZnJvbRgBIAEoCzIZLm5vY2xvdWQuYmlsbGluZy5DdXJyZW5jeRIlCgJ0bxgCIAEoCzIZLm5vY2xvdWQuYmlsbGluZy5DdXJyZW5jeSIZChdHZXRFeGNoYW5nZVJhdGVzUmVxdWVzdCKLAQoXR2V0RXhjaGFuZ2VSYXRlUmVzcG9uc2USJwoEZnJvbRgBIAEoCzIZLm5vY2xvdWQuYmlsbGluZy5DdXJyZW5jeRIlCgJ0bxgCIAEoCzIZLm5vY2xvdWQuYmlsbGluZy5DdXJyZW5jeRIMCgRyYXRlGAMgASgBEhIKCmNvbW1pc3Npb24YBCABKAEiUwoYR2V0RXhjaGFuZ2VSYXRlc1Jlc3BvbnNlEjcKBXJhdGVzGAEgAygLMigubm9jbG91ZC5iaWxsaW5nLkdldEV4Y2hhbmdlUmF0ZVJlc3BvbnNlInMKEUNvbnZlcnNpb25SZXF1ZXN0EicKBGZyb20YASABKAsyGS5ub2Nsb3VkLmJpbGxpbmcuQ3VycmVuY3kSJQoCdG8YAiABKAsyGS5ub2Nsb3VkLmJpbGxpbmcuQ3VycmVuY3kSDgoGYW1vdW50GAMgASgBIiQKEkNvbnZlcnNpb25SZXNwb25zZRIOCgZhbW91bnQYASABKAEqMAoIUGxhbktpbmQSCwoHVU5LTk9XThAAEgsKB0RZTkFNSUMQARIKCgZTVEFUSUMQAioxCgVSb3VuZBIICgROT05FEAASCQoFRkxPT1IQARIJCgVST1VORBACEggKBENFSUwQAyoyCgRLaW5kEg8KC1VOU1BFQ0lGSUVEEAASDAoIUE9TVFBBSUQQARILCgdQUkVQQUlEEAIqQAoKUGVyaW9kS2luZBILCgdERUZBVUxUEAASEgoOQ0FMRU5EQVJfTU9OVEgQARIRCg1DQUxFTkRBUl9ZRUFSEAIqMgoIUHJpb3JpdHkSCgoGTk9STUFMEAASCgoGVVJHRU5UEAESDgoKQURESVRJT05BTBACKngKDUJpbGxpbmdTdGF0dXMSGgoWQklMTElOR19TVEFUVVNfVU5LTk9XThAAEggKBFBBSUQQARIKCgZVTlBBSUQQAhIMCghDQU5DRUxFRBADEg4KClRFUk1JTkFURUQQBBIJCgVEUkFGVBAFEgwKCFJFVFVSTkVEEAYqawoKQWN0aW9uVHlwZRIXChNBQ1RJT05fVFlQRV9VTktOT1dOEAASDQoJTk9fQUNUSU9OEAESEgoOSU5TVEFOQ0VfU1RBUlQQAhIUChBJTlNUQU5DRV9SRU5FV0FMEAMSCwoHQkFMQU5DRRAEMtYBCg5SZWNvcmRzU2VydmljZRJICglHZXRBY3RpdmUSIS5ub2Nsb3VkLmJpbGxpbmcuR2V0QWN0aXZlUmVxdWVzdBoYLm5vY2xvdWQuYmlsbGluZy5SZWNvcmRzEjwKBkNyZWF0ZRIYLm5vY2xvdWQuYmlsbGluZy5SZWNvcmRzGhgubm9jbG91ZC5iaWxsaW5nLlJlY29yZHMSPAoGVXBkYXRlEhgubm9jbG91ZC5iaWxsaW5nLlJlY29yZHMaGC5ub2Nsb3VkLmJpbGxpbmcuUmVjb3JkczLVFgoOQmlsbGluZ1NlcnZpY2USVQoKQ3JlYXRlUGxhbhIVLm5vY2xvdWQuYmlsbGluZy5QbGFuGhUubm9jbG91ZC5iaWxsaW5nLlBsYW4iGYLT5JMCEzoBKhoOL2JpbGxpbmcvcGxhbnMSXAoKVXBkYXRlUGxhbhIVLm5vY2xvdWQuYmlsbGluZy5QbGFuGhUubm9jbG91ZC5iaWxsaW5nLlBsYW4iIILT5JMCGjoBKjIVL2JpbGxpbmcvcGxhbnMve3V1aWR9ElYKB0dldFBsYW4SFS5ub2Nsb3VkLmJpbGxpbmcuUGxhbhoVLm5vY2xvdWQuYmlsbGluZy5QbGFuIh2C0+STAhcSFS9iaWxsaW5nL3BsYW5zL3t1dWlkfRJgCglMaXN0UGxhbnMSHC5ub2Nsb3VkLmJpbGxpbmcuTGlzdFJlcXVlc3QaHS5ub2Nsb3VkLmJpbGxpbmcuTGlzdFJlc3BvbnNlIhaC0+STAhASDi9iaWxsaW5nL3BsYW5zEo8BChJMaXN0UGxhbnNJbnN0YW5jZXMSKi5ub2Nsb3VkLmJpbGxpbmcuTGlzdFBsYW5zSW5zdGFuY2VzUmVxdWVzdBorLm5vY2xvdWQuYmlsbGluZy5MaXN0UGxhbnNJbnN0YW5jZXNSZXNwb25zZSIggtPkkwIaEhgvYmlsbGluZy9wbGFucy9pbnN0YW5jZXMSWQoKRGVsZXRlUGxhbhIVLm5vY2xvdWQuYmlsbGluZy5QbGFuGhUubm9jbG91ZC5iaWxsaW5nLlBsYW4iHYLT5JMCFyoVL2JpbGxpbmcvcGxhbnMve3V1aWR9EnEKEUNyZWF0ZVRyYW5zYWN0aW9uEhwubm9jbG91ZC5iaWxsaW5nLlRyYW5zYWN0aW9uGhwubm9jbG91ZC5iaWxsaW5nLlRyYW5zYWN0aW9uIiCC0+STAho6ASoaFS9iaWxsaW5nL3RyYW5zYWN0aW9ucxJ4Cg9HZXRUcmFuc2FjdGlvbnMSJy5ub2Nsb3VkLmJpbGxpbmcuR2V0VHJhbnNhY3Rpb25zUmVxdWVzdBodLm5vY2xvdWQuYmlsbGluZy5UcmFuc2FjdGlvbnMiHYLT5JMCFxIVL2JpbGxpbmcvdHJhbnNhY3Rpb25zEpgBChRHZXRUcmFuc2FjdGlvbnNDb3VudBIsLm5vY2xvdWQuYmlsbGluZy5HZXRUcmFuc2FjdGlvbnNDb3VudFJlcXVlc3QaLS5ub2Nsb3VkLmJpbGxpbmcuR2V0VHJhbnNhY3Rpb25zQ291bnRSZXNwb25zZSIjgtPkkwIdEhsvYmlsbGluZy9jb3VudC90cmFuc2FjdGlvbnMShgEKEVVwZGF0ZVRyYW5zYWN0aW9uEhwubm9jbG91ZC5iaWxsaW5nLlRyYW5zYWN0aW9uGioubm9jbG91ZC5iaWxsaW5nLlVwZGF0ZVRyYW5zYWN0aW9uUmVzcG9uc2UiJ4LT5JMCIToBKjIcL2JpbGxpbmcvdHJhbnNhY3Rpb25zL3t1dWlkfRJqCgpHZXRSZWNvcmRzEhwubm9jbG91ZC5iaWxsaW5nLlRyYW5zYWN0aW9uGhgubm9jbG91ZC5iaWxsaW5nLlJlY29yZHMiJILT5JMCHhIcL2JpbGxpbmcvdHJhbnNhY3Rpb25zL3t1dWlkfRKNAQoTR2V0SW5zdGFuY2VzUmVwb3J0cxIqLm5vY2xvdWQuYmlsbGluZy5HZXRJbnN0YW5jZXNSZXBvcnRSZXF1ZXN0Gisubm9jbG91ZC5iaWxsaW5nLkdldEluc3RhbmNlc1JlcG9ydFJlc3BvbnNlIh2C0+STAhcSFS9iaWxsaW5nL2Jhc2VfcmVwb3J0cxKbAQoYR2V0SW5zdGFuY2VzUmVwb3J0c0NvdW50EjAubm9jbG91ZC5iaWxsaW5nLkdldEluc3RhbmNlc1JlcG9ydHNDb3VudFJlcXVlc3QaKC5ub2Nsb3VkLmJpbGxpbmcuR2V0UmVwb3J0c0NvdW50UmVzcG9uc2UiI4LT5JMCHRIbL2JpbGxpbmcvY291bnQvYmFzZV9yZXBvcnRzEocBChFHZXRSZWNvcmRzUmVwb3J0cxIpLm5vY2xvdWQuYmlsbGluZy5HZXRSZWNvcmRzUmVwb3J0c1JlcXVlc3QaKi5ub2Nsb3VkLmJpbGxpbmcuR2V0UmVjb3Jkc1JlcG9ydHNSZXNwb25zZSIbgtPkkwIVOgEqIhAvYmlsbGluZy9yZXBvcnRzEpUBChZHZXRSZWNvcmRzUmVwb3J0c0NvdW50Ei4ubm9jbG91ZC5iaWxsaW5nLkdldFJlY29yZHNSZXBvcnRzQ291bnRSZXF1ZXN0Gigubm9jbG91ZC5iaWxsaW5nLkdldFJlcG9ydHNDb3VudFJlc3BvbnNlIiGC0+STAhs6ASoiFi9iaWxsaW5nL2NvdW50L3JlcG9ydHMShwEKCVJlcHJvY2VzcxItLm5vY2xvdWQuYmlsbGluZy5SZXByb2Nlc3NUcmFuc2FjdGlvbnNSZXF1ZXN0Gh0ubm9jbG91ZC5iaWxsaW5nLlRyYW5zYWN0aW9ucyIsgtPkkwImIiQvYmlsbGluZy9hY2NvdW50L3thY2NvdW50fS9yZXByb2Nlc3MSbgoNQ3JlYXRlSW52b2ljZRIlLm5vY2xvdWQuYmlsbGluZy5DcmVhdGVJbnZvaWNlUmVxdWVzdBoYLm5vY2xvdWQuYmlsbGluZy5JbnZvaWNlIhyC0+STAhY6ASoaES9iaWxsaW5nL2ludm9pY2VzEmIKCkdldEludm9pY2USGC5ub2Nsb3VkLmJpbGxpbmcuSW52b2ljZRoYLm5vY2xvdWQuYmlsbGluZy5JbnZvaWNlIiCC0+STAhoSGC9iaWxsaW5nL2ludm9pY2VzL3t1dWlkfRJrCgtHZXRJbnZvaWNlcxIjLm5vY2xvdWQuYmlsbGluZy5HZXRJbnZvaWNlc1JlcXVlc3QaGS5ub2Nsb3VkLmJpbGxpbmcuSW52b2ljZXMiHILT5JMCFjoBKiIRL2JpbGxpbmcvaW52b2ljZXMSiwEKEEdldEludm9pY2VzQ291bnQSKC5ub2Nsb3VkLmJpbGxpbmcuR2V0SW52b2ljZXNDb3VudFJlcXVlc3QaKS5ub2Nsb3VkLmJpbGxpbmcuR2V0SW52b2ljZXNDb3VudFJlc3BvbnNlIiKC0+STAhw6ASoiFy9iaWxsaW5nL2NvdW50L2ludm9pY2VzEm4KDVVwZGF0ZUludm9pY2USJS5ub2Nsb3VkLmJpbGxpbmcuVXBkYXRlSW52b2ljZVJlcXVlc3QaGC5ub2Nsb3VkLmJpbGxpbmcuSW52b2ljZSIcgtPkkwIWOgEqMhEvYmlsbGluZy9pbnZvaWNlcxKIAQoTVXBkYXRlSW52b2ljZVN0YXR1cxIrLm5vY2xvdWQuYmlsbGluZy5VcGRhdGVJbnZvaWNlU3RhdHVzUmVxdWVzdBoYLm5vY2xvdWQuYmlsbGluZy5JbnZvaWNlIiqC0+STAiQ6ASoyHy9iaWxsaW5nL2ludm9pY2VzL3t1dWlkfS9zdGF0dXMSxQEKIUdldEludm9pY2VTZXR0aW5nc1RlbXBsYXRlRXhhbXBsZRI5Lm5vY2xvdWQuYmlsbGluZy5HZXRJbnZvaWNlU2V0dGluZ3NUZW1wbGF0ZUV4YW1wbGVSZXF1ZXN0Gjoubm9jbG91ZC5iaWxsaW5nLkdldEludm9pY2VTZXR0aW5nc1RlbXBsYXRlRXhhbXBsZVJlc3BvbnNlIimC0+STAiMSIS9iaWxsaW5nL2ludm9pY2VzL3RlbXBsYXRlZXhhbXBsZTLuCAoPQ3VycmVuY3lTZXJ2aWNlEoEBCg5DcmVhdGVDdXJyZW5jeRImLm5vY2xvdWQuYmlsbGluZy5DcmVhdGVDdXJyZW5jeVJlcXVlc3QaJy5ub2Nsb3VkLmJpbGxpbmcuQ3JlYXRlQ3VycmVuY3lSZXNwb25zZSIegtPkkwIYOgEqIhMvYmlsbGluZy9jdXJyZW5jaWVzEnsKDUdldEN1cnJlbmNpZXMSJS5ub2Nsb3VkLmJpbGxpbmcuR2V0Q3VycmVuY2llc1JlcXVlc3QaJi5ub2Nsb3VkLmJpbGxpbmcuR2V0Q3VycmVuY2llc1Jlc3BvbnNlIhuC0+STAhUSEy9iaWxsaW5nL2N1cnJlbmNpZXMSjAEKD0dldEV4Y2hhbmdlUmF0ZRInLm5vY2xvdWQuYmlsbGluZy5HZXRFeGNoYW5nZVJhdGVSZXF1ZXN0Gigubm9jbG91ZC5iaWxsaW5nLkdldEV4Y2hhbmdlUmF0ZVJlc3BvbnNlIiaC0+STAiASHi9iaWxsaW5nL2N1cnJlbmNpZXMvcmF0ZXMvcmF0ZRKKAQoQR2V0RXhjaGFuZ2VSYXRlcxIoLm5vY2xvdWQuYmlsbGluZy5HZXRFeGNoYW5nZVJhdGVzUmVxdWVzdBopLm5vY2xvdWQuYmlsbGluZy5HZXRFeGNoYW5nZVJhdGVzUmVzcG9uc2UiIYLT5JMCGxIZL2JpbGxpbmcvY3VycmVuY2llcy9yYXRlcxKTAQoSQ3JlYXRlRXhjaGFuZ2VSYXRlEioubm9jbG91ZC5iaWxsaW5nLkNyZWF0ZUV4Y2hhbmdlUmF0ZVJlcXVlc3QaKy5ub2Nsb3VkLmJpbGxpbmcuQ3JlYXRlRXhjaGFuZ2VSYXRlUmVzcG9uc2UiJILT5JMCHjoBKiIZL2JpbGxpbmcvY3VycmVuY2llcy9yYXRlcxKTAQoSVXBkYXRlRXhjaGFuZ2VSYXRlEioubm9jbG91ZC5iaWxsaW5nLlVwZGF0ZUV4Y2hhbmdlUmF0ZVJlcXVlc3QaKy5ub2Nsb3VkLmJpbGxpbmcuVXBkYXRlRXhjaGFuZ2VSYXRlUmVzcG9uc2UiJILT5JMCHjoBKhoZL2JpbGxpbmcvY3VycmVuY2llcy9yYXRlcxKVAQoSRGVsZXRlRXhjaGFuZ2VSYXRlEioubm9jbG91ZC5iaWxsaW5nLkRlbGV0ZUV4Y2hhbmdlUmF0ZVJlcXVlc3QaKy5ub2Nsb3VkLmJpbGxpbmcuRGVsZXRlRXhjaGFuZ2VSYXRlUmVzcG9uc2UiJoLT5JMCICoeL2JpbGxpbmcvY3VycmVuY2llcy9yYXRlcy9yYXRlEnoKB0NvbnZlcnQSIi5ub2Nsb3VkLmJpbGxpbmcuQ29udmVyc2lvblJlcXVlc3QaIy5ub2Nsb3VkLmJpbGxpbmcuQ29udmVyc2lvblJlc3BvbnNlIiaC0+STAiA6ASoiGy9iaWxsaW5nL2N1cnJlbmNpZXMvY29udmVydDKZBwoNQWRkb25zU2VydmljZRJiCgZDcmVhdGUSHS5ub2Nsb3VkLmJpbGxpbmcuYWRkb25zLkFkZG9uGh0ubm9jbG91ZC5iaWxsaW5nLmFkZG9ucy5BZGRvbiIagtPkkwIUOgEqGg8vYmlsbGluZy9hZGRvbnMSdQoKQ3JlYXRlQnVsaxIiLm5vY2xvdWQuYmlsbGluZy5hZGRvbnMuQnVsa0FkZG9ucxoiLm5vY2xvdWQuYmlsbGluZy5hZGRvbnMuQnVsa0FkZG9ucyIfgtPkkwIZOgEqGhQvYmlsbGluZy9idWxrL2FkZG9ucxJpCgZVcGRhdGUSHS5ub2Nsb3VkLmJpbGxpbmcuYWRkb25zLkFkZG9uGh0ubm9jbG91ZC5iaWxsaW5nLmFkZG9ucy5BZGRvbiIhgtPkkwIbOgEqMhYvYmlsbGluZy9hZGRvbnMve3V1aWR9EnUKClVwZGF0ZUJ1bGsSIi5ub2Nsb3VkLmJpbGxpbmcuYWRkb25zLkJ1bGtBZGRvbnMaIi5ub2Nsb3VkLmJpbGxpbmcuYWRkb25zLkJ1bGtBZGRvbnMiH4LT5JMCGToBKjIUL2JpbGxpbmcvYnVsay9hZGRvbnMSYwoDR2V0Eh0ubm9jbG91ZC5iaWxsaW5nLmFkZG9ucy5BZGRvbhodLm5vY2xvdWQuYmlsbGluZy5hZGRvbnMuQWRkb24iHoLT5JMCGBIWL2JpbGxpbmcvYWRkb25zL3t1dWlkfRJ5CgRMaXN0Eikubm9jbG91ZC5iaWxsaW5nLmFkZG9ucy5MaXN0QWRkb25zUmVxdWVzdBoqLm5vY2xvdWQuYmlsbGluZy5hZGRvbnMuTGlzdEFkZG9uc1Jlc3BvbnNlIhqC0+STAhQ6ASoiDy9iaWxsaW5nL2FkZG9ucxKCAQoFQ291bnQSKi5ub2Nsb3VkLmJpbGxpbmcuYWRkb25zLkNvdW50QWRkb25zUmVxdWVzdBorLm5vY2xvdWQuYmlsbGluZy5hZGRvbnMuQ291bnRBZGRvbnNSZXNwb25zZSIggtPkkwIaOgEqIhUvYmlsbGluZy9jb3VudC9hZGRvbnMSZgoGRGVsZXRlEh0ubm9jbG91ZC5iaWxsaW5nLmFkZG9ucy5BZGRvbhodLm5vY2xvdWQuYmlsbGluZy5hZGRvbnMuQWRkb24iHoLT5JMCGCoWL2JpbGxpbmcvYWRkb25zL3t1dWlkfTK3BgoTRGVzY3JpcHRpb25zU2VydmljZRJ5CgZDcmVhdGUSKS5ub2Nsb3VkLmJpbGxpbmcuZGVzY3JpcHRpb25zLkRlc2NyaXB0aW9uGikubm9jbG91ZC5iaWxsaW5nLmRlc2NyaXB0aW9ucy5EZXNjcmlwdGlvbiIZgtPkkwITOgEqGg4vYmlsbGluZy9kZXNjcxKAAQoGVXBkYXRlEikubm9jbG91ZC5iaWxsaW5nLmRlc2NyaXB0aW9ucy5EZXNjcmlwdGlvbhopLm5vY2xvdWQuYmlsbGluZy5kZXNjcmlwdGlvbnMuRGVzY3JpcHRpb24iIILT5JMCGjoBKjIVL2JpbGxpbmcvZGVzY3Mve3V1aWR9EnoKA0dldBIpLm5vY2xvdWQuYmlsbGluZy5kZXNjcmlwdGlvbnMuRGVzY3JpcHRpb24aKS5ub2Nsb3VkLmJpbGxpbmcuZGVzY3JpcHRpb25zLkRlc2NyaXB0aW9uIh2C0+STAhcSFS9iaWxsaW5nL2Rlc2NzL3t1dWlkfRKNAQoETGlzdBI1Lm5vY2xvdWQuYmlsbGluZy5kZXNjcmlwdGlvbnMuTGlzdERlc2NyaXB0aW9uc1JlcXVlc3QaNi5ub2Nsb3VkLmJpbGxpbmcuZGVzY3JpcHRpb25zLkxpc3REZXNjcmlwdGlvbnNSZXNwb25zZSIWgtPkkwIQEg4vYmlsbGluZy9kZXNjcxKWAQoFQ291bnQSNi5ub2Nsb3VkLmJpbGxpbmcuZGVzY3JpcHRpb25zLkNvdW50RGVzY3JpcHRpb25zUmVxdWVzdBo3Lm5vY2xvdWQuYmlsbGluZy5kZXNjcmlwdGlvbnMuQ291bnREZXNjcmlwdGlvbnNSZXNwb25zZSIcgtPkkwIWEhQvYmlsbGluZy9jb3VudC9kZXNjcxJ9CgZEZWxldGUSKS5ub2Nsb3VkLmJpbGxpbmcuZGVzY3JpcHRpb25zLkRlc2NyaXB0aW9uGikubm9jbG91ZC5iaWxsaW5nLmRlc2NyaXB0aW9ucy5EZXNjcmlwdGlvbiIdgtPkkwIXKhUvYmlsbGluZy9kZXNjcy97dXVpZH1iBnByb3RvMw", [file_ansible_ansible, file_billing_addons_addons, file_billing_descriptions_descriptions, file_google_api_annotations, file_google_protobuf_struct, file_states_states, file_statuses_statuses]);

/**
 * Describes the message nocloud.billing.FeeRange.
 * Use `create(FeeRangeSchema)` to create a new message.
 */
export const FeeRangeSchema = /*@__PURE__*/
  messageDesc(file_billing_billing, 0);

/**
 * Describes the message nocloud.billing.Fee.
 * Use `create(FeeSchema)` to create a new message.
 */
export const FeeSchema = /*@__PURE__*/
  messageDesc(file_billing_billing, 1);

/**
 * Describes the message nocloud.billing.Plan.
 * Use `create(PlanSchema)` to create a new message.
 */
export const PlanSchema = /*@__PURE__*/
  messageDesc(file_billing_billing, 2);

/**
 * Describes the message nocloud.billing.ListRequest.
 * Use `create(ListRequestSchema)` to create a new message.
 */
export const ListRequestSchema = /*@__PURE__*/
  messageDesc(file_billing_billing, 3);

/**
 * Describes the message nocloud.billing.ListResponse.
 * Use `create(ListResponseSchema)` to create a new message.
 */
export const ListResponseSchema = /*@__PURE__*/
  messageDesc(file_billing_billing, 4);

/**
 * Describes the message nocloud.billing.ListPlansInstancesRequest.
 * Use `create(ListPlansInstancesRequestSchema)` to create a new message.
 */
export const ListPlansInstancesRequestSchema = /*@__PURE__*/
  messageDesc(file_billing_billing, 5);

/**
 * Describes the message nocloud.billing.ListPlansInstancesResponse.
 * Use `create(ListPlansInstancesResponseSchema)` to create a new message.
 */
export const ListPlansInstancesResponseSchema = /*@__PURE__*/
  messageDesc(file_billing_billing, 6);

/**
 * Describes the message nocloud.billing.ResourceConf.
 * Use `create(ResourceConfSchema)` to create a new message.
 */
export const ResourceConfSchema = /*@__PURE__*/
  messageDesc(file_billing_billing, 7);

/**
 * Describes the message nocloud.billing.Product.
 * Use `create(ProductSchema)` to create a new message.
 */
export const ProductSchema = /*@__PURE__*/
  messageDesc(file_billing_billing, 8);

/**
 * Describes the message nocloud.billing.Transaction.
 * Use `create(TransactionSchema)` to create a new message.
 */
export const TransactionSchema = /*@__PURE__*/
  messageDesc(file_billing_billing, 9);

/**
 * Describes the message nocloud.billing.Item.
 * Use `create(ItemSchema)` to create a new message.
 */
export const ItemSchema = /*@__PURE__*/
  messageDesc(file_billing_billing, 10);

/**
 * Describes the message nocloud.billing.Invoice.
 * Use `create(InvoiceSchema)` to create a new message.
 */
export const InvoiceSchema = /*@__PURE__*/
  messageDesc(file_billing_billing, 11);

/**
 * Describes the message nocloud.billing.Invoices.
 * Use `create(InvoicesSchema)` to create a new message.
 */
export const InvoicesSchema = /*@__PURE__*/
  messageDesc(file_billing_billing, 12);

/**
 * Describes the message nocloud.billing.Transactions.
 * Use `create(TransactionsSchema)` to create a new message.
 */
export const TransactionsSchema = /*@__PURE__*/
  messageDesc(file_billing_billing, 13);

/**
 * Describes the message nocloud.billing.Record.
 * Use `create(RecordSchema)` to create a new message.
 */
export const RecordSchema = /*@__PURE__*/
  messageDesc(file_billing_billing, 14);

/**
 * Describes the message nocloud.billing.Records.
 * Use `create(RecordsSchema)` to create a new message.
 */
export const RecordsSchema = /*@__PURE__*/
  messageDesc(file_billing_billing, 15);

/**
 * Describes the message nocloud.billing.GetActiveRequest.
 * Use `create(GetActiveRequestSchema)` to create a new message.
 */
export const GetActiveRequestSchema = /*@__PURE__*/
  messageDesc(file_billing_billing, 16);

/**
 * Describes the message nocloud.billing.GetTransactionsRequest.
 * Use `create(GetTransactionsRequestSchema)` to create a new message.
 */
export const GetTransactionsRequestSchema = /*@__PURE__*/
  messageDesc(file_billing_billing, 17);

/**
 * Describes the message nocloud.billing.ReprocessTransactionsRequest.
 * Use `create(ReprocessTransactionsRequestSchema)` to create a new message.
 */
export const ReprocessTransactionsRequestSchema = /*@__PURE__*/
  messageDesc(file_billing_billing, 18);

/**
 * Describes the message nocloud.billing.GetTransactionsCountRequest.
 * Use `create(GetTransactionsCountRequestSchema)` to create a new message.
 */
export const GetTransactionsCountRequestSchema = /*@__PURE__*/
  messageDesc(file_billing_billing, 19);

/**
 * Describes the message nocloud.billing.GetTransactionsCountResponse.
 * Use `create(GetTransactionsCountResponseSchema)` to create a new message.
 */
export const GetTransactionsCountResponseSchema = /*@__PURE__*/
  messageDesc(file_billing_billing, 20);

/**
 * Describes the message nocloud.billing.UpdateTransactionRequest.
 * Use `create(UpdateTransactionRequestSchema)` to create a new message.
 */
export const UpdateTransactionRequestSchema = /*@__PURE__*/
  messageDesc(file_billing_billing, 21);

/**
 * Describes the message nocloud.billing.CreateInvoiceRequest.
 * Use `create(CreateInvoiceRequestSchema)` to create a new message.
 */
export const CreateInvoiceRequestSchema = /*@__PURE__*/
  messageDesc(file_billing_billing, 22);

/**
 * Describes the message nocloud.billing.UpdateInvoiceRequest.
 * Use `create(UpdateInvoiceRequestSchema)` to create a new message.
 */
export const UpdateInvoiceRequestSchema = /*@__PURE__*/
  messageDesc(file_billing_billing, 23);

/**
 * Describes the message nocloud.billing.UpdateInvoiceStatusRequest.
 * Use `create(UpdateInvoiceStatusRequestSchema)` to create a new message.
 */
export const UpdateInvoiceStatusRequestSchema = /*@__PURE__*/
  messageDesc(file_billing_billing, 24);

/**
 * Describes the message nocloud.billing.UpdateInvoiceStatusRequest.Params.
 * Use `create(UpdateInvoiceStatusRequest_ParamsSchema)` to create a new message.
 */
export const UpdateInvoiceStatusRequest_ParamsSchema = /*@__PURE__*/
  messageDesc(file_billing_billing, 24, 0);

/**
 * Describes the message nocloud.billing.GetInvoicesCountRequest.
 * Use `create(GetInvoicesCountRequestSchema)` to create a new message.
 */
export const GetInvoicesCountRequestSchema = /*@__PURE__*/
  messageDesc(file_billing_billing, 25);

/**
 * Describes the message nocloud.billing.GetInvoicesRequest.
 * Use `create(GetInvoicesRequestSchema)` to create a new message.
 */
export const GetInvoicesRequestSchema = /*@__PURE__*/
  messageDesc(file_billing_billing, 26);

/**
 * Describes the message nocloud.billing.GetInvoicesCountResponse.
 * Use `create(GetInvoicesCountResponseSchema)` to create a new message.
 */
export const GetInvoicesCountResponseSchema = /*@__PURE__*/
  messageDesc(file_billing_billing, 27);

/**
 * Describes the message nocloud.billing.UpdateTransactionResponse.
 * Use `create(UpdateTransactionResponseSchema)` to create a new message.
 */
export const UpdateTransactionResponseSchema = /*@__PURE__*/
  messageDesc(file_billing_billing, 28);

/**
 * Describes the message nocloud.billing.CostEstimation.
 * Use `create(CostEstimationSchema)` to create a new message.
 */
export const CostEstimationSchema = /*@__PURE__*/
  messageDesc(file_billing_billing, 29);

/**
 * Describes the message nocloud.billing.GetInstancesReportRequest.
 * Use `create(GetInstancesReportRequestSchema)` to create a new message.
 */
export const GetInstancesReportRequestSchema = /*@__PURE__*/
  messageDesc(file_billing_billing, 30);

/**
 * Describes the message nocloud.billing.InstanceReport.
 * Use `create(InstanceReportSchema)` to create a new message.
 */
export const InstanceReportSchema = /*@__PURE__*/
  messageDesc(file_billing_billing, 31);

/**
 * Describes the message nocloud.billing.GetInstancesReportResponse.
 * Use `create(GetInstancesReportResponseSchema)` to create a new message.
 */
export const GetInstancesReportResponseSchema = /*@__PURE__*/
  messageDesc(file_billing_billing, 32);

/**
 * Describes the message nocloud.billing.GetRecordsReportsRequest.
 * Use `create(GetRecordsReportsRequestSchema)` to create a new message.
 */
export const GetRecordsReportsRequestSchema = /*@__PURE__*/
  messageDesc(file_billing_billing, 33);

/**
 * Describes the message nocloud.billing.GetRecordsReportsResponse.
 * Use `create(GetRecordsReportsResponseSchema)` to create a new message.
 */
export const GetRecordsReportsResponseSchema = /*@__PURE__*/
  messageDesc(file_billing_billing, 34);

/**
 * Describes the message nocloud.billing.GetInstancesReportsCountRequest.
 * Use `create(GetInstancesReportsCountRequestSchema)` to create a new message.
 */
export const GetInstancesReportsCountRequestSchema = /*@__PURE__*/
  messageDesc(file_billing_billing, 35);

/**
 * Describes the message nocloud.billing.GetRecordsReportsCountRequest.
 * Use `create(GetRecordsReportsCountRequestSchema)` to create a new message.
 */
export const GetRecordsReportsCountRequestSchema = /*@__PURE__*/
  messageDesc(file_billing_billing, 36);

/**
 * Describes the message nocloud.billing.GetReportsCountResponse.
 * Use `create(GetReportsCountResponseSchema)` to create a new message.
 */
export const GetReportsCountResponseSchema = /*@__PURE__*/
  messageDesc(file_billing_billing, 37);

/**
 * Describes the message nocloud.billing.GetInvoiceSettingsTemplateExampleRequest.
 * Use `create(GetInvoiceSettingsTemplateExampleRequestSchema)` to create a new message.
 */
export const GetInvoiceSettingsTemplateExampleRequestSchema = /*@__PURE__*/
  messageDesc(file_billing_billing, 38);

/**
 * Describes the message nocloud.billing.GetInvoiceSettingsTemplateExampleResponse.
 * Use `create(GetInvoiceSettingsTemplateExampleResponseSchema)` to create a new message.
 */
export const GetInvoiceSettingsTemplateExampleResponseSchema = /*@__PURE__*/
  messageDesc(file_billing_billing, 39);

/**
 * Describes the message nocloud.billing.Currency.
 * Use `create(CurrencySchema)` to create a new message.
 */
export const CurrencySchema = /*@__PURE__*/
  messageDesc(file_billing_billing, 40);

/**
 * Describes the message nocloud.billing.CreateCurrencyRequest.
 * Use `create(CreateCurrencyRequestSchema)` to create a new message.
 */
export const CreateCurrencyRequestSchema = /*@__PURE__*/
  messageDesc(file_billing_billing, 41);

/**
 * Describes the message nocloud.billing.CreateCurrencyResponse.
 * Use `create(CreateCurrencyResponseSchema)` to create a new message.
 */
export const CreateCurrencyResponseSchema = /*@__PURE__*/
  messageDesc(file_billing_billing, 42);

/**
 * Describes the message nocloud.billing.CreateExchangeRateRequest.
 * Use `create(CreateExchangeRateRequestSchema)` to create a new message.
 */
export const CreateExchangeRateRequestSchema = /*@__PURE__*/
  messageDesc(file_billing_billing, 43);

/**
 * Describes the message nocloud.billing.CreateExchangeRateResponse.
 * Use `create(CreateExchangeRateResponseSchema)` to create a new message.
 */
export const CreateExchangeRateResponseSchema = /*@__PURE__*/
  messageDesc(file_billing_billing, 44);

/**
 * Describes the message nocloud.billing.UpdateExchangeRateRequest.
 * Use `create(UpdateExchangeRateRequestSchema)` to create a new message.
 */
export const UpdateExchangeRateRequestSchema = /*@__PURE__*/
  messageDesc(file_billing_billing, 45);

/**
 * Describes the message nocloud.billing.UpdateExchangeRateResponse.
 * Use `create(UpdateExchangeRateResponseSchema)` to create a new message.
 */
export const UpdateExchangeRateResponseSchema = /*@__PURE__*/
  messageDesc(file_billing_billing, 46);

/**
 * Describes the message nocloud.billing.DeleteExchangeRateRequest.
 * Use `create(DeleteExchangeRateRequestSchema)` to create a new message.
 */
export const DeleteExchangeRateRequestSchema = /*@__PURE__*/
  messageDesc(file_billing_billing, 47);

/**
 * Describes the message nocloud.billing.DeleteExchangeRateResponse.
 * Use `create(DeleteExchangeRateResponseSchema)` to create a new message.
 */
export const DeleteExchangeRateResponseSchema = /*@__PURE__*/
  messageDesc(file_billing_billing, 48);

/**
 * Describes the message nocloud.billing.GetCurrenciesRequest.
 * Use `create(GetCurrenciesRequestSchema)` to create a new message.
 */
export const GetCurrenciesRequestSchema = /*@__PURE__*/
  messageDesc(file_billing_billing, 49);

/**
 * Describes the message nocloud.billing.GetCurrenciesResponse.
 * Use `create(GetCurrenciesResponseSchema)` to create a new message.
 */
export const GetCurrenciesResponseSchema = /*@__PURE__*/
  messageDesc(file_billing_billing, 50);

/**
 * Describes the message nocloud.billing.GetExchangeRateRequest.
 * Use `create(GetExchangeRateRequestSchema)` to create a new message.
 */
export const GetExchangeRateRequestSchema = /*@__PURE__*/
  messageDesc(file_billing_billing, 51);

/**
 * Describes the message nocloud.billing.GetExchangeRatesRequest.
 * Use `create(GetExchangeRatesRequestSchema)` to create a new message.
 */
export const GetExchangeRatesRequestSchema = /*@__PURE__*/
  messageDesc(file_billing_billing, 52);

/**
 * Describes the message nocloud.billing.GetExchangeRateResponse.
 * Use `create(GetExchangeRateResponseSchema)` to create a new message.
 */
export const GetExchangeRateResponseSchema = /*@__PURE__*/
  messageDesc(file_billing_billing, 53);

/**
 * Describes the message nocloud.billing.GetExchangeRatesResponse.
 * Use `create(GetExchangeRatesResponseSchema)` to create a new message.
 */
export const GetExchangeRatesResponseSchema = /*@__PURE__*/
  messageDesc(file_billing_billing, 54);

/**
 * Describes the message nocloud.billing.ConversionRequest.
 * Use `create(ConversionRequestSchema)` to create a new message.
 */
export const ConversionRequestSchema = /*@__PURE__*/
  messageDesc(file_billing_billing, 55);

/**
 * Describes the message nocloud.billing.ConversionResponse.
 * Use `create(ConversionResponseSchema)` to create a new message.
 */
export const ConversionResponseSchema = /*@__PURE__*/
  messageDesc(file_billing_billing, 56);

/**
 * Describes the enum nocloud.billing.PlanKind.
 */
export const PlanKindSchema = /*@__PURE__*/
  enumDesc(file_billing_billing, 0);

/**
 * @generated from enum nocloud.billing.PlanKind
 */
export const PlanKind = /*@__PURE__*/
  tsEnum(PlanKindSchema);

/**
 * Describes the enum nocloud.billing.Round.
 */
export const RoundSchema = /*@__PURE__*/
  enumDesc(file_billing_billing, 1);

/**
 * @generated from enum nocloud.billing.Round
 */
export const Round = /*@__PURE__*/
  tsEnum(RoundSchema);

/**
 * Describes the enum nocloud.billing.Kind.
 */
export const KindSchema = /*@__PURE__*/
  enumDesc(file_billing_billing, 2);

/**
 * @generated from enum nocloud.billing.Kind
 */
export const Kind = /*@__PURE__*/
  tsEnum(KindSchema);

/**
 * Describes the enum nocloud.billing.PeriodKind.
 */
export const PeriodKindSchema = /*@__PURE__*/
  enumDesc(file_billing_billing, 3);

/**
 * @generated from enum nocloud.billing.PeriodKind
 */
export const PeriodKind = /*@__PURE__*/
  tsEnum(PeriodKindSchema);

/**
 * Describes the enum nocloud.billing.Priority.
 */
export const PrioritySchema = /*@__PURE__*/
  enumDesc(file_billing_billing, 4);

/**
 * @generated from enum nocloud.billing.Priority
 */
export const Priority = /*@__PURE__*/
  tsEnum(PrioritySchema);

/**
 * Describes the enum nocloud.billing.BillingStatus.
 */
export const BillingStatusSchema = /*@__PURE__*/
  enumDesc(file_billing_billing, 5);

/**
 * @generated from enum nocloud.billing.BillingStatus
 */
export const BillingStatus = /*@__PURE__*/
  tsEnum(BillingStatusSchema);

/**
 * Describes the enum nocloud.billing.ActionType.
 */
export const ActionTypeSchema = /*@__PURE__*/
  enumDesc(file_billing_billing, 6);

/**
 * @generated from enum nocloud.billing.ActionType
 */
export const ActionType = /*@__PURE__*/
  tsEnum(ActionTypeSchema);

/**
 * @generated from service nocloud.billing.RecordsService
 */
export const RecordsService = /*@__PURE__*/
  serviceDesc(file_billing_billing, 0);

/**
 * @generated from service nocloud.billing.BillingService
 */
export const BillingService = /*@__PURE__*/
  serviceDesc(file_billing_billing, 1);

/**
 * @generated from service nocloud.billing.CurrencyService
 */
export const CurrencyService = /*@__PURE__*/
  serviceDesc(file_billing_billing, 2);

/**
 * @generated from service nocloud.billing.AddonsService
 */
export const AddonsService = /*@__PURE__*/
  serviceDesc(file_billing_billing, 3);

/**
 * @generated from service nocloud.billing.DescriptionsService
 */
export const DescriptionsService = /*@__PURE__*/
  serviceDesc(file_billing_billing, 4);

