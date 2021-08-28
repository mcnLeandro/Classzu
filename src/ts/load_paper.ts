import * as paper from 'paper';

const canvas:any = document.getElementById('myCanvas')

canvas.width  = innerWidth;
canvas.height = innerHeight;

paper.install(window);
paper.setup(canvas);


console.log("loaded")

export default paper