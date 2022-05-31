import { Component } from '@angular/core';
import { LayoutService } from '@services/layout/layout.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private layoutService: LayoutService) {}

  public ngOnInit(): void {
    this.layoutService.themeSubject.subscribe((theme) => {
      document.body.className = theme;
    });
  }
}
