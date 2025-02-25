import { useGlobalContext } from "@/lib/global-provider";
import React from "react";
import { Text, View } from "react-native";

const ProfileScreen = () => {
  const { user } = useGlobalContext();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>프로필</Text>

      {user ? (
        <View style={{ alignItems: "center", marginTop: 20 }}>
          <Text style={{ fontSize: 18 }}>이름: {user.name || "사용자"}</Text>
          <Text style={{ fontSize: 16, marginTop: 8 }}>
            이메일: {user.email}
          </Text>
        </View>
      ) : (
        <Text style={{ marginTop: 10 }}>로그인이 필요합니다</Text>
      )}
    </View>
  );
};

export default ProfileScreen;
