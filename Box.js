class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){ //CLASS BOX
    var pos =this.body.position;
    //Agregar angulo a nuestro cuerpo
    var angle = this.body.angle;
    push(); //Push captura la nueva posición
    //Cambia la posicion del eje X y Y 
    translate(pos.x,pos.y);
    //Cambia la traslación del cuepo
    rotate(angle);
    rectMode(CENTER);
    fill(255);
    rect(0, 0, this.width, this.height);
    pop();//Vuelve a la posicion anterior 
  }
};
