import { DeletePlaceAction } from "./../actions/places";
import { PlacesActionTypes } from "../actions/actionTypes";
import { PlacesActions, AddPlaceAction } from "../actions/places";

export interface Place {
  key: string;
  value: string;
  image: {};
}

export interface PlacesState {
  readonly places: Place[];
}

const initialState: PlacesState = {
  places: []
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

const deletePlace = (state: PlacesState, action: DeletePlaceAction) => ({
  ...state,
  places: state.places.filter(place => place.key !== action.key)
});

const reducer = (state = initialState, action: PlacesActions): PlacesState => {
  switch (action.type) {
    case PlacesActionTypes.ADD_PLACE:
      return addPlace(state, action);
    case PlacesActionTypes.DELETE_PLACE:
      return deletePlace(state, action);
    default:
      return state;
  }
};

export default reducer;
