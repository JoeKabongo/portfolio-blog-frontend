import { Component, OnInit, HostListener } from '@angular/core';
import { Project } from './models/project';
import { ProjectService } from './services/project.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'MyPersonalBlog';
  currentProject: Project;
  projectWindow: HTMLElement;
  blackBackground: HTMLElement;


  constructor(private project: ProjectService) { }

  ngOnInit(): void {
    this.project.projectEmitter.subscribe(
      data => {
        this.currentProject = data;
        this.showProjectWindow();
      }
    );
    this.projectWindow =   document.querySelector('#project-window') as HTMLElement;
    this.blackBackground = document.querySelector('#black-background') as HTMLElement;


  }

  // @HostListener('click', ['$event.target'])
  // onClick(element) {
  //   console.log(element);

  //   if (!this.projectWindow.contains(element)) {
  //     console.log('YEEEAHHHH');
  //     this.closeProjectWindow();
  //   }

  // }


  showProjectWindow() {
    this.projectWindow.style.display = 'block';
    this.blackBackground.style.display = 'block';
  }

  closeProjectWindow() {
    this.projectWindow.style.display = 'none';
    this.blackBackground.style.display = 'none';
  }



}
