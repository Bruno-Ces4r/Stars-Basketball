import { Component, OnInit } from '@angular/core';
import { TeamDetails } from 'src/app/shared/interfaces/team.interface';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss'],
})
export class TeamsComponent implements OnInit {
  teamsDetails: TeamDetails[] = [
    {
      name: 'Los Angeles Lakers',
      imagePath: 'assets/teams/lakers.svg',
      alt: 'Time Los Angeles Lakers',
      color: 'yellow',
    },
    {
      name: 'Chicago Bulls',
      imagePath: 'assets/teams/bulls.svg',
      alt: 'Time Chicago Bulls',
      color: 'red',
    },
    {
      name: 'Celtics',
      imagePath: 'assets/teams/celtics.svg',
      alt: 'Time Celtics',
      color: 'green',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  showDetails() {
    console.log('Redireciona para detalhes emitindo player');
  }
}
