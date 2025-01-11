import * as Google from "expo-auth-session/providers/google";
import { useEffect } from "react";
import { getAuth, GoogleAuthProvider, signInWithCredential } from "firebase/auth";
import app from "./firebaseConfig"; // Importez votre configuration Firebase

const auth = getAuth(app);

export const useGoogleAuth = () => {
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId: "VOTRE_CLIENT_ID_GOOGLE", // Remplacez par votre Client ID
  });

  useEffect(() => {
    if (response?.type === "success") {
      const { id_token } = response.params;

      // Créez une authentification Firebase avec l'ID token de Google
      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credential)
        .then((userCredential) => {
          console.log("Utilisateur connecté :", userCredential.user);
        })
        .catch((error) => {
          console.error("Erreur de connexion :", error);
        });
    }
  }, [response]);

  return { request, promptAsync };
};