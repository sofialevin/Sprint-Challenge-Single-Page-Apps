import React from "react";
import { Card, Icon, Image } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import EpisodesList from './EpisodesList';

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
      <Episodes name={props.character.name} episodesNumber={props.character.episode.length}/>
    </Card.Content>
  </Card>
  )
}

function Episodes(props) {

  const firstName = props.name.split(' ')[0];

  return (
    <Link to={`/episodes/${firstName}`}>
      Episodes: {props.episodesNumber}
    </Link>
  );
}