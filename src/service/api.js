import axios from 'axios';  // importando a biblioteca axios


const api = axios.create({
    baseURL: 'https://viacep.com.br/ws/'  // base da url, pois os dados depois são algum tipo de requisição(pedido, captar as iformações) neste caso queremos ó a base

});

export default api;