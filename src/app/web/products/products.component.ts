import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productData:any=[
    {
      img: '../../../assets/Fizzy Logic-4.png',
      name: 'Fizzy Logic',
      price: '$259',
      dsc: 'Mauris sed massa eu nulla mollis vehicula quis id tortor'
    },
    {
      img: '../../../assets/Fruit Beer-1.png',
      name: 'Fruit Beer',
      price: '$259',
      dsc: 'Mauris sed massa eu nulla mollis vehicula quis id tortor'
    },
    {
      img: '../../../assets/Funtop 270-210.png',
      name: 'Funtop',
      price: '$259',
      dsc: 'Mauris sed massa eu nulla mollis vehicula quis id tortor'
    },
    {
      img: '../../../assets/Herbal COla -4.png',
      name: 'Herbal Cola',
      price: '$259',
      dsc: 'Mauris sed massa eu nulla mollis vehicula quis id tortor'
    },
    {
      img: '../../../assets/Lemon Dew.png',
      name: 'Lemon Dew',
      price: '$259',
      dsc: 'Mauris sed massa eu nulla mollis vehicula quis id tortor'
    },
    {
      img: '../../../assets/Twist Up.png',
      name: 'Twist Up',
      price: '$259',
      dsc: 'Mauris sed massa eu nulla mollis vehicula quis id tortor'
    },
    {
      img: '../../../assets/Water bravely.jpg',
      name: 'Water Bravely',
      price: '$259',
      dsc: 'Mauris sed massa eu nulla mollis vehicula quis id tortor'
    },
    {
      img: '../../../assets/Kings Cola.png',
      name: 'Kings Cola',
      price: '$259',
      dsc: 'Mauris sed massa eu nulla mollis vehicula quis id tortor'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
