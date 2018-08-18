# TypeScript React Template
By Dustin Watkins

## About 
The goal of this repo is to have a seamless setup of `React` and `TypeScript`.
The repo uses `Webpack` and `Bable`. The front-end is in `React` and
`TypeScript`. The back-end is a `Node.js` server using `Express`.

## Getting Started
1. Clone this repository
2. `cd` into the cloned repository
3. `cd Client` to enter the `Client` directory
4. Run `npm install` and wait for everything to be downloaded
5. `cd ../Server` to enter the `Server` directory
6. Run `npm install` and wait for everything to be downloaded

## Running the Client
1. Enter `Client` directory
2. Run `npm start`
* This starts your Client on localhost:8081
* If you would like to change the port
** Open `package.json`
** Under `scripts` you will see `"start": "webpack-dev-server --mode production --port 8081",` 
** Change 8081 to your desired port

## Running the Server
1. Enter `Server` directory
2. Run `npm start`
* This starts your `Node` server on localhost:8082

If you would like to change the port:
* Go to `src` directory 
* Open `ServerCommunicator.ts`
* Change the `port` field to your desired port



