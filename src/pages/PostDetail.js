import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { deleteBoardFB, updateBoardFB } from "../redux/modules/board";

const PostDetail = (props) => {
  console.log(props);
  const dispatch = useDispatch();
  const board_list = useSelector((state) => state.board.board_list);
  console.log(board_list);
  const board_index = parseInt(props.match.params.boardindex);
  console.log(board_index);

  return (
    <React.Fragment>
      <Liner>
        글제목:
        <Text>{board_list[board_index].title}</Text>
      </Liner>
      <Liner>
        글쓴이:
        <Text>{board_list[board_index].name}</Text>
      </Liner>
      <Container>{board_list[board_index].contents}</Container>
      <Buttonset>

        <Button onClick={() => {
        // dispatch(updateBoardFB(board_index));
        props.history.replace('/edit/' + board_index);
      }}>수정</Button>

        <Button onClick={() => {
        dispatch(deleteBoardFB(board_index));
        props.history.replace('/');
      }}>삭제</Button>

      </Buttonset>

    </React.Fragment>
  );
};
const Container = styled.div`
  padding: 20px;
  width: 50%;
  height: 300px;
  margin: auto;
  border: 2px solid black;
`;

const Button = styled.button`
  margin: 20px 20px;
  width: 200px; 
  height: 40px;
`;

const Buttonset = styled.div`
  text-align: center;
`;
const Text = styled.text`
  margin-left: 20px;
  font-weight: normal;
`;

const Liner = styled.div`
  margin: 100px auto;
  padding: 10px;
  border-bottom: 2px solid grey;
  width: 50%;
  font-weight: bold;
  font-size: 20px;
`;
export default PostDetail;