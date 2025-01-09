import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import "./global.css"
import healthierSmartphone1 from "./assets/healthierSmartphone1.png";

export default function App() {
  return (
    <View className="flex-1 justify-center items-center relative bg-primary">
      {/* Image en arrière-plan */}
      <View className="w-3/4 h-3/4">
        <Image
          source={require("./assets/healthierSmartphone1.png")}
          className="w-full h-full"
        />
      </View>

      {/* View qui passe au-dessus */}
      <View className="absolute bottom-0 w-full h-1/3 bg-secondary rounded-t-[10px] flex">
        <View className="w-full h-full flex flex-row justify-center items-end px-6 py-10 gap-4">
          <TouchableOpacity
            className="bg-secondary-medium w-1/2 h-16 flex justify-center items-center rounded-full"
          >
            <Text className="text-white font-medium text-lg text-center">Passer</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="bg-primary w-1/2 h-16 flex justify-center items-center rounded-full"
          >
            <Text className="text-white font-medium text-lg text-center">Suivant</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "#191a1f",
  },
  background: {
    width: "100%",
    height: "50%",
    backgroundColor: "#35383f", // Couleur bg-secondary
    position: "relative",
    alignItems: "center",
  },
  circle: {
    position: "absolute",
    top: -50, // Décalage vers le haut pour "creuser"
    width: 100, // Largeur du cercle
    height: 100, // Hauteur du cercle
    borderRadius: 50, // Forme circulaire
    backgroundColor: "#191a1f", // Correspond à l'arrière-plan
  },
});