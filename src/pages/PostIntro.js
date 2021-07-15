import React from "react";
import styled from "styled-components";

const PostIntro = () => {
  return (
    <React.Fragment>
      <Intro>
        <span style={{ fontWeight: "bold" }}>Gaesi-pan</span>은 여러분들을 위한
        게시판입니다.
        <p>여러분의 많은 관심과 사랑을 부탁드립니다.</p>
        <p>- 제이의 자기개발일지 -</p>
      </Intro>
    </React.Fragment>
  );
};

const Intro = styled.div`
  margin: 50px;
  text-align: center;
`;
export default PostIntro;
