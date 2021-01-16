import axios from 'axios';
import constants from '../constants';

const apiService = {
    get(url, params, success, failure) {
        return this.request({
            method: 'get',
            url,
            params,
            success,
            failure,
        });
    },
    post(url, data, success, failure) {
        return this.request({
            method: 'post',
            url,
            data,
            success,
            failure,
        });
    },
    delete(url, success, failure) {
        return this.request({
            method: 'delete',
            url,
            success,
            failure,
        });
    },

    request: (options = {}) => {
        if (!options.url) {
            console.log('Please provide URL');
            return;
        }

        const data = Object.assign({
            method: 'get',
            baseURL: constants.apiUrl,
        }, options);

        data.params = Object.assign({}, options.params, {});

        return new Promise((resolve, reject) => {
            axios(data)
            .then((response) => {
                resolve(response.data);
            })
            .catch((error) => {
                reject(error);
            });

        })

    },
};

export default apiService;
