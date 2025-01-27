import { Text, Button } from "react-native";
import { TextInput } from "react-native";
import { useRef, useState } from "react";
import { View } from "../../components/Themed";
import { OTPInput } from "react-native-otp-component";

export default function OptCodeInput() {
  const [codes, setCodes] = useState(Array(6).fill(""));
  const refs = Array(6)
    .fill(null)
    .map(() => useRef<TextInput>(null));

  const [errorMessages, setErrorMessages] = useState();


  const onChangeCode = () => {
    if (text.length > 1) {
      // If the input text has more than 1 character:
      setErrorMessages(undefined); // Clear any error messages.
      const newCodes = text.split(""); // Split the text into an array of characters.
      setCodes(newCodes); // Update the state with the new array of codes.
      refs[5]?.current?.focus(); // Focus the sixth input field.
      return;
    }
  
    // For normal single-character input:
    setErrorMessages(undefined); // Clear any error messages.
    const newCodes = [...codes]; // Clone the current codes array.
    newCodes[index] = text; // Update the current index with the new text.
    setCodes(newCodes); // Update the state with the modified array.
  
    // If the input is not empty and the index is less than 5, move to the next input field:
    if (text !== "" && index < 5) {
      refs[index + 1]?.current?.focus(); // Focus the next input.
    }
  };
  

  const otpConfig = {
    borderColor: "#fff",
    backgroundColor: "#fff",
    textColor: "#000",
    errorColor: "#dc2626",
    focusColor: "#22c55e"
  }

  return (
    <View
      style={{
        height: "100%",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Enter the verification code</Text>
      <OTPInput
        codes={codes} // Pass codes as is (ensure it's not null or undefined).
        errorMessages={errorMessages} // Pass errorMessages (undefined or valid error message).
        onChangeCode={onChangeCode} // Callback function.
        refs={refs} // Array of references.
        config={otpConfig} // Configuration for OTP input.
      />

      <Button
        title="Enter"
        onPress={() => {
          const fullCode = codes?.join("");
          console.error(fullCode);
        }}
      />
    </View>
  );
}