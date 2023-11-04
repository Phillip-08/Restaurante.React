import { useState } from "react";
import { getInventoryApi, addInventoryApi, updateInventoryApi, deleteInventoryApi } from "../api/inventory";
import { useAuth } from "./";

export function useInventory(){
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [inventory, setInventory] = useState(null);
    const {auth} = useAuth();

    const getInventory = async () => {
        try {
            setLoading(true);
            const response = await getInventoryApi();
            setLoading(false);
            setInventory(response);

        } catch (error) {
            setError(error);
            setLoading(false);
        }
    };

    const addInventory = async (data) =>{
        try {
            setLoading(true);
            await addInventoryApi(data, auth.token);
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    };

    const updateInventory = async (id, data) =>{
        try {
            setLoading(true);
            await updateInventoryApi(id, data, auth.token);
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    };

    const deleteInventory = async (id) =>{
        try {
            setLoading(true)
            await deleteInventoryApi(id, auth.token);
            setLoading(false);
            
        } catch (error) {
            setError(error);
            setLoading(false);
            
        }
    }



    return{
        loading,
        error,
        inventory,
        getInventory,
        addInventory,
        updateInventory,
        deleteInventory,
    };
}

