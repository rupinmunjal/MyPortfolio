import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { GetContentService } from '../services/get-content.service';
import { GetProjectService } from '../services/get-project.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  constructor(
    private titleService: Title, // Injecting the Title service to manage the page title
    private getContentService: GetContentService, // Injecting the service to get personal content
    private getProjectService: GetProjectService // Injecting the service to get project data
  ) {
    this.titleService.setTitle('Rupin Munjal | Home'); // Set the page title in the constructor
  }

  personal!: any; // Variable to store personal information fetched from JSON
  featuredProject!: any; // Variable to store featured project data fetched from JSON
  projectIndex: number = 0; // Index of the featured project to display

  // Method to fetch personal data from a JSON file
  getContent() {
    this.getContentService.getContent().subscribe((res) => {
      this.personal = res; // Assigning the fetched data to the personal variable
    });
  }

  // Method to fetch project data from a JSON file
  getProject() {
    this.getProjectService.getProject().subscribe((res) => {
      this.featuredProject = res[this.projectIndex]; // Fetching the project using the specified index
    });
  }

  ngOnInit() {
    // Call methods to fetch content when the component initializes
    this.getContent(); // Fetch personal information
    this.getProject(); // Fetch featured project information
  }
}