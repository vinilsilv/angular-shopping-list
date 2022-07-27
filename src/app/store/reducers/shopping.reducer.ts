import { isDevMode } from '@angular/core';
import { createReducer, on } from '@ngrx/store';
import {
  AddItemAction,
  DeleteItemAction,
} from '../actions/shopping.actions';
import { ShoppingItem } from '../models/shopping-item.model';

const initialState: Array<ShoppingItem> = [
  {
    id: '1775935f-36fd-467e-a667-09f95b917f6d',
    name: 'Diet Coke',
  },
  {
    id: '1775935f-36fd-467e-a667-09f95b917f4d',
    name: 'Fanta',
  },
];

export const ShoppingReducer = createReducer(
  initialState,
  on(AddItemAction, (state, payload) => [...state, payload]),
  on(DeleteItemAction, (state, payload) => state.filter(item => item.id !== payload.id))
);
