# component-library-template

Template files for HMRC's component library

- [Installing](#installing)
- [Developing Locally](#requirements)
- [Adding Custom comment tags](#adding-custom-comment-tags)
- [Adding Custom Handlebars Block Helpers](#adding-custom-handlebars-block-helpers)
- [Partials](#partials)
- [Contributing](#contributing)
- [License](#license)


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

## Adding Custom Comment Tags

If you wish to pass custom data from your `.sass` comments to the 
[component-library-template](https://github.com/hmrc/component-library-template) you can do so by adding a custom tag.
To add a custom tag add the tag name to the `custom` array in your kss `config.json`

e.g.

```javascript
  // config.json
  "custom": [
    "Example"
  ]
  
  // stylesheet.scss
  /*
  Component title
  
  Example: some data
  
  Styleguide: Component
  */
  
  // index.html
  {{example}}
```


## Adding Custom Handlebars Block Helpers

[Block helpers](http://handlebarsjs.com/block_helpers.html) make it possible to define custom functionality that is applied to what you wrap them with.

e.g.

```javascript
// helpers/customHelperFile.js
Handlebars.registerHelper('bold', function(options) {
  return new Handlebars.SafeString(
      '<div class="mybold">'
      + options.fn(this)
      + '</div>');
});

// index.html
{{#bold}}
  Some content that will be bold.
{{/bold}}
```

You can add custom helpers by adding a file to the [helpers](./helpers) directory. Read the [handlebars documentation](http://handlebarsjs.com/block_helpers.html) or follow an example found within this folder. 
Theses helpers are available to use in your templates.


## Contributing

1. Clone this repo
2. Create a branch: `git checkout -b your-feature`
3. Make some changes
4. Test your changes by [running your local version](#developing-locally)
5. Push your branch and open a Pull Request


## License

This code is open source software licensed under the Apache 2.0 License.
