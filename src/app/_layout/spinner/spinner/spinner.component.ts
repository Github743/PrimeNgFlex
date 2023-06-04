import { Component, OnInit } from '@angular/core';
import { SpinnerService } from './spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {

  visible = false;

  constructor(private spinnerService: SpinnerService) {
   }

  ngOnInit() {
    this.spinnerService.visible.subscribe(val => this.visible = val);
  }

}
