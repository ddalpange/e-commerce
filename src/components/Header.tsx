import { Avatar, Colors, ElevationStyles, Icon } from '@class101/ui';
import React, { FC } from 'react';
import styled from 'styled-components';

const Header: FC = () => {
  return (
    <Container>
      <Logo src="/logo.jpg" />
      {/* <Subtitle1>수채화 컬러링북 세트</Subtitle1> */}
      <Avatar src="/momo.jpeg" text="요찡" icon={<Icon.Heart fillColor={Colors.orange600} />} />
    </Container>
  );
};

const Container = styled.header`
  ${ElevationStyles.elevation1};
  padding: 8px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  width: 38px;
`;
export default Header;
