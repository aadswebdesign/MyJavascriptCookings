<!DOCTYPE html>
<html>
	<head>
		<meta http-equiv='Content-Type' content='text/html; charset=UTF-8'>
		<link rel='icon' href="https://www.mozilla.org/favicon.ico">
		<link href='./styles/style.css' rel='stylesheet' />
		<script>
			const tp_year = '<?php echo date('Y') ?>';
			setTimeout(()=>{
				const content = window['content'];
				const content_height = content.offsetHeight;
				const menu_balk_left = document.querySelector('.menu-balk-left');//
				const menu_balk_left_content = menu_balk_left.querySelector('.detail-content');
				menu_balk_left_content.style.height = content_height - 40 + 'px';
				const menu_balk_left_details =  menu_balk_left.querySelector('details');
				const menu_balk_left_details_summary = menu_balk_left_details.querySelector('summary');
				console.log('menu_balk_left_details: ', menu_balk_left_details);
				console.log('menu_balk_left_details_summary: ', menu_balk_left_details_summary);
				
				if(menu_balk_left_details.hasAttribute('open')){
					menu_balk_left_details_summary.innerHTML = '&#8743;';
				}else{
					menu_balk_left_details_summary.innerHTML = '&#8744;';
				}
				
			}, 500)
		</script>
		<script type='module' src="./scripts/index.js"></script>
	</head>
	<body class='relative'>
		<div class='wrap container relative'>
			<header class='relative'>
				<h2 class='relative'>Demo 2. details/summary workouts</h2>
			</header>
			<main id='content' class='menu-block relative' role='presentation'>
				<div class='menu-balk-top sticky display-flex'>
					<div class='top-left relative'></div>
					<div class='top relative'>
						<details class='relative'>
							<summary class='relative'>&#62;</summary>
							<div class='detail-content absolute'>detail-content top</div>
						</details>
					</div>
				</div>
				<div class='menu-balk-left sticky'>
					<details class='relative'>
						<summary class='relative'>&#8744;</summary>
						<div class='detail-content absolute'>detail-content left</div>
					</details>
				</div>

			</main>
			<footer class='sticky display-flex'>
				<small class='relative' title='aad&#39;s webdesign'>awd<time><i> &#169; </i><?php echo date('Y') ?></time></small>
			</footer>
		</div>
	</body>
</html>