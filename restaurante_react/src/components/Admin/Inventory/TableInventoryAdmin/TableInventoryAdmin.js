import React from 'react';
import { Table, Image, Button, Icon } from "semantic-ui-react";
import { map } from "lodash";
import "./TableInventoryAdmin.scss";

export function TableInventoryAdmin(props) {
  const { inventory, updateInventory, deleteInventory } = props;

  return (
    <Table className="table-inventory-admin">
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Imagen</Table.HeaderCell>
          <Table.HeaderCell>nombre</Table.HeaderCell>
          <Table.HeaderCell>precio * 1(kg,litro,u/c)</Table.HeaderCell>
          <Table.HeaderCell>KG, litro, Unidad</Table.HeaderCell>
          <Table.HeaderCell>Cantidad</Table.HeaderCell>
          <Table.HeaderCell>Expiración </Table.HeaderCell>
          <Table.HeaderCell>Proveedor</Table.HeaderCell>
          <Table.HeaderCell></Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {map(inventory, (inventory, index) => (
          <Table.Row key={index}>
            <Table.Cell width={2}>
              <Image src={inventory.image} />
            </Table.Cell>
            <Table.Cell>{inventory.title}</Table.Cell>
            <Table.Cell>$ {inventory.price}</Table.Cell>
            <Table.Cell>{inventory.medida}</Table.Cell>
            <Table.Cell>{inventory.stock}</Table.Cell>
            <Table.Cell>{inventory.expiration}</Table.Cell>
            <Table.Cell>{inventory.supplier_data.title}</Table.Cell>

            <Actions inventory={inventory} updateInventory={updateInventory} deleteInventory={deleteInventory}/>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}


function Actions(props) {
  const { inventory, updateInventory, deleteInventory } = props;

  return (
    <Table.Cell textAlign="right">
      <Button icon onClick={() => updateInventory(inventory)}>
        <Icon name="pencil" />
      </Button>
      <Button icon negative onClick={() => deleteInventory(inventory)}>
        <Icon name="close" />
      </Button>
    </Table.Cell>
  );
}
