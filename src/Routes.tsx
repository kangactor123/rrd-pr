import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "./pages/Detail";
import List from "./pages/List";
import Main from "./pages/Main";
import Result from "./pages/Result";
import Search from "./pages/Search";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="list" element={<List />}>
          <Route path=":id/detail" element={<Detail />} />
        </Route>
        <Route path="search" element={<Search />} />
        <Route path="result" element={<Result />} />
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
