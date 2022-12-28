/** @description: index.js */
//import * as FT from './modules/functions.js';
import {bodyView} from './modules/views/body_view.js';
import {headerView} from './modules/views/header_view.js';
import {mainView} from './modules/views/main_view.js';
import {footerView} from './modules/views/footer_view.js';
import {pagesHandler} from './modules/handler.js';

(async function(){
	await bodyView();
	await headerView();
	await mainView();
	await footerView();
	
	await pagesHandler();
})();//mainView