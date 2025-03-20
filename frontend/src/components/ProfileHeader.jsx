import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

// Styled component pour le header du profil
const HeaderContainer = styled.div`
  margin: 20px 0;
`;

const UserName = styled.h1`
  font-size: 36px;
  font-weight: bold;
  color: #ff0000;
`;

const Message = styled.p`
  font-size: 18px;
  color: #555;
`;

/**
 * Composant affichant le prénom de l'utilisateur
 * @param {Object} props
 * @param {string} props.firstName - Prénom de l'utilisateur
 * @returns {JSX.Element}
 */
const ProfileHeader = ({ firstName }) => {
  return (
    <HeaderContainer>
      <UserName>Bonjour {firstName}</UserName>
      <Message>Félicitation ! Vous avez explosé vos objectifs hier 👏</Message>
    </HeaderContainer>
  );
};

ProfileHeader.propTypes = {
  firstName: PropTypes.string.isRequired,
};

export default ProfileHeader;
