import { Body2, Button, ButtonColor, ButtonSize, Colors, CoverRatio, ElevationStyles, Section, TextStyles } from '@class101/ui';
import React, { FC, useMemo } from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';

import Img from '../components/Img';
import { MOCK_PRODUCTS } from '../mocks';

const SellingPage: FC = () => {
  const { productId } = useParams();
  const product = useMemo(() => MOCK_PRODUCTS.find(p => p.id === productId), [productId]);

  if (!product) {
    return <Container>Product Not Found</Container>;
  }
  const { title, thumbnail, listPrice, netPrice, id, description } = product;

  return (
    <Container>
      <ProductThumbnail src={thumbnail} ratio={CoverRatio.RATIO_4X3} />
      <StyledSection title={<ProductTitle>{title}</ProductTitle>}>
        {listPrice && netPrice && <ListPrice>{listPrice.toLocaleString()}원</ListPrice>}
        <NetPrice discounted={!!(listPrice && netPrice)}>{(netPrice || listPrice || 0).toLocaleString()}원</NetPrice>
      </StyledSection>
      <StyledSection title="배송정보" titleStyle={{ sm: 'Body1' }}>
        <ShippingInfoTable>
          <tbody>
            <tr>
              <th>배송비</th>
              <td>
                <span>2,500원</span>
                <span>50,000원 이상 구매 시 무료 / 제주 추가 3,000원, 제주 외 도서지역 추가 5,000원</span>
              </td>
            </tr>
            <tr>
              <th>배송기간</th>
              <td>평균 2일 이내</td>
            </tr>
          </tbody>
        </ShippingInfoTable>
      </StyledSection>
      <StyledSection title="상품정보" titleStyle={{ sm: 'Body1' }}>
        <div dangerouslySetInnerHTML={{ __html: description || '' }} />
      </StyledSection>
      <Footer>
        <FooterContainer>
          <Button color={ButtonColor.DEFAULT} size={ButtonSize.LARGE}>
            장바구니
          </Button>
          <Button color={ButtonColor.ORANGE} size={ButtonSize.LARGE} fill>
            구매하기
          </Button>
        </FooterContainer>
      </Footer>
    </Container>
  );
};

export default SellingPage;

const Container = styled.div`
  background: ${Colors.gray200};
  position: relative;
`;

const ProductThumbnail = styled(Img)``;

const StyledSection = styled(Section)`
  ${ElevationStyles.elevation1};
  background: ${Colors.white};
  padding: 16px;
  margin-bottom: 8px;
`;

const ProductTitle = styled.h1`
  ${TextStyles.headline3};
  font-weight: 600;
`;

const ShippingInfoTable = styled.table`
  ${TextStyles.body2};
  th,
  td {
    vertical-align: baseline;
  }
  th {
    width: 80px;
    font-weight: 600;
    color: ${Colors.gray600};
  }
  td {
    span {
      display: block;
      margin: 0 0 8px 0;
    }
  }
`;

const ListPrice = styled(Body2)`
  text-decoration: line-through;
  color: ${Colors.gray600};
`;

const NetPrice = styled.h2<{ discounted?: boolean }>`
  ${TextStyles.subtitle1};
  color: ${Colors.gray800};
  font-weight: 700;
`;

const Footer = styled.div`
  position: fixed;
  left: 0px;
  right: 0px;
  bottom: 0px;
  width: 100%;
  z-index: 1;
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.16) 0px -3px 6px -2px;
  padding: 0px;
`;

const FooterContainer = styled.div`
  padding: 8px;
  background: ${Colors.gray000};
  display: flex;
  > button:first-child {
    margin-right: 8px;
  }
`;
