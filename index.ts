/**
 * 
 * @param url /api/Post
 * @param header Any Header you like
 * @returns Object
 */
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


/**
 * 
 * @param url /api/Get
 * @param header Any Header you like
 * @returns Object
 */
const rGet = async (url: string, header?: object) => {
    
    url = '/api' + url;
    
    let res = await (await fetch(url, {
        method: "GET",
        headers: { ...header }
    })).json();
    
    return res;
}


/**
 * 
 * @param url /api/Put
 * @param header Any Header you like
 * @returns Object
 */
const rPut = async (url: string, header?: object) => {
    
    url = '/api' + url;
    
    let res = await (await fetch(url, {
        method: "PUT",
        headers: { ...header }
    })).json();
    
    return res;
}


/**
 * 
 * @param url /api/Patch
 * @param header Any Header you like
 * @returns Object
 */
const rPatch= async (url: string, header?: object) => {
    
    url = '/api' + url;
    
    let res = await (await fetch(url, {
        method: "PATCH",
        headers: { ...header }
    })).json();
    
    return res;
}


/**
 * 
 * @param url /api/Delete
 * @param header Any Header you like
 * @returns Object
 */
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
    rPatch,
    rDelete
}