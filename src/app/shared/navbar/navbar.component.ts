import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const hamburgerMenu = document.querySelector('.hamburger');
    const menuIsActive = () => {
      hamburgerMenu?.classList.toggle('active')
    }
    hamburgerMenu?.addEventListener('click', menuIsActive)
  }

}
