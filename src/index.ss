/*!
 * IamGamer.pro intro
 * https://github.com/IamGamerPro/intro
 *
 * Released under the MIT license
 * https://github.com/IamGamerPro/intro/blob/master/LICENSE
 */

- include './blocks/b-logo'

- template index() @= autoReplace true
	- doctype
	< html
		< head
			< meta charset = utf-8
			< title
				IamGamer.pro - социальная платформа нового поколения

			- link :: index.css
			- script (src = ../bower_components/sugar/release/sugar.min.js)
			- script (src = ../bower_components/jquery/dist/jquery.min.js)
			- script (src = index.js)

		< body
			< [.g-vert-flex]
				< [.g-cont]
					< header.b-header
						< .b-top-logo :: {call bLogo()}

					< [.g-hor-flex]
						< section.b-intro
							< .&__reg#top-header
								< .&__wrapper
									< h1.&__hello
										Геймеры всех стран, объединяйтесь!

									< h2.&__sub-hello
										< a.&__link href = http://iamgamer.pro :: IamGamer.pro

										| - социальная платформа для всех, кто играет в компьютерные игры и для тех, кто их делает.

								< h3.&__info
									Открытие во втором квартале 2016 года.

							< .&__desc
								< p
									Наша платформа предоставит потрясающий конструктор сайтов для игровых сообществ и клановых порталов.

								< p
									Больше никакой ручной работы: IamGamer.pro реализует полный набор инструментов для таких рутинных операций,
									как приём в клан, планирование эвентов и рейдов, деление лута и крафта и т.д.

								< p
									Создавай союзы, объявляй войны и выведи свой клан в топ рейтинга IamGamer.

								< p
									IamGame.pro создаётся с целью дать приют всем тем, кто не представляет свою жизнь
									без компьютерных игр, а также для тех, кто просто интересуется игровой индустрией.

						< section.b-top-clans
							< h6.&__title
								Играйте вместе с нами

							< ul.&__list
								- forEach ['clan-1', 'clan-2', 'clan-3'] => el
									< li.&__el
										< .&__link
											< img.&__logo src = ../img/${el}.jpg | alt = | width = 381

				< .b-footer
					< footer.g-cont
						< .b-copyright
							IamGamer.pro (c) {new Date().getFullYear()}
