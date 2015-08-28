/*!
 * IamGamer.pro intro
 * https://github.com/IamGamerPro/intro
 *
 * Released under the MIT license
 * https://github.com/IamGamerPro/intro/blob/master/LICENSE
 */

- template tplIcon(name)
	- symbols = { &
		'desktop': '',
		'search': '',
		'envelope': '',
		'envelope-o': '',
		'comment-o': '',
		'comments-o': '',

		'camera': '',
		'film': '',
		'picture': '',
		'upload': '',
		'user': '',

		'heart': '',
		'check': '',
		'remove-sign': '',
		'remove': '',

		'thumb-up': '',
		'thumb-down': '',

		'pencil': '',
		'save': '',
		'hand-o-up': '',

		'cog': '',
		'cogs': '',
		'spinner': '',

		'sun': '',
		'time': '',
		'refresh': '',

		'sort': '',
		'sort-up': '',
		'sort-down': '',

		'undo': '',

		'caret-up': '',
		'caret-down': '',

		'rotate-left': '',
		'rotate-right': ''
	} .

	< span.fa :: {symbols[name]}

- template bButton(@params = {})
	< .b-button
		< button.&__btn type = ${@type || 'button'}
			< span.&__wrapper
				< span.&__cell.&__pre-icon
					- if @preIcon
						{call tplIcon(@preIcon)}&nbsp;

				< span.&__cell.&__value
					{@value}

				< span.&__cell.&__iconn
					- if @icon
						- call tplIcon(@icon)
