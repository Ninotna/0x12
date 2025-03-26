import { useParams, Navigate } from 'react-router-dom'
import Banner from '../../components/Banner/Banner'
import Aside from '../../components/Aside/Aside'
import KeyData from '../../components/KeyDatas/KeyDatas'
import DailyScoreChart from '../../components/Chart/DailyScoreChart/DailyScoreChart'
import PerformanceChart from '../../components/Chart/PerformanceChart/PerformanceChart'
import AverageSessionsChart from '../../components/Chart/AverageSessionsChart/AverageSessionsChart'
import ActivityChart from '../../components/Chart/ActivityChart/ActivityChart'

export default function Dashboard() {
  // Grab userId from url
  const { id } = useParams()

  // Set 404 page for unknown userID
  if (id !== '12' && id !== '18') {
    return <Navigate to="*" />
  }
  return (
    <div className="dashboard">
      <Aside />
      <section className="dashboard__content">
        {/* Pass userId to component */}
        <Banner userId={id} />
        <div className="dashboard__datas">
          <div className="dashboard__datas--charts">
            <ActivityChart userId={id} />
            <div className="chart__activityDetails">
              <AverageSessionsChart userId={id} />
              <PerformanceChart userId={id} />
              <DailyScoreChart userId={id} />
            </div>
          </div>
          <KeyData userId={id} />
        </div>
      </section>
    </div>
  )
}
