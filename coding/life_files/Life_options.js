var choosing_pop_spec=false;
var switching_allowed=true;
var switching_button_txt="Change images";
var switch_to="altpics";
var screen_saver={start_on_ss:false,kickin_wait:180,switch_wait:3600,animation_wait:12,sound:0.5,pic:0.5,plain_prop:0,time_prop:0,redlist_prop:1,natural_prop:0,spiral_prop:1,feather_prop:0,balanced_prop:0,latin_prop:0,common_prop:1,zoomin__:0,growth_animation:0.2,zoomin_random:0.6,slideshow:0.2,zosens:0.92,sslength:3,flightspeed:12,};
var control_button_style={standard:{inner_col:"rgb(255,255,255)",line_col:"rgb(155,165,175)",line_width:0},over:{inner_col:"rgb(180,200,235)",line_col:"rgb(155,165,175)",line_width:0},clicked:{inner_col:"rgb(180,200,235)",line_col:"rgb(0,0,0)",line_width:0},disabled:{inner_col:"rgb(180,200,235)",line_col:"rgb(155,165,175)",line_width:0}};
var data_path_sounds="http://www.onezoom.org/Tree_of_Life_Data_Set/Sounds/";
var alt_pics_on=0;
var data_pic_col_alt="phyloPicID";
var data_path_pics_alt="http://www.onezoom.org/AT_Data_Set/alt_pics/";
var data_path_thumbs_alt="http://www.onezoom.org/AT_Data_Set/alt_pics/";
var data_pic_ext_alt=".jpg";
var data_pic_thumb_ext_alt=".jpg";
var data_pic_col_main="picID";
var data_pic_col_credit_main="picID_credit";
var data_pic_col_rating_main="picID_rating";
var data_pic_ext_main=".jpg";
var data_pic_thumb_ext_main=".jpg";
var data_pic_col=data_pic_col_main;
var data_pic_col_credit=data_pic_col_credit_main;
var data_pic_col_rating=data_pic_col_rating_main;
var data_path_pics=data_path_pics_main;
var data_path_thumbs=data_path_thumbs_main;
var data_pic_ext=data_pic_ext_main;
var data_pic_thumb_ext=data_pic_thumb_ext_main;

popular_species_ct="OTT";
popular_species=[
	["Suggested branches"],
	["Apes",386191],
	["Bats",574724],
	["Bears",297458],
	["\"Cats\"",827259],
	["\"Dogs\"",827263],
	["Dolphins and Whales",698424],
	["Hares and Rabbits",644258],
	["Marsupials",16033],
	["Monkeys, New World",339033],
	["Monkeys, Old World",842868],
	["Primates",913935],
	["Porcupines",123456789],
	["Rodents",864593],
	["Seals",95364],
	["Squirrels",384218],
	["Ungulates, Even-toed",3615249],
	["Ungulates, Odd-toed",541948]];

var button_text_col="rgb(0,0,0)";
var disabled_button_text_col="rgb(0,0,0)";
var control_col="rgb(235,240,255)";
var control_col2="rgb(235,240,255)";
var control_line_col="rgb(105,115,145)";
var control_text_col="rgb(0,0,0)";
var control_highlight_col="rgb(220,230,255)";
var picborder_col="rgb(155,155,155)";
var txtbox_col="rgb(220,230,255)";
var txtbox_line_col="rgb(155,165,175)";
var txtbox_text_col="rgb(0,0,0)";
var button_corner=10;
var button_gap=9;
var button_height=38;
var alpha_button_corner=6;
var alpha_button_gap=5;
var alpha_button_height=38;
var control_margin=20;
var control_width=285;
var control_line_width=1;
var txtbox_height=275;
var txtbox_line_width=1;
var textoutlinecolor="rgba(255,255,255,0.85)";
var touch_debugger=false;
var restart_flag=true;
var polytype=3;
var viewtype=1; //1,2,3,4
var colourtype=1;
var leaftype=2;
var fonttype="Helvetica";
var intnodetextcolor="rgb(255,255,255)";
var backgroundcolor="rgb(255,255,255)";
var logobackgroundcolor="rgba(255,255,255,0.8)";
var outlineboxcolor="rgb(0,0,0)";
var auto_interior_node_labels=false;
//var pie_background_color="rgb(255,255,255)";
//var pieborder=0.12;
var innode_label_help=false;
var commonlabels=true;
var intcircdraw=true;
var mintextsize=3;
var searchinteriornodes=false;
var growthtimetot=45;
var EP_anim_length_in=10;
var pop_anim_length_in=25;
var length_intro_in=20;
var fly_on_search=false;
var touch_rem_wait=6;
var targetScreenProp=0.95;
//var draw_first_pie=-1;
//var draw_second_pie=-1;

