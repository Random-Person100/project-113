function preload(){

}
function setup(){
    canvas=createCanvas(640,480)
    canvas.position(350,200)
    video=createCapture(VIDEO)
    video.hide()
    tint_color=""
}
function draw(){
image(video,100,50,400,300)
fill("blue")
stroke("black")
circle(50,50,80)
circle(50,430,80)
circle(590,50,80)
circle(590,430,80)
fill("red")
stroke("red")
rect(90,30,460,20)
rect(90,450,460,20)
rect(40,90,20,300)
rect(580,90,20,300)
}
function take_snapshot(){
    save('selfie.png')
}