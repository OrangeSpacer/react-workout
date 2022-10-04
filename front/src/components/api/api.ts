import axios from 'axios'

const instance = axios.create({
    baseURL: '/api',
    headers: {
        'Content-Type': 'application/json',
    },
})

interface ApiInterface{
    url:string,
    type?:string,
    auth?:boolean,
    body?: {}
}

export const $api = async ({url, type = 'GET', auth = true, body}:ApiInterface) => {
    if(auth){
        const token:any = localStorage.getItem('token')
        instance.defaults.headers.common['Authorization'] =`Bearer ${token}`
    }
    try{
        switch(type){
            case 'GET':
                const {data: get} = await instance.get(url)
                return get
            case 'POST':
                const {data: post} = await instance.post(url, body)
                return post
            case 'PUT':
                const {data: put} = await instance.put(url, body)
                return put
            case 'DELETE':
                const {data: del} = await instance.delete(url)
                return del
            default:
                const {data} = await instance.get(url)
                return data
        }
    }
    catch(err:any){
        throw err.response && err.response.data ? err.response.data.message : err.message
    }
}