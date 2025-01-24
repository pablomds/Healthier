import { Text, View, Image, TouchableOpacity } from 'react-native';
import { SignInWithService } from "../../components/global/SignIn/SignInWithService"
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
        <Text className="font-Urbanist-Bold text-white text-4xl">C'est parti !</Text>
      </View>
      <View>
        <Text className="font-Urbanist-Bold text-primary-gray text-2xl">
          Plongeons dans votre compte
        </Text>
      </View>
      <View className="w-full gap-y-5">
        <SignInWithService service="Apple" onPress={() => console.log('login Apple')} />
        <SignInWithService service="Google" onPress={() => console.log('login Google')} />
        <SignInWithService service="Facebook" onPress={() => console.log('login Facebook')} />
        <SignInWithService service="X" onPress={() => console.log('login X')} />
      </View>
      <View className="gap-y-6">
        <View className="w-full flex flex-row gap-4 items-center justify-center">
          <TouchableOpacity onPress={handleNavigateSignup} className="bg-primary w-full h-16 flex justify-center items-center rounded-full">
            <Text className="font-Urbanist-Bold text-white font-medium text-lg text-center">
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
        <View className="w-full flex flex-row gap-4 items-center justify-center">
          <TouchableOpacity onPress={handleNavigateLogin} className="bg-secondary-medium w-full h-16 flex justify-center items-center rounded-full">
            <Text className="font-Urbanist-Bold text-white font-medium text-lg text-center">
              Log in
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text className="font-Urbanist-Regular text-primary-gray"> Privacy Policy . Terms of Service </Text>
    </View>
  );
};

export default Access