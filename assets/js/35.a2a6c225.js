(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{396:function(t,s,e){"use strict";e.r(s);var a=e(25),r=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"utils"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#utils"}},[t._v("#")]),t._v(" Utils")]),t._v(" "),e("p",[t._v("Базовые утилиты")]),t._v(" "),e("h2",{attrs:{id:"resolveresource"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#resolveresource"}},[t._v("#")]),t._v(" resolveResource")]),t._v(" "),e("p",[t._v("Позволяет получить информацию о ресурсе внутри ВКонтакте. Зачастую возникает задача получить идентификатор ресурса из ссылки/упоминания или числа. Для того что бы не писать эту логику самостоятельно можно воспользоваться "),e("code",[t._v("resolveResource")]),t._v(". Поддерживается следующие приведённые примеры:")]),t._v(" "),e("p",[t._v("Ссылка")]),t._v(" "),e("ul",[e("li",[t._v("https://vk.com/id1 — "),e("code",[t._v("{ id: 1, type: 'user' }")])]),t._v(" "),e("li",[t._v("https://vk.com/durov — "),e("code",[t._v("{ id: 1, type: 'user' }")])]),t._v(" "),e("li",[t._v("https://vk.com/wall1_2442097 — "),e("code",[t._v("{ id: 2442097, ownerId: 1, type: 'wall' }")])]),t._v(" "),e("li",[t._v("https://vk.com/durov?w=wall1_2442097 — "),e("code",[t._v("{ id: 2442097, ownerId: 1, type: 'wall' }")])]),t._v(" "),e("li",[t._v("https://vk.com/club1 — "),e("code",[t._v("{ id: 1, type: 'group' }")])]),t._v(" "),e("li",[t._v("https://vk.com/app1 — "),e("code",[t._v("{ id: 1, type: 'application' }")])])]),t._v(" "),e("p",[t._v("Упоминание")]),t._v(" "),e("ul",[e("li",[t._v("[id1|Durov] — "),e("code",[t._v("{ id: 1, type: 'user' }")])]),t._v(" "),e("li",[t._v("[club1|VKontakte API] — "),e("code",[t._v("{ id: 1, type: 'group' }")])])]),t._v(" "),e("p",[t._v("Идентификатор")]),t._v(" "),e("ul",[e("li",[t._v("1 — "),e("code",[t._v("{ id: 1, type: 'user' }")])]),t._v(" "),e("li",[t._v("-1 — "),e("code",[t._v("{ id: 1, type: 'group' }")])])]),t._v(" "),e("p",[t._v("Slug")]),t._v(" "),e("ul",[e("li",[t._v("id1 — "),e("code",[t._v("{ id: 1, type: 'user' }")])]),t._v(" "),e("li",[t._v("durov — "),e("code",[t._v("{ id: 1, type: 'user' }")])])]),t._v(" "),e("p",[t._v("Ресурсы делятся на два типа:")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://negezor.github.io/vk-io/references/vk-io/interfaces/iresolvedtargetresource.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Целевые"),e("OutboundLink")],1),t._v(" — это единичные сущности.")]),t._v(" "),e("div",{staticClass:"language-ts extra-class"},[e("pre",{pre:!0,attrs:{class:"language-ts"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IResolvedTargetResource")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tid"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'user'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'group'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'application'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'albums'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'videos'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'audios'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[e("a",{attrs:{href:"https://negezor.github.io/vk-io/references/vk-io/interfaces/iresolvedownerresource.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("С владельцем"),e("OutboundLink")],1),t._v(" — это сущности с владельцем, в основном прикрепления.")]),t._v(" "),e("div",{staticClass:"language-ts extra-class"},[e("pre",{pre:!0,attrs:{class:"language-ts"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IResolvedOwnerResource")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tid"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\townerId"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'photo'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'audio'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'video'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'doc'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'wall'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'topic'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'album'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h3",{attrs:{id:"использование-resolveresource"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#использование-resolveresource"}},[t._v("#")]),t._v(" Использование resolveResource")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://negezor.github.io/vk-io/references/vk-io/interfaces/iresolveresourceoptions.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Опции функции"),e("OutboundLink")],1)]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("Внимание")]),t._v(" "),e("p",[t._v("Вы вполне можете не передавать класс API, однако если будет встречено короткое имя ("),e("a",{attrs:{href:"https://en.wikipedia.org/wiki/Clean_URL#Slug",target:"_blank",rel:"noopener noreferrer"}},[t._v("slug"),e("OutboundLink")],1),t._v(") по типу "),e("code",[t._v("durov")]),t._v(" — вы получите ошибку, так как он нужен для вызова метода "),e("a",{attrs:{href:"https://vk.com/dev/utils.resolveScreenName",target:"_blank",rel:"noopener noreferrer"}},[t._v("utils.resolveScreenName"),e("OutboundLink")],1),t._v(".")])]),t._v(" "),e("div",{staticClass:"language-ts extra-class"},[e("pre",{pre:!0,attrs:{class:"language-ts"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("API")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" resolveResource "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vk-io'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" api "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("API")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\ttoken"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" process"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("TOKEN")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" resource "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolveResource")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tapi"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Или")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// api: vk.api,")]),t._v("\n\n\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Ресурс который нужно разобрать")]),t._v("\n\tresource"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://vk.com/id1'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("console")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("resource"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// { id: 1, type: 'user' }")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);