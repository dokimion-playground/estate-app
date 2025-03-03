import React from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Card, FeaturedCard } from "@/components/Cards";
import Filters from "@/components/Filters";
import Search from "@/components/Search";
import icons from "@/constants/icons";
import { useGlobalContext } from "@/lib/global-provider";
import { router } from "expo-router";
import { Models } from "react-native-appwrite";

// 임시 데이터
const DUMMY_DATA: Models.Document[] = [1, 2, 3, 4].map((num) => ({
  $id: num.toString(),
  name: `매물 ${num}`,
  address: `서울시 강남구 테헤란로 ${num}길`,
  price: 500 + num * 100,
  rating: (4 + num * 0.2).toFixed(1),
  image: "https://picsum.photos/500/300",
  $collectionId: "properties",
  $databaseId: "database",
  $createdAt: "",
  $updatedAt: "",
  $permissions: [],
}));

const Index = () => {
  const { user } = useGlobalContext();

  const handleCardPress = (id: string) => router.push(`/properties/${id}`);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <FlatList
        data={DUMMY_DATA}
        renderItem={({ item }) => (
          <Card item={item} onPress={() => handleCardPress(item.$id)} />
        )}
        keyExtractor={(item) => item.$id}
        numColumns={2}
        contentContainerClassName="pb-32"
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <View className="px-5">
            <View className="flex flex-row items-center justify-between mt-5">
              <View className="flex flex-row">
                <Image
                  source={{ uri: user?.avatar }}
                  className="size-12 rounded-full"
                />

                <View className="flex flex-col items-start ml-2 justify-center">
                  <Text className="text-xs font-rubik text-black-100">
                    안녕하세요
                  </Text>
                  <Text className="text-base font-rubik-medium text-black-300">
                    {user?.name}님
                  </Text>
                </View>
              </View>
              <Image source={icons.bell} className="size-6" />
            </View>

            <Search />

            <View className="my-5">
              <View className="flex flex-row items-center justify-between">
                <Text className="text-xl font-rubik-bold text-black-300">
                  인기 매물
                </Text>
                <TouchableOpacity>
                  <Text className="text-base font-rubik-bold text-primary-300">
                    전체보기
                  </Text>
                </TouchableOpacity>
              </View>

              {false ? (
                <ActivityIndicator size="large" className="text-primary-300" />
              ) : (
                <FlatList
                  data={DUMMY_DATA}
                  renderItem={({ item }) => (
                    <FeaturedCard
                      item={item}
                      onPress={() => handleCardPress(item.$id)}
                    />
                  )}
                  keyExtractor={(item) => item.$id}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  contentContainerClassName="flex gap-5 mt-5"
                />
              )}
            </View>

            <View className="mt-5">
              <View className="flex flex-row items-center justify-between">
                <Text className="text-xl font-rubik-bold text-black-300">
                  추천
                </Text>
                <TouchableOpacity>
                  <Text className="text-base font-rubik-bold text-primary-300">
                    전체보기
                  </Text>
                </TouchableOpacity>
              </View>

              <Filters />
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default Index;
