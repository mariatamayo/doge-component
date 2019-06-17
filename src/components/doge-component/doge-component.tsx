import { Component, h } from '@stencil/core';

@Component({
	tag: 'doge-component',
	styleUrl: 'doge-component.css',
	shadow: true,
})
export class DogeComponent {
	public render() {
		return (
			<img
				class="doge-img"
				src="https://ih0.redbubble.net/image.407032251.6292/ap,550x550,12x12,1,transparent,t.u2.png"
			/>
		);
	}
}

