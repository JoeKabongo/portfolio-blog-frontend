import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';


@Component({
  selector: 'app-add-project-form',
  templateUrl: './add-project-form.component.html',
  styleUrls: ['./add-project-form.component.css']
})
export class AddProjectFormComponent implements OnInit {
  projectImage: File;

  constructor(private projectService: ProjectService ) { }

  ngOnInit(): void {
  }

  addProject() {

  }

  onSubmit(data: any) {

    this.projectService.addProject(data, this.projectImage);
  }

  onFileChanged(event) {
    this.projectImage = event.target.files[0];
  }

}
