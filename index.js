// Select all radio buttons with name "unit" (i.e., 1 Unit, 2 Units, 3 Units)
const radios = document.querySelectorAll('input[name="unit"]');

// Select the element that displays the total price (inside <strong> tag)
const totalDisplay = document.querySelector("strong");

// Define an object with price values for each unit option
const prices = {
  1: "$10.00 USD",
  2: "$18.00 USD",
  3: "$24.00 USD",
};

// Loop through each radio button
radios.forEach((radio) => {
  // Add a change event listener to update the UI when a radio option is selected
  radio.addEventListener("change", () => {
    // Update the total price display based on selected unit value
    totalDisplay.textContent = prices[radio.value];

    // Loop through all option blocks (1 unit, 2 units, 3 units)
    document.querySelectorAll(".option").forEach((opt, idx) => {
      // Select both size-color dropdown sections inside the current option
      const allSizeSelectors = opt.querySelectorAll(".size-color");

      // If the option's input value matches the selected radio button
      if (opt.querySelector("input").value === radio.value) {
        // Highlight the selected option by adding the 'expanded' class
        opt.classList.add("expanded");

        // Show the size-color selectors for the selected option
        allSizeSelectors.forEach((sel) => sel.classList.remove("hidden"));
      } else {
        // Remove the 'expanded' class from unselected options
        opt.classList.remove("expanded");

        // Hide size-color selectors for unselected options
        allSizeSelectors.forEach((sel) => sel.classList.add("hidden"));
      }
    });
  });
});
