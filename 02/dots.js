class DotsPainter {
    paint (canvas, geometry, props) {
        this.avoidSides(canvas, geometry);      
    }

    avoidSides (canvas, geometry) {
        const {width, height} = geometry;
        const colors = this.colors;
        // use the width/height to decide on the circle size
        // this will look weird if the div is very short and wide, or tall and thin
        const size = width > height ? width / 8 : height / 8;
        const number = size / 2;
        for(let i = 0; i < 8; i++)
        {
            const currColor = Math.floor(Math.random() * colors.length);
            const currSize = (size * Math.random()) + 10;
            const x = (Math.random() * (width - 2 * currSize)) + currSize;
            const y = (Math.random() * (height - 2 * currSize)) + currSize; 
            this.drawParticle(canvas, x, y, currSize, colors[currColor], 1);
        }  
    }

    realRandom (canvas, geometry) {
        const {width, height} = geometry;
        const colors = this.colors;
        // use the width/height to decide on the circle size
        // this will look weird if the div is very short and wide, or tall and thin
        const size = width > height ? width / 8 : height / 8;
        const number = size / 2;
        for(let i = 0; i < 8; i++)
        {
            const currColor = Math.floor(Math.random() * colors.length);
            const currSize = (size * Math.random()) + 10;
            this.drawParticle(canvas, Math.random() * width, Math.random() * height, currSize, colors[currColor], 1);
        }        
    }

    colors = ['red', 'blue', 'green', 'yellow'];

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