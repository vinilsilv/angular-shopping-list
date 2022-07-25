import { Action, createAction, props } from '@ngrx/store';
import { ShoppingItem } from '../models/shopping-item.model';

export enum ShoppingActionTypes {
  ADD_ITEM = '[SHOPPING] Add Item',
  DELETE_ITEM = '[SHOPPING] Delete Item',
}

export const AddItemAction = createAction(
  ShoppingActionTypes.ADD_ITEM,
  props<ShoppingItem>()
);

export const DeleteItemAction = createAction(
  ShoppingActionTypes.DELETE_ITEM,
  props<ShoppingItem>()
);
