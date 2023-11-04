import React from 'react';
import { Form, Button } from "semantic-ui-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useSupplier} from "../../../../hooks"
import "./AddEditSupplierForm.scss";

export function AddEditSupplierForm(props) {
  const { onClose, onRefetch, supplier } = props;
  const { addSupplier, updateSupplier } = useSupplier()

  const formik = useFormik({
    initialValues: initialValues(supplier),
    validationSchema: Yup.object(supplier? updateSchema() : newSchema()),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try{
        if (supplier) await updateSupplier(supplier.id, formValue);
        else await addSupplier(formValue);

        onRefetch();
        onClose();
        console.log('Formulario enviado');
        console.log(formValue);
      } catch (error) {
        console.error(error);

      }
      
    },
  });



  return (
    <Form className="add-edit-supplier-form" onSubmit={formik.handleSubmit}>
      <Form.Input 
        type="number"
        name= "run" 
        placeholder ="run" 
        value={formik.values.run} 
        onChange={formik.handleChange}
        error={formik.errors.run}
      />
      <Form.Input 
        name="title" placeholder="Nombre"
        value={formik.values.title} 
        onChange={formik.handleChange}
        error={formik.errors.title}
      />
      <Form.Input 
        name="lastname" placeholder="Apellidos"
        value={formik.values.lastname} 
        onChange={formik.handleChange}
        error={formik.errors.lastname}
      />
      <Form.Input 
        type="number"
        name="number" 
        placeholder="Numero de telefono"
        value={formik.values.number} 
        onChange={formik.handleChange}
        error={formik.errors.number}
      />
      <Form.Input 
        name="business" placeholder="Empresa"
        value={formik.values.business} 
        onChange={formik.handleChange}
        error={formik.errors.business}
      />
      <Button type="submit" primary fluid content={supplier ? "Actualizar Proveedor" : "Crear Proveedor"}/>
    </Form>
  )
}

function initialValues(data){
  return{
    run: data?.run || "",
    title: data?.title || "",
    lastname: data?.lastname || "",
    number: data?.number || "",
    business: data?.business || "",
  };
}

function newSchema(){
  return{
    run: Yup.string().required(true),
    title: Yup.string().required(true),
    lastname: Yup.string().required(true),
    number: Yup.string().required(true),
    business: Yup.string().required(true),

  };
}

function updateSchema(){
  return{
    run: Yup.string().required(true),
    title: Yup.string().required(true),
    lastname: Yup.string().required(true),
    number: Yup.string().required(true),
    business: Yup.string().required(true),

  };
}

