const bc = [
  { name: "Hvidevarer", link: "/hvidevarer" },
  { name: "Vaskemaskiner", link: "/hvidevarer/vaskemaskiner" },
  { name: "Bosch", link: "/hvidevarer/vaskemaskiner/bosch/" },
];

// Function to generate and display the breadcrumb
function generateBreadcrumb() {
  const breadcrumbContainer = document.getElementById("breadcrumb-container");

  // Create the unordered list element
  const ul = document.createElement("ul");

  // Loop through the breadcrumb object and create the list items
  bc.forEach((item, index) => {
    const li = document.createElement("li");

    if (index === bc.length - 1) {
      li.innerHTML = item.name;
    } else {
      const a = document.createElement("a");
      a.href = item.link;
      a.innerHTML = item.name;
      li.appendChild(a);
    }

    ul.appendChild(li);
  });

  // Insert the list into the breadcrumb container
  breadcrumbContainer.innerHTML = ""; // Clear any existing breadcrumb
  breadcrumbContainer.appendChild(ul);
}

// Event listener for the button click
document.getElementById("generate-breadcrumb").addEventListener("click", generateBreadcrumb);
