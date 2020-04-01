# Boilerplate StarterKit for Dist & Prod environment oriented GameDev es6++ with NWjs-Parcel-Babel-PixiJs

Easy starterkit low dependency including nwjs,parcel,babel,pixijs

### FEATURE
- **NwJs** easy debug and auto prod for **win,macos,linux x64 x86.**
- **Parcel custom API** for bundling modules Distribution.
- **Babel** for convert Es6+ module to Es5 for web distribution
- Easy start node commands.
- **Low dependency** , **Vanilla** for js and nodeJs
-  **Auto copy folders** for production nwjs.
- **Allowed mixed code** content (js,ts,WebAssembly) ...
- **Debugger already setup** for node and nwjs with vsCode
- **Caching**  fast dist and test
- Good starter for understand Webpack like environnement
___

### Quick start
** Download || fork || gitClone || open in Desktop **

<img src="https://images2.imgbox.com/38/5f/NjtVaOBI_o.png" width="120" />

```bash
# or CLI for clone the repo.
git clone --depth 1 https://github.com/djmisterjon/nw-parcel-pixi.git
```


**CMD** initialize
```bash
# install the projet dependencies (NEED)
npm i
# build your projet to dist folder for test and debug (NEED)
npm run dist
------
# produc final release of your app (win,macos,linux)
npm run prod
# build AND test your app with nwjs sdk
npm run nw
```
___
### DEBUGGING
**RUN CMD**
```bash
# EDIT --nolazy --inspect-brk in script comand
```

**FAST WORKFLOW, CODE AND RUN VSCODE**
Already setup, but you can also customise shortcut inside `launch.json`
Just code and pres f12 to run your code inside nwjs.
```bash
{
    "compounds": [
        {
            "name": "Launch & Debug",
            "configurations": ["Launch NWjs"],
        }
    ],
    
    "configurations": [
        {
            "type": "nwjs",
            "request": "launch",
            "name": "Launch NWjs",
            "runtimeExecutable": "${workspaceRoot}\\node_modules\\nw\\nwjs\\nw.exe",
            "runtimeArgs": [
                "--disable-raf-throttling",
                "--remote-debugging-port=9222",
            ],
            "webRoot": "${workspaceRoot}/dist",
            "port": 9222,
            "reloadAfterAttached": true,
            "preLaunchTask": "npm: dist"
        },
        {
            "name": "Launch dist",
            "type": "node",
            "request": "launch",
            "cwd": "${workspaceFolder}",
            "runtimeExecutable": "npm",
            "runtimeArgs": ["run-script", "dist"],
            "port": 9229,
            "console": "integratedTerminal",
            "autoAttachChildProcesses": true,

        },
    ]
}
```

___

**CUSTOMZE FINAL PRODUCTION**
- for web version, you have nothing to do, just publish the `dist` folder.
- For produce your desktop build, be sure your customized the `nw_package.json` inside `src` folder.
This one will be cloning to dist folder when you run `npm run dist`.
Application entries start in `main.js`

**CUSTOMZE CONFIG**
All custom configs are inside folder `config` and are write in nodejs vanilla
- `dist.config.js` is the main builder
- `nw.js` it the custom hack and cloning the `nw_package.json` 
- `parcel.js` is the custom hack API for manage bundle to build `dist` folder
- `copy.js` is the custom hack for cloning ressources from `scr` to dist `folder` to make nwjs app work.

## HotReload

For gameDev, hotReload are not commanded, but your can enable it inside
`dist.config.js` just set `watch:  true,`
if something wrong, clear `.cache` folder.

## DEPENDENCY
**DEV DEPENDENCY**
 - "@babel/cli": "^7.8.4",
 - "@babel/core": "^7.9.0",
 - "@babel/preset-env": "^7.9.0",
 - "nw": "^0.44.5-sdk",
 - "nwjs-builder-phoenix": "^1.15.0",
 - "parcel-bundler": "^1.12.4"
 
**DIST DEPENDENCY**
 - "pixi.js": "^5.2.1"
