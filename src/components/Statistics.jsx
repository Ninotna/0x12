import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

// Styled Components pour les statistiques
const StatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const StatCard = styled.div`
  display: flex;
  align-items: center;
  background: #f8f9fa;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  width: 200px;
`;

const IconContainer = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ bgColor }) => bgColor || "#fff"};
  border-radius: 10px;
  margin-right: 15px;
`;

const StatText = styled.div`
  display: flex;
  flex-direction: column;
`;

const StatValue = styled.span`
  font-size: 18px;
  font-weight: bold;
`;

const StatLabel = styled.span`
  font-size: 14px;
  color: #666;
`;

/**
 * Composant affichant les statistiques de l'utilisateur
 * @param {Object} props
 * @param {Object} props.data - Données nutritionnelles de l'utilisateur
 * @returns {JSX.Element}
 */
const Statistics = ({ data }) => {
  const stats = [
    { label: "Calories", value: `${data.calorieCount}Kcal`, color: "#FF0000" },
    { label: "Protéines", value: `${data.proteinCount}g`, color: "#4AB8FF" },
    {
      label: "Glucides",
      value: `${data.carbohydrateCount}g`,
      color: "#F9CE23",
    },
    { label: "Lipides", value: `${data.lipidCount}g`, color: "#FD5181" },
  ];

  return (
    <StatsContainer>
      {stats.map((stat, index) => (
        <StatCard key={index}>
          <IconContainer bgColor={stat.color} />
          <StatText>
            <StatValue>{stat.value}</StatValue>
            <StatLabel>{stat.label}</StatLabel>
          </StatText>
        </StatCard>
      ))}
    </StatsContainer>
  );
};

Statistics.propTypes = {
  data: PropTypes.shape({
    calorieCount: PropTypes.number.isRequired,
    proteinCount: PropTypes.number.isRequired,
    carbohydrateCount: PropTypes.number.isRequired,
    lipidCount: PropTypes.number.isRequired,
  }).isRequired,
};

export default Statistics;
