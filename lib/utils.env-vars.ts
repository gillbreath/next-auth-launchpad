export function insecureCredentialsProviderAllowedForTesting() {
  return (
    process.env.INSECURE_TESTING_PROVIDER_ON === "true" &&
    process.env.NODE_ENV === "development"
  );
}
