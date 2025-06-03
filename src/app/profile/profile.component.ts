import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface AcademicOption {
  label: string;
  value: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  academicLevels: AcademicOption[] = [
    { label: 'Under 10th', value: 'under-10th' },
    { label: '10th Pass', value: '10th-pass' },
    { label: '12th Arts', value: '12th-arts' },
    { label: '12th Science', value: '12th-science' },
    { label: '12th Commerce', value: '12th-commerce' },
    { label: 'B.Tech', value: 'btech' },
    { label: 'BCA', value: 'bca' },
    { label: 'BBA', value: 'bba' },
    { label: 'B.Sc', value: 'bsc' },
    { label: 'BA', value: 'ba' },
    { label: 'B.Com', value: 'bcom' },
    { label: 'Diploma', value: 'diploma' },
    { label: 'MBA', value: 'mba' },
    { label: 'MCA', value: 'mca' },
    { label: 'M.Tech', value: 'mtech' },
    { label: 'MA', value: 'ma' },
    { label: 'M.Sc', value: 'msc' },
    { label: 'Dropout', value: 'dropout' },
    { label: 'Gap Year', value: 'gap-year' },
    { label: 'Working', value: 'working' },
  ];

  preferredFields: string[] = [
    'Computer Science', 'Business', 'Engineering', 'Medicine', 'Arts',
    'Science', 'Commerce', 'Education', 'Other'
  ];

  selectedAcademicLevel: string = '';
  manualAcademicInput: string = '';
  showManualAcademicInput: boolean = false;

  subjectsTaken: string = '';

  preferredField: string = '';
  manualPreferredFieldInput: string = '';
  showManualPreferredFieldInput: boolean = false;

  constructor(private router: Router) {}

  onAcademicLevelChange(value: string): void {
    this.selectedAcademicLevel = value;
    this.showManualAcademicInput = value === 'other';
    if (!this.showManualAcademicInput) {
      this.manualAcademicInput = '';
    }
    this.subjectsTaken = '';
  }

  isAcademicPassed10or12(): boolean {
    const val = this.selectedAcademicLevel.toLowerCase();
    return val === '10th-pass' || val.startsWith('12th');
  }

  onPreferredFieldChange(value: string): void {
    this.preferredField = value;
    this.showManualPreferredFieldInput = value.toLowerCase() === 'other';
    if (!this.showManualPreferredFieldInput) {
      this.manualPreferredFieldInput = '';
    }
  }

  isFormComplete(): boolean {
    const academicComplete = this.showManualAcademicInput
      ? this.manualAcademicInput.trim().length > 0
      : this.selectedAcademicLevel.length > 0;

    const subjectComplete = this.isAcademicPassed10or12()
      ? this.subjectsTaken.trim().length > 0
      : true;

    const preferredComplete = this.showManualPreferredFieldInput
      ? this.manualPreferredFieldInput.trim().length > 0
      : this.preferredField.length > 0;

    return academicComplete && subjectComplete && preferredComplete;
  }

  onBack(): void {
    // You can route to a welcome or home page if needed
    this.router.navigate(['/']);
  }

  onNext(): void {
    if (this.isFormComplete()) {
      // Save data to a service or localStorage here if needed
      this.router.navigate(['/choose-path']);
    }
  }
}
