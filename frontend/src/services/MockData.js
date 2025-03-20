/**
 * @typedef {Object} UserInfo
 * @property {string} firstName - Prénom de l'utilisateur
 * @property {string} lastName - Nom de l'utilisateur
 * @property {number} age - Âge de l'utilisateur
 */

/**
 * @typedef {Object} KeyData
 * @property {number} calorieCount - Nombre de calories consommées
 * @property {number} proteinCount - Nombre de protéines consommées
 * @property {number} carbohydrateCount - Nombre de glucides consommés
 * @property {number} lipidCount - Nombre de lipides consommés
 */

/**
 * @typedef {Object} UserMainData
 * @property {number} id - Identifiant de l'utilisateur
 * @property {UserInfo} userInfos - Informations de l'utilisateur
 * @property {number} todayScore - Score du jour de l'utilisateur
 * @property {KeyData} keyData - Données nutritionnelles clés
 */

/** @type {UserMainData[]} */
const USER_MAIN_DATA = [
  {
      id: 12,
      userInfos: {
          firstName: 'Karl',
          lastName: 'Dovineau',
          age: 31,
      },
      todayScore: 0.12,
      keyData: {
          calorieCount: 1930,
          proteinCount: 155,
          carbohydrateCount: 290,
          lipidCount: 50
      }
  },
  {
      id: 18,
      userInfos: {
          firstName: 'Cecilia',
          lastName: 'Ratorez',
          age: 34,
      },
      score: 0.3,
      keyData: {
          calorieCount: 2500,
          proteinCount: 90,
          carbohydrateCount: 150,
          lipidCount: 120
      }
  }
];

/**
* @typedef {Object} ActivitySession
* @property {string} day - Date de la session
* @property {number} kilogram - Poids de l'utilisateur
* @property {number} calories - Calories dépensées
*/

/**
* @typedef {Object} UserActivity
* @property {number} userId - Identifiant de l'utilisateur
* @property {ActivitySession[]} sessions - Liste des sessions d'activité
*/

/** @type {UserActivity[]} */
const USER_ACTIVITY = [
  {
      userId: 12,
      sessions: [
          { day: '2020-07-01', kilogram: 80, calories: 240 },
          { day: '2020-07-02', kilogram: 80, calories: 220 },
          { day: '2020-07-03', kilogram: 81, calories: 280 },
          { day: '2020-07-04', kilogram: 81, calories: 290 },
          { day: '2020-07-05', kilogram: 80, calories: 160 },
          { day: '2020-07-06', kilogram: 78, calories: 162 },
          { day: '2020-07-07', kilogram: 76, calories: 390 }
      ]
  },
  {
      userId: 18,
      sessions: [
          { day: '2020-07-01', kilogram: 70, calories: 240 },
          { day: '2020-07-02', kilogram: 69, calories: 220 },
          { day: '2020-07-03', kilogram: 70, calories: 280 },
          { day: '2020-07-04', kilogram: 70, calories: 500 },
          { day: '2020-07-05', kilogram: 69, calories: 160 },
          { day: '2020-07-06', kilogram: 69, calories: 162 },
          { day: '2020-07-07', kilogram: 69, calories: 390 }
      ]
  }
];

/**
* @typedef {Object} AverageSession
* @property {number} day - Jour de la semaine (1 à 7)
* @property {number} sessionLength - Durée de la session en minutes
*/

/**
* @typedef {Object} UserAverageSessions
* @property {number} userId - Identifiant de l'utilisateur
* @property {AverageSession[]} sessions - Liste des sessions moyennes
*/

/** @type {UserAverageSessions[]} */
const USER_AVERAGE_SESSIONS = [
  {
      userId: 12,
      sessions: [
          { day: 1, sessionLength: 30 },
          { day: 2, sessionLength: 23 },
          { day: 3, sessionLength: 45 },
          { day: 4, sessionLength: 50 },
          { day: 5, sessionLength: 0 },
          { day: 6, sessionLength: 0 },
          { day: 7, sessionLength: 60 }
      ]
  },
  {
      userId: 18,
      sessions: [
          { day: 1, sessionLength: 30 },
          { day: 2, sessionLength: 40 },
          { day: 3, sessionLength: 50 },
          { day: 4, sessionLength: 30 },
          { day: 5, sessionLength: 30 },
          { day: 6, sessionLength: 50 },
          { day: 7, sessionLength: 50 }
      ]
  }
];

/**
* @typedef {Object} PerformanceData
* @property {number} value - Valeur de la performance
* @property {number} kind - Type de performance (1 à 6)
*/

/**
* @typedef {Object} UserPerformance
* @property {number} userId - Identifiant de l'utilisateur
* @property {Object<number, string>} kind - Correspondance entre ID et type de performance
* @property {PerformanceData[]} data - Données de performance
*/

/** @type {UserPerformance[]} */
const USER_PERFORMANCE = [
  {
      userId: 12,
      kind: {
          1: 'cardio',
          2: 'energy',
          3: 'endurance',
          4: 'strength',
          5: 'speed',
          6: 'intensity'
      },
      data: [
          { value: 80, kind: 1 },
          { value: 120, kind: 2 },
          { value: 140, kind: 3 },
          { value: 50, kind: 4 },
          { value: 200, kind: 5 },
          { value: 90, kind: 6 }
      ]
  },
  {
      userId: 18,
      kind: {
          1: 'cardio',
          2: 'energy',
          3: 'endurance',
          4: 'strength',
          5: 'speed',
          6: 'intensity'
      },
      data: [
          { value: 200, kind: 1 },
          { value: 240, kind: 2 },
          { value: 80, kind: 3 },
          { value: 80, kind: 4 },
          { value: 220, kind: 5 },
          { value: 110, kind: 6 }
      ]
  }
];

/**
* Exportation des données mockées
* @module MockData
*/
module.exports = {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE
};
