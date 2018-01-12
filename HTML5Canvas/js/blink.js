var canvas = document.querySelector('#blink-canvas');
        var W = window.innerWidth;
        var H = window.innerHeight;
        canvas.width = W;
        canvas.height = H;
        var ctx = canvas.getContext('2d');
        canvas.style.background = "pink";

// ================ szemhéj objektum ================       

function eyelid() {
    this.x = 0;
    this.y = 0;
    this.forgatas = 0;
    this.szin = "balck";

    this.rajzol = function(ctx) {
        ctx.save();

        ctx.translate(this.x, this.y);
        ctx.rotate(this.forgatas);

        ctx.fillStyle = this.szin;

        ctx.beginPath();

        ctx.moveTo(-25, -25);
        ctx.lineTo(25, 0);
        ctx.lineTo(-25, 25);
        ctx.lineTo(0, 0);

        ctx.closePath();
        ctx.fill();

        ctx.restore();
    }
}

// ================ rajzolás ================ 
window.onload = function () {
    var lid1 = new eyelid();
    lid1.x = W / 2;
    lid1.y = H / 2;
    lid1.rajzol(ctx);
} 
