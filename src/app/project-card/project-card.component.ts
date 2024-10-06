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
  @Input() project!: any; // Input property to receive project data

  modalRef?: BsModalRef; // Reference for the modal

  // Constructor to inject dependencies
  constructor(
    private tagColorService: TagColorService, // Inject TagColorService for tag colors
    private modalService: BsModalService // Inject modal service to manage modals
  ) { }


  // Opens the project modal with the project's details.
  openProjectModal() {
    const modalOptions: ModalOptions = {
      class: "modal-lg", // Set modal size
      initialState: {
        project: this.project // Pass the current project data to the modal
      }
    };
    this.modalRef = this.modalService.show(ProjectModalComponent, modalOptions); // Show the modal
  }

  getTagColor(tag: string) {
    return this.tagColorService.getTagColor(tag); // Return the color from the TagColorService
  }
}