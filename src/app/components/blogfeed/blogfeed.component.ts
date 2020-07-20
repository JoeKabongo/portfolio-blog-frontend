import { Component, OnInit } from '@angular/core';
import { NavbarStateService } from 'src/app/services/navbar-state.service';
import { CurrentPage } from 'src/app/models/navbar-state';

@Component({
  selector: 'app-blogfeed',
  templateUrl: './blogfeed.component.html',
  styleUrls: ['./blogfeed.component.css']
})
export class BlogfeedComponent implements OnInit {

  constructor(private navbarStatus: NavbarStateService) { }

  ngOnInit(): void {
    this.navbarStatus.emitCurrentPageStatus(CurrentPage.Blog);
  }

}
