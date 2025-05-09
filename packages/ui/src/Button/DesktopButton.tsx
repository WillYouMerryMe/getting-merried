import { ButtonHTMLAttributes, ReactNode, CSSProperties } from 'react';
import { ButtonStyleType, DesktopButtonSize } from './button.type';
import styled from 'styled-components';
import { flex } from '@merried/utils';
import { getDesktopButtonSize, getButtonStyle } from './button.style';

type Props = {
  children: ReactNode;
  styleType?: ButtonStyleType;
  size?: DesktopButtonSize;
  width?: CSSProperties['width'];
} & ButtonHTMLAttributes<HTMLButtonElement>;

const DesktopButton = ({
  onClick,
  children,
  styleType = 'DEFAULT',
  size = 'SMALL',
  width,
  style,
  disabled,
}: Props) => {
  return (
    <StyledDesktopButton
      style={{ width, ...style }}
      onClick={onClick}
      $styleType={styleType}
      $size={size}
      disabled={disabled || styleType === 'DISABLED'}
    >
      {children}
    </StyledDesktopButton>
  );
};

export default DesktopButton;

const StyledDesktopButton = styled.button<{
  $styleType: ButtonStyleType;
  $size: DesktopButtonSize;
}>`
  ${flex({ alignItems: 'center', justifyContent: 'center' })}
  border-radius: 8px;
  word-break: keep-all;

  ${(props) => props && getButtonStyle[props.$styleType]};
  ${(props) => props && getDesktopButtonSize[props.$size]};
`;
