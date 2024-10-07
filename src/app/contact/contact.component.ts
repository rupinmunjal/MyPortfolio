import { Component, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { GetContentService } from '../services/get-content.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  personal!: any; // Variable to hold personal contact information

  constructor(private titleService: Title, private getContentService: GetContentService) {
    // Set the document title for the contact page
    this.titleService.setTitle('Rupin Munjal | Contact');
  }

  // Method to fetch personal content from the service
  getContent() {
    this.getContentService.getContent().subscribe((res) => {
      this.personal = res; // Store the fetched personal contact information
    });
  }

  // Lifecycle hook to initialize the component and fetch content
  ngOnInit() {
    this.getContent(); // Call method to get personal contact information when the component initializes
  }
}
