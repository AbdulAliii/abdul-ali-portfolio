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

  menuOpen = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {

    const currentScrollPosition = window.scrollY;

    // Always show navbar at top
    if (currentScrollPosition <= 10) {

      this.isHidden = false;
      this.lastScrollPosition = currentScrollPosition;

      return;
    }

    // Scrolling down → hide
    if (currentScrollPosition > this.lastScrollPosition) {

      this.isHidden = true;

    }

    // Scrolling up → show
    else if (currentScrollPosition < this.lastScrollPosition) {

      this.isHidden = false;

    }

    this.lastScrollPosition = currentScrollPosition;
  }
}