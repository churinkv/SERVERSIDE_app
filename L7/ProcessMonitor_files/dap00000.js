var _daprr=['//rad.msn.com/ADSAdClient31.dll?GetSAd=','//a.rad.msn.com/ADSAdClient31.dll?GetSAd=', '//b.rad.msn.com/ADSAdClient31.dll?GetSAd='],_daprs=0,_daplp="//ads1.msn.com/library",acbMinWdth=160,acbAdBarH=22,acbDwnLdSt=false,DPJS_BSC=0,DPJS_ACB=1,DPJS_4TH=2,DPJS_ADV=4;function dap(d,f,e,c){var a=_daprr[_daprs++];if(_daprs>=_daprr.length)_daprs=0;var b="";if(typeof c!="undefined"){c=true;if(a.length>0)a+="&DPJS="+(DPJS_BSC+DPJS_4TH)}else{c=false;if(a.length>0)a+="&DPJS="+DPJS_BSC}a+=dapQSTrack;if(_dapUtils.is_ie5up&&_dapUtils.is_win&&!c){b="dapIf"+(parseInt(parent.frames.length)+1);document.write('<iframe id="'+b+'" src="about:blank" width="'+f+'" height="'+e+'" frameborder="0" scrolling="no"></iframe>');document.frames[b].document.open("text/html","replace");document.frames[b].document.write('<html><head><title>Advertisement</title></head><body id="'+b+'" leftmargin="0" topmargin="0"><script type="text/javascript">var inDapIF=true;<\/script><script type="text/javascript" src="'+a+d+'" onreadystatechange="startTimer();"><\/script><script type="text/javascript">function startTimer(){if (event.srcElement.readyState == "complete") {window.setTimeout("document.close();", 2000);}}<\/script></body></html>')}else document.write('<script src="'+a+d+'" type="text/javascript" language="JavaScript"><\/script>')}function verifyDapResize(a){!adCont[a].resizeCalled&&adCont[a].acbObj.enabled&&dap_Resize(adCont[a].ifrmid,adCont[a].w,adCont[a].h)}function dap_Resize(a,c,b){document.getElementById(a).width=c;document.getElementById(a).height=b;c>0&&b>0&&acbAdResize(a,c,b)}function dapOAF(c,d,b,a){dap(c,b,a)}_dapUtilClass=function(){var a=navigator.userAgent.toLowerCase(),c=navigator.appVersion.toLowerCase();this.minorVer=parseFloat(c);this.majorVer=parseInt(this.minorVer);this.is_opera=a.indexOf("opera")!=-1;this.is_mac=a.indexOf("mac")!=-1;this.is_ff=a.indexOf("firefox")!=-1;var b=c.indexOf("msie");if(b!=-1){if(this.is_mac){var b=a.indexOf("msie");this.minorVer=parseFloat(a.substring(b+5,a.indexOf(";",b)))}else this.minorVer=parseFloat(c.substring(b+5,c.indexOf(";",b)));this.majorVer=parseInt(this.minorVer)}this.is_ie=b!=-1&&!this.is_opera;this.is_ie3=this.is_ie&&this.majorVer<4;this.is_ie4=this.is_ie&&this.majorVer==4;this.is_ie4up=this.is_ie&&this.minorVer>=4;this.is_ie5=this.is_ie&&this.majorVer==5;this.is_ie5up=this.is_ie&&this.minorVer>=5;this.is_ie5_5=this.is_ie&&a.indexOf("msie 5.5")!=-1;this.is_ie5_5up=this.is_ie&&this.minorVer>=5.5;this.is_ie6=this.is_ie&&this.majorVer==6;this.is_ie6up=this.is_ie&&this.minorVer>=6;this.is_webtv=a.indexOf("webtv")!=-1;this.is_msn=c.indexOf("msn")>=0;this.is_win=a.indexOf("win")!=-1||a.indexOf("16bit")!=-1;this.is_mac=a.indexOf("mac")!=-1;if(this.is_mac)this.is_win=!this.is_mac;if(this.is_ff){this.ffPos=a.indexOf("firefox");if(a.length>this.ffPos+8)this.majorVer=parseInt(a.substring(this.ffPos+8));if(a.length>this.ffPos+10)this.minorVer=parseInt(a.substring(this.ffPos+10));this.is_ff1_5up=this.is_ff&&(this.majorVer>=1&&this.minorVer>=5||this.majorVer>=2);this.is_ff_closeIfrm=this.is_ff1_5up&&this.majorVer<3}this.has_Flash=false;this.FlashVer=0;this.detectFlash=function(){if(this.is_win&&this.is_ie4up){var a='<iframe id="flashDetect" src="about:blank" width="1" height="1" frameborder="0" scrolling="no" style="display:none;"></iframe>';document.body.insertAdjacentHTML("afterBegin",a);winObject=window.flashDetect;docObject=winObject.document;top.isFlashVersion=0;top.isFlash=false;docObject.write("<SCRIPT LANGUAGE=VBScript> \n");docObject.write("Dim hasPlayer, playerversion \n");docObject.write("playerversion = 10 \n");docObject.write("Do While playerversion > 0 \n");docObject.write("On Error Resume Next \n");docObject.write('hasPlayer = (IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash." & playerversion))) \n');docObject.write("If hasPlayer = true Then Exit Do \n");docObject.write("playerversion = playerversion - 1 \n");docObject.write("Loop \n");docObject.write("top.isFlashVersion = playerversion \n");docObject.write("top.isFlash = hasPlayer \n");docObject.write("</SCRIPT>");docObject.close();this.has_Flash=top.isFlash;this.FlashVer=top.isFlashVersion;document.all.flashDetect.removeNode(true)}};this.hasCookie=function(d){for(var c=false,e=document.cookie,b=e.split(";"),a=0;a<b.length;a++){while(b[a].substr(0,1)==" ")b[a]=b[a].substr(1);if(b[a].indexOf(d+"=")==0){c=true;break}}return c};this.rendMode=function(){var a=document.compatMode;if(a)if(a=="BackCompat")return"Q";else if(a=="CSS1Compat")return"S";return"U"};this.getCurrentStyle=function(a){return window.getComputedStyle?window.getComputedStyle(a,null)?window.getComputedStyle(a,null):document.defaultView.getComputedStyle(a,null):a.currentStyle};this.brLanguage="";if(this.is_ie5up)this.brLanguage=navigator.browserLanguage;else this.brLanguage=navigator.language;this.acbEvtH=false};var _dapUtils=new _dapUtilClass,adCont=[],dapAd={};dapAd=function(h,a,d,f,e,g,c,i,j,b){this.qs=h;this.divid=a;this.ifrmid=d;this.w=f;this.h=e;this.isActive=g;this.adid=c;this.threshold=i;this.wc=j;this.acbObj=b;this.documentClosed=false;this.resizeCalled=false};var AdControlBar={};AdControlBar=function(a){this.enabled=a;this.shAcbLbl=false;this.fbFmShwn=false;this.fbSbmted=false;this.G=null;this.nS=null;this.pid=null;this.fn=null;this.mX=-1;this.xY=-1;this.noacb=false;this.lblCls=false;this.winCls=false};var eventType=new function(){this.click=1},eventPriority=new function(){this.special=2;this.regular=1},dapMgr=new function(){this.threshold=eventType.click;this.MAX_AD_NUM=100;this.dtRefresh=(new Date).getTime();this.REFESH_ELAPSE=2e3;this.MAX_ITR_FF=5;this.TIME_EACH_ITR=2e3;this.renderAd=function(b,f,e,d){var a=this.getAdItemIndex(b);if(a>-1){adCont[a].qs=f;adCont[a].divid=b;adCont[a].w=e;adCont[a].h=d}else{if(adCont.length<this.MAX_AD_NUM){var c=new dapAd(f,b,"dapIfM"+adCont.length,e,d,false,-1,this.threshold,0,new AdControlBar(true));if(_dapUtils.is_ie5)adCont[adCont.length]=c;else adCont.push(c)}else return;a=adCont.length-1}this.displayAd(a)};this.enableACB=function(a,b){var c=this.getAdItemIndex(a);if(c>-1)adCont[c].acb=b;else if(adCont.length<this.MAX_AD_NUM){var d=new dapAd("",a,"dapIfM"+adCont.length,0,0,false,-1,this.threshold,0,new AdControlBar(b));if(_dapUtils.is_ie5)adCont[adCont.length]=d;else adCont.push(d)}};this.getAdItemIndex=function(b){for(var a=0;a<adCont.length;a++)if(adCont[a].divid==b)return a};this.displayAd=function(a){var d=_daprr[_daprs++];if(_daprs>=_daprr.length)_daprs=0;var f=document.getElementById(adCont[a].divid);if(!f)return;if(!adCont[a].qs||adCont[a].qs.length==0)return;if(adCont[a].isActive)return;if(adCont[a].acbObj!=null&&adCont[a].acbObj.fbFmShwn)return;for(var j=f.childNodes.length-1;j>=0;j--){var b=f.childNodes[j];if(_dapUtils.is_ff1_5up&&b.id==adCont[a].ifrmid){if(b.contentDocument.body)while(b.contentDocument.body.firstChild)b.contentDocument.body.removeChild(b.contentDocument.body.firstChild);b.id=null;b.name=null;b.style.display="none";b=null}else{b.nodeName=="IFRAME"&&!_dapUtils.is_ie5_5&&b.contentWindow.document.location.replace("about:blank");f.removeChild(b);if(_dapUtils.is_ie5up)b.removeNode(true);else b=null}}var m=_dapUtils.getCurrentStyle(f);if(m){var l=m.display;if(l=="none"||l=="hidden")return}if((_dapUtils.is_ie5_5up||_dapUtils.is_ff1_5up)&&_dapUtils.is_win){var e=adCont[a].ifrmid,c=document.createElement("IFRAME");c.id=e;c.name=e;c.src="about:blank";c.width=adCont[a].w;c.height=adCont[a].h;c.scrolling="no";c.frameBorder="0";c.allowTransparency=true;f.insertBefore(c,f.firstChild);if(d.length>0)if(adCont[a].acbObj.enabled)d+="&DPJS="+(DPJS_ADV+DPJS_ACB);else d+="&DPJS="+DPJS_ADV;d+=dapQSTrack;var i=this.getDapOutput(d+adCont[a].qs,e,a);try{var g=c.contentDocument}catch(n){}if(_dapUtils.is_ie5_5up)if(g&&g.write)g.write(i);else c.src="javascript:void(document.write('"+i+"'));";else{g.write(i);g.onload=verifyDapResize(a);if(_dapUtils.is_ff_closeIfrm)window.setTimeout("checkIFrameClosed("+a+",1)",this.TIME_EACH_ITR);else g.close()}adCont[a].acbObj.enabled&&initACB(adCont[a].divid,a)}else{if(d.length>0)d+="&DPJS="+DPJS_ADV;d+=dapQSTrack;var k=true;if(parent.frames){var e=adCont[a].ifrmid;f.innerHTML+='<iframe id="'+e+'" src="about:blank" width="'+adCont[a].w+'" height="'+adCont[a].h+'" frameborder="0" scrolling="no"></iframe>';var h;if(document.frames){if(document.frames[e])h=document.frames[e].document}else if(document.getElementById(e))h=document.getElementById(e).contentDocument;if(h){k=false;h.open("text/html","replace");h.write(this.getDapOutput(d+adCont[a].qs,e,a));if(_dapUtils.is_ff_closeIfrm)window.setTimeout("checkIFrameClosed("+a+",1)",this.TIME_EACH_ITR);else!_dapUtils.is_ie&&!_dapUtils.is_opera&&h.close()}}if(k){document.write('<script src="'+d+adCont[a].qs+'" type="text/javascript" language="JavaScript"><\/script>');adCont[a].ifrmid=null}}};this.getDapOutput=function(d,c,b){var a='<html><head><title>Advertisement</title></head><body id="'+c+'" leftmargin="0" topmargin="0" style="background-color:transparent"><script type="text/javascript">var inDapIF=true; var inDapMgrIf=true;';if(document.domain&&location.hostname!=document.domain)a+='document.domain="'+document.domain+'";';if(_dapUtils.is_ff_closeIfrm)a+="var fnPtr=document.close;document.close=function(){parent.adCont["+b+"].documentClosed = true;document.close=fnPtr};";a+='<\/script><script type="text/javascript">function startTimer(){if (event.srcElement.readyState == "complete") {parent.verifyDapResize('+b+');window.setTimeout("document.close();", 2000);}}<\/script><script type="text/javascript"  src="'+d+'" onreadystatechange="startTimer();"><\/script></body></html>';return a};this.trackEvent=function(d,b){var a,c;if(!b)b=eventPriority.regular;for(a=0,c=false;a<adCont.length;a++){adCont[a].wc+=d*b;var e=(new Date).getTime()-this.dtRefresh;if(adCont[a].wc>=adCont[a].threshold&&e>this.REFESH_ELAPSE){adCont[a].wc=0;if(adCont[a].threshold>-1&&adCont[a].ifrmid!=null){this.displayAd(a);c=true;if(adCont[a].acbObj.enabled&&adCont[a].acbObj.fbSbmted)adCont[a].acbObj.fbSbmted=false}}}if(c)this.dtRefresh=(new Date).getTime()}};function checkIFrameClosed(a,c){var b=document.getElementById(adCont[a].ifrmid);if(b){c>=dapMgr.MAX_ITR_FF&&!adCont[a].documentClosed&&b.contentDocument.close();if(adCont[a].documentClosed)try{b.contentDocument.close()}catch(d){}else window.setTimeout("checkIFrameClosed("+a+","+(c+1)+")",dapMgr.TIME_EACH_ITR)}}function acbAdResize(g,b,c){for(var a=0;a<adCont.length;a++)if(adCont[a].ifrmid==g){if(b<acbMinWdth){adCont[a].acbObj.noacb=true;_dapUtils.acbEvtH&&_acb.removeACBLabel(a)}else _dapUtils.acbEvtH&&_acb.showACBLabel(a);adCont[a].w=b;adCont[a].h=c;var d=document.getElementById(adCont[a].divid);if(d){d.style.width=b+"px";if(_dapUtils.is_ff1_5up&&_dapUtils.rendMode()=="S"&&c>1){var e=c;if(!adCont[a].acbObj.noacb&&adCont[a].acbObj.enabled)e+=acbAdBarH;d.style.height=e+"px"}}var f=document.getElementById("acbLblfrm"+a);if(f)f.style.width=b+"px";adCont[a].resizeCalled=true;return}}function initACB(c,b){if(!_dapUtils.acbEvtH){if(!acbDwnLdSt){acbDwnLdSt=true;var a=document.createElement("SCRIPT");a.type="text/javascript";a.language="javascript";a.src=_daplp+"/ACB/acb.js";document.body.insertBefore(a,document.body.firstChild)}}else _acb.initACBLabel(b)}function ShowAcb(c,d,i,j,h,g,e,f){var b=acbGetIdFrmIdStr(c);if(b>-1){adCont[b].adid=d;adCont[b].w=i;var a=adCont[b].acbObj;a.shAcbLbl=true;a.fn=f;a.G=h;a.nS=g;a.pid=e;_dapUtils.acbEvtH&&_acb.showACBLink(b);return}}function acbGetIdFrmIdStr(b){var a=b.substring(6,b.length);return a>=0?a:-1}function dapExtractValue(a,d,e){if(a!=null){var c=a.toLowerCase().indexOf(d.toLowerCase()+"=");if(c!=-1){c+=d.length+1;var b=a.indexOf(e,c);b=b==-1?a.length:b;return a.substring(c,b)}}return""}function dapQSTracking(){var d=document.cookie,e=escape(dapExtractValue(d,"mh",";")),c=e!=""?"&PN="+e:"",a=escape(dapExtractValue(dapExtractValue(d,"ANON",";"),"A","&")),b=escape(dapExtractValue(d,"MUID",";"));if(a=="")a=b;c+=a!=""?"&ID="+a:"";c+=b!=""?"&MUID="+b:"";return c}var dapQSTrack=dapQSTracking()