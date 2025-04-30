import stylistic from '@stylistic/eslint-plugin-js';


export default [
	{
		plugins : {
			'@stylistic' : stylistic,
		},
		files : [ '**/*.js' ],
		rules : {
			'@stylistic/brace-style' : "error",
			'@stylistic/space-before-blocks' : [ 'error', 'never' ]
		},
	},
];
