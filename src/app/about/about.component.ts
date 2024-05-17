import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExampleService } from '../core/services/example.service';
import { User } from '../core/interfaces/user.interface';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  name = '';
  counter = 0;
  imageUrl = 'https://angular.io/assets/images/logos/angular/angular.svg';
  isDisabled = true;
  title = 'Angular Data Binding';
  items = ['Item 1', 'Item 2', 'Item 3'];
  isHighlighted = false;
  showDirective = false;
  showBinding = true;
  showService = false;
  showDecoraters = false;
  fontSize = 20;
  users: User[] = [];

  constructor(private router: Router, private dataService: ExampleService) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.dataService.getPosts().subscribe(
      (data) => {
        this.users = data;
      },
      (error) => console.error(error)
    );
  }

  toggleHighlight() {
    this.isHighlighted = !this.isHighlighted;
  }

  navigateToAbout() {
    this.router.navigate(['about']);
  }
  navigateToHome() {
    this.router.navigate(['home']);
  }

  incrementCounter() {
    this.counter++;
  }
  toggleBinding() {
    if (this.showBinding) {
      return;
    }
    this.showDirective = false;
    this.showService = false;
    this.showDecoraters = false;
    this.showBinding = !this.showBinding;
  }
  toggleDirective() {
    if (this.showDirective) {
      return;
    }
    this.showBinding = false;
    this.showService = false;
    this.showDecoraters = false;
    this.showDirective = !this.showDirective;
  }
  toggleService() {
    if (this.showService) {
      return;
    }
    this.showBinding = false;
    this.showDirective = false;
    this.showDecoraters = false;
    this.showService = !this.showService;
  }
  toggleDecorators() {
    if (this.showDecoraters) {
      return;
    }
    this.showBinding = false;
    this.showDirective = false;
    this.showService = false;
    this.showDecoraters = !this.showDecoraters;
  }
}
