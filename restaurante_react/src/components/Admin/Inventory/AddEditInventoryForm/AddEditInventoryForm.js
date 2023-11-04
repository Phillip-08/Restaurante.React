import React, { useState, useEffect, useCallback }from 'react';
import { Form, Image, Button, Dropdown, Checkbox } from "semantic-ui-react";
import { map } from 'lodash';
import { useDropzone } from "react-dropzone";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useSupplier, useInventory } from "../../../../hooks";
import "./AddEditInventoryForm.scss";

export function AddEditInventoryForm(props) {
    const { onClose, onRefetch, inventory } = props;
    const [ supplierFormat, setSupplierFormat ] = useState([]);
    const [ previewImage, setPreviewImage ] = useState(inventory ? inventory?.image : null);
    const { supplier, getSupplier } = useSupplier();
    const { addInventory, updateInventory } = useInventory();

    useEffect(() => getSupplier(), []);
    useEffect(() => {
        setSupplierFormat(formatDropdownData(supplier))
    }, [supplier]);

    const formik = useFormik({
        initialValues: initialValues(inventory),
        validationSchema: Yup.object(inventory ? updateSchema() : newSchema()),
        validateOnChange: false,
        onSubmit: async (formValue) =>{
            if (inventory) await updateInventory (inventory.id, formValue);
            else await addInventory(formValue);

            onRefetch();
            onClose();
        },
    });

    const onDrop = useCallback(async(accepteFile) => {
        const file = accepteFile[0];
        await formik.setFieldValue('image', file);
        setPreviewImage(URL.createObjectURL(file));

    }, []);

    const { getRootProps, getInputProps } = useDropzone({
        accept: "image/jpeg, image/png, image/webp",
        noKeyboard: true,
        multiple: false,
        onDrop,
    });


  return (
    <Form className="add-edit-invetory-form" onSubmit={formik.handleSubmit}>
        <Form.Input 
        name="title" 
        placeholder="Nombre del producto" 
        value={formik.values.title}
        onChange={formik.handleChange}
        error={formik.errors.title}
        />
        <Form.Input 
        type="number" 
        name="price" 
        placeholder="Precio por"
        value={formik.values.price}
        onChange={formik.handleChange}
        error={formik.errors.price}
         />
        <Form.Input 
        name="medida" 
        placeholder="Unidades"
        value={formik.values.medida}
        onChange={formik.handleChange}
        error={formik.errors.medida}
         />
        <Form.Input 
        type ="number" 
        name="stock" 
        placeholder="Cantidad"
        value={formik.values.stock}
        onChange={formik.handleChange}
        error={formik.errors.stock}
        />
        <Form.Input 
        type ="date" 
        name="expiration" 
        placeholder="Fecha de Vencimiento"
        value={formik.values.expiration}
        onChange={formik.handleChange}
        error={formik.errors.expiration}
         />
        <Dropdown 
        placeholder="Proveedor" 
        fluid 
        selection 
        search 
        options={supplierFormat}
        value={formik.values.supplier}
        error={formik.errors.supplier}
        onChange={(_, data) => formik.setFieldValue('supplier', data.value)}
        />

        <Button type="button" fluid {...getRootProps()} color={formik.errors.image && "red"}>
            {previewImage ? "Cambiar imagen" : "subir imagen"}
        </Button>
        <input {...getInputProps()} />
        <Image src={previewImage}/>

        <Button type="submit" primary fluid content={inventory ? "Actulizar Inventario" : "Crear" } />
    </Form>
  )
}

function formatDropdownData(data){
    return map(data, (item) =>({
        key: item.id,
        text: item.title,
        value: item.id,
    }))
}

function initialValues(data){
    return{
        title: data?.title || "",
        price: data?.price || "",
        medida: data?.medida ||"",
        stock: data?.stock ||"",
        expiration: data?.expiration ||"",
        supplier: data?.supplier || "",
        image: "",

    };

}

function newSchema() {
    return{
        title: Yup.string().required(true),
        price: Yup.number().required(true),
        medida: Yup.string().required(true),
        stock: Yup.number().required(true),
        expiration: Yup.date().required(true),
        supplier: Yup.number().required(true),
        image: Yup.string().required(true),
    };
}

function updateSchema() {
    return{
        title: Yup.string().required(true),
        price: Yup.number().required(true),
        medida: Yup.string().required(true),
        stock: Yup.number().required(true),
        expiration: Yup.date().required(true),
        supplier: Yup.number().required(true),
        image: Yup.string(),
    };
}