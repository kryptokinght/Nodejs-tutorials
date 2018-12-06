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
* `--silent` : Use this falg to remove errors and warnings from output
* `npm outdated --global true` : Show global packages that are outdated
* `npm update --global true` : Update global packages that are outdated
* `npm uninstall <package_name>` : Only removes it from the node_modules folders, entry remains in package.json
* `npm uninstall <package_name> --save` : Uninstall the package and Remove it from the package.json for your project
* `npm un <package_name> -g` : Uninstall a global package(un is shot for uninstall)
* `npm <package_name>@1.8.0` : Install a specific version of the package
* `npm underscore@1.8.0 --save --save-exact` : Install a specific version of the package and do not add the ^ in package.json, which means later the package will not be updated, only exact version required.
* `^` : latest (minor or patch) version of that major release. Eg: `^1.3.0` gives `1.8.5` if 1.8.5 is the latest in 1.x.x releases
* `~` : latest patch version of that minor release. Eg: `~1.3.0` gives `1.3.9` if 1.3.9 is latest in 1.3.x releases
* 