/**
 * RequireJS i18n plugin
 * https://github.com/Warl88/requirejs-i18n
 *
 * Alternative to i18n plugin proposed on https://requirejs.org/docs/api.html#i18n
 *
 * This plugin is heavily inspired by requirejs plugins such as json and tpl,
 * as well as SAPUI5 way of loading i18n strings stored in JSON files.
 *
 * @author Evgenij 'Warl' Myasnikov
 * @license MIT
 * @version 0.0.1
 */
define(['text'], function(text){
	'use strict';
	var buildMap = {};
	return {
		version: '0.0.1',
		load : function (name, loader, onload, config) {
			if (buildMap[name]) {
				onload(buildMap[name]);
			} else {
				var path = (config.i18n && config.i18n.path) || '';
				text.load(path + name + '.json', loader, function (data) {
					buildMap[name] = JSON.parse(data);
					onload(buildMap[name]);
				}, config);
			}
		},
		normalize: function (name, normalize) {
			return normalize(name);
		},
		write: function (plugin, name, write) {
			var data = buildMap[name];
			write('define("' + plugin + '!' + name + '", function () { return ' + data + '; });\n');
		}
	};
});
