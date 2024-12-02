import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  ScrollView,
  Dimensions,
  FlatList,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from "react-native";
import React, { useEffect, useState } from "react";
import LoadingComponent from "../globalComponents/LoadingComponent";
import Font from "../globalComponents/CustomFont";
import { CustomButton } from "../globalComponents/CustomButton";
import { getAllMessages, getChatDetails } from "../../services/chat";
import { useAuth } from "../../utils/Auth";
import CustomHeader from "../globalComponents/CustomHeader";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import {
  primaryAccentColor,
  primaryBackgroundColor,
  primaryTextColor,
  secondaryBackgroundColor,
} from "../../utils/colors";
import ImageComponent from "../globalComponents/CustomImage";
const screenHeight = Dimensions.get("window").height;
interface Message {
  text: string;
  from: "fp" | "sp";
  postId?: {
    images?: { url: string }[];
  };
  createdAt: string;
  sender: string;
  imageUrl?: string;
}

interface User {
  _id: string;
  username: string;
  avatar: string;
  id: string;
}

interface Props {
  route: any;
}

const Chat: React.FC<Props> = ({ route }) => {
  const [message, setMessage] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [request, setRequest] = useState<boolean>(false);
  const [postWidth, setPostWidth] = useState<number>(0);
  const [keyboardHeight, setKeyboardHeight] = useState(screenHeight * 0.84);
  const [otherUser, setOtherUser] = useState<{
    username?: string;
    nickName?: string;
    avatar?: string;
  } | null>(null);
  const { currentUser } = useAuth();
  const { chatId } = route.params;

  const getMessages = async () => {
    let accepted = true;
    if (chatId) {
      await getChatDetails(chatId)
        .then((res) => {
          if (res.data.data.createdBY !== currentUser?.id) {
            setRequest(!res.data.data.accepted);
            accepted = res.data.data.accepted;
          }

          const other = res.data.data.participants.filter(
            (user: { _id: string }) => user._id !== currentUser?.id
          )[0];
          setOtherUser(other);
        })
        .catch((error) => console.log(error));
    }

    await getAllMessages({ chatId, accepted })
      .then((res) => {
        setMessages(res.data.data);

        if (!accepted && currentUser) {
          Image.getSize(currentUser.avatar, (naturalWidth, naturalHeight) => {
            const calculatedWidth =
              (naturalWidth / naturalHeight) *
              Dimensions.get("window").height *
              0.15;
            setPostWidth(calculatedWidth);
          });
        }
      })
      .catch((error) => console.log(error));
  };

  function getTime(dateString: string): string {
    return new Date(dateString).toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  function getWeekday(dateString: string): string | null {
    const date = new Date(dateString);
    const today = new Date();

    const isToday = date.toDateString() === today.toDateString();
    const isYesterday =
      date.toDateString() ===
      new Date(today.setDate(today.getDate() - 1)).toDateString();

    return isToday
      ? null
      : isYesterday
      ? "Yesterday"
      : date.toLocaleDateString("en-US", { weekday: "long" });
  }

  useEffect(() => {
    if (chatId) {
      getMessages();
    }
  }, [chatId]);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      (e) => {
        setKeyboardHeight(screenHeight * 0.84 - e.endCoordinates.height);
        console.log("wokring");
      }
    );

    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardHeight(screenHeight * 0.84);
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, [screenHeight]);

  // renderItem function with props
  const renderItem = ({ item, index }: { item: Message; index: number }) => {
    return (
      <View key={index} style={chatStyles.messageContainer}>
        {(index > 0 &&
          getWeekday(item.createdAt) !==
            getWeekday(messages[index - 1].createdAt)) ||
        index % 20 === 0 ? (
          <Font style={chatStyles.date}>
            {getWeekday(item.createdAt)} {getTime(item.createdAt)}
          </Font>
        ) : null}

        <View
          style={
            currentUser?.id === item.sender ? chatStyles.fp : chatStyles.sp
          }
        >
          {item.postId?.images?.[0]?.url && (
            <ImageComponent
              url={item.postId.images[0].url}
              rounded={10}
              width={(Dimensions.get("window").width - 20) * 0.7 - 20}
            />
          )}
          {item.imageUrl ? (
            <ImageComponent
              url={item.imageUrl}
              rounded={10}
              width={(Dimensions.get("window").width - 20) * 0.7 - 20}
            />
          ) : null}
          {item.text ? (
            <Font
              fontWeight={500}
              style={
                currentUser?.id === item.sender
                  ? chatStyles.messageTextfp
                  : chatStyles.messageTextsp
              }
            >
              {item.text}
            </Font>
          ) : null}
        </View>
      </View>
    );
  };

  return (
    <LoadingComponent loading={false} safeArea={false}>
      <CustomHeader>
        <View style={chatStyles.header}>
          <View style={chatStyles.headerimgcontainer}>
            <Image
              source={{ uri: otherUser?.avatar }}
              style={{
                width: 35,
                height: 35,
                borderRadius: 50,
                marginRight: 10,
              }}
            />
            <View>
              <Font fontWeight={500} style={chatStyles.otherUser}>
                {otherUser?.username}
              </Font>
              <Font style={chatStyles.status}>Online</Font>
            </View>
          </View>
          <Entypo name="dots-two-vertical" size={14} color="black" />
        </View>
      </CustomHeader>

      <View style={chatStyles.chatbox}>
        <FlatList
          data={messages}
          renderItem={renderItem}
          keyExtractor={(_, index) => index.toString()} // Use a unique key
          style={[chatStyles.messages, { height: keyboardHeight }]}
          showsVerticalScrollIndicator={false}
        />

        <View style={chatStyles.footer}>
          <View
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              // justifyContent: "space-between",
              alignItems: "center",
              padding: 5,
              // paddingRight:10,
              borderRadius: 30,
              backgroundColor: secondaryBackgroundColor,
            }}
          >
            <Entypo
              name="camera"
              size={20}
              color={"white"}
              style={{
                padding: 10,
                backgroundColor: primaryAccentColor,
                borderRadius: 30,
                marginRight: 5,
              }}
            />
            <TextInput
              // style={styles.comment}
              style={{
                fontSize: 16,

                width: "80%",
                color: "grey",
                maxHeight: 100,
              }}
              placeholder="Send Message..."
              placeholderTextColor="grey"
              maxLength={100}
              multiline={true}
            />

            <MaterialIcons
              name="multitrack-audio"
              size={20}
              color="grey"
              // style={{ marginRight: 15 }}
            />
            {/* <Feather name="send" size={18} color="black" /> */}
          </View>
        </View>
      </View>
    </LoadingComponent>
  );
};

export default Chat;



const chatStyles = StyleSheet.create({
  header: {
    paddingHorizontal: 25,
    paddingVertical: 5,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  headerimgcontainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  otherUser: { fontSize: 14 },
  status: { fontSize: 12 },
  chatbox: {},
  date: {
    textAlign: "center",
    fontSize: 12,
    marginTop: 20,
    marginBottom: 10,
    opacity: 0.7,
  },
  messages: {
      paddingVertical: 0,
    paddingHorizontal: 10,
      display: "flex",
  },
  request: {},
  imgcontainer: {},
  messageContainer: {
    marginBottom: 10,
  },
  fp: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 10,
    alignSelf: "flex-end",

    maxWidth: "70%",
    marginLeft: "auto",
    color: primaryTextColor,
    backgroundColor: secondaryBackgroundColor,
  },
  sp: {
    marginRight: "auto",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 10,
    alignSelf: "flex-start",
    maxWidth: "70%",
    backgroundColor: primaryAccentColor,
  },
  messageTextfp: { textAlign: "left", color: primaryTextColor, fontSize: 14 },
  messageTextsp: { textAlign: "left", color: "#fff", fontSize: 14 },
  footer: { padding: 10 },
});
