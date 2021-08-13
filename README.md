# 간단한 게시판 만들기


React를 이용하여 데이터 입력, 출력, 수정, 삭제 기능(CRUD)을 가진 게시판을 만들었다.



## 사용한 패키지(package)

+ styled-components: React 컴포넌트 스타일링을 위한 CSS-in-JS 라이브러리
+ react-router-dom: React 화면 전환을 위한 라이브러리
+ react-redux: 데이터 전역 관리를 위한 상태관리 라이브러리
+ firebase: realtime database 구축을 위한 패키지

## 페이지 구성(pages)

1. 메인페이지: 게시판 포스팅 전체를 보여준다. 
2. 작성페이지: 메인페이지에서 '글쓰기' 버튼을 누르면 제목, 글쓴이, 내용을 작성할 수 있는 페이지를 보여준다.
3. 상세페이지: 메인페이지에서 포스트 하나를 클릭하면 해당 내용을 그대로 보여준다.
4. 수정페이지: 상세페이지에서 '수정' 버튼을 누르면 수정페이지에 해당하는 컴포넌트로 이동할 수 있다. 
5. 소개페이지: 'gaesi-pan'이라는 프로젝트에 대한 간략한 소개글이 담긴 페이지이다. 

## 와이어프레임(wireframe)

![download](https://user-images.githubusercontent.com/85469084/129390673-e831561a-4c4c-4af2-8697-b5a50ebb63df.png)

## 스크린샷한 웹페이지(web pages)

### 1. 메인페이지  
Header에 총 세 가지 버튼이 있으며 각각 메인페이지, 작성페이지, 소개페이지에 해당하는 컴포넌트로 이동할 수 있다. 포스팅에 마우스 커서를 올리면 'cursor: pointer'로 커서 모양이 변경되는 동시에 hover effect 또한 적용해주었다. 

'위로가기' 버튼을 누르면 'window.scrollTo()'을 통하여 최상위로 스크롤 이동되며, 최근에 포스팅된 글은 **내림차순**으로 배열되어 가장 위쪽에 배치되도록 하였다. 


![download (1)](https://user-images.githubusercontent.com/85469084/129391410-bacf70aa-c215-4aad-88a1-f62db6348954.png)

---
### 2. 소개페이지
Header의 '소개' 버튼을 누르면 프로젝트에 대한 간략한 소개글이 담긴 컴포넌트로 이동한다.


![download (2)](https://user-images.githubusercontent.com/85469084/129391433-6f78c4e2-dd01-4413-b844-f42ca4a5bd81.png)

---
### 3. 작성페이지 
제목, 글쓴이, 내용을 작성할 수 있으며, 'useRef'라는 React hook을 통해 current.value로 접근하면 각 input에 현재 입력된 값을 가져올 수 있다. 


![download (3)](https://user-images.githubusercontent.com/85469084/129391454-baf2813e-1310-4109-9f46-5ece2a1892d1.png)

---
### 4. 상세페이지
메인페이지에서 포스트 하나를 클릭하면 해당 내용을 그대로 보여준다. 'useDispatch, useSelector'라는 react-redux hook을 통하여 state로 접근할 수 있으며 각각의 '글제목, 글쓴이, 글내용'에 맞는 해당 데이터를 조회할 수 있다. 수정(update)과 삭제(delete) 기능도 구현하였으며, firestore 연결을 통하여 collection과 document에서도 데이터의 유무 확인이 가능하다. 


![download (4)](https://user-images.githubusercontent.com/85469084/129391462-80f7abf5-d661-462b-b111-c2f8fe22c238.png)

---
### 5. 수정페이지
상세페이지에서 '수정'버튼을 누르면 수정페이지에 해당하는 컴포넌트로 이동할 수 있으며, 이전에 작성했던 글에 대한 데이터를 placeholder로 가져올 수 있다.


![download (5)](https://user-images.githubusercontent.com/85469084/129391471-88a9851d-8e22-4c81-ad82-3d66efebb63e.png)


## 프로젝트를 만들면서 마주했던 문제점

+ 상세페이지에서 각 포스트에 대한 URL parameter 값이 해결 안되었다. 예를 들어, 가장 최근의 포스팅이면 parameter 값은 'detail/0' 이런 식으로 나타난다. 
+ 수정페이지로 변경 이전의 input 값을 가져오고 새로운 값으로 변경하는데 어려움을 많이 겪었다. 개인적으로 CRUD 중에서 Update가 가장 어려운 것 같다.
+ 작성페이지에서 '내용'을 입력하고 나서 '저장' 버튼을 누르면 메인페이지로 이동하는데 이 때 가장 위쪽과 포스팅 중간의 랜덤한 위치에서 추가된다. 새로고침하면 가장 위쪽에 있던 포스팅이 사라지고 중간의 랜덤하게 추가된 포스팅 하나만 남아있게 된다. 
+ 상세페이지에서 해당 포스트를 삭제하면 메인페이지에서 삭제된 것을 확인할 수 있으며 해당 포스트 바로 아래에 위치한 포스트도 사라지는 것을 확인할 수 있다. 새로고침하면 사라졌던 그 포스트가 다시 나타난다. 
+ 작성페이지 및 수정페이지에서 아무 내용을 입력하지 않아도 저장된다. 예외처리가 필요하다. 
