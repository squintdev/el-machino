import React from 'react';
import Sketch from 'react-p5';

const Parametric = () => {
    const setup = (p5, canvasParentRef) => {
        p5.colorMode(p5.HSB);
        //create dimensions based on window
        let dispWidth = p5.windowWidth * .75;
        let dispHeight = p5.windowHeight * .75;
        p5.canvas = p5.createCanvas(dispWidth, dispHeight);
        p5.zoom = p5.createSlider(1, p5.height/10, p5.height/25, 1) //How big the graph is
        p5.Constant = p5.createSlider(0.0001, 1000, 639.83, 0.001) //
        p5.upperLimit = p5.createSlider(1, 500, 282, 1)
        p5.a=1; p5.b=0; p5.delta=0; p5.inc=0; p5.y=1;
      }
      
      const draw = p5 => {
        //Change cooridnates and set the zoom value
        p5.translate(p5.width/2, p5.height/2)
        p5.zoomValue = p5.zoom.value();
        
        //Set parameters
        p5.background(0)
        p5.beginShape();
        p5.strokeWeight(1);
        p5.stroke(110, 100, 90)
        p5.fill(110,100,30);
        let t = -10;
        
        for(t= -10; t<p5.upperLimit.value();t+=2){
          
          //Parametric equation
          p5.x=Math.sin(t*p5.b)*Math.log(p5.b*t*Math.abs(Math.sin(p5.b)))*p5.zoomValue
          p5.y=Math.log(t*p5.b)*Math.cos(t*p5.b)*p5.zoomValue
          
          //Set vertex
          p5.vertex(p5.x, p5.y)
          
        }
        p5.endShape();
    
        
      
        //Variables
        p5.inc = p5.inc+=.5 //How fast the graph rotates
        p5.a = p5.a+=0.008
        p5.b=p5.Constant.value()
        p5.delta=p5.inc
        
        //to save image
        // p5.saveCanvas('new-piece', 'png');
      }
      
      return <div className="parametric px-6 mt-4"><Sketch setup={setup} draw={draw} className="w-1/2"/></div>
};

export default Parametric;