"# ArApp" 

An ar web application hosted on nodejs and expressjs, using AR.js library.
Scans a preset marker, and plays some user defined video. 

Tested: Working on computer with webcam. For phone, working on S20+ using opera browser, and not on chrome and firefox browser. Reason being AR.js is not able to ask user for selection of cameras to be used for AR, given that the S20+ has 6 cameras in total.

Configuration:  
put desired video in app/res/
change ip address of localhost in ar.html, under the vid src property
            

To run: Need to self sign cert and key to host https local server, as Ar.JS requires camera permission and is only possible on https.

Configuration: Put video to play

Execute: npm start

1. Go to https:localhost:3000/ar.html on browser, replacing localhost with server ip address if viewing on phone

2. select back camera 3

3. Scan the marker and the video will autoplay

issues:

Currently hardcoding localhost ip address into html for video src, as the src properties does not seem to accept "localhost" as argument


