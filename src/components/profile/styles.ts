import { StyleSheet, Dimensions } from "react-native";
import {
  primaryAccentColor,
  secondaryBackgroundColor,
} from "../../utils/colors";

const { width, height } = Dimensions.get("window");
export const profile = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingBottom: 20, // Adding some space at the bottom if necessary
  },
  dp: {
    width: width,
    height: height * 0.5,
    resizeMode: "cover",
    borderRadius: 0,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 15,
    elevation: 5,
  },
  followButton: {
    // background: var(--primary-gradient);
    backgroundColor: primaryAccentColor,
    color: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 5,
    borderRadius: 50,
    paddingVertical: 8,
    paddingHorizontal: 20,
  },
  basicDetails: {
    padding: 30,
    paddingBottom:10,
  },
  usernameContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  nickName: { fontSize: 23 },
  userName: { fontSize: 15, opacity: 0.6 },
  h4: {
    fontSize: 16,
    marginTop: 20,
    marginBottom: 10,
  },
  bio: {
    fontSize: 14,
    opacity: 0.6,
  },
  interstContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  interst: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 50,
    marginRight: 3,
    marginBottom: 3,
    fontSize: 12,
    backgroundColor: secondaryBackgroundColor,
  },
  postInterstContainerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  postInterstContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
    borderRadius: 50,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 5,
    overflow:'hidden'
  },
  postInterstButton: {
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
});
