import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss'],
})
export class PlayersComponent implements OnInit {
  playersDetails = [
    {
      name: 'Michael Jordan',
      position: 'F',
      imagePath: 'assets/michael-jordan.svg',
      alt: 'Foto de Michael Jordan',
    },
    {
      name: 'Kobe Bryant',
      position: 'F',
      imagePath: 'assets/kobe-bryant.svg',
      alt: 'Foto de Kobe Bryant',
    },
    {
      name: 'Lebron James',
      position: 'F',
      imagePath: 'assets/lebron-james.svg',
      alt: 'Foto de Lebron James',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  showDetails() {
    console.log('Redireciona para detalhes emitindo player');
  }
}
