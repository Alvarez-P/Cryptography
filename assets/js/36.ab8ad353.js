(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{379:function(e,a,s){"use strict";s.r(a);var t=s(25),n=Object(t.a)({},(function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"ejemplos"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ejemplos"}},[e._v("#")]),e._v(" Ejemplos")]),e._v(" "),s("h2",{attrs:{id:"json-web-token-jwt"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#json-web-token-jwt"}},[e._v("#")]),e._v(" JSON Web Token (JWT)")]),e._v(" "),s("h3",{attrs:{id:"¿que-es-el-token-web-json"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#¿que-es-el-token-web-json"}},[e._v("#")]),e._v(" ¿Qué es el token web JSON?")]),e._v(" "),s("p",[e._v("JSON Web Token (JWT) es un estándar abierto (RFC 7519) que define una forma compacta y autónoma para transmitir información de forma segura entre las partes como un objeto JSON. Esta información puede ser verificada y confiable porque está firmada digitalmente. Los JWT se pueden firmar usando una clave secreta (con el algoritmo HMAC) o un par de claves pública / privada usando RSA o ECDSA.")]),e._v(" "),s("p",[e._v("Aunque los JWT se pueden cifrar para proporcionar también secreto entre las partes, nos centraremos en los tokens firmados. Los tokens firmados pueden verificar la integridad de los reclamos que contiene, mientras que los tokens cifrados ocultan esos reclamos de otras partes. Cuando los tokens se firman utilizando pares de claves públicas/privadas, la firma también certifica que solo la parte que posee la clave privada es la que la firmó.")]),e._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[e._v("Nota")]),e._v(" "),s("p",[e._v("JWT aún estando compuesto por varios algoritmos, es una encriptación simetrica")])]),e._v(" "),s("h3",{attrs:{id:"¿cuando-deberias-usar-json-web-tokens"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#¿cuando-deberias-usar-json-web-tokens"}},[e._v("#")]),e._v(" ¿Cuándo deberías usar JSON Web Tokens?")]),e._v(" "),s("p",[e._v("Estos son algunos escenarios en los que los tokens web JSON son útiles:")]),e._v(" "),s("ul",[s("li",[s("p",[s("strong",[e._v("Autorización:")]),e._v(" Este es el escenario más común para usar JWT. Una vez que el usuario haya iniciado sesión, cada solicitud posterior incluirá el JWT, lo que le permitirá acceder a rutas, servicios y recursos que están permitidos con ese token. El inicio de sesión único es una característica que usa ampliamente JWT hoy en día, debido a su pequeña sobrecarga y su capacidad de usarse fácilmente en diferentes dominios.")])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("Intercambio de información:")]),e._v(" Los tokens web JSON son una buena forma de transmitir información de manera segura entre las partes. Debido a que los JWT se pueden firmar, por ejemplo, utilizando pares de claves públicas / privadas, puede estar seguro de que los remitentes son quienes dicen ser. Además, como la firma se calcula utilizando el encabezado y la carga útil, también puede verificar que el contenido no haya sido alterado.")])])]),e._v(" "),s("h3",{attrs:{id:"¿cual-es-la-estructura-json-web-token"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#¿cual-es-la-estructura-json-web-token"}},[e._v("#")]),e._v(" ¿Cuál es la estructura JSON Web Token?")]),e._v(" "),s("p",[e._v("En su forma compacta, JSON Web Tokens consta de tres partes separadas por puntos (.), que son:")]),e._v(" "),s("ol",[s("li",[e._v("Header")]),e._v(" "),s("li",[e._v("Payload")]),e._v(" "),s("li",[e._v("Signature")])]),e._v(" "),s("p",[e._v("Por lo tanto, un JWT generalmente se parece a lo siguiente.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("xxxxx.yyyyy.zzzzz\n")])])]),s("h4",{attrs:{id:"analicemos-las-diferentes-partes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#analicemos-las-diferentes-partes"}},[e._v("#")]),e._v(" Analicemos las diferentes partes.")]),e._v(" "),s("p",[s("strong",[e._v("Header")])]),e._v(" "),s("p",[e._v("El encabezado generalmente consta de dos partes: el tipo de token, que es JWT, y el algoritmo de firma que se utiliza, como HMAC SHA256 o RSA.")]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("Ejemplo")]),e._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"alg"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"HS256"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"typ"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"JWT"')]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),s("p",[e._v("Entonces, este JSON está codificado en Base64Url para formar la primera parte del JWT.")])]),e._v(" "),s("p",[s("strong",[e._v("Payload")])]),e._v(" "),s("p",[e._v("La segunda parte del token es la carga útil, que contiene los reclamos. Las reclamaciones son declaraciones sobre una entidad (generalmente, el usuario) y datos adicionales. Existen tres tipos de reclamaciones: "),s("em",[e._v("registradas, públicas y privadas")]),e._v(".")]),e._v(" "),s("ul",[s("li",[e._v("Reclamos registradas: se trata de un conjunto de reclamaciones predefinidas que no son obligatorias pero se recomiendan para proporcionar un conjunto de reclamaciones útiles e interoperables. Algunos de ellos son: iss (emisor), exp (tiempo de vencimiento), sub (tema), aud (audiencia) y otros.")])]),e._v(" "),s("p",[e._v("Tenga en cuenta que los nombres de los reclamos tienen solo tres caracteres, ya que JWT debe ser compacto.")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("Reclamos públicos: los que usan JWT pueden definirlos a voluntad. Pero para evitar colisiones, deben definirse en el Registro de tokens web JSON de IANA o definirse como un URI que contiene un espacio de nombres resistente a colisiones.")])]),e._v(" "),s("li",[s("p",[e._v("Reclamos privados: son los reclamos personalizados creados para compartir información entre las partes que acuerdan usarlos y no son reclamos registrados ni públicos.")])])]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("Ejemplo")]),e._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"sub"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"1234567890"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"nombre"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"John Doe"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"admin"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("true")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),s("p",[e._v("La carga útil se codifica luego en Base64Url para formar la segunda parte del JSON Web Token.")])]),e._v(" "),s("p",[e._v("Tenga en cuenta que para los tokens firmados, esta información, aunque protegida contra la manipulación, es legible por cualquier persona. No coloque información secreta en los elementos de carga o encabezado de un JWT a menos que esté encriptado.")]),e._v(" "),s("p",[s("strong",[e._v("Signature")])]),e._v(" "),s("p",[e._v("Para crear la parte de la firma, debe tomar el encabezado codificado, la carga útil codificada, una clave secreta, el algoritmo especificado en el encabezado y firmarlo.")]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("Ejemplo")]),e._v(" "),s("p",[e._v("Si desea utilizar el algoritmo SHA256 de HMAC, la firma se creará de la siguiente manera:")]),e._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token constant"}},[e._v("HMACSHA256")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("base64UrlEncode")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("head"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("+")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"."')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("+")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("base64UrlEncode")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("payload"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  clave\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])])]),e._v(" "),s("p",[e._v("La firma se usa para verificar que el mensaje no se cambió en el camino y, en el caso de los tokens firmados con una clave privada, también puede verificar que el remitente del JWT es quien dice ser.")]),e._v(" "),s("h3",{attrs:{id:"poniendo-todo-junto"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#poniendo-todo-junto"}},[e._v("#")]),e._v(" Poniendo todo junto")]),e._v(" "),s("p",[e._v("El resultado son tres cadenas de URL Base64 separadas por puntos que se pueden pasar fácilmente en entornos HTML y HTTP, a la vez que son más compactas en comparación con los estándares basados ​​en XML como SAML.")]),e._v(" "),s("p",[e._v("A continuación se muestra un JWT que tiene el encabezado y la carga útil anteriores codificados, y está firmado con una clave.")]),e._v(" "),s("center",[s("img",{attrs:{src:"https://cdn.auth0.com/content/jwt/encoded-jwt3.png",width:"500"}})])],1)}),[],!1,null,null,null);a.default=n.exports}}]);