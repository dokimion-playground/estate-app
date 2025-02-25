import React from "react";
import { Text, View } from "react-native";

const ExploreScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>탐색 화면</Text>
      <Text style={{ marginTop: 10 }}>
        이곳에서 부동산을 탐색할 수 있습니다.
      </Text>
    </View>
  );
};

export default ExploreScreen;
