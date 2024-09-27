import { Component, Input } from '@angular/core';
import { CardbuttonsService } from '../cardbuttons.service';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})

export class ProjectsComponent {
  constructor(private cardService: CardbuttonsService, private http: HttpClient, private titleService: Title) {
    this.titleService.setTitle("Rupin Munjal | Projects");
  }

  projects!: any;

  getProject() {
    let url = 'assets/data/projects.json';
    this.http.get<any[]>(url).subscribe((res) => {
      this.projects = res;
    });
  }

  ngOnInit() {
    this.getProject();
  }

  likeCard(elem: any) {
    this.cardService.likeCard(elem);
  }
}
