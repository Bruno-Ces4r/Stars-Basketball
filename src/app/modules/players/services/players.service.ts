import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PlayersInfo } from 'src/app/shared/interfaces/player.interface';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  constructor(private http: HttpClient) {}

  getPlayerDetails(playerId: string) {
    return this.http.get<PlayersInfo>(
      `https://www.balldontlie.io/api/v1/players/${playerId}`
    );
  }
}
