export const moviesReducer = (state=[], action) => {
    if (action.type === "ALL_MOVIES") {
      return action.payload;
    }

    return state
}