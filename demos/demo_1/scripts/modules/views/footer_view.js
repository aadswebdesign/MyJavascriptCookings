import * as FT from './../functions.js';
async function footerView(){
	// elem - class - id - attributes - content - literal(true/false) - parent replace
	await FT.createElemHelper('footer', 'sticky display-flex', null,null,null,false, '.wrap.container');
	await FT.createElemHelper('small','relative',null,{title: 'aad\'s webdesign'}, `awd<time><i> &#169; </i>2021</time>`, true, 'footer');
}
export{footerView};