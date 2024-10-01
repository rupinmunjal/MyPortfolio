import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  constructor(private titleService: Title, private http: HttpClient){
    this.titleService.setTitle('Rupin Munjal | Home'); // Setting the page title in the constructor
  }

  personal!: any; // Variable to hold personal data
  featuredProject!: any; // Variable to hold project data

  // Method to fetch content from a JSON file
  getContent() {
    let url = 'assets/data/content.json'; // URL to the JSON file
    this.http.get(url).subscribe((res) => {
      this.personal = res; // Assigning the response to the personal variable
    });
  }

  getProject() {
    const projectIndex = 1; // Set your desired project index here
    let url = 'assets/data/projects.json';
    this.http.get<any[]>(url).subscribe((res) => {
      this.featuredProject = res[projectIndex];
    });
  }

  ngOnInit() {
    this.getContent(); // Fetch content when the component initializes
    this.getProject();
  }
}