import React from "react";
import styled from "styled-components";
import {useDispatch} from "react-redux";
import {addBoardFB, createBoard} from "../redux/modules/board";

const PostWrite = (props) => {
  const dispatch = useDispatch();
  const title_ref = React.useRef(null);
  const name_ref = React.useRef(null);
  const contents_ref = React.useRef(null);

  const addPost = () => {
    const post = {
      title: title_ref.current.value,
      name: name_ref.current.value,
      contents: contents_ref.current.value,
    };
    
  dispatch(addBoardFB(post));
  props.history.replace('/');
  };
  return (
    <React.Fragment>
      <Inputwrapper>
        <div>
          <Input placeholder="  제목을 입력하세요" type="text" ref={title_ref}/>
        </div>
        <div>
          <Input placeholder="  글쓴이를 입력하세요" type="text" ref={name_ref}/>
        </div>
        <div>
          <Textarea placeholder=" 내용을 입력하세요" type="text" ref={contents_ref}/>
        </div>
        <button style={{width: 200, height: 40}} onClick={addPost}>저장</button>
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
export default PostWrite;