function conconvert(a){switch(a){case"EX":return("Extinct");case"EW":return("Extinct in the Wild");case"CR":return("Critically Endangered");case"EN":return("Endangered");case"VU":return("Vulnerable");case"NT":return("Near Threatened");case"LC":return("Least Concern");case"DD":return("Data Deficient");case"NE":return("Not Evaluated");default:return("Not Evaluated")}}function conconvert2(a){switch(a){case"EX":return(0);case"EW":return(1);case"CR":return(2);case"EN":return(3);case"VU":return(4);case"NT":return(5);case"LC":return(6);case"DD":return(7);case"NE":return(8);default:return(9)}}var red1="rgb(225,180,155)";
var red2="rgb(140,20,20)";
var green1="rgb(135,215,90)";
var green2="rgb(70,135,30)";

function redlistcolor(a){switch(a){case"EX":return("rgb(200,200,200)");case"EW":return("rgb(200,200,200)");case"CR":return(red1);case"EN":return(red1);case"VU":return(red1);case"NT":return(green1);case"LC":return(green1);case"DD":return(green1);case"NE":return(green1);default:return(green1)}}function redlistcolor2(a){switch(a){case"EX":return("rgb(110,110,110)");case"EW":return("rgb(110,110,110)");case"CR":return(red2);case"EN":return(red2);case"VU":return(red2);case"NT":return(green2);case"LC":return(green2);case"DD":return(green2);case"NE":return(green2);default:return(green2)}}function redlistcolor3(a){return("rgb(110,110,110)")}var global_colorkey_title=["Leaf and branch colours show","the risk of extinction, based","on The International Union for","Conservation of Nature (IUCN)","Red List of Threatened Species"];
var global_colorkey_text=[];
var global_colorkey_col=[];
//var temp_piekey=["LC","NT","VU","EN","CR","EW","EX","DD","NE"];

