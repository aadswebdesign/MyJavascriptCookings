/**
 * @file: svgElements.js
 * @author: Aad Pouw 
 * @description: 
 * @note: 
 */
import * as FT from './../functions.js';
export const svg = async ( _class, _id, _atts, _content, _tpl,_parent, _replace) => {
	return await FT.createSvgHelper('svg', _class, _id, _atts, _content, _tpl,_parent, _replace); 
 };
export const svgAnchor = async (_class, _id, _atts, _content, _tpl,_parent, _replace) => {
	return await FT.createSvgHelper('a',_class, _id, _atts, _content, _tpl,_parent, _replace); 
 };
export const svgCircle = async (_class, _id, _atts, _content, _tpl,_parent, _replace) => {
	return await FT.createSvgHelper('circle',_class, _id, _atts, _content, _tpl,_parent, _replace); 
 };
export const svgDefs = async (_class, _id, _atts, _content, _tpl,_parent, _replace) => {
	return await FT.createSvgHelper('defs',_class, _id, _atts, _content, _tpl,_parent, _replace); 
 };
export const svgEllipse = async (_class, _id, _atts, _content, _tpl,_parent, _replace) => {
	return await FT.createSvgHelper('ellipse',_class, _id, _atts, _content, _tpl,_parent, _replace); 
 };
export const svgGroup = async ( _class, _id, _atts, _content, _tpl,_parent, _replace) => {
	return await FT.createSvgHelper('g', _class, _id, _atts, _content, _tpl,_parent, _replace); 
 };
export const svgImage = async (_class, _id, _atts, _content, _tpl,_parent, _replace) => {
	return await FT.createSvgHelper('Image',_class, _id, _atts, _content, _tpl,_parent, _replace); 
 };
export const svgLine = async (_class, _id, _atts, _content, _tpl,_parent, _replace) => {
	return await FT.createSvgHelper('line',_class, _id, _atts, _content, _tpl,_parent, _replace); 
 };
export const svgLinearGradient = async (_class, _id, _atts, _content, _tpl,_parent, _replace) => {
	return await FT.createSvgHelper('linearGradient',_class, _id, _atts, _content, _tpl,_parent, _replace); 
 };
export const svgMarker = async (_class, _id, _atts, _content, _tpl,_parent, _replace) => {
	return await FT.createSvgHelper('marker',_class, _id, _atts, _content, _tpl,_parent, _replace); 
 };
export const svgPath = async (_class, _id, _atts, _content, _tpl,_parent, _replace) => {
	return await FT.createSvgHelper('path',_class, _id, _atts, _content, _tpl,_parent, _replace); 
 };
export const svgPolygon = async (_class, _id, _atts, _content, _tpl,_parent, _replace) => {
	return await FT.createSvgHelper('polygon',_class, _id, _atts, _content, _tpl,_parent, _replace); 
 };
export const svgPolyline = async (_class, _id, _atts, _content, _tpl,_parent, _replace) => {
	return await FT.createSvgHelper('polyline',_class, _id, _atts, _content, _tpl,_parent, _replace); 
 };
export const svgRect = async (_class, _id, _atts, _content, _tpl,_parent, _replace) => {
	return await FT.createSvgHelper('rect',_class, _id, _atts, _content, _tpl,_parent, _replace); 
 };
export const svgStop = async (_class, _id, _atts, _content, _tpl,_parent, _replace) => {
	return await FT.createSvgHelper('stop',_class, _id, _atts, _content, _tpl,_parent, _replace); 
 };
export const svgStyle = async (_class, _id, _atts, _content, _tpl,_parent, _replace) => {
	return await FT.createSvgHelper('style',_class, _id, _atts, _content, _tpl,_parent, _replace); 
 };
export const svgSymbol = async (_class, _id, _atts, _content, _tpl,_parent, _replace) => {
	return await FT.createSvgHelper('symbol',_class, _id, _atts, _content, _tpl,_parent, _replace); 
 };
export const svgText = async (_class, _id, _atts, _content, _tpl,_parent, _replace) => {
	return await FT.createSvgHelper('text',_class, _id, _atts, _content, _tpl,_parent, _replace); 
 };
export const svgTextPath = async (_class, _id, _atts, _content, _tpl,_parent, _replace) => {
	return await FT.createSvgHelper('textPath',_class, _id, _atts, _content, _tpl,_parent, _replace); 
 };
export const svgTitle = async (_class, _id, _atts, _content, _tpl,_parent, _replace) => {
	return await FT.createSvgHelper('title',_class, _id, _atts, _content, _tpl,_parent, _replace); 
 };
export const svgUse = async (_class, _id, _atts, _content, _tpl,_parent, _replace) => {
	return await FT.createSvgHelper('use',_class, _id, _atts, _content, _tpl,_parent, _replace); 
 };
 
 		 

