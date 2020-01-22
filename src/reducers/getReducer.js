export const getAllMovies = (state = null, action) => {
    switch (action.type) {
        case 'GET_ALL':
            return [
              { title: "Batman Begins", hit: true },
              { title: "Batman Rises", hit: false }
            ];
        
        case 'GET_ONE':
            return [{ title: "Batman Begins", hit: true }, {}];
    }

    return state
}