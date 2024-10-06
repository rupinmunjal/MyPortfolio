import { Component } from '@angular/core';
import { GetContentService } from '../services/get-content.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  personal!: any; // Variable to hold personal data

  constructor(private getContentService: GetContentService) { } // Injecting the service

  // Method to fetch content from the service
  getContent() {
    this.getContentService.getContent().subscribe((res) => {
      this.personal = res; // Assign the response to the personal variable
    });
  }

  ngOnInit() {
    this.getContent(); // Fetch content when the component initializes
  }
}