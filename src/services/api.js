import Axios from 'axios'

const KuppiService = {

  async getProducts() {
    return await Axios({
      method: 'get',
      url: 'https://dev-api.kuppi.com.br/example/products',
      headers: {
        'auth-token': 'IaUqWMozCH2E1kJssZ5GkjYw5FIWsBTCMunG6Isp3x7sROSTwJfflM458mQuOEYWfydEI3UrRWRYJRpDBoz5uATmmKuzGSgebAvd'
      }
    })
  },

  async getProductsInfo(productId) {
    return await Axios({
      method: 'get',
      url: `https://dev-api.kuppi.com.br/example/products/${productId}`,
      headers: {
        'auth-token': 'IaUqWMozCH2E1kJssZ5GkjYw5FIWsBTCMunG6Isp3x7sROSTwJfflM458mQuOEYWfydEI3UrRWRYJRpDBoz5uATmmKuzGSgebAvd'
      }
    })
  }

}

export default KuppiService;