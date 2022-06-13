import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Card,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { CharacterCard, CharacterProps } from '../character/card';
import { getRandomCharacter } from '../../helpers/character';
import { grey } from '@mui/material/colors';

interface CreateTeamDialogProps {}

const CreateTeamDialog = (props: CreateTeamDialogProps) => {
  const MAX_POINTS = 30;
  const [team, setTeam] = useState<CharacterProps[]>([]);
  const [points, setPoints] = useState(0);

  useEffect(() => {
    const teamPoints = team.reduce((acc, { points }) => (acc += points), 0);
    setPoints(teamPoints);
  }, [team.length]);

  const getCharacter = (points: number) => {
    let newMember: CharacterProps;

    do {
      newMember = getRandomCharacter(points);
      // TODO: fix infinite loop
    } while (
      team.some(
        ({ name, points }) =>
          name === newMember.name && points === newMember.points
      )
    );

    setTeam([...team, newMember]);
  };

  return (
    <>
      <DialogTitle color="#f0f0f0">Create Team</DialogTitle>
      <DialogContent
        sx={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignContent: 'space-around',
          gap: 2
        }}
      >
        {team.map((data, i) => (
          <CharacterCard key={i} data={data} />
        ))}
        {team.length < 5 && points + 1 < MAX_POINTS ? (
          <Card
            variant="outlined"
            sx={{
              width: 250,
              height: 250,
              textAlign: 'center',
              cursor: 'pointer',
              borderColor: 'secondary.dark',
              backgroundColor: 'transparent',
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              padding: 2,
              justifyContent: 'space-around',
              alignContent: 'space-around',
              boxSizing: 'border-box'
            }}
          >
            {Array.from({ length: 8 }, (_, i) => i + 2)
              .reverse()
              .map((value) => (
                <Button
                  key={value}
                  onClick={() => {
                    getCharacter(value);
                  }}
                  disabled={points + value > MAX_POINTS}
                  sx={{
                    backgroundColor: 'secondary.dark',
                    color: '#f0f0f0',

                    ':hover': {
                      backgroundColor: 'secondary.main'
                    },

                    ':disabled': {
                      backgroundColor: grey[900]
                    }
                  }}
                >
                  {value}
                </Button>
              ))}
          </Card>
        ) : null}
      </DialogContent>
      <DialogActions></DialogActions>
    </>
  );
};

export const CreateTeamButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Box
        component="span"
        mb={2}
        sx={{
          borderWidth: 2,
          borderStyle: 'dashed',
          borderColor: 'secondary.dark',
          borderRadius: 3,
          padding: 2,
          cursor: 'pointer',
          opacity: 0.8,

          '&:hover': {
            opacity: 1
          },

          '& *': {
            verticalAlign: 'text-top'
          }
        }}
        onClick={() => {
          setIsOpen(true);
        }}
      >
        <AddIcon fontSize="small" sx={{ color: '#fefefe' }} />
        <Typography variant="button">Create new team</Typography>
      </Box>

      <Dialog
        open={isOpen}
        maxWidth="lg"
        onClose={handleClose}
        fullWidth
        PaperProps={{ sx: { backgroundColor: '#0e0e0e' } }}
      >
        <CreateTeamDialog />
      </Dialog>
    </>
  );
};
