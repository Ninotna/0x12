// Line chart for user's average sessions

import {
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  Line,
  Rectangle,
  ResponsiveContainer,
} from 'recharts'
import useAverageSessions from '../../../services/API/useAverageSessions'
import SpinLoader from '../../Loader/SpinLoader'

export default function AverageSessionsChart({ userId }) {
  // Grab states from custom Hook
  // Using type + id to ensure calling the correct data modeling fct
  const { isLoading, data, error } = useAverageSessions('user-sessions', userId)

  // Manage error
  if (error) {
    return <div>Erreur de chargement...</div>
  }

  return (
    <div className="chart__activity--averageSessions">
      {/* Manage loading datas */}
      {isLoading ? (
        <SpinLoader />
      ) : (
        <div className="averageSessions">
          <div className="averageSessions__title">
            <h3>Durée moyenne des sessions</h3>
          </div>
          <div className="averageSessions__chart">
            <ResponsiveContainer width="100%" height="90%">
              <LineChart
                data={data}
                width={500}
                height={300}
                margin={{ top: 55, right: 10, left: 10, bottom: 10 }}
              >
                <XAxis
                  tickLine={false}
                  dataKey="day"
                  axisLine={false}
                  stroke="rgba(255, 255, 255, 0.66)"
                />
                <YAxis
                  hide={true}
                  axisLine={false}
                  tickLine={false}
                  domain={['dataMin-10', 'dataMax+10']}
                />
                <Tooltip
                  content={<CustomToolTip />}
                  cursor={<CustumCursorShadow />}
                  // cursor={{ strokeWidth: 20, stroke: 'rgba(0, 0, 0, 0.1)' }}
                />
                <Line
                  type="monotone"
                  dataKey="sessionLength"
                  stroke="#fff"
                  strokeWidth={2}
                  dot={false}
                  activeDot={{
                    r: 4,
                    stroke: 'rgba(255,255,255, 0.6)',
                    strokeWidth: 7,
                  }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}
    </div>
  )
}

// Setting up a custom tool tip
function CustomToolTip({ active, payload }) {
  return active && payload ? (
    <div className="averageSessions__chart--toolTip">
      <div className="averageSessions__chart--toolTipText">{`${payload[0].value} min`}</div>
    </div>
  ) : null
}

// Setting up a transparent gray rectangle starting from rigth to the cursor position
function CustumCursorShadow({ points }) {
  console.log('pointes', points)
  return (
    <Rectangle
      fill="black"
      opacity={0.1}
      x={points[0].x - 10}
      y={0}
      width={300}
      height={300}
    />
  )
}
