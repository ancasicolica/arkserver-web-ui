# arkserver-web-ui
Web interface for an Ubuntu operated ark server. The script starts the arkserver (no matter if it is already running) and offers an easy web interface for the most common tasks.

There is currently absolutely no security integrated, do not operate this script on a server directly exposed to the internet. I'll add additional security if someone requires it (it's not that hard to implement, but I don't need it right now for my purposes).

## Installation

* Install the arkserver exactly as described here: https://gameservermanagers.com/lgsm/arkserver/. Make sure that you can start arkserver using the command __arkserver start__ before you continue.
* Install node.js, version 4.x, found here: https://nodejs.org/en/
* Install pm2, a process manager for node: __npm install -g pm2__
* Clone this repository into the home directory of your user arkserver (which was created in the first step)
* Install the dependencies: enter the arkserver-web-ui directory and run __npm install__
* Start the web-ui: __pm2 start processes.json__ (which is in the project directory, check paths!). You should reach the UI over the URL http://localhost:3000.
* Create startup script for the user arkserver with pm2: __pm2 startup ubuntu -u arkserver__
* Save the running instances for the next reboot: __pm2 save__

Now you should be able to access the web-ui after reboot.

## Usage

Open the web-ui with a webbrowser, by default it is running on port 3000. Example: http://192.168.1.33:3000

When opening the page, the server status is queried and displayed. Using the buttons you can start the following actions:

* Start the server
* Restart the server
* Stop the server
* Get information about the server
* Update the server

Have fun!

## Licence
The MIT License (MIT)
Copyright (c) 2016 Christian Kuster

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
