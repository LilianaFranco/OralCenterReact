import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DentistsListContainer } from "./Components/Pages/DentistsList/DentistsList.container";
import { DentistDetailContainer } from "./Components/Pages/DentistDetail/DentistDetail.container";
import { FavsContainer } from "./Components/Pages/Favs/Favs.container";
import { Navbar } from "./Components/Layout/NavBar/Navbar";
import { ColorModeProvider } from "./Context/ThemeContext/ColorModeContext";
import { Footer } from "./Components/Layout/Footer/Footer";
import { DentistContextProvider } from "./Context/DentistContext.jsx/DentistContext";
import { ContactUs } from "./Components/Pages/ContactUs/ContactUs";

function App() {
  return (
    <BrowserRouter>
      <ColorModeProvider>
        <DentistContextProvider>
          <Routes>
            <Route element={<Navbar />}>
              <Route element={<Footer />}>
                <Route path="/Home" element={<DentistsListContainer />} />
                <Route
                  path="/dentist/:id"
                  element={<DentistDetailContainer />}
                />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/favs" element={<FavsContainer />} />
              </Route>
              <Route path="*" element={<h1>Not found</h1>} />
            </Route>
          </Routes>
        </DentistContextProvider>
      </ColorModeProvider>
    </BrowserRouter>
  );
}

export default App;
