import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { loadBoardFB } from "../redux/modules/board";

const PostList = (props) => {
  const board_list = useSelector((state) => state.board.board_list); // board_list를 list로 바꿔야 하나요?
  console.log(board_list);
  

  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(loadBoardFB());
  }, []);
  
  console.log(board_list);
  return (
    <React.Fragment>
      <Table>
        <thead>
          <Tr style={{ fontWeight: "bold" }}>
            <Td>글번호</Td>
            <Td>글쓴이</Td>
            <Td>글제목</Td>
          </Tr>
        </thead>
        
        {board_list.map((b, index) => {
          return (
            <tbody>
              <Tr
                key={index}
                bgColor={"#F0F6FC"}
                onClick={() => {
                  props.history.push("/detail/" + index);
                }}
              >
                <Td>{board_list.length - index}</Td>
                <Td>{b.name}</Td>
                <Td>{b.title}</Td>
              </Tr>
            </tbody>
          );
        })}
      </Table>

      <div style={{textAlign: "center"}}>
        <Button
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
        >
          위로가기
        </Button>
      </div>
    </React.Fragment>
  );
};

const Button = styled.button`
  margin: 20px 20px;
  width: 200px;
  height: 40px;
`;
const Table = styled.table`
  width: 50%;
  margin: 50px auto;
  border-top: 1px solid #444444;
  border-collapse: collapse;
`;

const Tr = styled.tr`
  &:hover {
    background-color: ${(props) => props.bgColor};
  }
  cursor: pointer;
`;

const Td = styled.td`
  border-bottom: 1px solid #444444;
  padding: 10px;
  text-align: center;
`;

export default PostList;
