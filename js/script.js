
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // load streetview

    // YOUR CODE GOES HERE!

    /**
     * Retrieve city and address values and then construct the request URL
     *
     */
    var streetValue = $('#street').val();
    var cityValue = $('#city').val();
    var fullAddress = streetValue + ', ' + cityValue;

    if( "" == streetValue || "" == cityValue ) {
        alert("You must provide an address!");
        return false;
    }

    $greeting.text('Wow! I like ' + fullAddress + ' too!');

    var streetviewURL = 'https://maps.googleapis.com/maps/api/streetview?size=600x400&location=' + fullAddress;

    $body.append(
        $('<img>').attr({
            'class' : 'bgimg',
            'src'   : streetviewURL
        })
    );

    /**
     * Request articles from NYTimes Website
     *
     */
    var nytURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=65f5ceb872b24700a3e153a83d627480&q=' + cityValue + '&sort=newest';

    $.getJSON( nytURL, function( data ) {

        $nytHeaderElem.text('New York Times Articles about ' + cityValue);
        var posts = data.response.docs;
        for( var i = 0, l = posts.length; i < l; i++ ) {

            var listHTML = $('<li/>').attr('class', 'article');
            var linkHTML = $('<a/>').attr('href', posts[i].web_url).text(posts[i].headline.main);
            var descHTML = $('<p/>').text(posts[i].snippet);

            $nytElem.append(listHTML.append(linkHTML).append(descHTML));

        }

    });

    return false;
};

$('#form-container').submit(loadData);

// loadData();
