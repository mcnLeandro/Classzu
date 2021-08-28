import paper from 'ts/load_paper';

export class Test  extends paper.Group{
    name: string

    constructor(name:string = ""){

        super()
        this.name = name

    }
    
}
console.log("loaded")