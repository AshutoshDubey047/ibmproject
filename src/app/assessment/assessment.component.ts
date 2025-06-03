import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Question {
  text: string;
  options: string[];
  answer: number;
  selected?: number;
}

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.css']
})
export class AssessmentComponent implements OnInit {
  questions: Question[] = [];
  currentQuestionIndex = 0;
  showResults = false;
  score = 0;
  passMark = 2; // For demo; set to 25 for real test

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.questions = [
      {
        text: 'What is the output of 2 + 2?',
        options: ['3', '4', '5', '22'],
        answer: 1
      },
      {
        text: 'Which is a programming language?',
        options: ['Python', 'Snake', 'Lion', 'Tiger'],
        answer: 0
      }
      // Add more questions as needed
    ];
  }

  selectOption(optionIndex: number): void {
    this.questions[this.currentQuestionIndex].selected = optionIndex;
  }

  nextQuestion(): void {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
    }
  }

  prevQuestion(): void {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
    }
  }

  submit(): void {
    this.score = this.questions.filter(q => q.selected === q.answer).length;
    this.showResults = true;
  }

  restart(): void {
    this.questions.forEach(q => q.selected = undefined);
    this.currentQuestionIndex = 0;
    this.showResults = false;
    this.score = 0;
  }

  onBack(): void {
    this.router.navigate(['/education-detail']);
  }

  onNext(): void {
    this.router.navigate(['/career-detail']);
  }

  isAnyQuestionUnanswered(): boolean {
    return this.questions.some(q => q.selected === undefined);
  }
}
