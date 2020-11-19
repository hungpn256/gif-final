import axios from 'axios';
import * as Config from '../constants/Config'

export function  callApiGiphy(){
    return axios({
        method:'GET',
        url: `${Config.API_GIPHY}?api_key=${Config.API_KEY}&&limit=300`,
        data : null,
    }).catch(err=>{
        console.log(err)
    })
}
export function callApi(endpoint,method='GET',body){
    return axios({
        method:method,
        url: `${Config.API_URL}/${endpoint}`,
        data : JSON.stringify(body),
        headers:{
            'Content-Type':'application/json'
        }
    })
}