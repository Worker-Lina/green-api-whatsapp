export const postData = async (http, url, data = {}, headers = null) => {
    try {
        const {data: response} = await http.post(url, data, headers);
        return response;
    } catch (e) {
        if (e.response) {
            const {data: response} = e.response;
            if (response.statusCode === 500 && response.message === "Unauthenticated.") {
                localStorage.removeItem('token');
                window.location.reload();
            }
            return response;
        } else {
            console.log(e)
        }
    }
}

export const deleteData = async (http, url, data = {}) => {
    try {
        const {data: response} = await http.delete(url, data);
        return response;
    } catch (e) {
        if (e.response) {
            const {data: response} = e.response;
            if (response.statusCode === 500 && response.message === "Unauthenticated.") {
                localStorage.removeItem('token');
                window.location.reload();
            }
            return response;
        } else {
            console.log(e)
        }
    }
}

export const getData = async (http, url) => {
    try {
        const {data: response} = await http.get(url);
        return response;
    } catch (e) {
        if (e.response) {
            const {data: response} = e.response;
            if (response.statusCode === 500 && response.message === "Unauthenticated.") {
                localStorage.removeItem('token');
                window.location.reload();
            }
            return response;
        } else {
            console.log(e)
        }
    }
}