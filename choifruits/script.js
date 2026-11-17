
const orderButton = document.getElementById("orderButton");

orderButton.addEventListener("click", function () {
    document.getElementById("menu").scrollIntoView({
        behavior: "smooth"
    });
});


const filterButtons = document.querySelectorAll(".filter-button");
const menuItems = document.querySelectorAll("#menu article");

filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {

        const category = button.dataset.category;

        menuItems.forEach(function (item) {
            if (
                category === "all" ||
                item.dataset.category === category
            ) {
                item.style.display = "inline-block";
            } else {
                item.style.display = "none";
            }
        });

        filterButtons.forEach(function (btn) {
            btn.classList.remove("active");
        });

        button.classList.add("active");
    });
});
