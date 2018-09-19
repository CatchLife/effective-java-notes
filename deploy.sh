git add .
git commit -m 'update'
git push origin master

vuepress build .

cd .vuepress/dist

git init
git add -A
git commit -m 'update'
git push -f git@gitee.com:catchlife/effective-java-notes.git master:gh-pages