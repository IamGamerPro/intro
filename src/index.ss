/*!
 * IamGamer.pro intro
 * https://github.com/IamGamerPro/intro
 *
 * Released under the MIT license
 * https://github.com/IamGamerPro/intro/blob/master/LICENSE
 */

- include './blocks/b-logo'
- include './blocks/b-button'

- template index() @= autoReplace true
	- doctype
	< html
		< head
			< meta charset = utf-8
			< title
				IamGamer.pro - социальная платформа нового поколения

			- link :: index.css
			/// - link :: ../bower_components/font-awesome/css/font-awesome.min.css
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
								< h1
									Геймеры всех стран, объединяйтесь!

								/// - call bButton({value: 'Привет', icon: 'desktop'})

								< h2
									< a.&__link href = http://iamgamer.pro :: IamGamer.pro

									| - социальная сеть для всех, кто играет в компьютерные игры.

							< .&__desc
								< p
									Наша социальная сеть была создана с целью дать приют всем тем, кто не представляет свою жизнь
									без компьютерных игр, а также для тех, кто просто интересуется игровой индустрией.

								< p
									Мы вложили очень много усилий, чтобы сделать общение в сети максимально простым и удобным

								< p
									У нас не обязательно вводить свои реальные данные – стань тем, кем ты хочешь быть!

								< p
									Заливай свои игровые записи и покажи их всем! Стань лучшим!

								< p
									Твоё мнение важно для нас, помоги стать нам лучше!

						< section.b-top-clans
							< h6.&__title
								самые активные кланы

							< ul.&__list
								- forEach ['clan-1', 'clan-2', 'clan-3'] => el
									< li.&__el
										< a.&__link href = #
											< img.&__logo src = ../img/${el}.jpg | alt = | width = 381 | height = 130

							< p.&__more
								< a :: Посмотреть полный список

				< .b-footer
					< [.b-top-footer]
						< [.g-cont]
							< .b-stat
								< .&__active-users
									Активных пользователей: 100

								< .&__users
									Всего: {1e7}

							< .&__wrapper
								< section.b-news
									< h1.&__title
										Новости сети

									: news = [ &
										{
											img: 'news-1',
											title: 'Тоже новости',
											body: 'Square Enix вновь задержала релиз Deus Ex: Human Revolution,…'
										},

										{
											img: 'news-2',
											title: 'Безумие в третьей степени',
											body: 'Американский журнал Game Informer рассказал подробности о GT…'
										},

										{
											img: 'news-3',
											title: 'Последние часы Absolute To…',
											body: 'Напоминаем, что сегодня - последний день нашего ежегод…'
										},

										{
											img: 'news-4',
											title: 'Выход WarGames 3 отложена на месяц',
											body: 'Снова перенос игры вызвал бурно обсуждение по…'
										}
									] .

									- forEach news => @el
										< article.&__row
											< .&__img
												< img.&__src-img src = ../img/${@img}.jpg | alt = ${@title} | width = 40 | height = 40

											< .&__content
												< h2.&__sub-title
													{@title}

												< p :: {@body}

								< section.b-last-video
									< h1.&__title
										Последние видео на сайте:

									: videos = [ &
										{
											img: 'news-video-1',
											title: 'Test Drive Unlimited 2 The Good Life Trailer [HD]'
										},

										{
											img: 'news-video-2',
											title: 'Видео-превью игры Crysis 2'
										}
									] .

									- forEach videos => @el
										< .&__row
											< img.&__img src = ../img/${@img}.jpg | alt = | width = 120 | height = 68
											< a href = #
												{@title}

									< p.&__more
										< a href = #
											Остальные видео

					< footer.g-cont
						IamGamer.pro © {new Date().getFullYear()}.
