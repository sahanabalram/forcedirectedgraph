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

    d3.json("https://raw.githubusercontent.com/DealPete/forceDirected/master/countries.json")
});