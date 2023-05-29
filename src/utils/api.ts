import {get, post} from './socket'

export class NoAuthApi {
    url: string
    data: any

    constructor() {
        this.url = ''
        this.data = {}
    }

    public config() {
        return post<any>("/login/config")
    }

    public getCaptcha() {
        return get<any>("/login/captcha")
    }

    public login(
        username: string,
        password: string,
    ) {
        return post<any>("/login/password", {
            username,
            password,
        })
    }

}


export class AdminApi {
    url: string
    data: any

    constructor() {
        this.url = ''
        this.data = {}
    }

    public getUserInfo() {
        return get<any>("/admin/api/get-admin-info")
    }
}