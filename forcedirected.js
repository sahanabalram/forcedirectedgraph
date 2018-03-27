$(document).ready(function () {
    var margin = {
            top: 10,
            right: 5,
            bottom: 10,
            left: 100
        },
        width = 1400 - margin.left - margin.right,
        height = 900 - margin.top - margin.bottom;
    var svg = d3.select("body").append("svg").attr("width", width).attr("height", height);
    var tooltip = d3.select("body").append("div").attr("class", "tooltip").style({
        "background": "salmon",
        "color": "black",
        "width": "90 px"
    });

    d3.json("https://raw.githubusercontent.com/DealPete/forceDirected/master/countries.json", function(data){
        var nodes = data["nodes"];
        var links = data["links"];

        var force = d3.layout.force().size([width,height]).nodes(d3.value(nodes)).links(link).on("tick",tick).linkDistance(300).start();

        var link = svg.selectAll(".link").data(links).enter().append("line").attr("class","link");

        var node = d3.select("#flags").selectAll(img).data(force.nodes()).enter().append('img').attr("class",function(d){
            return "flag flag-" + d.code;
        }).on("mouseover", mouseoverHandler).on("mousemove",mouseMoving).on("mouseout",mouseoutHandler);

        function tick(e){
            node.style("left",function(d){
                return d.x + "px";
            }).style("top",function(d){
                return d.y + "px";
            }).call(force.drag);
        }

        link.attr("x1",function(d){return d.source.x})
            .attr("y1",function(d){return d.souce.y})
            .attr("x2",function(d){return d.source.x})
            .attr("y2", function(d){return d.souce.y})

        function mouseoverHandler(d){
            tooltip.transition.style("opacity", .9)
            tooltip.html("<p>"+ d[country]+ "</p>");
        }
    })
});