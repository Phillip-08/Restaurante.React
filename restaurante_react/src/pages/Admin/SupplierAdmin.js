import React from 'react';
import { Loader } from "semantic-ui-react"
import { HeaderPage, TableSupplierAdmin, AddEditSupplierForm } from "../../components/Admin";
import { useSupplier, useTable } from "../../hooks";
import { useEffect, useState } from "react";
import { ModalBasic } from "../../components/Common"

export function SupplierAdmin() {
  const [showModal, setShowModal] = useState(false);
  const [titleModal, setTitleModal] = useState(null);
  const [contentModal, setContentModal] = useState(null);
  const [refetch, setRefetch] = useState(false);
  const { loading, supplier, getSupplier, deleteSupplier } = useSupplier();
  console.log(supplier);
  useEffect(() => getSupplier(), [refetch]);

  const openCloseModal = () => setShowModal(prev => !prev);
  const onRefetch = () => setRefetch((prev) => !prev);

  const AddSupplier = () =>{
    setTitleModal("Nuevo Proveedor");
    setContentModal(<AddEditSupplierForm onClose={openCloseModal} onRefetch={onRefetch}/>);
    openCloseModal();
  };

  const updateSupplier = (data) => {
    setTitleModal("Actualizar Proveedor");
    setContentModal(<AddEditSupplierForm onClose={openCloseModal} onRefetch={onRefetch} supplier={data}/>
    );
    openCloseModal();
  };

  const onDeleteSupplier = async (data) => {
    const result = window.confirm(`¿Eliminar Proveedor ${data.title}?`);
    if(result){
      await deleteSupplier (data.id);
      onRefetch();
    }
  }

  return (
    <>
      <HeaderPage title="Proveedor" btnTitle="Nuevo Proveedor" btnClick={AddSupplier}/>
      {
        loading ? (
          <Loader active inline="centered">
            Cargango...
          </Loader>

        ):(
          < TableSupplierAdmin 
          supplier={supplier} 
          updateSupplier={updateSupplier}
          deleteSupplier={onDeleteSupplier}
          />
        )
      }
      <ModalBasic 
        show = {showModal}
        onClose={openCloseModal}
        title={titleModal}
        children={contentModal}
      />
    </>
  );
}
