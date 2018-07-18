import { Component, OnInit, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'SCABEZAS';

  headerTitle = ' FrontEnd Web y Móvil';
  headerSwitch = true;

  constructor(private myElement: ElementRef) {
  }

  ngOnInit() {
    // Cambio de titulo
    setInterval(() => {
      if ( this.headerSwitch === false ) {
        this.headerTitle = ' FrontEnd Web y Móvil';
      } else {
        this.headerTitle = ' BackEnd con NodeJS y MongoDB';
      }
      this.headerSwitch = !this.headerSwitch;
    }, 3000);

    // Scroll automatico
    document.getElementById('navbar-top').onclick = function() {
        document.getElementById('page-top').scrollIntoView({ behavior: 'smooth' });
    };
    document.getElementById('navbar-about').onclick = function() {
        document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
    };
    document.getElementById('navbar-conocimientos').onclick = function() {
        document.getElementById('conocimientos').scrollIntoView({ behavior: 'smooth' });
    };
    document.getElementById('navbar-contact').onclick = function() {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    };
  }

  // Cambio el estilo del navbar al hacer scroll
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number > 200) {
      document.getElementById('mainNav').classList.add('navbar-shrink');
    } else {
      document.getElementById('mainNav').classList.remove('navbar-shrink');
    }
  }
}

