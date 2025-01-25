const container = document.querySelector(".data-container");
var FLAG = false;
var DELAY = 500;
var w = globalThis.screen.availWidth;
var h = 370;
var data_nodes = [];
var data_edges = [];
var radius = 25;
var strokeWidth = "5px";
var drawing = false;
var xy0;
var xy1;
var g = new UnweightedUndirectedGraph();
var vertexCount = 0;
var firstVert;
var secVert;
var running = false;


function setDelay(delay) {
  DELAY = delay;
}

var xScale = d3.scaleLinear().domain([0, w]).range([0, w]);

var yScale = d3.scaleLinear().domain([0, h]).range([0, h]); // Set margins for y specific

var svg = d3.select("#visu");
svg.append("g").attr("id", "g-paths");

svg.on("click", async function () {
  if (!running) {
    var coords = d3.mouse(this);
    drawing = false;
    await newVertex(coords);
  }
});

async function newVertex(coords) {
  return new Promise((resolve) => {
    var newData = {
      x: Math.round(xScale.invert(coords[0])), 
      y: Math.round(yScale.invert(coords[1])),
    };

    data_nodes.push(newData); 
    g.addVertex(vertexCount++);

    var groups = svg
      .selectAll("circle") 
      .data(data_nodes)
      .enter()
      .append("g")
      .attr("id", function (d, i) {
        return "g" + i;
      });
    groups
      .append("circle")
      .attr("cx", function (d) {
        return xScale(d.x);
      }) 
      .attr("cy", function (d) {
        return yScale(d.y);
      })
      .transition()
      .duration(500)
      .attr("r", radius)
      .attr("fill", "white")
      .attr("stroke", "black")
      .attr("stroke-width", strokeWidth)
      .attr("id", function (d, i) {
        return "circle" + i;
      });
    setTimeout(() => {
      groups
        .append("text")
        .text(function (d, i) {
          return i;
        })
        .attr("x", function (d) {
          return xScale(d.x) - 5;
        }) 
        .attr("y", function (d) {
          return yScale(d.y) + 5;
        })
        .attr("font-family", "sans-serif")
        .attr("font-size", "18px")
        .attr("font-weight", "bold");
    }, 300);
    groups.on("click", function (d, i) {
      var e = d3.event;
      e.cancelBubble = true;
      if (e.stopPropagation) e.stopPropagation();
      if (!running) {
        if (!drawing) {
          drawing = true;
          var choords = d3.mouse(this);
          xy0 = {
            x: Math.round(xScale.invert(coords[0])), // Takes the pixel number to convert to number
            y: Math.round(yScale.invert(coords[1])),
          };
          firstVert = i;
          //----------------////////////////////////////
          svg.select("#circle" + i).attr("stroke", "#4d00d1");
        } else {
          var choords = d3.mouse(this);
          secVert = i;
          xy1 = {
            x: Math.round(xScale.invert(coords[0])), // Takes the pixel number to convert to number
            y: Math.round(yScale.invert(coords[1])),
          };
          var line = d3
            .line()
            .x(function (d) {
              return d.x;
            })
            .y(function (d) {
              return d.y;
            })
            .curve(d3.curveLinear);
          if (xy0.x != xy1.x || xy0.y != xy1.y) {
            if (!g.edgeExists(firstVert, secVert)) {
              g.addEdge(firstVert, secVert);
              svg
                .select("#g-paths")
                .append("path")
                .transition()
                .duration(300)
                .attr("d", line([xy0, xy1]))

                //---- path line --------- 
                .attr("stroke", "#4205a3")
                .attr("stroke-width", 4)
                .attr("fill", "none")
                .attr("id", function (d, i) {
                  data_edges.push({
                    v1: firstVert,
                    v2: secVert,
                    id: data_edges.length,
                  });
                  return "path" + (data_edges.length - 1);
                });
            }
          }
          drawing = false;
          svg.select("#circle" + firstVert).attr("stroke", "black");
          svg.select("#circle" + secVert).attr("stroke", "black");
        }
      }
    });
    setTimeout(() => {
      groups.on("mouseover", function (d, i) {
        if (!running) {
          svg
            .select("#circle" + i)
            .transition()
            .duration(250)
            //------ color clicking -------------- 
            //- mouse hover ---------- 
            .attr("stroke", "#4d00d1")
            .attr("stroke-width", "10px");
        }
      });
      groups.on("mouseout", function (d, i) {
        if (!running) {
          if (!drawing) {
            svg
              .select("#circle" + i)
              .transition()
              .duration(250)
              .attr("stroke", "black")
              .attr("stroke-width", "5px");
          } else {
            svg
              .select("#circle" + i)
              .transition()
              .duration(250)
              .attr("stroke-width", "5px");
          }
        }
      });
    }, 510);

    setTimeout(() => {
      resolve();
    }, 350);
  });
}

