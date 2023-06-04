import { Component, OnInit } from '@angular/core';
import { SpinnerService } from '../_layout/spinner/spinner/spinner.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  employee: any;
  constructor(private spinnerService: SpinnerService) { }

  ngOnInit(): void {

  }

}
