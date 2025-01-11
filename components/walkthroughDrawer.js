import React, { useEffect, useState } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, PanResponder } from 'react-native';

export default function WalkthroughDrawer({ walkthroughStep, setWalkthroughStep, navigation }) {

	const [drawerTitle, setDrawerTitle] = useState("");
	const [drawerText, setDrawerText] = useState("");

	useEffect(() => {
		switch (walkthroughStep) {
			case 0:
				setDrawerTitle("Healthier - Your healthy Journey Starts Here");
				setDrawerText("Get ready to embark on a transformative yoga journey with Asana. Discover a wide range of yogas, tailored to your goals.");
				break;
			case 1:
				setDrawerTitle("Tailored Exercise Plan for Your Needs");
				setDrawerText("Healthier personalizes yogas just for you. Whether you're a beginner or a yoga enthusiast, our app adapts to your needs.");
				break;
			case 2:
				setDrawerTitle("Stay Informed About Your Yoga Progress");
				setDrawerText("Stay motivated and track your progress effortlessly. Start your healthy journey today and achieve the results you've always wanted.");
				break;
			default:
				setDrawerTitle("Healthier - Your healthy Journey Starts Here");
				setDrawerText("Get ready to embark on a transformative yoga journey with Asana. Discover a wide range of yogas, tailored to your goals.");
		}
	}, [walkthroughStep])

	const handlePressNext = () => {
		if (walkthroughStep <= 1) {
			setWalkthroughStep(walkthroughStep + 1);
		}
	}

	const handlePressSkip = () => {
		setWalkthroughStep(2);
	}
	
	const handlePressPrev = () => {
		if (walkthroughStep > 0) {
			setWalkthroughStep(walkthroughStep - 1);
		}
	}

	const handleNavigate = () => {
		navigation.navigate("Access");
	}

	const panResponder = PanResponder.create({
		onStartShouldSetPanResponder: () => true,
		onMoveShouldSetPanResponder: () => true,
		onPanResponderRelease: (_, gestureState) => {
		  if (gestureState.dx > 50) {
			// Swipe right
			handlePressPrev();
		  } else if (gestureState.dx < -50) {
			// Swipe left
			handlePressNext();
		  }
		},
	  });

	return (
		<View className="absolute bottom-0 w-full h-96 bg-secondary rounded-t-[10px]" {...panResponder.panHandlers}>
			<View className="">
				<View className='h-2/3'>
					<Text className='text-4xl text-white text-center pt-8 px-8'>
						{drawerTitle}
					</Text>
					<Text className='text-lg text-gray-600 text-center pt-3 px-8'>
						{drawerText}
					</Text>
					<View className="w-full py-4 flex flex-row gap-3 justify-center items-center">
						{/* Step 0 */}
						<View
							className={`h-3 ${walkthroughStep === 0 ? "bg-primary w-10" : "bg-secondary-medium w-3"
								} rounded-full`}
						/>
						{/* Step 1 */}
						<View
							className={`h-3 ${walkthroughStep === 1 ? "bg-primary w-10" : "bg-secondary-medium w-3 "
								} rounded-full`}
						/>
						{/* Step 2 */}
						<View
							className={`h-3 ${walkthroughStep === 2 ? "bg-primary w-10" : "bg-secondary-medium w-3 "
								} rounded-full`}
						/>
					</View>
				</View>
				<View className="w-full h-1/3 flex justify-center items-center border-t-2 border-secondary-medium">
				{walkthroughStep <= 1 ?
					<View className="w-full flex flex-row h-32 gap-4 items-center justify-center">
						<TouchableOpacity
							className="bg-secondary-medium w-48 h-1/2 flex justify-center items-center rounded-full"
							onPress={handlePressSkip}
						>
							<Text className="text-white font-medium text-lg text-center">Passer</Text>
						</TouchableOpacity>
						<TouchableOpacity
							className="bg-primary w-48 h-1/2 flex justify-center items-center rounded-full"
							onPress={handlePressNext}
						>
							<Text className="text-white font-medium text-lg text-center">Suivant</Text>
						</TouchableOpacity>
					</View>
					: 
					<View className="w-full flex flex-row h-32 px-6 gap-4 items-center justify-center">
						<TouchableOpacity
							className="bg-primary w-full h-1/2 flex justify-center items-center rounded-full"
							onPress={handleNavigate}
						>
							<Text className="text-white font-medium text-lg text-center">C'est parti !</Text>
						</TouchableOpacity>
					</View>	
					}
				</View>
			</View>
		</View>
	);
}
