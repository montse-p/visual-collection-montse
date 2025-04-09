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

// colorList is used to change the background color 
// of the popup which appears when a pair of cards is selected
    // Based on Code Pen exercise from 
    // WebDev course with Divya Mehra for random color: https://codepen.io/montse-p/pen/PwojGXg
let colorList = ["#FFCCCB", "#FFD580", "#FFFFE0", "#90EE90", "#26F7FD", "#6D5ACF", "#CBC3E3"];

// Function below is to render the memories 
    // (originally was a declared variable for the memory game, 
    // changed to a function so that different cards show up on screen when 
    //  different dropdown categories are selected)
function renderMemories(data) {
    const wrapper = document.querySelector(".wrapper");
    wrapper.innerHTML = ""; // Clear current cards displayed
  
    // Loop over the filtered data and create cards
    data.forEach(memory => {
      let newDiv = document.createElement("div");
      newDiv.classList.add("card");
      newDiv.setAttribute("data-backedUpDate", memory.backedUpDate);
      newDiv.setAttribute("data-id", memory.id);
      newDiv.setAttribute("data-cameraLens", memory.cameraLens);
      newDiv.setAttribute("data-screenResolution", memory.screenResolution);
      newDiv.setAttribute("data-description", memory.description);
  
      // HTML for card content
      newDiv.innerHTML = `
        <div class="card-back">
          <h3>${memory.title}</h3>
          <p>${memory.people}</p>
          <img src="cartoon${memory.id}.png" 
          alt="Cartoon of collection item title." 
          style="max-width: 100%; height: auto;">
        </div>
        <div class="card-front"></div>
      `;
  
      // Add new card to the wrapper
      wrapper.appendChild(newDiv);
    });
  }
  
// Function to filter cards based on category
function filterCards(category) {
const filteredMemories = memories.filter(memory => {
    // Show all cards
    if (category === "all") {
        return true; 
    }
    // Filter by category
    return memory.category.toLowerCase().includes(category.toLowerCase());
});

// Re-render the filtered memories
renderMemories(filteredMemories);
}

// ChatGPT combined dropdown code here
// ADD ALL NOTES FROM PREV CODE

