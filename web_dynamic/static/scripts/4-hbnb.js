// Execute the script when the DOM is fully loaded
$(document).ready(function () {
    // Object to store the names of checked amenities with their IDs
    const checkedAmenities = {};

    // Event listener for checkbox clicks
    $('input:checkbox').click(function () {
        // Check if the checkbox is checked
        if ($(this).is(":checked")) {
            // Add the amenity to the checkedAmenities object
            checkedAmenities[$(this).attr('data-id')] = $(this).attr('data-name');
        } else {
            // Remove the amenity from the checkedAmenities object
            delete checkedAmenities[$(this).attr('data-id')];
        }

        // Update the text of the h4 tag inside the div with class 'amenities'
        $('.amenities h4').text(Object.values(checkedAmenities).join(', '));
    });

    // Make a GET request to check API status
    $.get("http://localhost:5001/api/v1/status/", function (response) {
        // Check if the API status is "OK" and update the status indicator
        if (response.status == "OK") {
            $('DIV#api_status').addClass("available");
        } else {
            $('DIV#api_status').removeClass("available");
        }
    });

    // Function to perform a search with given filters
    const performSearch = function (filters = {}) {
        $.ajax({
            type: 'POST',
            url: 'http://localhost:5001/api/v1/places_search',
            data: JSON.stringify(filters),
            contentType: 'application/json',
            success: function (data) {
                // Clear existing places and append new places
                $('SECTION.places').empty();
                $('SECTION.places').append(data.map(place => {
                    return `<article>
                                <div class="title_box">
                                    <h2>${place.name}</h2>
                                    <div class="price_by_night">${place.price_by_night}</div>
                                </div>
                                <div class="information">
                                    <div class="max_guest">${place.max_guest} Guests</div>
                                    <div class="number_rooms">${place.number_rooms} Bedrooms</div>
                                    <div class="number_bathrooms">${place.number_bathrooms} Bathrooms</div>
                                </div>
                                <div class="description">
                                    ${place.description}
                                </div>
                            </article>`;
                }));
            }
        });
    };

    // Event listener for the search button click
    $('#search').click(function () {
        // Prepare filters object with checked amenities
        const filters = { amenities: Object.keys(checkedAmenities) };
        // Call the performSearch function with filters
        performSearch(filters);
    });

    // Perform an initial search without any filters
    performSearch();
});
