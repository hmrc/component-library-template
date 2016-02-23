# component-library-template

Template files for HMRC's component library

## Installing

```
$ npm install --save-dev hmrc/component-library-template
```

## Developing Locally

To see your changes to `hmrc-component-library-template` locally you'll need to link the package with npm:

```
$ git clone https://github.com/hmrc/component-library-template
$ cd /path/to/component-library-template
$ npm link
$ cd /path/to/assets-frontend
$ npm link hmrc-component-library-template
```

Then every time you make an update to the template, just re-link and start the build again:

```
# Inside assets-frontend
$ npm link hmrc-component-library-template
```

# Contributing

1. Clone this repo
2. Create a branch: `git checkout -b your-feature`
3. Make some changes
4. Test your changes by [running your local version](#developing-locally)
5. Push your branch and open a Pull Request

# License

This code is open source software licensed under the Apache 2.0 License.