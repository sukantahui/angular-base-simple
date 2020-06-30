import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Gallery, GalleryItem, ImageItem, ThumbnailsPosition, ImageSize } from 'ng-gallery';
import { Lightbox } from 'ng-gallery/lightbox';
import { map } from 'rxjs/operators';

const data = [
  {
    srcUrl: 'https://preview.ibb.co/jrsA6R/img12.jpg',
    previewUrl: 'https://preview.ibb.co/jrsA6R/img12.jpg'
  },
  {
    srcUrl: 'https://preview.ibb.co/kPE1D6/clouds.jpg',
    previewUrl: 'https://preview.ibb.co/kPE1D6/clouds.jpg'
  },
  {
    srcUrl: 'https://preview.ibb.co/mwsA6R/img7.jpg',
    previewUrl: 'https://preview.ibb.co/mwsA6R/img7.jpg'
  },
  {
    srcUrl: 'https://preview.ibb.co/kZGsLm/img8.jpg',
    previewUrl: 'https://preview.ibb.co/kZGsLm/img8.jpg'
  },
  {
    srcUrl: 'https://live.staticflickr.com/65535/49912494543_cac063d0da_k.jpg',
    previewUrl: 'https://live.staticflickr.com/65535/49912494543_c37c3fdf30_t.jpg'
  },
  {
    srcUrl: 'https://live.staticflickr.com/65535/49913016581_144745fec5_k.jpg',
    previewUrl: 'https://live.staticflickr.com/65535/49913016581_ecd7b57176_t.jpg'
  },
  {
    srcUrl: 'https://live.staticflickr.com/65535/49913307822_357ec25f1d_k.jpg',
    previewUrl: 'https://live.staticflickr.com/65535/49913307822_d2ef6a394f_t.jpg'
  }
];



@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GalleryComponent implements OnInit {
  constructor(public gallery: Gallery, public lightbox: Lightbox) { }
  items: GalleryItem[];
  imageData = data;
  ngOnInit(): void {
    /** Basic Gallery Example */

    // Creat gallery items
    this.items = this.imageData.map(item => new ImageItem({ src: item.srcUrl, thumb: item.previewUrl }));


    /** Lightbox Example */

      // Get a lightbox gallery ref
    const lightboxRef = this.gallery.ref('lightbox');

    // Add custom gallery config to the lightbox (optional)
    lightboxRef.setConfig({
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Top
    });

    // Load items into the lightbox gallery ref
    lightboxRef.load(this.items);
  }
}
