## MyJavascriptCookings

### Description
A place where I want to do some frontend prepairations for my other repo 'TailoredPress' and what I've put on hold for now.
This because I'm abroad at present and have only a small laptop to work on.

### Snippets
** Files
- functions.js (import * as FT from './../functions.js';)
	- createElemHelper
		- An async function with many options to create and manipulate dom elements
		- note: As it is an async function, it has to be called with 'await'. Also, data attributes has to be created as 'data_example' (this will be translated under the hood as 'data-example').
		- example
			- // elem , class , id , attributes , content , template_literal , parent  , replace
			- await FT.createElemHelper('main', 'relative', null,{role: 'presentation'}, null,false,'.wrap.container');


### Demo's