async function newEdge(v1, v2) {
  return new Promise((resolve) => {
    var xy_0 = data_nodes[v1];
    var xy_1 = data_nodes[v2];

    var line = d3
      .line()
      .x(function (d) {
        return d.x;
      })
      .y(function (d) {
        return d.y;
      })
      .curve(d3.curveLinear);

    if (!g.edgeExists(v1, v2)) {
      g.addEdge(v1, v2);
      svg
        .select("#g-paths")
        .append("path")
        .transition()
        .duration(300)
        .attr("d", line([xy_0, xy_1]))

        .attr("stroke", "#4205a3")
        .attr("stroke-width", 4)
        .attr("fill", "none")
        .attr("id", function (d, i) {
          data_edges.push({ v1: v1, v2: v2, id: data_edges.length });
          return "path" + (data_edges.length - 1);
        });
    }
    setTimeout(() => {
      resolve();
    }, 300);
  });
}

async function findEdgeForAnim(qe, nb) {
  return new Promise((resolve) => {
    for (var i in data_edges) {
      var stop = false;
      if (
        (data_edges[i].v1 == qe && data_edges[i].v2 == nb) ||
        (data_edges[i].v1 == nb && data_edges[i].v2 == qe)
      ) {
        d3.select("#path" + data_edges[i].id)
          .transition()
          .duration(500)
          //-----------------------------
          .attr("stroke", "#7b00d9")
          .attr("stroke-width", 10);
        setTimeout(() => {
          d3.select("#path" + data_edges[i].id)
            .transition()
            .duration(500)

            //-------------------------------
            .attr("stroke", "#7b00d9")
            .attr("stroke-width", 4);
        }, DELAY);
        setTimeout(() => {
          resolve();
        }, DELAY * 2);
        break;
      }
    }
  }, 1000);
}

function highlightCode(elementClass) {
  $(".code-highlight").removeClass("code-highlight");
  $(`.${elementClass}`).addClass("code-highlight");
}

async function timeout(delay) {
  await new Promise((resolve) =>
    setTimeout(() => {
      resolve();
    }, delay)
  );
}

async function bfs() {
  running = true;
  $("#start-button").prop("disabled", true);
  $(".button-top").prop("disabled", true);
  $("#nodes").html("()");

  highlightCode("1");
  await timeout(DELAY / 10);

  var startingNode =
    !$("#start-node").val() ||
    Number($("#start-node").val() > data_nodes.length - 1)
      ? 0
      : Number($("#start-node").val());

  highlightCode("2");
  await timeout(DELAY / 10);

  var visited = [];
  var graph = g;

  highlightCode("3");
  await timeout(DELAY / 10);

  for (let i = 0; i < graph.getNoOfVertices(); i++) {
    visited[i] = false;
  }

  highlightCode("4");
  await timeout(75);
  highlightCode("5");
  await timeout(DELAY / 10);

  var q = [];

  highlightCode("6");
  await timeout(DELAY / 10);

  visited[startingNode] = true;

  highlightCode("7");
  await timeout(DELAY / 10);

  q.push(startingNode);

  highlightCode("8");
  await timeout(DELAY / 10);

  while (q.length != 0) {
    highlightCode("9");
    var queueElement = q.shift();
    d3.select("#circle" + queueElement)
      .transition()
      .duration(500)
      //--------------------------------
      .attr("stroke", "#6502d6")
      .attr("stroke-width", "10px");
    await timeout(DELAY);

    highlightCode("10");
    await timeout(DELAY / 10);

    var neighbours = graph.adjList.get(queueElement);

    highlightCode("11");
    await timeout(DELAY / 10);

    for (var i in neighbours) {
      highlightCode("12");
      await timeout(DELAY / 10);

      var nb = neighbours[i];

      highlightCode("13");
      await findEdgeForAnim(queueElement, nb);

      if (!visited[nb]) {
        highlightCode("14");
        await timeout(DELAY / 10);

        visited[nb] = true;
        highlightCode("15");
        await timeout(DELAY / 10);

        q.push(nb);
      }
    }
    d3.select("#circle" + queueElement)
      .transition()
      .duration(500)
      .attr("stroke", "black")
      .attr("stroke-width", "5px");
    var currText = Array.from($("#nodes").text());
    currText.splice(
      currText.length - 1,
      0,
      queueElement.toString() + " "
    );
    currText = currText.join("");

    $("#nodes").html(currText);
  }
  $("#start-button").prop("disabled", false);
  $(".button-top").prop("disabled", false);
  running = false;
}

