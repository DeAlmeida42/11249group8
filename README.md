# CFarer

Member1: Dylan DeAlmeida
Member2: Conner Gallimore
Member3: Grace Tholl

[Optional Login Credentials]

Email: random@gmail.com
password: hello12345!

Steps to Using CFarer:

Prerequisite Downloads: 
1. Make sure you have Node.js installed on your computer, as well as Expo Go on the iOS App store for your iOS phone (also make sure Expo Go is the latest version). 
2. To verify Node.js was installed, open up a command prompt and type npm, this will bring up the version of your installation as well as basic commands.

https://nodejs.org/en/download/ --- Downloading LTS version for your OS will suffice.

Downloading CFarer:

1. Clone the repository to your local machine (it must be a file directory where Node.js  is a reachable path from ---  i.e. , if you installed Node.js in your C:\ drive, then clone the repository into your C:\ drive).

Example:
C:\Users\<username>\Desktop git clone https://github.com/DeAlmeida42/11249group8.git

Note: This step is the exact same as unzipping the zip file uploaded onto Canvas for the Project Submission System Build. Just unzip the file into a directory just like cloning the repo, it is the same.

2. In a command terminal, navigate to the ~\11249group8\CFarer directory that was just cloned/unzipped and type the following command (you can ignore the warnings after successful installation):

npm install  expo-cli

3. Once the above command finishes, we now need to install ngrok so that we can establish a connection from your local computer to Expo Go via a tunnel. In the same directory as above, type into the terminal:

 npm install @expo/ngrok@4.1.0


4. Once the above command finishes, in the same directory, type into the terminal:

expo start --tunnel

A browser window should appear, and a connection will attempt to establish itself to the Expo server so the application can be used. After the tunnel has connected, a QR code will be displayed onto the browser window (as well as the command terminal). Scan the QR code with your mobile device camera and follow the link to open the application in Expo Go.

5. After Expo Go opens the application (it will take a few seconds to open), you will start at the Login Screen. Type in an email address and password, then press “Register”, and the application will navigate to the Home Page. (Note: write down the username and password you register with, as there currently is no “resetting password” feature). Alternatively, use the login information provided above, and press “Sign In.”

6. After signing in, you will be navigated to the Home Page, and can now use CFarer's available features (see below). To close the connection once finished, in the command line press Ctrl + C, or just simply close the application on the mobile device, the browser window, and the command terminal all together.

Features Currently Unavailable:

1. Attempting to take a picture will cause the application to crash.
2. User cannot reset their password.
3. Object Detection Model is not within the application, so attempting to use the camera to scan will not work.