const Bundler = require('parcel-bundler');
const Path = require('path');
/** @param {Bundler.ParcelOptions} options - options pass to parcel*/
function ParcelBundle(options){
    console.log("\x1b[36m",'------Parcel start bundlers','\x1b[0m');
    const entryFiles = Path.join(__dirname, '../src/index.html'); //or Path.resolve()
    return new Promise((resolve, reject) => {
        const bundler = new Bundler(entryFiles, options);
        bundler.on('buildEnd', () => {
            console.log("\x1b[32m",'------Parcel complette','\x1b[0m');
            resolve()
          });
        bundler.bundle();
    }); 
    
}
module.exports.ParcelBundle = ParcelBundle;