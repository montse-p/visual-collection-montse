//Adds memory objects as const
    // From the "05_dynamically_adding_content"
const memories = [
    {
        id: 1,
        title: "Practicing Perspective",
        backedUpDate: 'Jan 2, 2014',
        fileType: ".jpg",
        cameraLens: "0.4MP",
        screenResolution: "893 x 491",
        people: "Montserrat Pagan",
        sample: `<img src="Practicing-Perspective.jpg" alt="Girl smiling through a toy donut hole."></img>`,
        // Originally I had categories organized as shown:
            // category: "all image-category",
        // The above did not work when filtering categories; 
        // ChatGPT suggested I put it in an array
        category: ["all", "image-category"],
        description: "Montse's portrait through a keychain donut hole perspective.",
    },
    {
        id: 2,
        title: "Bubby the Elephant",
        backedUpDate: 'Mar 29, 2014',
        fileType: ".mp4",
        cameraLens: "0.4MP",
        screenResolution: "854 x 480",
        people: "Montserrat Pagan, Camila Pagan, and Maribel Pagan",
        // Embed Video HTML: A Step-by-Step Guide from https://careerkarma.com/blog/embed-video-html/
        sample: `<video controls="controls" src="bubby-the-elephant.mp4"> 
            This browser does not support the video element. </video>`,
        category: "all stop-motion",
        description: "A baby elephant named Bubby gets lost from his mom.",
        
    },
    {
        id: 3,
        title: "Clay Dough World",
        backedUpDate: "Mar 12, 2014",
        fileType: ".mp4",
        cameraLens: "0.4MP",
        screenResolution: "854 x 480",
        people: "Montserrat Pagan and Natalia Pagan",
        sample: `<video controls="controls" src="Clay-Dough-World.mp4"> 
        This browser does not support the video element. </video>`,
        category: "all stop-motion",
        description: "A clay world slowy starts to build itself.",
    },
    {
        id: 4,
        title: "Spies Clip: Villain Disappears",
        backedUpDate: "Mar 11, 2014",
        fileType: ".mov",
        cameraLens: "0.2MP",
        screenResolution: "640 x 360",
        people: "Montserrat Pagan",
        sample: `<video controls="controls" src="spies-villain-disappears.mp4"> 
        This browser does not support the video element. </video>`,
        category: "all match-cuts play-filter",
        description: "A villain, Mr. Lizard, escapes from his lair.",
    },
    {
        id: 5,
        title: "Spies Clip: 'Scooby-Doo' Doors",
        backedUpDate: "Mar 11, 2014",
        cameraLens: "0.2MP",
        screenResolution: "641 x 360",
        people: "Montserrat Pagan, Camila Pagan, and Pilar Rodriguez Price",
        sample: `<video controls="controls" src="spies-scooby-doors.mp4"> 
        This browser does not support the video element. </video>`,
        category: "all match-cuts play-filter",
        description: "Two young spies are searching through Mr Lizard's lair.",
    },
    {
        id: 6,
        title: "Ball",
        backedUpDate: "Mar 11, 2014",
        fileType: ".mp4",
        cameraLens: "0.4MP",
        screenResolution: "854 x 480",
        people: "Montserrat Pagan",
        sample: `<video controls="controls" src="Ball.mp4"> 
        This browser does not support the video element. </video>`,
        category: "all stop-motion",
        description: "An owner and her dog play fetch.",
    },
    {
        id: 7,
        title: "Umbrelli Saves the Day",
        backedUpDate: "Mar 30, 2014",
        fileType: ".mp4",
        cameraLens: "0.4MP",
        screenResolution: "854 x 480",
        people: "Montserrat Pagan, Camila Pagan, Natalia Pagan, and Maribel Pagan",
        sample: `<video controls="controls" src="Umbrelli-Saves-The-Day.mp4"> 
        This browser does not support the video element. </video>`,
        category: "all stop-motion",
        description: "An umbrella is fat-shamed by taunting birds.",
    },
    {
        id: 8,
        title: "Minecraft Creative World Tardis",
        backedUpDate: "Jan 19, 2015",
        fileType: ".jpg",
        cameraLens: "7.2MP",
        screenResolution: "3088 x 2316",
        people: "Montserrat Pagan",
        sample: `<img src="Minecraft-Creative-World-Tardis.JPG" alt="Minecraft blue box creative interpretation of Doctor Who's Tardis."></img>`,
        category: ["all", "image-category"],
        description: "A large blue box is built inside a fantasy game world.",
    },
    {
        id: 9,
        title: "Pedro's Imagination",
        backedUpDate: "Mar 11, 2013",
        fileType: ".mp4",
        cameraLens: "0.4MP",
        screenResolution: "856 x 480",
        people: "Montserrat Pagan and Camila Pagan",
        sample: `<video controls="controls" src="Pedros-Imagination.mp4"> 
        This browser does not support the video element. </video>`,
        category: ["all", "stop-motion"],
        description: "Pedro goes on an adventure in his dreams.",
    },
    {
        id: 10,
        title: "That's Me, Montse",
        backedUpDate: "Jul 13, 2014",
        fileType: ".mov",
        cameraLens: "0.2MP",
        screenResolution: "640 x 360",
        people: "Montserrat Pagan",
        sample: `<video controls="controls" src="Thats-Me-Montse.mp4"> 
        This browser does not support the video element. </video>`,
        category: ["all", "play-filter"],
        description: "Montse introduces herself.",
    },
  ];

