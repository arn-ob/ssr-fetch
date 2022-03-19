const rPost = async (url: string, data: any, header?: object) => {
    
    url = '/api' + url;

    try {
        let res = await (await fetch(url, {
            method: "POST",
            headers: { ...header },
            body: JSON.stringify(data),
        })).json();

        return res;
    } catch (error) {
        return error;
    }

}


const rGet = async (url: string, header?: object) => {
    
    url = '/api' + url;
    
    let res = await (await fetch(url, {
        method: "GET",
        headers: { ...header }
    })).json();
    
    return res;
}

const rPut = async (url: string, header?: object) => {
    
    url = '/api' + url;
    
    let res = await (await fetch(url, {
        method: "PUT",
        headers: { ...header }
    })).json();
    
    return res;
}

const rDelete = async (url: string, header?: object) => {
    
    url = '/api' + url;
    
    let res = await (await fetch(url, {
        method: "DELETE",
        headers: { ...header }
    })).json();
    
    return res;
}


export {
    rPost,
    rGet,
    rPut,
    rDelete,
}