// Execute the script when the DOM is fully loaded
$(document).ready(() => {
    // Initialize an empty array to store checked amenities
    let checkedAmenities = [];

    // Listen for changes on each input checkbox tag
    $('input[type="checkbox"]').change(function () {
        // Get the Amenity ID and Name from the data attributes of the checkbox
        const amenityData = {
            id: $(this).data('id'),
            name: $(this).data('name')
        };

        // Check if the checkbox is checked
        if (this.checked) {
            // If checked, add the Amenity ID and Name to the checkedAmenities array
            checkedAmenities.push(amenityData);
        } else {
            // If unchecked, remove the Amenity ID and Name from the checkedAmenities array
            checkedAmenities = checkedAmenities.filter(amenity => amenity.id !== amenityData.id);
        }

        // Create a comma-separated string of checked amenity names
        const updatedList = checkedAmenities.map(amenity => amenity.name).join(', ');

        // Update the text of the h4 tag inside the div with class 'amenities'
        $('.amenities h4').text(updatedList);
    });

    // Make a GET request to check API status
    $.get('http://localhost:5001/api/v1/status/', (response) => {
        // Check if the API status is "OK"
        if (response.status === "OK") {
            // If "OK", add the class 'available' to the div with id 'api_status'
            $('div#api_status').addClass('available');
        } else {
            // If not "OK", remove the class 'available' from the div with id 'api_status'
            $('div#api_status').removeClass('available');
        }
    }).fail(() => {
        // If the GET request fails, remove the class 'available' from the div with id 'api_status'
        $('div#api_status').removeClass('available');
    });

    // Make an AJAX request to retrieve places data
    $.ajax({
        // URL of the API endpoint for places search
        url: 'http://localhost:5001/api/v1/places_search/',
        // HTTP method type
        type: 'POST',
        // Expected data type of the response
        dataType: 'json',
        // Content type of the request body
        contentType: 'application/json',
        // Data to be sent in the request body
        data: '{}',
        // Callback function to handle successful response
        success: function (data) {
            // Append each place to the section.places element
            $('SECTION.places').append(data.map(place => {
                // Create HTML markup for each place
                return `<article>
                    <div class="title_box">
                        <h2>${ place.name }</h2>
                        <div class="price_by_night">\$${place.price_by_night}</div>
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
            }))
        }
    });

    // Listen for click event on button tag
    $('#search').click(function () {
        // Prepare filters object with checked amenities
        const filters = { amenities: checkedAmenities };
        // Call the search function with filters
        search(filters);
    });

    // Initial search without any filters
    search({});
});
