import { PlacesActionTypes } from "./actionTypes";

export interface AddPlaceAction {
  type: PlacesActionTypes.ADD_PLACE;
  name: string;
}

export interface DeletePlaceAction {
  type: PlacesActionTypes.DELETE_PLACE;
  key: string;
}

export type PlacesActions = AddPlaceAction | DeletePlaceAction;

export const addPlace = (name: string): AddPlaceAction => ({
  type: PlacesActionTypes.ADD_PLACE,
  name
});

export const deletePlace = (key: string): DeletePlaceAction => ({
  type: PlacesActionTypes.DELETE_PLACE,
  key
});
