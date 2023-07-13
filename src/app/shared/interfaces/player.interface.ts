export interface PlayerDetails {
  id: string;
  imagePath: string;
  retiree: boolean;
  team: string;
  name: string;
  position: string;
  curiosity: string;
  participations: string;
  alt: string;
  showMoreDetails: boolean;
}

export interface PlayersInfo {
  first_name: string;
  last_name: string;
  team: PlayerTeamInfo;
}

export interface PlayerTeamInfo {
  full_name: string;
}
