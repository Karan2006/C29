class Ground{
    constructor(x,y,width,height) {
        let options = {
            isStatic: true
        };

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;

        World.add(world, this.body);

    }
    display(){
        let pos = this.body.position;
        push();
        rectMode(CENTER);
        noStroke();
        //rgb = red green blue 
        //0-255
        fill(148,127,146);
        rect(pos.x, pos.y, this.width,this.height);
        pop();
    }
}