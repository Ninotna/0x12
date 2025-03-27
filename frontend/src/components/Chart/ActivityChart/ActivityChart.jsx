// Bar chart for user's activity

import {
	BarChart,
	CartesianGrid,
	XAxis,
	YAxis,
	Tooltip,
	Bar,
	ResponsiveContainer,
} from 'recharts'

import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import DataService from '../../../services/API/DataService'
import SpinLoader from '../../Loader/SpinLoader'

export default function ActivityChart({ userId })
{
	const [data, setData] = useState(null)
	const [isLoading, setIsLoading] = useState(true)
	const [error, setError] = useState(null)

	useEffect(() =>
		{
			async function fetchData()
			{
				try {
					console.log("📡 Récupération de l'activité pour l'utilisateur", userId)
					const result = await DataService.getUserActivity(userId)
					console.log("📦 Données récupérées :", result)
		
					if (result && result.sessions) {
						const formattedData = result.sessions.map((session, index) => ({
							day: index + 1,
							kilogram: session.kilogram,
							calories: session.calories,
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
		<div className="chart__dailyActivity">
			{isLoading ? (
				<SpinLoader />
			) : (
				<div className="dailyActivity">
					<div className="dailyActivity__header">
						<div className="dailyActivity__header--title">
							<h3>Activité quotidienne</h3>
						</div>
						<div className="dailyActivity__header--caption">
							<span className="dailyActivity__header--captionDotKg"></span>
							<span className="dailyActivity__header--captionNameKg">
								Poids (kg)
							</span>
							<span className="dailyActivity__header--captionDotCal"></span>
							<span className="dailyActivity__header--captionNameCal">
								Calories brûlées (kCal)
							</span>
						</div>
					</div>
					<div className="dailyActivity__barChart">
						<ResponsiveContainer width="100%" height="100%">
							<BarChart
								data={data}
								margin={{
									top: 5,
									right: 30,
									left: 20,
									bottom: 5,
								}}
							>
								<CartesianGrid strokeDasharray="2" vertical={false} />
								<XAxis
									dataKey="day"
									tickLine={false}
									axisLine={false}
									fontSize={15}
									opacity={0.7}
								/>
								<YAxis
									orientation="right"
									tickLine={false}
									axisLine={false}
									fontSize={15}
									opacity={0.7}
								/>
								<Tooltip content={<CustomToolTip />} />
								<Bar
									dataKey="kilogram"
									fill="#282D30"
									barSize={8}
									radius={[50, 50, 0, 0]}
								/>
								<Bar
									dataKey="calories"
									fill="#E60000"
									barSize={8}
									radius={[50, 50, 0, 0]}
								/>
							</BarChart>
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
		<div className="dailyActivity__barChart--toolType">
			<div className="dailyActivity__barChart--weight">
				{`${payload[0].value} Kg`}
			</div>
			<div className="dailyActivity__barChart--calories">
				{`${payload[1].value} KCal`}
			</div>
		</div>
	) : null
}

ActivityChart.propTypes = {
	userId: PropTypes.number.isRequired,
}

CustomToolTip.propTypes = {
	active: PropTypes.bool,
	payload: PropTypes.array,
}
