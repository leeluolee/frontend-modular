import { add } from './math';

class Caculator {

    constructor( container ) {
        this.left = container.querySelector( ".j-left" )
        this.right = container.querySelector( ".j-right" )
        this.add = container.querySelector( ".j-add" )
        this.result = container.querySelector( ".j-result" )

        this.add.addEventListener("click", this.compute.bind(this) )
    }
    compute(){
        this.result.textContent = add( +this.left.value, +this.right.value )
    }

}

export { Caculator }



// import math from './math';


