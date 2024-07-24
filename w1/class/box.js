class Box{

    constructor(w,h){
        this.w = w
        this.h = h
        this.x = getRndInteger(0+this.w,c.width - this.w)
        this.y = getRndInteger(0+this.h,c.height - this.h)
        this.c = `#fff`
        this.vx = getRndInteger(-10,-5) 
        this.vy = getRndInteger(-10,-5)     

    }

    getTop(){
        return this.y+ this.h/2
    }
    getBot(){
        return this.y- this.h/2
    }
    getLeft(){
        return this.x- this.w/2
    }
    getRight(){
        return this.x+ this.w/2
    }

    move(){
        this.x+=this.vx
        this.y+=this.vy
    }
    check(){
        if((this.y + (this.h/2) > c.height)){
            this.y = c.height - this.h/2
            this.vy = -this.vy
        }
        else if((this.y - (this.h/2) < 0)){
            this.y = 0 + this.h/2
            this.vy = -this.vy
        }
        if((this.x + (this.w/2) > c.width)){
            this.x = c.width - this.w/2
            this.vx = -this.vx
        }
    }
    draw(){
        ctx.save()
            ctx.translate(this.x, this.y)
            ctx.fillStyle = this.c
            ctx.fillRect(-this.w/2,-this.h/2,this.w,this.h)
        ctx.restore()
    }
}
