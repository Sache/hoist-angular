# Running project
git clone https://bitbucket.org/ev45ive/hoist-angular.git project-directory
cd project-directory
npm install
npm start

# Fetching updates
git stash -u
git pull -f

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

# Pipe
ng g p shared/yesno --export 


# Interfaces / Models
ng g m core -m app
ng g i core/models/playlist


# Music Search
<!-- UX.png -->

<!-- Create module with --routing -->
<!-- Create container add to Routing '/search' -->
<!-- Some mock data - {id, name, imageUrl}[] -->

<!-- Create form comp -->
<!-- https://getbootstrap.com/docs/4.5/components/input-group/#button-addons -->

<!-- Create results comp -->
<!-- https://getbootstrap.com/docs/4.5/components/card/#card-groups -->


# Music search feature

ng g m music-search --routing -m app

ng g c music-search/containers/album-search

ng g c music-search/components/album-card
ng g c music-search/components/search-form
ng g c music-search/components/search-results

# Interceptors

$ ng g interceptor core/security/auth
CREATE src/app/core/security/auth.interceptor.ts (409 bytes)