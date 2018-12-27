import { PlacesActionTypes } from "./actionTypes";

export interface AddPlaceAction {
  type: PlacesActionTypes.ADD_PLACE;
  name: string;
}

export interface DeletePlaceAction {
  type: PlacesActionTypes.DELETE_PLACE;
}

export interface SelectPlaceAction {
  type: PlacesActionTypes.SELECT_PLACE;
  key: string;
}

export interface DeselectPlaceAction {
  type: PlacesActionTypes.DESELECT_PLACE;
}

export type PlacesActions =
  | AddPlaceAction
  | DeletePlaceAction
  | SelectPlaceAction
  | DeselectPlaceAction;

export const addPlace = (name: string): AddPlaceAction => ({
  type: PlacesActionTypes.ADD_PLACE,
  name
});

export const deletePlace = (): DeletePlaceAction => ({
  type: PlacesActionTypes.DELETE_PLACE
});

export const selectPlace = (key: string) => ({
  type: PlacesActionTypes.SELECT_PLACE,
  key
});

export const deseletPlace = () => ({
  type: PlacesActionTypes.DESELECT_PLACE
});
