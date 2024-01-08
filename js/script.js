// Dynamically set margin-top for the hero section based on the navbar height
document.addEventListener("DOMContentLoaded", function () {
    var navbarHeight = document.getElementById("mainNavbar").offsetHeight;
    document.getElementById("heroSection").style.marginTop = navbarHeight + "px";
});

// checking if the input field value is positive integer value
document.addEventListener("DOMContentLoaded", function() {
    var inputField = document.getElementById("positiveNumberInput");
    var errorMessage = document.getElementById("error-message");

    inputField.addEventListener("input", function() {
        var inputValue = inputField.value.trim();

        if (/^\d+$/.test(inputValue) && parseInt(inputValue) >= 0) {
            // Valid positive integer
            errorMessage.textContent = "";
        } else {
            // Invalid input
            errorMessage.textContent = "Please enter a valid Age.";
        }
    });
});

// Function to check age and display corresponding card
function checkAge(event) {

    // Prevent the default form submission behavior
    event.preventDefault();

    var ageInput = document.getElementById('positiveNumberInput');
    var age = ageInput.value.trim();
    var resultCard = document.getElementById('resultCard');
    var resultText = document.getElementById('resultText');

    // Get the element by ID
    var childList = document.getElementById('child-list');
    var pg_13 = document.getElementById('PG-13');
    var adultList = document.getElementById('adult-list');

    if (age !== "") {
        if (age >= 18) {
            resultText.innerHTML = `
            <center>
                <div class="card" style="width:50%">
                    <img src="https://cdn.pixabay.com/photo/2023/07/16/19/41/mage-8131345_1280.png" class="card-img-top" alt="...">
                    <div class="card-body">
                        <p class="card-text text-center" style="color:#343a40;">You are an adult</p>
                        <p class="card-text" style="color:#343a40;">For our audience aged 18 and above, dive into a selection of movies catered to a more mature taste. Explore a variety of films suited to your preferences and make your movie nights memorable!</p>
                    </div>
                </div>
            </center>
            `;

            // add the 'd-none' class
            adultList.classList.remove('d-none');
            childList.classList.add('d-none');

        } else if (age < 18 && age >= 0) {
            resultText.innerHTML = `
            <center>
                <div class="card" style="width:50%">
                    <img src="https://cdn.pixabay.com/photo/2023/08/28/21/05/ai-generated-8220053_1280.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <p class="card-text text-center" style="color:#343a40;">You are a child</p>
                        <p class="card-text" style="color:#343a40;">If you're under 18, this recommendation is tailored just for you! Enjoy movies suitable for your age and have a great time with our specially curated suggestions.</p>
                    </div>
                </div>
            </center>
            `;

            if(age >= 13){
                // add the 'd-none' class
                adultList.classList.add('d-none');
                childList.classList.remove('d-none');
                pg_13.classList.remove('d-none');
            }else{
                // add the 'd-none' class
                adultList.classList.add('d-none');
                childList.classList.remove('d-none');
                pg_13.classList.add('d-none');
            }
        }else{
            
        }

        resultCard.style.display = 'block';
    } else {
        // Clear the result if the input field is empty
        resultCard.style.display = 'none';

        // Get the element by ID
        var childList = document.getElementById('child-list');

        // Remove the 'd-none' class
        childList.classList.add('d-none');

        var adultList = document.getElementById('adult-list');
            adultList.classList.remove('d-none');
    }
}

// Attach the function to the input field's change event
document.getElementById('ageInput').addEventListener('click', checkAge);

