import * as PIXI from "pixi.js";










export class Application extends PIXI.Application{
    constructor() {
        super({
            width: 1920,
            height: 1080,
            backgroundColor: 0x1099bb
          });
        this.initialize();
        document.body.appendChild(this.view);
    }

    initialize() {
        const loader = new PIXI.Loader()
        // load the texture we need
        loader.add('bunny', './res/img/bunny.jpg').load();
        loader.onComplete.add((loader, res) => { 
            // This creates a texture from a 'bunny.png' image.
            const bunny = new PIXI.Sprite(res.bunny.texture);
            // Rotate around the center
            bunny.anchor.x = 0.5;
            bunny.anchor.y = 0.5;
            // Add the bunny to the scene we are building.
            this.stage.addChild(bunny);
            // Listen for frame updates
            this.ticker.add(() => {
                // each frame we spin the bunny around a bit
                bunny.rotation += 0.01;
            });
            this.initialize_base()
        });

    }
        
    initialize_base() {
        const style = new PIXI.TextStyle({ fill: "#ff0080", fontSize: 33 });
        const text = new PIXI.Text('Hello World', style);
        this.stage.addChild(text);
    }
  
  }