import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotionTasksService {
  private apiUrl = 'https://us-central1-elementumit-hello-world.cloudfunctions.net/get-notion-tasks';

  constructor(private http: HttpClient) {}

  getTasks(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
