# YukiChat - Chat App

Welcome to YukiChat, a real-time chat application that allows you to connect with your friends and family in a private, secure environment.

## Getting Started

To get started with YukiChat, you will need to have Node.js and npm installed on your machine. Once you have those dependencies installed, you can clone this repository and install the required dependencies by running the following commands:

````
git clone https://github.com/ELATTAR-Ayoub/React-Firebase-YukiChat.git
cd React-Firebase-YukiChat
npm install
````


Next, you will need to create a Firebase project and enable the Google authentication provider. You can do this by following the instructions in the [Firebase documentation](https://firebase.google.com/docs/auth/web/google-signin).

Once you have set up your Firebase project, you will need to create a `.env` file in the root directory of the project and add your Firebase API keys. The `.env` file should look like this:

````
REACT_APP_FIREBASE_API_KEY=YOUR_API_KEY
REACT_APP_FIREBASE_AUTH_DOMAIN=YOUR_AUTH_DOMAIN
REACT_APP_FIREBASE_DATABASE_URL=YOUR_DATABASE_URL
REACT_APP_FIREBASE_PROJECT_ID=YOUR_PROJECT_ID
REACT_APP_FIREBASE_STORAGE_BUCKET=YOUR_STORAGE_BUCKET
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=YOUR_MESSAGING_SENDER_ID
````

Once you have set up your Firebase project and added your API keys to the .env file, you can start the development server by running the following command:

````
npm start
````

This will start the server and run the app in development mode. You can then access the app by visiting http://localhost:3000 in your web browser.


## Features

Music Search uses the following dependencies:

- Real-time chat with friends and family.
- Google authentication for secure login.
- Dark mode/light mode toggle.

## Dependencies

This App uses the following dependencies:

- [React.js](https://reactjs.org/) - a JavaScript library for building user interfaces
- [Firebase](https://firebase.google.com/) - a platform for building mobile and web applications
- [TailwindCSS](https://tailwindcss.com/) - a utility-first CSS framework


## Live Demo

You can see a live demo of YukiChat at [Live Demo](https://jovial-goodall-dc9f4f.netlify.app/).

## Contributing

If you would like to contribute to this App, you can do so by creating a fork of this repository and submitting a pull request. Please be sure to follow the existing coding conventions and include tests for any new features or changes.
If you have any problem with that contact me. The app is still under developing.


## License

This App is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
