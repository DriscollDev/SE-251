//canvas and context
var c = document.querySelector(`#pong`)
var ctx = c.getContext(`2d`)
var scoreboard = document.querySelector(`#score`).querySelectorAll(`div`);

//timer to make the game run at 60fps
var timer = setInterval(main, 1000/60)

//global friction variable
var fy = .97



//p1 setup
var p1 = new Box();
p1.w = 20
p1.h = 150
p1.x = 0 + p1.w

//p2 Setup
var p2 = new Box();
p2.w = 20
p2.h = 150
p2.x = c.width - p1.w


//players
var players = [new Player("Player 1",p1),new Player("Player 2",p2)]
var pad = [players[0].pad, players[1].pad]

//ball setup
var ball = new Box();
ball.w = 20
ball.h = 20
ball.vx = -5
ball.vy = -5
ball.color = `black`

function main()
{
    //erases the canvas
    ctx.clearRect(0,0,c.width,c.height)
    
    //p1 accelerates when key is pressed 
    if(keys[`w`])
    {
       pad[0].vy += -pad[0].force
    }

    if(keys[`s`])
    {
        pad[0].vy += pad[0].force
    }


    //p2 accellerates when up/down
    if(keys[`ArrowUp`])
    {
        pad[1].vy += -pad[1].force
    }
    
    if(keys[`ArrowDown`])
    {
        pad[1].vy += pad[1].force
    }



    //ball movement
    ball.move()



    //ball collision 
    if(ball.x < 0)
    {
        //score p2
        players[1].score += 1
        ball.x = c.width/2
        ball.y = c.height/2
        ball.vx = 5
        ball.vy = 5
        console.log(`${players[0].score} | ${players[1].score}`)
    }
    if(ball.x > c.width)
    {
        //score p1
        players[0].score += 1
        ball.x = c.width/2
        ball.y = c.height/2
        ball.vx = -5
        ball.vy = -5
        console.log(`${players[0].score} | ${players[1].score}`)
    }
    if(ball.y < 0)
    {
        ball.y = 0
        ball.vy = -ball.vy
    }
    if(ball.y > c.height)
    {
        ball.y = c.height
        ball.vy = -ball.vy
       
    }
    

    for(var i = 0; i < players.length; i++)
    {
        //applies friction
        pad[i].vy *= fy
        //player movement
        pad[i].move();

        //player collision
        if(pad[i].y < 0+pad[i].h/2)
        {
            pad[i].y = 0+pad[i].h/2
        }
        if(pad[i].y > c.height-pad[i].h/2)
        {
            pad[i].y = c.height-pad[i].h/2
        }

        
        //players with ball collision
        if(ball.collide(pad[i]))
        {
            ball.x = pad[i].x + ((pad[i].w/2 + ball.w/2) * Math.sign(ball.vx*-1))
            ball.vx = -ball.vx;
        }

        //draw the objects
        pad[i].draw()
        scoreboard[i].innerHTML = players[i].score
    }
    ball.draw()
}
