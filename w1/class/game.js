let c = document.querySelector(`canvas`)
let ctx = c.getContext(`2d`)
let fps = 1000/60
let timer = setInterval(main, fps)


let key = []
document.addEventListener(`keydown`,function(e){
    key[e.key]=true
})
document.addEventListener(`keyup`,function(e){
    key[e.key]=false
})



function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

paddle = new Box(25,200)
paddle.x = 50
paddle.y = 400

box = new Box(50,50)



function main(){
    ctx.clearRect(0,0,c.width,c.height)
    if(key[`w`]) paddle.y-=10
    if(key[`s`]) paddle.y+=10

    if(paddle.y < 0 + paddle.h/2) paddle.y = 0 + paddle.h/2
    else if(paddle.y > c.height - paddle.h/2) paddle.y = c.height - paddle.h/2
    
    paddle.draw()
    box.check()
  
    if(box.getLeft() < paddle.getRight() && box.getBot() < paddle.getTop() && box.getTop() > paddle.getBot()){
        box.vx = -box.vx
    }
    

    box.move()
    
    
    box.draw()

    

}