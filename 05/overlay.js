class TrapezoidPainter {
    static get inputProperties() { return ['--side', '--color']; }

    paint(ctx, geom, props) {
        // Use `ctx` as if it was a normal canvas
        ctx.beginPath();
        console.log(props.get('--side'));
        if(props.get('--side')[0] === 'left')
        {
            this.drawLeft(ctx, geom);
        }
        else
        {
            this.drawRight(ctx, geom);
        }
        ctx.fillStyle = props.get('--color');
        ctx.fill();

        console.log(props.get('--side')[0]);
    }

    drawLeft(ctx, {width, height})
    {
        console.log('draw left');
        ctx.moveTo(0, 0);
        ctx.lineTo(width, 0);
        ctx.lineTo(width * .92, height);
        ctx.lineTo(0, height);
    }

    drawRight(ctx, {width, height})
    {
        console.log('draw right');
        ctx.moveTo(0, 0);
        ctx.lineTo(width, 0);
        ctx.lineTo(width, height);
        ctx.lineTo(width * .08, height);
    }
  }
  
  // Register our class under a specific name
  registerPaint('tarpazoid', TrapezoidPainter);
  