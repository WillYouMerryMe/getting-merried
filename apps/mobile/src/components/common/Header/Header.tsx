import { color } from '@merried/design-system';
import { IconArrow } from '@merried/icon';
import { Row, Text } from '@merried/ui';
import { flex } from '@merried/utils';
import styled from 'styled-components';

interface HeaderProps {
  onClick?: () => void;
  name?: string;
}

const Header = ({ onClick, name }: HeaderProps) => {
  return (
    <StyledHeader>
      <div onClick={onClick}>
        <Row gap={8} alignItems="center">
          <IconArrow direction="right" />
          <Text fontType="P3" color={color.G80}>
            뒤로가기
          </Text>
        </Row>
      </div>
      <Text fontType="H3" color={color.G900}>
        {name}
      </Text>
      <div style={{ width: 74.4 }} />
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.div`
  ${flex({ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' })}
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 93px;
  padding: 69px 17.83px 0;
  background-color: ${color.G0};
  z-index: 2;
`;
