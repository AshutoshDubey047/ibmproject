import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-choose-path',
  templateUrl: './choose-path.component.html',
  styleUrls: ['./choose-path.component.css']
})
export class ChoosePathComponent {
  selectedPath: 'career' | 'education' | null = null;

  // Mock skills and suggestions
  availableSkills: string[] = [
    'Programming', 'Editing', 'Public Speaking', 'Design', 'Data Analysis', 'Writing', 'Marketing', 'Sales'
  ];
  selectedSkills: string[] = [];
  customSkill: string = '';

  // Mock career and education suggestions
  careerSuggestions = [
    {
      title: 'Software Developer',
      overview: 'Develops applications and systems software.',
      topSkills: ['Programming', 'Problem Solving'],
      miniProject: 'Build a To-Do List App',
      companies: ['Google', 'Microsoft', 'Infosys'],
      salary: '₹3-8 LPA (Entry), ₹10-25 LPA (Mid)',
      location: 'Major cities, remote',
    },
    // Add more as needed
  ];

  educationSuggestions = [
    {
      title: 'B.Tech in Computer Science',
      overview: '4-year undergraduate program in CS.',
      benefits: 'Strong job prospects, foundation in tech.',
      duration: '4 years',
      careerPotential: 'Software, Data Science, AI, etc.'
    },
    // Add more as needed
  ];

  constructor(private router: Router) {}

  selectPath(path: 'career' | 'education') {
    this.selectedPath = path;
    // Reset selections if switching
    this.selectedSkills = [];
    this.customSkill = '';
  }

  toggleSkill(skill: string) {
    if (this.selectedSkills.includes(skill)) {
      this.selectedSkills = this.selectedSkills.filter(s => s !== skill);
    } else {
      this.selectedSkills.push(skill);
    }
  }

  addCustomSkill() {
    const skill = this.customSkill.trim();
    if (skill && !this.selectedSkills.includes(skill)) {
      this.selectedSkills.push(skill);
    }
    this.customSkill = '';
  }

  canProceed(): boolean {
    if (!this.selectedPath) return false;
    if (this.selectedPath === 'career') {
      return this.selectedSkills.length > 0;
    }
    return true; // for education, just selection is enough
  }

  onBack() {
    this.router.navigate(['/profile']);
  }

  onNext() {
    if (this.selectedPath === 'career') {
      this.router.navigate(['/career-detail']);
    } else if (this.selectedPath === 'education') {
      this.router.navigate(['/education-detail']);
    }
  }

  viewRoadmap(career: any) {
    // You can pass career data via a service or route param
    this.router.navigate(['/career-detail']);
  }

  selectEducation(edu: any) {
    // You can pass education data via a service or route param
    this.router.navigate(['/education-detail']);
  }
}
