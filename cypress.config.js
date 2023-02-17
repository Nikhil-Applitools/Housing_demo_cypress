const { defineConfig } = require('cypress')

module.exports = defineConfig({
  video: false,
  eyesBrowser:
    '[{"width":1200,"height":600,"name":"chrome"},{"width":800,"height":600,"name":"chrome"},{"width":2560,"height":1440,"name":"chrome"},{"width":900,"height":800,"name":"chrome"},{"width":1024,"height":768,"name":"chrome-one-version-back"},{"width":700,"height":500,"name":"firefox"},{"width":2560,"height":1440,"name":"firefox"},{"width":600,"height":800,"name":"firefox"},{"width":1300,"height":1200,"name":"firefox-one-version-back"},{"width":1300,"height":1200,"name":"firefox"},{"width":1024,"height":768,"name":"edgechromium"},{"width":2560,"height":1440,"name":"edgechromium"},{"width":900,"height":800,"name":"edgechromium"},{"width":800,"height":600,"name":"safari"},{"width":1300,"height":1200,"name":"safari-one-version-back"},{"width":1024,"height":768,"name":"safari"},{"width":2560,"height":1440,"name":"safari"},{"width":900,"height":800,"name":"safari"},{"deviceName":"iPhone XR","screenOrientation":"portrait"},{"deviceName":"Pixel 2","screenOrientation":"portrait"}]',
  eyesFailCypressOnDiff: true,
  eyesDisableBrowserFetching: false,
  eyesTestConcurrency: 20,
  appliConfFile: {
    testConcurrency: 20,
    apiKey: 'qC2ZHcrStbkhtdWNEEEP2yO4106AnmGCrP3b60jetycrw110',
    isDisabled: true,
    browser: [
      {
        width: 1200,
        height: 600,
        name: 'chrome',
      },
      {
        width: 2560,
        height: 1440,
        name: 'chrome',
      },
      {
        width: 1024,
        height: 768,
        name: 'safari',
      },
      {
        deviceName: 'iPhone XR',
        screenOrientation: 'portrait',
      },
      {
        deviceName: 'Pixel 2',
        screenOrientation: 'portrait',
      },
    ],
    batchName: 'Housing.com',
    showLogs: true,
  },
  eyesIsGlobalHooksSupported: false,
  eyesPort: 49185,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
  },
})
