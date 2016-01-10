<!DOCTYPE html>
<!--[if lt IE 7 ]><html class="ie ie6" lang="en"> <![endif]-->
<!--[if IE 7 ]><html class="ie ie7" lang="en"> <![endif]-->
<!--[if IE 8 ]><html class="ie ie8" lang="en"> <![endif]-->
<!--[if (gte IE 9)|!(IE)]><!-->
<html lang="en">
<!--<![endif]-->
<head>
<meta charset="utf-8">
<link rel="shortcut icon" href="images/favicon.ico" />
<title>Drop the Beat</title>
<meta name="description" content="">
<meta name="author" content="">
<?php
//contact
require 'inc/application_top.php';
?>
<?php echo $mobile_browser > 0 ? '<meta name="viewport" content="width=750" />':'' ?>
<?php echo $tablet_browser > 0 ? '<meta name="viewport" content="width=device-width, initial-scale=1">':'' ?>

<link rel="stylesheet" href="css/all.css">
<link href='http://fonts.googleapis.com/css?family=Press+Start+2P' rel='stylesheet' type='text/css'>

<script src="js/jquery-1.9.1.min.js"></script>
<script src="js/jquery.easing.1.3.js"></script>
<script src="js/class.SiteMain.js"></script>
<!--[if lt IE 9]><script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script><![endif]-->
</head>
<body>
	<div id="container">
        <div class="wrapper">
        	<?php 
				$module = isset($_REQUEST['module']) ? $_REQUEST['module']: "home";
				include("modules/home.php");
			?>
        </div>
    </div>
</body>
</html>