// Establish functions and variables that allow for game to work
let wrapper = document.querySelector(".wrapper");

// Event listener for dropdown
window.addEventListener("load", () => {
    // Initializing dropdown items
    const dropdownItems = document.querySelectorAll(".dropdown-item");
    const dropdownText = document.getElementById("dropdown-text");
    const selectedItemInput = document.querySelector(".selected-item input");
    const searchInput = document.querySelector(".search-input input");
    const dropdown = document.querySelector(".dropdown-box");
    const dropdownContent = document.querySelector(".dropdown-content");

    // All cards are shown when website is first loaded
    filterCards("all");

    // Design of the dropdown box (does not initialize dropdown items)
        // Based off YouTuber Mazen Salah's Step by step video
        // at link: https://m.youtube.com/watch?v=lcXjEqGXv14&t=37s
        // Event Listener to control click in dropdown
        // Event listener for clicks on dropdown items
    // ChatGPT help with filtering dropdown button content on the screen
    dropdownItems.forEach(item => {
        item.addEventListener("click", () => {
            const selectedCategory = item.getAttribute("data-filter");

            // Filter the cards based on the selected category
            filterCards(selectedCategory);

            // Mark the clicked item as active
            dropdownItems.forEach(innerDropdownItem => {
                innerDropdownItem.classList.remove("active");
            });
            item.classList.add("active");

            // Update the selected item input field
            selectedItemInput.value = item.innerHTML;

            // Close the dropdown
            closeDropdown();
        });
    });

    // Event listener is for for the dropdown to close if something outside is pressed
    window.addEventListener("click", windowClickEvent => {
        // Check if the click was outside the dropdown
        if (dropdown.classList.contains("active")) {
            // Logical NOT (!): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT
                // returns false if dropdownContent AND (&&) dropdown was not clicked and something else on the screen was
            if (!dropdownContent.contains(windowClickEvent.target) && !dropdown.contains(windowClickEvent.target)) {
                closeDropdown();
            }
        } else if (selectedItemInput.contains(windowClickEvent.target)) {
            openDropdown();
        }
    });

    // Event listener for filtering the dropdown items based on search input
    searchInput.addEventListener("keyup", () => {
        const filter = searchInput.value.toLocaleLowerCase();

        dropdownItems.forEach(dropdownItem => {
            if (dropdownItem.innerHTML.toLocaleLowerCase().includes(filter)) {
                dropdownItem.classList.remove("hide");
            } else {
                dropdownItem.classList.add("hide");
            }
        });
    });
});

// If function is called, the dropdown opens
function openDropdown() {
    const dropdown = document.querySelector(".dropdown-box");
    dropdown.classList.add("active");
}

// If function is called, the dropdown closes
function closeDropdown() {
    const dropdown = document.querySelector(".dropdown-box");
    dropdown.classList.remove("active");
}

