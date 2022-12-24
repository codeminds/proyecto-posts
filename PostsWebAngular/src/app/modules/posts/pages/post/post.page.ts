import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Comment, Post } from '@models/post';
import { PostService } from '@services/post/post.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.css']
})
export class PostPage implements OnInit, OnDestroy {
  public post: Post;
  public comments: Comment[];

  /* Creamos una subscripción donde podemos meter varias suscripciones
  de observables para poder mantenerlos en una sola colección */
  private subscriptions: Subscription;

  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.subscriptions = new Subscription();
  }

  ngOnInit(): void {
    /* Agregamos la suscripción al BehaviorSubject de tema activo del servicio a
    nuestra colección de suscripciones */
    this.subscriptions.add(this.route.params.subscribe(params => {
      /* Esta suscripción es sobre el objeto HttpClient de Angular
      el cuál es un observable especial que se desuscribe al terminar
      la llamada HTTP, por ende no debemos preocuparnos por que la suscripción
      quede en memoria después de que el componente sea destruido */
      this.postService.get(params.id).subscribe((post) => {
        this.post = post;
      })

      /* Esta suscripción es sobre el objeto HttpClient de Angular
      el cuál es un observable especial que se desuscribe al terminar
      la llamada HTTP, por ende no debemos preocuparnos por que la suscripción
      quede en memoria después de que el componente sea destruido */
      this.postService.getComments(params.id).subscribe((comments) => {
        this.comments = comments;
      })
    }));
  }

  public ngOnDestroy(): void {
    /* Al destruir el componente mandamos a llamar la cancelación del objeto de suscripción
    lo que causa que todas las suscripciones agregadas se desuscriban */
    this.subscriptions.unsubscribe();
  }

  public goBack(): void {
    this.router.navigate(['']);
  }
}
