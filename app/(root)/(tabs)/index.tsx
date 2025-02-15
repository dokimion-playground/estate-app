import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const Index = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="font-bold text-lg my-10">Welcome</Text>
      <Link href="/sign-in">로그인</Link>
      <Link href="/profile">프로필</Link>
      <Link href="/explore">탐색</Link>
      <Link href="/properties/1">부동산</Link>
    </View>
  );
};

export default Index;
