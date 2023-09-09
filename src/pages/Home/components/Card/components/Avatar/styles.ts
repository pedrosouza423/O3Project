import styled from 'styled-components';

export const AvatarImage = styled.img`
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  box-sizing: border-box;

  &.avatarWithBorder {
    box-sizing: initial;
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
    border: 4px solid var(--gray-800);
    outline: 2px solid var(--green-500);
  }
`;
