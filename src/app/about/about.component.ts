import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  constructor(private titleService: Title, private http: HttpClient) {
    this.titleService.setTitle('Rupin Munjal | About'); // Setting the page title in the constructor
  }

  personal!: any; // Variable to hold personal data

  // Method to fetch content from a JSON file
  getContent() {
    let url = 'assets/data/content.json'; // URL to the JSON file
    this.http.get(url).subscribe((res) => {
      this.personal = res; // Assigning the response to the personal variable
    });
  }

  ngOnInit() {
    this.getContent(); // Fetch content when the component initializes
  }
}
