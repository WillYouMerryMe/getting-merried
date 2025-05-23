'use client';

import AttendeeList from '@/components/attendee/AttendeeList/AttendeeList';
import { ROUTES } from '@/constants/common/constant';
import AppLayout from '@/layouts/AppLayout';
import { color } from '@merried/design-system';
import { ActionButton, Column, Text } from '@merried/ui';
import { flex } from '@merried/utils';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';

const Attendee = () => {
  const router = useRouter();

  const handleMoveInvite = () => {
    router.push(ROUTES.INVITE);
  };

  return (
    <AppLayout footer backgroundColor={color.G0}>
      <StyledAttendee>
        <Column gap={20}>
          <Text fontType="H2" color={color.G900}>
            참석자 관리
          </Text>
          <ActionButton icon="ADD_ICON" onClick={handleMoveInvite}>
            참석자 추가
          </ActionButton>
        </Column>
        <AttendeeList />
      </StyledAttendee>
    </AppLayout>
  );
};

export default Attendee;

const StyledAttendee = styled.div`
  ${flex({
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  })}
  width: 100%;
  gap: 24px;
  padding: 71px 12px 115px;
`;
