import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  @Input() canGoBack = true;
  @Input() canGoForward = false;
  @Output() back = new EventEmitter<void>();
  @Output() forward = new EventEmitter<void>();
}
