function randomValue(){
    return Math.random()*100
  }
const data = dataArray()
var width = 600, height = 500, spacing = 120;
function dataArray(){
    const data1 = []
    for(let i = 0;i<100;i++){
      const name = 'var' + i
      const obj = {varx:randomValue(),value:randomValue()}
      data1.push(obj)
    }
    console.log(data1)
    return data1
  }
var svg = d3.select("body").append("svg")
    .attr("width",width).attr("height",height)
    .style("background","lightskyblue")
    .append("g")
    .attr("transform","translate(" + spacing/2 + "," + spacing/2 + ")");
var xScale = d3.scaleLinear()
    .domain([d3.min(data, function(d){return d.varx;})-1,d3.max(data, function(d){return d.varx;})+1])
    .range([0,width-spacing]);
var yScale = d3.scaleLinear()
    .domain([0,d3.max(data, function(d){return d.value;})])
    .range([height-spacing,0]);
var xAxis = d3.axisBottom(xScale);
var yAxis = d3.axisLeft(yScale);
svg.append("g").attr("transform", "translate(0,"+ (height - spacing) + ")").call(xAxis);
svg.append("g").call(yAxis);
var dots = svg.append("g")
    .selectAll("dot").data(data);
dots.enter().append("circle")
    .attr("cx",function(d){return xScale(d.varx);})
    .attr("cy",function(d){return yScale(d.value);})
    .attr("r",3)
    .style("fill","red");
