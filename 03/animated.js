class AnimatedPainter {
    static get inputProperties() { return ['--animation-amount'] }
    // would it be javascript if it didn't require some kind of binding?

    paint(ctx, geometry, props)
    {
        // You must pull in props to be animated
        // each time a new value happens with animation
        // then paint is called again with a new prop value
        // your animation should always give the same result
        // for any given number

        const animation_amount = props.get('--animation-amount').value;
        const x = geometry.width / 2 + Math.sin(animation_amount * Math.PI * 2) * 150;
        const y = geometry.height / 2 + Math.cos(animation_amount * Math.PI * 2) * 150;

        ctx.beginPath();
        ctx.arc(x, y, 50, 0, 2 * Math.PI);
        ctx.fillStyle = "green";
        ctx.fill();
        ctx.strokeStyle = "red";
        ctx.stroke();
    }
}

registerPaint('animated', AnimatedPainter);