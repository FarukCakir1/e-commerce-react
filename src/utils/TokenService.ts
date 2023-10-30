export default class TokenService {
    static SaveToken(payload:string) {
        window.localStorage.setItem('fakeToken', payload)
    }

    static getToken() {
        return window.localStorage.getItem('fakeToken')
    }

    static clearToken() {
        return window.localStorage.clear()
    }
}