import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayersComponent } from './modules/players/players.component';
import { TeamsComponent } from './modules/teams/teams.component';
import { TeamsDetailsComponent } from './modules/teams-details/teams-details.component';

const routes: Routes = [
  { path: 'players', component: PlayersComponent },
  { path: 'teams', component: TeamsComponent },
  {
    path: 'teams-details/:teamDetails',
    component: TeamsDetailsComponent,
  },
  { path: '**', redirectTo: 'players' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
