// 桥面数据
export class Deck {
    bcl: number;
    bsl: number;

    constructor() {
        this.bcl = 100;
        this.bsl = 100;
    }

}

// 下部结构
export class Sub {
    bcl: number;
    bsl: number;


    constructor() {
        this.bcl = 100;
        this.bsl = 100;
    }
}

// 上部结构
export class Sup {
    bcl: number;
    bsl: number;

    constructor() {
        this.bcl = 100;
        this.bsl = 100;
    }
}

export class BclAndBsl{
    bcl: number;
    bsl: number;
    deck: Deck;
    sub: Sub;
    sup: Sup;

    constructor() {
        this.bcl = 100;
        this.bsl = 100;
        this.deck = new Deck();
        this.sub = new Sub();
        this.sup = new Sup();
    }
}


export class BridgeWeight {
    deck: number;
    sub: number;
    sup: number;

    constructor() {
        this.deck = 0;
        this.sub = 0;
        this.sup = 0;
    }
}


export class EqItem{
    name:string;
    time:string;
    value:number;
    constructor() {
        this.name = "";
        this.time = "";
        this.value = 0;
    }
}