// 桥面数据
export class Deck {
    bcl: number;
    bsl: number;

    constructor() {
        this.bcl = 0;
        this.bsl = 0;
    }

}

// 下部结构
export class Sub {
    bcl: number;
    bsl: number;
    piers: Array<number>;
    abus: Array<number>

    constructor() {
        this.bcl = 0;
        this.bsl = 0;
        this.piers = [];
        this.abus = [];
    }
}

// 上部结构
export class Sup {
    bcl: number;
    bsl: number;
    sups: Array<number>;

    constructor() {
        this.bcl = 0;
        this.bsl = 0;
        this.sups = [];
    }
}

export class BridgeBCL {
    bcl: number;
    bsl: number;
    deck: Deck;
    sub: Sub;
    sup: Sup;

    constructor() {
        this.bcl = 0;
        this.bsl = 0;
        this.deck = new Deck();
        this.sub = new Sub();
        this.sup = new Sup();
    }

}
export class Item {
    label: string;
    type: string;
    value: number;
    constructor() {
        this.label=""
        this.type=""
        this.value=0
    }
}