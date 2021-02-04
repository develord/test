module.exports = {
  apps: [
    {
      name: 'bus front 3000',
      exec_mode: 'cluster',
      instances: '1', // Or a number of instances
      script: 'nuxt start',
      args: '',
      env: {
        'NODE_ENV': 'production',
        'NUXT_TELEMETRY_DISABLED': 1
      }
    }
  ]
}
