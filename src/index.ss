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
					< header
						- call bLogo()
