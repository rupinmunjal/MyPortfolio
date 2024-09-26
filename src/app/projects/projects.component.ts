import { Component, Input } from '@angular/core';
import { CardbuttonsService } from '../cardbuttons.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})

export class ProjectsComponent {
  filterText: string = "";
  filteredProjects: any[] = [];

  projectsArray: any[] = [];
  project!: any;

  constructor(private cardService: CardbuttonsService, private http: HttpClient) { }

  getProject() {
    let url = 'assets/data/projects.json';
    this.http.get<any[]>(url).subscribe((res) => {
      this.project = res;
      this.projectsArray = this.project.projects;
      this.filteredProjects = [...this.projectsArray];
    });
  }

  ngOnInit(){
    this.getProject();
  }

  filterProjects() {
    this.filteredProjects = this.projectsArray.filter((project) => project.title.toLowerCase().includes(this.filterText.toLowerCase()));
  }

  likeCard(elem: any) {
    this.cardService.likeCard(elem);
  }
}
