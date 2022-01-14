class RandomPainter {
    static get inputProperties() { return ['--seed'] }

    paint(canvas, geometry, props) {
        const {width, height} = geometry;
        const colors = ['red', 'green', 'blue', 'yellow'];
        // use the width/height to decide on the circle size
        // this will look weird if the div is very short and wide, or tall and thin
        const size = width > height ? width / 8 : height / 8;
        const number = size / 2;
        const rand = mulberry32(Number(props.get('--seed')[0]));
        // WTF is this?
        // If you request a custom property but have not defined it as custom, like
        // we did in the animated version, then the object you get back from props.get
        // is an "CSSUnparsedValue" because it doesn't know what type of value it is
        // .value is undefined on this object type
        for(let i = 0; i < 8; i++)
        {
            const currColor = Math.floor(rand() * colors.length);
            const currSize = (size * rand()) + 10;
            const x = (rand() * (width - 2 * currSize)) + currSize;
            const y = (rand() * (height - 2 * currSize)) + currSize; 
            this.drawParticle(canvas, x, y, currSize, colors[currColor], 1);
        }  
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

  function mulberry32(a) {
    return function () {
      a |= 0;
      a = (a + 0x6d2b79f5) | 0;
      var t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
    // This will return a reliable list of random(ish) numbers from 0 - almost 1
    // There are plenty of ways to write this code, this specific instance is called
    // Mulberry32, as seen here: https://github.com/bryc/code/blob/master/jshash/PRNGs.md.
  }
  
  // Register our class under a specific name
  registerPaint('randompaint', RandomPainter);
  