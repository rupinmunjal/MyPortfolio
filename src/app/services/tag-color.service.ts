import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class TagColorService {
  // Function to convert a string (technology name) into a consistent color
  stringToColor(tag: string): string {
    let hash = 0;
    for (let i = 0; i < tag.length; i++) {
      hash = tag.charCodeAt(i) + ((hash << 5) - hash);
    }
    let color = '#';
    for (let i = 0; i < 3; i++) {
      const value = (hash >> (i * 8)) & 0xFF;
      color += ('00' + value.toString(16)).slice(-2);
    }
    return color;
  }

  // Function to get color for each technology tag
  getTagColor(tag: string): string {
    return this.stringToColor(tag);
  }
}
