import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        backgroundColor: "yellow",
      }}
    >
      <View
        style={{
          backgroundColor: "red",
          height: 40,
          width: 40,
          alignSelf: "center",
        }}
      >
        <Text>box1</Text>
      </View>
      <View
        style={{
          backgroundColor: "blue",
          height: 40,
          width: 40,
          alignSelf: "flex-end",
        }}
      >
        <Text>box2</Text>
      </View>
      <View style={{ backgroundColor: "green", height: 40, width: 40 }}>
        <Text>box3</Text>
      </View>
      <View
        style={{
          backgroundColor: "orange",
          height: 40,
          width: 40,
          alignSelf: "center",
        }}
      >
        <Text>box4</Text>
      </View>
    </View>
  );
}
