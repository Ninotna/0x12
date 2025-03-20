import { useState, useEffect } from "react";
import styled from "styled-components";
import DataService from "../services/API/DataService";
import SpinLoader from "./Loader/SpinLoader";
import PropTypes from "prop-types";
import energyIcon from "../assets/icon/energy.svg"
import proteinIcon from "../assets/icon/chicken.svg";
import carbsIcon from "../assets/icon/apple.svg";
import fatIcon from "../assets/icon/cheeseburger.svg";

// Styled Components
const KeyDataContainer = styled.div`
  width: 258px;
  height: 680px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CardsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Card = styled.div`
  width: 258px;
  height: 124px;
  display: flex;
  align-items: center;
  padding: 15px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.bgLight || "#FBFBFB"};
`;

const IconWrapper = styled.div`
  width: 64px;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ color }) => color};
  border-radius: 10px;
  margin-right: 15px;
`;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
`;

const CountText = styled.div`
  font-size: 20px;
  font-weight: 600;
`;

const TypeText = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.tertiary || "#282D30"};
`;

export default function KeyData({ userId }) {
  const [keyData, setKeyData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserKeyData = async () => {
      try {
        const data = await DataService.getUserData(userId);
        if (data) {
          setKeyData(data.keyData);
        } else {
          throw new Error("Aucune donnée reçue.");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserKeyData();
  }, [userId]);

  if (loading) return <SpinLoader />;
  if (error) return <div>Erreur de chargement : {error}</div>;

  const keyDataArray = [
    { label: "Calories", value: `${keyData.calorieCount}kCal`, icon: energyIcon, bgColor: "#FF0000" },
    { label: "Protéines", value: `${keyData.proteinCount}g`, icon: proteinIcon, bgColor: "#4AB8FF" },
    { label: "Glucides", value: `${keyData.carbohydrateCount}g`, icon: carbsIcon, bgColor: "#FDCC0C" },
    { label: "Lipides", value: `${keyData.lipidCount}g`, icon: fatIcon, bgColor: "#FD5181" },
  ];

  return (
    <KeyDataContainer>
      <CardsContainer>
        {keyDataArray.map(({ label, value, icon, bgColor }) => (
          <Card key={label}>
            <IconWrapper color={bgColor}>
              <img src={icon} alt={`Icône ${label}`} />
            </IconWrapper>
            <DetailContainer>
              <CountText>{value}</CountText>
              <TypeText>{label}</TypeText>
            </DetailContainer>
          </Card>
        ))}
      </CardsContainer>
    </KeyDataContainer>
  );
}

KeyData.propTypes = {
  userId: PropTypes.number.isRequired,
};