//for(var hc=0;hc<temp_piekey.length;hc++){global_colorkey_col[hc]=redlistcolor(temp_piekey[hc]);global_colorkey_text[hc]=conconvert(temp_piekey[hc])}
var creditsText=[[20,],[5,"OneZoom Tree of Life Explorer"],[3,],[5,"www.OneZoom.org"],[15,],[3.5,"A project based at Imperial College London"],[2,],[3.5,"Funded by the Natural Environment Reseach Council"],[2,],[3.5,"Created and developed by"],[2,],[3.5,"James Rosindell"],[9,],[3.5,"Special thanks to"],[2,],[3.5,"Luke Harmon"],[3.5,"Duncan Gillies"],[3.5,"Laura Nunes"],[3.5,"Yan Wong"],[3.5,"Kai Zhong"],[4,],[3.5,"This work is a contribution to Imperial College's"],[3.5,"Grand Challenges in Ecosystems and the Environment initiative."],[9,],[3.5,"Data sources"],[1,],[3,"Conservation status data"],[1,],[2.2,"The IUCN Red List of Threatened Species. Version 2012.1."],[2.2,"IUCN, Available from http://www.iucnredlist.org. (2012)"],[1,],[3,"Mammal data"],[1,],[2.2,"Bininda-Emonds OR, Cardillo M, Jones KE, MacPhee RD, Beck RM, et al."],[2.2,"The delayed rise of present-day mammals."],[2.2,"Nature 446: 507-512. (2007)"],[1,],[3,"Bird data"],[1,],[2.2,"Jetz W, Thomas GH, Joy JB, Hartmann K, Mooers AO"],[2.2,"The global diversity of birds in space and time"],[2.2,"Nature 491: 444-448 (2012)"],[2.2,"Also see www.birdtree.org"],[2.2,"Conservation status data for birds downloaded from birdtree.org"],[1,],[3,"Amphibian data"],[1,],[2.2,"Isaac NJB, Redding DW, Meredith HM and Safi K"],[2.2,"Phylogenetically-Informed Priorities for Amphibian Conservation"],[2.2,"PLoS One (2012)"],[1,],[3,"Squamate data (excluding snakes)"],[1,],[2.2,"Bergmann PJ, Irschick, DJ"],[2.2,"Vertebral Evolution and the Diversification of Squamate Reptiles"],[2.2,"Evolution 66(4) (2012)"],[1,],[3,"Snake data"],[1,],[2.2,"Pyron RA, Kandambi HKD, Hendry CR, Pushpamal V, Burbrink FT and Somaweera R."],[2.2,"Genus-level molecular phylogeny of snakes reveals"],[2.2,"the origins of species richness in Sri Lanka."],[2.2,"Molecular Phylogenetics and Evolution 66: 969-978 (2013)"],[1,],[3,"Testudine data"],[1,],[2.2,"Jaffe AL, Slater GJ and Alfaro ME"],[2.2,"The evolution of island gigantism and body size variation in tortoises and turtles."],[2.2,"Biology Letters (7) doi: 10.1098/rsbl.2010.1084 (2011)"],[1,],[3,"Crocodilian data"],[1,],[2.2,"Oaks JR"],[2.2,"A time-calibrated species tree of crocodylia"],[2.2,"reveals a recent radiation of the true crocodiles"],[2.2,"Evolution doi:10.1111/j.1558-5646.2011.01373.x (2011)"],[1,],[3,"Dates of common ancestry between clades"],[1,],[2.2,"Hedges SB, Dudley J and Kumar S"],[2.2,"TimeTree: A public knowledge-base of divergence times among organisms."],[2.2,"Bioinformatics 22: 2971-2972 (2006)"],[2.2,"Also see www.timetree.org"],[1,],[3,"Original OneZoom publication reference"],[1,],[2.2,"Rosindell J and Harmon LJ"],[2.2,"OneZoom: A Fractal Explorer for the Tree of Life"],[2.2,"PLoS Biology DOI: 10.1371/journal.pbio.1001406 (2012)"],[4,],[4,"Images"],[1,],[3,"All images were downloaded from the Encyclopedia of Life www.eol.org"],[2.2,"Zoom into the copyright symbol on the bottom right"],[2.2,"of any image to see the author and source details"],[2,],[7,],[3,"Please go to www.OneZoom.org/about.htm for further details"],[2,],[3,"Thank you for exploring the tree of life with OneZoom"],[15,],];
var widthres=1000;
var heightres=600;
var xmin=0;
var xmax=widthres;
var ymin=0;
var ymax=heightres;
var widthofcontrols=920;
var widthofcontrols2=560;
var widthofinfobar=620;
var buttonoptions=0;
var context;
var myCanvas;
var fulltree;
var datahastraits=false;
var ws=1;
var xp=widthres/2;
var yp=heightres;
var wsinit;
var calculating=false;
var timelim=-3;
var timeinc;
var t2;
var growing=false;
var growingpause=false;
var growingdir=true;
var flying=false;
var flying_2=false;
var countdownB=0;
var t;
var numhits;
var searchinparts=[];
var searchinfull=null;
var fullsearch=null;
var highlight_search=false;
var latin_search=false;
var common_search=true;
var trait_search=true;
var infotype=0;
var mywindow;
var tout_ss;
var tout_sw;
var tout_aw;
var screensaver_on=false;
var viewchange_due=false;
var nowloading=true;

