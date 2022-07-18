import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { delay } from 'rxjs/operators';
import { ShoppingItem } from './store/models/shopping-item.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  private SHOPPING_URL = "http://localhost:3000/shopping";

  constructor(private http: HttpClient) { }

  getShoppingItems() {
    return this.http.get(this.SHOPPING_URL)
    .pipe(
      delay(500)
    );
  }

  addShoppingItems(shoppingItem: ShoppingItem) {
    return this.http.post(this.SHOPPING_URL, shoppingItem)
  }

  deleteShoppingItem() {

  }
}
