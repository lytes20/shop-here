import { Component } from '@angular/core';
import { IProduct } from './product';

@Component({
  selector: 'shophere-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  pageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  listFilter: string = 'cart';
  products: IProduct[] = [
    {
      productId: 100,
      productName: 'Loafer',
      starRating: 4,
      productCode: 'xyz-120',
      releaseDate: '12-01-2019',
      price: 12300,
      description: 'Some dope product',
      imageUrl:
        'https://images.unsplash.com/photo-1576792741377-eb0f4f6d1a47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
    },
    {
      productId: 100,
      productName: 'Loafer',
      starRating: 4,
      productCode: 'xyz-120',
      releaseDate: '12-01-2019',
      price: 12300,
      description: 'Some dope product',
      imageUrl:
        'https://images.unsplash.com/photo-1576792741377-eb0f4f6d1a47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
    },
    {
      productId: 100,
      productName: 'Loafer',
      starRating: 4,
      productCode: 'xyz-120',
      releaseDate: '12-01-2019',
      price: 12300,
      description: 'Some dope product',
      imageUrl:
        'https://images.unsplash.com/photo-1576792741377-eb0f4f6d1a47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
    }
  ];

  toggleImage(): void {
    this.showImage = !this.showImage;
    console.log('Toggle Image Button Clicked');
  }
}
