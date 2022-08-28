import React from 'react';
import { Baner } from '../../types/Baner';
import './BanerCard.scss';

type Props = {
  sneakers: Baner;
  currency: string;
};

export const BanerCard: React.FC<Props> = ({ sneakers, currency }) => (
  <div className="sneakers">
    <div className="sneakers__logo" />
    <div className="sneakers__title">{`${sneakers.model.split('<br>').join(' ')}`}</div>
    <div className="sneakers__price">{`${sneakers.price}${currency}`}</div>
    <div className="sneakers__image">
      <figure className="image is-4by3">
        <img src={sneakers.image_url} alt="sneakers" />
      </figure>
    </div>
    <div className="container">
      <a className="sneakers__button" href={sneakers.link}>ORDER NOW!</a>
    </div>
  </div>
);
