import { Component, OnInit } from '@angular/core';
import { PlayerDetails } from 'src/app/shared/interfaces/player.interface';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss'],
})
export class PlayersComponent implements OnInit {
  playersDetails: PlayerDetails[] = [
    {
      name: 'Michael Jordan',
      position: 'F',
      imagePath: 'assets/players/michael-jordan.svg',
      alt: 'Foto de Michael Jordan',
    },
    {
      name: 'Kobe Bryant',
      position: 'F',
      imagePath: 'assets/players/kobe-bryant.svg',
      alt: 'Foto de Kobe Bryant',
    },
    {
      name: 'Lebron James',
      position: 'F',
      imagePath: 'assets/players/lebron-james.svg',
      alt: 'Foto de Lebron James',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  showDetails() {
    console.log('Redireciona para detalhes emitindo player');
  }
}
