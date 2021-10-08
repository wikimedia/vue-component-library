const path = require( 'path' );
const componentTemplate = require( './docs/utils/templates/component' );

/** @type import("vue-docgen-cli").DocgenCLIConfig */
module.exports = {
	// TODO: update once codex repo exists
	docsRepo: "wikimedia/vue-component-library",
	docsBranch: "main",
	// FIXME:
	docsFolder: "docs/docs",
	componentsRoot: "./../vue-components/src/components",
	components: "*/[A-Z]*.vue",
	outDir: "./docs/components",
	getDestFile: ( componentPath, config ) => {
		return path
			.join( config.outDir, componentPath )
			.replace( /\/\w+\.vue$/, ".md" );
	},
	templates: {
		component: componentTemplate
	},
	// TODO: remove this link altogether
	editLinkLabel: ''
};
