import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'SCABEZAS';

  headerSwitch = true;

  constructor(private myElement: ElementRef) {
  }

  ngOnInit() {
    // Inicia la libreria de animacion por scroll
    AOS.init();

    // Cambio de titulo
    setInterval(() => {
      this.headerSwitch = !this.headerSwitch;
    }, 4000);

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

