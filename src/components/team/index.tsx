import React, { useState } from "react";
import { Team } from "./team";
import { useSessionStorage } from "../../hooks/session-storage";

import { TeamDataProps } from "./team";
import { CreateTeamButton } from "./create";

export const Teams = () => {
  const [teams, setTeams] = useSessionStorage("teams", []);

  return (
    <>
      <CreateTeamButton />

      {teams.map((team: TeamDataProps) => (
        <Team variant="list" data={team} />
      ))}
    </>
  );
};
