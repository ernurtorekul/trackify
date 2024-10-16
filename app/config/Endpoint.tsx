export class Endpoint {
    static baseUrl: string = 'https://trackify-node-production.up.railway.app/'
  
    static seriesGetAll: string = '/series/'
    static seriesGet = (id: number) => `/series/${id}`
    static parsing: string = '/parsing/'
}

export default Endpoint;
