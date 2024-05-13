import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  showFooter = this.router.events.pipe(
    filter((event) => event instanceof NavigationEnd),
    map((event: any) => {
      const withoutFooter = [
       '/auth/login',
       '/auth/register'
      ];

      return withoutFooter.includes(event.url);
    })
  );
  constructor(private readonly router: Router) {}

  home() {
    this.router.navigateByUrl('/confession/confess?step=1');
  }

  confessions() {
    this.router.navigateByUrl('/confession/my-confession');
  }
}
