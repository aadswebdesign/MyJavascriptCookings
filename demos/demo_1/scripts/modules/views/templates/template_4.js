import * as FT from './../../functions.js';
/* @description: used as Learning Template*/

async function templateFour(){
	const dummy_text= `
<p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed libero lacus, vulputate a mi eu, semper vehicula velit. Pellentesque euismod suscipit risus, quis condimentum dui rhoncus id. Aliquam sollicitudin, urna nec sollicitudin imperdiet, urna lectus dapibus mauris, vitae sagittis lorem lorem vitae mi. Nullam in volutpat mauris. Ut efficitur hendrerit fermentum. Vivamus malesuada fringilla eros a eleifend. Nam laoreet, ex nec pellentesque ornare, enim odio molestie massa, sit amet laoreet eros tellus ac orci. Fusce ut sapien in mi consectetur porttitor. Nulla accumsan tortor a eros pellentesque, sed sollicitudin orci dapibus. Proin porta feugiat tortor. Sed ac felis et massa porttitor rutrum id id metus. Aliquam sit amet pretium magna. Cras ligula orci, sagittis ac libero id, tincidunt dignissim odio. Sed ultrices nisi velit, in viverra nisi feugiat id. Cras sit amet fermentum sapien. Fusce cursus mauris sit amet arcu hendrerit pellentesque.
</p><p>
In hac habitasse platea dictumst. Nullam ullamcorper tempor dui, quis tincidunt nulla aliquam at. Nunc vitae imperdiet neque. Integer faucibus quam vel imperdiet aliquet. Mauris non venenatis nisi. Sed luctus gravida ullamcorper. Proin semper placerat odio, in egestas mi suscipit ut. Donec libero ligula, ornare id lorem non, vehicula auctor lectus. Suspendisse mollis porta magna ut pharetra.
</p><p>
Aenean sollicitudin vitae ligula non accumsan. Nam dictum tortor augue, vel semper elit vulputate sed. Ut lacinia consequat eros, pharetra sollicitudin libero posuere nec. Etiam eleifend libero purus, id lobortis eros vestibulum sed. Quisque porta rhoncus quam vitae dictum. Nam vitae mi quis magna maximus vehicula. Donec facilisis viverra risus vel hendrerit. Cras non lacus venenatis arcu tempor tristique.
</p><p>
Aliquam a mollis mauris, faucibus ornare mauris. Quisque justo massa, ullamcorper ut iaculis condimentum, iaculis eu justo. Vivamus bibendum justo nisl, vitae eleifend lorem efficitur eget. Aenean lacinia commodo mollis. Etiam rhoncus volutpat sem, at laoreet nisi. Donec at porttitor metus. Aliquam nec ullamcorper elit. Morbi eu commodo nisl, vel accumsan nulla. Sed vitae justo elit. Fusce at lorem ut lectus lacinia tincidunt in ac massa. Aliquam tempor leo id feugiat maximus. Suspendisse vitae consectetur enim. Donec tristique, massa at interdum auctor, nibh odio rhoncus felis, eget pretium lacus enim consectetur quam. Suspendisse pellentesque turpis non sem pulvinar malesuada. Nullam sed augue sem.
</p><p>
Nunc vulputate dui suscipit, maximus velit id, mattis eros. Duis id elit faucibus, feugiat lectus eget, dictum quam. Cras ultricies sapien in sollicitudin scelerisque. Aliquam pharetra nisi risus, volutpat vehicula erat cursus sit amet. Aliquam at tortor risus. In mauris enim, fringilla quis scelerisque at, fermentum eu tellus. Nunc enim felis, porttitor in interdum eu, finibus vitae eros. Morbi rutrum sodales velit. Nullam et mauris ut neque tristique placerat. Fusce varius, nibh a venenatis pharetra, nulla dui faucibus lectus, a volutpat ligula nunc in ipsum. Nullam varius, ligula a pellentesque feugiat, nibh metus pharetra neque, sed laoreet lectus nulla id eros. Integer sollicitudin scelerisque sodales. 
</p>
`;
	
	const template = `<div class='learning-block relative'>
		<h4 class='learning title relative' data-number='01:'>JavaScript History pushState.</h4>
		<h5 class='learning step relative' data-step='Step 01:'>Setting up the html!</h5>
		<div class='learning content relative'>
			<details class='details-trial relative'><summary class='relative'>Summary title</summary><div class='details-content absolute'><div class='inner relative'>${dummy_text}</div></div></details>
		
		
		
		</div>
	</div>
	`;
	

	return await template;
}

//&#60;&#62;
export{templateFour};