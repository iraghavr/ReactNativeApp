import { PlacesActionTypes } from "../actions/actionTypes";
import {
  PlacesActions,
  AddPlaceAction,
  SelectPlaceAction
} from "../actions/places";

export interface Place {
  key: string;
  value: string;
  image: {};
}

export interface PlacesState {
  readonly places: Place[];
  readonly selectedPlace?: null | Place;
}

const initialState: PlacesState = {
  places: [],
  selectedPlace: null
};

const addPlace = (state: PlacesState, action: AddPlaceAction) => ({
  ...state,
  places: state.places.concat({
    key: Math.random().toString(),
    value: action.name,
    image: {
      uri: "https://picsum.photos/200/300/?random"
    }
  })
});

const deletePlace = (state: PlacesState) => ({
  ...state,
  places: state.places.filter(place => {
    if (state.selectedPlace) {
      return place.key !== state.selectedPlace.key;
    }
  }),
  selectedPlace: null
});

const selectedPlace = (state: PlacesState, action: SelectPlaceAction) => ({
  ...state,
  selectedPlace: state.places.find(place => place.key === action.key)
});

const deselectPlace = (state: PlacesState) => ({
  ...state,
  selectedPlace: null
});

const reducer = (state = initialState, action: PlacesActions): PlacesState => {
  switch (action.type) {
    case PlacesActionTypes.ADD_PLACE:
      return addPlace(state, action);
    case PlacesActionTypes.DELETE_PLACE:
      return deletePlace(state);
    case PlacesActionTypes.SELECT_PLACE:
      return selectedPlace(state, action);
    case PlacesActionTypes.DESELECT_PLACE:
      return deselectPlace(state);
    default:
      return state;
  }
};

export default reducer;
