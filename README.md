# requirejs-i18n
AMD loader for i18n strings stored in JSON files.

Alternative to i18n plugin proposed on [requirejs.org](https://requirejs.org/docs/api.html#i18n)

This plugin is heavily inspired by requirejs plugins such as json and tpl,
as well as SAPUI5 way of loading i18n strings stored in JSON files.

## Installation
This plugin depends solely on [requirejs-text](http://requirejs.org/docs/download.html#text).

If you place your libraries in ``js/lib`` and JSON files in ``i18n`` folder so your configuration may look like:

```
require.config({
	i18n: {
		path: '../i18n/'
	},
	paths: {
		i18n: 'lib/i18n',
		text: 'lib/text'
	}
});
```

## Usage

Specify the plugin using ``i18n!`` followed by the file name:

```
require(['i18n!en'], function (i18n) {
	console.log(i18n);
});
```
