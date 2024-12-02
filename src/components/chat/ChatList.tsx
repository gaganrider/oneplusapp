import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import LoadingComponent from "../globalComponents/LoadingComponent";
import Font from "../globalComponents/CustomFont";
import { CustomButton } from "../globalComponents/CustomButton";
import { useAuth } from "../../utils/Auth";
import { getAllChats } from "../../services/chat";
import { primaryBackgroundColor, primaryTextColor, secondaryBackgroundColor } from "../../utils/colors";
import { useNavigation } from "@react-navigation/native";
import CustomHeader from "../globalComponents/CustomHeader";

interface User {
  _id: string;
  username: string;
  avatar: string;
  id: string;
}

interface Chat {
  _id: string;
  accepted: boolean;
  createdBY: string;
  participants: User[];
}

const ChatList: React.FC = () => {
  const [primaryChat, setPrimaryChat] = useState<boolean>(true);
  const [primaryChatList, setPrimaryChatList] = useState<Chat[]>([]);
  const [requestChatList, setRequestChatList] = useState<Chat[]>([]);
const [count, setCount] = useState(0);
  const { currentUser } = useAuth();
  const navigation =useNavigation()
  useEffect(() => {
    console.log("ChatList");
    
    getAllChats().then((res) => {
      const primary = res.data.data.filter((chat: Chat) => {
        return chat.accepted || chat.createdBY === currentUser?.id;
      });
      const request = res.data.data.filter((chat: Chat) => {
        return !chat.accepted && chat.createdBY !== currentUser?.id;
      });
      setPrimaryChatList(primary);
      setRequestChatList(request);
    }).catch((err) => console.log(err));
  }, [count,currentUser]);

  return (
    <LoadingComponent loading={false} safeArea={false}>
      <View style={chatlistStyle.container}>

        <CustomHeader>
        <View style={chatlistStyle.header}>
          <Font style={chatlistStyle.headertxt} fontWeight={500}>
            Messaging
          </Font>

          {/* <SearchIcon /> */}
        </View>
        </CustomHeader>
       
        <ScrollView style={chatlistStyle.chatList}>
          <View style={chatlistStyle.selection}>
            <CustomButton
              fontWeight={500}
              style={
                primaryChat
                  ? chatlistStyle.selectedButton
                  : chatlistStyle.selectionButton
              }
              action={() => setPrimaryChat(true)}
              title="Primary"
            />

            <CustomButton
              fontWeight={500}
              style={
                !primaryChat
                  ? chatlistStyle.selectedButton
                  : chatlistStyle.selectionButton
              }
              action={() => setPrimaryChat(false)}
              title="Request"
            />
          </View>
          {primaryChat
            ? primaryChatList.map((x) => {
                const otherUser = x.participants.find(
                  (participant) => participant._id !== currentUser?.id
                );

                return (
                  <View style={chatlistStyle.chat} key={x._id}>
                    <View style={chatlistStyle.dp}>
                      <Image
                        source={{
                          uri: otherUser?.avatar,
                        }}
                        style={chatlistStyle.dp}
                      />
                    </View>

                    {/* <img src={otherUser?.avatar} alt="" /> */}

                    {/* <Link to={`/chat/${x._id}`} className="chat-details"> */}
                    <View style={chatlistStyle.chatTextContainer}>
                      <View style={chatlistStyle.chatText}>

                      {otherUser&&<CustomButton title={otherUser?.username}
                          fontWeight={500} action={() =>  navigation.push('chat', {
                            chatId: x._id,
                          })}/>}
                        {/* <Font style={chatlistStyle.name} fontWeight={500}>
                          {otherUser?.username}
                        </Font> */}
                        <Font style={chatlistStyle.status}>Online</Font>
                      </View>
                      <View style={chatlistStyle.chatText}>
                        <Font style={chatlistStyle.lastText}>
                          something text
                        </Font>
                        <Font style={chatlistStyle.number}>54</Font>
                      </View>
                    </View>
                    {/* </Link> */}
                  </View>
                );
              })
            : requestChatList.map((x) => {
                const otherUser = x.participants.find(
                  (participant) => participant._id !== currentUser?.id
                );
                return (
                  <View style={chatlistStyle.chat} key={x._id}>
                    <View style={chatlistStyle.dp}>
                      <Image
                        source={{
                          uri: otherUser?.avatar,
                        }}
                        style={chatlistStyle.dp}
                      />
                    </View>

                    <View style={chatlistStyle.chatTextContainer}  >
                      <View style={chatlistStyle.chatText}>
                        {otherUser&&<CustomButton title={otherUser?.username}
                          fontWeight={500} action={() =>  navigation.push('chat', {
                            chatId: x._id,
                          })}/>}
                        
                        {/* <Font style={chatlistStyle.name}>
                          {otherUser?.username}
                        </Font> */}
                        <Font style={chatlistStyle.status}>Online</Font>
                      </View>
                      <View style={chatlistStyle.chatText}>
                        <Font style={chatlistStyle.lastText}>
                          something text
                        </Font>
                        <Font style={chatlistStyle.number}>54</Font>
                      </View>
                    </View>
                    {/* </Link> */}
                  </View>
                );
              })}
        </ScrollView>

       
      </View>
    </LoadingComponent>
  );
};

export default ChatList;

const chatlistStyle = StyleSheet.create({
  container: {backgroundColor:primaryBackgroundColor,height:'100%'},
  header: {
    // width:'100%',
    // backgroundColor:'yellow',
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // shadowColor: "#000000", // Matches rgb(0 0 0 / 40%)
    // shadowOffset: { width: 0, height: 0 },
    // shadowOpacity: 0.4,
    // shadowRadius: 5,
    // Android shadow
    // elevation: 5, // This approximates the shadow depth on Android
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  headertxt: { fontSize: 25, color: primaryTextColor },
  chatList: {paddingHorizontal:10},
  selection: {
    paddingVertical: 12,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  selectionButton: {
    fontSize: 15,
    color: primaryTextColor,
    opacity: 0.4,
  },
  selectedButton: {
    fontSize: 15,
    color: primaryTextColor,
  },
  chat: {
    backgroundColor:secondaryBackgroundColor,
    borderRadius:10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 25,
    shadowColor: "#000000025",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.05,
    shadowRadius: 3.84,
    elevation: 5,
  },
  dp: {
    width: 40,
    height: 40,
    backgroundColor: "grey",
    borderRadius: 60,
  },
  chatTextContainer: { width: "85%" },
  chatText: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  name: {
    fontSize: 16,
    // backgroundColor:'yellow',
    // lineHeight:10
  },
  status: {},
  lastText: { fontSize: 13, opacity: 0.7, lineHeight: 13 },
  number: { fontSize: 13 },
});
