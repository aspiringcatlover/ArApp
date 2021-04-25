"# ArApp" 


An simple AR web application hosted on nodejs and expressjs, using AR.js library.
Scans a preset marker for buttons to appear, and click the buttons to start playing videos.

Working on: android opera browser, windows 10, ipad safari

prerequisites: 
change ip address to server's ip address in ar.html, under the vid src property.

Need to self sign cert and key using OpenSSL to host https local server, as Ar.JS requires camera permission and is only possible on https.

```openssl req -x509 -sha256 -nodes -days 365 -newkey rsa:4096 -keyout private.key -out certificate.crt```

To start:
```
cd ArApp 
npm i package 
cd app 
node index.js 
```

Go to https:localhost:3000/ar.html on browser, replacing localhost with server ip address if viewing on phone

Glitch: https://shrub-futuristic-trunk.glitch.me/ar.html
