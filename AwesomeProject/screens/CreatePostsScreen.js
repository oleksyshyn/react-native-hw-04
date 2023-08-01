import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons"; 

const CreatePostScreen = () => {
  const [postName, setPostName] = useState("");
  const [postLocation, setPostLocation] = useState("");
  const [isKeyboardShow, setIsKeyboardShow] = useState(false);

  const postNameHandler = (text) => setPostName(text.trim());
  const postLocationHandler = (text) => setPostLocation(text.trim());

  const handleFocus = () => {
    setIsKeyboardShow(true);
  };

  const isButtonDisabled = () => {
    return postName === "" || postLocation === "" ? true : false;
  };

  const keyboardHide = () => {
    setIsKeyboardShow(false);
    Keyboard.dismiss();
    };
    
  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <View style={styles.postImageAdd}>
            <TouchableOpacity style={styles.postImage} activeOpacity={0.5}>
              <FontAwesome name="camera" size={24} color="#BDBDBD" />
            </TouchableOpacity>
          </View>
          <Text style={styles.postImageText}>Завантажте фото</Text>
          <View>
            <TextInput
              value={postName}
              onChangeText={postNameHandler}
              style={styles.postInput}
              placeholder="Назва..."
              onFocus={handleFocus}
            />
            <View>
              <EvilIcons
                style={styles.locationIcon}
                name="location"
                size={24}
                color="#BDBDBD"
              />
              <TextInput
                value={postLocation}
                onChangeText={postLocationHandler}
                placeholder="Місцевість..."
                onFocus={handleFocus}
                style={{
                  ...styles.postInput,
                  paddingHorizontal: 28
                }}
              />
            </View>
            <TouchableOpacity
              style={[
                styles.postButton,
                isButtonDisabled() ? styles.invalidButton : styles.validButton,
              ]}
            >
              <Text
                style={[
                  isButtonDisabled()
                    ? styles.invalidButton
                    : styles.validButton,
                ]}
              >
                Опубліковати
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    width: "100%",
  },
  imageContainer: {
    paddingVertical: 32,
    paddingHorizontal: 16,
  },
  postImageAdd: {
    height: 240,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    marginBottom: 8,
  },
  postImage: {
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    color: "#FFFFFF",
    backgroundColor: "#FFFFFF",
  },
  postImageText: {
    fontSize: 16,
    fontWeight: "400",
    color: "#BDBDBD",
    marginBottom: 32,
  },
  postInput: {
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
    fontSize: 16,
    fontWeight: "400",
    height: 48,
    marginBottom: 16,
    borderBottomColor: "#E8E8E8",
    borderBottomWidth: 1,
  },
  locationIcon: {
    position: "absolute",
    top: 10,
    left: 2,
  },
  postButton: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 32,
    marginBottom: 100,
    height: 50,
    borderWidth: 1,
    borderRadius: 100,
    borderColor: "#F6F6F6",
    backgroundColor: "#F6F6F6",
  },
  validButton: {
    backgroundColor: "#FF6C00",
    color: "#FFFFFF",
  },
  invalidButton: {
    backgroundColor: "#F6F6F6",
    color: "#BDBDBD",
  },
});

export default CreatePostScreen;