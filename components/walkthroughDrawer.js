import React, { useEffect, useState } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, PanResponder, Animated } from 'react-native';
import { WalkthroughDrawer as WalkthroughDrawerSVG } from './WalkthroughDrawer/WalkthroughDrawer';
import {Dimensions} from 'react-native';

export default function WalkthroughDrawer({ walkthroughStep, setWalkthroughStep, navigation }) {

	const [drawerTitle, setDrawerTitle] = useState("");
	const [drawerText, setDrawerText] = useState("");
	const animatedValue = new Animated.Value(walkthroughStep);

	const windowWidth = Dimensions.get('window').width;
	const windowHeight = Dimensions.get('window').height;

	useEffect(() => {
		Animated.timing(animatedValue, {
			toValue: walkthroughStep,
			duration: 500, // Durée de l'animation
			useNativeDriver: false,
		}).start();
	}, [walkthroughStep]);

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
		<View className="h-full w-full relative">
		<View className="absolute bottom-0 w-full h-full rounded-t-[10px] z-50 " {...panResponder.panHandlers}>
			<View className='h-full'> 
				<View className='h-3/4 flex flex-col items-center pt-24 justify-between'>
					<Text className='font-Urbanist-Bold text-4xl text-white text-center pt-8 px-8'>
						{drawerTitle}
					</Text>
					<Text className='font-Urbanist-Regular text-lg text-primary-gray text-center pt-3 px-8'>
						{drawerText}
					</Text>
					<View className="w-full py-4 flex flex-row gap-3 justify-center items-center">
						{[0, 1, 2].map((index) => {
							const width = animatedValue.interpolate({
								inputRange: [index - 1, index, index + 1],
								outputRange: [8, 32, 8], // Taille: petit pour inactif, large pour actif
								extrapolate: 'clamp',
							});

							const color = animatedValue.interpolate({
								inputRange: [index - 1, index, index + 1],
								outputRange: ['#A9A9A9', '#6C63FF', '#A9A9A9'], // Couleur active et inactive
								extrapolate: 'clamp',
							});

							return (
								<Animated.View
									key={index}
									style={{
										height: 8,
										borderRadius: 4,
										backgroundColor: color,
										width,
									}}
								/>
							);
						})}
					</View>
				</View>		
				<View className="w-full h-1/4 flex justify-center items-center border-t-2 border-secondary-medium">
					{walkthroughStep <= 1 ? (
						<View className="w-full flex flex-row h-32 gap-4 items-center justify-center">
							<TouchableOpacity
								className="bg-secondary-medium w-48 h-1/2 flex justify-center items-center rounded-full"
								onPress={handlePressSkip}
							>
								<Text className="font-Urbanist-Bold text-white font-medium text-lg text-center">Passer</Text>
							</TouchableOpacity>
							<TouchableOpacity
								className="bg-primary w-48 h-1/2 flex justify-center items-center rounded-full"
								onPress={handlePressNext}
							>
								<Text className="font-Urbanist-Bold text-white font-medium text-lg text-center">Suivant</Text>
							</TouchableOpacity>
						</View>
					) : (
						<View className="w-full flex flex-row h-32 px-6 gap-4 items-center justify-center">
							<TouchableOpacity
								className="bg-primary w-full h-1/2 flex justify-center items-center rounded-full"
								onPress={handleNavigate}
							>
								<Text className="font-Urbanist-Bold text-white font-medium text-lg text-center">C'est parti !</Text>
							</TouchableOpacity>
						</View>
					)}
				</View>
			</View>
		</View>
		<WalkthroughDrawerSVG width={windowWidth} height={windowHeight / 1.2}></WalkthroughDrawerSVG>
		</View>
	);
}
