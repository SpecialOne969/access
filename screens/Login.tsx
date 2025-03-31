import React, { useEffect } from 'react';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import { useNavigation } from '@react-navigation/native';
import { Platform, View, TextInput, Text, type ViewStyle, useWindowDimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "~/components/nativewindui/Button";
import { useColorScheme } from "~/lib/useColorScheme";

const ROOT_STYLE: ViewStyle = { flex: 1, flexDirection: "row" };

export default function WelcomeConsentScreen() {
  const { colors } = useColorScheme();
  const navigation = useNavigation();
  const { width } = useWindowDimensions(); // Get the current screen width

  // Configure Google Sign-In
  useEffect(() => {
    GoogleSignin.configure({
      webClientId: 'YOUR_WEB_CLIENT_ID.apps.googleusercontent.com', // Replace with your Web Client ID
    });
  }, []); // Empty array ensures this runs only once when the component mounts

  const handleSignInPress = () => {
    navigation.navigate('HomeScreen');
  };

  const handleGoogleSignInPress = async () => {
    try {
      // Start Google Sign-In
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      
      // If successful, navigate to the next screen
      console.log('Google user info:', userInfo);
      navigation.navigate('active_codes'); // Or the screen you want to navigate to
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('User cancelled the sign-in process');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('Sign-in is already in progress');
      } else {
        console.log('Google sign-in error:', error);
      }
    }
  };

  const isLargeScreen = width > 768; // Define the breakpoint for large screens (e.g., tablets or larger devices)

  return (
    <SafeAreaView style={ROOT_STYLE}>
      {/* Logo Section - Only visible on large screens */}
      {isLargeScreen && (
        <View style={{ width: "40%", justifyContent: "center", alignItems: "center", backgroundColor: "#113E55" }}>
          <Text style={{ fontSize: 48, fontWeight: "bold", color: "#113E55" }}>
            Logo
          </Text>
        </View>
      )}

      {/* Login Section */}
      <View style={{ width: isLargeScreen ? "60%" : "100%", paddingHorizontal: 16, paddingVertical: 24 }}>
        {/* Header Section */}
        <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 40, paddingBottom: 24 }}>
          <Text style={{
            color: "#113E55", 
            fontFamily: "Ubuntu Sans, Inter", 
            fontSize: 40, 
            fontWeight: "400",
          }} className="text-center text-3xl font-light tracking-wide">
            Welcome !
          </Text>

          <Text style={{
            color: "black", 
            fontWeight: "500", 
            fontFamily: "Inter", 
            fontSize: 12, 
            fontWeight: 500,
          }} className="text-center text-primary text-lg mt-1">
            Sign in to send invites to your guest
          </Text>
        </View>

        {/* LOGIN FORM */}
        <View style={{ gap: 16 }}>
          <View>
            <Text className=" pb-1" style={{color:"#113E55"}}>Email Address</Text>
            <TextInput
              placeholder="Enter your email address..."
              keyboardType="email-address"
              style={{ backgroundColor: '#F7F9F9', borderWidth: 1, borderColor: '#D1D5DB', borderRadius: 8, paddingHorizontal: 16, paddingVertical: 12 }}
            />
          </View>

          <View>
            <Text className=" pb-1" style={{color:"#113E55"}}>Password</Text>
            <TextInput
              placeholder="Enter your password..."
              secureTextEntry
              style={{ backgroundColor: '#F7F9F9', borderWidth: 1, borderColor: '#D1D5DB', borderRadius: 8, paddingHorizontal: 16, paddingVertical: 12 }}
            />
          </View>

          {/* BUTTONS */}
          <View style={{ gap: 20, marginTop: 16 }}>
            {/* Sign In Button */}
            <Button
              size={Platform.select({ ios: "lg", default: "lg" })}
              style={{ backgroundColor: "#113E55", height: 50, width: "90%", alignSelf: 'center' }}
              className="rounded-lg"
              onPress={handleSignInPress}
            >
              <Text className="text-white">Sign In</Text>
            </Button>

            {/* Continue with Google Button */}
            <Button
              variant="primary"
              size={Platform.select({ ios: "lg", default: "lg" })}
              style={{ backgroundColor: "#1B998B", height: 50, width: "90%", alignSelf: 'center' }}
              className="bg-green-800 rounded-lg flex-row items-center justify-center gap-2"
              onPress={handleGoogleSignInPress}
            >
              <Text className="text-white">Continue with Google</Text>
            </Button>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
