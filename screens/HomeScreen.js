import { View, Text, SafeAreaView, FlatList } from "react-native";
import React, { useState } from "react";
import { COLORS, NFTData } from "../constants";
import { FocusedStatusBar, HomeHeader, NFTCard } from "../components/index";

const HomeScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar background={COLORS.primary} />
      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={NFTData}
            renderItem={({ item }) => <NFTCard data={item} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader />}
          />
        </View>
        <View
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: -1,
          }}
        >
          <View style={{ height: 300, background: COLORS.primary }} />
          <View style={{ flex: 1, background: COLORS.white }} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;