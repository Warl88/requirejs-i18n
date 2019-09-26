require({
	i18n: {
		path: '../i18n/'
	},
	paths: {
		i18n: 'lib/i18n',
		text: 'lib/text'
	}
}, ['i18n!en'], function (i18n) {
	document.body.innerHTML += i18n.version;
});
