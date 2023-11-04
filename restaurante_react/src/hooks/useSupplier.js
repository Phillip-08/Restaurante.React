import { useState } from "react";
import { getSupplierAPi, addSupplierApi, updateSupplierApi, deleteSupplierApi } from "../api/supplier";
import { useAuth } from "./"

export function useSupplier(){
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [supplier, setSupplier] = useState(null);
    const { auth } = useAuth();

    const getSupplier = async () => {
        try{
            setLoading(true);
            const response = await getSupplierAPi();
            setLoading(false);
            setSupplier(response);
        } catch (error) {
            setLoading(false);
            setError(error);
        }
    };

    const addSupplier = async (data) => {
        try{
            setLoading(true);
            await addSupplierApi(data, auth.token);
            setLoading(false);

        } catch (error) {
            setLoading(false);
            setError(error);
        }
    };

    const updateSupplier = async (id, data) =>{
        try{
            setLoading(true);
            await updateSupplierApi(id, data, auth.token);
            setLoading(false);

        }catch (error) {
            setLoading(false);
            setError(error);
        }
    }

    const deleteSupplier = async (id) => {
        try{
            setLoading(true);
            await deleteSupplierApi(id, auth.token);
            setLoading(false);

        }catch (error) {
            setLoading(false);
            setError(error);
        }
    }



    return{
        loading,
        error,
        supplier,
        getSupplier,
        addSupplier,
        updateSupplier,
        deleteSupplier,
    }
}
