import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-page-contact',
  templateUrl: './page-contact.component.html',
  styleUrls: ['./page-contact.component.less']
})
export class PageContactComponent implements OnInit {
  token: string|undefined;

  constructor() {
    this.token = undefined;
  }

  ngOnInit(): void {
    console.log('here is the token:');
    console.log(this.token);
  }
  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
    console.log('here is the token:');
    console.log(this.token);
  }
  public send(form: NgForm): void {
    if (form.invalid) {
      for (const control of Object.keys(form.controls)) {
        form.controls[control].markAsTouched();
      }
      return;
    }

    console.debug(`Token [${this.token}] generated`);
  }
}
