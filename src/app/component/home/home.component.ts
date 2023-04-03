import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private route: Router) {}

  ngOnInit(): void {}

  goToList() {
    return this.route.navigateByUrl('/home/view');
  }

  isAddCustomerRoute() {
    return this.route.url === '/home/create';
  }

  isListRoute() {
    return this.route.url === '/home/view';
  }
}
