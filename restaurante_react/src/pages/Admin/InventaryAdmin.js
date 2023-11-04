import React, { useState, useEffect }from 'react';
import { Loader } from "semantic-ui-react"
import { HeaderPage, TableInventoryAdmin, AddEditInventoryForm } from "../../components/Admin";
import { ModalBasic } from "../../components/Common"
import { useInventory } from "../../hooks";

export  function InventaryAdmin() {
  const [ showModal, setShowModal ] = useState(false);
  const [ titleModal, setTitleModal ] = useState(null);
  const [ contentModal, setContentModal ] = useState(null);
  const [ refetch, setRefetch ] = useState(false);
  const { loading, inventory, getInventory, deleteInventory} = useInventory();

  useEffect(() => getInventory(), [refetch]);

  const openCloseModal = () => setShowModal((prev) => !prev);
  const onRefetch = () => setRefetch((prev) =>!prev);

  const addInventory = () => {
    setTitleModal("Nuevo producto");
    setContentModal(
      <AddEditInventoryForm onClose={openCloseModal} onRefetch={onRefetch}/>);
    openCloseModal();
  };


  const updateInventory = (data)  => {
    setTitleModal("Actualizar Inventario");
    setContentModal(
      <AddEditInventoryForm onClose={openCloseModal} onRefetch={onRefetch} inventory={data}/>
    );
    openCloseModal();
  };

  const onDeleteInventory = async (data) => {
    const result = window.confirm(`¿Eliminar Producto del Inventario? ${data.title}`)
    if (result){
      await deleteInventory(data.id)
      onRefetch();
    }
  }



  return (
    <>
      <HeaderPage 
      title="Inventario" 
      btnTitle="Nuevo producto" 
      btnClick={addInventory} 
      />
      {loading ?(
        <Loader active inline="centered">
          Cargando...
        </Loader>
      ) : (
        < TableInventoryAdmin inventory={inventory} updateInventory={updateInventory} deleteInventory={onDeleteInventory}/>
      )}

      <ModalBasic 
        show={showModal} 
        onClose={openCloseModal} 
        title={titleModal} 
        children={contentModal} />
    </>
  )
}
