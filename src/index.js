/*!
 * IamGamer.pro intro
 * https://github.com/IamGamerPro/intro
 *
 * Released under the MIT license
 * https://github.com/IamGamerPro/intro/blob/master/LICENSE
 */

import Background from './background';

jQuery(() => {
	const
		footer = jQuery('.b-footer'),
		body = jQuery('body');

	function calc() {
		const
			height = body.height(),
			prevHeight = footer.prev().height(),
			selfHeight = footer.height();

		jQuery('.g-vert-flex').css('height', height > prevHeight + selfHeight ? height : prevHeight + selfHeight);
	}

	if (typeof Proxy === 'undefined' && typeof WeakSet === 'undefined') {
		calc();
		jQuery(window).on('resize', calc);
	}

	new Background(body).setDarkBackground();
	new Background(jQuery('#top-header')).setMetallicBackground();
});
