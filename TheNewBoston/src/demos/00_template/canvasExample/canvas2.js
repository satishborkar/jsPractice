var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');
var mouse = {x,y};

document.addEventListener('mousemove', function(e){
    mouse.x = e.x;
    mouse.y = e.y;
})
    
function Circle(x, y, dx, dy, r, c){
    this.x = x;
    this.y = y;
    this.velocityX = dx;
    this.velocityY = dy; 
    this.radius = r;
    this.color = c;
}

Circle.prototype.draw = function(){
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    //c.strokeStyle =this.color;
    c.fillStyle = this.color;
    //c.stroke();
    c.fill();
}

Circle.prototype.update = function(){

    if(this.x + this.radius > window.innerWidth || this.x - this.radius < 0){
        this.velocityX = - this.velocityX;
    }

    if(this.y + this.radius > window.innerHeight || this.y - this.radius < 0){
        this.velocityY = -this.velocityY;
    }

    this.x +=this.velocityX;
    this.y +=this.velocityY;

    if(mouse.x - this.x > 50){
        this.velocityX += 1;
    }

    this.draw();   
}

var circles = [];
for(var i =0;i < 200; i++){
    var r = 30;
    var x = Math.random() * (window.innerWidth - r * 2) + r;
    var y = Math.random() * (window.innerHeight - r * 2 ) + r;
    var dx = Math.random() * 0.5;
    var dy = Math.random() * 0.5;
    
    var color = 'rgba('+ (Math.random() * 255).toFixed(0) 
                       + ',' + (Math.random() * 255).toFixed(0)
                       +","+ (Math.random() * 255).toFixed(0)
                       + ',' + (Math.random() * 255).toFixed(0) + ')';
    circles.push(new Circle(x, y, dx, dy, r, color));
};


function animate(){
    requestAnimationFrame(animate);
    //circle.update()
    c.clearRect(0, 0, window.innerWidth, window.innerHeight);

    for(var k=0; k < circles.length; k++){
        circles[k].update();
    }
}
animate();