import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

const Header = (props) => {
  
  return (
    <React.Fragment>
        <Title onClick={()=>{props.history.push("/");}} style={{cursor: "pointer" }}>Gaesi-pan</Title>
      <Buttonset>
        <Link to="/">
          <Button>모든 포스팅</Button>
        </Link>
        <Link to="/write">
          <button style={{ width: 400, height: 40, cursor: "pointer" }}>글쓰기</button>
        </Link>
        <Link to="/intro">
          <Button>소개</Button>
        </Link>
      </Buttonset>

      <hr style={{ width: 1000 }} />
    </React.Fragment>
  );
};
const Button = styled.button`
  height: 40px;
  width: 150px;
  margin: 20px;
  cursor: pointer;
`;
const Title = styled.h1`
  text-align: center;
  font-size: 60px;
  margin: 50px auto;
  /* color: black; */
`;

const Buttonset = styled.div`
  text-align: center;
  margin: 0 auto;
`;
export default withRouter(Header);
