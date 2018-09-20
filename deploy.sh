#!/usr/bin/env sh
cd /media/catch/document/effective-java-notes
git add .
git commit -m "update"
git push origin master
set -e
vuepress build .
cd .vuepress/dist
git init
git add -A
git commit -m "update"
git push -f git@github.com:CatchLife/effective-java-notes.git master:gh-pages