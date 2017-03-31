const STATIC_PATH = '/static'

var config = {
  local: {
    mode: 'local',
    port: '3000'
  },
  staging: {
    mode: 'staging',
    port: 4000
  },
  production: {
    mode: 'production',
    port: 5000
  }
}

var PORT_VAL = (mode) => {
  return config[mode || process.argv[2] || 'local'] || config.local
}

module.exports = {
  getPort: PORT_VAL,
  STATIC_PATH: STATIC_PATH
}
