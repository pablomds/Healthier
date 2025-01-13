import { Text, View, Image, TouchableOpacity } from 'react-native';
const Access = ({navigation}) => {

  const handleNavigateLogin = () => {
		navigation.navigate("Login");
	}

  const handleNavigateSignup = () => {
		navigation.navigate("Signup");
	}

  return (
    <View className="flex-1 w-full px-6 py-16 justify-between items-center relative bg-secondary">
      <View className="w-full justify-center items-center">
        <Image
          source={require("../../assets/Logo.png")}
          className="w-20 h-20"
        />
      </View>
      <View>
        <Text className="text-white text-4xl">C'est parti !</Text>
      </View>
      <View>
        <Text className="text-gray-500 text-2xl">
          Plongeons dans votre compte
        </Text>
      </View>
      <View className="w-full gap-y-6">
        <TouchableOpacity className="w-full h-16 px-6 flex flex-row justify-start items-center rounded-full bg-secondary-dark border-2 border-secondary-medium">
          <Image source={require("../../assets/logoGoogle.png")} />
          <Text className="text-xl text-white ml-12">
            {" "}
            Continue with Google{" "}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity className="w-full h-16 px-6 flex flex-row justify-start items-center rounded-full  bg-secondary-dark border-2 border-secondary-medium">
          <Image source={require("../../assets/logoApple.png")} />
          <Text className="text-xl text-white ml-12">
            {" "}
            Continue with Apple{" "}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity className="w-full h-16 px-6 flex flex-row justify-start items-center rounded-full  bg-secondary-dark border-2 border-secondary-medium">
          <Image source={require("../../assets/logoFacebook.png")} />
          <Text className="text-xl text-white ml-12">
            {" "}
            Continue with Facebook{" "}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity className="w-full h-16 px-6 flex flex-row justify-start items-center rounded-full  bg-secondary-dark border-2 border-secondary-medium">
          <Image source={require("../../assets/logoTwitter.png")} />
          <Text className="text-xl text-white ml-12">
            {" "}
            Continue with Twitter{" "}
          </Text>
        </TouchableOpacity>
      </View>
      <View className="gap-y-6">
        <View className="w-full flex flex-row gap-4 items-center justify-center">
          <TouchableOpacity onPress={handleNavigateSignup} className="bg-primary w-full h-16 flex justify-center items-center rounded-full">
            <Text className="text-white font-medium text-lg text-center">
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
        <View className="w-full flex flex-row gap-4 items-center justify-center">
          <TouchableOpacity onPress={handleNavigateLogin} className="bg-secondary-medium w-full h-16 flex justify-center items-center rounded-full">
            <Text className="text-white font-medium text-lg text-center">
              Log in
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text className="text-gray-500"> Privacy Policy . Terms of Service </Text>
    </View>
  );
};

export default Access