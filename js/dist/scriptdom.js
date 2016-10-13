'use strict';

var test = {
	createDiv: function createDiv(parent, className, text) {
		var valParent = document.getElementsByClassName(parent)[0];
		var newDiv = document.createElement('div');
		newDiv.className = className;
		valParent.appendChild(newDiv);
		newDiv.innerHTML = text;
	},
	createOl: function createOl(parent, className) {
		var valParent = document.getElementsByClassName(parent)[0];
		var newOl = document.createElement('ol');
		newOl.className = className;
		valParent.appendChild(newOl);
	},
	createLiForm: function createLiForm(parent, className, text) {
		var valParent = document.getElementsByClassName(parent)[0];
		var newLi = document.createElement('li');
		newLi.innerHTML = text;
		valParent.appendChild(newLi);
		var newForm = document.createElement('form');
		newForm.className = className;
		newLi.appendChild(newForm);
	},
	createInput: function createInput(parent, label) {
		var valParent = document.getElementsByClassName(parent)[0];
		var newLabel = document.createElement('label');
		valParent.appendChild(newLabel);
		newLabel.innerHTML = label;
		var newInput = document.createElement('input');
		newLabel.insertBefore(newInput, newLabel.firstChild);
		newInput.setAttribute('type', 'radio');
	},
	createButton: function createButton(parent, value) {
		var valParent = document.getElementsByClassName(parent)[0];
		var newForm = document.createElement('form');
		valParent.appendChild(newForm);
		var newInput = document.createElement('input');
		newForm.appendChild(newInput);
		newInput.setAttribute('type', 'button');
		newInput.setAttribute('value', value);
	},
	createP: function createP(parent, className, text) {
		var valParent = document.getElementsByClassName(parent)[0];
		var newP = document.createElement('p');
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
