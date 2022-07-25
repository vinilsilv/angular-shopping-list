import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as uuid from 'uuid';

import {
  AddItemAction,
  DeleteItemAction,
} from './store/actions/shopping.actions';
import { AppState } from './store/models/app-state.model';
import { ShoppingItem } from './store/models/shopping-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  newShoppingItem: ShoppingItem = { id: '', name: '' };
  shoppingItems$?: Observable<Array<ShoppingItem>>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.shoppingItems$ = this.store.select((store) => store.shopping);
  }

  addItem() {
    this.newShoppingItem.id = uuid.v4();
    if (this.newShoppingItem.name == '') {
      return;
    }
    this.store.dispatch(AddItemAction(this.newShoppingItem));

    this.newShoppingItem = { id: '', name: '' };
  }
}
