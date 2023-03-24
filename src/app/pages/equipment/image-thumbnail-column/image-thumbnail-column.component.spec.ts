import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageThumbnailColumnComponent } from './image-thumbnail-column.component';

describe('ImageThumbnailColumnComponent', () => {
  let component: ImageThumbnailColumnComponent;
  let fixture: ComponentFixture<ImageThumbnailColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageThumbnailColumnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageThumbnailColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
