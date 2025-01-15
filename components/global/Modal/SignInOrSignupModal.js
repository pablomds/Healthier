import React from 'react';
import { Modal, View, Pressable, Text } from 'react-native-web';
import LoaderIconSVG from '../loader/loader'; // Ensure this is a valid SVG component

export const SignInOrSignupModal = ({ showModal = false, setShowModal, isSignIn = true }) => {
  console.log("from inside the modal", showModal);  // Debug log to see if the modal is being rendered

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={true}
      onRequestClose={() => setShowModal(false)} // Close modal when requested (e.g., back button press)
    >
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 9999,
        }}
      >
        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: 200,
            width: 340,
            backgroundColor: "#2a2a2a", // assuming 'bg-secondary' was your custom color
            padding: 20,
            borderRadius: 12,
            gap: 6,
          }}
        >
          <LoaderIconSVG
            style={{
              animation: "spin 2s linear infinite",
              height: "100%",
              width: "100%",
            }}
          />
          <Pressable>
            <Text style={{ color: "white", fontSize: 20 }}>
              Sign Up ...
            </Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};
