import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  footerText: string = "Used HTML, CSS and TypeScript in Angular";

  content!: any;
  name!: string;

  constructor( private http: HttpClient) { }

  getContent() {
    let url = 'assets/data/content.json';
    this.http.get(url).subscribe((res) => {
      this.content = res;
      this.name = this.content.name;
    });
  }

  ngOnInit() {
    this.getContent();
  }
}
