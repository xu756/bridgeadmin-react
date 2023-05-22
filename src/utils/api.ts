import {get, post} from './socket'

export class NoAuthApi {
    url: string
    data: any
    constructor() {
        this.url = ''
        this.data = {}
    }
    public config(){
        return post<any>("/login/config")
    }
    public getCaptcha(){
        return get<any>("/login/captcha")
    }
}