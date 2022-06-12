import { Box, Typography } from '@mui/material';
import React from 'react';
import { TeamList } from './list';

export const Team = () => {

  return (
    <>
      <Box>
        <Typography variant="button">Create new team</Typography>
      </Box>

      <TeamList />
    </>
  )
}
