import React from 'react';
import { CharacterCard } from "./card";

export interface CharacterProps {
  variant: string;
}

export const Character = (props: CharacterProps) => {
  const { variant } = props;

  return (
    <>
      <img src="" alt="" />
    </>
  );
}
