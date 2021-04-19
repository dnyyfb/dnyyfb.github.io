 var oDate = new Date();
 var lstatus = "0"
 var wstatus = "1"
 oDate.setDate(oDate.getDate() + 30);//有效期为30天
 document.cookie = "name=dnyyfb.github.io;expires=" + oDate;
 document.cookie = "name=dnyyfb.github.io;lstatus=" + lstatus;
 document.cookie = "name=dnyyfb.icoc.bz;wstatus=" + wstatus;
 