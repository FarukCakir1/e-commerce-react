
export default class urlCreator {

    static crate<T>(endpoint: string, params?:T) {
        let fullEndpoint = endpoint

        if(params) {
           Object.entries(params).map((param, index) => {
            fullEndpoint = `${fullEndpoint}${index === 0 ? '?' : '&'}${param[0]}=${param[1]}`
           }) 
        }
        return fullEndpoint
    }
}