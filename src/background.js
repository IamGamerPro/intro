/*!
 * IamGamer.pro intro
 * https://github.com/IamGamerPro/intro
 *
 * Released under the MIT license
 * https://github.com/IamGamerPro/intro/blob/master/LICENSE
 */

export default class Background {
	/**
	 * @param {(!jQuery|!Element)} node
	 */
	constructor(node) {
		this.node = jQuery(node);
		this.i = 0;

		try {
			this.cache = JSON.parse(localStorage.getItem('backgroundCache'));

		} catch (ignore) {

		} finally {
			this.cache = this.cache || {};
		}
	}

	setDarkBackground() {
		const
			key = `dark-background-${this.i++}`;

		if (this.cache[key]) {
			this.applyStyle(`dark-def-background-${this.i++}`, this.cache[key]);
			return;
		}

		const
			body = document.body,
			width = screen.width > body.scrollWidth ? screen.width : body.scrollWidth,
			height = screen.height > body.scrollHeight ? screen.height : body.scrollHeight;

		const
			bgColor = this.node.css('background-color'),
			x = Math.floor(width / 2),
			y = Math.floor(height / 2);

		const
			canvas = document.createElement('canvas');

		canvas.width = width;
		canvas.height = height;

		const
			ctx = canvas.getContext('2d'),
			grad = ctx.createRadialGradient(x, y * 0.5, height * 0.3, x, y, height * 1.5);

		grad.addColorStop(0, 'rgba(0,0,0,0)');
		grad.addColorStop(0.6, bgColor);

		const
			dash = [2, 4];

		for (let i = width; i > 0; i -= 6) {
			ctx.beginPath();
			ctx.setLineDash(dash);
			ctx.lineDashOffset = 10;
			ctx.moveTo(i, 0);
			ctx.lineTo(i, height);
			ctx.closePath();
			ctx.stroke();
		}

		ctx.fillStyle = grad;
		ctx.rect(0, 0, width, height);
		ctx.fill();

		ctx.arc(424, 424, 424, 0, 2 * Math.PI, true);
		ctx.fill();

		this.applyStyle(key, canvas.toDataURL());
	}

	setMetallicBackground() {
		const
			key = `metallic-background-${this.i++}`;

		if (this.cache[key]) {
			this.applyStyle(`dark-def-background-${this.i++}`, this.cache[key]);
			return;
		}

		const
			width = 340,
			height = 96;

		const
			canvas = document.createElement('canvas');

		canvas.width = width;
		canvas.height = height;

		const
			ctx = canvas.getContext('2d'),
			grad = ctx.createLinearGradient(50, 0, 50, 100);

		grad.addColorStop(0, '#BFBFBF');
		grad.addColorStop(0.5, '#AAA');
		grad.addColorStop(1, '#BFBFBF');

		ctx.fillStyle = grad;
		ctx.rect(0, 0, width, height);
		ctx.fill();

		ctx.lineWidth = window['chrome'] || window['opera'] ? 0.3 : 0.4;

		const
			d = 6,
			n = width / d,
			colors = ['#CACACA', '#B6B6B6', '#BFBFBF', '#AAA'];

		for (let i = d + 1, j; i--;) {
			j = width;

			while ((j -= 2) > 0) {
				ctx.strokeStyle = colors[Number.random(0, colors.length - 1)];

				ctx.beginPath();
				ctx.moveTo(i * n - Number.random(n / 2, n), j);
				ctx.lineTo(i * n - Number.random(0, n / 2), j);
				ctx.closePath();
				ctx.stroke();
			}
		}

		this.applyStyle(key, canvas.toDataURL());
	}

	/**
	 * Applies background style to the node
	 *
	 * @param {string} className - class name
	 * @param {string} dataURI - data:uri of a class image
	 * @return {!Background}
	 */
	applyStyle(className, dataURI) {
		const
			style = document.createElement('style');

		style.innerHTML = `
			.${className} {
				background-image: url(${dataURI});
			}
		`;

		this.cache[className] = dataURI;
		localStorage.setItem('backgroundCache', JSON.stringify(this.cache));

		document.head.appendChild(style);
		this.node.addClass(className);

		return this;
	}
}
