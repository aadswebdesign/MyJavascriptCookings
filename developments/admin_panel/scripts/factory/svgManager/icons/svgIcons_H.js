/** svgIcons_H.js */
import * as FT from './../../functions.js';
import * as EL from './../svgElements.js';
export const H1 = async (parent = null, title='') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M19 18v-8l-2 2', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_2':{d:'M4 6v12', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_3':{d:'M12 6v12', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_4':{d:'M11 18h2', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_5':{d:'M3 18h2', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_6':{d:'M4 12h8', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_7':{d:'M3 6h2', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_8':{d:'M11 6h2', stroke:'#000', stroke_width: '1px', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await EL.svg('svg-icon absolute', 'H1', {...standards.svg},'','',parent),
			await EL.svgTitle(null, null,null,title,null,'svg#H1'),
			await EL.svgGroup('icon-group h-1', null,null,null,null,'svg#H1'),
			await EL.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.h-1'),
			await EL.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.h-1'),
			await EL.svgPath(null, null,{...specifics.path_2},null,null,'g.icon-group.h-1'),
			await EL.svgPath(null, null,{...specifics.path_3},null,null,'g.icon-group.h-1'),
			await EL.svgPath(null, null,{...specifics.path_4},null,null,'g.icon-group.h-1'),
			await EL.svgPath(null, null,{...specifics.path_5},null,null,'g.icon-group.h-1'),
			await EL.svgPath(null, null,{...specifics.path_6},null,null,'g.icon-group.h-1'),
			await EL.svgPath(null, null,{...specifics.path_7},null,null,'g.icon-group.h-1'),
			await EL.svgPath(null, null,{...specifics.path_8},null,null,'g.icon-group.h-1'),
		];		
	}
	return icon;
};
export const H2 = async (parent = null, title='') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M17 12a2 2 0 1 1 4 0c0 .591 -.417 1.318 -.816 1.858l-3.184 4.143l4 -.001', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_2':{d:'M4 6v12', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_3':{d:'M12 6v12', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_4':{d:'M11 18h2', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_5':{d:'M3 18h2', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_6':{d:'M4 12h8', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_7':{d:'M3 6h2', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_8':{d:'M11 6h2', stroke:'#000', stroke_width: '1px', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await EL.svg('svg-icon absolute', 'H2', {...standards.svg},'','',parent),
			await EL.svgTitle(null, null,null,title,null,'svg#H2'),
			await EL.svgGroup('icon-group h-2', null,null,null,null,'svg#H2'),
			await EL.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.h-2'),
			await EL.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.h-2'),
			await EL.svgPath(null, null,{...specifics.path_2},null,null,'g.icon-group.h-2'),
			await EL.svgPath(null, null,{...specifics.path_3},null,null,'g.icon-group.h-2'),
			await EL.svgPath(null, null,{...specifics.path_4},null,null,'g.icon-group.h-2'),
			await EL.svgPath(null, null,{...specifics.path_5},null,null,'g.icon-group.h-2'),
			await EL.svgPath(null, null,{...specifics.path_6},null,null,'g.icon-group.h-2'),
			await EL.svgPath(null, null,{...specifics.path_7},null,null,'g.icon-group.h-2'),
			await EL.svgPath(null, null,{...specifics.path_8},null,null,'g.icon-group.h-2'),
		];		
	}
	return icon;
};
export const H3 = async (parent = null, title='') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M19 14a2 2 0 1 0 -2 -2', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_2':{d:'M17 16a2 2 0 1 0 2 -2', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_3':{d:'M4 6v12', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_4':{d:'M12 6v12', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_5':{d:'M11 18h2', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_6':{d:'M3 18h2', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_7':{d:'M4 12h8', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_8':{d:'M3 6h2', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_9':{d:'M11 6h2', stroke:'#000', stroke_width: '1px', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await EL.svg('svg-icon absolute', 'H3', {...standards.svg},'','',parent),
			await EL.svgTitle(null, null,null,title,null,'svg#H3'),
			await EL.svgGroup('icon-group h-3', null,null,null,null,'svg#H3'),
			await EL.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.h-3'),
			await EL.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.h-3'),
			await EL.svgPath(null, null,{...specifics.path_2},null,null,'g.icon-group.h-3'),
			await EL.svgPath(null, null,{...specifics.path_3},null,null,'g.icon-group.h-3'),
			await EL.svgPath(null, null,{...specifics.path_4},null,null,'g.icon-group.h-3'),
			await EL.svgPath(null, null,{...specifics.path_5},null,null,'g.icon-group.h-3'),
			await EL.svgPath(null, null,{...specifics.path_6},null,null,'g.icon-group.h-3'),
			await EL.svgPath(null, null,{...specifics.path_7},null,null,'g.icon-group.h-3'),
			await EL.svgPath(null, null,{...specifics.path_8},null,null,'g.icon-group.h-3'),
			await EL.svgPath(null, null,{...specifics.path_9},null,null,'g.icon-group.h-3'),
		];		
	}
	return icon;
};
export const H4 = async (parent = null, title='') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M20 18v-8l-4 6h5', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_2':{d:'M4 6v12', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_3':{d:'M12 6v12', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_4':{d:'M11 18h2', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_5':{d:'M3 18h2', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_6':{d:'M4 12h8', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_7':{d:'M3 6h2', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_8':{d:'M11 6h2', stroke:'#000', stroke_width: '1px', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await EL.svg('svg-icon absolute', 'H4', {...standards.svg},'','',parent),
			await EL.svgTitle(null, null,null,title,null,'svg#H4'),
			await EL.svgGroup('icon-group h-4', null,null,null,null,'svg#H4'),
			await EL.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.h-4'),
			await EL.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.h-4'),
			await EL.svgPath(null, null,{...specifics.path_2},null,null,'g.icon-group.h-4'),
			await EL.svgPath(null, null,{...specifics.path_3},null,null,'g.icon-group.h-4'),
			await EL.svgPath(null, null,{...specifics.path_4},null,null,'g.icon-group.h-4'),
			await EL.svgPath(null, null,{...specifics.path_5},null,null,'g.icon-group.h-4'),
			await EL.svgPath(null, null,{...specifics.path_6},null,null,'g.icon-group.h-4'),
			await EL.svgPath(null, null,{...specifics.path_7},null,null,'g.icon-group.h-4'),
			await EL.svgPath(null, null,{...specifics.path_8},null,null,'g.icon-group.h-4'),
		];		
	}
	return icon;
};
export const H5 = async (parent = null, title='') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M17 18h2a2 2 0 1 0 0 -4h-2v-4h4', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_2':{d:'M4 6v12', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_3':{d:'M12 6v12', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_4':{d:'M11 18h2', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_5':{d:'M3 18h2', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_6':{d:'M4 12h8', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_7':{d:'M3 6h2', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_8':{d:'M11 6h2', stroke:'#000', stroke_width: '1px', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await EL.svg('svg-icon absolute', 'h5', {...standards.svg},'','',parent),
			await EL.svgTitle(null, null,null,title,null,'svg#h5'),
			await EL.svgGroup('icon-group h-5', null,null,null,null,'svg#h5'),
			await EL.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.h-5'),
			await EL.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.h-5'),
			await EL.svgPath(null, null,{...specifics.path_2},null,null,'g.icon-group.h-5'),
			await EL.svgPath(null, null,{...specifics.path_3},null,null,'g.icon-group.h-5'),
			await EL.svgPath(null, null,{...specifics.path_4},null,null,'g.icon-group.h-5'),
			await EL.svgPath(null, null,{...specifics.path_5},null,null,'g.icon-group.h-5'),
			await EL.svgPath(null, null,{...specifics.path_6},null,null,'g.icon-group.h-5'),
			await EL.svgPath(null, null,{...specifics.path_7},null,null,'g.icon-group.h-5'),
			await EL.svgPath(null, null,{...specifics.path_8},null,null,'g.icon-group.h-5'),
		];		
	}
	return icon;
};
export const H6 = async (parent = null, title='') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'circle_1':{cx:'19',cy:'16',r:'2', evenodd:'',transform:'rotate(180 19 16)', stroke:'#000', fill:'none'},
		'path_1':{d:'M21 12a2 2 0 1 0 -4 0v4', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_2':{d:'M4 6v12', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_3':{d:'M12 6v12', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_4':{d:'M11 18h2', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_5':{d:'M3 18h2', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_6':{d:'M4 12h8', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_7':{d:'M3 6h2', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_8':{d:'M11 6h2', stroke:'#000', stroke_width: '1px', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await EL.svg('svg-icon absolute', 'H6', {...standards.svg},'','',parent),
			await EL.svgTitle(null, null,null,title,null,'svg#H6'),
			await EL.svgGroup('icon-group h-6', null,null,null,null,'svg#H6'),
			await EL.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.h-6'),
			await EL.svgCircle(null,null,{...specifics.circle_1},null,null,'g.icon-group.h-6'),
			await EL.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.h-6'),
			await EL.svgPath(null, null,{...specifics.path_2},null,null,'g.icon-group.h-6'),
			await EL.svgPath(null, null,{...specifics.path_3},null,null,'g.icon-group.h-6'),
			await EL.svgPath(null, null,{...specifics.path_4},null,null,'g.icon-group.h-6'),
			await EL.svgPath(null, null,{...specifics.path_5},null,null,'g.icon-group.h-6'),
			await EL.svgPath(null, null,{...specifics.path_6},null,null,'g.icon-group.h-6'),
			await EL.svgPath(null, null,{...specifics.path_7},null,null,'g.icon-group.h-6'),
			await EL.svgPath(null, null,{...specifics.path_8},null,null,'g.icon-group.h-6'),
		];		
	}
	return icon;
};
export const Heading = async (parent = null, title='') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M7 12h10', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_2':{d:'M7 4v16', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_3':{d:'M17 4v16', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_4':{d:'M15 20h4', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_5':{d:'M15 4h4', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_6':{d:'M5 20h4', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_7':{d:'M5 4h4', stroke:'#000', stroke_width: '1px', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await EL.svg('svg-icon absolute', 'Heading', {...standards.svg},'','',parent),
			await EL.svgTitle(null, null,null,title,null,'svg#Heading'),
			await EL.svgGroup('icon-group heading', null,null,null,null,'svg#Heading'),
			await EL.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.heading'),
			await EL.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.heading'),
			await EL.svgPath(null, null,{...specifics.path_2},null,null,'g.icon-group.heading'),
			await EL.svgPath(null, null,{...specifics.path_3},null,null,'g.icon-group.heading'),
			await EL.svgPath(null, null,{...specifics.path_4},null,null,'g.icon-group.heading'),
			await EL.svgPath(null, null,{...specifics.path_5},null,null,'g.icon-group.heading'),
			await EL.svgPath(null, null,{...specifics.path_6},null,null,'g.icon-group.heading'),
			await EL.svgPath(null, null,{...specifics.path_7},null,null,'g.icon-group.heading'),
		];		
	}
	return icon;
};
export const Heart = async (parent = null, title='') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572', stroke:'#000', stroke_width: '1px', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await EL.svg('svg-icon absolute', 'Heart', {...standards.svg},'','',parent),
			await EL.svgTitle(null, null,null,title,null,'svg#Heart'),
			await EL.svgGroup('icon-group heart', null,null,null,null,'svg#Heart'),
			await EL.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.heart'),
			await EL.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.heart'),
		];		
	}
	return icon;
};
export const Help = async (parent = null, title='') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'circle_1':{cx:'12',cy:'12',r:'9', stroke:'#000', fill:'none'},
		'line_1' :{x1:'12', y1:'17', x2:'12', y2:'17.1', stroke:'#000', stroke_width: '2px'},
		'path_1':{d:'M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4', stroke:'#000', stroke_width: '1px', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await EL.svg('svg-icon absolute', 'Help', {...standards.svg},'','',parent),
			await EL.svgTitle(null, null,null,title,null,'svg#Help'),
			await EL.svgGroup('icon-group help', null,null,null,null,'svg#Help'),
			await EL.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.help'),
			await EL.svgCircle(null,null,{...specifics.circle_1},null,null,'g.icon-group.help'),
			await EL.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.help'),
			await EL.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.help'),
		];		
	}
	return icon;
};
export const History = async (parent = null, title='') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'polyline_1':{points:'12 8 12 12 14 14', stroke:'#000', fill:'none'},
		'path_1':{d:'M3.05 11a9 9 0 1 1 .5 4m-.5 5v-5h5', stroke:'#000', stroke_width: '1px', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await EL.svg('svg-icon absolute', 'History', {...standards.svg},'','',parent),
			await EL.svgTitle(null, null,null,title,null,'svg#History'),
			await EL.svgGroup('icon-group history', null,null,null,null,'svg#History'),
			await EL.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.history'),
			await EL.svgPolyline(null, null,{...specifics.polyline_1},null,null,'g.icon-group.history'),
			await EL.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.history'),
		];		
	}
	return icon;
};
export const Home = async (parent = null, title='') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'polyline_1':{points:'5 12 3 12 12 3 21 12 19 12', stroke:'#000', fill:'none'},
		'path_1':{d:'M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_2':{d:'M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6', stroke:'#000', stroke_width: '1px', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await EL.svg('svg-icon absolute', 'Home', {...standards.svg},'','',parent),
			await EL.svgTitle(null, null,null,title,null,'svg#Home'),
			await EL.svgGroup('icon-group home', null,null,null,null,'svg#Home'),
			await EL.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.home'),
			await EL.svgPolyline(null, null,{...specifics.polyline_1},null,null,'g.icon-group.home'),
			await EL.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.home'),
			await EL.svgPath(null, null,{...specifics.path_2},null,null,'g.icon-group.home'),
		];		
	}
	return icon;
};
