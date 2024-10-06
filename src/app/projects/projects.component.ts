import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})

export class ProjectsComponent {
  constructor(private http: HttpClient, private titleService: Title) {
    this.titleService.setTitle("Rupin Munjal | Projects"); // Set the page title
  }

  projects!: any; // Variable to hold project data

  getProject() {
    let url = 'assets/data/projects.json'; // URL for the project data
    this.http.get<any[]>(url).subscribe((res) => {
      this.projects = res; // Assign fetched data to projects
    });
  }

  ngOnInit() {
    this.getProject(); // Fetch project data on component initialization
  }
}
