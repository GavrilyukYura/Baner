import React from 'react';

import './BanerList.scss';

import { BanerData } from '../../types/BanerData';
import { BanerCard } from '../BanerCard';

type Props = {
  baner: BanerData | undefined;
};

export const BanerList: React.FC<Props> = ({ baner }) => (
  <div className="baner">
    {baner?.sneakers.map(sneakers => (
      <BanerCard
        key={sneakers.model}
        sneakers={sneakers}
        currency={baner.currency}
      />
    ))}
  </div>
);
