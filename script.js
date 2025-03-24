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