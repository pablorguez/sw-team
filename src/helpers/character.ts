import { settings } from '../settings';
import { CharacterProps } from '../components/character/card';

interface Characters {
  [key: number]: CharacterProps[];
}

export const getRandomCharacter = (points: number): CharacterProps => {
  const { characters }: { characters: Characters } = settings;

  const charactersAmount = characters[points].length;
  const randomCharacter = Math.max(
    0,
    Math.floor(Math.random() * charactersAmount) - 1
  );

  return characters[points][randomCharacter];
};
