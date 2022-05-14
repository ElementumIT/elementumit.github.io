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
    let tag = localStorage.getItem('tag');
    console.log('path pulled from localStorage: ' + path);
    console.log('tag pulled from localStorage: ' + tag);
    if(path) {
      localStorage.removeItem('path');
      if (tag) {
        localStorage.removeItem('tag');
        console.log('will navigate to: ' + path+'#'+tag);
        // this.router.navigate([path+'#'+tag]);
        this.router.navigate([path]);
      } else {
        console.log('will navigate to: ' + path+'#'+tag);
        this.router.navigate([path]);
      }
     
    }
  }
}
