const slides = document.querySelectorAll('.banner-slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

prevBtn.addEventListener('click', () => {
    currentSlide = (currentSlide > 0) ? currentSlide - 1 : slides.length - 1;
    showSlide(currentSlide);
});

nextBtn.addEventListener('click', () => {
    currentSlide = (currentSlide < slides.length - 1) ? currentSlide + 1 : 2;
    showSlide(currentSlide);
});

// Optional: Auto-slide
setInterval(() => {
    currentSlide = (currentSlide < slides.length - 1) ? currentSlide + 1 : 0;
    showSlide(currentSlide);
}, 8000);


//FAQ in the frequently asked questions
function toggleFAQ(header) {
    const content = header.nextElementSibling;
    const isVisible = content.style.display === 'block';
    const allContents = document.querySelectorAll('.faq-content');
    allContents.forEach(c => c.style.display = 'none'); // Hide all contents
    if (!isVisible) {
        content.style.display = 'block'; // Show only the clicked one
    }
}

function toggleSection(sectionId) {
    const allSections = document.querySelectorAll('.mobile-section');
    allSections.forEach((section) => {
        if (section.id === sectionId) {
            // Toggle visibility for the tapped section
            section.classList.toggle('active');
        } else {
            // Hide other sections
            section.classList.remove('active');
        }
    });
}

// Function to toggle the mobile dropdown menu visibility
function toggleDropdownMenu(menuId) {
    const menu = document.getElementById(menuId);
    if (menu.style.display === 'block') {
        menu.style.display = 'none'; // Hide the menu
    } else {
        menu.style.display = 'block'; // Show the menu
    }
}

// Function to toggle submenus
function toggleSubmenu(submenuId) {
    const submenu = document.getElementById(submenuId);
    if (submenu.style.display === 'block') {
        submenu.style.display = 'none'; // Hide the submenu
    } else {
        submenu.style.display = 'block'; // Show the submenu
    }
}

async function convertCurrency() {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;
    const resultDiv = document.getElementById('conversionResult');

    if (fromCurrency === toCurrency) {
      resultDiv.innerHTML = `Results: <span>${amount} ${toCurrency}</span>`;
      return;
    }

    try {
      const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
      const data = await response.json();
      const rate = data.rates[toCurrency];
      const convertedAmount = (amount * rate).toFixed(2);
      resultDiv.innerHTML = `Results: <span>${convertedAmount} ${toCurrency}</span>`;
    } catch (error) {
      resultDiv.innerHTML = '<span>Error fetching conversion rates.</span>';
    }
  }

  const chatIcon = document.getElementById('chat-icon');
const chatBox = document.getElementById('chat-box');
const closeChat = document.getElementById('close-chat');



document.addEventListener("DOMContentLoaded", () => {
    // Get elements
  
    const contactForm = document.getElementById("contact-form");
});
   



    // Show the contact form when the chat icon is clicked
document.getElementById("chat-icon").addEventListener("click", function() {
    const chatBox = document.getElementById("chat-box");
    chatBox.style.display = chatBox.style.display === "none" ? "block" : "none";
});

// Handle form submission
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get the form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // WhatsApp message format
    const whatsappMessage = `Hello, my name is ${name} and my email is ${email}. Here is my message: ${message}`;

    // WhatsApp link
    const phoneNumber = "233206995489"; // Replace with your WhatsApp phone number
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    // Redirect to WhatsApp
    window.open(whatsappLink, "_blank");

    // Reset the form
    document.getElementById("contact-form").reset();
    document.getElementById("chat-box").style.display = "none"; // Close the chat box
});


let cart = [];
const cartCountElement = document.getElementById("cart-count");
const cartItemsElement = document.getElementById("cart-items");
const checkoutButton = document.getElementById("checkout-button");

function toggleCart() {
    const cartDropdown = document.getElementById("cart-dropdown");
    if (cartDropdown.style.display === "block") {
        cartDropdown.style.display = "none";
    } else {
        cartDropdown.style.display = "block";
    }
}

function addToCart(productName) {
    cart.push(productName);
    updateCartUI();
}

function updateCartUI() {
    cartCountElement.textContent = cart.length;

    if (cart.length > 0) {
        checkoutButton.disabled = false;
        cartItemsElement.innerHTML = cart
            .map((item, index) => `<li>${index + 1}. ${item}</li>`)
            .join("");
    } else {
        checkoutButton.disabled = true;
        cartItemsElement.innerHTML = "<li>Your cart is empty.</li>";
    }
}

function checkout() {
    alert("Proceeding to checkout with items: " + cart.join(", "));
    // Redirect or perform further checkout logic here
}



        // Detect when sections come into view
document.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const windowHeight = window.innerHeight;

    sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top <= windowHeight - 100;

        if (isVisible) {
            section.classList.add("in-view");
        } else {
            section.classList.remove("in-view");
        }
    });
});

