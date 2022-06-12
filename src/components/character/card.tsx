import React from 'react';
import { makeStyles, Theme } from '@mui/material';

export interface CardProps {
  src: string;
  alt: string;
  variant?: 'team' | 'detail';
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {}
}))

export const Card = (props: CardProps) => {
  const { src, alt, variant = 'team' } = props;

  return <img src={src} alt={alt} className={''} />;
}
