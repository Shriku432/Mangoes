class Launcher{
constructor(body,anchor){
var options={
bodyA:body,
pointB:anchor,
stiffness:0.04,
length:1


}

this.bodyA=body,
this.pointB=anchor,
this.launcher=Constraint.create(options)
world.add(world,this.launcher)
}

fly(){
       this.launcher.bodyA=null;   
}

display(){
    if(this.launcher.bodyA)
   {
    var pointA=this.bodyA.position;
    var pointB= this.pointB

    StrokeWeight(2);

    line(pointA.x, pointA.y,pointB.x, pointB.y);


   }

}

}
