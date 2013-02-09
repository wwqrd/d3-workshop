(function( d3 ) {

    var svg,
        xScale,
        yScale,
        border = 25;
        width = 800,
        height = 600;

    // Create a workspace
    svg = d3.select( '#visualisation' )
        .append( 'svg' )
        .attr( 'width', width )
        .attr( 'height', height );

    // Loading data
    d3.csv( 'data/titanic.csv', function( data ) {

        xScale = d3.scale.linear()
            .domain([
                0,
                d3.max( data, function( d ) { return parseFloat( d.age, 10 ); })
            ])
            .range([ border, width - border ]);

        yScale = d3.scale.linear()
            .domain([
                1,
                3
            ])
            .range([ height * 0.25, height * 0.75 ]);

        svg.selectAll( '.person' )
            .data( data )
            .enter().append( 'circle' )
            .attr( 'class','person' )
            .style( 'fill', 'black' )
            .style( 'opacity', 0.25 )
            .attr( 'r', 20 )
            .attr( 'cx', 50 )
            .attr( 'cy', '50%' );

        // DOM IS THE DATA
        svg.selectAll( '.person' )
            .attr( 'cx', function( d ) { return xScale( d.age ); })
            .attr( 'cy', function( d ) { return yScale( d.pclass ); })
            .style( 'fill', function( d ) { return ( d.survived === '1' ? 'blue' : 'red' ); });

    });

})( d3 );
