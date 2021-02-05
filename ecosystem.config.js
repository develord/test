module.exports = {
    apps: [
      {
        name: 'BusWorld 3000',
        exec_mode: 'cluster',
        instances: '1', // Or a number of instances
        script: './node_modules/nuxt/bin/nuxt.js',
        args: 'start',
        env: {
          'NODE_ENV': 'production',
          'NUXT_TELEMETRY_DISABLED': 1
        }
      }
    ]
  }
  