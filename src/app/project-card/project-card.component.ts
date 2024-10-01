import { Component, Input } from '@angular/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { TagColorService } from 'src/app/services/tag-color.service';
import { ProjectModalComponent } from '../project-modal/project-modal.component';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent {
  @Input() project!: any;

  modalRef?: BsModalRef;

  constructor(private tagColorService: TagColorService, private modalService: BsModalService) { } // Inject the service

  openProjectModal() {
    const modalOptions: ModalOptions = {
      class: "modal-lg",
      initialState: {
        project: this.project
      }
    };
  
    this.modalRef = this.modalService.show(ProjectModalComponent, modalOptions);
  }  

  getTagColor(tag: string) {
    return this.tagColorService.getTagColor(tag);
  }
}
