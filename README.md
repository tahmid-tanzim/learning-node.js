# Learning Node.js
Node is just JavaScript without browser. Its a JavaScript runtime built on Google [Chrome V8 JavaScript engine](https://developers.google.com/v8/).
### 1. Installing Node.js via [nvm (Node Version Manager)](https://github.com/creationix/nvm) on Ubuntu Linux.
##### 1.1. Installing NVM
```
sudo apt-get install git curl
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.29.0/install.sh | bash
```
##### 1.2. Append the NVM path in ~/.bashrc
```
export NVM_DIR="/home/<linux-user>/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"  # This loads nvm
```
##### 1.3. Load ~/.bashrc and Check if NVM successfully installed.
```
source ~/.bashrc
nvm
```
##### 1.4. Installing Node.js and Set default version
```
nvm install 0.10
nvm alias default 0.10
node --version
```
### 2. Exploring language additions to the V8 JavaScript engine
Objects like **window**, **location**, **document** is not available in Node like web browser's JS console. Whereas objects like **global**, **module**, **process** are available in Node. But **console** object is available in both Node and Google Chrome. 
### 3. Initializing Node.js projects to generate **package.json**
```
cd <project-root-path>
npm init
```
### 4. Finding an NPM [express](https://www.npmjs.com/package/express)
```
sudo npm install --save express
node index.js
```
### 5. Maintaining projects using NPM command
```
sudo npm install -g express@3.4.x
express <project-name>
cd <project-name>
```
* Install dependencies ~> `npm install`
* Run the app ~> `node app.js`
* Remove unused modules ~> `npm prune`
* Update dependencies ~> `npm update`
### 6. Writing unit tests with [Mocha](https://mochajs.org/), [Should](https://github.com/tj/should.js) and [SuperTest](https://github.com/visionmedia/supertest)
```
sudo npm install --save-dev mocha
sudo npm install --save-dev should
sudo npm install --save-dev supertest
```
##### 6.1. Installing Mocha as Global module
```
sudo npm install -g mocha
```