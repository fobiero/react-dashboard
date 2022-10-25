import {BrowserRouter as Router,Switch,Route,Link,BrowserRouter,Routes} from "react-router-dom";

import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";

const App = () => {
  return(
    <>
      <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="users">
                  <Route index element={<List />} />
                  <Route path=":userId" element={<Single />} />
                  <Route path="new" element={<New />} />
                </Route>
                <Route path="products">
                  <Route index element={<List />} />
                  <Route path=":productId" element={<Single />} />
                  <Route path="new" element={<New />} />
                </Route>
            </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App;