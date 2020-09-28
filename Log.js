class Log extends BaseClass{
    constructor(x, y, height, angle) {
      super(x,y,20,height,angle);
      Matter.Body.setAngle(this.body, angle);
      this.image = loadImage("sprites/wood2.png");
    }
   
  };


  /*
  INHERITANCE 
  Parent - Base Class 
  Children - Inherit all the properties & functions from the parent
           - Sub-classes
  */
  