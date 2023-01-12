//console.log('index.js');
import {mainView} from './modules/views/main_view.js';
import {pagesHandler} from './factory/handler.js';
import {admin_panel} from './factory/site_specifics.js';
await admin_panel();
(async function(){
	
	await mainView();

	await pagesHandler();	
	
	
	
})();