test the application. 
node .

make the application global 
npm install -g .

Now you can run the application from everywhere by just calling 

> hello

all the applications under bin will be executed 
"bin": {
    "hello": "./bin/index.js"
  }

to uninstall this 
npm uninstall -g hello-cli

Tip: You can list all globally installed Node.js modules using npm ls -g --depth=0.
npm ls -g --depth=0
