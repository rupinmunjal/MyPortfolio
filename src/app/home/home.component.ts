import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  constructor(private titleService: Title, private http: HttpClient) {
    this.titleService.setTitle('Rupin Munjal | Home'); // Set page title in the constructor
  }

  personal!: any; // Variable to store personal information fetched from JSON
  featuredProject!: any; // Variable to store featured project data fetched from JSON
  projectIndex: number = 0; // Index of the featured project to display

  // Fetch personal data from a JSON file
  getContent() {
    let url = 'assets/data/content.json'; // Path to the personal data JSON file
    this.http.get(url).subscribe((res) => {
      this.personal = res; // Store fetched data in the personal variable
    });
  }

  // Fetch project data from a JSON file
  getProject() {
    let url = 'assets/data/projects.json'; // Path to the projects JSON file
    this.http.get<any[]>(url).subscribe((res) => {
      this.featuredProject = res[this.projectIndex]; // Store the specific project data in featuredProject
    });
  }

  ngOnInit() {
    // Call methods to fetch content when the component initializes
    this.getContent();
    this.getProject();
  }
}