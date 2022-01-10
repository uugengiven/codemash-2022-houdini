class DotsPainter {
    paint (canvas, geometry, props) {
        this.drawParticle(canvas, 1, 1, 32, 'red', 1);
        this.drawParticle(canvas, 76, 23, 32, 'blue', 1);
        this.drawParticle(canvas, 24, 141, 32, 'green', 1);
        this.drawParticle(canvas, 103, 423, 32, 'yellow', 1);
        
    }

    drawParticle = function(ctx, x, y, size, color, opacity) {
        ctx.beginPath();
        ctx.globalAlpha = opacity;
        ctx.arc(x, y, size, 0, 2 * Math.PI);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.strokeStyle = color;
        ctx.stroke();
   }
}

registerPaint('dots', DotsPainter);