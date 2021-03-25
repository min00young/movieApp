export const initialState = {
  loading: true,
  movies: [],
  errorMessage: null
};

type State = {
  loading: boolean;
  movies: Array<string>;
  errorMessage: string | null;
}

type Action =
  | { type: 'SEARCH_MOVIES_REQUEST'; }
  | { type: 'SEARCH_MOVIES_SUCCESS'; payload: Array<string> }
  | { type: 'SEARCH_MOVIES_FAILURE'; error: string }


export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SEARCH_MOVIES_REQUEST":
      return {
        ...state,
        loading: true,
        errorMessage: null
      };
    case "SEARCH_MOVIES_SUCCESS":
      return {
        ...state,
        loading: false,
        movies: action.payload
      };
    case "SEARCH_MOVIES_FAILURE":
      return {
        ...state,
        loading: false,
        errorMessage: action.error
      };
    default:
      return state;
  }
};