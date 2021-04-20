# TAT
The template of application based on [TDSCore](https://ds.zsh2401.top)
# Features
* Compile to native binary without any dependency.
* The easier way to develop QuickJS Application
* Enhanced the developing experience of JS/ES/TS by a searies of tools provided by TDSCore!
# Getting Started
## Install dependencies
```sh
npm install
#or
yarn
```
## Coding
Write any code you want in `src/index.ts`.

View documents [here](http://ds.zsh2401.top)
## Compiling
### JS File🍖
```sh
# Target ECMA Script 5
yarn build:es5

# Target Quick JS
yarn build:qjs
```
You can see the artifact JS file under `dist/` if source code has been compiled successfully.
### Native🌟
This step requires the installation of qjsc(Quick JS Compiler).
```sh
# Compile
yarn build:qapp
# Run it!
./dist/qapp
```