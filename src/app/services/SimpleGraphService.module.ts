import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { realpath } from 'fs';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

// From: https://javascript.plainenglish.io/how-to-use-graphql-in-angular-without-apollo-client-e34d13e0892f
@Injectable({ providedIn: 'root' })
export class SimpleGraphService {
  constructor(private http: HttpClient) {}

  public query<T>(options: { relPath: string; query: string; variables?: { [key: string]: any } }): Observable<T> {
    // let rootUrl = environment.graphQlUrl + options.relPath;
    let rootUrl = 'dummy';
    return this.http
      .post<{ data: T }>(rootUrl, {
        query: options.query,
        variables: options.variables,
      })
      .pipe(
        map((d) => {
          return d.data;
        })
      );
  }

  public mutate<T>(options: {
    relPath: string;
    mutation: string;
    variables?: { [key: string]: any };
  }): Observable<any> {
    // let rootUrl = environment.graphQlUrl + options.relPath;
    let rootUrl = 'dummy';
    return this.http
      .post<{ data: T }>(rootUrl, {
        query: options.mutation,
        variables: options.variables,
      })
      .pipe(map((d) => d.data));
  }
}
