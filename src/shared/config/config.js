const STATIC_PATH = '/static'
const STATIC_DIST = '/dist'
const WDS_PORT = 7000

const config = {
  local: {
    mode: 'local',
    port: 3000,
  },
  staging: {
    mode: 'staging',
    port: 4000,
  },
  production: {
    mode: 'production',
    port: 5000,
  },
}

const getPort = (mode) => {
  const port = config[mode || process.argv[2] || 'local'] || config.local

  return port
}

module.exports = {
  getPort,
  STATIC_PATH,
  WDS_PORT,
  STATIC_DIST,
}