// filterCards() function filters cards by selected category
function filterCards(category) {
    // .filter() is a built-in array method; https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
        // I use const filter earlier when filtering the dropdown. That is a variable and is not the same as below
    const filteredMemories = memories.filter(memory => {
        // If "all" is selected, show all memories
        if (category === "all") {
            return true;
        }

        // If the memory has a category array, check if the selected category is in it
        return memory.category.includes(category.toLowerCase());
    });

    // Render the filtered memories
    // renderMemories(filteredMemories);
    // renderMemoryPairs(memories, selectedCategory);
    renderMemoryPairs(filteredMemories, category);
}

// Render with the memory card pairs
function renderMemoryPairs(data, selectedCategory) {

  let wrapper = document.querySelector(".wrapper");

  // Filter the memory data based on selected category;
    let filteredData;

    if (selectedCategory === "all") {
        filteredData = data;
        } 
    else {
        filteredData = data.filter(memory => {
            // && AND
            return memory.category && memory.category.includes(selectedCategory);
        });
        // filteredData = data.filter(memory => memory.category.includes(selectedCategory));
        }

    wrapper.innerHTML = ""; // Also done in render memories function

    // Make two of each memory
    let memoryPairs = [];
  
    // ChatGPT recommended using a spread operator to make a shallow copy {...memory}
    // since referencing one object might affect the synchronization of cards flipped or not
    filteredData.forEach(memory => {
        memoryPairs.push({ ...memory }, { ...memory });
    });

    // Shuffle deck
    // Shuffling an Array in JavaScript By Alexandria Pestruyeva 
    // https://medium.com/@apestruy/shuffling-an-array-in-javascript-8fcbc5ff12c7
    // NOTE there are better ways to get more unbiased shuffling (i.e. Fisher-Yates or Durstenfeld algorithm)
        // but this is not important for the purposes of the project
    memoryPairs = memoryPairs.sort(() => Math.random() - 0.5);

    // Render memory cards
    memoryPairs.forEach((memory) => {
        let newDiv = document.createElement("div");
        newDiv.classList.add("card");
        newDiv.setAttribute("data-backedUpDate", memory.backedUpDate);
        newDiv.setAttribute("data-id", memory.id);
        newDiv.setAttribute("data-cameraLens", memory.cameraLens); 
        newDiv.setAttribute("data-screenResolution", memory.screenResolution); 
        newDiv.setAttribute("data-description", memory.description); 
        
        // Turn into a string that will be shown in card: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
        newDiv.dataset.memory = JSON.stringify(memory);

        // HTML for card content
        // for the cartoons, I added alt text 
        // explaining that the image was described by the title on the card
        // in order to use id and not have to input all the pngs into the objects
        newDiv.innerHTML = `
        <div class="card-back">
            <h3>${memory.title}</h3>
            <p>${memory.people}</p>
            <img src="cartoon${memory.id}.png" alt="Cartoon of collection item title."
            style="max-width: 100%; height: auto;"> </div>
        <div class="card-front"></div>
        `;

        // Add new card
        wrapper.append(newDiv);
    });
};

let flippedCards = [];
let matchedCards = [];
let currentPopup = null;

    // Add click event listener to flip cards and check for matches
wrapper.addEventListener("click", (e) => {
        let clickedCard = e.target.closest(".card");
        // // log to check it's working
        // console.log(clickedCard);

        // Ignore if clicked element is not a card or if two cards are already flipped
            // Note in js || is or operator: https://stackoverflow.com/questions/30108466/what-is-the-meaning-of-in-javascript
        if (!clickedCard || flippedCards.length === 2 || matchedCards.includes(clickedCard) || flippedCards.includes(clickedCard)) {
            return;
        }

        // Flip the clicked card
        clickedCard.classList.add("flipped");
        flippedCards.push(clickedCard);

        // If 2 cards are clicked, then check if they match
        if (flippedCards.length === 2) {
            let [card1, card2] = flippedCards;

            // Check that card pairs selected match by memory id
            if (card1.getAttribute("data-id") === card2.getAttribute("data-id")) {
                matchedCards.push(card1, card2);
                flippedCards = [];

                // Check if popup was already created
                if(!currentPopup) {

                    // Popup if cards match; display the JSON stored data
                    let memory = JSON.parse(card1.dataset.memory);

                    // Create the popup
                    let popup = createPopup(memory, card1);
                    document.body.appendChild(popup);
                    
                    // currentPopup ensures only 1 popup is displayed
                    currentPopup = popup;

                    // Close button event listener to reset currentPopup and allow new popups
                    const closeButton = popup.querySelector("button");
                    closeButton.addEventListener('click', () => {
                        document.body.removeChild(popup);
                        currentPopup = null;  // Reset currentPopup so new popups can be created
                    });

                } 
            } else {
            // If the cards don't match they are flipped back over
                setTimeout(() => {
                    card1.classList.remove("flipped");
                    card2.classList.remove("flipped");
                    flippedCards = [];
                }, 1000); // 1000 is a one second delay
            }
        };
    });

