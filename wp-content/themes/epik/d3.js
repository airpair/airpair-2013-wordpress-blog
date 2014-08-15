var t1 = {name: "html", children:
    [{name: "head"}, {name: "body", children:
        [{name: "svg", active: true, children:
            [{name: "g.x", active: true, children:
                [{name: "g.tick", active: true}, {name: "path.domain", match: true, active: true}
                ]},
             {name: "g.y", active: true}
            ]}
        ]}
    ]};

var t2 = {name: "html", children:
    [{name: "head"}, {name: "body", children:
        [{name: "svg", active: true, children:
            [{name: "path.line", active: true, new: true}
            ]}
        ]}
    ]};

var t3 = {name: "html", children:
    [{name: "head"}, {name: "body", children:
        [{name: "svg", active: true, children:
            [{name: "g.x", active: true, children:
                [{name: "g.tick", active: true}, {name: "path.domain", select: true, active: true}
                ]},
             {name: "g.y", active: true},
             {name: "path.line", active: true, new: true}
            ]}
        ]}
    ]};

var t4 = {name: "html", children:
    [{name: "head"}, {name: "body", children:
        [{name: "svg", active: true, children:
            [{name: "g.x", active: true, children:
                [{name: "g.tick", active: true}, {name: "path.domain", active: true}
                ]},
             {name: "g.y", active: true},
             {name: "path.line", active: true, new: true}
            ]}
        ]}
    ]};

var t5 = {name: "html", children:
    [{name: "head"}, {name: "body", children:
        [{name: "svg", children:
            [{name: "g.x", children:
                [{name: "g.tick"}, {name: "path.domain"}
                ]},
             {name: "g.y"},
             {name: "g", active: true, children:
                 [{name: "path.line", active: true, new: true}
                 ]}
            ]}
        ]}
    ]};

var stepsize = 2000,
    tduration = 500;

var tree = d3.layout.tree()
    .size([400, 200]);
var line = d3.svg.diagonal()
    .projection(function(d) { return [d.x, d.y]; });

setup("anim1", t1, "svg", "path", "[data]");
setup("anim2", t2, "svg", "path", "[data]");
setup("anim3", t3, "svg", "path", "[data], function(d) { return d; }");
setup("anim4", t4, "svg", "path.line", "[data]");
setup("anim5", t5, "g", "path", "[data]");

function setup(id, data, root, selector, dataf) {
    var p = d3.select("#" + id).on("click", click),
        svg = p.append("svg").attr("height", 260);
    function click() {
        p.classed("animation--playing", true);
        drawTree(svg, data, root, selector, dataf, stepsize, tduration);
        setTimeout(function() {
            p.classed("animation--playing", false);
        }, 5 * stepsize);
    }
    drawTree(svg, data, root, selector, dataf, 50, 0);
    p.append("button")
        .text("▶ Play");
}

function drawTree(svg, data, root, selector, dataf, stepsize, tduration) {
    svg.selectAll("g").remove();
    var g = svg.append("g").attr("transform", "translate(80,10)");

    var nodes = tree.nodes(data).reverse(),
        links = tree.links(nodes);

    var node = g.selectAll("g.node")
          .data(nodes);

    var nodeEnter = node.enter().append("g")
          .attr("class", "node")
          .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });

    nodeEnter.append("circle")
          .attr("r", 5)
          .style("opacity", function(d) { return d.new ? 0 : 1; })
          .transition().duration(tduration).delay(1 * stepsize)
          .style("opacity", function(d) {
              if(d.new) {
                  return 0;
              } else if(d.active) {
                  return 1;
              } else {
                  return 0.5;
              }
          })
          .style("fill", function(d) { return d.active ? "steelblue" : "black"; })
          .filter(function(d) { return d.active; })
          .transition().duration(tduration).delay(2 * stepsize)
          .style("fill", function(d) { return (d.select || d.match) ? "red" : "steelblue"; })
          .transition().duration(tduration).delay(3 * stepsize)
          .style("fill", function(d) { return d.match ? "purple" : "steelblue"; })
          .transition().duration(tduration).delay(4 * stepsize)
          .style("opacity", 1)
          .style("fill", function(d) { return d.new ? "green" : "steelblue"; })
          .transition().duration(tduration).delay(5 * stepsize)
          .style("fill", "steelblue");

    nodeEnter.append("text")
          .attr("x", 8)
          .attr("dy", ".35em")
          .attr("text-anchor", "start")
          .text(function(d) { return d.name; })
          .style("opacity", function(d) { return d.new ? 0 : 1; })
          .transition().duration(tduration).delay(1 * stepsize)
          .style("opacity", function(d) {
              if(d.new) {
                  return 0;
              } else if(d.active) {
                  return 1;
              } else {
                  return 0.5;
              }
          })
          .filter(function(d) { return d.active; })
          .transition().duration(tduration).delay(2 * stepsize)
          .style("fill", function(d) { return (d.select || d.match) ? "red" : "black"; })
          .transition().duration(tduration).delay(3 * stepsize)
          .style("fill", function(d) { return d.match ? "purple" : "black"; })
          .transition().duration(tduration).delay(4 * stepsize)
          .style("opacity", 1)
          .style("fill", function(d) { return d.new ? "green" : "black"; })
          .transition().duration(tduration).delay(5 * stepsize)
          .style("fill", "black");

    var link = g.selectAll("path.link")
        .data(links);

    link.enter().insert("path", "g")
        .attr("class", "link")
        .attr("d", line)
        .style("opacity", function(d) { return d.target.new ? 0 : 1; })
        .transition().duration(tduration).delay(1 * stepsize)
        .style("opacity", function(d) {
            if(d.target.new) {
                return 0;
            } else if(d.source.active && d.target.active) {
                return 1;
            } else {
                return 0.5;
            }
        })
        .filter(function(d) { return d.source.active && d.target.active; })
        .transition().duration(tduration).delay(4 * stepsize)
        .style("opacity", 1);

    var t = svg.append("g").attr("transform", "translate(50,250)")
        .append("text");
    t.append("tspan")
        .style("opacity", 0)
        .transition().duration(tduration).delay(1 * stepsize)
        .style("opacity", 1)
        .text(root + ".");
    t.append("tspan")
        .style("opacity", 0)
        .attr("class", "select")
        .transition().duration(tduration).delay(2 * stepsize)
        .style("opacity", 1)
        .text("selectAll('" + selector + "')")
        .transition().duration(tduration).delay(3 * stepsize)
        .attr("class", "");
    t.append("tspan")
        .style("opacity", 0)
        .transition().duration(tduration).delay(3 * stepsize)
        .style("opacity", 1)
        .text(".");
    t.append("tspan")
        .style("opacity", 0)
        .transition().duration(tduration).delay(3 * stepsize)
        .style("opacity", 1)
        .attr("class", "match")
        .text("data(" + dataf + ")")
        .transition().duration(tduration).delay(4 * stepsize)
        .attr("class", "");
    t.append("tspan")
        .style("opacity", 0)
        .transition().duration(tduration).delay(4 * stepsize)
        .style("opacity", 1)
        .attr("class", "new")
        .text(".enter().append('path').attr('class', 'line')")
        .transition().duration(tduration).delay(5 * stepsize)
        .attr("class", "");
}