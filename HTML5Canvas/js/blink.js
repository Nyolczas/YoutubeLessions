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
    this.meretX = 1;
    this.meretY = 1;

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
    var blinkX = W / 2;
    var blinkY = H / 2;
    var blinkR = 0;
    var blinkSx = 0.5;
    var blinkSy = 0.5;
    var blinkOpen = H;

    var lid1 = new eyelid();
    lid1.x = blinkX;
    lid1.y = blinkY;
    lid1.forgatas = blinkR;
    lid1.meretX = blinkSx;
    lid1.meretY = blinkSy;
    lid1.nyitott = blinkOpen;
    lid1.rajzol(ctx);

    var lid2 = new eyelid();
    lid2.x = blinkX;
    lid2.y = blinkY;
    lid2.forgatas = blinkR + 360;
    lid2.meretX = blinkSx;
    lid2.meretY = blinkSy;
    lid2.nyitott = blinkOpen;

    lid2.rajzol(ctx);
} 
