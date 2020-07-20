import { Component, OnInit } from '@angular/core';
import { NavbarStateService } from 'src/app/services/navbar-state.service';
import { CurrentPage } from 'src/app/models/navbar-state';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private navbarService: NavbarStateService) { }

  ngOnInit(): void {
    this.navbarService.emitCurrentPageStatus(CurrentPage.About);
  }

}
