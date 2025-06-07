import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  services = [
    {
      icon: '🧑‍💻',
      title: 'AI Career Counseling',
      description: 'Personalized, AI-driven guidance to help you choose the right tech career path based on your skills and interests.'
    },
    {
      icon: '📝',
      title: 'Skill Assessment',
      description: 'Interactive quizzes and assessments to evaluate your technical and soft skills for better career recommendations.'
    },
    {
      icon: '📚',
      title: 'Learning Roadmaps',
      description: 'Step-by-step learning plans and curated resources to help you upskill and achieve your career goals.'
    },
    {
      icon: '💼',
      title: 'Resume & Interview Prep',
      description: 'Expert tips, resume templates, and mock interview practice to help you land your dream job.'
    },
    {
      icon: '🤝',
      title: 'Mentorship',
      description: 'Connect with industry mentors for one-on-one guidance, career advice, and networking opportunities.'
    },
    {
      icon: '🌐',
      title: 'Job & Internship Finder',
      description: 'Find the latest tech jobs and internships, tailored to your profile and aspirations.'
    }
  ];
}
