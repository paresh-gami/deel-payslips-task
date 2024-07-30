# Project Setup Instructions

## Prerequisites

- **Node Version Manager (NVM):** Ensure you have NVM installed to manage your Node.js versions.

## Setup Node.js Version

To set the Node.js version for this project, use the following commands:

```
nvm install 18.17.0
nvm use 18.17.0
```

## Clone the Repository


```
git clone https://github.com/paresh-gami/deel-payslips-task
cd deel-payslips-task
```

## Install Dependencies

In the root of the project directory, run the following command to install the necessary dependencies:

```
npm install
```

## Start the Project
In Browser
To start the project in the browser, use the command:

```
ionic serve
```

## For Android
To run the project on an Android device, add the Android platform and build the project using the following commands:

```
npx cap add android
npm run build:android
```

## For iOS

To run the project on an iOS device, add the iOS platform and build the project using the following commands:

```
npx cap add ios
npm run build:ios
```