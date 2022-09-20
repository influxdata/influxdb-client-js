import {InfluxDB} from '@influxdata/influxdb-client'
import {APIBase, RequestOptions} from '../APIBase'

export interface GetDebugPprofAllProfilesRequest {
  /** Collects and returns CPU profiling data for the specified [duration](https://docs.influxdata.com/influxdb/v2.3/reference/glossary/#duration).
   */
  cpu?: string
}
export interface GetDebugPprofAllocsRequest {
  /** - `0`: (Default) Return the report as a gzip-compressed protocol buffer.
- `1`: Return a response body with the report formatted as human-readable text.
  The report contains comments that translate addresses to function names and line numbers for debugging.

`debug=1` is mutually exclusive with the `seconds` query parameter.
 */
  debug?: number
  /** Number of seconds to collect statistics.

`seconds` is mutually exclusive with `debug=1`.
 */
  seconds?: string
}
export interface GetDebugPprofBlockRequest {
  /** - `0`: (Default) Return the report as a gzip-compressed protocol buffer.
- `1`: Return a response body with the report formatted as human-readable text.
  The report contains comments that translate addresses to function names and line numbers for debugging.

`debug=1` is mutually exclusive with the `seconds` query parameter.
 */
  debug?: number
  /** Number of seconds to collect statistics.

`seconds` is mutually exclusive with `debug=1`.
 */
  seconds?: string
}
export interface GetDebugPprofCmdlineRequest {}
export interface GetDebugPprofGoroutineRequest {
  /** - `0`: (Default) Return the report as a gzip-compressed protocol buffer.
- `1`: Return a response body with the report formatted as
       human-readable text with comments that translate addresses to
       function names and line numbers for debugging.

`debug=1` is mutually exclusive with the `seconds` query parameter.
 */
  debug?: number
  /** Number of seconds to collect statistics.

`seconds` is mutually exclusive with `debug=1`.
 */
  seconds?: string
}
export interface GetDebugPprofHeapRequest {
  /** - `0`: (Default) Return the report as a gzip-compressed protocol buffer.
- `1`: Return a response body with the report formatted as human-readable text.
  The report contains comments that translate addresses to function names and line numbers for debugging.

`debug=1` is mutually exclusive with the `seconds` query parameter.
 */
  debug?: number
  /** Number of seconds to collect statistics.

`seconds` is mutually exclusive with `debug=1`.
 */
  seconds?: string
  /** - `0`: (Default) don't force garbage collection before sampling.
- `1`: Force garbage collection before sampling.
 */
  gc?: number
}
export interface GetDebugPprofMutexRequest {
  /** - `0`: (Default) Return the report as a gzip-compressed protocol buffer.
- `1`: Return a response body with the report formatted as human-readable text.
  The report contains comments that translate addresses to function names and line numbers for debugging.

`debug=1` is mutually exclusive with the `seconds` query parameter.
 */
  debug?: number
  /** Number of seconds to collect statistics.

`seconds` is mutually exclusive with `debug=1`.
 */
  seconds?: string
}
export interface GetDebugPprofProfileRequest {
  /** Number of seconds to collect profile data. Default is `30` seconds. */
  seconds?: string
}
export interface GetDebugPprofThreadCreateRequest {
  /** - `0`: (Default) Return the report as a gzip-compressed protocol buffer.
- `1`: Return a response body with the report formatted as human-readable text.
  The report contains comments that translate addresses to function names and line numbers for debugging.

`debug=1` is mutually exclusive with the `seconds` query parameter.
 */
  debug?: number
  /** Number of seconds to collect statistics.

`seconds` is mutually exclusive with `debug=1`.
 */
  seconds?: string
}
export interface GetDebugPprofTraceRequest {
  /** Number of seconds to collect profile data. */
  seconds?: string
}
/**
 * Debug API
 */
export class DebugAPI {
  // internal
  private base: APIBase

