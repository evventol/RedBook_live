import Axios from "axios"

class BaseApi {
  constructor(url, config) {
    this.url = url

    this.config = config ? config : {}
  }

  get = (config) => Axios.get(this.url, {...this.config, ...config}).then(res => res.data)

  post = (data, config) => Axios.post(this.url, data, {...this.config, ...config}).then(res => res.data)
}

export default BaseApi;