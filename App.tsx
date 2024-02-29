// Import necessary libraries
import React, { useState } from 'react';
import {
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

// Define the App component
function App(): React.JSX.Element {
  // Declare a state variable to store the random background color
  const [randomBackground, setRandomBackground] = useState("#ffffff");

  // Define a function to generate a random color
  const generateColor = () => {
    // Define the possible hexadecimal characters
    const hexRange = "0123456789ABCDEF"
    // Initialize the color variable with the hash symbol
    let color = "#"
    // Loop through 6 times to generate a 6-digit hexadecimal color code
    for (let i = 0; i < 6; i++) {
      // Append a random hexadecimal character to the color variable
      color += hexRange[Math.floor(Math.random() * 16)]
    }
    // Update the random background color state with the generated color
    setRandomBackground(color)
  }

  // Return the JSX for the App component
  return (
    <>
      {/* Set the background color of the StatusBar to the current random background color */}
      <StatusBar backgroundColor={randomBackground} />
      {/* Create a View component with a container style and a background color of the current random background color */}
      <View style={[styles.container, { backgroundColor: randomBackground }]}>
        {/* Create a TouchableOpacity component with an onPress event listener that calls the generateColor function */}
        <TouchableOpacity onPress={generateColor}>
          {/* Create a View component with an action button style */}
          <View style={[styles.actionBtn]}>
            {/* Create a Text component with an action button text style that displays the text "Press me" */}
            <Text style={[styles.actionBtnTxt]}>Press me</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}

// Define the styles for the App component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  actionBtn: {
    borderRadius: 12,
    backgroundColor: "#192A56",
    paddingVertical: 10,
    paddingHorizontal: 40,
  },

  actionBtnTxt: {
    fontSize: 24,
    color: "#FFFFFF",
    fontWeight: '700',
  },

});

// Export the App component as the default export
export default App;