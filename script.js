// The dropdown box is based off YouTuber Mazen Salah's Step by step video
// at link: https://m.youtube.com/watch?v=lcXjEqGXv14&t=37s
// Event Listener to control click in dropdown
window.addEventListener("load", () => {
    window.addEventListener("click", windowClickEvent => {
        const dropdown = document.querySelector(".dropdown-box");
        const dropdownContent = document.querySelector(".dropdown-content");
        const selectedItem = document.querySelector(".selected-item");
        // Check if content dropdown content area
            // contains position of the click
            
        if(dropdown.classList.contains("active")) {
            if (!dropdownContent.contains(windowClickEvent.target)) {
                closeDropdown();
            }
        }
        else if (selectedItem.contains(windowClickEvent.target)) {
            openDropdown();
        }
    })
    const dropdownItems = document.querySelectorAll(".dropdown-item");

    // Caution on dropdownItems which is defined
    //  versus dropdownItem which is not defined
    dropdownItems.forEach(dropdownItem => {
        dropdownItem.addEventListener("click", () => {
            dropdownItems.forEach(innerDropdownItem => {
                innerDropdownItem.classList.remove("active");
            })
            dropdownItem.classList.add("active");

            const selectedItemInput = document.querySelector(".selected-item input");

            selectedItemInput.value = dropdownItem.innerHTML;
            closeDropdown();
            
        })
    })

    const searchInput = document.querySelector(".search-input input")

    searchInput.addEventListener("keyup", () => {
        const filter = searchInput.value.toLocaleLowerCase();

        dropdownItems.forEach(dropdownItem => {
            if (dropdownItem.innerHTML.toLocaleLowerCase().includes(filter)) 
                // tutorial for dropdown uses .startsWith for the filter, I'm using .includes
                {
                dropdownItem.classList.remove("hide");
            }
            else {
                dropdownItem.classList.add("hide");
            }
        })
    })
})

function openDropdown() {
    const dropdown = document.querySelector(".dropdown-box");

    dropdown.classList.add("active");
}

function closeDropdown() {
    const dropdown = document.querySelector(".dropdown-box");

    dropdown.classList.remove("active");
}

// Inserting const memories
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
        description: "",
    },
    {
        id: 2,
        title: "Bubby the Elephant",
        backedUpDate: 'Mar 29, 2014',
        fileType: ".mp4",
        cameraLens: "0.4MP",
        screenResolution: "854 x 480",
        people: "Montserrat Pagan",
        // Embed Video HTML: A Step-by-Step Guide from https://careerkarma.com/blog/embed-video-html/
        sample: `<video controls="controls" src="bubby-the-elephant.mp4"> 
            This browser does not support the video element. </video>`,
        category: "all stop-motion",
        description: "",
        
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
        description: "",
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
        description: "",
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
        description: "",
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
        description: "",
    },
    {
        id: 7,
        title: "Umbrelli Saves the Day",
        backedUpDate: "Mar 30, 2014",
        fileType: ".mp4",
        cameraLens: "0.4MP",
        screenResolution: "854 x 480",
        people: "Montserrat Pagan",
        sample: `<video controls="controls" src="Umbrelli-Saves-The-Day.mp4"> 
        This browser does not support the video element. </video>`,
        category: "all stop-motion",
        description: "",
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
        category: "all image-category",
        description: "",
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
        category: "all stop-motion",
        description: "",
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
        category: "all play-filter",
        description: "",
    },
  ];


    let wrapper = document.querySelector(".wrapper");

// Based on Code Pen exercise from WebDev course with Divya Mehra for random color: https://codepen.io/montse-p/pen/PwojGXg
let colorList = ["#FFCCCB", "#FFD580", "#FFFFE0", "#90EE90", "#26F7FD", "#6D5ACF", "#CBC3E3"]

 //  Asked chatGPT make a popup display a video 
 // and to troubleshoot (making sure the buttons were not repeating)

let currentPopup = null; // Variable to track the current popup

