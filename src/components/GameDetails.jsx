import React from 'react';
import Card from './Card';
import { games } from '../data/games';

const GameDetails = () => (
  <div className="card-container">
    {games.map((game, i) => <Card key={i} {...game} />)}
  </div>
);

export default GameDetails;
