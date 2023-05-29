// 返回数据类型
export class ResponseData {
    code: number;
    msg: string;
    data: any;

    constructor() {
        this.code = 0;
        this.msg = '';
        this.data = {};
    }

}


export class ErrorData {
    code: number;
    msg: string;
    constructor() {
        this.code = 0;
        this.msg = '';
    }
}
