import { Component, Input } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { TagColorService } from '../services/tag-color.service';

@Component({
  selector: 'app-project-modal',
  templateUrl: './project-modal.component.html',
  styleUrls: ['./project-modal.component.css']
})

export class ProjectModalComponent {
  @Input() project!: any; // Input property to receive the project data from the parent component

  // Constructor to inject modal reference and tag color service
  constructor(public modalRef: BsModalRef, private tagColorService: TagColorService) { }

  // Method to get the color for a specific tag using the TagColorService
  getTagColor(tag: string) {
    return this.tagColorService.getTagColor(tag);
  }
}
