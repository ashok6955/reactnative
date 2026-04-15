import { Text, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView>
      {/* <View style={{ backgroundColor: "" }}>
        <Text style={{ color: "blue", fontSize: 14 }}>hello</Text>
        <Text style={{ color: "blue", fontWeight: "900" }}>hello</Text>
        <Text style={{ color: "blue", fontWeight: "100",fontStyle:"italic",letterSpacing:10,textAlign:"right" }}>hello</Text>
        <Text style={{ color: "blue", fontWeight: "400", lineHeight: 20,textDecorationLine:"underline line-through" }}>
          lorem50written and directed by Aditya Dhar. It is produced by Dhar,
          Lokesh Dhar, and Jyoti Deshpande under Jio Studios and B62 Studios. It
          is a sequel to the 2025 film Dhurandhar and the final installment of
          the duology. The film stars Ranveer Singh, Arjun Rampal, Sanjay Dutt,
          R. Madhavan, Sara Arjun, Rakesh Bedi, Gaurav Gera, Danish Pandor, and
          Manav Gohil, with several actors reprising their roles from the first
          part. It follows an undercover Indian intelligence agent who continues
          to infiltrate Karachi's criminal syndicates and Pakistani politics
          while avenging the 26/11 attacks and confronting bigger threats. The
          film's storyline loosely draws inspiration
        </Text>
      </View> */}
      <View>
        <Text
          style={{
            color: "green",
            fontSize: 18,
            fontStyle: "italic",
            textDecorationLine: "underline",
            textAlign: "center",
          }}
        >
          welcome
        </Text>{" "}
      </View>
    </SafeAreaView>
  );
}
