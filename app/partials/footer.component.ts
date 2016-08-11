import { Component} from '@angular/core';

@Component({
	selector: 'footer-section',
	template: `
		<h2 class="red">Footer section </h2>
		<p>Lorem ipsum dolor sit amet, {{name}}consectetur adipisicing elit. Fugit consectetur assumenda illum laborum, dolorum sapiente, tenetur dolorem alias vel esse temporibus minus aliquam quidem et modi eos. Fuga quo, quod!</p>
		`
})

export class myFooterSection{
	name =  'Raj Kaushik '
}