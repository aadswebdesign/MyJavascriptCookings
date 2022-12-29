## MyJavascriptCookings

### Description
A place where I want to do some frontend prepairations for my other repo 'TailoredPress' and what I've put on hold for now.
This because I'm abroad at present and have only a small laptop to work on.

### Snippets
**Files**
- js_snippets/functions.js (import * as FT from './../functions.js';)
		- note: As it are async functions, they have to be called with '***await***' and not with ***new***!.		
	- createElemHelper
		- Async function with many options to create and manipulate dom elements
		- note: Data attributes has to be created as 'data_example' (this will be translated under the hood as 'data-example').
		- example
			- // elem , class , id , attributes , content , template_literal , parent  , replace
			- await FT.createElemHelper('main', 'relative', null,{role: 'presentation'}, null,false,'.wrap.container');
	- getIdHelper(id)
		- Async function that retrieves the 'id' from a dom element.
		- example
			- await FT.getIdHelper('foo');
	- elQuery(_element,_all = false,_parent)
		- Async function that retrieves dom element(s).
		- examples
			- const bas = await elQuery('.bas'); document.querySelector
			- const foo = await elQuery('.foo', false, bas); bas.querySelector
			- const foos = await elQuery('.foo', true); document.querySelectorAll
			- const foos2 = await elQuery('.foo', true, bas); bas.querySelectorAll
	- sanitizeHTMLHelper(_elem,_str, add_str = false, _query = false, _timeout = false)
		- Async function that aims retrieving content a little safer.
		- // _elem 'target', 
		- // _str 'string to be passed to the target element',
		- // add_str 'if set to true, a string will be added to the exsisting content, otherwise content will  be replaced',
		- // _query 'if set to true, target element will quered first',
		- // _timeout 'if set to true, a timeout of 100 will be set',
		- examples
			- FT.sanitizeHTMLHelper('.foo', foo_content);





### Demo's
