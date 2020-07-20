import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Project } from '../models/project';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  projectEmitter = new Subject<Project>();
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };
  constructor(private http: HttpClient) { }

  showProjectInfo(project: Project) {
    this.projectEmitter.next(project);

  }

  addProject(project: any, image: File) {
    const formData: FormData = new FormData();
    console.log(project);
    formData.append('title', project.title);
    formData.append('blurb', project.blurb);
    formData.append('description', project.description);
    formData.append('technologies', project.technologies);
    formData.append('projectLink', project.projectLink);
    formData.append('githubLink', project.githubLink);
    formData.append('imageLink', image);

    this.http.post<any>('http://localhost:8000/project/save', formData, {}).subscribe(
      (res) => {
        console.log('yeah');
      },
      error => {
        console.log(error);
      }
    );
  }


  getAllProjects() {
    return this.http.get<Project []>('http://localhost:8000/project/all');
  }

  getProjects(last: number) {
    return this.http.get<Project []>('http://localhost:8000/project/all');
  }
}
