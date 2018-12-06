# NPM

### Common Commands:
* `npm install -h` : Gives help info about the `install` command
* `npm help install` : Same as above, but with more details
* `npm help-search keyword` : Gives a list of all the comamnds related with the keyowrd, for example the commands  related to the keyword 'remove'. Try `npm help-search remove` .
* `npm set inti-author-name 'Minanshu Singh'` : Set it common for all package.json
* `npm set inti-license 'MIT '` : Set it common for all package.json
* `git config delete inti-author-name` : delete the value set by the above command
* `npm list --depth 1` : show the dependency tree only one level deep
* `npm list --global true --depth 0` : show the global dependency tree only zero level deep
* `npm list --depth 0 --parsable true` : gives output in parsable format
* `npm list --depth 0 --json true` : gives output in JSON format
* `npm list --depth 0 --long true` : gives details of each dependecy
* `npm list --depth 0 --dev true` : gives list of only dev dependecies
* `npm list --depth 0 --prod true` : gives list of only production dependecies