import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetContentService {
  constructor(private http: HttpClient) { }

  getContent() {
    let url = 'assets/data/content.json'; // Path to the personal data JSON file
    return this.http.get(url);
  }
}
