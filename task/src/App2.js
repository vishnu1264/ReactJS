import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import About from "./routes/about/about.component";
import Contact from "./routes/contact/contact.component";

const Home = () => {
  return <h1 style={{ padding: 30 }}>This is Home</h1>;
};

const DisplayId = () => {};

// let id='';
// window.addEventListener('click', function () {
//   console.log(window.location.href);
//   let urlElements = window.location.href.split("/");
//   id = urlElements[urlElements.length - 1];
//   // if (id === "about") id = "";
//   console.log(id);
// });

const App2 = () => {
    
  console.log(window.location.href);
  let urlElements = window.location.href.split("/");
  let id = urlElements[urlElements.length - 1];
  if (id === "about") id = "";
  console.log(id);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About value={id} />}>
          <Route path={`${id}`} element={<DisplayId />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App2;

// src={`https://robohash.org/${id}?set=set2&size=180x180`}
