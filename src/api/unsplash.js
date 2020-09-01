import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 3V4Xvyi3wsS3qiJ1ES9bUW1TWbzzoB2UhcIIZMCesrY'
    }
})