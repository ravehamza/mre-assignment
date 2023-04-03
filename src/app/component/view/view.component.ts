import { Business } from './../../_shared/model/model';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
})
export class ViewComponent implements OnInit {
  data$!: Observable<any>;
  constructor(
    private route: Router,
    private store: Store<{ business: Business }>
  ) {}

  ngOnInit(): void {
    this.data$ = this.store.pipe(select('business'));
  }

  goToCreate() {
    return this.route.navigateByUrl('/home/create');
  }
}
