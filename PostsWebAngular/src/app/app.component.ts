import { Component, OnInit } from '@angular/core';
import { LayoutService } from '@services/layout/layout.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    private layoutService: LayoutService
  ){}

  public ngOnInit(): void {
    /* Nos suscribimos al Behavior Subject del tema activo para que cada vez
    que tenga un nuevo valor la etiqueta <body> cambie su clase a ser la del tema activo.
    Aunque deberíamos controlar las suscripciones cuando el componente es destruido para evitar
    problemas de memoria, el componente raíz de Angular nunca deja de existir, por ende nunca
    será destruido y usualmente sus suscripciones siempre estarán activas */
    this.layoutService.themeSubject.subscribe((theme) => {
      document.body.className = theme;
    });
  }
}
