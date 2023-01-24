let radius = 2;
        for (let index = 0; index < 50; index++) {
          ctx.beginPath();
          ctx.arc(150, 150, 100, 0, 2 * Math.PI);
          ctx.stroke();
          radius +=2;
}