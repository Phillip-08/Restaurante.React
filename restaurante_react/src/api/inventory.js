import { result } from "lodash";
import { BASE_API } from "../utils/constants";

export async function getInventoryApi() {
    try {
        const url = `${BASE_API}/api/inventory/`;
        const response = await fetch(url);
        const result = await response.json();
        return result
    } catch (error) {
        throw error
    }
}

export async function addInventoryApi(data, token){
    try{
        const formData = new FormData();
        formData.append('title', data.title);
        formData.append('price', data.price);
        formData.append('medida', data.medida);
        formData.append('stock', data.stock);
        formData.append('expiration', data.expiration);
        formData.append('supplier', data.supplier);
        formData.append('image', data.image);

        const url = `${BASE_API}/api/inventory/`;
        const params = {
            method: "POST",
            headers:{
                Authorization: `Bearer ${token}`
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

export async function updateInventoryApi(id, data, token){
    try{
        const formData = new FormData();
        formData.append('title', data.title);
        formData.append('price', data.price);
        formData.append('medida', data.medida);
        formData.append('stock', data.stock);
        formData.append('expiration', data.expiration);
        formData.append('supplier', data.supplier);
        if (data.image) formData.append('image', data.image);

        const url = `${BASE_API}/api/inventory/${id}/`;
        const params = {
            method: "PATCH",
            headers:{
                Authorization: `Bearer ${token}`
            },
            body: formData,
        };

      const response = await fetch(url, params);
      const result = await response.json();
      return result;
    } catch (error) {
        throw error;
    }
};

export async function deleteInventoryApi(id, token){
    try {
        const url = `${BASE_API}/api/inventory/${id}/`;
        const params = {
            method:"DELETE",
            headers:{
                Authorization:`Bearer ${token}`
            }
        }
      const response = await fetch(url, params);
      const ressult = await response.json();
      return result;
        
    } catch (error) {
        throw error;
        
    }
}