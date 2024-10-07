import { Component } from '@angular/core';
import { GetContentService } from '../services/get-content.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  footerText: string = "Created with Angular, utilizing HTML, CSS, and TypeScript";

  personal!: any;

  constructor(private getContentService: GetContentService) { }

  getContent() {
    this.getContentService.getContent().subscribe((res) => {
      this.personal = res;
    });
  }

  ngOnInit() {
    this.getContent();
  }
}