function clearCanvas() {
  data_edges = [];
  data_nodes = [];
  vertexCount = 0;
  g = new UnweightedUndirectedGraph();
  drawing = false;

  svg.selectAll("*").remove();
  svg.append("g").attr("id", "g-paths");
}

function getRowCol(numVerts, taken) {
  row = Math.round(Math.random() * (numVerts - 1));
  col = Math.round(Math.random() * (numVerts - 1));

  while (taken[row][col]) {
    row = Math.round(Math.random() * (numVerts - 1));
    col = Math.round(Math.random() * (numVerts - 1));
  }

  taken[row][col] = true;

  return { row: row, col: col, taken: taken };
}

async function randomGraph() {
  $("#start-button").prop("disabled", true);
  $(".button-top").prop("disabled", true);
  var numberVerts = Math.round(Math.random() * 4 + 4);
  var maxEdges = (numberVerts * (numberVerts - 1)) / 2;
  var numberEdges = Math.round(
    Math.random() * (maxEdges - numberVerts) + numberVerts
  );
  var cellHeight = Math.round(h / 6);
  var cellWidth = Math.round(w / 6);
  var row = 0;
  var col = 0;
  var x = 0;
  var y = 0;
  var v1;
  var v2;
  var taken = [];

  for (let x = 0; x < 6; x++) {
    var row = [];
    for (let y = 0; y < 6; y++) {
      row.push(false);
    }
    taken.push(row);
  }

  clearCanvas();

  for (let i = 0; i < numberVerts; i++) {
    var rowcol = getRowCol(6, taken);
    row = rowcol.row;
    col = rowcol.col;
    taken = rowcol.taken;

    x = Math.round(cellWidth * col + Math.random() * 25);
    y = Math.round(cellHeight * row + Math.random() * 25);
    await newVertex([x, y]);
  }

  for (let j = 0; j < numberEdges; j++) {
    v1 = Math.round(Math.random() * (numberVerts - 1));
    v2 = Math.round(Math.random() * (numberVerts - 1));
    let breaker = 0;

    while (v1 == v2 || g.edgeExists(v1, v2)) {
      if (breaker < 100) {
        v2 = Math.round(Math.random() * (numberVerts - 1));
      }
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, DELAY / 10)
      );
      breaker++;
    }
    if (breaker < 100) await newEdge(v1, v2);
  }
  $("#start-button").prop("disabled", false);
  $(".button-top").prop("disabled", false);
}



// ----------------------------------------------------- 

$(document).ready(function () {
    d3.select("#visu")
      .attr("width", "100%")
      .attr("height", "370")
      .attr("viewBox", "0 0 " + globalThis.screen.availWidth + " 370");

    var speedSlider = new Slider("#speedslider", {
      reversed: true,
      tooltip: "none",
      handle: "square",
    });

    speedSlider.on("slide", function (slideEvt) {
      setDelay(slideEvt);
    });
  });