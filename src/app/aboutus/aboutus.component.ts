import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {
  submitted = false;

  constructor() { }

  ngOnInit(): void { }

  onSubmit(form: any) {
    if (form.valid) {
      this.submitted = true;
      form.reset();
      setTimeout(() => (this.submitted = false), 4000); // Hide message after 4s
    }
  }
}
