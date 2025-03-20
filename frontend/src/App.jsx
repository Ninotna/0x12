import React from "react";
import { Routes, Route } from "react-router-dom";
import ProfilePage from "./pages/ProfilePage";
import styled, { ThemeProvider } from "styled-components";

// Définition du thème
const theme = {
  colors: {
    primary: "#FF0000",  // Rouge
    secondary: "#282D30", // Gris foncé
    tertiary: "#FBFBFB",  // Blanc
    text: "#000000",      // Noir
  },
};

// Styled container for the app layout
const AppContainer = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 20px;
`;

/**
 * Composant principal de l'application SportSee
 * @returns {JSX.Element}
 */
const App = () => {
  return (
    <ThemeProvider theme={theme}> {/* ✅ ThemeProvider ajouté ici */}
      <AppContainer>
        <Routes>
          <Route path="/profile/:userId" element={<ProfilePage />} />
        </Routes>
      </AppContainer>
    </ThemeProvider>
  );
};

export default App;
