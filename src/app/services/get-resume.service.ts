import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetResumeService {
  constructor(private http: HttpClient) { }

  getResume() {
    let url = 'assets/data/resume.json'; // Path to the resume data JSON file
    return this.http.get(url);
  }
}
