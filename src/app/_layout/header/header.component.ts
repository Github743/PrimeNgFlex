import { Component, ElementRef, ViewChild, Input, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LayoutService } from "../service/app.layout.service";
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'otsi-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  items!: MenuItem[];
  @ViewChild('menubutton') menuButton!: ElementRef;

  @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

  @ViewChild('topbarmenu') menu!: ElementRef;
  constructor(public layoutService: LayoutService) {

  }
  isLoggedIn: Observable<boolean>;
  public employeeName: String = "";
  @Input() title: string = '';
  ngOnInit(): void {
    this.isLoggedIn = of(true);


  }

  logOut() {

  }

}
