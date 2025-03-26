// Banner with user's firstname

import useUser from '../../services/API/useUser'
import SpinLoader from '../Loader/SpinLoader'

export default function Banner({ userId }) {
  // Grab states from custom Hook
  // Using type + id to ensure calling the correct data modeling fct
  const { isLoading, data, error } = useUser('firstName', userId)

  // Set firstname
  let firstName = data

  // Manage error
  if (error) {
    return <div>Erreur de chargement...</div>
  }

  return (
    <div className="dashboard__title">
      {/* Manage loading datas */}
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
