import { combineReducers } from "redux";
import placesReducer, { PlacesState } from "./places";
import { PlacesActions } from "../actions/places";

export type RootActions = PlacesActions;

export interface RootState {
  places: PlacesState;
}

const rootReducer = combineReducers<RootState, RootActions>({
  places: placesReducer
});

export default rootReducer;
