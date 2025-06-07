import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class AppHome implements OnInit, OnDestroy {
  images = [
    {
      url: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=900&q=80',
      title: 'Welcome to Tech Career AI',
      desc: 'Your personalized AI-powered career counseling platform.'
    },
    {
      url: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80',
      title: 'Skill Assessment',
      desc: 'Discover your strengths and get tailored tech career advice.'
    },
    {
      url: 'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=900&q=80',
      title: 'Personalized Roadmap',
      desc: 'Get clear steps and resources to achieve your dream tech job!'
    }
  ];
  currentIndex = 0;
  intervalId: any;

  ngOnInit() {
    // Auto-slide every 2 seconds (2000 ms)
    this.intervalId = setInterval(() => {
      this.next();
    }, 1);
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  goTo(index: number) {
    this.currentIndex = index;
  }
}
