import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  ScrollView,
} from "react-native";
import userPhoto from "../assets/user-photo.jpg";
import posts from "../source/posts";
import { EvilIcons } from "@expo/vector-icons";

const PostsScreen = () => {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.userContainer}>
            <Image source={userPhoto} style={styles.userPhoto} />
            <View style={styles.userInfo}>
              <Text style={styles.userName}>Natali Romanova</Text>
              <Text style={styles.userEmail}>email@example.com</Text>
            </View>
          </View>
          {posts.map((post) => (
            <View key={post.id} style={styles.postsContainer}>
              <Image source={post.image} style={styles.postImage} />
              <Text style={styles.postName}>{post.name}</Text>
              <View style={styles.postInfo}>
                <View style={styles.info}>
                  <EvilIcons name="comment" size={24} color="#BDBDBD" />
                  <Text style={styles.infoComments}>{post.comments}</Text>
                </View>
                <View style={styles.info}>
                  <EvilIcons name="location" size={24} color="#BDBDBD" />
                  <Text
                    style={styles.infoLink}
                  >{`${post.location}, ${post.country}`}</Text>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
      </SafeAreaView>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    width: "100%",
  },
  userContainer: {
    paddingVertical: 32,
    paddingHorizontal: 16,
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
  },
  userPhoto: {
    width: 60,
    height: 60,
    borderRadius: 16,
    marginRight: 8,
  },
  userInfo: {
    display: "flex",
    flexDirection: "column",
  },
  userName: {
    fontFamily: "Roboto",
    fontWeight: "700",
    fontSize: 13,
  },
  userEmail: {
    fontFamily: "Roboto",
    fontWeight: "400",
    fontSize: 11,
  },
  postsContainer: {
    paddingHorizontal: 16,
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
  infoComments: {
    fontSize: 16,
    color: "#BDBDBD",
  },
  infoLink: {
    textDecorationLine: "underline",
    color: "#212121",
  },
});

export default PostsScreen;