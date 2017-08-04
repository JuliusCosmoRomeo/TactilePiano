
var linepodNS = "http://hpi.de/baudisch/linepod";
const lastPlayed = "linepod:lastPlayed";

var hoveredTone = "";
var removedItems = {};

var svg = d3.select("body")
.append("svg")
.attr("width", width)
.attr("height", height)
.attr("id","svg");
//.on("click", playTone);

d3.namespaces.linepod = linepodNS;
