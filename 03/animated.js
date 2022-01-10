class AnimatedPainter {
    static get inputProperties() { return ['--tooth-width'] }
    // would it be javascript if it didn't require some kind of binding?

    paint(ctx, geometry, props)
    {
        // You must pull in props to be animated
        // each time a new value happens with animation
        // then paint is called again with a new prop value
        // your animation should always give the same result
        // for any given number

        const animation_amount = props.get('--tooth-width').value;
        console.log(props.get('--tooth-width').value);
        //const animation_amount = 0.5;
        const x = geometry.width * animation_amount;
        const y = geometry.height * animation_amount;

        ctx.beginPath();
        ctx.arc(x, y, 50, 0, 2 * Math.PI);
        ctx.fillStyle = "green";
        ctx.fill();
        ctx.strokeStyle = "red";
        ctx.stroke();
    }
}

registerPaint('animated', AnimatedPainter);