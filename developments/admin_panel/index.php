
<!DOCTYPE html>
<html>
	<head>
		<meta http-equiv='Content-Type' content='text/html; charset=UTF-8'>
		<link rel='icon' href="https://www.mozilla.org/favicon.ico">
		<link href='./styles/style.css' rel='stylesheet' />
		<script id='index_php'>
			const tp_year = '<?php echo date('Y') ?>';
		</script>
		<script type='module' src="./scripts/index.js"></script>	
	</head>
	<body class='relative'>
		<div class='wrap container display-flex relative'>
		<header class='relative'>
			<h4 class='relative'>Admin_panel development</h4>
		</header>
		<main class='admin-panel relative' role='presentation'>
			<div class='controlls relative'>
				<div class='top-left absolute'></div>
				<div class='menu-balk-top sticky display-flex'>
					<details class='relative'>
						<summary class='caret-right left-to-right relative'></summary>
						<div class='detail-content absolute'>detail-content top</div>
					</details>
				</div>
				<div class='menu-balk-left sticky display-flex'>
					<details class='relative'>
						<summary class='caret-down top-to-bottom relative'></summary>
						<div class='detail-content absolute'>detail-content left</div>
					</details>
				</div>
				<div class='test-block absolute'></div>
				
				
				
			</div>
		</main>
		<footer class='sticky display-flex'>
		<small class='relative' title='aad&#39;s webdesign'>awd<time><i> &#169; </i><?php echo date('Y') ?></time></small>
		</footer>
		</div><!-- .wrap.container -->
	</body>
</html>