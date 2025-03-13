/**
 * Données mockées d'un utilisateur
 */
const mockUserData = {
  id: 12,
  userInfos: {
    firstName: "Karl",
    lastName: "Dovineau",
    age: 31,
  },
  todayScore: 0.72,
  keyData: {
    calorieCount: 1930,
    proteinCount: 155,
    carbohydrateCount: 290,
    lipidCount: 50,
  },
};

/**
 * Simule une récupération des données utilisateur depuis une source mockée
 * @param {number} userId - L'ID de l'utilisateur (non utilisé dans le mock)
 * @returns {Promise<Object>} Les données utilisateur mockées
 */
export const getMockUserData = (userId) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockUserData), 500);
  });
};
