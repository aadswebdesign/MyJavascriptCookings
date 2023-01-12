/** svgIcons_C.js */
import * as FT from './../../functions.js';
import * as EL from './../svgElements.js';
export const Calendar = async (parent = null, title='') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'rect_1': {x:'4',y:'5',width:'16',height:'16', rx: '2', stroke:'#000', fill: 'none'},
		'line_1' :{x1:'16', y1:'3', x2:'16', y2:'7', stroke:'#000'},
		'line_2' :{x1:'8', y1:'3', x2:'8', y2:'7', stroke:'#000'},
		'line_3' :{x1:'4', y1:'11', x2:'20', y2:'11', stroke:'#000'},
		'line_4' :{x1:'11', y1:'15', x2:'12', y2:'15', stroke:'#000'},
		'line_5' :{x1:'12', y1:'15', x2:'12', y2:'18', stroke:'#000'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await EL.svg('svg-icon absolute', 'Calendar', {...standards.svg},'','',parent),
			await EL.svgTitle(null, null,null,title,null,'svg#Calendar'),
			await EL.svgGroup('icon-group calendar', null,null,null,null,'svg#Calendar'),
			await EL.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.calendar'),
			await EL.svgRect(null, null,{...specifics.rect_1},null,null,'g.icon-group.calendar'),
			await EL.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.calendar'),
			await EL.svgLine(null, null,{...specifics.line_2},null,null,'g.icon-group.calendar'),
			await EL.svgLine(null, null,{...specifics.line_3},null,null,'g.icon-group.calendar'),
			await EL.svgLine(null, null,{...specifics.line_4},null,null,'g.icon-group.calendar'),
			await EL.svgLine(null, null,{...specifics.line_5},null,null,'g.icon-group.calendar'),
		];
	}
	return icon;
};
export const CaretDown = async (parent = null, title='') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M18 15l-6 -6l-6 6h12', transform:'rotate(180 12 12)', stroke:'#000', stroke_width: '1px'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await EL.svg('svg-icon absolute', 'CaretDown', {...standards.svg},'','',parent),
			await EL.svgTitle(null, null, null, title,null,'svg#CaretDown'),
			await EL.svgGroup('icon-group caret-down', null,null,null,null,'svg#CaretDown'),
			await EL.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.caret-down'),
			await EL.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.caret-down'),
		];
	}
	return icon;
};
export const CaretLeft = async (parent = null, title='') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M18 15l-6 -6l-6 6h12', transform:'rotate(270 12 12)', stroke:'#000', stroke_width: '1px'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await EL.svg('svg-icon absolute', 'CaretLeft', {...standards.svg},'','',parent),
			await EL.svgTitle(null, null,null,title,null,'svg#CaretLeft'),
			await EL.svgGroup('icon-group caret-left', null,null,null,null,'svg#CaretLeft'),
			await EL.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.caret-left'),
			await EL.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.caret-left'),
		];
	}
	return icon;
};
export const CaretRight = async (parent = null, title='') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M18 15l-6 -6l-6 6h12', transform:'rotate(90 12 12)', stroke_width: '1px'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await EL.svg('svg-icon absolute', 'CaretRight', {...standards.svg},'','',parent),
			await EL.svgTitle(null, null,null,title,null,'svg#CaretRight'),
			await EL.svgGroup('icon-group caret-right', null,null,null,null,'svg#CaretRight'),
			await EL.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.caret-right'),
			await EL.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.caret-right'),
		];
	}
	return icon;
};
export const CaretUp = async (parent = null, title='') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M18 15l-6 -6l-6 6h12', stroke:'#000', stroke_width: '1px'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await EL.svg('svg-icon absolute', 'CaretUp', {...standards.svg},'','',parent),
			await EL.svgTitle(null, null,null,title,null,'svg#CaretUp'),
			await EL.svgGroup('icon-group caret-up', null,null,null,null,'svg#CaretUp'),
			await EL.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.caret-up'),
			await EL.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.caret-up'),
		];
	}
	return icon;
};
export const ChevronDown = async (parent = null, title='') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'polyline_1':{points:'6 9 12 15 18 9', stroke:'#000', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await EL.svg('svg-icon absolute', 'ChevronDown', {...standards.svg},'','',parent),
			await EL.svgTitle(null, null,null,title,null,'svg#ChevronDown'),
			await EL.svgGroup('icon-group chevron-down', null,null,null,null,'svg#ChevronDown'),
			await EL.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.chevron-down'),
			await EL.svgPolyline(null, null,{...specifics.polyline_1},null,null,'g.icon-group.chevron-down'),
		];
	}
	return icon;
};
export const ChevronLeft = async (parent = null, title='') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'polyline_1':{points:'15 6 9 12 15 18', stroke:'#000', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await EL.svg('svg-icon absolute', 'ChevronLeft', {...standards.svg},'','',parent),
			await EL.svgTitle(null, null,null,title,null,'svg#ChevronLeft'),
			await EL.svgGroup('icon-group chevron-left', null,null,null,null,'svg#ChevronLeft'),
			await EL.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.chevron-left'),
			await EL.svgPolyline(null, null,{...specifics.polyline_1},null,null,'g.icon-group.chevron-left'),
		];
	}
	return icon;
};
export const ChevronRight = async (parent = null, title='') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'polyline_1':{points:'9 6 15 12 9 18', stroke:'#000', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await EL.svg('svg-icon absolute', 'ChevronRight', {...standards.svg},'','',parent),
			await EL.svgTitle(null, null,null,title,null,'svg#ChevronRight'),
			await EL.svgGroup('icon-group chevron-right', null,null,null,null,'svg#ChevronRight'),
			await EL.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.chevron-right'),
			await EL.svgPolyline(null, null,{...specifics.polyline_1},null,null,'g.icon-group.chevron-right'),
		];
	}
	return icon;
};
export const ChevronUp = async (parent = null, title='') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'polyline_1':{points:'6 15 12 9 18 15', stroke:'#000', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await EL.svg('svg-icon absolute', 'ChevronUp', {...standards.svg},'','',parent),
			await EL.svgTitle(null, null,null,title,null,'svg#ChevronUp'),
			await EL.svgGroup('icon-group chevron-up', null,null,null,null,'svg#ChevronUp'),
			await EL.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.chevron-up'),
			await EL.svgPolyline(null, null,{...specifics.polyline_1},null,null,'g.icon-group.chevron-up'),
		];
	}
	return icon;
};
export const ChevronsDown = async (parent = null, title='') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'polyline_1':{points:'7 7 12 12 17 7', stroke:'#000', fill:'none'},
		'polyline_2':{points:'7 13 12 18 17 13', stroke:'#000', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await EL.svg('svg-icon absolute', 'ChevronsDown', {...standards.svg},'','',parent),
			await EL.svgTitle(null, null,null,title,null,'svg#ChevronsDown'),
			await EL.svgGroup('icon-group chevrons-down', null,null,null,null,'svg#ChevronsDown'),
			await EL.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.chevrons-down'),
			await EL.svgPolyline(null, null,{...specifics.polyline_1},null,null,'g.icon-group.chevrons-down'),
			await EL.svgPolyline(null, null,{...specifics.polyline_2},null,null,'g.icon-group.chevrons-down'),
		];
	}
	return icon;
};
export const ChevronsLeft = async (parent = null, title='') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'polyline_1':{points:'11 7 6 12 11 17', stroke:'#000', fill:'none'},
		'polyline_2':{points:'17 7 12 12 17 17', stroke:'#000', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await EL.svg('svg-icon absolute', 'ChevronsLeft', {...standards.svg},'','',parent),
			await EL.svgTitle(null, null,null,title,null,'svg#ChevronsLeft'),
			await EL.svgGroup('icon-group chevrons-left', null,null,null,null,'svg#ChevronsLeft'),
			await EL.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.chevrons-left'),
			await EL.svgPolyline(null, null,{...specifics.polyline_1},null,null,'g.icon-group.chevrons-left'),
			await EL.svgPolyline(null, null,{...specifics.polyline_2},null,null,'g.icon-group.chevrons-left'),
		];
	}
	return icon;
};
export const ChevronsRight = async (parent = null, title='') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'polyline_1':{points:'7 7 12 12 7 17', stroke:'#000', fill:'none'},
		'polyline_2':{points:'13 7 18 12 13 17', stroke:'#000', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await EL.svg('svg-icon absolute', 'ChevronsRight', {...standards.svg},'','',parent),
			await EL.svgTitle(null, null,null,title,null,'svg#ChevronsRight'),
			await EL.svgGroup('icon-group chevrons-right', null,null,null,null,'svg#ChevronsRight'),
			await EL.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.chevrons-right'),
			await EL.svgPolyline(null, null,{...specifics.polyline_1},null,null,'g.icon-group.chevrons-right'),
			await EL.svgPolyline(null, null,{...specifics.polyline_2},null,null,'g.icon-group.chevrons-right'),
		];
	}
	return icon;
};
export const ChevronsUp = async (parent = null, title='') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'polyline_1':{points:'7 11 12 6 17 11', stroke:'#000', fill:'none'},
		'polyline_2':{points:'7 17 12 12 17 17', stroke:'#000', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await EL.svg('svg-icon absolute', 'ChevronsUp', {...standards.svg},'','',parent),
			await EL.svgTitle(null, null,null,title,null,'svg#ChevronsUp'),
			await EL.svgGroup('icon-group chevrons-up', null,null,null,null,'svg#ChevronsUp'),
			await EL.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.chevrons-up'),
			await EL.svgPolyline(null, null,{...specifics.polyline_1},null,null,'g.icon-group.chevrons-up'),
			await EL.svgPolyline(null, null,{...specifics.polyline_2},null,null,'g.icon-group.chevrons-up'),
		];
	}
	return icon;
};
export const Circle = async (parent = null, title='') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'circle_1':{cx:'12',cy:'12',r:'9', stroke:'#000', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await EL.svg('svg-icon absolute', 'Circle', {...standards.svg},'','',parent),
			await EL.svgTitle(null, null,null,title,null,'svg#Circle'),
			await EL.svgGroup('icon-group circle', null,null,null,null,'svg#Circle'),
			await EL.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.circle'),
			await EL.svgCircle(null,null,{...specifics.circle_1},null,null,'g.icon-group.circle'),
		];
	}
	return icon;
};
export const CircleMinus = async (parent = null, title='') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'circle_1':{cx:'12',cy:'12',r:'9', stroke:'#000', fill:'none'},
		'line_1' :{x1:'9', y1:'12', x2:'15', y2:'12', stroke:'#000'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await EL.svg('svg-icon absolute', 'CircleMinus', {...standards.svg},'','',parent),
			await EL.svgTitle(null, null,null,title,null,'svg#CircleMinus'),
			await EL.svgGroup('icon-group circle-minus', null,null,null,null,'svg#CircleMinus'),
			await EL.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.circle-minus'),
			await EL.svgCircle(null,null,{...specifics.circle_1},null,null,'g.icon-group.circle-minus'),
			await EL.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.circle-minus'),
		];
	}
	return icon;
};
export const CircleOff = async (parent = null, title='') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M20.042 16.045a9 9 0 0 0 -12.087 -12.087m-2.318 1.677a9 9 0 1 0 12.725 12.73', stroke:'#000', stroke_width: '1px', fill: 'none'},
		'path_2':{d:'M3 3l18 18', stroke:'#000', stroke_width: '1px', fill: 'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await EL.svg('svg-icon absolute', 'CircleOff', {...standards.svg},'','',parent),
			await EL.svgTitle(null, null,null,title,null,'svg#CircleOff'),
			await EL.svgGroup('icon-group circle-off', null,null,null,null,'svg#CircleOff'),
			await EL.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.circle-off'),
			await EL.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.circle-off'),
			await EL.svgPath(null, null,{...specifics.path_2},null,null,'g.icon-group.circle-off'),
		];
	}
	return icon;
};
export const CirclePlus = async (parent = null, title='') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'circle_1':{cx:'12',cy:'12',r:'9', stroke:'#000', fill:'none'},
		'line_1' :{x1:'9', y1:'12', x2:'15', y2:'12', stroke:'#000'},
		'line_2' :{x1:'12', y1:'9', x2:'12', y2:'15', stroke:'#000'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await EL.svg('svg-icon absolute', 'CirclePlus', {...standards.svg},'','',parent),
			await EL.svgTitle(null, null,null,title,null,'svg#CirclePlus'),
			await EL.svgGroup('icon-group circle-plus', null,null,null,null,'svg#CirclePlus'),
			await EL.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.circle-plus'),
			await EL.svgCircle(null,null,{...specifics.circle_1},null,null,'g.icon-group.circle-plus'),
			await EL.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.circle-plus'),
			await EL.svgLine(null, null,{...specifics.line_2},null,null,'g.icon-group.circle-plus'),
		];
	}
	return icon;
};
export const CircleX = async (parent = null, title='') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'circle_1':{cx:'12',cy:'12',r:'9', stroke:'#000', fill:'none'},
		'path_1':{d:'M10 10l4 4m0 -4l-4 4', stroke:'#000', stroke_width: '1px', fill: 'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await EL.svg('svg-icon absolute', 'CircleX', {...standards.svg},'','',parent),
			await EL.svgTitle(null, null,null,title,null,'svg#CircleX'),
			await EL.svgGroup('icon-group circle-x', null,null,null,null,'svg#CircleX'),
			await EL.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.circle-x'),
			await EL.svgCircle(null,null,{...specifics.circle_1},null,null,'g.icon-group.circle-x'),
			await EL.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.circle-x'),
		];
	}
	return icon;
};
export const ClearAll = async (parent = null, title='') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M8 6h12', stroke:'#000', stroke_width: '1px', fill: 'none'},
		'path_2':{d:'M6 12h12', stroke:'#000', stroke_width: '1px', fill: 'none'},
		'path_3':{d:'M4 18h12', stroke:'#000', stroke_width: '1px', fill: 'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await EL.svg('svg-icon absolute', 'ClearAll', {...standards.svg},'','',parent),
			await EL.svgTitle(null, null,null,title,null,'svg#ClearAll'),
			await EL.svgGroup('icon-group clear-all', null,null,null,null,'svg#ClearAll'),
			await EL.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.clear-all'),
			await EL.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.clear-all'),
			await EL.svgPath(null, null,{...specifics.path_2},null,null,'g.icon-group.clear-all'),
			await EL.svgPath(null, null,{...specifics.path_3},null,null,'g.icon-group.clear-all'),
		];
	}
	return icon;
};
export const ClearFormatting = async (parent = null, title='') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M17 15l4 4m0 -4l-4 4', stroke:'#000', stroke_width: '1px', fill: 'none'},
		'path_2':{d:'M7 6v-1h11v1', stroke:'#000', stroke_width: '1px', fill: 'none'},
		'line_1':{x1:'7', y1:'19', x2:'11', y2:'19', stroke:'#000'},
		'line_2':{x1:'13', y1:'5', x2:'9', y2:'19', stroke:'#000'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await EL.svg('svg-icon absolute', 'ClearFormatting', {...standards.svg},'','',parent),
			await EL.svgTitle(null, null,null,title,null,'svg#ClearFormatting'),
			await EL.svgGroup('icon-group clear-formatting', null,null,null,null,'svg#ClearFormatting'),
			await EL.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.clear-formatting'),
			await EL.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.clear-formatting'),
			await EL.svgPath(null, null,{...specifics.path_2},null,null,'g.icon-group.clear-formatting'),
			await EL.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.clear-formatting'),
			await EL.svgLine(null, null,{...specifics.line_2},null,null,'g.icon-group.clear-formatting'),
		];
	}
	return icon;
};
export const CodeMinus = async (parent = null, title='') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M9 12h6', stroke:'#000', stroke_width: '1px', fill: 'none'},
		'path_2':{d:'M6 19a2 2 0 0 1 -2 -2v-4l-1 -1l1 -1v-4a2 2 0 0 1 2 -2', stroke:'#000', stroke_width: '1px', fill: 'none'},
		'path_3':{d:'M18 19a2 2 0 0 0 2 -2v-4l1 -1l-1 -1v-4a2 2 0 0 0 -2 -2', stroke:'#000', stroke_width: '1px', fill: 'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await EL.svg('svg-icon absolute', 'CodeMinus', {...standards.svg},'','',parent),
			await EL.svgTitle(null, null,null,title,null,'svg#CodeMinus'),
			await EL.svgGroup('icon-group code-minus', null,null,null,null,'svg#CodeMinus'),
			await EL.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.code-minus'),
			await EL.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.code-minus'),
			await EL.svgPath(null, null,{...specifics.path_2},null,null,'g.icon-group.code-minus'),
			await EL.svgPath(null, null,{...specifics.path_3},null,null,'g.icon-group.code-minus'),
		];
	}
	return icon;
};
export const CodePlus = async (parent = null, title='') =>{//todo shape
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M9 12h6', stroke:'#000', stroke_width: '1px', fill: 'none'},
		'path_2':{d:'M6 19a2 2 0 0 1 -2 -2v-4l-1 -1l1 -1v-4a2 2 0 0 1 2 -2', stroke:'#000', stroke_width: '1px', fill: 'none'},
		'path_3':{d:'M18 19a2 2 0 0 0 2 -2v-4l1 -1l-1 -1v-4a2 2 0 0 0 -2 -2', stroke:'#000', stroke_width: '1px', fill: 'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await EL.svg('svg-icon absolute', 'CodePlus', {...standards.svg},'','',parent),
			await EL.svgTitle(null, null,null,title,null,'svg#CodePlus'),
			await EL.svgGroup('icon-group code-plus', null,null,null,null,'svg#CodePlus'),
			await EL.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.code-plus'),
			await EL.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.code-plus'),
			await EL.svgPath(null, null,{...specifics.path_2},null,null,'g.icon-group.code-plus'),
			await EL.svgPath(null, null,{...specifics.path_3},null,null,'g.icon-group.code-plus'),
		];
	}
	return icon;
};
export const Code = async (parent = null, title='') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'polyline_1':{points:'7 8 3 12 7 16', stroke:'#000', fill:'none'},
		'polyline_2':{points:'17 8 21 12 17 16', stroke:'#000', fill:'none'},
		'line_1':{x1:'4', y1:'4', x2:'10', y2:'20', stroke:'#000'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await EL.svg('svg-icon absolute', 'Code', {...standards.svg},'','',parent),
			await EL.svgTitle(null, null,null,title,null,'svg#Code'),
			await EL.svgGroup('icon-group code', null,null,null,null,'svg#Code'),
			await EL.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.code'),
			await EL.svgPolyline(null, null,{...specifics.polyline_1},null,null,'g.icon-group.code'),
			await EL.svgPolyline(null, null,{...specifics.polyline_2},null,null,'g.icon-group.code'),
			await EL.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.code'),
		];
	}
	return icon;
};
export const ColorPicker = async (parent = null, title='') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M11 7l6 6', stroke:'#000', stroke_width: '1px', fill: 'none'},
		'path_2':{d:'M4 16l11.7 -11.7a1 1 0 0 1 1.4 0l2.6 2.6a1 1 0 0 1 0 1.4l-11.7 11.7h-4v-4z', stroke:'#000', stroke_width: '1px', fill: 'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await EL.svg('svg-icon absolute', 'ColorPicker', {...standards.svg},'','',parent),
			await EL.svgTitle(null, null,null,title,null,'svg#ColorPicker'),
			await EL.svgGroup('icon-group color-picker', null,null,null,null,'svg#ColorPicker'),
			await EL.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.color-picker'),
			await EL.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.color-picker'),
			await EL.svgPath(null, null,{...specifics.path_2},null,null,'g.icon-group.color-picker'),
		];
	}
	return icon;
};
export const ColorSwatch = async (parent = null, title='') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M19 3h-4a2 2 0 0 0 -2 2v12a4 4 0 0 0 8 0v-12a2 2 0 0 0 -2 -2', stroke:'#000', stroke_width: '1px', fill: 'none'},
		'path_2':{d:'M13 7.35l-2 -2a2 2 0 0 0 -2.828 0l-2.828 2.828a2 2 0 0 0 0 2.828l9 9', stroke:'#000', stroke_width: '1px', fill: 'none'},
		'path_3':{d:'M7.3 13h-2.3a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h12', stroke:'#000', stroke_width: '1px', fill: 'none'},
		'line_1':{x1:'17', y1:'17', x2:'17', y2:'17.01', stroke:'#000'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await EL.svg('svg-icon absolute', 'ColorSwatch', {...standards.svg},'','',parent),
			await EL.svgTitle(null, null,null,title,null,'svg#ColorSwatch'),
			await EL.svgGroup('icon-group color-swatch', null,null,null,null,'svg#ColorSwatch'),
			await EL.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.color-swatch'),
			await EL.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.color-swatch'),
			await EL.svgPath(null, null,{...specifics.path_2},null,null,'g.icon-group.color-swatch'),
			await EL.svgPath(null, null,{...specifics.path_3},null,null,'g.icon-group.color-swatch'),
			await EL.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.color-swatch'),
		];
	}
	return icon;
};
export const Command = async (parent = null, title='') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M7 9a2 2 0 1 1 2 -2v10a2 2 0 1 1 -2 -2h10a2 2 0 1 1 -2 2v-10a2 2 0 1 1 2 2h-10', stroke:'#000', stroke_width: '1px', fill: 'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await EL.svg('svg-icon absolute', 'Command', {...standards.svg},'','',parent),
			await EL.svgTitle(null, null,null,title,null,'svg#Command'),
			await EL.svgGroup('icon-group command', null,null,null,null,'svg#Command'),
			await EL.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.command'),
			await EL.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.command'),
		];
	}
	return icon;
};
export const Crop = async (parent = null, title='') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M8 5v10a1 1 0 0 0 1 1h10', stroke:'#000', stroke_width: '1px', fill: 'none'},
		'path_2':{d:'M5 8h10a1 1 0 0 1 1 1v10', stroke:'#000', stroke_width: '1px', fill: 'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await EL.svg('svg-icon absolute', 'Crop', {...standards.svg},'','',parent),
			await EL.svgTitle(null, null,null,title,null,'svg#Crop'),
			await EL.svgGroup('icon-group crop', null,null,null,null,'svg#Crop'),
			await EL.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.crop'),
			await EL.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.crop'),
			await EL.svgPath(null, null,{...specifics.path_2},null,null,'g.icon-group.crop'),
		];
	}
	return icon;
};
export const Crosshair = async (parent = null, title='') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M0 0h24v24H0z', stroke:'#000', stroke_width: '1px', fill: 'none'},
		'path_2':{d:'M4 8v-2a2 2 0 0 1 2 -2h2', stroke:'#000', stroke_width: '1px', fill: 'none'},
		'path_3':{d:'M4 16v2a2 2 0 0 0 2 2h2', stroke:'#000', stroke_width: '1px', fill: 'none'},
		'path_4':{d:'M16 4h2a2 2 0 0 1 2 2v2', stroke:'#000', stroke_width: '1px', fill: 'none'},
		'path_5':{d:'M16 20h2a2 2 0 0 0 2 -2v-2', stroke:'#000', stroke_width: '1px', fill: 'none'},
		'line_1' :{x1:'9', y1:'12', x2:'15', y2:'12', stroke:'#000'},
		'line_2' :{x1:'12', y1:'9', x2:'12', y2:'15', stroke:'#000'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await EL.svg('svg-icon absolute', 'Crosshair', {...standards.svg},'','',parent),
			await EL.svgTitle(null, null,null,title,null,'svg#Crosshair'),
			await EL.svgGroup('icon-group crosshair', null,null,null,null,'svg#Crosshair'),
			await EL.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.crosshair'),
			await EL.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.crosshair'),
			await EL.svgPath(null, null,{...specifics.path_2},null,null,'g.icon-group.crosshair'),
			await EL.svgPath(null, null,{...specifics.path_3},null,null,'g.icon-group.crosshair'),
			await EL.svgPath(null, null,{...specifics.path_4},null,null,'g.icon-group.crosshair'),
			await EL.svgPath(null, null,{...specifics.path_5},null,null,'g.icon-group.crosshair'),
			await EL.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.crosshair'),
			await EL.svgLine(null, null,{...specifics.line_2},null,null,'g.icon-group.crosshair'),
		];
	}
	return icon;
};
export const CurrencyDollar = async (parent = null, title='') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M16.7 8a3 3 0 0 0 -2.7 -2h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1 -2.7 -2', stroke:'#000', stroke_width: '1px', fill: 'none'},
		'path_2':{d:'M12 3v3m0 12v3', stroke:'#000', stroke_width: '1px', fill: 'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await EL.svg('svg-icon absolute', 'CurrencyDollar', {...standards.svg},'','',parent),
			await EL.svgTitle(null, null,null,title,null,'svg#CurrencyDollar'),
			await EL.svgGroup('icon-group currency-dollar', null,null,null,null,'svg#CurrencyDollar'),
			await EL.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.currency-dollar'),
			await EL.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.currency-dollar'),
			await EL.svgPath(null, null,{...specifics.path_2},null,null,'g.icon-group.currency-dollar'),
		];
	}
	return icon;
};
export const CurrencyEuro = async (parent = null, title='') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M17.2 7a6 7 0 1 0 0 10', stroke:'#000', stroke_width: '1px', fill: 'none'},
		'path_2':{d:'M13 10h-8m0 4h8', stroke:'#000', stroke_width: '1px', fill: 'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await EL.svg('svg-icon absolute', 'CurrencyEuro', {...standards.svg},'','',parent),
			await EL.svgTitle(null, null,null,title,null,'svg#CurrencyEuro'),
			await EL.svgGroup('icon-group currency-euro', null,null,null,null,'svg#CurrencyEuro'),
			await EL.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.currency-euro'),
			await EL.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.currency-euro'),
			await EL.svgPath(null, null,{...specifics.path_2},null,null,'g.icon-group.currency-uro'),
		];
	}
	return icon;
};
export const CurrentLocation = async (parent = null, title='') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'circle_1':{cx:'12',cy:'12',r:'3', stroke:'#000', fill:'none'},
		'circle_2':{cx:'12',cy:'12',r:'8', stroke:'#000', fill:'none'},
		'line_1' :{x1:'12', y1:'2', x2:'12', y2:'4', stroke:'#000'},
		'line_2' :{x1:'12', y1:'20', x2:'12', y2:'22', stroke:'#000'},
		'line_3' :{x1:'20', y1:'12', x2:'22', y2:'12', stroke:'#000'},
		'line_4' :{x1:'2', y1:'12', x2:'4', y2:'12', stroke:'#000'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await EL.svg('svg-icon absolute', 'CurrentLocation', {...standards.svg},'','',parent),
			await EL.svgTitle(null, null,null,title,null,'svg#CurrentLocation'),
			await EL.svgGroup('icon-group current-location', null,null,null,null,'svg#CurrentLocation'),
			await EL.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.current-location'),
			await EL.svgCircle(null,null,{...specifics.circle_1},null,null,'g.icon-group.current-location'),
			await EL.svgCircle(null,null,{...specifics.circle_2},null,null,'g.icon-group.current-location'),
			await EL.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.current-location'),
			await EL.svgLine(null, null,{...specifics.line_2},null,null,'g.icon-group.current-location'),
			await EL.svgLine(null, null,{...specifics.line_3},null,null,'g.icon-group.current-location'),
			await EL.svgLine(null, null,{...specifics.line_4},null,null,'g.icon-group.current-location'),
		];
	}
	return icon;
};
export const CursorText = async (parent = null, title='') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M10 12h4', stroke:'#000', stroke_width: '1px', fill: 'none'},
		'path_2':{d:'M9 4a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3', stroke:'#000', stroke_width: '1px', fill: 'none'},
		'path_3':{d:'M15 4a3 3 0 0 0 -3 3v10a3 3 0 0 0 3 3', stroke:'#000', stroke_width: '1px', fill: 'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await EL.svg('svg-icon absolute', 'CursorText', {...standards.svg},'','',parent),
			await EL.svgTitle(null, null,null,title,null,'svg#CursorText'),
			await EL.svgGroup('icon-group cursor-text', null,null,null,null,'svg#CursorText'),
			await EL.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.cursor-text'),
			await EL.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.cursor-text'),
			await EL.svgPath(null, null,{...specifics.path_2},null,null,'g.icon-group.cursor-text'),
			await EL.svgPath(null, null,{...specifics.path_3},null,null,'g.icon-group.cursor-text'),
		];
	}
	return icon;
};
export const Cut = async (parent = null, title='') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'circle_1':{cx:'7',cy:'17',r:'3', stroke:'#000', fill:'none'},
		'circle_2':{cx:'17',cy:'17',r:'3', stroke:'#000', fill:'none'},
		'line_1' :{x1:'9.15', y1:'14.85', x2:'18', y2:'4', stroke:'#000'},
		'line_2' :{x1:'6', y1:'4', x2:'14.85', y2:'14.85', stroke:'#000'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await EL.svg('svg-icon absolute', 'Cut', {...standards.svg},'','',parent),
			await EL.svgTitle(null, null,null,title,null,'svg#Cut'),
			await EL.svgGroup('icon-group cut', null,null,null,null,'svg#Cut'),
			await EL.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.cut'),
			await EL.svgCircle(null,null,{...specifics.circle_1},null,null,'g.icon-group.cut'),
			await EL.svgCircle(null,null,{...specifics.circle_2},null,null,'g.icon-group.cut'),
			await EL.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.cut'),
			await EL.svgLine(null, null,{...specifics.line_2},null,null,'g.icon-group.cut'),
		];
	}
	return icon;
};