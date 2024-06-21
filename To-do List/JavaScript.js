document.addEventListener("DOMContentLoaded", function() {
    const toDoItems = document.querySelector(".to-do-items");
    const input = document.getElementById("input");
    const submitButton = document.querySelector(".user-input button");

    input.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            addItem();
        }
    });

    submitButton.addEventListener("click", function() {
        addItem();
    });

    function addItem() {
        var divParent = document.createElement("div");
        var divChild = document.createElement("div");
        var checkIcon = document.createElement("i");
        var trashIcon = document.createElement("i");

        divParent.className = "item";
        divParent.innerHTML = '<div>' + input.value + '</div>';
        
        checkIcon.className = "fas fa-check-square";
        checkIcon.style.color = "lightgray";
        checkIcon.addEventListener("click", function() {
            checkIcon.style.color = "limegreen";
        });

        divParent.appendChild(checkIcon);

        trashIcon.className = "fas fa-trash";
        trashIcon.style.color = "darkgray";
        trashIcon.addEventListener("click", function() {
            divParent.remove();
        });

        divParent.appendChild(trashIcon);

        toDoItems.appendChild(divParent);

        input.value = '';
    }
});
