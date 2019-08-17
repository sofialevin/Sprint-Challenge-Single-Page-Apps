import React from "react";
import { Card, Icon } from 'semantic-ui-react';

export default function LocationCard(props) {
  return (
    <Card>
      <Card.Content header={props.location.name} />
      <Card.Content description={`${props.location.type} - ${props.location.dimension}`} />
      <Card.Content extra>
        <Icon name='child' />
        Residents: {props.location.residents.length}
      </Card.Content>
    </Card>
  )
}
