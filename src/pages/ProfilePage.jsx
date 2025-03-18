import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import DataService from "../services/DataService";
import ProfileHeader from "../components/ProfileHeader";
import Statistics from "../components/Statistics";
import ActivityChart from "../components/ActivityChart";
import ScoreChart from "../components/ScoreChart";
import PerformanceRadarChart from "../components/RadarChart";

// Styled container for the profile page
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  max-width: 1200px;
  margin: auto;
`;

const ChartsContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 20px;
`;

const SmallChartsContainer = styled.div`
  display: flex;
  gap: 20px;
`;

/**
 * Page affichant le profil utilisateur avec toutes ses données
 * @returns {JSX.Element}
 */
const ProfilePage = () => {
  const { userId } = useParams();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      const data = await DataService.getUserData(userId);
      console.log("📢 Données reçues dans ProfilePage :", data);
      setUserData(data);
      setLoading(false);
    };
    fetchUserData();
  }, [userId]);

  if (loading) return <p>Chargement...</p>;
  if (!userData) return <p>Erreur lors du chargement des données.</p>;

  return (
    <PageContainer>
      <ProfileHeader firstName={userData.userInfos.firstName} />
      <ChartsContainer>
        <ActivityChart data={userData.activity} />
        <Statistics data={userData.keyData} />
      </ChartsContainer>
      <SmallChartsContainer>
        <PerformanceRadarChart data={userData.performance} />
        <ScoreChart score={userData.todayScore} />
      </SmallChartsContainer>
    </PageContainer>
  );
};

export default ProfilePage;
