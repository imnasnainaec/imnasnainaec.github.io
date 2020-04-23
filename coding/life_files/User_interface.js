function setupPopular(){var e=document.getElementById("popularSpecies");while(e.hasChildNodes()){e.removeChild(e.lastChild)}for(var c=0;c<popular_species.length;c++){var d=document.createElement("LI");if(popular_species[c].length==1){d.innerHTML=popular_species[c][0];d.setAttribute("class","popular_header");document.getElementById("popularSpecies").appendChild(d)}else{var a=fulltree.OZID_from_OTTID(popular_species[c][1]);if(a){var b="";if(popular_species[c][0]){b+=popular_species[c][0]}else{b+=popular_species[c][0]+=" asdf"}d.innerHTML=b;d.setAttribute("class","popular_button");d.setAttribute("onclick","closeAndFly("+(a).toString()+")");document.getElementById("popularSpecies").appendChild(d)}}}}
function closeAndLeap(a){if(((document.getElementById("searchBox").offsetWidth)*2)>widthres){closeAll()}perform_leap_animation(a)}
function closeAndFly(a){if(((document.getElementById("locationBox").offsetWidth)*2)>widthres){closeAll()}perform_flight_animation(a,EP_anim_length_in)}
function notOver(){document.getElementById("outerHint").style.display="none";document.getElementById("hintBox").style.display="none"}
function notOverDrop(){document.getElementById("outerDrop").style.display="none";document.getElementById("dropBox").style.display="none"}

var overMenu_timer;
var isoverMenu=false;
function overMenu(){closeAll();clearTimeout(overMenu_timer);document.getElementById("menuBox").style.display="block";isoverMenu=true}
function soonNotOverMenu(){clearTimeout(overMenu_timer);overMenu_timer=setTimeout("notOverMenu()",500)}
function notOverMenu(){document.getElementById("menuBox").style.display="none";isoverMenu=false}

var overLocation_timer;
var isoverLocation=false;
function overLocation(){clearTimeout(overLocation_timer);if(!isoverLocation){closeAll();updateLocationMenu();isoverLocation=true}document.getElementById("locationBox").style.display="block"}
function updateLocationMenu(){var d=getMyLocation();var f=d[0];var j=d[1];var k=d[3];var l=document.getElementById("locationButtons");while(l.hasChildNodes()){l.removeChild(l.lastChild)}var h=document.createElement("LI");h.innerHTML="Your view of the tree";h.id="toploc";document.getElementById("locationButtons").appendChild(h);for(var g=0;g<f.length;g++){var b=0.9;if(g>0){b=Math.min((k[f.length-g])/(k[f.length-1-g]),0.9)}else{b=Math.min((fulltree.viewRichness()/(k[f.length-1-g])),0.9)}if((f.length>1)&&(b!=0)){var a=document.createElement("canvas");var c=(1-b)*a.width/2;a.height=12;document.getElementById("locationButtons").appendChild(a);var e=a.getContext("2d");e.fillStyle="rgb(230,230,230)";e.beginPath();e.moveTo(0,0);e.lineTo(c,a.height);e.lineTo(a.width-c,a.height);e.lineTo(a.width,0);e.lineTo(0,0);e.closePath();e.fill()}h=document.createElement("LI");if(g==f.length-1){h.innerHTML=f[f.length-1-g]+"<br>("+fulltree.specnumfull()+")"}else{h.innerHTML=f[f.length-1-g]+"<br>("+numberConvert(k[f.length-1-g])+")"}h.id="location_button"+(g).toString();h.setAttribute("onclick","closeAndFly("+(j[f.length-1-g]).toString()+")");document.getElementById("locationButtons").appendChild(h)}}
function numberConvert(b){var a=(b).toString();if(b>=1000){a=a.substring(0,a.length-3)+","+a.substring(a.length-3,a.length)}if(b>=1000000){a=a.substring(0,a.length-7)+","+a.substring(a.length-7,a.length)}return(a+" species")}
function soonNotOverLocation(){clearTimeout(overLocation_timer);overLocation_timer=setTimeout("notOverLocation()",1000)}
function notOverLocation(){document.getElementById("locationBox").style.display="none";isoverLocation=false}
function closeAll(){notOverLocation();notOverMenu();notOverSearch();notOver();closeBox()}

