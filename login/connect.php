<?php
    //$server="localhost";//主机
    //$db_username="hiuasksb_s5";//你的数据库用户名
    //$db_password="?!E}EN0j2+PU";//你的数据库密码

	$con = mysqli_connect("localhost","hiuasksb_s5","?!E}EN0j2+PU","hiuasksb_s5");
    //$con = mysqli_connect($server,$db_username,$db_password);//链接数据库
    if(!$con){
        die("can't connect".mysql_error());//如果链接失败输出错误
    }
    //mysqli_select_db('s5',$con);//选择数据库（我的是test）
?>