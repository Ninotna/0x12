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

import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import DataService from '../../../services/API/DataService'
import SpinLoader from '../../Loader/SpinLoader'

export default function AverageSessionsChart({ userId })
{
	const [data, setData] = useState(null)
	const [isLoading, setIsLoading] = useState(true)
	const [error, setError] = useState(null)

	useEffect(() =>
		{
			async function fetchData()
			{
				try {
					console.log("📡 Récupération des sessions moyennes pour l'utilisateur", userId)
					const result = await DataService.getUserAverageSessions(userId)
					console.log("📦 Données récupérées :", result)
		
					if (result && result.data && result.data.sessions) {
						const dayMap = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
						const formattedData = result.data.sessions.map((s, i) => ({
							day: dayMap[i],
							sessionLength: s.sessionLength,
						}))
						console.log("📊 Données formatées :", formattedData)
						setData(formattedData)
					} else {
						console.error("❌ Structure inattendue :", result)
						throw new Error('Aucune donnée reçue')
					}
				}
				catch (err) {
					console.error("❌ Erreur dans fetchData :", err)
					setError(err)
				}
				finally {
					setIsLoading(false)
				}
			}
		
			fetchData()
		}, [userId])
		

	if (error) {
		return <div>Erreur de chargement...</div>
	}

	return (
		<div className="chart__activity--averageSessions">
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
									cursor={<CustomCursorShadow />}
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

function CustomToolTip({ active, payload })
{
	return active && payload ? (
		<div className="averageSessions__chart--toolTip">
			<div className="averageSessions__chart--toolTipText">
				{`${payload[0].value} min`}
			</div>
		</div>
	) : null
}

function CustomCursorShadow({ points })
{
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

AverageSessionsChart.propTypes = {
	userId: PropTypes.number.isRequired,
}

CustomToolTip.propTypes = {
	active: PropTypes.bool,
	payload: PropTypes.array,
}

CustomCursorShadow.propTypes = {
	points: PropTypes.array.isRequired,
}
