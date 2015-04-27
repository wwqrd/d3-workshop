(function( d3 ) {

    var svg,
        border = 50;

    // Create a workspace
    svg = d3.select('#visualisation')
        .append('svg')
        .attr('width', 800)
        .attr('height', 500);

    // Loading data
    d3.csv('data/titanic.csv', function(data) {

        svg.selectAll('circle')
            .data(data)
            .enter().append('circle')
            .style('fill', 'black')
            .style('opacity', 0.5)
            .attr('r', 20)
            .attr('cx', 50)
            .attr('cy', 250);

        function didSurvive(survived) {
            return survived == 1;
        }

        // DOM IS THE DATA
        svg.selectAll('circle')
            .attr('cx', function(d) { return border + d.age * 15; })
            .attr('cy', function(d) { return border + d.pclass * 100; })
            .style('fill', function(d) { return didSurvive(d.survived) ? 'blue' : 'red'; });

    });

})( d3 );
