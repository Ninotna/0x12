// Radar chart for user's performances

import {
  RadarChart,
  Radar,
  PolarAngleAxis,
  Text,
  PolarGrid,
  ResponsiveContainer,
} from 'recharts'

import usePerformance from '../../../services/API/usePerformance'
import SpinLoader from '../../Loader/SpinLoader'

export default function PerformanceChart({ userId }) {
  // Grab states from custom Hook
  // Using type + id to ensure calling the correct data modeling fct
  const { isLoading, data, error } = usePerformance('user-performance', userId)

  // Manage error
  if (error) {
    return <div>Erreur de chargement...</div>
  }

  return (
    <div className="chart__activity--performance">
      {/* Manage loading datas */}
      {isLoading ? (
        <SpinLoader />
      ) : (
        <div className="chart__performance">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="65%" data={data}>
              <Radar
                dataKey="value"
                fill="#ff0000"
                fillOpacity={0.7}
                stroke="#ff0000"
              />
              <PolarGrid radialLines={false} />
              <PolarAngleAxis
                dataKey="kind"
                stroke="white"
                // dy={3}
                tickLine={false}
                tick={(props) => RadarChartTickRender(props)}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  )
}

function RadarChartTickRender({ payload, x, y, cx, cy, ...rest }) {
  return (
    <Text
      {...rest}
      verticalAnchor="middle"
      y={y + (y - cy) / 20}
      x={x + (x - cx) / 20}
    >
      {payload.value}
    </Text>
  )
}
