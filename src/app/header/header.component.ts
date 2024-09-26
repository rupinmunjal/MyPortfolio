import { Component,Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor( private http: HttpClient) { }
  
  content!: any;
  name!: string;
  occupation!: string;
  motto!: string;

  getContent() {
    let url = 'assets/data/content.json';
    this.http.get(url).subscribe((res) => {
      this.content = res;
      this.name = this.content.name;
      this.occupation = this.content.occupation;
      this.motto = this.content.motto;
    });
  }

  ngOnInit(){
    this.getContent();
  }
}
