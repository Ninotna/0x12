import React from "react";
import { Routes, Route } from "react-router-dom";
import ProfilePage from "./pages/ProfilePage";
import styled from "styled-components";

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
    <AppContainer>
      <Routes>
        <Route path="/profile/:userId" element={<ProfilePage />} />
      </Routes>
    </AppContainer>
  );
};

export default App;
