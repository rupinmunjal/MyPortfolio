import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'A4';

  darkMode: boolean = false;

  toggleDarkMode() {
    this.darkMode != this.darkMode;
  }

  project!: any;
  content!: any;

  projectsArray!: any[];
  name!: string;
  occupation!: string;
  motto!: string;
  about!: string;
  contacts!: any[];

  constructor(private http: HttpClient) { }

  getProject() {
    let url = 'assets/data/projects.json';
    this.http.get(url).subscribe((res) => {
      this.project = res;
      this.projectsArray = this.project.projects;
    });
  }

  getContent() {
    let url = 'assets/data/content.json';
    this.http.get(url).subscribe((res) => {
      this.content = res;
      this.name = this.content.name;
      this.occupation = this.content.occupation;
      this.about = this.content.about;
      this.motto = this.content.motto;
      this.contacts = this.content.contacts;
    });
  }

  ngOnInit(){
    this.getContent();
    this.getProject();
  }
}
