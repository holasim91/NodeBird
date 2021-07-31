import shortId from 'shortid';

import {
  ADD_COMMENT_FAILURE,
  ADD_COMMENT_REQUEST,
  ADD_COMMENT_SUCCESS,
  ADD_POST_FAILURE,
  ADD_POST_REQUEST,
  ADD_POST_SUCCESS,
  REMOVE_POST_FAILURE,
  REMOVE_POST_REQUEST,
  REMOVE_POST_SUCCESS,
} from './actions';

export const initialState = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: '숑이',
      },
      content: '더워서 산책가기 싫다 #산책 #개더워',
      Images: [
        {
          id: shortId.generate(),
          src: 'https://pbs.twimg.com/media/D7vVFgsV4AAcloV.jpg',
        },
        {
          id: shortId.generate(),
          src: 'https://i.pinimg.com/originals/70/98/dd/7098dd7e46ee7b223ce933aa2557ebca.jpg',
        },
        {
          id: shortId.generate(),
          src: 'https://i.pinimg.com/originals/df/a3/be/dfa3be6f97c3c367bd42efde4aeac111.jpg',
        },
      ],
      Comments: [
        {
          id: shortId.generate(),
          User: {
            id: shortId.generate(),
            nickname: '방구',
          },
          content: '나도 너무 더워요 형님!',
        },
        {
          id: shortId.generate(),
          User: {
            id: shortId.generate(),
            nickname: '하이',
          },
          content: '수영가자ㅎㅎ',
        },
      ],
    },
  ],
  imagePaths: [],
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
  removePostLoading: false,
  removePostDone: false,
  removePostError: null,
  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: null,
};

export const addPost = (data) => ({
  type: ADD_POST_REQUEST,
  data,
});
export const addComment = (data) => ({
  type: ADD_COMMENT_REQUEST,
  data,
}); // 동적 액션 크리에이터

const dummyPost = (data) => ({
  id: data.id,
  content: data.content,
  User: {
    id: 1,
    nickname: '숑이',
  },
  Images: [],
  Comments: [],
});
const dummyComment = (data) => ({
  id: shortId.generate(),
  content: data,
  User: {
    id: 1,
    nickname: '방구',
  },
});
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST_REQUEST:
      return {
        ...state,
        addPostLoading: true,
        addPostDone: false,
        addPostError: null,
      };
    case ADD_POST_SUCCESS:
      return {
        ...state,
        mainPosts: [dummyPost(action.data), ...state.mainPosts],
        addPostLoading: false,
        addPostDone: true,
        addPostError: false,
      };
    case ADD_POST_FAILURE:
      return {
        ...state,
        addPostLoading: false,
        addPostDone: false,
        addPostError: action.error,
      };
    case REMOVE_POST_REQUEST:
      return {
        ...state,
        removePostLoading: true,
        removePostDone: false,
        removePostError: null,
      };
    case REMOVE_POST_SUCCESS:
      return {
        ...state,
        mainPosts: state.mainPosts.filter((v) => v.id !== action.data),
        removePostLoading: false,
        removePostDone: true,
        removePostError: false,
      };
    case REMOVE_POST_FAILURE:
      return {
        ...state,
        removePostLoading: false,
        removePostDone: false,
        removePostError: action.error,
      };
    case ADD_COMMENT_REQUEST:
      return {
        ...state,
        addCommentLoading: true,
        addCommentDone: false,
        addCommentError: null,
      };
    case ADD_COMMENT_SUCCESS: {
      const postIndex = state.mainPosts.findIndex(
        (v) => v.id === action.data.postId,
      );
      const post = state.mainPosts[postIndex];
      const Comments = [dummyComment(action.data.content), ...post.Comments];
      const mainPosts = [...state.mainPosts];
      mainPosts[postIndex] = { ...post, Comments };
      return {
        ...state,
        mainPosts,
        addCommentLoading: false,
        addCommentDone: true,
        addCommentError: false,
      };
    }
    case ADD_COMMENT_FAILURE:
      return {
        ...state,
        addCommentLoading: false,
        addCommentDone: false,
        addCommentError: action.error,
      };
    default:
      return state;
  }
};

export default reducer;
