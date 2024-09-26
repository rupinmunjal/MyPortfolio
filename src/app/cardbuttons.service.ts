import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardbuttonsService {
  likeCard(data: any) {
    document.getElementById(data)!.style.color = "crimson";
  }
}
