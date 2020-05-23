rsync -a ./build/ ../ymizushi.github.io/
cd ../ymizushi.github.io/
git add .
git commit -m "update from ymizushi-top"
git push origin master

