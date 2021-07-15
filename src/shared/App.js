import "./App.css";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../components/Header";

import PostList from "../pages/PostList";
import PostWrite from "../pages/PostWrite";
import PostEdit from "../pages/PostEdit";
import PostDetail from "../pages/PostDetail";
import PostIntro from "../pages/PostIntro";
import NotFound from "../pages/NotFound";

function App() {
  
  return (
    <React.Fragment>
      <BrowserRouter>
        <Header />
        <Switch>
        <Route path="/" exact component={PostList} />
        <Route path="/write" exact component={PostWrite} />
        <Route path="/edit/:board_index" exact component={PostEdit} />
        <Route path="/detail/:boardindex" exact component={PostDetail} />
        <Route path="/intro" exact component={PostIntro} />
        <Route exact component={NotFound} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
