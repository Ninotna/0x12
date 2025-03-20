import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import DataService from "../services/API/DataService";
import ProfileHeader from "../components/ProfileHeader";
import ActivityChart from "../components/ActivityChart";
import DailyScoreChart from "../components/DailyScoreChart";
import PerformanceChart from "../components/PerformanceChart";
import AverageSessionsChart from "../components/AverageSessionsChart";
import Aside from "../components/Aside";
import KeyData from "../components/KeyDatas";
import SpinLoader from "../components/Loader/SpinLoader";

// Styled Components
const PageWrapper = styled.div`
  display: flex;
  gap: 20px;
  padding: 20px;
  max-width: 1400px;
  margin: auto;
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 20px;
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
  const [activityData, setActivityData] = useState(null);
  const [averageSessionsData, setAverageSessionsData] = useState(null);
  const [performanceData, setPerformanceData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    /**
     * Fonction pour récupérer toutes les données utilisateur
     */
    const fetchData = async () => {
      try {
        setLoading(true);
        // console.log("🔍 Début du chargement des données pour userId :", userId);

        const user = await DataService.getUserData(userId);
        // console.log("✅ Données utilisateur récupérées :", user);

        const activity = await DataService.getUserActivity(userId);
        // console.log("✅ Données d'activité récupérées :", activity);

        const averageSessions = await DataService.getUserAverageSessions(userId);
        // console.log("✅ Données des sessions moyennes récupérées :", averageSessions);

        const performance = await DataService.getUserPerformance(userId);
        // console.log("✅ Données de performance récupérées :", performance);

        if (!user || !activity || !averageSessions || !performance) {
          console.error("❌ Une ou plusieurs sources de données sont manquantes.");
          throw new Error("Une ou plusieurs sources de données sont manquantes.");
        }

        setUserData(user);
        setActivityData(activity.sessions);
        setAverageSessionsData(averageSessions.sessions);
        setPerformanceData(performance);
      } catch (err) {
        console.error("❌ Erreur de chargement des données :", err);
        setError(err.message);
      } finally {
        setLoading(false);
        console.log("🔍 Fin du chargement des données.");
      }
    };

    fetchData();
  }, [userId]);

  if (loading) return <SpinLoader />;
  if (error) return <p>❌ Erreur : {error}</p>;
  if (!userData) return <p>⚠️ Utilisateur introuvable</p>;

  return (
    <PageWrapper>
      <Aside />
      <MainContent>
        <ProfileHeader firstName={userData.userInfos.firstName} />
        <ChartsContainer>
          <ActivityChart userId={userId} />
          <KeyData userId={userId} />
        </ChartsContainer>
        <SmallChartsContainer>
          <AverageSessionsChart userId={userId} />
          <PerformanceChart userId={userId} />
          <DailyScoreChart userId={userId} />
        </SmallChartsContainer>
      </MainContent>
    </PageWrapper>
  );
};

export default ProfilePage;
