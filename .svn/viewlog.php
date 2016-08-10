<?php 
$mysqli=new mysqli("localhost","root","nbinbi","water");
$conn=$mysqli->query("set charset utf8");
$page=@$_GET["page"]?@$_GET["page"]:1;
$keyword=empty($_GET["keyword"])?"":@$_GET["keyword"];
$show=empty($_GET["count"])?15:$_GET["count"];
$start=($page>0?$page-1:$page)*$show;
$end=$show;
$sqlcount="SELECT count(*) AS `len` FROM `water_operation` AS wo INNER JOIN user as u ON wo.id=u.id";
$sqlcount=$keyword?$sqlcount.=" WHERE u.name like '%{$keyword}%'":$sqlcount;
$count=$mysqli->query($sqlcount)->fetch_assoc()["len"];
$sql="select * from water_operation inner join user on water_operation.id=user.id";
$sql=$keyword?$sql.=" where user.name like '%{$keyword}%' limit $start,$end":$sql.=" limit $start,$end";
$conn=$mysqli->query($sql);
$str="<table style='width:100%;'><thead><tr><td>操作人用户名</td><td>操作人动作</td><td>操作时间</td><td>操作人ip</td></tr></thead>";
while($row=$conn->fetch_assoc()){
	$str.="<tr><td>{$row["name"]}</td><td>{$row["opname"]}</td><td>{$row["opdate"]}</td><td>{$row["ip"]}</td></tr>";
}
echo $str;
echo "<form action='' method='get'><input type='hidden' name='page' value=1><input type='text' name='keyword'><input type='submit' value='搜索' placeholder='根据用户名搜索'></form>";
$pagestr="<div style='position:fixed;bottom:0;text-align:center;width:100%;'>";
for($i=0;$i<ceil($count/$show);$i++){
	$page=$i+1;
	$pagestr.="<a href='./viewlog.php?page={$page}&keyword={$keyword}' style='display:inline-block;margin-right:20px;'>第{$page}页</a>";
}
echo $pagestr."</div>";


?>