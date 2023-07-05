import { Component, OnInit } from '@angular/core';
import { HeaderRoutes } from './interface/header.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  headerRoutes: HeaderRoutes[] = [
    { route: '/players', name: 'Jogadores' },
    { route: '/teams', name: 'Times' },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigate(route: string) {
    this.router.navigateByUrl(route);
  }
}
