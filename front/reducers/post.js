export const initialState = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: "숑이",
      },
      content: "더워서 산책가기 싫다 #산책 #개더워",
      Images: [
        {
          src: "https://pbs.twimg.com/media/D7vVFgsV4AAcloV.jpg",
        },
        {
          src: "https://i.pinimg.com/originals/70/98/dd/7098dd7e46ee7b223ce933aa2557ebca.jpg",
        },
        {
          src: "https://i.pinimg.com/originals/df/a3/be/dfa3be6f97c3c367bd42efde4aeac111.jpg",
        },
      ],
      Comments: [
        {
          User: {
            nickname: "방구",
          },
          content: "나도 너무 더워요 형님!",
        },
        {
          User: {
            nickname: "하이",
          },
          content: "수영가자ㅎㅎ",
        },
      ],
    },
  ],
  imagePaths: [],
  postAdded: false,
};

const ADD_POST = "ADD_POST";
export const addPost = {
  type: ADD_POST,
};

const dummyPost = {
  id: 2,
  content: "더미 데이터입니다",
  User: {
    id: 1,
    nickname: "숑이",
  },
  Images: [],
  Comments: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: true,
      };
    default:
      return state;
  }
};

export default reducer;
