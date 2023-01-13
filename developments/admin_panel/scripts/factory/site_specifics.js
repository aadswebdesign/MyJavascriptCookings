/** site_specifics.js */
import * as FT from './functions.js';
import * as EL from './svgManager/svgElements.js';
import * as SI_A from './svgManager/icons/svgIcons_A.js';
import * as SI_B from './svgManager/icons/svgIcons_B.js';
import * as SI_C from './svgManager/icons/svgIcons_C.js';
import * as SI_D from './svgManager/icons/svgIcons_D.js';
import * as SI_E from './svgManager/icons/svgIcons_E.js';
import * as SI_F from './svgManager/icons/svgIcons_F.js';
import * as SI_G from './svgManager/icons/svgIcons_G.js';
import * as SI_H from './svgManager/icons/svgIcons_H.js';
import * as SI_I from './svgManager/icons/svgIcons_I.js';

export async function admin_panel_controls(){
	const admin_panel = await FT.elQuery('.admin-panel');
	const admin_panel_height = admin_panel.offsetHeight;
	const admin_controlls = await FT.elQuery('.controlls', false, admin_panel);
	admin_controlls.style.height = `${admin_panel_height - 2}px`;
	await SI_I.Id('.test-block');

}
export async function admin_panel(){
	const details_top = await FT.elQuery('.menu-balk-top details');
	const details_top_summary = await FT.elQuery('summary.left-to-right', false, details_top);
	
	const dts_top_class_list = details_top_summary.classList;
	if(dts_top_class_list.contains('caret-right')){
		SI_C.CaretRight('.caret-right','Open menu balk top.');
	}else{
		details_top_summary.innerHTML = '';
	}

	details_top.addEventListener('toggle', function(event){
		if(details_top.open){
			dts_top_class_list.add('caret-left');
			dts_top_class_list.remove('caret-right');
			console.log('details_top open: ',details_top);
			console.log('dts_top_class_list added: ',dts_top_class_list);
		}else{
			dts_top_class_list.remove('caret-left');
			dts_top_class_list.add('caret-right');
			console.log('details_top close: ',details_top);
			console.log('dts_top_class_list removed: ',dts_top_class_list);
		}
		if(dts_top_class_list.contains('caret-left')){
			SI_C.CaretLeft('.caret-left','Close menu balk top.');
		}else{
			details_top_summary.innerHTML = '';
		}
		if(dts_top_class_list.contains('caret-right')){
			SI_C.CaretRight('.caret-right','Open menu balk top.');
		}else{
			details_top_summary.innerHTML = '';
		}	
		
	});
	const details_left = await FT.elQuery('.menu-balk-left details');
	const details_left_summary = await FT.elQuery('summary.top-to-bottom', false, details_left);
	const dts_left_class_list = details_left_summary.classList;
	if(dts_left_class_list.contains('caret-down')){
		SI_C.CaretDown('.caret-down','Open menu balk left.');
	}else{
		details_left_summary.innerHTML = '';
	}	
	
	details_left.addEventListener('toggle', function(event){
		if(details_left.open){
			dts_left_class_list.add('caret-up');
			dts_left_class_list.remove('caret-down');
			console.log('details_left open: ',details_left);
			console.log('dts_left_class_list added: ',dts_left_class_list);
		}else{
			dts_left_class_list.remove('caret-up');
			dts_left_class_list.add('caret-down');
			console.log('details_left close: ',details_left);
			console.log('dts_left_class_list removed: ',dts_left_class_list);
		}
		if(dts_left_class_list.contains('caret-up')){
			SI_C.CaretUp('.caret-up','Close menu balk left.');
		}else{
			details_left_summary.innerHTML = '';
		}
		if(dts_left_class_list.contains('caret-down')){
			SI_C.CaretDown('.caret-down','Open menu balk left.');
		}else{
			details_left_summary.innerHTML = '';
		}	
	});
	await console.log('details_top: ',details_top);
	await console.log('details_left: ',details_left);
	await console.log('details_left_summary: ',details_left_summary);
	await console.log('dts_left_class_list: ',dts_left_class_list);

}