import React from "react";
import { Card, Icon } from 'semantic-ui-react';

export default function LocationCard(props) {
  return (
    <Card>
      <Card.Content header={props.locations.name} />
      <Card.Content description={`${props.locations.type} - ${props.locations.dimension}`} />
      <Card.Content extra>
        <Icon name='child' />
        Residents: {props.locations.residents.length}
      </Card.Content>
    </Card>
  )
}
