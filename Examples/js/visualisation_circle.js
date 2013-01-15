(function( d3 ) {

    // Create a workspace
    var svg = d3.select('#visualisation')
        .append('svg')
        .attr('width', '100%')
        .attr('height', '100%');

    // Add a circle
    // Notice that the event is regular javascript bound to the svg element!
    // d3 just gives us some helpers so we can generate it all dynamically.

    svg.append('circle')
        .style('stroke', 'gray')
        .style('fill', 'white')
        .attr('r', 40)
        .attr('cx', 50)
        .attr('cy', 50)
        .on('mouseover', function(){d3.select(this).style('fill', 'aliceblue');})
        .on('mouseout', function(){d3.select(this).style('fill', 'white');})
        .on('click', animate);

    // d3 gives us helpful stuff, like animations!
    function animate() {
        d3.select(this).transition()
            .delay(100)
            .duration(1000)    
            .attr('r', 10)
            .attr('cx', 30)
            .style('fill', 'black');
   }

})( d3 );
