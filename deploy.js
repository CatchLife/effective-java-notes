var shell = require('shelljs')

shell.exec('git add .');
shell.exec('git commit -m "update"');
shell.exec('git push origin master');

if (shell.exec('vuepress build .').code === 0) {
  shell.cd('.vuepress/dist');
  shell.exec('git init');
  shell.exec('git add -A');
  shell.exec('git commit -m "update"');
  shell.exec('git push -f git@github.com:CatchLife/effective-java-notes.git master:gh-pages');
  shell.echo('Success: deploy success !');
} else {
  shell.echo('Error: vuepress build error !');
}