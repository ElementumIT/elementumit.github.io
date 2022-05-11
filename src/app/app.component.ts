import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'Elementum I.T. Consulting';

  constructor(private router: Router) {
    let path = localStorage.getItem('path');
    console.log('path pulled from localStorage: ' + path);
    if(path) {
      localStorage.removeItem('path');
      this.router.navigate([path]);
    }
  }
}
