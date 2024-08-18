document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const destination = document.getElementById('destination').value;
    const checkin = document.getElementById('checkin').value;
    const checkout = document.getElementById('checkout').value;
    const guests = document.getElementById('guests').value;

    fetch(`/api/hotels?destination=${destination}&checkin=${checkin}&checkout=${checkout}&guests=${guests}`)
        .then(response => response.json())
        .then(data => {
            const hotelsList = document.getElementById('hotelsList');
            hotelsList.innerHTML = '';
            data.forEach(hotel => {
                const hotelDiv = document.createElement('div');
                hotelDiv.classList.add('hotel');
                hotelDiv.innerHTML = `
                    <h3>${hotel.name}</h3>
                    <p>${hotel.description}</p>
                    <p>Price: $${hotel.price}</p>
                    <button onclick="viewHotel(${hotel.id})">View</button>
                `;
                hotelsList.appendChild(hotelDiv);
            });
        });
});

function viewHotel(id) {
    window.location.href = `/hotel.html?id=${id}`;
}
