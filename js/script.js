
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

    return false;
};

$('#form-container').submit(loadData);

// loadData();
