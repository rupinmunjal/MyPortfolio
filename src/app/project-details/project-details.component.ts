import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {
  projectsArray: any[] = [];
  projectId!: number;
  detailsProject!: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.projectId = Number(params.get('id'));
      this.getProject();
    });
  }

  getProject() {
    const url = 'assets/data/projects.json';
    this.http.get<any>(url).subscribe((res) => {
      this.projectsArray = res.projects;
      this.findProjectById();
    });
  }

  findProjectById() {
    this.detailsProject = this.projectsArray.find(project => project.id === this.projectId);
  }
}
