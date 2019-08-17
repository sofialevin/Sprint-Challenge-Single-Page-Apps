import React from "react";
import { Card, Icon } from 'semantic-ui-react';

export default function LocationCard(props) {
  return (
    <Card>
      <Card.Content header={props.name} />
      <Card.Content description={`${props.type} - ${props.dimension}`} />
      <Card.Content extra>
        <Icon name='child' />
        {/* Resudents: {props.residents.length} */}
      </Card.Content>
    </Card>
  )
}
