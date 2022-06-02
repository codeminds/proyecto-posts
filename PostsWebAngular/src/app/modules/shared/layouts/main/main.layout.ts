import { Component, OnDestroy, OnInit } from '@angular/core';
import { LayoutService } from '@services/layout/layout.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.layout.html',
  styleUrls: ['./main.layout.css']
})
export class MainLayout implements OnInit, OnDestroy {
  public theme: string;

  /* Utlizando typescript podemos crear un tipo diccionario con una llave de un 
  que resulta en un valor de otro tipo  */
  public themes: { [key: string]: string };

  /* Creamos una subscripción donde podemos meter varias suscripciones
  de observables para poder mantenerlos en una sola colección */
  private subscriptions: Subscription;

  constructor(private layoutService: LayoutService) { 
    this.theme = null;
    /* En nuestro diccionario creamos un mapa de valores de temas
    contrarios para que al tener un tema seleccionado podamos tener
    el valor del tema contrario para pintar el botón para cambiar al tema
    contrario */
    this.themes = {
      light: 'dark',
      dark: 'light'
    };

    this.subscriptions = new Subscription();
  }

  public ngOnInit(): void {
    /* Agregamos la suscripción al BehaviorSubject de tema activo del servicio a
    nuestra colección de suscripciones */
    this.subscriptions.add(this.layoutService.themeSubject.subscribe((theme) => {
      this.theme = theme;
    }));
  }

  public ngOnDestroy(): void {
    /* Al destruir el componente mandamos a llamar la cancelación del objeto de suscripción
    lo que causa que todas las suscripciones agregadas se desuscriban */
    this.subscriptions.unsubscribe();
  }

  /* Con esta función mandamos a cambiar el valor del BehaviorSubject de tema activo
  el cual notificará a todos sus suscriptores del nuevo cambio */
  public changeTheme(theme: string) {
    this.layoutService.themeSubject.next(theme);
  }
}
