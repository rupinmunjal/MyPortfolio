import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dark-mode',
  templateUrl: './dark-mode.component.html',
  styleUrls: ['./dark-mode.component.css']
})
export class DarkModeComponent {
  // Input property to receive the current dark mode state from the parent component
  @Input() darkMode!: boolean;

  // Output event emitter to notify the parent component about changes to the dark mode state
  @Output() darkModeChange = new EventEmitter();

  // Method to toggle the dark mode state
  toggleDarkMode() {
    this.darkMode = !this.darkMode; // Toggle the current state
    this.darkModeChange.emit(this.darkMode); // Emit the new state to the parent component
  }
}
