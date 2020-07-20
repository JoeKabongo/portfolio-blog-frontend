import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app/components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { BlogfeedComponent } from './components/blogfeed/blogfeed.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { BlogPostComponent } from './components/blog-post/blog-post.component';
import { AddProjectFormComponent } from './components/admin/add-project-form/add-project-form.component';


const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'about', component: AboutComponent},
  {path: 'blog', component: BlogfeedComponent},
  {path: 'blog/:postTitle', component: BlogPostComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'admin/add_project', component: AddProjectFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
