// Search location
document.addEventListener('DOMContentLoaded', () => {
  const cities = [
    "Karachi", "Lahore", "Islamabad", "Faisalabad", "Rawalpindi",
    "Multan", "Peshawar", "Quetta", "Sialkot", "Gujranwala",
    "Hyderabad", "Abbottabad", "Bahawalpur", "Sargodha", "Sukkur",
    "Larkana", "Sheikhupura", "Jhang", "Rahim Yar Khan", "Mardan",
    "Loralai", "Kohat", "Jhelum", "Khanewal", "Dera Ghazi Khan",
    "Gwadar", "Muzaffarabad", "Mirpur", "Kotli", "Chiniot",
    "Hub", "Dera Ismail Khan", "Mandi Bahauddin", "Shikarpur", "Jacobabad",
    "Nowshera", "Charsadda", "Kamalia", "Layyah", "Swabi",
    "Khushab", "Daska", "Gojra", "Mandi", "Kharian",
    "Chaman", "Hangu", "Karak", "Swat", "Malakand",
    "Mansehra", "Chakwal", "Toba Tek Singh", "Kandhkot", "Ghotki",
    "Kasur", "Okara", "Mianwali", "Hafizabad", "Sahiwal",
    "Attock", "Vehari", "Bannu", "Timergara", "Tank",
    "Kohlu", "Sibi", "Zhob", "Haripur", "Lodhran",
    "Bhakkar", "Badin", "Sanghar", "Kamber Ali Khan", "Kandiaro",
    "Sahiwal", "Pakpattan", "Okara", "Arifwala", "Depalpur",
    "Renala Khurd", "Chichawatni", "Harappa", "Kameer", "Gogera",
    "Tandlianwala", "Mandi Bahauddin", "Phalia", "Pind Dadan Khan", "Kharian",
    "Malakwal", "Bhera", "Kot Momin", "Khushab", "Noorpur Thal",
    "Jauharabad", "Haveli Lakha", "Rahim Yar Khan", "Khanpur", "Sadiqabad",
    "Liaqatpur", "Zahir Pir", "Kot Samaba", "Kot Sabzal", "Kot Mithan",
    "Kot Addu", "Layyah", "Karor Lal Esan", "Chowk Azam", "Fort Abbas",
    "Ahmedpur East", "Dunyapur", "Jatoi", "Kahror Pacca", "Kot Sultan",
  ];
  const input = document.getElementById('cityInput');
  const suggestionList = document.getElementById('suggestionList');

  input.addEventListener('input', () => {
    const query = input.value.toLowerCase();

    // Show suggestions only when input length is greater than zero
    if (query.length > 0) {
      const filteredCities = cities.filter(city => city.toLowerCase().includes(query));
      renderSuggestions(filteredCities);
    } else {
      // Clear suggestions if input is empty
      suggestionList.innerHTML = '';
    }
  });

  /*changeContent*/
  function renderSuggestions(suggestions) {
    suggestionList.innerHTML = '';

    suggestions.forEach(city => {
      const li = document.createElement('li');
      li.textContent = city;
      li.addEventListener('click', () => {
        input.value = city;
        suggestionList.innerHTML = '';
      });
      suggestionList.appendChild(li);
    });
  }
});

var defaultImage = 'url(default.png)';
var defaultHeading = 'Trusted since 2001';
var defaultSubHeading = 'We are Travel Agent';
var defaultContent = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit...';

function changeContent(type) {
  var imageContainer = document.getElementById('imageContainer');
  var heading = document.getElementById('heading');
  var subHeading = document.getElementById('subHeading');
  var content = document.getElementById('content');

  // Update content based on the button clicked
  if (type === 'flight') {
    imageContainer.style.backgroundImage = 'url(Assets/Images/Aeroplane.jpg)';
    heading.textContent = 'Flight Services';
    subHeading.textContent = 'Book your flights with us';
    content.textContent = 'A marvel of modern aviation that redefines the way we travel. Step aboard and enter a world of comfort, efficiency, and cutting-edge technology.Our sleek and aerodynamic design not only enhances fuel efficiency but also provides a smooth and stable flight experience. The spacious and thoughtfully designed cabin ensures that every passenger enjoys ample legroom and a comfortable seat, whether you are traveling for business or leisure.';
  } else if (type === 'cab') {
    imageContainer.style.backgroundImage = 'url(Assets/Images/cab.jpg)';
    heading.textContent = 'Cab Services';
    subHeading.textContent = 'Explore the city comfortably';
    content.textContent = 'Step into our sleek and clean cabs, where youll find a comfortable and spacious interior designed for a pleasant journey. Our drivers are not just professionals behind the wheel but also courteous guides who know the city inside out, ensuring you reach your destination swiftly and safely.Equipped with the latest GPS technology, our cabs take the most efficient routes, saving you time and ensuring a hassle-free ride. Your safety is our top priority, and our vehicles undergo regular maintenance checks to meet the highest standards of reliability.';
  } else if (type === 'hotel') {
    imageContainer.style.backgroundImage = 'url(Assets/Images/hotel.jpg)';
    heading.textContent = 'Hotel Services';
    subHeading.textContent = 'Luxurious stays for your trip';
    content.textContent = 'Welcome to [Hotel Name], where luxury meets comfort in the heart of [City or Location]. Our elegant hotel is designed to provide you with an unforgettable experience, whether you are traveling for business or leisure.Upon entering our lobby, you ll be greeted by a warm and attentive staff dedicated to making your stay exceptional. Our well-appointed rooms and suites boast modern amenities, plush furnishings, and breathtaking views of the city/surrounding landscape.';
  }

  // Reset to default values if no match is found
  if (!['flight', 'cab', 'hotel'].includes(type)) {
    imageContainer.style.backgroundImage = defaultImage;
    heading.textContent = defaultHeading;
    subHeading.textContent = defaultSubHeading;
    content.textContent = defaultContent;
  }
}
// LOGIN FUNCTIONALITY
document.getElementById('loginLink').addEventListener('click', function () {
  window.location.href = 'C:/Users/cc/OneDrive/Desktop/Lastproject/login.html';

});