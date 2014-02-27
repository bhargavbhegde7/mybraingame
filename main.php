<html>
	<head>
		<title>brain game</title>
		<script type="text/javascript" src="pages/js/jumble.js"></script>
		<script type="text/javascript" src="pages/bootstrap-3.0.3-dist/dist/js/bootstrap.js"></script>
		<script type="text/javascript" src="pages/bootstrap-3.0.3-dist/dist/js/bootstrap.min.js"></script>
		<!-- for bootstrap -->
		<link rel = "stylesheet" type = "text/css" href = "pages/bootstrap-3.0.3-dist/dist/css/bootstrap.css" ></link>
		<link rel = "stylesheet" type = "text/css" href = "pages/bootstrap-3.0.3-dist/dist/css/bootstrap.min.css" ></link>
		<link rel = "stylesheet" type = "text/css" href = "pages/bootstrap-3.0.3-dist/dist/css/bootstrap-theme.css" ></link>
		<link rel = "stylesheet" type = "text/css" href = "pages/bootstrap-3.0.3-dist/dist/css/bootstrap-theme.min.css" ></link>
		<!-- for popup -->
		<link rel="stylesheet" href="pages/css/styles.css">
		<link rel="stylesheet" href="pages/css/avgrund.css">
		<script>
			function openDialog() {
				Avgrund.show( "#default-popup" );
			}
			function closeDialog() {
				Avgrund.hide();
			}
		</script>
	</head>
	<body onload="openDialog();">
	<aside id="default-popup" class="avgrund-popup">
			<h2>Welcome to ------- Game!!</h2>
				<p>click on "<strong>get me a new challenge</strong>" button. some of the blocks will be highlighted for a while.
				All you have to do is remember and click the same blocks which were highlighted before. Enjoy.</p>				
			<p>
				
			</p>
			<button onclick="javascript:closeDialog();">OK</button>
			<p>PS: the button "<strong>increase level</strong>" increases the number of blocks that are going to be highlighted.(increase difficulty level)</p>
			<p><small>press "<strong>Esc</strong>" button on your key board or click outside this box or click "<strong>OK</strong>" to exit this message</p>
		</aside>
		<article class="avgrund-contents">
		<!--<button onclick="javascript:openDialog();">Open Avgrund</button>-->
	<div style="position:absolute;left:25%;top:15%;">
		<table>
	<?php
	$count=0;
	for($i=0;$i<5;$i++){
		for($j=0;$j<5;$j++){
			$count++;
			?>
			<td onclick="getImg(<?php echo $count; ?>);">
				<div id='<?php echo $count; ?>' style="
					background:black;height:80px;width:80px;border:1px solid;border-radius:10%;">
				</div>
			</td>
			<?php
		}
		echo "<tr></tr>";
	}
	?>
		</table>
		<button onclick="makePattern();">get me a new challenge</button>
		<button onclick="levelMore();">increase level</button>
		<button onclick="resetGrid();">reset</button>
		<button onclick="printArray();">view array</button>
		</div>
		</article>
		<div class="avgrund-cover"></div>

		<script type="text/javascript" src="pages/js/avgrund.js"></script>
	</body>
</html>