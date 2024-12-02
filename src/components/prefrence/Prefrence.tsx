import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import LoadingComponent from "../globalComponents/LoadingComponent";
import Font from "../globalComponents/CustomFont";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { CustomButton } from "../globalComponents/CustomButton";
import {
  primaryAccentColor,
  primaryTextColor,
  secondaryBackgroundColor,
} from "../../utils/colors";

const data = {
  title: "Interests",
  subtitle: null,
  options: [
    "Travel ✈️",
    "Cooking 🍳",
    "Hiking 🥾",
    "Yoga 🧘‍♀️",
    "Gaming 🎮",
    "Movies 🎥",
    "Photography 📷",
    "Music 🎵",
    "Pets 🐾",
    "Painting 🎨",
    "Art 👩‍🎨",
    "Fitness 💪",
    "Reading 📚",
    "Dancing 💃",
    "Sports ⚽️",
    "Board Games ♟️",
    "Technology 💡",
    "Fashion 👗",
    "Motorcycling 🏍️",
    "History 🔍",
    "Nature 🌿",
    "Adventure 🗺️",
    "Gardening 🌻",
    "Foodie 🥑",
    "Writing ✒️",
    "Poetry 📜",
    "Astronomy 🔭",
    "Sustainable Living ♻️",
    "Film Production 🎬",
    "Meditation 🧘‍♂️",
    "Comedy 😂",
    "Volunteering 💞",
    "DIY Projects 🔨",
    "Art History 🏛",
    "Philosophy 🤔",
    "Snowboarding 🏂",
    "Wine Tasting 🍷🍇",
    "Collectibles 🧸",
    "Sailing ⛵️",
    "Karaoke 🎤",
    "Scuba Diving 🤿",
    "Skydiving 🪂",
    "Pottery 🏺",
    "Wildlife Conservation 🐯",
    "Ghost Hunting 👻",
    "Geocaching 🛰️📍",
    "Standup Comedy 🎙️",
    "Motor Racing 🏎️🏁",
    "Paranormal Investigation 🕵️‍♂️🔍",
  ],
  subcategory: null,
  multipleSelection: true,
  __v: 0,
  keyWord: "intersts",
};

const set = [
  {
    subTitle: data.subtitle,
    items: data.options,
    selectedItems: [],
    multipleSelection: data.multipleSelection,
    keyWord: data.keyWord,
  },
];

const Prefrence = () => {
  const [title, setTitle] = useState(data.title);
  const [subCategory, setSubCategory] = useState(data.subcategory);
  const [multipleSelection, setMultipleSelection] = useState(
    data.multipleSelection
  );
  const [searchValue, setSearchvalue] = useState("");
  const [list, setList] = useState<any>(set);
  const [filteredList, setFilteredList] = useState<any>(list);

  const pascle = (string: string) => {
    const arr = string.split("");
    arr[0] = arr[0].toUpperCase();
    return arr.join("");
  };

  const filterList = (text: string) => {
    const arr = [...list];
    const obj = arr[0];
    let fist = obj.items.filter((item: any) =>
      item.includes(text.toLowerCase())
    );
    const newObj={...obj,items:fist};
    setFilteredList([newObj]);
    console.log(text,newObj.items);
  };
 
  
  const changeList = (val: any, ind: any) => {
    const arr = [...filteredList];
    const obj = { ...arr[ind] };
    const result = obj.selectedItems.find((item: any) => item === val);
    if (obj.multipleSelection) {
      if (result) {
        obj.selectedItems = obj.selectedItems.filter((element: any) => element !== val);
      } else {
        obj.selectedItems.push(val);
      }
    } else {
      obj.selectedItems = [val];
    }
    arr[ind] = obj;
    setFilteredList(arr);
  };

  return (
    <LoadingComponent loading={false} safeArea={true}>
      <View style={styles.setuppage}>
        <Font style={styles.title} fontWeight={500}>
          {title ? title : "Tittle"}
        </Font>
        {!subCategory ? (
          <View style={styles.searchContainer}>
            <View style={styles.searchBar}>
              {searchValue.length == 0 ? (
                <FontAwesome name="search" size={18} color="grey" />
              ) : null}

              <TextInput
                multiline={false}
                numberOfLines={1}
                style={styles.searchInput}
                placeholder="Search"
                
                maxLength={20}
                onChangeText={filterList}
                // value={searchValue}
              />
            </View>
          </View>
        ) : null}

        <ScrollView style={styles.setupContainer}>
          {filteredList &&
            filteredList.map((x: any, ind: any) => {
              return (
                <View style={styles.optionContainer}>
                  {subCategory ? (
                    <Font fontWeight={500}>{x.subTitle}</Font>
                  ) : null}
                  {x.items.map((i: any) => {
                    const check = x.selectedItems.find(
                      (item: any) => item === i
                    );
                    return (
                      <CustomButton
                        fontWeight={400}
                        style={check ? styles.selected : styles.notselected}
                        title={pascle(i)}
                        action={() => changeList(i, ind)}
                      />
                    );
                  })}
                </View>
              );
            })}
        </ScrollView>

        <CustomButton
          style={styles.submitButton}
          title="Continue"
          fontWeight={500}
          // action={() => handleSubmit(subCategory ? filteredList : list)}
        />
      </View>
    </LoadingComponent>
  );
};

export default Prefrence;

const styles = StyleSheet.create({
  setuppage: { padding: 20, paddingBottom: 50 },
  title: { fontSize: 20, textAlign: "center",color:primaryTextColor },
  searchContainer: {
    paddingVertical: 15,
  },
  searchBar: {
    borderColor: "#c0c0c0",
    borderWidth: 1,
    borderRadius: 7,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 7,
  },
  searchInput: {
    fontSize: 13,
    paddingVertical: 0,
    marginLeft: 5,
    fontWeight: 700,
    width: "90%",color:primaryTextColor
  },

  setupContainer: { height: "84%",paddingBottom:30 },
  optionContainer: { flexDirection: "row", flexWrap: "wrap", gap: 8 },
  selected: { backgroundColor: primaryAccentColor,
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 50,
    color: '#fff',
    // marginRight: 2,
    // marginBottom: 2,
    fontSize: 12,},
  notselected: {
    backgroundColor: secondaryBackgroundColor,
    color:primaryTextColor,
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 50,
    // marginRight: 2,
    // marginBottom: 2,
    fontSize: 12,
  },
  submitButton: {
    // marginVertical: 30,
    textAlign: "center",
    backgroundColor: primaryAccentColor,
    borderRadius: 50,
    paddingVertical: 13,
    paddingHorizontal: 20,
    fontSize:15,
    color:'#fff'
  },
});
