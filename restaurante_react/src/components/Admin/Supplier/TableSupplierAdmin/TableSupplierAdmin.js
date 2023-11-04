import React from 'react'
import { Table, Button, Icon } from "semantic-ui-react";
import { map } from "lodash";
import "./TableSupplierAdmin.scss";


export function TableSupplierAdmin(props) {
  const { supplier, updateSupplier, deleteSupplier } = props;
  
  return (  
      < Table className="table-supplier-admin">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>RUN</Table.HeaderCell>
            <Table.HeaderCell>Nombre</Table.HeaderCell>
            <Table.HeaderCell>Apellidos</Table.HeaderCell>
            <Table.HeaderCell>Numero de telefono</Table.HeaderCell>
            <Table.HeaderCell>Empresa</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {map(supplier, (supplier, index) =>(
            <Table.Row key={index}>
              <Table.Cell>{supplier.run}</Table.Cell>
              <Table.Cell>{supplier.title}</Table.Cell>
              <Table.Cell>{supplier.lastname}</Table.Cell>
              <Table.Cell>{supplier.number}</Table.Cell>
              <Table.Cell>{supplier.business}</Table.Cell>

              <Actions supplier={supplier} updateSupplier={updateSupplier} deleteSupplier={deleteSupplier}/>
            </Table.Row> 
          ))}
        </Table.Body>
      </Table>
    
  );
}

function Actions (props){
  const { supplier, updateSupplier, deleteSupplier }= props;

  return(
    <Table.Cell textAlign="right">
      <Button icon onClick={() => updateSupplier(supplier)}>
        <Icon name="pencil"/>
      </Button>
      <Button icon negative onClick={() => deleteSupplier(supplier)}>
        <Icon name="close"/>
      </Button>

    </Table.Cell>
  )
}
