# component-library-template

Template files for HMRC's component library

- [Installing](#installing)
- [Developing Locally](#requirements)
- [Contributing](#contributing)
- [License](#license)

<a name="installing">
## Installing

```
$ npm install --save-dev hmrc/component-library-template
```

<a name="developing-locally">
## Developing Locally

To see your changes to `hmrc-component-library-template` locally you'll need to link the package with npm:

```
$ git clone https://github.com/hmrc/component-library-template
$ cd /path/to/component-library-template
$ npm link
$ cd /path/to/assets-frontend
$ rm -rf node_modules/hmrc-component-library-template
$ npm link hmrc-component-library-template
```

### Manually update
Then every time you make an update to the template, just re-link and start the build again:

```
# Inside assets-frontend
$ npm link hmrc-component-library-template
```

### Update with a watch
Inside of assets-frontend there is a task to add a watch using [nodemon](https://github.com/remy/nodemon). 
This will `npm link hmrc-component-library-template` and build the Component Library. 
You need to pass in the location of the folder where your local checkout of the [hmrc-component-library-template](https://github.com/hmrc/component-library-template/)
can be found, relative to the assets-frontend's `package.json`

```
$ npm run comp-lib:watch -- -w ./path/to/hmrc/component-library-template
```
**e.g**:
```
$ npm run comp-lib:watch -- -w ./../component-library-template
```

<a name="contributing">
## Contributing

1. Clone this repo
2. Create a branch: `git checkout -b your-feature`
3. Make some changes
4. Test your changes by [running your local version](#developing-locally)
5. Push your branch and open a Pull Request

<a name="license">
## License

This code is open source software licensed under the Apache 2.0 License.
