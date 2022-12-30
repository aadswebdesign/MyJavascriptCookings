/** @description: handler.js */
import * as FT from './functions.js';
import{templateOne} from './views/templates/template_1.js';
import{templateTwo} from './views/templates/template_2.js';
import{templateThree} from './views/templates/template_3.js';
import{templateFour} from './views/templates/template_4.js';
import{landingTemplate} from './views/templates/landing_template.js';
//this as it is within demo_1
async function pagesHandler(){
	const wrap = await FT.elQuery('.wrap.container');
	const page = await FT.elQuery('.page');
	const hashes = new Map([
		['','menu_item0'],
		['#home','menu_item1'],
		['#blog','menu_item2'],
		['#about','menu_item3'],
		['#learning','menu_item4']
	]);
	const data = new Map([
		['menu_item1',{url: "#home",content: await templateOne()}],
		['menu_item2',{url: "#blog",content: await templateTwo()}],
		['menu_item3',{url: "#about",content: await templateThree()}],
		['menu_item4',{url: "#learning",content: await templateFour()}]
	]);

	console.log({wrap});
	console.log({page});
	//console.table(hashes);
	//console.table(data);
	const update = async (pageId) => {
		const currentTab = await FT.elQuery(".active", null, wrap);
		if(currentTab){
			console.log({currentTab});
			console.time(currentTab);
			console.timeLog(currentTab);
			console.timeEnd(currentTab);

			if (currentTab.id != pageId) currentTab.classList.remove("active");
			const selectedTab = await FT.getIdHelper(pageId);
			selectedTab.classList.add("active");
		}
		const entry = data.get(pageId);
		if (entry) {
			// update the URL
        	history.pushState(null, "", entry.url);
			await FT.sanitizeHTMLHelper(page, entry.content);
			await FT.additionals();
		}
	};
	if(wrap){
		wrap.addEventListener('click', function(event){
			if (!event.target.id)return;
			update(event.target.id);
		});	
	}

	const pageId = hashes.get(window.location.hash);
	if (pageId) await update(pageId);
	await FT.additionals();
}
export{pagesHandler};