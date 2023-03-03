import { Component, OnInit } from '@angular/core';
import { GalleryService } from '@services/gallery/gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.css']
})
export class GalleryPage implements OnInit{
  public images: number[];

  constructor(
    private galleryService: GalleryService
  ) {
    this.images = [];
  }

  public ngOnInit(): void {
    /* Esta suscripción es sobre el objeto HttpClient de Angular
    el cuál es un observable especial que se desuscribe al terminar
    la llamada HTTP, por ende no debemos preocuparnos por que la suscripción
    quede en memoria después de que el componente sea destruido */
    this.galleryService.list().subscribe((data) => {
      this.images = data.map((item) => {
        return item.id;
      });
    });
  }

  public getImage(id: number): string {
    return `https://picsum.photos/id/${id}/300/300`;
  }
}
