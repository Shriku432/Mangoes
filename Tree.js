class Tree{
constructor(x,y,options){
var options={
 isStatic:true   
}
this.x=x;
this.y=y;
this.r=r;
this.image=loadImage("tree,png");
World.add(world.this.body)


}

display(){
var treePos=this.body.position;
push();
translate(treePos.x,treePos.y);
fill(255)
imageMode(CENTER)
image(this.image,0,0,this.w,this.h)
pop();
}
}