window.addEventListener("load", () => {
    // Initializing dropdown items
    const dropdownItems = document.querySelectorAll(".dropdown-item");
    const dropdownText = document.getElementById("dropdown-text");
    const selectedItemInput = document.querySelector(".selected-item input");
    const searchInput = document.querySelector(".search-input input");
    const dropdown = document.querySelector(".dropdown-box");
    const dropdownContent = document.querySelector(".dropdown-content");

    // (1) Design of the dropdown box (does not initialize dropdown items)
        // Based off YouTuber Mazen Salah's Step by step video
        // at link: https://m.youtube.com/watch?v=lcXjEqGXv14&t=37s
        // Event Listener to control click in dropdown
        // Event listener for clicks on dropdown items
    // ChatGPT help with filtering dropdown button content on the screen
    dropdownItems.forEach(item => {
        item.addEventListener("click", () => {
            const selectedCategory = item.getAttribute("data-filter");
            
            // delete below as there is repetition
            // // Update the dropdown text to show the selected category
            // if (dropdownText) {
            //     dropdownText.value = item.textContent;
            // } else {
            //     console.error("Dropdown input not found.");
            // }

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
    const filteredMemories = memories.filter(memory => {
        // If "all" is selected, show all memories
        if (category === "all") {
            return true;
        }

        // If the memory has a category array, check if the selected category is in it
        return memory.category.includes(category.toLowerCase());
    });

    // Render the filtered memories
    renderMemories(filteredMemories);
}
  

// htesdcrjfyvgbjh,knhbdeswrvjgb
  // render memories for when page is loaded; 
    // everything above prepares for user to be able to click around
//   renderMemories(memories);

//   // Toggle dropdown visibility
//   const selectedItem = document.querySelector(".selected-item");
//   selectedItem.addEventListener("click", () => {
//     document.querySelector(".dropdown-content").classList.toggle("show");
//   });

// I think the below can be deleted
//   // Close the dropdown if clicked outside of it
//   window.addEventListener("click", (e) => {
//     if (!e.target.closest('.dropdown-box')) {
//       document.querySelector(".dropdown-content").classList.remove("show");
//     }
//   });


// BELOW WORKS BUT NEEDS TO WORK FOR OTHER CATEGORIES... POPUP NOT WORKING ANYMORE

// Render with the memory card pairs
function renderMemoryPairs(data, selectedCategory) {
// let renderMemoryPairs = (data, selectedCategory) => {
    // log to check it's working
    // console.log(data); 
  let wrapper = document.querySelector(".wrapper");

  // Filter the memory data based on selected category;
    let filteredData;

    if (selectedCategory === "all") {
    filteredData = data;
    } else {
    filteredData = data.filter(memory => memory.category.includes(selectedCategory));
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
    memoryPairs = memoryPairs.sort(() => Math.random() - 0.5);

    // Render memory cards
    memoryPairs.forEach((memory) => {
        let newDiv = document.createElement("div");
        newDiv.classList.add("card");
        newDiv.setAttribute("data-backedUpDate", memory.backedUpDate);
        newDiv.setAttribute("data-id", memory.id);
        newDiv.setAttribute("data-cameraLens", memory.cameraLens); 
        newDiv.setAttribute("data-screenResolution", memory.screenResolution); 

    // I was having problems with the local and global calls for my memory data,
    // ChatGPT suggested storing as a string to reference in the popup
    // newDiv.dataset.memory = JSON.stringify(memory); 

    // HTML for card content
    // for the cartoons, I added alt text 
    // explaining that the image was described by the title on the card
    // in order to use id and not have to input all the pngs into the objects
    newDiv.innerHTML = `
      <div class="card-back">
        <h3>${memory.title}</h3>
        <p>${memory.people}</p>
        <img src="cartoon${memory.id}.png" alt="Cartoon of collection item title."
        style="max-width: 100%; height: auto;">
      </div>
      <div class="card-front"></div>
    `;

        // Add new card
        wrapper.append(newDiv);
    });

  let flippedCards = [];
  let matchedCards = [];

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

      // Check that card pairs selected match
      if (card1.getAttribute("data-id") === card2.getAttribute("data-id")) {
        matchedCards.push(card1, card2);
        flippedCards = []; // reset

        // Popup if cards match; display the JSON stored data
        let memory = JSON.parse(card1.dataset.memory);

            // Create the popup
            let popup = createPopup(memory, card1);
            document.body.appendChild(popup);
            } else {
            setTimeout(() => {
                card1.classList.remove("flipped");
                card2.classList.remove("flipped");
                flippedCards = [];
            }, 1000);
            }
        }
        });
    };

        // // Create and display the popup
        // if (currentPopup !== null) {
        //   document.body.removeChild(currentPopup); // Remove previous popup
        // }

        // let currentPopup = null; // reset

// DOES THIS NEED TO BE A FUNCTION ??? 
    // Get a random color for the popup background
    let randomColor = colorList[Math.floor(Math.random() * colorList.length)];

    // Function to create popup content
    function createPopup(memory, card1) {
        // Create the popup using css
        let popup = document.createElement('div');
        popup.style.position = 'fixed';
        popup.style.top = '50%';
        popup.style.left = '50%';
        popup.style.transform = 'translate(-50%, -50%) scale(0.9)';
        popup.style.backgroundColor = randomColor;
        popup.style.padding = '20px';
        popup.style.boxShadow = `12px 12px 2px 1px rgba(206, 108, 242, 0.2)`;
        popup.style.zIndex = '10000';
        popup.style.maxWidth = '70%';
        popup.style.maxHeight = '70%';
        popup.style.overflow = 'hidden';
        popup.style.boxSizing = 'border-box';
        popup.style.transition = 'all 0.3s ease-in-out';

        // // Get the memory object from the data attribute - ChatGPT
        // let memory = JSON.parse(card1.dataset.memory);

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

        // Append the connected project
        let sampleContainer = document.createElement('div');
        sampleContainer.innerHTML = memory.sample;
        popup.appendChild(sampleContainer);

        // Create and append the close button
        let closeButton = document.createElement('button');
        closeButton.textContent = 'X';
        closeButton.style.position = 'absolute';
        closeButton.style.top = '10px';
        closeButton.style.right = '10px';
        closeButton.style.background = 'transparent';
        closeButton.style.border = 'none';
        closeButton.style.fontSize = '20px';
        closeButton.style.cursor = 'pointer';

        // Close the popup when the button is clicked
        closeButton.addEventListener('click', () => {
          document.body.removeChild(popup);
          currentPopup = null;  // Reset
        });

        // Append the close button to the popup
        popup.appendChild(closeButton);
        return popup;
    }

    //     // Add the popup to the body
    //     document.body.appendChild(popup);
    //     currentPopup = popup;
    //   } else {
    //     // If not a match, flip the cards back
    //     setTimeout(() => {
    //       card1.classList.remove("flipped");
    //       card2.classList.remove("flipped");
    //       flippedCards = [];
    //     }, 1000);
    //   }
//     }
//   });
// };

// // log to check it's working
// console.log(memories); 

// Call the function to render the memories
renderMemoryPairs(memories);

// END HERE

// OLDER

// let renderMemories = (data) => {
//     // Assuming you have a wrapper element with class "wrapper"
//     let wrapper = document.querySelector(".wrapper");
  
//     // Duplicate each memory to create pairs
//     let memoryPairs = [];
  
//     data.forEach(memory => {
//       memoryPairs.push({ ...memory }, { ...memory });  // Create two copies of each memory object
//     });
  
//     // Shuffle the memoryPairs array to randomize card order
//     memoryPairs = memoryPairs.sort(() => Math.random() - 0.5);
  
//     // Create the cards in the DOM
//     memoryPairs.forEach((memory) => {
//       let newDiv = document.createElement("div");
//       newDiv.classList.add("card");
//       newDiv.setAttribute("data-backedUpDate", memory.backedUpDate);
//       newDiv.setAttribute("data-id", memory.id);
  
//       // Card front and back HTML
//       newDiv.innerHTML = `
//         <div class="card-back">
//           <h3>${memory.title}</h3>
//           <p>${memory.people}</p>
//           <img src="cartoon${memory.id}.png" alt="Cartoon of collection item title."
//           style="max-width: 100%; height: auto;">
//         </div>
//         <div class="card-front"></div>
//       `;
  
//       // Append the new div (card) to the wrapper
//       wrapper.append(newDiv);
//     });
  
//     // Add click event listener to flip cards and check for matches
//     let flippedCards = [];
//     let matchedCards = [];
//     let currentPopup = null;  // Track current popup
  
//     wrapper.addEventListener("click", (e) => {
//       let clickedCard = e.target.closest(".card");
  
//       // Ignore if clicked element is not a card or if two cards are already flipped
//       if (!clickedCard || flippedCards.length === 2 || matchedCards.includes(clickedCard)) {
//         return;
//       }
  
//       // Flip the clicked card
//       clickedCard.classList.add("flipped");
//       flippedCards.push(clickedCard);
  
//       // If two cards are flipped, check if they match
//       if (flippedCards.length === 2) {
//         let [card1, card2] = flippedCards;
  
//         // Check for a match
//         if (card1.getAttribute("data-id") === card2.getAttribute("data-id")) {
//           matchedCards.push(card1, card2); // Add matched cards to the matchedCards array
//           flippedCards = [];  // Reset flipped cards
  
//           // Create and display the popup
//           if (currentPopup !== null) {
//             document.body.removeChild(currentPopup); // Remove any existing popup
//           }
  
//           // Get a random color for the popup background
//           let randomColor = colorList[Math.floor(Math.random() * colorList.length)];
  
//           // Create the popup modal
//           let popup = document.createElement('div');
//           popup.style.position = 'fixed';
//           popup.style.top = '50%';
//           popup.style.left = '50%';
//           popup.style.transform = 'translate(-50%, -50%) scale(0.9)';
//           popup.style.backgroundColor = randomColor;
//           popup.style.padding = '20px';
//           popup.style.boxShadow = `12px 12px 2px 1px rgba(206, 108, 242, 0.2)`;
//           popup.style.zIndex = '100';
//           popup.style.maxWidth = '70%';
//           popup.style.maxHeight = '70%';
//           popup.style.overflow = 'hidden';
//           popup.style.boxSizing = 'border-box';
//           popup.style.transition = 'all 0.3s ease-in-out';
  
//           // Add the static part of the popup (heading, details)
//           let popupContent = `
//             <h2>${card1.querySelector(".card-back h3").textContent}</h2>
//             <p>People: ${card1.querySelector(".card-back p").textContent}</p>
//             <p>Backed up on: ${card1.getAttribute("data-backedUpDate")}</p>
//             <p>Camera Lens: ${card1.getAttribute("data-cameraLens")}</p>
//             <p>Screen Resolution: ${card1.getAttribute("data-screenResolution")}</p>
//             <p>Description: IN PROGRESS</p>
//           `;
//           popup.innerHTML = popupContent;
  
//           // Now append the sample content (e.g., a video or image)
//           let sampleContainer = document.createElement('div');
//           sampleContainer.innerHTML = memory.sample;  // Assuming memory.sample is valid HTML (e.g., <video>, <img>, etc.)
//           popup.appendChild(sampleContainer);
  
//           // Create and append the close button
//           let closeButton = document.createElement('button');
//           closeButton.textContent = 'X';
//           closeButton.style.position = 'absolute';
//           closeButton.style.top = '10px';
//           closeButton.style.right = '10px';
//           closeButton.style.background = 'transparent';
//           closeButton.style.border = 'none';
//           closeButton.style.fontSize = '20px';
//           closeButton.style.cursor = 'pointer';
  
//           // Close the popup when the button is clicked
//           closeButton.addEventListener('click', () => {
//             document.body.removeChild(popup);
//             currentPopup = null;  // Reset current popup tracker
//           });
  
//           // Append the close button to the popup
//           popup.appendChild(closeButton);
  
//           // Add the popup to the body
//           document.body.appendChild(popup);
//           currentPopup = popup;
//         } else {
//           // If not a match, flip the cards back after a brief delay
//           setTimeout(() => {
//             card1.classList.remove("flipped");
//             card2.classList.remove("flipped");
//             flippedCards = [];  // Reset flipped cards
//           }, 1000);
//         }
//       }
//     });
//   };
  
//   renderMemories(memories);