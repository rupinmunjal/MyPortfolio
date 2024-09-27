import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  content!: any;
  about!:string;

  constructor(private titleService: Title, private http: HttpClient) {
    this.titleService.setTitle('Rupin Munjal | About');
  }  

  getContent() {
    let url = 'assets/data/content.json';
    this.http.get(url).subscribe((res) => {
      this.content = res;
      this.about = this.content.about;
    });
  }

  ngOnInit(){
    this.getContent();
  }
}
