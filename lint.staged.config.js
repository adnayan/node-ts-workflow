module.exports = {
	linters: {
		'**/*.+(js|ts|md|css|json)': ['eslint --fix', 'prettier --write', 'git add'],
	},
};
