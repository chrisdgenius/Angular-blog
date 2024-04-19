import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'squaremaintenance';

  constructor(
    private authService: AuthService,
    private router: Router) { }
    ngOnInit(){
      this.authService.appUser$.subscribe(user => {
        if (!user) {
        return;
        } else {
        const returnUrl = localStorage.getItem('returnUrl');
        if (!returnUrl) {
        return;
        }
        localStorage.removeItem('returnUrl');
        this.router.navigateByUrl(returnUrl);
        }
        });
    }
}
