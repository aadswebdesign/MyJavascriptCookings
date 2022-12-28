async function description(){
	return await console.log('functions.js, here I will keep track of my helper functions');
}

// elem - class - id - attributes - content - template_literal - parent replace
async function createElemHelper(_elem, _class, _id, _atts, _content, _tpl,_parent, _replace){ //
	const _sanitize_html = async function (_elem,_str) {
		let _html;
		if(_elem){
			_html = _elem;
			_html.innerHTML = _str;
		}
		return await _html;
	};
	const _new_elem = _elem;
	const _create = async function(_new_elem){
		return document.createElement(_new_elem);
	}
	const _el = await _create(_new_elem);
	console.log(`element '<${_elem}></${_elem}>' has been created.`);
	if(_class) _el.classList = _class;
	if(_id) _el.id = _id;
	if(_atts){
		for (const [key, value] of Object.entries(_atts)){
			console.table(`${key}="${value}" `);
			_el.setAttribute(key,value);
		}
	}
	if(_content){
		if(_tpl == true) _sanitize_html(_el, _content);
		else{
			const _node = document.createTextNode(_content);
			_el.appendChild(_node);
		}
	}
	let __parent, __replace;
	if(_parent){
		__parent = document.querySelector(_parent);
		if(_replace){
			__replace = document.querySelector(_replace);
			__parent.replaceChild(_el, __replace);	
		}else __parent.appendChild(_el);
	}
	else return _el;
}

async function getIdHelper(id){
    if(id)
        return await document.getElementById(id);
}

async function elQuery(_element,_all,_parent){
    let _el;
	if(_all == true){
		if(_parent) _el = _parent.querySelectorAll(_element);
    	else _el = document.querySelectorAll(_element);
	}else{
		if(_parent) _el = _parent.querySelector(_element);
		else _el = document.querySelector(_element);
	}
    return await _el;
}

const sanitizeHTMLHelper = async function (_elem,_str, add_str = false, _query = false, _timeout = false) { //, _query
    let _html;
    if(_elem){
		_html = _elem;
		if(_timeout == true){
			setTimeout(()=>{
				if(_query == true){
					if(add_str == true) {
						_html = document.querySelector(_elem);
						_html.innerHTML += _str;
					} 
					else {
						_html = document.querySelector(_elem);
						_html.innerHTML = _str;
					}; 
					console.log({'html 1a':_html});
				}else{
					if(add_str == true) {
						_html = _elem;
						_html.innerHTML += _str;
					} 
					else {
						_html = _elem;
						_html.innerHTML = _str;
					}; 
					
				}
			},100);
		}else{
			if(_query == true){
				if(add_str == true) {
						_html = document.querySelector(_elem);
						_html.innerHTML += _str;
				} 
				else {
						_html = document.querySelector(_elem);
						_html.innerHTML = _str;
				}; 
				console.log({'html 2a':_html});
			}else{
				if(add_str == true) {
					_html = _elem;
					_html.innerHTML += _str;
				} 
				else {
					_html = _elem;
					_html.innerHTML = _str;
				}; 
			}
		}
    }
    return await _html;
};
async function templateHelper(strings, ...keys) {
    return (function(...values) {
        const _dict = values[values.length - 1] || {};
        const _results = [strings[0]];
        keys.forEach(function(key, i) {
            const _value = Number.isInteger(key) ? values[key] : _dict[key];
            _results.push(_value, strings[i + 1]);
        });
        return _results.join('');
    });
}

async function myLearnings(){
	//todo, translate this to oop functions 
	const learning_block = document.querySelector('.learning-block');// - 50 + 'px'
	const learning_block_width = learning_block.offsetWidth;
	const learning_block_height = learning_block.offsetHeight;
	const learning_block_content = learning_block.querySelector('.learning.content');
	learning_block_content.style.width = learning_block_width - 100 + 'px';
	const Summary = document.querySelector('summary').offsetWidth;
	const details_content = document.querySelector('.details-content');
	details_content.style.left = Summary + 10 + 'px';
	details_content.style.height= learning_block_height - 60 + 'px';
	
	return console.log('learning_block_height: ',learning_block_height);
}

export{description,createElemHelper,elQuery,getIdHelper,sanitizeHTMLHelper,templateHelper,myLearnings};