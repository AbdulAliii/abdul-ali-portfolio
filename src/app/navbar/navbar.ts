import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {

  isHidden = false;
  lastScrollPosition = 0;

  @HostListener('document:scroll', [])
  onWindowScroll() {

    const currentScrollPosition = window.scrollY;

    // Always show navbar at the top
    if (currentScrollPosition <= 10) {
      this.isHidden = false;
      this.lastScrollPosition = currentScrollPosition;
      return;
    }

    // Scrolling down → hide navbar
    if (currentScrollPosition > this.lastScrollPosition) {
      this.isHidden = true;
    }

    // Scrolling up → show navbar
    else if (currentScrollPosition < this.lastScrollPosition) {
      this.isHidden = false;
    }

    this.lastScrollPosition = currentScrollPosition;
  }
}