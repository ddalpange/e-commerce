import { Body2, Caption1, Card, Colors, CoverRatio } from '@class101/ui';
import React from 'react';
import styled from 'styled-components';

import { IProduct } from '../interaces/IProduct';

interface Props {
  product: IProduct;
  className?: string;
}

const ProductCard: React.FC<Props> = ({ product, className }) => {
  const { title, thumbnail, listPrice, netPrice, id } = product;
  return (
    <StyledCard
      to={`/products/${id}`}
      className={className}
      coverImage={thumbnail}
      coverImageRatio={CoverRatio.RATIO_4X3}
      title={title}
    >
      {listPrice && netPrice && <ListPrice>{listPrice.toLocaleString()}원</ListPrice>}
      {<NetPrice discounted={!!(listPrice && netPrice)}>{(netPrice || listPrice || 0).toLocaleString()}원</NetPrice>}
    </StyledCard>
  );
};

export default ProductCard;

const StyledCard = styled(Card)`
  &:hover {
    cursor: pointer;
  }
`;

const ListPrice = styled(Caption1)`
  text-decoration: line-through;
  color: ${Colors.gray600};
`;

const NetPrice = styled(Body2)<{ discounted?: boolean }>`
  color: ${props => (props.discounted ? Colors.orange500 : Colors.gray800)};
`;
