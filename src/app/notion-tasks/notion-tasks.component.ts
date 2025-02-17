import { Component, OnInit } from '@angular/core';
import { NotionTasksService } from '../services/notion-tasks.service';

@Component({
  selector: 'app-notion-tasks',
  templateUrl: './notion-tasks.component.html',
  // styleUrls: ['./notion-tasks.component.less']
})
export class NotionTasksComponent implements OnInit {
  tasks: any[] = [];

  constructor(private notionTasksService: NotionTasksService) {}

  ngOnInit(): void {
    this.notionTasksService.getTasks().subscribe((data: any) => {
      this.tasks = data.results;
    });
  }
}
