import * as FT from './../functions.js';
import {navigationView} from './navigation_view.js';
async function headerView(){
	// elem - class - id - attributes - content - literal(true/false) - parent replace
	await FT.createElemHelper('header', 'relative', null,null, null,false,'.wrap.container');
	await FT.createElemHelper('h2', 'relative', null, null,'Demo 1.',false,'header');
	await navigationView();
}
export{headerView};