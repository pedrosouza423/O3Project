import React from 'react';
import { AvatarImage } from './styles';

interface AvatarProps {
    src: string;
    hasBorder?: boolean;
    size?: 'small' | 'medium' | 'large';
  }

export function Avatar({ src, hasBorder = true } : AvatarProps) {
  return (
    <AvatarImage
      className={hasBorder ? 'avatarWithBorder' : ''}
      src={src}
    />
  );
}
