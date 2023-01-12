/** svgIcons_D.js */
import * as FT from './../functions.js';
import * as EL from './svgElements.js';
const iconParentPath = {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'};
const iconViewBox = {viewBox: '0 0 24 24'};
//export const = async (parent = null) =>{};

export const Details = async (parent = null, title='') =>{
	const specifics = {
		'path_1':{d:'M5 19h14a2 2 0 0 0 1.84 -2.75l-7.1 -12.25a2 2 0 0 0 -3.5 0l-7.1 12.25a2 2 0 0 0 1.75 2.75', stroke:'#000', stroke_width: '1px'},
		'path_2':{d:'M12 3v16', stroke:'#000', stroke_width: '1px'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await EL.svg('svg-icon absolute', 'Details', {...iconViewBox},'','',parent),
			await EL.svgTitle(null, null,null,title,null,'svg#Details'),
			await EL.svgGroup('icon-group details', null,null,null,null,'svg#Details'),
			await EL.svgPath('base-path', null,{...iconParentPath},null,null,'g.icon-group.details'),
			await EL.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.details'),
			await EL.svgPath(null, null,{...specifics.path_2},null,null,'g.icon-group.details'),
		];
	}
	return icon;
};
export const DeviceFloppy = async (parent = null, title='') =>{
	const specifics = {
		'path_1':{d:'M6 4h10l4 4v10a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2', stroke:'#000', stroke_width: '1px'},
		'circle_1':{cx:'12',cy:'14',r:'2', stroke:'#000', fill:'none'},
		'polyline_1':{points:'14 4 14 8 8 8 8 4', stroke:'#000', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await EL.svg('svg-icon absolute', 'DeviceFloppy', {...iconViewBox},'','',parent),
			await EL.svgTitle(null, null,null,title,null,'svg#DeviceFloppy'),
			await EL.svgGroup('icon-group device-floppy', null,null,null,null,'svg#DeviceFloppy'),
			await EL.svgPath('base-path', null,{...iconParentPath},null,null,'g.icon-group.device-floppy'),
			await EL.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.device-floppy'),
			await EL.svgCircle(null,null,{...specifics.circle_1},null,null,'g.icon-group.device-floppy'),
			await EL.svgPolyline(null, null,{...specifics.polyline_1},null,null,'g.icon-group.device-floppy'),
		];
	}
	return icon;
};
export const Direction = async (parent = null, title='') =>{
	const specifics = {
		'path_1':{d:'M9 10l3 -3l3 3', stroke:'#000', stroke_width: '1px'},
		'path_2':{d:'M9 14l3 3l3 -3', stroke:'#000', stroke_width: '1px'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await EL.svg('svg-icon absolute', 'Direction', {...iconViewBox},'','',parent),
			await EL.svgTitle(null, null,null,title,null,'svg#Direction'),
			await EL.svgGroup('icon-group direction', null,null,null,null,'svg#Direction'),
			await EL.svgPath('base-path', null,{...iconParentPath},null,null,'g.icon-group.direction'),
			await EL.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.direction'),
			await EL.svgPath(null, null,{...specifics.path_2},null,null,'g.icon-group.direction'),
		];
	}
	return icon;
};
export const Divide = async (parent = null, title='') =>{
	const specifics = {
		'circle_1':{cx:'12',cy:'18',r:'1', stroke:'#000', fill:'none'},
		'circle_2':{cx:'12',cy:'6',r:'1', stroke:'#000', fill:'none'},
		'line_1' :{x1:'5', y1:'12', x2:'19', y2:'12', stroke:'#000'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await EL.svg('svg-icon absolute', 'Divide', {...iconViewBox},'','',parent),
			await EL.svgTitle(null, null,null,title,null,'svg#Divide'),
			await EL.svgGroup('icon-group divide', null,null,null,null,'svg#Divide'),
			await EL.svgPath('base-path', null,{...iconParentPath},null,null,'g.icon-group.divide'),
			await EL.svgCircle(null,null,{...specifics.circle_1},null,null,'g.icon-group.divide'),
			await EL.svgCircle(null,null,{...specifics.circle_2},null,null,'g.icon-group.divide'),
			await EL.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.divide'),
		];
	}
	return icon;
};
export const Download = async (parent = null, title='') =>{
	const specifics = {
		'path_1':{d:'M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2', stroke:'#000', stroke_width: '1px'},
		'polyline_1':{points:'7 11 12 16 17 11', stroke:'#000', fill:'none'},
		'line_1' :{x1:'12', y1:'4', x2:'12', y2:'16', stroke:'#000'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await EL.svg('svg-icon absolute', 'Download', {...iconViewBox},'','',parent),
			await EL.svgTitle(null, null,null,title,null,'svg#Download'),
			await EL.svgGroup('icon-group download', null,null,null,null,'svg#Download'),
			await EL.svgPath('base-path', null,{...iconParentPath},null,null,'g.icon-group.download'),
			await EL.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.download'),
			await EL.svgPolyline(null, null,{...specifics.polyline_1},null,null,'g.icon-group.download'),
			await EL.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.download'),
		];
	}
	return icon;
};
export const DragDrop = async (parent = null, title='') =>{
	const specifics = {
		'path_1':{d:'M19 11v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2', stroke:'#000', stroke_width: '1px'},
		'path_2':{d:'M13 13l9 3l-4 2l-2 4l-3 -9', stroke:'#000', stroke_width: '1px'},
		'line_1' :{x1:'3', y1:'3', x2:'3', y2:'3.4', stroke:'#000', stroke_width:'2'},
		'line_2' :{x1:'7', y1:'3', x2:'7', y2:'3.4', stroke:'#000', stroke_width:'2'},
		'line_3' :{x1:'11', y1:'3', x2:'11', y2:'3.4', stroke:'#000', stroke_width:'2'},
		'line_4' :{x1:'15', y1:'3', x2:'15', y2:'3.4', stroke:'#000', stroke_width:'2'},
		'line_5' :{x1:'3', y1:'7', x2:'3', y2:'7.4', stroke:'#000', stroke_width:'2'},
		'line_6' :{x1:'3', y1:'11', x2:'3', y2:'11.4', stroke:'#000', stroke_width:'2'},
		'line_7' :{x1:'3', y1:'15', x2:'3', y2:'15.4', stroke:'#000', stroke_width:'2'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await EL.svg('svg-icon absolute', 'DragDrop', {...iconViewBox},'','',parent),
			await EL.svgTitle(null, null,null,title,null,'svg#DragDrop'),
			await EL.svgGroup('icon-group drag-drop', null,null,null,null,'svg#DragDrop'),
			await EL.svgPath('base-path', null,{...iconParentPath},null,null,'g.icon-group.drag-drop'),
			await EL.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.drag-drop'),
			await EL.svgPath(null, null,{...specifics.path_2},null,null,'g.icon-group.drag-drop'),
			await EL.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.drag-drop'),
			await EL.svgLine(null, null,{...specifics.line_2},null,null,'g.icon-group.drag-drop'),
			await EL.svgLine(null, null,{...specifics.line_3},null,null,'g.icon-group.drag-drop'),
			await EL.svgLine(null, null,{...specifics.line_4},null,null,'g.icon-group.drag-drop'),
			await EL.svgLine(null, null,{...specifics.line_5},null,null,'g.icon-group.drag-drop'),
			await EL.svgLine(null, null,{...specifics.line_6},null,null,'g.icon-group.drag-drop'),
			await EL.svgLine(null, null,{...specifics.line_7},null,null,'g.icon-group.drag-drop'),
		];
	}
	return icon;
};
export const DragDropped = async (parent = null, title='') =>{
	const specifics = {
		'rect_1': {x:'8',y:'8',width:'12',height:'12', rx: '2', stroke:'#000', fill: 'none'},
		'line_1' :{x1:'4', y1:'4', x2:'4', y2:'4.4', stroke:'#000', stroke_width:'2'},
		'line_2' :{x1:'8', y1:'4', x2:'8', y2:'4.4', stroke:'#000', stroke_width:'2'},
		'line_3' :{x1:'12', y1:'4', x2:'12', y2:'4.4', stroke:'#000', stroke_width:'2'},
		'line_4' :{x1:'16', y1:'4', x2:'16', y2:'4.4', stroke:'#000', stroke_width:'2'},
		'line_5' :{x1:'4', y1:'8', x2:'4', y2:'8.4', stroke:'#000', stroke_width:'2'},
		'line_6' :{x1:'4', y1:'12', x2:'4', y2:'12.4', stroke:'#000', stroke_width:'2'},
		'line_7' :{x1:'4', y1:'16', x2:'4', y2:'16.4', stroke:'#000', stroke_width:'2'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await EL.svg('svg-icon absolute', 'DragDropped', {...iconViewBox},'','',parent),
			await EL.svgTitle(null, null,null,title,null,'svg#DragDropped'),
			await EL.svgGroup('icon-group drag-dropped', null,null,null,null,'svg#DragDropped'),
			await EL.svgPath('base-path', null,{...iconParentPath},null,null,'g.icon-group.drag-dropped'),
			await EL.svgRect(null, null,{...specifics.rect_1},null,null,'g.icon-group.drag-dropped'),
			await EL.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.drag-dropped'),
			await EL.svgLine(null, null,{...specifics.line_2},null,null,'g.icon-group.drag-dropped'),
			await EL.svgLine(null, null,{...specifics.line_3},null,null,'g.icon-group.drag-dropped'),
			await EL.svgLine(null, null,{...specifics.line_4},null,null,'g.icon-group.drag-dropped'),
			await EL.svgLine(null, null,{...specifics.line_5},null,null,'g.icon-group.drag-dropped'),
			await EL.svgLine(null, null,{...specifics.line_6},null,null,'g.icon-group.drag-dropped'),
			await EL.svgLine(null, null,{...specifics.line_7},null,null,'g.icon-group.drag-dropped'),
		];
	}
	return icon;
};