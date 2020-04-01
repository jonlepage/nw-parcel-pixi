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
        this.initialize_base()
        //this.initialize_interactions()
        //this.child = this.childrenToName()
    }
        
    initialize_base() {
        const style = new PIXI.TextStyle({ fill: "#ff0080", fontSize: 33 });
        const text = new PIXI.Text('Hello World', style);
        this.stage.addChild(text);
    }
  
  }