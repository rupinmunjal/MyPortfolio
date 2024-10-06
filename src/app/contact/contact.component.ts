import { Component,Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  content!: any;

  constructor(private titleService: Title, private http: HttpClient) {
    this.titleService.setTitle('Rupin Munjal | Contact');
  }  

  getContent() {
    let url = 'assets/data/content.json';
    this.http.get(url).subscribe((res) => {
      this.content = res;
    });
  }

  ngOnInit(){
    this.getContent();
  }
}
