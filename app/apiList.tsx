import { Header } from "@/components/header";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ApiList() {
  return (
    <>
      <SafeAreaView>
        <Header image={require("@/assets/images/passaros.jpg")} />
        <View>
          <Text>TESTE2</Text>
        </View>
      </SafeAreaView>
    </>
  );
}
