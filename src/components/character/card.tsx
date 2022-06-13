import React from 'react';
import { Box, Button, Card, CardMedia } from '@mui/material';

export interface CharacterProps {
  name: string;
  skills: {
    attack: number;
    stealth: number;
    diplomacy: number;
  };
  keywords: string[];
  points: number;
}

export interface CharacterCardProps {
  variant?: 'team' | 'detail';
  data: CharacterProps;
  onClick?: (points: number) => void;
}

export const CharacterCard = (props: CharacterCardProps) => {
  const { variant = 'team', data, onClick } = props;

  return (
    <Box>
      <Card
        variant="outlined"
        sx={{
          width: 250,
          height: 250,
          textAlign: 'center',
          cursor: 'pointer',
          borderColor: 'secondary.dark',
          backgroundColor: 'transparent'
        }}
      >
        <CardMedia
          component="img"
          image={`images/characters/${data.name
            .toLowerCase()
            .replace(' ', '-')}.jpeg`}
          alt={data.name}
        />
      </Card>
    </Box>
  );
};
