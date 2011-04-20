<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
	"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"> 
<html> 
	<head>
		<title>Loading gif??? :D</title>
		<link type="text/css" rel="stylesheet" href="style.css" media="screen" />
		<script type="text/javascript" src="jquery.min.js" charset="utf-8"></script>
		<script type="text/javascript" src="jquery.loading.js" charset="utf-8"></script>
		<script>
			$(document).ready(function(){
				$('#loading').loading();
				$('#toggle').click(function(){
					$('#loading').toggle();
				});
			});
		</script>
	</head> 
	 
	<body> 
		<div id="loading"><div></div></div>
		<a id="toggle" href="javascript:;">toggle</a>
	</body>
</html>