import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent implements OnInit {
  products: Product[];
  displayedColumns = ['id', 'name', 'price', 'actions']

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.productService.read().subscribe(products => {
      this.products = products;
    })
  }

  navigateToProductUpdate(id: number) {
    this.router.navigate([`/products/update/${id}`]);
  }

  deleteProduct(id: string) {
    this.productService.delete(id).subscribe(() => {
      this.productService.showMessage('Produto excluído com sucesso!');
    })
  }
}
