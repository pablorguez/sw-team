import React from "react";

export interface TeamProps {
  variant: "list" | "full";
  data: TeamDataProps;
}

export interface TeamDataProps {
  characters: {
    name: string;
    image: string;
    points: number;
  }[];
  inventory: {
    weapons: {
      name: string;
      image: string;
      dice: "red" | "blue" | "green";
    }[];
    items: {
      name: string;
      image: string;
      amount: number;
    }[];
  };
}

export const Team = (props: TeamProps) => <></>;