function midnode(aa){var Z;var X;var C;var z;var G;var D;var aq;var ao;var Q;var c;var b;var g;var E;var ac;var v;var m;var T;var a;var S;var N;var ak;var F;var ae;var W;var q;var A;var am;var w;var aj;var u;var s;var ab;var l;var y;var R;var ad;var B=0;var H=0;var k=0;var f=0;var al=false;var ap=false;var ag=0;var ai=false;var ah=false;var P=true;var r=false;this.phylogenetic_diversity=0;var an=0;var j;var I;var O=0;var p=1;var h;var M;var e;var J;var ar;var af=0;var K=false;var o;var V=false;var d=false;if(aa.charAt(aa.length-1)==";"){aa=aa.substr(0,aa.length-1)}if(aa.charAt(0)=="("){for(i=0;i<aa.length;i++){if(aa.charAt(i)=="("){an++}if(aa.charAt(i)==")"){an--}if(aa.charAt(i)==","){if(an==1){j=i}}if(an==0){I=i;i=aa.length+1}}var Y=aa.substr(1,j-1);var U=aa.substr(j+1,I-j-1);var n=aa.substr(I+1,aa.length-I);var L=-1;for(i=0;i<n.length;i++){if(n.charAt(i)==":"){L=i}}if(L==-1){this.lengthbr=null}else{this.lengthbr=parseFloat(n.substr(L+1,(n.length)-L));n=n.substr(0,L)}if(n.length>0){L=-1;for(i=0;i<n.length;i++){if(n.charAt(i)=="["){L=i;i=n.length}}if(L==-1){this.cname=null;this.name1=n;this.name2=null}else{this.metacode=parseInt(n.substr(L+1,(n.length)-L-2));if(L!=1){this.name1=n.substr(0,L)}else{this.name1=null}if(mc_key_n.common_en){this.cname=metadata.node_meta[this.metacode][mc_key_n.common_en]}}}else{this.name2=null;this.name1=null;this.cname=null;this.metacode=null}this.child1=new midnode(Y,this);this.child2=new midnode(U,this);this.richness_val=0}else{this.child1=null;this.child2=null;this.richness_val=0;var L=-1;for(i=0;i<aa.length;i++){if(aa.charAt(i)==":"){L=i}}if(L==-1){this.lengthbr=null}else{this.lengthbr=parseFloat(aa.substr(L+1,(aa.length)-L));aa=aa.substr(0,L)}if(aa.length>0){L=-1;for(i=0;i<aa.length;i++){if(aa.charAt(i)=="["){L=i;i=aa.length}}if(L==-1){datahastraits=false}else{this.metacode=parseInt(aa.substr(L+1,(aa.length)-L-2));aa=aa.substr(0,L)}if((aa.substr((aa.length)-1))=="_"){this.name2=null;this.name1=null}else{L=-1;for(i=0;i<aa.length;i++){if(aa.charAt(i)=="_"){L=i;i=aa.length}}if(L==-1){this.name2=null;this.name1=aa}else{this.name1=aa.substr(L+1,(aa.length)-L-1);this.name2=aa.substr(0,L)}}}else{this.name2=null;this.name1=null;this.metacode=null;datahastraits=false}}}midnode.prototype.branchcolor=function(){var a="rgb(110,110,110)";return a};

