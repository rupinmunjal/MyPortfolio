import { Component,Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  content!: any;
  contacts!: any[];

  constructor(private http: HttpClient) { }

  getContent() {
    let url = 'assets/data/content.json';
    this.http.get(url).subscribe((res) => {
      this.content = res;
      this.contacts = this.content.contacts;
    });
  }

  ngOnInit(){
    this.getContent();
  }
}
