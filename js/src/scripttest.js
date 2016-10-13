$(function () {
	const array = {
		"form1": ["Сколько будет 2+2?"
			, {
				"k": 1
				, "v": 4
			}
			, {
				"k": 0
				, "v": 5
			}
			, {
				"k": 0
				, "v": 6
			}]
		, "form2": ["Столица Украины - это ..."
			,	{
				"k": 1
				, "v": "Киев"
			}
			, {
				"k": 0
				, "v": "Харьков"
			}
			, {
				"k": 0
				, "v": "Одесса"
			}]
		, "form3": ["Киев расположен на реке ..."
			, {
				"k": 1
				, "v": "Днепр"
			}
			, {
				"k": 0
				, "v": "Днестр"
			}
			, {
				"k": 0
				, "v": "Дунай"
			}]
	};
	localStorage.setItem("lS", JSON.stringify(array));
	try {
		var obj = JSON.parse(localStorage.getItem("lS"));
	}
	catch (e) {
		alert(" ошибка" + " : " + e.name);
	}
	// модальное окно	
	function modal(pr1, pr2) {
		let wrapWidth = $(".wrapper").width();
		$(".divModal").css('left', wrapWidth / 2 - $(".divModal").width() / 2);
		$(".divModal").fadeIn();
		$(".p1").html("Максимальный балл: " + `${pr2}`);
		$(".p2").html("Результат теста: " + `${pr1}`);
		$(".box :radio").prop("disabled", true);
		$(".divButton :button").prop("disabled", true);
	};
	// render данных по шаблону
	let html = $('#test-program').html();
	let content = tmpl(html, {
		data:obj
	});
	$('.box').append(content);
	//обработчик события для кнопки
	$('.divButton :button').click(function () {
		let sum = 0;
		let counter = 0;
		for (let key in obj) {
			let inputIndex = $("." + key + " " + "input");
			// console.log(inputIndex);
			let r = 0;
			for (let i = 1; i < obj[key].length; i++) {
				// console.log(inputIndex.eq(i-1).prop("checked"));
				if ((inputIndex.eq(i - 1).prop("checked")) == (obj[key][i].k)) {
					r++;
				};
			};
			counter++;
			if (r == ((obj[key].length) - 1)) {
				sum++
			};
		};
		modal(sum, counter);
	});
	//обработчик события для кнопки модального окна
	$(".divModal :button").click(function () {
		$(".divModal").fadeOut();
		$(".box :radio").prop({
			"disabled": false
			, "checked": false
		});
		$(".divButton :button").prop("disabled", false);
	});
});