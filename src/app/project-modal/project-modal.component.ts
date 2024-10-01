import { Component, Input } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { TagColorService } from '../services/tag-color.service';

@Component({
  selector: 'app-project-modal',
  templateUrl: './project-modal.component.html',
  styleUrls: ['./project-modal.component.css']
})
export class ProjectModalComponent {
  @Input() project!: any;

  constructor(public modalRef: BsModalRef, private tagColorService: TagColorService) { }

  getTagColor(tag: string) {
    return this.tagColorService.getTagColor(tag);
  }
}
