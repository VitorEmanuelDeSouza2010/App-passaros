import { Header } from "@/components/header";
import { router } from "expo-router";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomePage() {
  const visit = () => {
    router.push("/list");
  };

  return (
    <SafeAreaView>
      <Header image={require("@/assets/images/passaros.jpg")} />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={s.corpo}>
          <Text style={s.titulo}>Tela inicial</Text>
          <Text style={s.paragrafo}>App usando React-Native e Expo.</Text>
        </View>
        <View style={s.corpo2}>
          <Image
            source={require("../assets/images/passaros2.jpg")}
            style={s.img2}
          />
        </View>
        <View>
          <TouchableOpacity style={s.btn} onPress={visit}>
            <Text style={s.btnText}>Ir lpara listas</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  wrap: {
    flex: 1,
  },

  corpo: {
    backgroundColor: "#090909",
    gap: 25,
  },

  corpo2: {
    alignItems: "center",
  },

  titulo: {
    color: "#ffffff",
    textAlign: "center",
    fontSize: 30,
    fontWeight: 700,
    padding: 20,
  },

  paragrafo: {
    color: "gray",
    textAlign: "center",
    fontSize: 22,
    paddingBottom: 15,
  },

  btn: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: "#06525f",
    width: 200,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 2,
    borderColor: "#090909",
    borderRadius: 999,
    alignSelf: "center",
  },

  btnText: {
    color: "#ffffff",
    fontSize: 22,
  },

  img2: {
    width: "100%",
    height: 250,
    marginBottom: 30,
  },
});
