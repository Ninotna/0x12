import axios from "axios";
import { getMockUserData, getMockUserActivity, getMockUserAverageSessions, getMockUserPerformance } from "./MockData";

const API_URL = "http://localhost:3000";
const useMockData = import.meta.env.VITE_MOCKED_DATA === "true";
console.log("✅ Mode mock activé :", useMockData);

const DataService = {
  /**
   * Récupère les données principales de l'utilisateur
   * @param {number} userId - L'ID de l'utilisateur
   * @returns {Promise<Object|null>} Données utilisateur ou null en cas d'erreur
   */
  getUserData: async (userId) => {
    try {
      if (useMockData) {
        console.log("Utilisation des données mockées pour l'utilisateur", userId);
        return await getMockUserData(userId);
      }
      console.log("Requête API pour l'utilisateur", userId);
      const response = await axios.get(`${API_URL}/user/${userId}`);
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la récupération des données utilisateur", error);
      return null;
    }
  },

  /**
   * Récupère les données d'activité de l'utilisateur
   * @param {number} userId - L'ID de l'utilisateur
   * @returns {Promise<Object|null>} Activité utilisateur ou null en cas d'erreur
   */
  getUserActivity: async (userId) => {
    try {
      if (useMockData) {
        console.log("Utilisation des données mockées pour l'activité de l'utilisateur", userId);
        return await getMockUserActivity(userId);
      }
      console.log("Requête API pour l'activité de l'utilisateur", userId);
      const response = await axios.get(`${API_URL}/user/${userId}/activity`);
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la récupération des données d'activité", error);
      return null;
    }
  },

  /**
   * Récupère les sessions moyennes de l'utilisateur
   * @param {number} userId - L'ID de l'utilisateur
   * @returns {Promise<Object|null>} Sessions moyennes ou null en cas d'erreur
   */
  getUserAverageSessions: async (userId) => {
    try {
      if (useMockData) {
        console.log("Utilisation des données mockées pour les sessions moyennes de l'utilisateur", userId);
        return await getMockUserAverageSessions(userId);
      }
      console.log("Requête API pour les sessions moyennes de l'utilisateur", userId);
      const response = await axios.get(`${API_URL}/user/${userId}/average-sessions`);
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la récupération des sessions moyennes", error);
      return null;
    }
  },

  /**
   * Récupère les performances de l'utilisateur
   * @param {number} userId - L'ID de l'utilisateur
   * @returns {Promise<Object|null>} Données de performance ou null en cas d'erreur
   */
  getUserPerformance: async (userId) => {
    try {
      if (useMockData) {
        console.log("Utilisation des données mockées pour la performance de l'utilisateur", userId);
        return await getMockUserPerformance(userId);
      }
      console.log("Requête API pour la performance de l'utilisateur", userId);
      const response = await axios.get(`${API_URL}/user/${userId}/performance`);
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la récupération des performances", error);
      return null;
    }
  },
};

export default DataService;