  /**
   * Creates DebugAPI
   * @param influxDB - an instance that knows how to communicate with InfluxDB server
   */
  constructor(influxDB: InfluxDB) {
    this.base = new APIBase(influxDB)
  }
  /**
   * Retrieve all runtime profiles.
   * See {@link https://docs.influxdata.com/influxdb/v2.4/api/#operation/GetDebugPprofAllProfiles }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  getDebugPprofAllProfiles(
    request?: GetDebugPprofAllProfilesRequest,
    requestOptions?: RequestOptions
  ): Promise<string> {
    return this.base.request(
      'GET',
      `/api/v2/debug/pprof/all${this.base.queryString(request, ['cpu'])}`,
      request,
      requestOptions
    )
  }
  /**
   * Retrieve the memory allocations runtime profile.
   * See {@link https://docs.influxdata.com/influxdb/v2.4/api/#operation/GetDebugPprofAllocs }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  getDebugPprofAllocs(
    request?: GetDebugPprofAllocsRequest,
    requestOptions?: RequestOptions
  ): Promise<string> {
    return this.base.request(
      'GET',
      `/api/v2/debug/pprof/allocs${this.base.queryString(request, [
        'debug',
        'seconds',
      ])}`,
      request,
      requestOptions
    )
  }
  /**
   * Retrieve the block runtime profile.
   * See {@link https://docs.influxdata.com/influxdb/v2.4/api/#operation/GetDebugPprofBlock }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  getDebugPprofBlock(
    request?: GetDebugPprofBlockRequest,
    requestOptions?: RequestOptions
  ): Promise<string> {
    return this.base.request(
      'GET',
      `/api/v2/debug/pprof/block${this.base.queryString(request, [
        'debug',
        'seconds',
      ])}`,
      request,
      requestOptions
    )
  }
  /**
   * Retrieve the command line invocation.
   * See {@link https://docs.influxdata.com/influxdb/v2.4/api/#operation/GetDebugPprofCmdline }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  getDebugPprofCmdline(
    request?: GetDebugPprofCmdlineRequest,
    requestOptions?: RequestOptions
  ): Promise<string> {
    return this.base.request(
      'GET',
      `/api/v2/debug/pprof/cmdline`,
      request,
      requestOptions
    )
  }
  /**
   * Retrieve the goroutines runtime profile.
   * See {@link https://docs.influxdata.com/influxdb/v2.4/api/#operation/GetDebugPprofGoroutine }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  getDebugPprofGoroutine(
    request?: GetDebugPprofGoroutineRequest,
    requestOptions?: RequestOptions
  ): Promise<string> {
    return this.base.request(
      'GET',
      `/api/v2/debug/pprof/goroutine${this.base.queryString(request, [
        'debug',
        'seconds',
      ])}`,
      request,
      requestOptions
    )
  }
  /**
   * Retrieve the heap runtime profile.
   * See {@link https://docs.influxdata.com/influxdb/v2.4/api/#operation/GetDebugPprofHeap }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  getDebugPprofHeap(
    request?: GetDebugPprofHeapRequest,
    requestOptions?: RequestOptions
  ): Promise<string> {
    return this.base.request(
      'GET',
      `/api/v2/debug/pprof/heap${this.base.queryString(request, [
        'debug',
        'seconds',
        'gc',
      ])}`,
      request,
      requestOptions
    )
  }
  /**
   * Retrieve the mutual exclusion (mutex) runtime profile.
   * See {@link https://docs.influxdata.com/influxdb/v2.4/api/#operation/GetDebugPprofMutex }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  getDebugPprofMutex(
    request?: GetDebugPprofMutexRequest,
    requestOptions?: RequestOptions
  ): Promise<string> {
    return this.base.request(
      'GET',
      `/api/v2/debug/pprof/mutex${this.base.queryString(request, [
        'debug',
        'seconds',
      ])}`,
      request,
      requestOptions
    )
  }
  /**
   * Retrieve the CPU runtime profile.
   * See {@link https://docs.influxdata.com/influxdb/v2.4/api/#operation/GetDebugPprofProfile }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  getDebugPprofProfile(
    request?: GetDebugPprofProfileRequest,
    requestOptions?: RequestOptions
  ): Promise<string> {
    return this.base.request(
      'GET',
      `/api/v2/debug/pprof/profile${this.base.queryString(request, [
        'seconds',
      ])}`,
      request,
      requestOptions
    )
  }
  /**
   * Retrieve the threadcreate runtime profile.
   * See {@link https://docs.influxdata.com/influxdb/v2.4/api/#operation/GetDebugPprofThreadCreate }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  getDebugPprofThreadCreate(
    request?: GetDebugPprofThreadCreateRequest,
    requestOptions?: RequestOptions
  ): Promise<string> {
    return this.base.request(
      'GET',
      `/api/v2/debug/pprof/threadcreate${this.base.queryString(request, [
        'debug',
        'seconds',
      ])}`,
      request,
      requestOptions
    )
  }
  /**
   * Retrieve the runtime execution trace.
   * See {@link https://docs.influxdata.com/influxdb/v2.4/api/#operation/GetDebugPprofTrace }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  getDebugPprofTrace(
    request?: GetDebugPprofTraceRequest,
    requestOptions?: RequestOptions
  ): Promise<string> {
    return this.base.request(
      'GET',
      `/api/v2/debug/pprof/trace${this.base.queryString(request, ['seconds'])}`,
      request,
      requestOptions
    )
  }
}
