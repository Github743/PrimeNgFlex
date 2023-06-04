import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Observable } from 'rxjs';

@Component({
  selector: 'otsi-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  sidbarItems!: MenuItem[];
  isLoggedIn: Observable<boolean>;
  constructor() { }

  ngOnInit(): void {

  }

}
