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
    this.suly = W / 4;
    this.suly2 = W - this.suly;
    this.nyitott = H;
    this.meretX = 0.5;
    this.meretY = 0.5;

    this.rajzol = function(ctx) {
        ctx.save();

        ctx.translate(this.x, this.y);
        ctx.rotate(this.forgatas);
        ctx.scale(this.meretX, this.meretY);

        ctx.fillStyle = this.szin;

        ctx.beginPath();

        ctx.moveTo(0, H);
        ctx.lineTo(0, 0);
        ctx.bezierCurveTo(this.suly, this.nyitott, this.suly2, this.nyitott, W, 0);
        ctx.lineTo(W, H);

        ctx.closePath();
        ctx.fill();

        ctx.restore();
    }
}

// ================ rajzolás ================ 
window.onload = function () {
    var lid1 = new eyelid();
    // lid1.y = H / 2;
    lid1.rajzol(ctx);
} 
