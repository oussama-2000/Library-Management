import { HashRouter as BrowserRouter,Routes,Route } from "react-router-dom";

import AddBookPage from "./pages/addbooks";
import Home from "./pages/home";
import Layout from "./pages/Layout";
import PdfViewer from "./pages/bookViewer";
import BookDetails from "./pages/bookDetails";
import MyBooks from "./pages/myBooks";
import LogIn from "./pages/logIn";
import ContactUs from "./pages/contactUs";
import AboutUs from "./pages/aboutUs";
import NoPage from "./pages/nopage";

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/addbooks" element={<AddBookPage/>}/>
          <Route path="/mybooks" element={<MyBooks/>}/>
          <Route path="/login" element={<LogIn/>}/>
          <Route path="/aboutus" element={<AboutUs/>}/>
          <Route path="/contactus" element={<ContactUs/>}/>
          <Route path="/bookviewer/:id" element={<PdfViewer/>}/>
          <Route path="/bookdetails/:id" element={<BookDetails/>}/>
          <Route path="*" element={<NoPage/>}/>
          
        </Route>
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
