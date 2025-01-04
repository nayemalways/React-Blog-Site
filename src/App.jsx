import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePages from "./Pages/HomePages";
import DetailsPage from "./Pages/DetailsPage";
import ByCategoryPage from "./Pages/ByCategoryPage";
import NotFoundPage from "./Pages/NotFoundPage";



export default function App() {


  return (
     <BrowserRouter>
      <Routes>
        <Route path= '/' element={<HomePages/>} />
        <Route path= '/byCategory/:categoryId' element={<ByCategoryPage/>} />
        <Route path= '/details/:postId' element={<DetailsPage/>} />
        <Route path= '*' element={<NotFoundPage/>} />
      </Routes>
     </BrowserRouter>
  )
}

