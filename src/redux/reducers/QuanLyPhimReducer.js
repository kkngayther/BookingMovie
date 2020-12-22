const stateDefault = {
    mangPhim: []
}

export const QuanLyPhimReducer = (state=stateDefault, action) => {
    switch(action.type) {
        case 'GET_DATA_PHIM':{
            state.mangPhim = action.dataPhim
            console.log(state.mangPhim);
            return {...state}
        }
    }
    return {...state}
}