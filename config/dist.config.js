const { spawn } = require('child_process');
const args = require('minimist')(process.argv.slice(2))
const ParcelBundle = require('./parcel').ParcelBundle;
const NWJS = require('./nw').NWJS;
const COPY = require('./copy').COPY;
const parcelOptions = {
    outDir: './dist',
    outFile: 'index',
    watch: false,
    cache: true,
    minify: false,
    //target: 'electron', // previen les import ?
    hmrPort: 0,
    sourceMaps: true,
    hmr: false,
    contentHash: false,
    autoInstall: true,
};

(async () => {
    const bundler = await ParcelBundle(parcelOptions);
    const winNode = await NWJS(parcelOptions);
    const copy = await COPY();
    
    process.exit();
    /*const SpawnOptions =    {
        detached: true,
        stdio: 'ignore'
     }*/
})();
