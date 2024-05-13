import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  showHeader = this.router.events.pipe(
    filter((event) => event instanceof NavigationEnd),
    map((event: any) => {
      const withoutHeaders = [
        '/auth/login',
      ];

      return withoutHeaders.includes(event.url);
    })
  );
  constructor(private readonly router: Router) {}
  ngOnInit(): void {}
}
