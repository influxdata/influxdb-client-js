/**
 * See <a href="https://v2.docs.influxdata.com/v2.0/api/#tag/Setup">https://v2.docs.influxdata.com/v2.0/api/#tag/Setup</a>.
 */
export default interface SetupApi {
  /**
   * Is on-boarding still allowed.
   * @return false if it was already performed
   */
  isOnboarding(): Promise<boolean>
  /**
   * Setups a (new) influx DB instance.
   * @param request default user and password, organization, bucket
   * @param token optional authentication token to be used with that user
   * @return information about the setup process (cast to OnboardingResponse from the generated api) to know more
   */
  setup(request: {
    username: string
    password: string
    org: string
    bucket: string
    retentionPeriodHrs?: number
    token?: string
  }): Promise<any>
}
