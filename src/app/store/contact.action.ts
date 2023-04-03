import { Business } from './../_shared/model/model';
import { createAction, props } from '@ngrx/store';

export const submitBusiness = createAction(
  '[Create] Submit Contact',
  props<{ business: Business }>()
);

export const removeId = createAction(
  '[Create] Remove ID',
  props<{ Id: number }>()
);
