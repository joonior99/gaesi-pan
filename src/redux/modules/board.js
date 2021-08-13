import { firestore } from "../../firebase";

const board_db = firestore.collection("board");

// Actions
const LOAD = "board/LOAD";
const CREATE = "board/CREATE";
const DELETE = "board/DELETE";

const UPDATE = "board/UPDATE";

const initialState = {
  
  board_list: 
  [],
};

// Action Creators
export const loadBoard = (board) => {
  return { type: LOAD, board };
};

export const createBoard = (board) => {
  return { type: CREATE, board };
};

export const deleteBoard = (board) => {
  return { type: DELETE, board };
};

export const updateBoard = (board) => {
  return { type: UPDATE, board };
};

  export const loadBoardFB = () => {
  return function (dispatch) {

    board_db.get().then((docs) => {
      let board_data = [];

      docs.forEach((doc) => {
      console.log(doc.data());
        if (doc.exists) {
          board_data = [...board_data, { id: doc.id, ...doc.data() }];
          // board_data = [...board_data, { ...doc.data() }];
        }
      });

      console.log(board_data,'loadBoardFB');
      dispatch(loadBoard(board_data));
      // console.log(getState().board);
    });
  };
};          

export const addBoardFB = (board) => {
  return function (dispatch) {
    // console.log(board);
    let board_data = { ...board, completed: false };
    console.log(board_data);

    board_db.add(board_data).then(docRef => {
      board_data = { ...board_data, id: docRef.id };

      // dispatch(createBoard(board_data));
    })
  }
}

export const deleteBoardFB = (board) => {
  return function (dispatch, getState){
    const _board_data = getState().board.board_list[board];

    if(!_board_data.id){
      return;
    }

    board_db.doc(_board_data.id).delete().then(docRef => {
      dispatch(deleteBoard(board));
    }).catch(error => {
      console.log(error);
    });
  }
}

export const updateBoardFB = (board, index) => {
  return function(dispatch, getState){
    console.log(board, index);
    const _board_data = getState().board.board_list[index];

    let board_data = {..._board_data};
    console.log(board_data);
  // _bucket_data.id가 이 함수에서 나가라 끝내라
    if(!_board_data.id){
      return;
    }

    const result = {
      title: board.title,
      name: board.name,
      contents: board.contents,
      completed: true
    };
    console.log(result);
    console.log(_board_data.id);
    board_db.doc(_board_data.id).update(result).then(docRef => {
      dispatch(updateBoard(index));
    }).catch(error => {
      console.log(error);
    });
  }
}

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    // do reducer stuff
    case "board/LOAD": { 
        console.log(action.board);
      if (action.board.length > 0) {
            return { board_list: action.board};
        }
        return state;
    }
     // new_board_list처럼 action...과 state 순서 바꾸었더니 메인페이지에서 최신순으로 잘 나왔습니다. 이유가 궁금합니다. 
    case "board/CREATE": {
      const new_board_list = [ action.board, ...state.board_list ];
      console.log(new_board_list);
      return { ...state, board_list: new_board_list};
    }

    case "board/DELETE": {
      const boardlist = state.board_list.filter((l, idx) => {
        if (idx !== action.board) {
          return l;
        }
      });
      return { board_list: boardlist };
    }

    case "board/UPDATE": {
      const boardlist = state.board_list.map((l, idx) => {
        if (idx === action.board) {

          return { ...l, completed: true };
        }

        return l;
      });

      return { board_list: boardlist };
    }

    default:
      return state;
  }
}
