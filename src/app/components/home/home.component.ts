import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarStateService } from 'src/app/services/navbar-state.service';
import { CurrentPage } from 'src/app/models/navbar-state';
import { ProjectService } from 'src/app/services/project.service';
import { Project } from '../../models/project';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  LAST_PROJECT = 4;
  lastProjects: Project[];
  constructor(private router: Router, private navbarStatus: NavbarStateService,
              private projectService: ProjectService) { }

  ngOnInit(): void {
      this.navbarStatus.emitCurrentPageStatus(CurrentPage.Home);
  }

  showProjectWindow(projectId: number) {
      this.projectService.showProjectInfo(null);
  }

}
