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
});
