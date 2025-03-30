// Banner with user's firstname

import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import DataService from '../../services/API/DataService'
import SpinLoader from '../Loader/SpinLoader'

export default function Banner({ userId })
{
	const [firstName, setFirstName] = useState(null)
	const [isLoading, setIsLoading] = useState(true)
	const [error, setError] = useState(null)

	useEffect(() =>
		{
			async function fetchUser()
			{
				try {
					const user = await DataService.getUserData(userId)
		
					const name = user?.userInfos?.firstName ?? null
		
					if (name) {
						setFirstName(name)
					} else {
						console.error("❌ Prénom introuvable dans la réponse :", user)
						throw new Error('Prénom introuvable')
					}
				}
				catch (err) {
					console.error("❌ Erreur dans fetchUser :", err)
					setError(err)
				}
				finally {
					setIsLoading(false)
				}
			}
		
			fetchUser()
		}, [userId])
		

	if (error) {
		return <div>Erreur de chargement...</div>
	}

	return (
		<div className="dashboard__title">
			{isLoading ? (
				<SpinLoader />
			) : (
				<h1 className="dashboard__title--name">
					Bonjour <span>{firstName}</span>
				</h1>
			)}
			<h2 className="dashboard__title--caption">
				Félicitation ! Vous avez explosé vos objectifs hier 👏
			</h2>
		</div>
	)
}

Banner.propTypes = {
	userId: PropTypes.number.isRequired,
}
