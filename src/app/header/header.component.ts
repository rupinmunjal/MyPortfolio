import { Component,Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor( private http: HttpClient) { }
  
  personal!: any;

  getContent() {
    let url = 'assets/data/content.json';
    this.http.get(url).subscribe((res) => {
      this.personal = res;
    });
  }

  ngOnInit(){
    this.getContent();
  }
}
