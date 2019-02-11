// create and export configuration variables



const environments = {};


// Staging (default) environment
environments.staging = {
    envName: 'staging',
    port: 3000,
    https: 3001
}

// Production environment
environments.production = {
    envName: 'production',
    port: 8000,
    https: 8001
}

// Determine which environment to export
let givenEnv = process.env.NODE_ENV ? process.env.NODE_ENV.toLowerCase() : '';
module.exports = environments[givenEnv] ? environments[givenEnv] : environments.staging;