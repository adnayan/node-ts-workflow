module.exports = {
	'src/**/*.ts': ['eslint --fix', 'prettier --write', 'git add'],
	'src/**/*.js': ['eslint --fix', 'prettier --write', 'git add'],
	'src/**/*.json': ['eslint --fix', 'prettier --write', 'git add'],
};
