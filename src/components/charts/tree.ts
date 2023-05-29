import {BclAndBsl} from "./bridge";

class treeItem {
    text: string;
    value: string;
    icon: string;

    constructor() {
        this.text = '';
        this.value = '';
        this.icon = '';
    }
}

class treeValue {
    id: string;
    titile: string;
    items: Array<treeItem>;

    constructor() {
        this.id = '';
        this.titile = '';
        this.items = [];
    }
}

export class Tree {
    value: treeValue;
    children: Array<Tree>;

    constructor() {
        this.value = new treeValue();
        this.children = [];
    }
}


export function ToTree(data: BclAndBsl) {
    var tree = new Tree();


    return tree;

}


function getRandId() {
    return 'b' + String(Math.floor(Math.random() * 900) + 100)
}



