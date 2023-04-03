import { Business } from './../_shared/model/model';
import { createReducer, on } from '@ngrx/store';
import { submitBusiness } from './contact.action';

export interface UserState {
  business: Business;
}

export const initialState: ReadonlyArray<Business> = [];

export const businessReducer = createReducer(
  initialState,
  on(submitBusiness, (state, { business }) => {
    let newState = [...state];
    newState.unshift(business);
    return newState;
  })
);
