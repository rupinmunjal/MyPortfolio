import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  constructor(private http: HttpClient) { } // Injecting HttpClient for making HTTP requests

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