# tcihlG 020

# =================

# Glitch project 002

## done

- Made it glithcy
- Assets added
- Library finished
- Session management added
- Image upload with cloudinary image hosting and express-fileUpload
- helper methods started

## todo

- add more heler methods
- add new packages to repository
- create dat P2P hosting function
- port to low-power server

## Buglist

- Session management err :

``` javaScript
    internal/modules/cjs/loader.js:960
  throw err;
  ^

Error: Cannot find module './json-store'
Require stack:
- D:\app\models\user-store.js
- D:\app\controllers\accounts.js
- D:\app\controllers\start.js
- D:\app\routes.js
- D:\app\server.js
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:957:15)
    at Function.Module._load (internal/modules/cjs/loader.js:840:27)
    at Module.require (internal/modules/cjs/loader.js:1019:19)
    at require (internal/modules/cjs/helpers.js:77:18)
    at Object.<anonymous> (D:\app\models\user-store.js:4:19)
    at Module._compile (internal/modules/cjs/loader.js:1133:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1153:10)
    at Module.load (internal/modules/cjs/loader.js:977:32)
    at Function.Module._load (internal/modules/cjs/loader.js:877:14)
    at Module.require (internal/modules/cjs/loader.js:1019:19) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    'D:\\app\\models\\user-store.js',
    'D:\\app\\controllers\\accounts.js',
    'D:\\app\\controllers\\start.js',
    'D:\\app\\routes.js',
    'D:\\app\\server.js'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! library-app@0.0.1 start: `node server.js`
npm ERR! Exit status 1
npm ERR!
npm ERR! Failed at the library-app@0.0.1 start script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
```

- similar err on adding to book list and genre list templates.....
- misc err seems resolved.