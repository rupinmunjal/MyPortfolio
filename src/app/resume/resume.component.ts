import { Component, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { GetResumeService } from '../services/get-resume.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {
  isEducationOpen: boolean = false; // State for Education accordion
  isExperienceOpen: boolean = false; // State for Experience accordion
  isVolunteeringOpen: boolean = false; // State for Volunteering accordion
  isCertificationsOpen: boolean = false; // State for Certifications accordion
  isSkillsOpen: boolean = false; // State for Skills accordion

  resume!: any; // Variable to hold resume data

  constructor(
    private titleService: Title, // Service to manage the document title
    private renderer: Renderer2, // Renderer for DOM manipulation
    private getResumeService: GetResumeService // Service to fetch resume data
  ) {
    this.titleService.setTitle('Rupin Munjal | Resume'); // Set the page title
  }

  ngOnInit() {
    this.getResume(); // Fetch resume data when the component initializes
  }

  getResume() {
    this.getResumeService.getResume().subscribe(res => {
      this.resume = res; // Store fetched resume data
    });
  }

  downloadResume() {
    this.createLink('../../assets/rupin_resume.pdf', 'rupin_resume', true); // Initiate download of the resume
  }

  viewResume() {
    this.createLink('../../assets/rupin_resume.pdf', '', false); // Open resume in a new tab
  }

  private createLink(href: string, filename: string, download: boolean) {
    const link = this.renderer.createElement('a'); // Create a new anchor element
    link.setAttribute('target', '_blank'); // Open link in a new tab
    link.setAttribute('href', href); // Set the href attribute for the link
    if (download) {
      link.setAttribute('download', filename); // Set the download attribute if applicable
    }
    link.click(); // Simulate a click to trigger the action
    link.remove(); // Clean up the link element
  }

  keys(): Array<any> {
    return Object.entries(this.resume.skills); // Return entries of the skills object for display
  }
}
