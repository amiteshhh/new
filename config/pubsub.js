// config/pubsub.js
/*error: Error: The hook `pubsub` is taking too long to load.
Make sure it is triggering its `initialize()` callback, or else set `sails.config.pubsub._hookTimeout to a higher value (current
ly 20000)
    at Timeout.tooLong [as _onTimeout] (C:\Users\amitesh\AppData\Roaming\npm\node_modules\sails\lib\app\private\loadHooks.js:85:
21)*/
module.exports.pubsub  = {
  _hookTimeout: 3000000 // I used 60 seconds as my new timeout
};