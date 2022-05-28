import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayout } from './modules/shared/layouts/main/main.layout';

const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    loadChildren: () => import('./modules/posts/posts.module').then(m => m.PostsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
