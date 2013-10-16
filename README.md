CoinJar API Starter Application in Node.js
==========================================

Introduction
------------
This is a simple application using the CoinJar API.
This application is meant to be used as a starting place for those
looking to Bitcoin solutions with the CoinJar merchant and user API.


Installation
------------
Download and install [Node.js](http://nodejs.org/download/)

Next install the Node Package Manager (NPM), which is used to download your application's library dependencies

    $ curl http://npmjs.org/install.sh | sh

Building the application
----------------------------
After you clone the project, cd into the working directory and use NPM to download dependencies and Grunt to build
the application:

    $ cd my/project/dir
    $ git clone git@github.com:jimlyndon/CoinJarExampleNodeJS.git
    $ cd CoinJarExampleNodeJS
    $ npm install

API Key
-------
Make sure you get an API key from CoinJar.io.  First create an account - best to use the sandbox environment where
you can send and receive fake bitcoins when starting out.  To do this 
[sign up](https://secure.sandbox.coinjar.io/users/sign_in) for a Coinjar Sandbox account.

In your CoinJar sandbox account you can create a "bitcoin address" and send test bitcoin to this address 
from a [Faucet](http://testnet.mojocoin.com/).  You can return to them some test bitcoin as well.  You can create
addresses under your account and send/receive bitcoin, this way you have some test transactional data to work with.

Finally you need to turn on your user API access by going to account settings -> API access -> Enable API
This will ask you for your credentials and display an API key.

If you're building a merchant application you will also need to 
[retrieve your merchant id and key](https://checkout.sandbox.coinjar.io/merchant/credentials) from your Sandbox account
or from the [live/production Coinjar website](https://checkout.coinjar.io/merchant/credentials)

Currently this application by default uses the authentication and merchant keys provided for example by the 
(CoinJar NPM)(https://npmjs.org/package/coinjar) library's test suite.

Finally, use any or all the API keys/tokens when initializing the CoinJar NPM client, 
in the file CoinJarExampleNodeJS/routes/index.js:

    var coinjar = require('coinjar')
      , cj = new coinjar({
          auth_token: 'YOUR_USER_TOKEN',
          merchant_uuid: YOUR_MERCHANT_UUID, 
          merchant_secret: YOUR_MERCHANT_SECRET,
          sandbox: true
        })

The CoinJar NPM library also lets you use the following environment variables in lieu of declaring them in the index.js file:

    $ export COINJAR_AUTH_TOKEN="YOUR_USER_TOKEN"
    $ export COINJAR_MERCH_UUID="YOUR_MERCHANT_UUID"
    $ export COINJAR_MERCH_SECRET="YOUR_MERCHANT_SECRET"


Running the web application
---------------------------
Now that your application is built and the API credentials have been set, you can run the application with:

    $ node app.js
    
You should get the output: `Express server listening on port 3000`. 
And finally open a browser at http://localhost:3000/


Debugging the web application
---------------------------
If you wish to debug the application, you should install node inspector. Open a new terminal window/tab and run:
    
    $ npm install -g node-inspector

Next, run node-inspector:

    $ node-inspector &
    
You should get the output:

    Visit http://127.0.0.1:8080/debug?port=5858 to start debugging.

Finally, in your web application's root directory execute Node with the debug flag

    $ node --debug app.js 

You should get the output:

    debugger listening on port 5858
    Express server listening on port 3000

You can open Chrome browser at `http://127.0.0.1:8080/debug?port=5858` to use it's development 
tools to debug your application. Debugging will commence when you refresh the web app at
http://localhost:3000/


Direct any issues/problems/questions/complaints @jimlyndon  :)
