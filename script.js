const sectionH4 = document.querySelector(".sectionH4");
const typeH4 = document.querySelector(".typeH4");
const sectionIds = document.querySelector(".sectionIds");
const typeIds = document.querySelector(".typeIds");
sectionH4.addEventListener("click", () => {
    if (sectionIds.style.display === "none" || sectionIds.style.display === "") {
        sectionIds.style.display = "flex";
        typeIds.style.display="none";
    } else {
        sectionIds.style.display = "none";
    }
});
typeH4.addEventListener("click", () => {
    if (typeIds.style.display === "none" || typeIds.style.display === "") {
        typeIds.style.display = "flex";
        sectionIds.style.display = "none";
    } else {
        typeIds.style.display = "none";
    }
});
