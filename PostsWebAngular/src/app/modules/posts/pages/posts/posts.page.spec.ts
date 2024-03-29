import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsPage } from './posts.page';

describe('PostsPage', () => {
  let component: PostsPage;
  let fixture: ComponentFixture<PostsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostsPage ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
