import { Component, OnInit } from '@angular/core';
import { NavbarStateService } from 'src/app/services/navbar-state.service';
import { CurrentPage } from 'src/app/models/navbar-state';
import { ProjectService } from 'src/app/services/project.service';
import { Project } from 'src/app/models/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  allProjects: Project[];
  constructor(private navbarStatus: NavbarStateService, private projectService: ProjectService) { }

  ngOnInit(): void {
    this.navbarStatus.emitCurrentPageStatus(CurrentPage.Project);
    this.getAllProjects();

  }

  getAllProjects() {
    this.projectService.getAllProjects()
      .subscribe(data => {
          console.log(data);
          this.allProjects = data;

      }, error => {
        console.log(error);
      });
  }

}
