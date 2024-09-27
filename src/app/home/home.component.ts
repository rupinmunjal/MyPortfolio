import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  content!: any;
  motto!: string;

  constructor(private titleService: Title, private http: HttpClient) {
    this.titleService.setTitle('Rupin Munjal | Home');
  }

  getContent() {
    let url = 'assets/data/content.json';
    this.http.get(url).subscribe((res) => {
      this.content = res;
      this.motto = this.content.motto;
    });
  }

  ngOnInit(){
    this.getContent();
  }
}
