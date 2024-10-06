import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetProjectService {
  constructor(private http: HttpClient) { }

  getProject() {
    let url = 'assets/data/projects.json'; // Path to the personal data JSON file
    return this.http.get<any[]>(url);
  }
}
