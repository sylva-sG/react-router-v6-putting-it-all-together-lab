import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import DirectorContainer from "./pages/DirectorContainer";
import DirectorList from "./pages/DirectorList";
import DirectorCard from "./pages/DirectorCard";
import DirectorForm from "./pages/DirectorForm";
import MovieCard from "./pages/MovieCard";
import MovieForm from "./pages/MovieForm";

import NavBar from "./components/NavBar";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        {/* Home Route */}
        <Route path="/" element={<Home />} />

        {/* About Route */}
        <Route path="/about" element={<About />} />

        {/* Directors Parent Route */}
        <Route path="/directors" element={<DirectorContainer />}>
          
          {/* Directors List */}
          <Route index element={<DirectorList />} />

          {/* Add Director */}
          <Route path="new" element={<DirectorForm />} />

          {/* Single Director */}
          <Route path=":id" element={<DirectorCard />}>
            
            {/* Add Movie */}
            <Route path="movies/new" element={<MovieForm />} />

            {/* Single Movie */}
            <Route
              path="movies/:movieId"
              element={<MovieCard />}
            />
          </Route>
        </Route>

        {/* Optional Error Route */}
        <Route path="*" element={<h2>Page Not Found</h2>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;