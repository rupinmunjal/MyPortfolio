import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { GetProjectService } from '../services/get-project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})

export class ProjectsComponent {
  constructor(
    private titleService: Title, // Injecting the Title service to manage the page title
    private getProjectService: GetProjectService // Injecting the service to get project data
  ) {
    this.titleService.setTitle("Rupin Munjal | Projects"); // Set the page title
  }

  projects!: any; // Variable to hold project data

  // Method to fetch project data from the service
  getProject() {
    this.getProjectService.getProject().subscribe((res) => {
      this.projects = res; // Assigning the fetched data to the projects variable
    });
  }

  ngOnInit() {
    this.getProject(); // Fetch project data on component initialization
  }
}
