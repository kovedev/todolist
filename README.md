### 
Backend code in /src folder. 

Frontend code in /client folder. 

Follow instructions below.

```
$ npm install
$ npm run start
server runs in port 8080 and serves static files in public folder

(optional)
$ cd client
$ npm install
$ npm run start
client runs in port 3000 with proxy to 8080

(optional)
$ chmod +x ./client/postbuild.sh
$ npm run build
$ ./client/postbuild.sh
this builds frontcode and moves it to public folder
```