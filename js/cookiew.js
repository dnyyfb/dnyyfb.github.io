 var oDate = new Date();
 var lstatus = "0"
 oDate.setDate(oDate.getDate() + 30);//有效期为30天
 document.cookie = "name=expires" + oDate;
 document.cookie = "name=lstatus" + lstatus;
 