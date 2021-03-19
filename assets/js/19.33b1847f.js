(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{377:function(t,s,a){"use strict";a.r(s);var n=a(25),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"collectstream"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#collectstream"}},[t._v("#")]),t._v(" CollectStream")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" stream "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" vk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("collect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("method"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("Список необязательных параметров которые будут использоваться")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Свойство")]),t._v(" "),a("th",[t._v("Тип")]),t._v(" "),a("th",[t._v("Описание")]),t._v(" "),a("th",[t._v("По умолчанию")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("offset")]),t._v(" "),a("td",[t._v("number")]),t._v(" "),a("td",[t._v("Смещение")]),t._v(" "),a("td",[t._v("0")])]),t._v(" "),a("tr",[a("td",[t._v("count")]),t._v(" "),a("td",[t._v("number")]),t._v(" "),a("td",[t._v("Общее количество данных которые нужно получить")]),t._v(" "),a("td",[t._v("null")])]),t._v(" "),a("tr",[a("td",[t._v("parallelCount")]),t._v(" "),a("td",[t._v("number")]),t._v(" "),a("td",[t._v("Количество параллельных запросов в execute")]),t._v(" "),a("td",[t._v("25")])])])]),t._v(" "),a("p",[t._v("Если "),a("code",[t._v("parallelCount")]),t._v(" равен "),a("code",[t._v("1")]),t._v(" в таком случае запросы будут без "),a("code",[t._v("execute")])]),t._v(" "),a("p",[t._v("Работает так же с сервисным токеном, но без "),a("code",[t._v("execute")]),t._v(" (то есть по одному прямому запросу за раз)")]),t._v(" "),a("p",[t._v("Данные можно получить двумя способами")]),t._v(" "),a("h2",{attrs:{id:"stream"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stream"}},[t._v("#")]),t._v(" stream")]),t._v(" "),a("p",[t._v("Тут достаточно всё просто, вешаем обработчик и данные будут постепенно приходить")]),t._v(" "),a("p",[t._v("Плюс данного подхода в том что мы получаем данные по мере их получения")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("stream"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'error'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nstream"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'data'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("payload")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nstream"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'end'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Все данные получены'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("В "),a("code",[t._v("payload")]),t._v(" содержатся следующие свойства")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Свойство")]),t._v(" "),a("th",[t._v("Тип")]),t._v(" "),a("th",[t._v("Описание")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("total")]),t._v(" "),a("td",[t._v("number")]),t._v(" "),a("td",[t._v("Сколько нужно получить данных")])]),t._v(" "),a("tr",[a("td",[t._v("percent")]),t._v(" "),a("td",[t._v("number")]),t._v(" "),a("td",[t._v("На сколько процентов выполнена задача")])]),t._v(" "),a("tr",[a("td",[t._v("received")]),t._v(" "),a("td",[t._v("number")]),t._v(" "),a("td",[t._v("Сколько уже получено данных")])]),t._v(" "),a("tr",[a("td",[t._v("items")]),t._v(" "),a("td",[t._v("Object[]")]),t._v(" "),a("td",[t._v("Набор данных")])]),t._v(" "),a("tr",[a("td",[t._v("profiles")]),t._v(" "),a("td",[t._v("Object[]")]),t._v(" "),a("td",[t._v("Информация о профилях из набора данных")])]),t._v(" "),a("tr",[a("td",[t._v("groups")]),t._v(" "),a("td",[t._v("Object[]")]),t._v(" "),a("td",[t._v("Информация о группах из набора данных")])])])]),t._v(" "),a("p",[a("code",[t._v("profiles")]),t._v(" и "),a("code",[t._v("groups")]),t._v(" будут заполнены при выполнении запроса, возвращающего такие данные (с параметром "),a("code",[t._v("extended: 1")]),t._v(")")]),t._v(" "),a("blockquote",[a("p",[t._v("Начиная с Node.js 10.0.0")])]),t._v(" "),a("p",[t._v("Пример использования")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" payload "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("of")]),t._v(" stream"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"promise"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#promise"}},[t._v("#")]),t._v(" promise")]),t._v(" "),a("blockquote",[a("p",[t._v("Обратите внимание")])]),t._v(" "),a("blockquote",[a("p",[t._v("Если вы используете потоковый режим, не используйте "),a("code",[t._v("Promise")]),t._v(" для того что бы узнать когда завершиться процесс получения данных, так как он будет сохранять данные для передачи в "),a("code",[t._v("Promise")])])]),t._v(" "),a("p",[t._v("С "),a("code",[t._v("Promise")]),t._v(" всё проще, но стоит учитывать что данные будут накапливаться в памяти пока не будут получены все или не появится ошибка. Если на сервере будет недостаточно памяти, то это вызовет переполнение стака")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("stream"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("items")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// OR")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("run")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" items "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" stream"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("run")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("catch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("Так же возвращаемый "),a("code",[t._v("Promise")]),t._v(" будет всегда уникальным при вызове "),a("code",[t._v("stream.then")])])])}),[],!1,null,null,null);s.default=e.exports}}]);