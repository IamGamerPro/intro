/*!
 * IamGamer.pro intro
 * https://github.com/IamGamerPro/intro
 *
 * Released under the MIT license
 * https://github.com/IamGamerPro/intro/blob/master/LICENSE
 */

import Background from './background';

jQuery(() => {
	new Background(document.body).setDarkBackground();
	new Background(jQuery('#top-header')).setMetallicBackground();
});
