import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CurrentPage } from 'src/app/models/navbar-state';
import { NavbarStateService } from 'src/app/services/navbar-state.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  currentPage: Subscription;
  constructor(private router: Router, private navbarStatus: NavbarStateService) { }

  ngOnInit(): void {
    this.navbarStatus.navbarStateEmitter.subscribe(
      data => {
        this.updateNavbarStatus(data);
      }
    );

    // change the border of the navbar property when we are not on top of the page
    window.addEventListener('scroll', () => {
    if (window.scrollY !== 0) {
      // const navbar = document.querySelector('#navbar') as HTMLElement;
      // navbar.style.borderBottom = '1px solid #ebebeb';
    } else {
      // const navbar = document.querySelector('#navbar') as HTMLElement;
      // navbar.style.borderBottom = 'none';
    }

  });
  }

  updateNavbarStatus(page: CurrentPage) {
    this.clearCurrentPage();
    // let item = null;
    switch (page) {
      case CurrentPage.About: {
        const item = document.querySelector('.about') as HTMLElement;
        item.classList.add('current-page');
        break;
      }
      case CurrentPage.Project: {
        const item = document.querySelector('.project') as HTMLElement;
        item.classList.add('current-page');
        break;
      }
      case CurrentPage.Blog: {
        const item = document.querySelector('.blog') as HTMLElement;
        item.classList.add('current-page');
        break;
      }
    }
  }

  clearCurrentPage(){
    const items = document.querySelectorAll('.navbar-item');
    items.forEach(item => {
      item.classList.remove('current-page');
    });
  }
  aboutPage() {
    this.router.navigate(['about']);
  }

  blogPage() {
    this.router.navigate(['blog']);
  }

  projectsPage() {
    this.router.navigate(['projects']);
  }



}