midnode.prototype.barccolor=function(){var a="rgba(0,0,0,0.2)";return a};
midnode.prototype.fakeleafcolor1=function(){return(redlistcolor("LC"))};
midnode.prototype.fakeleafcolor2=function(){return(redlistcolor("LC"))};
midnode.prototype.leafcolor1=function(){if(this.richness_val>1){return("rgb(215,235,210)")}else{return(redlistcolor(this.redlist))}};
midnode.prototype.leafcolor2=function(){if(this.richness_val>1){return(this.branchcolor())}else{return(redlistcolor2(this.redlist))}};
midnode.prototype.leafcolor3=function(){if(this.richness_val>1){return("rgb(0,0,0)")}else{return("rgb(0,0,0)")}};
midnode.prototype.leafcolor4=function(){return("rgb(255,255,255)")};
midnode.prototype.hitstextcolor=function(){if((this.npolyt)||(polytype==3)){return("rgb(255,255,255)")}else{return this.branchcolor()}};
midnode.prototype.highlightcolor=function(){return"rgba(255,255,255,0.5)"};
midnode.prototype.datetextcolor=function(){var a="rgb(255,255,255)";return a};
midnode.prototype.richnesstextcolor=function(){var a="rgb(255,255,255)";if(colourtype==2){if((this.lengthbr<150.8)&&(this.lengthbr>70.6)){a="rgb(255,255,250)"}}if(colourtype==3){a="rgb(255,255,255)"}return a};
//midnode.prototype.drawPieSet=function(a,h,e){var c=[this.num_LC,this.num_NT,this.num_VU,this.num_EN,this.num_CR,this.num_EW,this.num_EX,this.num_DD,this.num_NE];var b=["LC","NT","VU","EN","CR","EW","EX","DD","NE"];var d=[0,0];d.length=9;var g=[0,0];g.length=9;for(i=0;i<b.length;i++){d[i]=redlistcolor(b[i]);g[i]=conconvert(b[i])}var f=[,,"Threatened","Threatened","Threatened",,,,];drawPie(a-e,h,e,c,d,this.richness_val);drawPieKey(a+e,h-e*0.75,e*0.2,e*2,c.slice(0,5),d.slice(0,5),this.richness_val,g.slice(0,5),f.slice(0,5),b.slice(0,5),this.leafcolor3(),"species");drawPieKey(a+e,h-e*0.25,e*0.2,e*1.6,c.slice(5,9),d.slice(5,9),this.richness_val,g.slice(5,9),f.slice(5,9),b.slice(5,9),this.leafcolor3(),"species");context.fillStyle=intnodetextcolor;autotext3(false,"Conservation status pie chart key",a+e,h+e*0.5,e*2,e*0.25)};
//midnode.prototype.drawPieSet_2=function(a,h,e){var c=[this.num_LC,this.num_NT,this.num_VU,this.num_EN,this.num_CR,this.num_EW,this.num_EX,this.num_DD,this.num_NE];var b=["LC","NT","VU","EN","CR","EW","EX","DD","NE"];var d=[0,0];d.length=9;var g=[0,0];g.length=9;for(i=0;i<b.length;i++){d[i]=redlistcolor(b[i]);g[i]=conconvert(b[i])}var f=[,,"Threatened","Threatened","Threatened",,,,];drawPie(a-e,h,e,c,d,this.richness_val);drawPieKey(a+e,h-e*0.75,e*0.2,e*2,c.slice(0,5),d.slice(0,5),this.richness_val,g.slice(0,5),f.slice(0,5),b.slice(0,5),this.leafcolor3(),"species");drawPieKey(a+e,h-e*0.25,e*0.2,e*1.6,c.slice(5,9),d.slice(5,9),this.richness_val,g.slice(5,9),f.slice(5,9),b.slice(5,9),this.leafcolor3(),"species");context.fillStyle=intnodetextcolor;autotext3(false,"Conservation status pie chart key 2",a+e,h+e*0.5,e*2,e*0.25)};
midnode.prototype.concalc=function(){this.num_EX=0;this.num_EW=0;this.num_CR=0;this.num_EN=0;this.num_VU=0;this.num_NT=0;this.num_LC=0;this.num_DD=0;this.num_NE=0;this.num_I=0;this.num_D=0;this.num_S=0;this.num_U=0;if(this.child1){(this.child1).concalc();(this.child2).concalc();this.num_EX=((this.child1).num_EX)+((this.child2).num_EX);this.num_EW=((this.child1).num_EW)+((this.child2).num_EW);this.num_CR=((this.child1).num_CR)+((this.child2).num_CR);this.num_EN=((this.child1).num_EN)+((this.child2).num_EN);this.num_VU=((this.child1).num_VU)+((this.child2).num_VU);this.num_NT=((this.child1).num_NT)+((this.child2).num_NT);this.num_LC=((this.child1).num_LC)+((this.child2).num_LC);this.num_DD=((this.child1).num_DD)+((this.child2).num_DD);this.num_NE=((this.child1).num_NE)+((this.child2).num_NE);this.num_I=((this.child1).num_I)+((this.child2).num_I);this.num_D=((this.child1).num_D)+((this.child2).num_D);this.num_S=((this.child1).num_S)+((this.child2).num_S);this.num_U=((this.child1).num_U)+((this.child2).num_U)}else{this.num_EX=0;this.num_EW=0;this.num_CR=0;this.num_EN=0;this.num_VU=0;this.num_NT=0;this.num_LC=0;this.num_DD=0;this.num_NE=0;this.num_I=0;this.num_D=0;this.num_S=0;this.num_U=0;if(this.redlist){switch(this.redlist){case"EX":this.num_EX=1;break;case"EW":this.num_EW=1;break;case"CR":this.num_CR=1;break;case"EN":this.num_EN=1;break;case"VU":this.num_VU=1;break;case"NT":this.num_NT=1;break;case"LC":this.num_LC=1;break;case"DD":this.num_DD=1;break;case"NE":this.num_NE=1;break;default:this.num_NE=1;break}}else{this.num_NE=1}if(this.popstab){switch(this.popstab){case"I":this.num_I=1;break;case"S":this.num_S=1;break;case"D":this.num_D=1;break;case"U":this.num_U=1;break;default:this.num_U=1;break}}else{this.num_U=1}}};
midnode.prototype.extxt=function(){if(this.redlist){return conconvert(this.redlist)}else{return("Not Evaluated")}};
midnode.prototype.specnumfull=function(){var a=(this.richness_val).toString();if(this.richness_val>=1000){a=a.substring(0,a.length-3)+","+a.substring(a.length-3,a.length)}if(this.richness_val>=1000000){a=a.substring(0,a.length-7)+","+a.substring(a.length-7,a.length)}return(a+" species")};
midnode.prototype.leaf_txtline1=function(){if(((((this.redlist=="EX")||(this.redlist=="EW"))||((this.redlist=="CR")||(this.redlist=="EN")))||((this.redlist=="VU")||(this.redlist=="NT")))||(this.redlist=="LC")){return("Conservation status")}else{return("")}};
midnode.prototype.leaf_txtline2=function(){if(((((this.redlist=="EX")||(this.redlist=="EW"))||((this.redlist=="CR")||(this.redlist=="EN")))||((this.redlist=="VU")||(this.redlist=="NT")))||(this.redlist=="LC")){return(this.extxt())}else{return("")}};
midnode.prototype.node_spec_txtline1=function(){var a=(this.richness_val).toString();if(this.richness_val>=1000){a=a.substring(0,a.length-3)+","+a.substring(a.length-3,a.length)}if(this.richness_val>=1000000){a=a.substring(0,a.length-7)+","+a.substring(a.length-7,a.length)}return(a+" species")};

function Resize_only(){myCanvas.width=myCanvas.clientWidth;myCanvas.height=myCanvas.clientHeight;widthres=myCanvas.width;heightres=myCanvas.height}
function draw_loading(){Resize_only();if(backgroundcolor){context.fillStyle=backgroundcolor;context.fillRect(0,0,widthres,heightres)}else{context.clearRect(0,0,widthres,heightres)}context.fillStyle="rgb(0,0,0)";context.font=(Math.min(widthres,heightres)/9).toString()+"px Helvetica";context.textAlign="center";context.fillText("Summoning Mammals ...",widthres/2,heightres/2,widthres/2);return true}
function insert_scripts_onload(d,c){if(d.length==0){setTimeout(c,10)}else{var a=d.shift();console.log("loading ",a);var b=document.createElement("script");b.setAttribute("id",a.id);document.head.appendChild(b);b.src=a.path;b.onload=function(){insert_scripts_onload(d,c)}}}
function init_first(a,b){myCanvas=document.getElementById("myCanvas");context=myCanvas.getContext("2d");Resize_only();draw_loading();insert_scripts_onload(a,b)};