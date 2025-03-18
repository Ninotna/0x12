import axios from "axios";
import { getMockUserData } from "./MockData";

const API_URL = "http://localhost:3000";
const useMockData = import.meta.env.VITE_MOCKED_DATA === "true";
console.log("✅ Mode mock activé :", useMockData);
/**
 * Service de gestion des données utilisateur
 */
const DataService = {
  /**
   * Récupère les données utilisateur via l'API ou les mocks
   * @param {number} userId - L'ID de l'utilisateur
   * @returns {Promise<Object|null>} Les données utilisateur ou null en cas d'erreur
   */
  getUserData: async (userId) => {
    try {
      if (useMockData) {
        console.log("Utilisation des données mockées");
        const data = await getMockUserData(userId);
        console.log("Données mockées récupérées:", data);
        return data;
      }
      console.log("Requête API en cours pour l'utilisateur", userId);
      const response = await axios.get(`${API_URL}/user/${userId}`);
      console.log("Données API récupérées:", response.data);
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la récupération des données utilisateur", error);
      return null;
    }
  },
};

export default DataService;