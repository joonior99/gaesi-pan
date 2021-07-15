import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { updateBoardFB } from "../redux/modules/board";

const PostEdit = (props) => {
  const dispatch = useDispatch();
  const board_list = useSelector((state) => state.board.board_list);
  const board_index = parseInt(props.match.params.board_index);
  console.log(board_list[board_index]);

  const title_ref = React.useRef(null);
  const name_ref = React.useRef(null);
  const contents_ref = React.useRef(null);

  const editPost = () => {
    const post = {
      title: title_ref.current.value,
      name: name_ref.current.value,
      contents: contents_ref.current.value,
    };
    dispatch(updateBoardFB(post, board_index));
    props.history.replace("/");
  };
  // console.log(board_list[board_index]);
  return (
    <React.Fragment>
      <Inputwrapper>
        <div>
          <Input
            placeholder={board_list[board_index].title}
            type="text"
            ref={title_ref}
          />
        </div>
        <div>
          <Input
            placeholder={board_list[board_index].name}
            type="text"
            ref={name_ref}
          />
        </div>
        <div>
          <Textarea
            placeholder={board_list[board_index].contents}
            type="text"
            ref={contents_ref}
          />
        </div>
        <button style={{ width: 200, height: 40 }} onClick={editPost}>
          저장
        </button>
      </Inputwrapper>
    </React.Fragment>
  );
};

const Textarea = styled.textarea`
  padding: 20px 5px;
  margin: 20px;
  width: 730px;
  height: 250px;
`;
const Input = styled.input`
  padding: 0 5px;
  margin: 20px;
  width: 730px;
  height: 50px;
`;
const Inputwrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export default PostEdit;
