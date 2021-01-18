module.exports = {
  apps: [
    {
      name: 'BackOffice 8000',
      exec_mode: 'cluster',
      instances: '1', // Or a number of instances
      script: './server/index.js',
      args: '',
      env: {
        'NODE_ENV': 'production',
        'NUXT_TELEMETRY_DISABLED': 1
      }
    }
  ]
}
