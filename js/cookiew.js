 var oDate = new Date();
 var lstatus = "0"
 oDate.setDate(oDate.getDate() + 30);//有效期为30天
 document.cookie = "expires=" + oDate;
 document.cookie = "lstatus=" + lstatus;
 