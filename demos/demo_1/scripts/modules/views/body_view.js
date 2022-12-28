import * as FT from './../functions.js';
async function bodyView(){
	//FT.description();
	// elem - class - id - attributes - content - template_literal - parent replace
	await FT.createElemHelper('div', 'wrap container relative', null,null, null,false,'body', '.wrap.container');
}export {bodyView};