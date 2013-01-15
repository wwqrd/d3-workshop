(function( d3 ) {

    // Create a workspace
    var svg = d3.select('#visualisation')
        .append('svg')
        .attr('width', '100%')
        .attr('height', '100%');

    // Loading data
    d3.csv("data/titanic.csv", function( data ) {
        svg.selectAll( 'circle' )
            .data( data )
            .enter().append('circle')
            .style('fill', 'black')
            .style('opacity', 0.5)
            .attr('r', 20)
            .attr('cx', 50)
            .attr('cy', '50%');

        var border = 50;

        // DOM IS THE DATA
        svg.selectAll('circle')
            .attr('cx', function(d) { return border + d.age*15; })
            .attr('cy', function(d) { return border + d.pclass*100; })
            .style('fill', function( d ) { return ( d.survived === '1' ? 'blue' : 'red' ); });

    });

})( d3 );
