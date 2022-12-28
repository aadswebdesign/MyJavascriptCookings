/** @description: navigation_view.js */
import * as FT from './../functions.js';
async function navigationView(){
	await FT.createElemHelper('nav', 'main-menu relative', null, {role: 'navigation'},null,false,'header');
	await FT.createElemHelper('div', 'display-none active', 'menu_item0', null,null,false, '.main-menu');
	await FT.createElemHelper('div', 'block menu-item relative', 'menu_item1', null,'Home',false, '.main-menu');
	await FT.createElemHelper('div', 'block menu-item relative', 'menu_item2', null,'Blog',false, '.main-menu');
	await FT.createElemHelper('div', 'block menu-item relative', 'menu_item3', null,'About',false, '.main-menu');
	await FT.createElemHelper('div', 'block menu-item relative', 'menu_item4', null,'Learning',false, '.main-menu');
}
export {navigationView};