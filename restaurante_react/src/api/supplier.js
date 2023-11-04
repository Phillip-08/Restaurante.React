import { BASE_API } from "../utils/constants";

export async function getSupplierAPi(){
    try{
        const url = `${BASE_API}/api/supplier/`;
        const response = await fetch(url);
        const result = await response.json();
        return result;

    } catch (error) {
        throw error
    }
}

export async function addSupplierApi(data, token){
    try{
        const formData = new FormData();
        formData.append("run", data.run);
        formData.append("title", data.title);
        formData.append("lastname", data.lastname);
        formData.append("number", data.number);
        formData.append("business", data.business);



        const url = `${BASE_API}/api/supplier/`
        const params = {
            method: "POST",
            header:{
                Authorization: `Bearer ${token}`,
            },
            body: formData,
        };

        const response = await fetch(url, params);
        const result = await response.json();
        return result;

    } catch (error) {
        throw error;
    }
}

export async function updateSupplierApi(id, data, token){
    try{
        const formData = new FormData();
        formData.append('run', data.run);
        formData.append('title', data.title);
        formData.append('lastname', data.lastname);
        formData.append('number', data.number);
        formData.append('business', data.business);

        const url = `${BASE_API}/api/supplier/${id}/`;
        const params = {
            method: "PATCH",
            header: {
                Authorization: `Bearer ${token}`
            },
            body: formData
        }

    const response = await fetch(url, params);
    const result = await response.json();
    return result;

    }catch(error){
        throw error;
    }
}

export async function deleteSupplierApi(id, token){
    try{
        const url = `${BASE_API}/api/supplier/${id}/`;
        const params = {
            method: "DELETE",
            header:{
                Authorization: `Bearer ${token}`
            },
        };

        const response = await fetch(url, params);
        const result = await response.json();
        return result;

    } catch (error){
        throw error;
    }
}
