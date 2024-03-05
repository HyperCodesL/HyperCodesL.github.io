function vibrateTwice() {
    // Check if the vibration API is supported
    if ('vibrate' in navigator) {
        // Vibrate for 200 milliseconds, pause for 100 milliseconds, then vibrate for 200 milliseconds again
        navigator.vibrate([200, 100, 200]);
    } else {
        console.log('Vibration API not supported');
    }
}

// Call the function to vibrate the device twice
vibrateTwice();
