import moviesapi from '../apis/moviesapi';

export const fetchAllMovies = () => {
    return async function (dispatch, getState) {
        const allMovies = await moviesapi.get('/movies');
        dispatch( {
            type: 'ALL_MOVIES',
            payload: allMovies.data
        })
    }
}

