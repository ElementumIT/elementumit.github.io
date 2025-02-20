import { SimpleGraphService } from './../services/SimpleGraphService.module';
import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.less'],
})
export class PageHomeComponent implements OnInit {
  public queryResult: any;

  constructor(private simpleGraphService: SimpleGraphService, private http: HttpClient) {}
  ngOnInit(): void {}
  tryGraphQuery() {
    this.simpleGraphService
      .query<any>({
        relPath: '/purchaseorder/graphql/',
        query: `
        {
          purchaseOrders (where: { createdDate: {gt: "2021-01-01"}}) {
             ponumber
          }
        }`,
      })
      .pipe(
        catchError((err) => {
          console.log('ERROR ERROR ERROR');
          console.log(err);
          return throwError(err.message || 'server error.');
        })
      )
      // .pipe(map((result) => result.perfMetricsMonthEndSignoffs))
      .subscribe((x) => {
        console.log(x);
        this.queryResult = x;
      });
  }

  getNotionTasks() {
    this.http.get('https://us-central1-elementumit-hello-world.cloudfunctions.net/get-notion-tasks')
      .subscribe(
        (data) => {
          console.log(data);
        },
        (error) => {
          console.error('Error fetching Notion tasks:', error);
        }
      );
  }
}
