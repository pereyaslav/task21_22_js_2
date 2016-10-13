'use strict';
let test = {
	createDiv: function (parent, className, text) {
		let valParent = document.getElementsByClassName(parent)[0];
		let newDiv = document.createElement('div');
		newDiv.className = className;
		valParent.appendChild(newDiv);
		newDiv.innerHTML = text;
	}
	, createOl: function (parent, className) {
		let valParent = document.getElementsByClassName(parent)[0];
		let newOl = document.createElement('ol');
		newOl.className = className;
		valParent.appendChild(newOl);
	}
	, createLiForm: function (parent, className, text) {
		let valParent = document.getElementsByClassName(parent)[0];
		let newLi = document.createElement('li');
		newLi.innerHTML = text;
		valParent.appendChild(newLi);
		let newForm = document.createElement('form');
		newForm.className = className;
		newLi.appendChild(newForm);
	}
	, createInput: function (parent, label) {
		let valParent = document.getElementsByClassName(parent)[0];
		let newLabel = document.createElement('label');
		valParent.appendChild(newLabel);
		newLabel.innerHTML = label;
		let newInput = document.createElement('input');
		newLabel.insertBefore(newInput, newLabel.firstChild);
		newInput.setAttribute('type', 'radio');
	}
	, createButton: function (parent, value) {
		let valParent = document.getElementsByClassName(parent)[0];
		let newForm = document.createElement('form');
		valParent.appendChild(newForm);
		let newInput = document.createElement('input');
		newForm.appendChild(newInput);
		newInput.setAttribute('type', 'button');
		newInput.setAttribute('value', value);
	}
	, createP: function (parent, className, text) {
		let valParent = document.getElementsByClassName(parent)[0];
		let newP = document.createElement('p');
		newP.className = className;
		valParent.appendChild(newP);
		newP.innerHTML = text;
	}
};
test.createDiv('body', 'wrapper', '');
test.createDiv('wrapper', 'caption', 'Тест');
test.createDiv('wrapper', 'box', '');
test.createDiv('wrapper', 'divButton', '');
test.createButton('divButton', ' Проверить мои результаты ');
test.createDiv('wrapper', 'divModal', '');
test.createDiv('divModal', 'message', '');
test.createP('message', 'p1', '');
test.createP('message', 'p2', '');
test.createButton('divModal', ' Close ');
