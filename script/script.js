document.addEventListener("DOMContentLoaded", () => {
    const inputs = document.querySelectorAll(".form-group input");

    // Input field behavior
    inputs.forEach((input) => {
        input.addEventListener("input", () => {
            if (input.value.trim() !== "") {
                input.classList.add("filled");
            } else {
                input.classList.remove("filled");
            }
        });
    });

    let roomsData = []; // Declare roomsData to hold fetched data

    // Ambil token dari cookie
    const authToken = getCookie('Authorization');
    console.log("Auth Token:", authToken); // Debug: Periksa token

    // Periksa jika token ada sebelum fetch
    if (!authToken) {
        console.error("Authorization token not found. Please login.");
        // Anda mungkin ingin mengarahkan ke halaman login di sini
        // window.location.href = "/page/login.html";
        return; 
    }

    // Kirim permintaan fetch dengan Authorization header
    fetch('https://beaps.vercel.app/rooms', { // URL API Diperbarui
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authToken}`, // Menggunakan variabel authToken
        },
        credentials: 'include', // Pastikan credentials disertakan
    })
    .then((response) => {
        // Periksa jika respons tidak ok (misal: 401 Unauthorized)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then((data) => {
        roomsData = data; // Store fetched data
        const roomsContainer = document.querySelector(".popular__grid");
        
        if (!roomsContainer) {
            console.error("Error: .popular__grid container not found.");
            return;
        }
        
        roomsContainer.innerHTML = ""; // Clear the container first

        // Display the fetched rooms in the grid
        data.forEach((room) => {
            const roomElement = document.createElement("div");
            roomElement.classList.add("popular__card");
            roomElement.innerHTML = `
                <img src="${room.image_url || 'assets/g2.jpg'}" alt="Ruangan ${room.name}" />
                <div class="popular__content">
                    <div class="popular__card__header">
                        <h4>${room.name}</h4>
                        <h4>${room.capacity} Orang</h4>
                    </div>
                    <div class="popular__description">
                        <p>${room.description}</p>
                        <a href="/page/informasi.html?id=${room.id}">
                            <button class="btn lebih__lanjut">Detail</button>
                        </a>
                    </div>
                </div>
            `;
            roomsContainer.appendChild(roomElement);
        });
    })
    // .catch dipindahkan ke akhir chain untuk menangkap semua error
    .catch((error) => console.error("Error fetching data:", error)); 

    // Function to get a specific cookie
    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(";").shift();
        return "";
    }
});