function createPopup(memory, card1) {
    console.log("Popup Created for", card1.querySelector(".card-back h3").textContent);

    let popup = document.createElement('div');
    popup.classList.add("popup");

        // colorList is used to change the background color 
    // of the popup which appears when a pair of cards is selected
    // Based on Code Pen exercise from 
    // WebDev course with Divya Mehra for random color: https://codepen.io/montse-p/pen/PwojGXg
    let colorList = ["#FFCCCB", "#FFD580", "#FFFFE0", "E0FFD6", "#26F7FD", "#6D5ACF", "#CBC3E3"];

    // Get a random color for the popup background
    let randomColor = colorList[Math.floor(Math.random() * colorList.length)];

    // Popup style CSS
    popup.style.position = 'fixed';
    popup.style.top = '50%';
    popup.style.left = '50%';
    popup.style.transform = 'translate(-50%, -50%) scale(0.9)';
    popup.style.backgroundColor = randomColor;  // Set the random color
    popup.style.padding = '20px';
    popup.style.boxShadow = `12px 12px 2px 1px rgba(206, 108, 242, 0.2)`;
    popup.style.zIndex = '10000';
    popup.style.maxWidth = '70%';
    popup.style.maxHeight = '70%';
    popup.style.overflow = 'hidden';
    popup.style.boxSizing = 'border-box';
    popup.style.transition = 'all 0.3s ease-in-out';

    // When a popup comes up, the background secondary color will also change
    document.body.style.backgroundImage = `
    linear-gradient(-45deg, transparent 75%, ${randomColor}),
    linear-gradient(45deg, transparent 75%, ${randomColor}),
    linear-gradient(-135deg, transparent 75%, ${randomColor}),
    linear-gradient(135deg, transparent 75%, ${randomColor})`;

    // Add information that shows up on each object in the popup
    let popupContent = `
        <h2>${card1.querySelector(".card-back h3").textContent}</h2>
        <p>People: ${card1.querySelector(".card-back p").textContent}</p>
        <p>Backed up on: ${card1.getAttribute("data-backedUpDate")}</p>
        <p>Camera Lens: ${card1.getAttribute("data-cameraLens")}</p>
        <p>Screen Resolution: ${card1.getAttribute("data-screenResolution")}</p>
        <p>Description: ${card1.getAttribute("data-description")}</p>
    `;
    popup.innerHTML = popupContent;

    // Append the connected project sample if available
    if (memory.sample) {
        let sampleContainer = document.createElement('div');
        sampleContainer.innerHTML = memory.sample;
        popup.appendChild(sampleContainer);
    }

    // Close button CSS style
    let closeButton = document.createElement('button');
    closeButton.innerHTML = '&times;' 
        // How to use an entity with textContent
        // https://stackoverflow.com/questions/49197622/how-to-use-an-entity-with-textcontent
    closeButton.style.position = 'absolute';
    closeButton.style.top = '10px';
    closeButton.style.right = '20px';
    closeButton.style.background = 'transparent';
    closeButton.style.border = 'none';
    closeButton.style.fontSize = '40px';
    closeButton.style.cursor = 'pointer';

    // Close the popup when the button is clicked
    closeButton.addEventListener('click', () => {
        document.body.removeChild(popup);
        currentPopup = null;  // Reset currentPopup to allow for future popups
    });

    // Append the close button to the popup
    popup.appendChild(closeButton);

    return popup;
}

// Page load
renderMemoryPairs(memories, "all");