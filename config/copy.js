



var fs = require('fs');
var path = require('path');
function COPY(params) {
    console.log("\x1b[36m",'------COPY start','\x1b[0m');
    return new Promise((resolve, reject) => {
        const source = './src/res'
        const target = './dist/'
        copyFolderRecursiveSync(source,target)
        resolve();
        //copyFolderRecursiveSync()
    })


    function copyFileSync( source, target ) {

        var targetFile = target;
    
        //if target is a directory a new file with the same name will be created
        if ( fs.existsSync( target ) ) {
            if ( fs.lstatSync( target ).isDirectory() ) {
                targetFile = path.join( target, path.basename( source ) );
            }
        }
    
        fs.writeFileSync(targetFile, fs.readFileSync(source));
    }
    
    function copyFolderRecursiveSync( source, target ) {
        var files = [];
    
        //check if folder needs to be created or integrated
        var targetFolder = path.join( target, path.basename( source ) );
        if ( !fs.existsSync( targetFolder ) ) {
            fs.mkdirSync( targetFolder );
        }
    
        //copy
        if ( fs.lstatSync( source ).isDirectory() ) {
            files = fs.readdirSync( source );
            files.forEach( function ( file ) {
                var curSource = path.join( source, file );
                if ( fs.lstatSync( curSource ).isDirectory() ) {
                    copyFolderRecursiveSync( curSource, targetFolder );
                    console.log('create ',targetFolder);
                } else {
                    copyFileSync( curSource, targetFolder );
                }
            } );
        }
    }
}


module.exports.COPY = COPY;