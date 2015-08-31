cu-rest-api
======================

> example CU-UI library structure

---

Installation
------------

Clone the Repository and run:

```
npm install
```

---


Structure
---------

The structure of this example library is as follows:

#### `src`

This is the directory where all the typescript and stylus is located.
This will build to the dist folder via gulp.

#### `src/js/main.js`

This is the entry point for the library. It determines what gets imported and exported by this library.

#### `src/ts/main.bundle.ts`

This is the entry point for the web bundle of the library. This is where things should be bound to the `window` object
so that standard ui modules can just include this script and get access to the library.

---

#### dist

This is the compiled directory where assets are copied to.
This is where the `browserify` and `babelify` bundles will be located. They are built from `src/main-bundle.js`.
These are also the files which should be included as scripts in basic ui modules which don't use gulp or typescript.
This is also where the `stylus` will be built too.

#### lib

This is where the `es5` compiled `src` will be located. It is also the main entry point for `package.json`.
This is what would be imported by `TypeScript` or another library which requires this one.

#### test

This is a testing/development/playground area which can be used to help develop the module and test things work.
Would potentially change this to a testing framework, so as things can be automated.


---

Developing
----------

The build process is provided by [cu-build-tools](https://github.com/CUModSquad/cu-build-tools#modulelibrary---builder)

The build can be configured in `cu-build.config.js`

You can view the gulp tasks here https://github.com/CUModSquad/cu-build-tools#modulelibrary---builder
