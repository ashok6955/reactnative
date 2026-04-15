import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function index() {
  return (
    <SafeAreaView>
      {/* <View
        style={{
          backgroundColor: "green",
          width: 120,
          height: 120,
          marginTop: 20,
          marginLeft: 50,
          marginRight: 40,
          marginBottom: 10,
          padding: 10,
          borderWidth: 4,
          borderColor: "red",
          //   borderTopRightRadius: 10,
          //   borderBottomLeftRadius: 10,
          borderRadius: 60,

          //   borderRadius: 10,
          //   margin: 20,
          //   padding: 20,
        }}
      >
        <Text style={{ textAlign: "center" }}>welcome</Text>
      </View> */}
      <View
        style={{
          backgroundColor: "green",
          width: 100,
          height: 100,
          marginTop: 20,
          marginRight: 20,
          padding: 20,
          borderColor: "red",
        }}
      >
        <Text>Properties of the Box Model</Text>
      </View>
    </SafeAreaView>
  );
}
