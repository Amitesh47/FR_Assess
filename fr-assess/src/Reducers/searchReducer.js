export const searchReducer = (state=[],action) => {
  switch(action.type){
    case 'SEARCH_FAIL':
      return [];
    case 'SEARCH_SUCCESS':
      return action.payload;
    default :
      return state
  }
}
