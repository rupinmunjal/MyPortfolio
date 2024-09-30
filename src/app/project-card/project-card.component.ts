import { Component, Input } from '@angular/core';
import { TagColorService } from 'src/app/services/tag-color.service';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent {
  @Input() project: any;

  constructor(private tagColorService: TagColorService) { } // Inject the service

  getTagColor(tag: string) {
    return this.tagColorService.getTagColor(tag);
  }
}
