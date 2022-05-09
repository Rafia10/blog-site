export default (state = [], action) => {
  //good approach
  if (action.type ==="FETCH_POSTS") {
    return action.payload;
  }
  return state;
};
//bad approaches
// return document.querySelector
// return any network requests

//We cannot mutate the state like state[0]=1
