// create and export configuration variables
const environments = {};

// Staging (default) environment
environments.staging = {
    envName: 'staging',
    http_port: 3000,
    https_port: 3001
}

// Production environment
environments.production = {
    envName: 'production',
    http_port: 8000,
    https_port: 8001
}

// Determine which environment to export
let givenEnv = process.env.NODE_ENV ? process.env.NODE_ENV.toLowerCase() : '';

// Export the given environment or staging
module.exports = environments[givenEnv] ? environments[givenEnv] : environments.staging;