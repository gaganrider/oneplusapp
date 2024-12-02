import { StyleSheet, Text, View, Button } from "react-native";
import React, { useState } from "react";
import LoadingComponent from "../globalComponents/LoadingComponent";
import { initialSetup } from "./styles";
import { Heading, Paragraph } from "./components/Text";
import { InputGender, InputText } from "./components/Inputs";
import DateTimePicker, {
  DateTimePickerAndroid,
} from "@react-native-community/datetimepicker";
import { secondaryBackgroundColor } from "../../utils/colors";
import { CustomButton } from "../globalComponents/CustomButton";
import Font from "../globalComponents/CustomFont";
const Birthday = () => {
  const [date, setDate] = useState<Date>(new Date());
  const [showPicker, setShowPicker] = useState<boolean>(false);
  const eighteenYearsAgo = new Date();
  eighteenYearsAgo.setFullYear(eighteenYearsAgo.getFullYear() - 18);

  const handleChange = (event: any, selectedDate?: Date) => {
    setShowPicker(false); // Hide picker after selection
    if (selectedDate) {
      setDate(selectedDate); // Update date state with selected date
    }
  };
  const showMode = () => {
    DateTimePickerAndroid.open({
      value: date,
      mode: "date",
      display: "spinner",
      maximumDate: eighteenYearsAgo,
      onChange: handleChange,
    });
  };

  return (
    <LoadingComponent loading={false}>
      <View style={initialSetup.container}>
      <Font style={initialSetup.heading} fontWeight={700}>What’s your birthday? Just curious!</Font>
        <Font style={initialSetup.paragraph}>
        Tell us your birthday; it will remain private, and only your age will
        be visible. This helps us connect you with like-minded people.
        </Font>
       
        <Text
          style={{
            fontSize: 28,
            paddingVertical: 5,
            borderRadius: 5,
            textAlign: "center",
            backgroundColor: secondaryBackgroundColor,
            marginVertical: 20,
          }}
          onPress={showMode}
        >
          {date ? date.toLocaleDateString() : "dd-mm-yyyy"}
        </Text>
        {/* {showPicker && (
        <DateTimePicker
          value={date}
          mode="date"
          display="spinner"
          maximumDate={eighteenYearsAgo}
          onChange={handleChange} // Trigger handleChange on date selection
        />
      )} */}
        {date ? (
          <CustomButton
            fontWeight={500}
            style={initialSetup.button}
            //   <SubmitButton
            title="Confirm"
            prompt={true}
            promptText="Are you Sure? You wont be able to change your birthday later."
          />
        ) : null}
      </View>
    </LoadingComponent>
  );
};

export default Birthday;

// const styles = StyleSheet.create({})
