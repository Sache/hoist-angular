# Software versions

## VS Code
code -v
1.40.1

## NodeJS
node -v
v14.5.0

npm -v
6.14.5

## Git for windows
git --version
git version 2.23.0.windows.1

## Latest Chrome 

# Install
npm i -g @angular/cli 
C:\Users\<USER>\AppData\Roaming\npm\ng -> C:\Users\<USER>\AppData\Roaming\npm\node_modules\@angular\cli\bin\ng

# Run
ng --version
ng.cmd --version
Angular CLI: 10.1.0

# New project
cd ..
ng new hoist-angular
ng.cmd new hoist-angular

? Would you like to add Angular routing? Yes
? Which stylesheet format would you like to use? SCSS   [ https://sass-lang.com/documentation/syntax#scss ]

# Start project
cd hoist-angular

ng serve 
ng s -o

npm run start
npm start

# VS Code extenstions
https://marketplace.visualstudio.com/items?itemName=Angular.ng-template
https://marketplace.visualstudio.com/items?itemName=johnpapa.Angular2

# Chrome Extensions
https://chrome.google.com/webstore/detail/augury/elgalmkoelokbchhkhacckoklkejnhcd

# Generators
ng g m playlists -m app --routing true

ng g c playlists/containers/playlist-view

ng g c playlists/components/playlist-list
ng g c playlists/components/playlist-list-item
ng g c playlists/components/playlist-details
ng g c playlists/components/playlist-form

ng g m shared -m app
ng g c shared/card --export

# Bootstrap
 npm install bootstrap


