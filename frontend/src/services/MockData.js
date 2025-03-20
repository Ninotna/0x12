/**
 * Données mockées pour l'utilisateur et son activité
 */
const mockUserData = {
  id: 12,
  userInfos: {
    firstName: "Karl",
    age: 31,
  },
  todayScore: 0.72,
  keyData: {
    calorieCount: 1930,
    proteinCount: 155,
    carbohydrateCount: 290,
    lipidCount: 50,
  },
  activity: [
    { day: "2020-07-01", kilogram: 80, calories: 240 },
    { day: "2020-07-02", kilogram: 81, calories: 220 },
    { day: "2020-07-03", kilogram: 81, calories: 280 },
    { day: "2020-07-04", kilogram: 80, calories: 290 },
    { day: "2020-07-05", kilogram: 79, calories: 160 },
    { day: "2020-07-06", kilogram: 78, calories: 162 },
    { day: "2020-07-07", kilogram: 78, calories: 390 },
  ],
  performance: [
    { category: "Cardio", value: 80 },
    { category: "Énergie", value: 120 },
    { category: "Endurance", value: 140 },
    { category: "Force", value: 50 },
    { category: "Vitesse", value: 90 },
    { category: "Intensité", value: 100 },
  ],
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

getMockUserData(12).then((data) => console.log(data));