var overSearch_timer;
var isoverSearch=false;
var searchResult=[];
var resultLoadUpTo;
function overSearch(){clearTimeout(overSearch_timer);if(!isoverSearch){closeAll();isoverSearch=true;document.getElementById("searchBox").style.display="block";if(searchResult.length==0){document.getElementById("search_input").focus();document.getElementById("popularSpecies").style.display="block"}}}
function soonNotOverSearch(){clearTimeout(overSearch_timer);overSearch_timer=setTimeout("notOverSearch()",3000)}
function notOverSearch(){document.getElementById("searchBox").style.display="none";isoverSearch=false}
function UI_search_enter(){UI_search_go(2);document.getElementById("search_input").blur()}
function UI_search_go(d){var c=(document.getElementById("search_input")).value;if(c.length>=d){searchResult=full_search(c);document.getElementById("popularSpecies").style.display="none"}else{searchResult=[];document.getElementById("popularSpecies").style.display="block"}var e=document.getElementById("searchButtons");while(e.hasChildNodes()){e.removeChild(e.lastChild)}for(var b=0;b<searchResult.length;b++){var a="";if(searchResult[b][0]){if(searchResult[b][1]){if(searchResult[b][3]==1){a=searchResult[b][0]+"</br>(<i>"+searchResult[b][1]+"</i>)"}else{a=searchResult[b][0]+"</br>("+searchResult[b][1]+")"}}else{a=searchResult[b][0]}}else{if(searchResult[b][1]){if(searchResult[b][3]==1){a="<i>"+searchResult[b][1]+"</i>"}else{a=searchResult[b][1]}}}if(a!=""){newnode=document.createElement("LI");newnode.innerHTML=a;newnode.setAttribute("onclick","closeAndLeap("+(searchResult[b][2]).toString()+")");document.getElementById("searchButtons").appendChild(newnode)}}}
function UI_search(){var a=(document.getElementById("search_input")).value;UI_search_go(3)}
function overUp(){closeAll();document.getElementById("hintBox").innerHTML="Move back up the tree";document.getElementById("outerHint").style.display="block";document.getElementById("hintBox").style.display="block"}
function overIn(){closeAll();document.getElementById("hintBox").innerHTML="Zoom In";document.getElementById("outerHint").style.display="block";document.getElementById("hintBox").style.display="block"}
function overOut(){closeAll();document.getElementById("hintBox").innerHTML="Zoom out";document.getElementById("outerHint").style.display="block";document.getElementById("hintBox").style.display="block"}
function overLogo(){document.getElementById("Logo").style.opacity="1.00";document.getElementById("Logo").style.filter="alpha(opacity=100)"}
function notOverLogo(){document.getElementById("Logo").style.opacity="0.55";document.getElementById("Logo").style.filter="alpha(opacity=55)"}
//function clickAll(){document.getElementById("Logo").style.opacity="0.55";document.getElementById("Logo").style.filter="alpha(opacity=55)";document.getElementById("aboutBoxContainer").style.display="block";document.getElementById("aboutBox").innerHTML=(aboutHTML+howHTML+dataHTML)}
function clickHow(){//document.getElementById("Logo").style.opacity="0.55";document.getElementById("Logo").style.filter="alpha(opacity=55)";
document.getElementById("aboutBoxContainer").style.display="block";document.getElementById("aboutBox").innerHTML=(howHTML)}
function clickAbout(){//document.getElementById("Logo").style.opacity="0.55";document.getElementById("Logo").style.filter="alpha(opacity=55)";
document.getElementById("aboutBoxContainer").style.display="block";document.getElementById("aboutBox").innerHTML=(aboutHTML)}
function clickData(){//document.getElementById("Logo").style.opacity="0.55";document.getElementById("Logo").style.filter="alpha(opacity=55)";
document.getElementById("aboutBoxContainer").style.display="block";document.getElementById("aboutBox").innerHTML=(dataHTML)}
function closeBox(){document.getElementById("aboutBoxContainer").style.display="none"};