import { color } from '@merried/design-system';
import { Button, Column, Input, Text } from '@merried/ui';
import { flex } from '@merried/utils';
import styled from 'styled-components';

const WriteGuestBook = () => {
  return (
    <StyledWriteGuestBook>
      <Column gap={12} width="100%">
        <Input width="100%" label="이름" placeholder="이름을 입력해주세요" />
        <Input width="100%" label="방명록 글귀" placeholder="글귀를 입력해주세요" />
      </Column>
      <Button
        onClick={() => {}}
        width="100%"
        size="VERY_LARGE"
        pointColor={color.pointYellow}
      >
        <Text fontType="Button3">작성완료</Text>
      </Button>
    </StyledWriteGuestBook>
  );
};

export default WriteGuestBook;

const StyledWriteGuestBook = styled.div`
  ${flex({ flexDirection: 'column', alignItems: 'center' })}
  width: 100%;
  height: 100%;
  gap: 24px;
`;
