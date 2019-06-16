import axios from 'axios'


const gets = (option) => {

    const {
        url,
        params
    } = option

    return axios.get(url, {

        prams: {
            ...params
        }
    })
}



const posts = (option) => {

    const {
        url,
        params
    } = option

    return axios.post(url, {

        prams: {
            ...prams
        }
    })
}


export default {
    gets,
    posts
}