"use strict"

var body = document.body;


var app = {

	createElement: function (params) {								//метод для генерации елементов

		var element = document.createElement(params.tagName);		//создаём тег указаный при вызове

		if (params.inputType) {										//если создаём инпут - добавляем атрибут типа
			element.setAttribute('type', params.inputType);
		};
		if (params.parent) {										//если указывается родитель - вставляем элемент в него
			params.parent.appendChild(element);
		};
		if (params.className) {										//если класс не указывается - не создаём его
			element.className = params.className;					
		};
		if (params.html) {											//не добавляем контент если он не нужен			
			element.innerHTML = params.html;
		};
		if (params.inputType === 'submit') {						//если кнопка отправки - добавляем возможность поменять надпись на ней
			element.setAttribute('value', params.value);
		};

		return element;
	}, //конец createElement

	generatingQuestion: function (questionsAmount, answersAmount) { //метод для генерации вопросов с ответами


		for (var i = 0; i < questionsAmount; i++) {					//циклом генерируем вопросы
			this.createElement({									
				tagName: 'h2',
				html: (i + 1) +'. Вопрос №' + (i + 1),
				className: 'subtitle',
				parent: form
			});

			for (var j = 0; j < answersAmount; j++) {				//циклом генерируем ответы
				var label = this.createElement({
					tagName: 'label',
					html: 'Ответ №' + (j + 1),
					className: 'label',
					parent: form
				});

				var input = this.createElement({
					tagName: 'input',
					inputType: 'checkbox',
					className: 'check'
				});

				label.insertAdjacentElement('afterBegin', input);
			}

		}
	}  //конец generatingQuestion
}


app.createElement({													//создаём заголовок
	tagName: 'h1',
	className: 'title',
	html: 'Тест по програмированию',
	parent: body
});

var form = app.createElement({										//создаём форму
	tagName: 'form',
	parent: body
});

app.generatingQuestion(3, 3);										//генерируем вопросы с ответами

app.createElement({													//создаём кнопку отправки
	tagName: 'input',
	inputType: 'submit',
	className: 'submit',
	value: 'Проверить мои результаты',
	parent: form
});






















