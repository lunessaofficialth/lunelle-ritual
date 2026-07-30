const beginButton = document.getElementById("begin-ritual");

const ritualSection = document.getElementById("ritual-selection");

beginButton.addEventListener("click", () => {

    ritualSection.scrollIntoView({

        behavior: "smooth"

    });

});
