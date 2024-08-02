module.exports = {
	testEnvironment: 'jest-environment-jsdom',
	transform: {
		'^.+\\.jsx?$': 'babel-jest',
	},
	setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
	moduleNameMapper: {
		'\\.(css|scss)$': 'identity-obj-proxy',
	},
};
