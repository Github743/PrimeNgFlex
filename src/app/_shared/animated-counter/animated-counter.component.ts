import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animated-counter',
  templateUrl: './animated-counter.component.html',
  styleUrls: ['./animated-counter.component.css']
})
export class AnimatedCounterComponent implements OnInit {

  counterValue: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
