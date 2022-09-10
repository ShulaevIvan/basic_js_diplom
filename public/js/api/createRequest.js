/**
 * Основная функция для совершения запросов
 * на сервер.
 * */

const createRequest = (options = {}) => {
    // localStorage.clear()

    return new Promise((resolve, reject)=>{

        const xhr = new XMLHttpRequest()
        const formData = new FormData()
        let resultUrl = options.url
        
        xhr.responseType = 'json'

        if (options.method != 'GET'){
            for (let k in options.data){
                formData.append(k, options.data[k]);
            };
        }
        else {
            resultUrl += '?'
            for (let k in options.data){
                resultUrl += `${k}=${options.data[k]}&`
            };
        };

        try {
            xhr.open(options.method, resultUrl)
            options.method === 'GET' ? xhr.send() : xhr.send(formData)
            resolve(formData)
        } 
        catch (err){
            options.callback(err)
            reject(err)
        };

        xhr.onreadystatechange = ()=>{

            if (xhr.status === 200 && xhr.DONE){
                options.callback(null, xhr.response)
                resolve()
            };
        };
    });
};