let renderMemories = (data) => {
  data.forEach((memory) => {
    let newDiv = document.createElement("div");
    newDiv.setAttribute("data-backedUpDate", memory.backedUpDate);
    newDiv.innerHTML = `<h3>${memory.title}</h3><p>${memory.people}</p>`;
    
    // Append the new div to the wrapper
    wrapper.append(newDiv);

    // Add a click event listener to this div
    newDiv.addEventListener('click', () => {
      // If there is an existing popup, remove it
      if (currentPopup !== null) {
        document.body.removeChild(currentPopup); // Remove the current popup
      }

    //   let randomColor = Math.floor(Math.random() * colorList.length)
      let randomColor = colorList[Math.floor(Math.random() * colorList.length)];


      // Create a new popup content based on the memory data
      let popupContent = `
        <h2>${memory.title}</h2>
        <p>People: ${memory.people}</p>
        <p>Backed up on: ${memory.backedUpDate}</p>
        <p>Camera Lens: ${memory.cameraLens}</p>
        <p>Screen Resolution: ${memory.screenResolution}</p>
        <p> Description: IN PROGRESS ${memory.description}</p>
        <div id="video-container">
        <!-- This is where you can add a video dynamically -->
        <!-- <object width="320" height="240" controls> -->
          ${memory.sample}
        <!--  <source src="video-placeholder.mp4" type="video/mp4"> -->
        <!--   Your browser does not support the video tag. -->
        <!--   </object> -->
        </div>
      `;

      // Create the popup/modal
      let popup = document.createElement('div');
      popup.style.position = 'fixed';
      popup.style.top = '50%';
      popup.style.left = '50%';
      popup.style.transform = 'translate(-50%, -50%) scale(0.9)';
      popup.style.backgroundColor = randomColor;
      popup.style.padding = '20px';
    //  Box Shadow Inspo: https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow
      popup.style.boxShadow = `12px 12px 2px 1px rgba(206, 108, 242, 0.2)`;
      popup.style.zIndex = '1000';
      popup.style.maxWidth = '70%'; 
      popup.style.maxHeight = '70%'; 
      popup.style.overflow = 'hidden'; // I really want this as hidden
      popup.style.boxSizing = 'border-box';
      popup.style.transition = 'all 0.3s ease-in-out';

      // Add the popup content
      popup.innerHTML = popupContent;

    //   // Add a close button inside the popup
    //   let closeButton = document.createElement('button');
    //   closeButton.textContent = 'Close';
    //   closeButton.addEventListener('click', () => {
    //     document.body.removeChild(popup); // Close the popup
    //     currentPopup = null; // Reset the current popup tracker
    //   });

        // Create the close button
        let closeButton = document.createElement('button');
        closeButton.textContent = 'X'; 
        closeButton.style.position = 'absolute'; 
        closeButton.style.top = '10px'; 
        closeButton.style.right = '10px';
        closeButton.style.background = 'transparent'; 
        closeButton.style.border = 'none'; 
        closeButton.style.fontSize = '20px'; 
        closeButton.style.cursor = 'pointer';

        // Add the event listener to close the popup
        closeButton.addEventListener('click', () => {
        document.body.removeChild(popup); 
        currentPopup = null; 
        });

      popup.appendChild(closeButton);
      document.body.appendChild(popup);

      currentPopup = popup;
    });
  });
};
  
  renderMemories(memories);

        // // Create the close button
        // let closeButton = document.createElement('button');

        // // Add the event listener to close the popup
        // closeButton.addEventListener('click', () => {
        // document.body.removeChild(popup); // Close the popup
        // currentPopup = null; // Reset the current popup tracker
        // });

// divya 005
//   const genres = ["Fiction", "Nonfiction", "Poetry"];
  
//   let selection = document.querySelector("select");
  
//   genres.forEach((genre) => {
//     let option = document.createElement("option");
//     option.value = genre;
//     option.textContent = genre;
//     selection.appendChild(option);
//   });
  
  // ###
  // This is where the new stuff starts.
  // ###
  
  // We define function to change the data when the dropdown value changes. 
  // The function takes the value of what the site visitor has clicked on (see the paramenter, e?) and assigns this value to the variable "selected"
  // Then we select all of the existing grid items in our wrapper and assign it to variable "bookDivs"
  // We iterate through all of the divs with forEach and check if what the visitor has selected matches the data-genre attribute we assigned the div.
  
  // If it DOES match, we keep the div with display = block
  // If it does not match, we change display = none, so the grid item will disappear!
  
//   let changeData = (e) => {
//     let selected = e.target.value;
//     let bookDivs = document.querySelectorAll(".wrapper div");
  
//     bookDivs.forEach((book) => {
//       if (
//         selected === "All Genres" ||
//         book.getAttribute("data-genre") === selected
//       ) {
//         book.style.display = "block";
//       } else {
//         book.style.display = "none";
//       }
//     });
//   };
  
//   selection.addEventListener("change", (e) => changeData(e));


// for the dropdown make an if statement for if keyword '' then display that