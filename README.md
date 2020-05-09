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
    TypeError: Cannot read property 'email' of undefined
    at authenticate (D:\simple-mesquite-trunk-2020-05-07_102050\app\controllers\accounts.js:43:56)
    at Layer.handle [as handle_request] (D:\simple-mesquite-trunk-2020-05-07_102050\app\node_modules\express\lib\router\layer.js:95:5)
    at next (D:\simple-mesquite-trunk-2020-05-07_102050\app\node_modules\express\lib\router\route.js:137:13)
    at Route.dispatch (D:\simple-mesquite-trunk-2020-05-07_102050\app\node_modules\express\lib\router\route.js:112:3)
    at Layer.handle [as handle_request] (D:\simple-mesquite-trunk-2020-05-07_102050\app\node_modules\express\lib\router\layer.js:95:5)
    at D:\simple-mesquite-trunk-2020-05-07_102050\app\node_modules\express\lib\router\index.js:281:22
    at Function.process_params (D:\simple-mesquite-trunk-2020-05-07_102050\app\node_modules\express\lib\router\index.js:335:12)
    at next (D:\simple-mesquite-trunk-2020-05-07_102050\app\node_modules\express\lib\router\index.js:275:10)
    at Function.handle (D:\simple-mesquite-trunk-2020-05-07_102050\app\node_modules\express\lib\router\index.js:174:3)
    at router (D:\simple-mesquite-trunk-2020-05-07_102050\app\node_modules\express\lib\router\index.js:47:12)
```

- similar err on adding to book list and genre list templates.....
- misc err seems resolved.