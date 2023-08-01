import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
  SafeAreaView,
  ScrollView,
  Pressable,
} from "react-native";
import React from "react";
import { Feather, AntDesign } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import posts from "../source/posts";
import { EvilIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import BgImage from "../assets/bg-image.jpg";
import userPhoto from "../assets/user-photo.jpg";

// const avatar = require("../../Source/User.png");
// const postImage = require("../../Source/Forest.png");

// const BottomTabsProf = createBottomTabNavigator();

const ProfileScreen = () => {
  const navigation = useNavigation();
    
  return (
    <ImageBackground source={BgImage} style={styles.backgroundImage}>
      <SafeAreaView>
        <ScrollView>
          <View style={styles.mainContainer}>
            <View style={styles.avatar}>
              <Image source={userPhoto} style={styles.userPhoto} />
              <Pressable style={styles.addButton}>
                <AntDesign name="closecircleo" size={24} color="#E8E8E8" />
              </Pressable>
            </View>
            <TouchableOpacity
              style={styles.logoutButton}
              activeOpacity={0.5}
              onPress={() =>
                navigation.navigate("Увійти")
              }
            >
              <Feather name="log-out" size={24} color="#BDBDBD" />
            </TouchableOpacity>

            <Text style={styles.title}>Natali Romanova</Text>

            {posts.map((post) => (
              <View key={post.id}>
                <Image source={post.image} style={styles.postImage} />
                <Text style={styles.postName}>{post.name}</Text>
                <View style={styles.postInfo}>
                  <View style={styles.info}>
                    <View style={styles.comments}>
                      {post.comments > 0 ? (
                        <FontAwesome name="comment" size={18} color="#FF6C00" />
                      ) : (
                        <FontAwesome
                          name="comment-o"
                          size={18}
                          color="#BDBDBD"
                        />
                      )}
                      <Text style={styles.infoComments}>{post.comments}</Text>
                    </View>
                    <View style={styles.likes}>
                      <AntDesign
                        name="like2"
                        size={18}
                        color="#BDBDBD"
                        style={{
                          color: post.likes > 0 ? "#FF6C00" : "#BDBDBD",
                        }}
                      />
                      <Text style={styles.infoLikes}>{post.likes}</Text>
                    </View>
                  </View>
                  <View style={styles.info}>
                    <EvilIcons name="location" size={24} color="#BDBDBD" />
                    <Text style={styles.infoLink}>{post.country}</Text>
                  </View>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: "flex-start",
    width: "100%",
  },
  mainContainer: {
    marginTop: 120,
    position: "relative",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  avatar: {
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 16,
    transform: [{ translateY: -60 }, { translateX: 145 }],
  },
  userPhoto: {
    width: 120,
    height: 120,
    borderRadius: 16,
  },
  addButton: {
    position: "absolute",
    bottom: 14,
    right: -12,
    backgroundColor: "#FFFFFF",
    borderRadius: 100,
  },
  logoutButton: {
    position: "absolute",
    top: 22,
    right: 16,
  },
  title: {
    fontFamily: "Roboto",
    fontSize: 30,
    marginTop: 92,
    marginBottom: 32,
    fontWeight: "500",
    textAlign: "center",
  },
  postImage: {
    width: "100%",
    height: 240,
    borderRadius: 15,
    color: "#212121",
  },
  postName: {
    marginTop: 8,
    fontWeight: "500",
    fontSize: 16,
  },
  postInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 32,
  },
  info: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },
  comments: {
    flexDirection: "row",
    marginRight: 24,
  },
  likes: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  infoComments: {
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: 16,
    color: "#BDBDBD",
    marginLeft: 6,
  },
  infoLikes: {
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: 16,
    color: "#BDBDBD",
    marginLeft: 6,
  },
  infoLink: {
    textDecorationLine: "underline",
    color: "#212121",
  },
});

export default ProfileScreen;