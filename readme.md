## README

### Install

1 - Complete the package.json file with you informations

2 - execute `npm intall`

3 - Config jasmine as below

**"test:jasmine-init": "./node_modules/.bin/jasmine init"** to add and execute **ONCE** in script:
- Add and use the command , to initialize jasmine params. These params stands in the spec folder (creadted at command exec) with default values.
If you have these folders and the values you want to use for the testing report, You can discard this line.

- to help the folder and its dependencies are provided in the template. It use some params that suits me and I recommend. If you agree with remove the script and start coding. If not you can remome the spec folder (and subfolders) and execute the command above :).

4 - Add you required dependencies `npm i -S | -D <dependency,...>`
