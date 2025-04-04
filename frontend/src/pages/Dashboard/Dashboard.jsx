/**
 * Dashboard - Page principale affichant les données utilisateur
 *
 * Cette page récupère l'ID de l'utilisateur via l'URL, vérifie
 * sa validité, puis affiche l'ensemble des composants liés aux
 * données, graphiques et informations clés de l'utilisateur.
 *
 * @component
 * @returns {JSX.Element} Le composant Dashboard complet avec Aside, Banner,
 *          graphiques et données clés de l'utilisateur
 */

import { useParams, Navigate } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import Aside from "../../components/Aside/Aside";
import KeyData from "../../components/KeyDatas/KeyDatas";
import DailyScoreChart from "../../components/Chart/DailyScoreChart/DailyScoreChart";
import PerformanceChart from "../../components/Chart/PerformanceChart/PerformanceChart";
import AverageSessionsChart from "../../components/Chart/AverageSessionsChart/AverageSessionsChart";
import ActivityChart from "../../components/Chart/ActivityChart/ActivityChart";

export default function Dashboard() {
  // Grab userId from url
  const { id } = useParams();

  // Set 404 page for unknown userID
  if (id !== "12" && id !== "18") {
    return <Navigate to="*" />;
  }

  return (
    <div className="dashboard">
      <Aside />
      <section className="dashboard__content">
        {/* Pass userId to component */}
        <Banner userId={id} />
        <div className="dashboard__datas">
          <div className="dashboard__datas--top-row">
            <div className="chart--activity-wrapper">
              <div className="chart--activity">
                <ActivityChart userId={id} />
              </div>
              <div className="chart__activityDetails">
                <AverageSessionsChart userId={id} />
                <PerformanceChart userId={id} />
                <DailyScoreChart userId={id} />
              </div>
            </div>
            <div className="keyData">
              <KeyData userId={id} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
