import { Test } from 'ts/models/class';
import paper from 'ts/load_paper';

const test:Test = new Test("leandro")
const style = {
    fillColor:"white",
    strokeColor: '#bbc8d3',
}
export const rectangle: paper.Path.Rectangle = new paper.Path.Rectangle([100,100,100,100])
rectangle.set(style)

console.log("loeaded")