const nw = require('nw');
const fs = require('fs');
const Path = require('path');
const debug_folder = '../dist/';


function NWJS(params) {
        console.log("\x1b[36m",'------nwjs start package.json','\x1b[0m');
        return new Promise((resolve, reject) => {
            const content = fs.readFileSync(Path.resolve(__dirname, '../src/nw_package.json'))
            const nw_config = JSON.parse(content)
            nw_config['main'] = "index.html";
            /* Since we are loading the application from an iframe loading localhost, allow nodejs modules on all localhost domain 
            solution for appDev with hotreload, not for gameDev */
            //nw_config['node-remote'] = "http://localhost/*"; 
            /* Put package.json and index_debug.html in the build drectory */
            fs.writeFileSync( 
                Path.resolve(__dirname,
                `${debug_folder}package.json`), 
                JSON.stringify(nw_config, null, 2)
            )
            console.log("\x1b[32m",'------nwjs complette','\x1b[0m');
            resolve()
        })
}

module.exports.NWJS = NWJS;