/** svgIcons_A.js */
import * as FT from './../functions.js';
import * as EL from './svgElements.js';
const iconParentPath = {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'};
const iconViewBox = {viewBox: '0 0 24 24'};
export const Accessible = async (parent = null, title='') => {
	const specifics = {
		'circle_1':{cx:'12',cy:'12',r:'9'},
		'circle_2':{cx:'12',cy:'7.5',r:'0.5'},
		'path_1':{d:'M10 16.5l2 -3l2 3m-2 -3v-2l3 -1m-6 0l3 1', stroke:'#000', stroke_width: '1px'}
	};
	let icon;
	if(null !== parent){
		icon = await [
			await EL.svg('svg-icon absolute', 'Accessible', {...iconViewBox},'','',parent),
			await EL.svgTitle(null, null,null,title,null,'svg#Accessible'),
			await EL.svgGroup('icon-group accessible', null,null,null,null,'svg#Accessible'),
			await EL.svgPath('base-path', null,{...iconParentPath},null,null,'g.icon-group.accessible'),
			await EL.svgCircle(null,null,{...specifics.circle_1},null,null,'g.icon-group.accessible'),
			await EL.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.accessible'),
			await EL.svgCircle(null,null,{...specifics.circle_2},null,null,'g.icon-group.accessible'),
		];
	}
	return icon;
};
export const AccessibilityCheck = async (parent = null, title='') => {
	const specifics = {
		'path_1':{d:'M12 2a2 2 0 0 1 2 2 2 2 0 0 1-2 2 2 2 0 0 1-2-2c0-1.1.9-2 2-2zm8 7h-5v12c0 .6-.4 1-1 1a1 1 0 0 1-1-1v-5c0-.6-.4-1-1-1a1 1 0 0 0-1 1v5c0 .6-.4 1-1 1a1 1 0 0 1-1-1V9H4a1 1 0 1 1 0-2h16c.6 0 1 .4 1 1s-.4 1-1 1z'}
	};
	let icon;
	if(null !== parent){
		icon = await [
			await EL.svg('svg-icon absolute', 'AccessibilityCheck', {...iconViewBox},'','',parent),
			await EL.svgTitle(null, null,null,title,null,'svg#AccessibilityCheck'),
			await EL.svgGroup('icon-group accessibility-check', null,null,null,null,'svg#AccessibilityCheck'),
			await EL.svgPath('base-path', null,{...iconParentPath},null,null,'g.icon-group.accessibility-check'),
			await EL.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.accessibility-check'),
	
		];
	}
	return icon;
}
export const AlertCircle = async (parent = null, title='') => {//todo
	const specifics = {
		'circle_1':{cx:'12',cy:'12',r:'9', stroke:'#000', fill:'none'},
		'line_1' :{x1:'12', y1:'8', x2:'12', y2:'12', stroke:'#000'},
		'line_2' :{x1:'12', y1:'16', x2:'12.01', y2:'8', stroke:'#000'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await EL.svg('svg-icon absolute', 'AlertCircle', {...iconViewBox},'','',parent),
			await EL.svgTitle(null, null,null,title,null,'svg#AlertCircle'),
			await EL.svgGroup('icon-group alert-circle', null,null,null,null,'svg#AlertCircle'),
			await EL.svgPath('base-path', null,{...iconParentPath},null,null,'g.icon-group.alert-circle'),
			await EL.svgCircle(null,null,{...specifics.circle_1},null,null,'g.icon-group.alert-circle'),
			await EL.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.alert-circle'),
			await EL.svgLine(null, null,{...specifics.line_2},null,null,'g.icon-group.alert-circle')
		];
	}
	return icon;
};
export const AlertOctagon = async (parent = null, title='') => {
	const specifics = {
		'path_1':{d:'M8.7 3h6.6c.3 0 .5 .1 .7 .3l4.7 4.7c.2 .2 .3 .4 .3 .7v6.6c0 .3 -.1 .5 -.3 .7l-4.7 4.7c-.2 .2 -.4 .3 -.7 .3h-6.6c-.3 0 -.5 -.1 -.7 -.3l-4.7 -4.7c-.2 -.2 -.3 -.4 -.3 -.7v-6.6c0 -.3 .1 -.5 .3 -.7l4.7 -4.7c.2 -.2 .4 -.3 .7 -.3z'},
		'line_1' :{x1:'12', y1:'8', x2:'12', y2:'12', stroke:'#000'},
		'line_2' :{x1:'12', y1:'16', x2:'12.01', y2:'16', stroke:'#000'}
	};
	let icon;
	if(null !== parent){
		icon = await [
			await EL.svg('svg-icon absolute', 'AlertOctagon', {...iconViewBox},'','',parent),
			await EL.svgTitle(null, null,null,title,null,'svg#AlertOctagon'),
			await EL.svgGroup('icon-group alert-octagon', null,null,null,null,'svg#AlertOctagon'),
			await EL.svgPath('base-path', null,{...iconParentPath},null,null,'g.icon-group.alert-octagon'),
			await EL.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.alert-octagon'),
			await EL.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.alert-octagon'),
			await EL.svgLine(null, null,{...specifics.line_2},null,null,'g.icon-group.alert-octagon'),
		];
	}
	return icon;
};
export const AlertTriangle = async (parent = null, title='') => {
	const specifics = {
		'path_1':{d:'M12 9v2m0 4v.01', stroke:'#000', stroke_width: '1px'},
		'path_2':{d:'M5 19h14a2 2 0 0 0 1.84 -2.75l-7.1 -12.25a2 2 0 0 0 -3.5 0l-7.1 12.25a2 2 0 0 0 1.75 2.75', stroke:'#000', stroke_width: '1px'}
	};
	let icon;
	if(null !== parent){
		icon = await [
			await EL.svg('svg-icon absolute', 'AlertTriangle', {...iconViewBox},'','',parent),
			await EL.svgTitle(null, null,null,title,null,'svg#AlertTriangle'),
			await EL.svgGroup('icon-group alert-triangle', null,null,null,null,'svg#AlertTriangle'),
			await EL.svgPath('base-path', null,{...iconParentPath},null,null,'g.icon-group.alert-triangle'),
			await EL.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.alert-triangle'),
			await EL.svgPath(null, null,{...specifics.path_2},null,null,'g.icon-group.alert-triangle'),
		];
	}
	return icon;
};
export const AlignCenter = async (parent = null, title='') => {
	const specifics = {
		'line_1' :{x1:'4', y1:'5', x2:'20', y2:'5', stroke:'#000'},
		'line_2' :{x1:'8', y1:'10', x2:'16', y2:'10', stroke:'#000'},
		'line_3' :{x1:'4', y1:'15', x2:'20', y2:'15', stroke:'#000'},
		'line_4' :{x1:'8', y1:'20', x2:'16', y2:'20', stroke:'#000'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await EL.svg('svg-icon absolute', 'AlignCenter', {...iconViewBox},'','',parent),
			await EL.svgTitle(null, null,null,title,null,'svg#AlignCenter'),
			await EL.svgGroup('icon-group align-center', null,null,null,null,'svg#AlignCenter'),
			await EL.svgPath('base-path', null,{...iconParentPath},null,null,'g.icon-group.align-center'),
			await EL.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.align-center'),
			await EL.svgLine(null, null,{...specifics.line_2},null,null,'g.icon-group.align-center'),
			await EL.svgLine(null, null,{...specifics.line_3},null,null,'g.icon-group.align-center'),
			await EL.svgLine(null, null,{...specifics.line_4},null,null,'g.icon-group.align-center'),
		];
	}
	return icon;
};
export const AlignJustified = async (parent = null, title='') => {
	const specifics = {
		'line_1' :{x1:'4', y1:'5', x2:'20', y2:'5', stroke:'#000'},
		'line_2' :{x1:'4', y1:'10', x2:'20', y2:'10', stroke:'#000'},
		'line_3' :{x1:'4', y1:'15', x2:'18', y2:'15', stroke:'#000'},
		'line_4' :{x1:'4', y1:'20', x2:'16', y2:'20', stroke:'#000'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await EL.svg('svg-icon absolute', 'AlignJustified', {...iconViewBox},'','',parent),
			await EL.svgTitle(null, null,null,title,null,'svg#AlignJustified'),
			await EL.svgGroup('icon-group align-justified', null,null,null,null,'svg#AlignJustified'),
			await EL.svgPath('base-path', null,{...iconParentPath},null,null,'g.icon-group.align-justified'),
			await EL.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.align-justified'),
			await EL.svgLine(null, null,{...specifics.line_2},null,null,'g.icon-group.align-justified'),
			await EL.svgLine(null, null,{...specifics.line_3},null,null,'g.icon-group.align-justified'),
			await EL.svgLine(null, null,{...specifics.line_4},null,null,'g.icon-group.align-justified'),
		];
	}
	return icon;
};
export const AlignLeft = async (parent = null, title='') => {
	const specifics = {
		'line_1' :{x1:'4', y1:'5', x2:'20', y2:'5', stroke:'#000'},
		'line_2' :{x1:'4', y1:'10', x2:'14', y2:'10', stroke:'#000'},
		'line_3' :{x1:'4', y1:'15', x2:'20', y2:'15', stroke:'#000'},
		'line_4' :{x1:'4', y1:'20', x2:'14', y2:'20', stroke:'#000'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await EL.svg('svg-icon absolute', 'AlignLeft', {...iconViewBox},'','',parent),
			await EL.svgTitle(null, null,null,title,null,'svg#AlignLeft'),
			await EL.svgGroup('icon-group align-left', null,null,null,null,'svg#AlignLeft'),
			await EL.svgPath('base-path', null,{...iconParentPath},null,null,'g.icon-group.align-left'),
			await EL.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.align-left'),
			await EL.svgLine(null, null,{...specifics.line_2},null,null,'g.icon-group.align-left'),
			await EL.svgLine(null, null,{...specifics.line_3},null,null,'g.icon-group.align-left'),
			await EL.svgLine(null, null,{...specifics.line_4},null,null,'g.icon-group.align-left'),
		];
	}
	return icon;
};
export const AlignRight = async (parent = null, title='') => {
	const specifics = {
		'line_1' :{x1:'4', y1:'5', x2:'20', y2:'5', stroke:'#000'},
		'line_2' :{x1:'10', y1:'10', x2:'20', y2:'10', stroke:'#000'},
		'line_3' :{x1:'4', y1:'15', x2:'20', y2:'15', stroke:'#000'},
		'line_4' :{x1:'10', y1:'20', x2:'20', y2:'20', stroke:'#000'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await EL.svg('svg-icon absolute', 'AlignRight', {...iconViewBox},'','',parent),
			await EL.svgTitle(null, null,null,title,null,'svg#AlignRight'),
			await EL.svgGroup('icon-group align-right', null,null,null,null,'svg#AlignRight'),
			await EL.svgPath('base-path', null,{...iconParentPath},null,null,'g.icon-group.align-right'),
			await EL.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.align-right'),
			await EL.svgLine(null, null,{...specifics.line_2},null,null,'g.icon-group.align-right'),
			await EL.svgLine(null, null,{...specifics.line_3},null,null,'g.icon-group.align-right'),
			await EL.svgLine(null, null,{...specifics.line_4},null,null,'g.icon-group.align-right'),
		];
	}
	return icon;
};
export const Anchor = async (parent = null, title='') => {
	const specifics = {
		'path_1':{d:'M12 9v12m-8 -8a8 8 0 0 0 16 0m1 0h-2m-14 0h-2', stroke:'#000', stroke_width: '1px', fill: 'none'},
		'circle_1':{cx:'12',cy:'6',r:'3'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await EL.svg('svg-icon absolute', 'Anchor', {...iconViewBox},'','',parent),
			await EL.svgTitle(null, null,null,title,null,'svg#Anchor'),
			await EL.svgGroup('icon-group anchor', null,null,null,null,'svg#Anchor'),
			await EL.svgPath('base-path', null,{...iconParentPath},null,null,'g.icon-group.anchor'),
			await EL.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.anchor'),
			await EL.svgCircle(null,null,{...specifics.circle_1},null,null,'g.icon-group.anchor'),
		];
	}
	return icon;
};
export const Apps = async (parent = null, title='') =>{
	const specifics = {
		'rect_1': {x:'4',y:'4',width:'6',height:'6', rx: '1'},
		'rect_2': {x:'4',y:'14',width:'6',height:'6', rx: '1'},
		'rect_3': {x:'14',y:'14',width:'6',height:'6', rx: '1'},
		'line_1' :{x1:'14', y1:'7', x2:'20', y2:'7', stroke:'#000'},
		'line_2' :{x1:'17', y1:'4', x2:'17', y2:'10', stroke:'#000'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await EL.svg('svg-icon absolute', 'Apps', {...iconViewBox},'','',parent),
			await EL.svgTitle(null, null,null,title,null,'svg#Apps'),
			await EL.svgGroup('icon-group apps', null,null,null,null,'svg#Apps'),
			await EL.svgPath('base-path', null,{...iconParentPath},null,null,'g.icon-group.apps'),
			await EL.svgRect(null, null,{...specifics.rect_1},null,null,'g.icon-group.apps'),
			await EL.svgRect(null, null,{...specifics.rect_2},null,null,'g.icon-group.apps'),
			await EL.svgRect(null, null,{...specifics.rect_3},null,null,'g.icon-group.apps'),
			await EL.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.apps'),
			await EL.svgLine(null, null,{...specifics.line_2},null,null,'g.icon-group.apps'),
		];
	}
	return icon;
	
};
export const Archive = async (parent = null, title='') => {
	const specifics = {
		'rect_1': {x:'3',y:'4',width:'18',height:'4', rx: '2'},
		'path_1':{d:'M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-10', stroke:'#000', stroke_width: '1px', fill: 'none'},
		'line_1' :{x1:'10', y1:'12', x2:'14', y2:'2', stroke:'#000'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await EL.svg('svg-icon absolute', 'Archive', {...iconViewBox},'','',parent),
			await EL.svgTitle(null, null,null,title,null,'svg#Archive'),
			await EL.svgGroup('icon-group archive', null,null,null,null,'svg#Archive'),
			await EL.svgPath('base-path', null,{...iconParentPath},null,null,'g.icon-group.archive'),
			await EL.svgRect(null, null,{...specifics.rect_1},null,null,'g.icon-group.archive'),
			await EL.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.archive'),
			await EL.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.archive'),
		];
	}
	return icon;
	
};
export const ArrowBack = async (parent = null, title='') => {
	const specifics = {
		'path_1':{d:'M9 11l-4 4l4 4m-4 -4h11a4 4 0 0 0 0 -8h-1', stroke:'#000', stroke_width: '1px', fill: 'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await EL.svg('svg-icon absolute', 'ArrowBack', {...iconViewBox},'','',parent),
			await EL.svgTitle(null, null,null,title,null,'svg#ArrowBack'),
			await EL.svgGroup('icon-group arrow-back', null,null,null,null,'svg#ArrowBack'),
			await EL.svgPath('base-path', null,{...iconParentPath},null,null,'g.icon-group.arrow-back'),
			await EL.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.arrow-back'),
		];
	}
	return icon;
	
};
export const ArrowBackUp = async (parent = null, title='') => {
	const specifics = {
		'path_1':{d:'M9 13l-4 -4l4 -4m-4 4h11a4 4 0 0 1 0 8h-1', stroke:'#000', stroke_width: '1px', fill: 'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await EL.svg('svg-icon absolute', 'ArrowBackUp', {...iconViewBox},'','',parent),
			await EL.svgTitle(null, null,null,title,null,'svg#ArrowBackUp'),
			await EL.svgGroup('icon-group arrow-back-up', null,null,null,null,'svg#ArrowBackUp'),
			await EL.svgPath('base-path', null,{...iconParentPath},null,null,'g.icon-group.arrow-back-up'),
			await EL.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.arrow-back-up'),
		];
	}
	return icon;

};
export const ArrowBarDown = async (parent = null, title='') => {
	const specifics = {
		'line_1' :{x1:'12', y1:'20', x2:'12', y2:'10', stroke:'#000'},
		'line_2' :{x1:'12', y1:'20', x2:'16', y2:'16', stroke:'#000'},
		'line_3' :{x1:'12', y1:'20', x2:'8', y2:'16', stroke:'#000'},
		'line_4' :{x1:'4', y1:'4', x2:'20', y2:'4', stroke:'#000'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await EL.svg('svg-icon absolute', 'ArrowBarDown', {...iconViewBox},'','',parent),
			await EL.svgTitle(null, null,null,title,null,'svg#ArrowBarDown'),
			await EL.svgGroup('icon-group arrow-bar-down', null,null,null,null,'svg#ArrowBarDown'),
			await EL.svgPath('base-path', null,{...iconParentPath},null,null,'g.icon-group.arrow-bar-down'),
			await EL.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.arrow-bar-down'),
			await EL.svgLine(null, null,{...specifics.line_2},null,null,'g.icon-group.arrow-bar-down'),
			await EL.svgLine(null, null,{...specifics.line_3},null,null,'g.icon-group.arrow-bar-down'),
			await EL.svgLine(null, null,{...specifics.line_4},null,null,'g.icon-group.arrow-bar-down'),
		];
	}
	return icon;
};
export const ArrowBarLeft = async (parent = null, title='') => {
	const specifics = {
		'line_1' :{x1:'4', y1:'12', x2:'14', y2:'12', stroke:'#000'},
		'line_2' :{x1:'4', y1:'12', x2:'8', y2:'16', stroke:'#000'},
		'line_3' :{x1:'4', y1:'12', x2:'8', y2:'8', stroke:'#000'},
		'line_4' :{x1:'20', y1:'4', x2:'20', y2:'20', stroke:'#000'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await EL.svg('svg-icon absolute', 'ArrowBarLeft', {...iconViewBox},'','',parent),
			await EL.svgTitle(null, null,null,title,null,'svg#ArrowBarLeft'),
			await EL.svgGroup('icon-group arrow-bar-left', null,null,null,null,'svg#ArrowBarLeft'),
			await EL.svgPath('base-path', null,{...iconParentPath},null,null,'g.icon-group.arrow-bar-left'),
			await EL.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.arrow-bar-left'),
			await EL.svgLine(null, null,{...specifics.line_2},null,null,'g.icon-group.arrow-bar-left'),
			await EL.svgLine(null, null,{...specifics.line_3},null,null,'g.icon-group.arrow-bar-left'),
			await EL.svgLine(null, null,{...specifics.line_4},null,null,'g.icon-group.arrow-bar-left'),
		];
	}
	return icon;
};
export const ArrowBarRight = async (parent = null, title='') => {
	const specifics = {
		'line_1' :{x1:'20', y1:'12', x2:'10', y2:'12', stroke:'#000'},
		'line_2' :{x1:'20', y1:'12', x2:'16', y2:'16', stroke:'#000'},
		'line_3' :{x1:'20', y1:'12', x2:'16', y2:'8', stroke:'#000'},
		'line_4' :{x1:'4', y1:'4', x2:'4', y2:'20', stroke:'#000'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await EL.svg('svg-icon absolute', 'ArrowBarRight', {...iconViewBox},'','',parent),
			await EL.svgTitle(null, null,null,title,null,'svg#ArrowBarRight'),
			await EL.svgGroup('icon-group arrow-bar-right', null,null,null,null,'svg#ArrowBarRight'),
			await EL.svgPath('base-path', null,{...iconParentPath},null,null,'g.icon-group.arrow-bar-right'),
			await EL.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.arrow-bar-right'),
			await EL.svgLine(null, null,{...specifics.line_2},null,null,'g.icon-group.arrow-bar-right'),
			await EL.svgLine(null, null,{...specifics.line_3},null,null,'g.icon-group.arrow-bar-right'),
			await EL.svgLine(null, null,{...specifics.line_4},null,null,'g.icon-group.arrow-bar-right'),
		];
	}
	return icon;
};
export const ArrowBarToDown = async (parent = null, title='') => {
	const specifics = {
		'line_1' :{x1:'4', y1:'20', x2:'20', y2:'20', stroke:'#000'},
		'line_2' :{x1:'12', y1:'14', x2:'12', y2:'4', stroke:'#000'},
		'line_3' :{x1:'12', y1:'14', x2:'16', y2:'10', stroke:'#000'},
		'line_4' :{x1:'12', y1:'14', x2:'8', y2:'10', stroke:'#000'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await EL.svg('svg-icon absolute', 'ArrowBarToDown', {...iconViewBox},'','',parent),
			await EL.svgTitle(null, null,null,title,null,'svg#ArrowBarToDown'),
			await EL.svgGroup('icon-group arrow-bar-to-down', null,null,null,null,'svg#ArrowBarToDown'),
			await EL.svgPath('base-path', null,{...iconParentPath},null,null,'g.icon-group.arrow-bar-to-down'),
			await EL.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.arrow-bar-to-down'),
			await EL.svgLine(null, null,{...specifics.line_2},null,null,'g.icon-group.arrow-bar-to-down'),
			await EL.svgLine(null, null,{...specifics.line_3},null,null,'g.icon-group.arrow-bar-to-down'),
			await EL.svgLine(null, null,{...specifics.line_4},null,null,'g.icon-group.arrow-bar-to-down'),
		];
	}
	return icon;
};
export const ArrowBarToLeft = async (parent = null, title='') => {
	const specifics = {
		'line_1' :{x1:'10', y1:'12', x2:'20', y2:'12', stroke:'#000'},
		'line_2' :{x1:'10', y1:'12', x2:'14', y2:'16', stroke:'#000'},
		'line_3' :{x1:'10', y1:'12', x2:'14', y2:'8', stroke:'#000'},
		'line_4' :{x1:'4', y1:'4', x2:'4', y2:'20', stroke:'#000'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await EL.svg('svg-icon absolute', 'ArrowBarToLeft', {...iconViewBox},'','',parent),
			await EL.svgTitle(null, null,null,title,null,'svg#ArrowBarToLeft'),
			await EL.svgGroup('icon-group arrow-bar-to-left', null,null,null,null,'svg#ArrowBarToLeft'),
			await EL.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.arrow-bar-to-left'),
			await EL.svgLine(null, null,{...specifics.line_2},null,null,'g.icon-group.arrow-bar-to-left'),
			await EL.svgLine(null, null,{...specifics.line_3},null,null,'g.icon-group.arrow-bar-to-left'),
			await EL.svgLine(null, null,{...specifics.line_4},null,null,'g.icon-group.arrow-bar-to-left'),
		];
	}
	return icon;
};
export const ArrowBarToRight = async (parent = null, title='') => {
	const specifics = {
		'line_1' :{x1:'20', y1:'12', x2:'10', y2:'12', stroke:'#000'},
		'line_2' :{x1:'20', y1:'12', x2:'16', y2:'16', stroke:'#000'},
		'line_3' :{x1:'20', y1:'12', x2:'16', y2:'8', stroke:'#000'},
		'line_4' :{x1:'4', y1:'4', x2:'4', y2:'20', stroke:'#000'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await EL.svg('svg-icon absolute', 'ArrowBarToRight', {...iconViewBox},'','',parent),
			await EL.svgTitle(null, null,null,title,null,'svg#ArrowBarToRight'),
			await EL.svgGroup('icon-group arrow-bar-to-right', null,null,null,null,'svg#ArrowBarToRight'),
			await EL.svgPath('base-path', null,{...iconParentPath},null,null,'g.icon-group.arrow-bar-to-right'),
			await EL.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.arrow-bar-to-right'),
			await EL.svgLine(null, null,{...specifics.line_2},null,null,'g.icon-group.arrow-bar-to-right'),
			await EL.svgLine(null, null,{...specifics.line_3},null,null,'g.icon-group.arrow-bar-to-right'),
			await EL.svgLine(null, null,{...specifics.line_4},null,null,'g.icon-group.arrow-bar-to-right'),
		];
	}
	return icon;
};
export const ArrowBarToUp = async (parent = null, title='') => {
	const specifics = {
		'line_1' :{x1:'12', y1:'10', x2:'12', y2:'20', stroke:'#000'},
		'line_2' :{x1:'12', y1:'10', x2:'16', y2:'14', stroke:'#000'},
		'line_3' :{x1:'12', y1:'10', x2:'8', y2:'14', stroke:'#000'},
		'line_4' :{x1:'4', y1:'4', x2:'20', y2:'14', stroke:'#000'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await EL.svg('svg-icon absolute', 'ArrowBarToUp', {...iconViewBox},'','',parent),
			await EL.svgTitle(null, null,null,title,null,'svg#ArrowBarToUp'),
			await EL.svgGroup('icon-group arrow-bar-to-up', null,null,null,null,'svg#ArrowBarToUp'),
			await EL.svgPath('base-path', null,{...iconParentPath},null,null,'g.icon-group.arrow-bar-to-up'),
			await EL.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.arrow-bar-to-up'),
			await EL.svgLine(null, null,{...specifics.line_2},null,null,'g.icon-group.arrow-bar-to-up'),
			await EL.svgLine(null, null,{...specifics.line_3},null,null,'g.icon-group.arrow-bar-to-up'),
			await EL.svgLine(null, null,{...specifics.line_4},null,null,'g.icon-group.arrow-bar-to-up'),
		];
	}
	return icon;
};
export const ArrowBarUp = async (parent = null, title='') => {
	const specifics = {
		'line_1' :{x1:'12', y1:'4', x2:'12', y2:'14', stroke:'#000'},
		'line_2' :{x1:'12', y1:'4', x2:'16', y2:'8', stroke:'#000'},
		'line_3' :{x1:'12', y1:'4', x2:'8', y2:'8', stroke:'#000'},
		'line_4' :{x1:'4', y1:'20', x2:'20', y2:'20', stroke:'#000'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await EL.svg('svg-icon absolute', 'ArrowBarUp', {...iconViewBox},'','',parent),
			await EL.svgTitle(null, null,null,title,null,'svg#ArrowBarUp'),
			await EL.svgGroup('icon-group arrow-bar-up', null,null,null,null,'svg#ArrowBarUp'),
			await EL.svgPath('base-path', null,{...iconParentPath},null,null,'g.icon-group.arrow-bar-up'),
			await EL.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.arrow-bar-up'),
			await EL.svgLine(null, null,{...specifics.line_2},null,null,'g.icon-group.arrow-bar-up'),
			await EL.svgLine(null, null,{...specifics.line_3},null,null,'g.icon-group.arrow-bar-up'),
			await EL.svgLine(null, null,{...specifics.line_4},null,null,'g.icon-group.arrow-bar-up'),
		];
	}
	return icon;
};
export const ArrowBigDown = async (parent = null, title='') =>{
	const specifics = {
		'path_1':{d:'M15 4v8h3.586a1 1 0 0 1 .707 1.707l-6.586 6.586a1 1 0 0 1 -1.414 0l-6.586 -6.586a1 1 0 0 1 .707 -1.707h3.586v-8a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1z', stroke:'#000', stroke_width: '1px', fill: 'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await EL.svg('svg-icon absolute', 'ArrowBarUp', {...iconViewBox},'','',parent),
			await EL.svgTitle(null, null,null,title,null,'svg#ArrowBarUp'),
			await EL.svgGroup('icon-group', null,null,null,null,'svg#ArrowBarUp'),
			await EL.svgPath('base-path', null,{...iconParentPath},null,null,'g.icon-group'),
			await EL.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group'),
		];
	}
	return icon;
};
export const ArrowBigLeft = async (parent = null, title='') =>{
	const specifics = {
		'path_1':{d:'M20 15h-8v3.586a1 1 0 0 1 -1.707 .707l-6.586 -6.586a1 1 0 0 1 0 -1.414l6.586 -6.586a1 1 0 0 1 1.707 .707v3.586h8a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1z', stroke:'#000', stroke_width: '1px', fill: 'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await EL.svg('svg-icon absolute', 'ArrowBarUp', {...iconViewBox},'','',parent),
			await EL.svgTitle(null, null,null,title,null,'svg#ArrowBarUp'),
			await EL.svgGroup('icon-group', null,null,null,null,'svg#ArrowBarUp'),
			await EL.svgPath('base-path', null,{...iconParentPath},null,null,'g.icon-group'),
			await EL.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group'),
		];
	}
	return icon;
};
export const ArrowBigRight = async (parent = null, title='') =>{
	const specifics = {
		'path_1':{d:'M4 9h8v-3.586a1 1 0 0 1 1.707 -.707l6.586 6.586a1 1 0 0 1 0 1.414l-6.586 6.586a1 1 0 0 1 -1.707 -.707v-3.586h-8a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1z', stroke:'#000', stroke_width: '1px', fill: 'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await EL.svg('svg-icon absolute', 'ArrowBarUp', {...iconViewBox},'','',parent),
			await EL.svgTitle(null, null,null,title,null,'svg#ArrowBarUp'),
			await EL.svgGroup('icon-group', null,null,null,null,'svg#ArrowBarUp'),
			await EL.svgPath('base-path', null,{...iconParentPath},null,null,'g.icon-group'),
			await EL.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group'),
		];
	}
	return icon;
};
export const ArrowBigUp = async (parent = null, title='') =>{
	const specifics = {
		'path_1':{d:'M9 20v-8h-3.586a1 1 0 0 1 -.707 -1.707l6.586 -6.586a1 1 0 0 1 1.414 0l6.586 6.586a1 1 0 0 1 -.707 1.707h-3.586v8a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z', stroke:'#000', stroke_width: '1px', fill: 'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await EL.svg('svg-icon absolute', 'ArrowBarUp', {...iconViewBox},'','',parent),
			await EL.svgTitle(null, null,null,title,null,'svg#ArrowBarUp'),
			await EL.svgGroup('icon-group', null,null,null,null,'svg#ArrowBarUp'),
			await EL.svgPath('base-path', null,{...iconParentPath},null,null,'g.icon-group'),
			await EL.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group'),
		];
	}
	return icon;
};
export const ArrowDownCircle = async (parent = null, title='') =>{
	const specifics = {
		'circle_1':{cx:'12',cy:'12',r:'9', stroke:'#000', fill:'none'},
		'line_1' :{x1:'8', y1:'12', x2:'12', y2:'16', stroke:'#000'},
		'line_2' :{x1:'12', y1:'8', x2:'12', y2:'16', stroke:'#000'},
		'line_3' :{x1:'16', y1:'12', x2:'12', y2:'16', stroke:'#000'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await EL.svg('svg-icon absolute', 'ArrowDownCircle', {...iconViewBox},'','',parent),
			await EL.svgTitle(null, null,null,title,null,'svg#ArrowDownCircle'),
			await EL.svgGroup('icon-group', null,null,null,null,'svg#ArrowDownCircle'),
			await EL.svgPath('base-path', null,{...iconParentPath},null,null,'g.icon-group'),
			await EL.svgCircle(null,null,{...specifics.circle_1},null,null,'g.icon-group'),
			await EL.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group'),
			await EL.svgLine(null, null,{...specifics.line_2},null,null,'g.icon-group'),
			await EL.svgLine(null, null,{...specifics.line_3},null,null,'g.icon-group'),
		];
	}
	return icon;
};
export const ArrowDownLeftCircle = async (parent = null, title='') =>{
	const specifics = {
		'circle_1':{cx:'12',cy:'12',r:'9', stroke:'#000', fill:'none'},
		'line_1' :{x1:'15', y1:'9', x2:'9', y2:'15', stroke:'#000'},
		'polyline_1':{points:'15 15 9 15 9 9', stroke:'#000', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await EL.svg('svg-icon absolute', 'ArrowDownLeftCircle', {...iconViewBox},'','',parent),
			await EL.svgTitle(null, null,null,title,null,'svg#ArrowDownLeftCircle'),
			await EL.svgGroup('icon-group', null,null,null,null,'svg#ArrowDownLeftCircle'),
			await EL.svgPath('base-path', null,{...iconParentPath},null,null,'g.icon-group'),
			await EL.svgCircle(null,null,{...specifics.circle_1},null,null,'g.icon-group'),
			await EL.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group'),
			await EL.svgPolyline(null, null,{...specifics.polyline_1},null,null,'g.icon-group'),
		];
	}
	return icon;
};
export const ArrowDownLeft = async (parent = null, title='') =>{
	const specifics = {
		'line_1' :{x1:'17', y1:'7', x2:'7', y2:'17', stroke:'#000'},
		'polyline_1':{points:'16 17 7 17 7 8', stroke:'#000', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await EL.svg('svg-icon absolute', 'ArrowDownLeft', {...iconViewBox},'','',parent),
			await EL.svgTitle(null, null,null,title,null,'svg#ArrowDownLeft'),
			await EL.svgGroup('icon-group', null,null,null,null,'svg#ArrowDownLeft'),
			await EL.svgPath('base-path', null,{...iconParentPath},null,null,'g.icon-group'),
			await EL.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group'),
			await EL.svgPolyline(null, null,{...specifics.polyline_1},null,null,'g.icon-group'),
		];
	}
	return icon;
};
export const ArrowDownRightCircle = async (parent = null, title='') =>{
	const specifics = {
		'circle_1':{cx:'12',cy:'12',r:'9', stroke:'#000', fill:'none'},
		'line_1' :{x1:'15', y1:'15', x2:'9', y2:'15', stroke:'#000'},
		'polyline_1':{points:'15 9 15 15 9 9', stroke:'#000', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await EL.svg('svg-icon absolute', 'ArrowDownRightCircle', {...iconViewBox},'','',parent),
			await EL.svgTitle(null, null,null,title,null,'svg#ArrowDownRightCircle'),
			await EL.svgGroup('icon-group', null,null,null,null,'svg#ArrowDownRightCircle'),
			await EL.svgPath('base-path', null,{...iconParentPath},null,null,'g.icon-group'),
			await EL.svgCircle(null,null,{...specifics.circle_1},null,null,'g.icon-group'),
			await EL.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group'),
			await EL.svgPolyline(null, null,{...specifics.polyline_1},null,null,'g.icon-group'),
		];
	}
	return icon;
};
export const ArrowDownRight = async (parent = null, title='') =>{
	const specifics = {
		'line_1' :{x1:'7', y1:'7', x2:'17', y2:'17', stroke:'#000'},
		'polyline_1':{points:'17 8 17 17 8 17', stroke:'#000', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await EL.svg('svg-icon absolute', 'ArrowDownRight', {...iconViewBox},'','',parent),
			await EL.svgTitle(null, null,null,title,null,'svg#ArrowDownRight'),
			await EL.svgGroup('icon-group', null,null,null,null,'svg#ArrowDownRight'),
			await EL.svgPath('base-path', null,{...iconParentPath},null,null,'g.icon-group'),
			await EL.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group'),
			await EL.svgPolyline(null, null,{...specifics.polyline_1},null,null,'g.icon-group'),
		];
	}
	return icon;
};
export const ArrowDown = async (parent = null, title='') =>{
	const specifics = {
		'line_1' :{x1:'12', y1:'5', x2:'12', y2:'19', stroke:'#000'},
		'line_2' :{x1:'18', y1:'13', x2:'12', y2:'19', stroke:'#000'},
		'line_3' :{x1:'6', y1:'13', x2:'12', y2:'19', stroke:'#000'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await EL.svg('svg-icon absolute', 'ArrowDown', {...iconViewBox},'','',parent),
			await EL.svgTitle(null, null,null,title,null,'svg#ArrowDown'),
			await EL.svgGroup('icon-group', null,null,null,null,'svg#ArrowDown'),
			await EL.svgPath('base-path', null,{...iconParentPath},null,null,'g.icon-group'),
			await EL.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group'),
			await EL.svgLine(null, null,{...specifics.line_2},null,null,'g.icon-group'),
			await EL.svgLine(null, null,{...specifics.line_3},null,null,'g.icon-group'),
		];
	}
	return icon;
};
export const ArrowUpCircle = async (parent = null, title='') =>{
	const specifics = {
		'circle_1':{cx:'12',cy:'12',r:'9', stroke:'#000', fill:'none'},
		'line_1' :{x1:'12', y1:'8', x2:'8', y2:'12', stroke:'#000'},
		'line_2' :{x1:'12', y1:'8', x2:'12', y2:'16', stroke:'#000'},
		'line_3' :{x1:'16', y1:'12', x2:'12', y2:'8', stroke:'#000'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await EL.svg('svg-icon absolute', 'ArrowUpCircle', {...iconViewBox},'','',parent),
			await EL.svgTitle(null, null,null,title,null,'svg#ArrowUpCircle'),
			await EL.svgGroup('icon-group', null,null,null,null,'svg#ArrowUpCircle'),
			await EL.svgPath('base-path', null,{...iconParentPath},null,null,'g.icon-group'),
			await EL.svgCircle(null,null,{...specifics.circle_1},null,null,'g.icon-group'),
			await EL.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group'),
			await EL.svgLine(null, null,{...specifics.line_2},null,null,'g.icon-group'),
			await EL.svgLine(null, null,{...specifics.line_3},null,null,'g.icon-group'),
		];
	}
	return icon;
};
export const ArrowUpLeft = async (parent = null, title='') =>{
	const specifics = {
		'line_1' :{x1:'7', y1:'7', x2:'17', y2:'17', stroke:'#000'},
		'polyline_1':{points:'16 7 7 7 7 16', stroke:'#000', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await EL.svg('svg-icon absolute', 'ArrowUpLeft', {...iconViewBox},'','',parent),
			await EL.svgTitle(null, null,null,title,null,'svg#ArrowUpLeft'),
			await EL.svgGroup('icon-group', null,null,null,null,'svg#ArrowUpLeft'),
			await EL.svgPath('base-path', null,{...iconParentPath},null,null,'g.icon-group'),
			await EL.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group'),
			await EL.svgPolyline(null, null,{...specifics.polyline_1},null,null,'g.icon-group'),
		];
	}
	return icon;
};
export const ArrowUpLeftCircle = async (parent = null, title='') =>{
	const specifics = {
		'circle_1':{cx:'12',cy:'12',r:'9', stroke:'#000', fill:'none'},
		'line_1' :{x1:'9', y1:'9', x2:'15', y2:'15', stroke:'#000'},
		'polyline_1':{points:'15 9 9 9 9 15', stroke:'#000', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await EL.svg('svg-icon absolute', 'ArrowUpLeftCircle', {...iconViewBox},'','',parent),
			await EL.svgTitle(null, null,null,title,null,'svg#ArrowUpLeftCircle'),
			await EL.svgGroup('icon-group', null,null,null,null,'svg#ArrowUpLeftCircle'),
			await EL.svgPath('base-path', null,{...iconParentPath},null,null,'g.icon-group'),
			await EL.svgCircle(null,null,{...specifics.circle_1},null,null,'g.icon-group'),
			await EL.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group'),
			await EL.svgPolyline(null, null,{...specifics.polyline_1},null,null,'g.icon-group'),
		];
	}
	return icon;
};
export const ArrowUpRight = async (parent = null, title='') =>{
	const specifics = {
		'line_1' :{x1:'17', y1:'7', x2:'7', y2:'17', stroke:'#000'},
		'polyline_1':{points:'8 7 17 7 17 16', stroke:'#000', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await EL.svg('svg-icon absolute', 'ArrowUpRightCircle', {...iconViewBox},'','',parent),
			await EL.svgTitle(null, null,null,title,null,'svg#ArrowUpRightCircle'),
			await EL.svgGroup('icon-group', null,null,null,null,'svg#ArrowUpRightCircle'),
			await EL.svgPath('base-path', null,{...iconParentPath},null,null,'g.icon-group'),
			await EL.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group'),
			await EL.svgPolyline(null, null,{...specifics.polyline_1},null,null,'g.icon-group'),
		];
	}
	return icon;
};
export const ArrowUpRightCircle = async (parent = null, title='') =>{
	const specifics = {
		'circle_1':{cx:'12',cy:'12',r:'9', stroke:'#000', fill:'none'},
		'line_1' :{x1:'15', y1:'9', x2:'9', y2:'15', stroke:'#000'},
		'polyline_1':{points:'15 15 15 9 9 9', stroke:'#000', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await EL.svg('svg-icon absolute', 'ArrowUpRight', {...iconViewBox},'','',parent),
			await EL.svgTitle(null, null,null,title,null,'svg#ArrowUpRight'),
			await EL.svgGroup('icon-group', null,null,null,null,'svg#ArrowUpRight'),
			await EL.svgPath('base-path', null,{...iconParentPath},null,null,'g.icon-group'),
			await EL.svgCircle(null,null,{...specifics.circle_1},null,null,'g.icon-group'),
			await EL.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group'),
			await EL.svgPolyline(null, null,{...specifics.polyline_1},null,null,'g.icon-group'),
		];
	}
	return icon;
};
export const ArrowUp = async (parent = null, title='') =>{
	const specifics = {
		'line_1' :{x1:'12', y1:'5', x2:'12', y2:'19', stroke:'#000'},
		'line_2' :{x1:'18', y1:'11', x2:'12', y2:'5', stroke:'#000'},
		'line_3' :{x1:'6', y1:'11', x2:'12', y2:'5', stroke:'#000'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await EL.svg('svg-icon absolute', 'ArrowUp', {...iconViewBox},'','',parent),
			await EL.svgTitle(null, null,null,title,null,'svg#ArrowUp'),
			await EL.svgGroup('icon-group', null,null,null,null,'svg#ArrowUp'),
			await EL.svgPath('base-path', null,{...iconParentPath},null,null,'g.icon-group'),
			await EL.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group'),
			await EL.svgLine(null, null,{...specifics.line_2},null,null,'g.icon-group'),
			await EL.svgLine(null, null,{...specifics.line_3},null,null,'g.icon-group'),
		];
	}
	return icon;
};

//export const Arrows = async (parent = null) =>{};

export const ArrowsMaximize = async (parent = null, title='') =>{
	const specifics = {
		'polyline_1':{points:'16 4 20 4 20 8', stroke:'#000', fill:'none'},
		'line_1' :{x1:'14', y1:'10', x2:'20', y2:'4', stroke:'#000'},
		'polyline_2':{points:'8 20 4 20 4 16', stroke:'#000', fill:'none'},
		'line_2' :{x1:'4', y1:'20', x2:'10', y2:'14', stroke:'#000'},
		'polyline_3':{points:'16 20 20 20 20 16', stroke:'#000', fill:'none'},
		'line_3' :{x1:'14', y1:'14', x2:'20', y2:'20', stroke:'#000'},
		'polyline_4':{points:'8 4 4 4 4 8', stroke:'#000', fill:'none'},
		'line_4' :{x1:'4', y1:'4', x2:'10', y2:'10', stroke:'#000'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await EL.svg('svg-icon absolute', 'ArrowsMaximize', {...iconViewBox},'','',parent),
			await EL.svgTitle(null, null,null,title,null,'svg#ArrowsMaximize'),
			await EL.svgGroup('icon-group', null,null,null,null,'svg#ArrowsMaximize'),
			await EL.svgPath('base-path', null,{...iconParentPath},null,null,'g.icon-group'),
			await EL.svgPolyline(null, null,{...specifics.polyline_1},null,null,'g.icon-group'),
			await EL.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group'),
			await EL.svgPolyline(null, null,{...specifics.polyline_2},null,null,'g.icon-group'),
			await EL.svgLine(null, null,{...specifics.line_2},null,null,'g.icon-group'),
			await EL.svgPolyline(null, null,{...specifics.polyline_3},null,null,'g.icon-group'),
			await EL.svgLine(null, null,{...specifics.line_3},null,null,'g.icon-group'),
			await EL.svgPolyline(null, null,{...specifics.polyline_4},null,null,'g.icon-group'),
			await EL.svgLine(null, null,{...specifics.line_4},null,null,'g.icon-group'),
		];
	}
	return icon;
};
export const ArrowsMinimize = async (parent = null, title='') =>{
	const specifics = {
		'polyline_1':{points:'5 9 9 9 9 5', stroke:'#000', fill:'none'},
		'line_1' :{x1:'3', y1:'3', x2:'9', y2:'9', stroke:'#000'},
		'polyline_2':{points:'5 15 9 15 9 19', stroke:'#000', fill:'none'},
		'line_2' :{x1:'3', y1:'21', x2:'9', y2:'15', stroke:'#000'},
		'polyline_3':{points:'19 9 15 9 15 5', stroke:'#000', fill:'none'},
		'line_3' :{x1:'15', y1:'9', x2:'21', y2:'3', stroke:'#000'},
		'polyline_4':{points:'19 15 15 15 15 19', stroke:'#000', fill:'none'},
		'line_4' :{x1:'15', y1:'15', x2:'21', y2:'21', stroke:'#000'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await EL.svg('svg-icon absolute', 'ArrowsMinimize', {...iconViewBox},'','',parent),
			await EL.svgTitle(null, null,null,title,null,'svg#ArrowsMinimize'),
			await EL.svgGroup('icon-group', null,null,null,null,'svg#ArrowsMinimize'),
			await EL.svgPath('base-path', null,{...iconParentPath},null,null,'g.icon-group'),
			await EL.svgPolyline(null, null,{...specifics.polyline_1},null,null,'g.icon-group'),
			await EL.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group'),
			await EL.svgPolyline(null, null,{...specifics.polyline_2},null,null,'g.icon-group'),
			await EL.svgLine(null, null,{...specifics.line_2},null,null,'g.icon-group'),
			await EL.svgPolyline(null, null,{...specifics.polyline_3},null,null,'g.icon-group'),
			await EL.svgLine(null, null,{...specifics.line_3},null,null,'g.icon-group'),
			await EL.svgPolyline(null, null,{...specifics.polyline_4},null,null,'g.icon-group'),
			await EL.svgLine(null, null,{...specifics.line_4},null,null,'g.icon-group'),
		];
	}
	return icon;
};
export const AspectRatio = async (parent = null, title='') =>{
	const specifics = {
		'rect_1': {x:'3',y:'5',width:'18',height:'14', rx: '2', stroke:'#000', fill: 'none'},
		'path_1':{d:'M7 12v-3h3', stroke:'#000', stroke_width: '1px', fill: 'none'},
		'path_2':{d:'M17 12v3h-3', stroke:'#000', stroke_width: '1px', fill: 'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await EL.svg('svg-icon absolute', 'AspectRatio', {...iconViewBox},'','',parent),
			await EL.svgTitle(null, null,null,title,null,'svg#AspectRatio'),
			await EL.svgGroup('icon-group', null,null,null,null,'svg#AspectRatio'),
			await EL.svgPath('base-path', null,{...iconParentPath},null,null,'g.icon-group'),
			await EL.svgRect(null, null,{...specifics.rect_1},null,null,'g.icon-group'),
			await EL.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group'),
			await EL.svgPath(null, null,{...specifics.path_2},null,null,'g.icon-group'),
		];
	}
	return icon;
};
export const At = async (parent = null, title='') =>{
	const specifics = {
		'circle_1':{cx:'12',cy:'12',r:'4', stroke:'#000', fill:'none'},
		'path_1':{d:'M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28', stroke:'#000', stroke_width: '1px', fill: 'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await EL.svg('svg-icon absolute', 'At', {...iconViewBox},'','',parent),
			await EL.svgTitle(null, null,null,title,null,'svg#At'),
			await EL.svgGroup('icon-group', null,null,null,null,'svg#At'),
			await EL.svgPath('base-path', null,{...iconParentPath},null,null,'g.icon-group'),
			await EL.svgCircle(null,null,{...specifics.circle_1},null,null,'g.icon-group'),
			await EL.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group'),
		];
	}
	return icon;
};