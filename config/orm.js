// config/orm.js
/*error: Error: The hook `orm` is taking too long to load.
Make sure it is triggering its `initialize()` callback, or else set `sails.config.orm._hookTimeout to a higher value (currently
20000)
    at Timeout.tooLong [as _onTimeout] (C:\Users\amitesh\AppData\Roaming\npm\node_modules\sails\lib\app\private\loadHooks.js:85:
21)*/
module.exports.orm = {
  _hookTimeout: 60000 // I used 60 seconds as my new timeout
};