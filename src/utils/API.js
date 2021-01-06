import axios from 'axios';

export default {
    getImage: function (){
        return axios ({
            method: 'get',
            url: BASELINE
        })
    }
}