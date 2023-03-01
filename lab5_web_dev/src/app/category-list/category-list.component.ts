import { Component, OnInit } from '@angular/core';
import { categorys } from '../categorys';
import { products } from '../products';


@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})

export class CategoryListComponent implements OnInit {
  categorys = categorys;
  constructor() { }

  ngOnInit(): void {
  
}
}

