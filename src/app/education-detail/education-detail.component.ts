import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface EducationPath {
  title: string;
  overview: string;
  courseSteps: string[];
  certifications?: string[];
  duration: string;
  readinessTestAvailable: boolean;
}

@Component({
  selector: 'app-education-detail',
  templateUrl: './education-detail.component.html',
  styleUrls: ['./education-detail.component.css']
})
export class EducationDetailComponent implements OnInit {
  educationPath: EducationPath | null = null;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // For demo, mock data. Replace with service data or route params.
    this.educationPath = {
      title: 'B.Tech in Computer Science',
      overview: 'A 4-year undergraduate program focusing on computer science fundamentals and practical skills.',
      courseSteps: [
        'Semester 1: Mathematics, Programming Basics',
        'Semester 2: Data Structures, Digital Logic',
        'Semester 3: Algorithms, Computer Architecture',
        'Semester 4: Operating Systems, Database Systems',
        'Semester 5-8: Advanced topics, electives, projects',
      ],
      certifications: ['Certified Java Programmer', 'AWS Certified Solutions Architect'],
      duration: '4 years',
      readinessTestAvailable: true,
    };
  }

  onBack(): void {
    this.router.navigate(['/choose-path']);
  }

  onNext(): void {
    if (this.educationPath?.readinessTestAvailable) {
      this.router.navigate(['/assessment']);
    } else {
      // If no test, proceed to career detail or final page as per your flow
      this.router.navigate(['/career-detail']);
    }
  }
}
