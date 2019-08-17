import React from "react";
import { Card, Icon, Image } from 'semantic-ui-react';

export default function CharacterCard(props) {
  return (
    <Card>
    <Image src={props.character.image} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{props.character.name}</Card.Header>
      <Card.Meta>
        <span className='date'>Status: {props.character.status}</span>
      </Card.Meta>
      <Card.Description>
        Location: {props.character.location.name}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        Episodes: {props.character.episode.length}
      </a>
    </Card.Content>
  </Card>
  )
}
