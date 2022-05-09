import jsonPlaceholder from "../api/jsonPlaceholder";
import "lodash";
import _ from "lodash";

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  console.log("Start fetching...");
  await dispatch(fetchPosts());
  const userId = _.uniq(_.map(getState().posts, "userId"));
  userId.forEach((id) => dispatch(fetchUser(id)));
};

export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceholder.get("/posts");
  dispatch({
    type: "FETCH_POSTS",
    payload: response.data,
  });
};
// export const fetchUser = (id) => (dispatch) => _fetch_user(id, dispatch);
// const _fetch_user = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceholder.get(`/users/${id}`);
//   dispatch({
//     type: "FETCH_USER",
//     payload: response.data,
//   });
// });
export const fetchUser = (id) => async (dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({
    type: "FETCH_USER",
    payload: response.data,
  });
};

// export const addPosts = () => {
//   return {
//     type: "ADD_POSTS",
//     payload: {
//       id: 123,
//       post_title: "Post title",
//     },
//   };
// };
