import { Component, OnInit } from '@angular/core';
import { PlayerDetails } from 'src/app/shared/interfaces/player.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { PlayerService } from './services/players.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss'],
})
export class PlayersComponent implements OnInit {
  isLoading = true;

  playersDetails: PlayerDetails[] = [
    {
      id: '2931',
      imagePath: 'assets/players/michael-jordan.svg',
      retiree: true,
      name: '',
      team: '',
      position: 'F',
      curiosity: 'Maior Jogador de todos os tempos',
      participations: 'Movies e Series',
      alt: 'Foto de Michael Jordan',
      showMoreDetails: false,
    },
    {
      id: '1043',
      imagePath: 'assets/players/kobe-bryant.svg',
      retiree: true,
      name: '',
      team: '',
      position: 'F',
      curiosity: 'Maior Jogador de todos os tempos',
      participations: 'Movies e Series',
      alt: 'Foto de Kobe Bryant',
      showMoreDetails: false,
    },
    {
      id: '237',
      imagePath: 'assets/players/lebron-james.svg',
      retiree: false,
      name: '',
      team: '',
      position: 'F',
      curiosity: 'Maior Jogador de todos os tempos',
      participations: 'Movies e Series',
      alt: 'Foto de Lebron James',
      showMoreDetails: false,
    },
  ];

  constructor(private route: Router, private playersService: PlayerService) {}

  ngOnInit() {
    this.getPlayersInfo();
  }

  getPlayersInfo() {
    for (const player of this.playersDetails) {
      this.playersService
        .getPlayerDetails(player.id)
        .pipe(take(1))
        .subscribe({
          next: (res) => {
            player.name = res.first_name + ' ' + res.last_name;
            player.team = res.team.full_name;
          },
          error: (_) => {
            // Mostrar que deu erro
            console.log('erro');
          },
        });
    }
    this.isLoading = false;
  }

  // TO DO: Change method name
  showDetails(player: PlayerDetails) {
    player.showMoreDetails = !player.showMoreDetails;
  }
}
