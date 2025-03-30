// Radial chart for user's daily score

import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts'
import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import DataService from '../../../services/API/DataService'
import SpinLoader from '../../Loader/SpinLoader'

export default function DailyScoreChart({ userId })
{
	const [data, setData] = useState(null)
	const [isLoading, setIsLoading] = useState(true)
	const [error, setError] = useState(null)

	useEffect(() =>
		{
			async function fetchData()
			{
				try {
					const user = await DataService.getUserData(userId)
		
					const scoreValue =
						user?.score ?? user?.todayScore ?? null
		
					if (scoreValue !== null) {
						setData(scoreValue * 100)
					} else {
						console.error("❌ Aucune clé 'score' ou 'todayScore' trouvée :", user)
						throw new Error('Aucune donnée de score')
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

	const radialBarArrayPerfData = [
		{ name: 'A', x: 100, fill: 'white' },
		{ name: 'B', x: data, fill: '#ff0000' },
	]

	return (
		<div className="chart__activity--score">
			{isLoading ? (
				<SpinLoader />
			) : (
				<div className="chart__score">
					<ResponsiveContainer width="100%" height="100%">
						<RadialBarChart
							cx="50%"
							cy="50%"
							innerRadius="100%"
							outerRadius="100%"
							barSize={10}
							startAngle={90}
							endAngle={450}
							data={radialBarArrayPerfData}
						>
							<RadialBar minAngle={15} dataKey="x" cornerRadius="50%" />
							<text
								x="50%"
								y="45%"
								textAnchor="middle"
								dominantBaseline="top"
								className="chart__score--num"
							>
								{data}%
							</text>
							<text
								x="50%"
								y="55%"
								textAnchor="middle"
								dominantBaseline="middle"
								className="chart__score--text"
							>
								de votre
							</text>
							<text
								x="50%"
								y="65%"
								textAnchor="middle"
								dominantBaseline="middle"
								className="chart__score--text"
							>
								objectif
							</text>
						</RadialBarChart>
					</ResponsiveContainer>
				</div>
			)}
		</div>
	)
}

DailyScoreChart.propTypes = {
	userId: PropTypes.number.isRequired,
}
