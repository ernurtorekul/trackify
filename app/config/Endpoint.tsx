class Endpoint {
  baseUrl: string;
  
  constructor() {
    this.baseUrl = "https://your-backend-url.com/api";
  }

  seriesCreate(): string {
    return `${this.baseUrl}/series/create`;
  }

  seriesGetAll(): string {
    return `${this.baseUrl}/series/get/all`;
  }

  seriesGet(id: string | number): string {
    return `${this.baseUrl}/series/get/${id}`;
  }

  seriesUpdate(id: string | number): string {
    return `${this.baseUrl}/series/update/${id}`;
  }

  seriesDelete(id: string | number): string {
    return `${this.baseUrl}/series/delete/${id}`;
  }
}

export default new Endpoint();
