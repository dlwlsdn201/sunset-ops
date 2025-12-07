import { css } from '../../styled-system/css';

export interface PandaButtonProps {
  /** Is this the principal call to action on the page? */
  primary?: boolean;
  /** How large should the button be? */
  size?: 'small' | 'medium' | 'large';
  /** Button contents */
  label: string;
  /** Optional click handler */
  onClick?: () => void;
}

/** PandaCSS를 사용한 버튼 컴포넌트 예제 */
export const PandaButton = ({
  primary = false,
  size = 'medium',
  label,
  ...props
}: PandaButtonProps) => {
  const buttonStyles = css({
    borderRadius: 'md',
    border: '1px solid transparent',
    fontWeight: '500',
    fontFamily: 'inherit',
    cursor: 'pointer',
    transition: 'all 0.2s',
    _hover: {
      opacity: 0.9,
    },
    _focus: {
      outline: '2px solid',
      outlineColor: 'blue.500',
      outlineOffset: '2px',
    },
    ...(primary
      ? {
          bg: 'blue.600',
          color: 'white',
          _hover: {
            bg: 'blue.700',
          },
        }
      : {
          bg: 'gray.200',
          color: 'gray.900',
          _hover: {
            bg: 'gray.300',
          },
        }),
    ...(size === 'small'
      ? {
          padding: '0.4em 0.8em',
          fontSize: '0.875em',
        }
      : size === 'large'
        ? {
            padding: '0.8em 1.6em',
            fontSize: '1.125em',
          }
        : {
            padding: '0.6em 1.2em',
            fontSize: '1em',
          }),
  });

  return (
    <button type="button" className={buttonStyles} {...props}>
      {label}
    </button>
  );
};

