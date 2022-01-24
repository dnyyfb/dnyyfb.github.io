
if (window.MCSERVER == undefined) window.MCSERVER = {};


//Ws 默认协议
MCSERVER.WS_PROTOCOL = 'ws://';
//HTTP 默认协议
MCSERVER.HTTP_PROTOCOL = 'https://';

//URL定位器
MCSERVER.URL = function (url, protocol) {
	var _protocol = protocol || MCSERVER.HTTP_PROTOCOL;
	var hostName = window.location.host;
	var openURL = hostName + '/' + url;
	return _protocol + openURL;
};