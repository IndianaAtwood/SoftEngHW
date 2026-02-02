// INDIANA ATWOOD

// When the Order button is clicked, run this code
$("#orderButton").click(function(event) {
    event.preventDefault();

    // get data from each element
    var quantity = $("#quantity").val();
    var topping = $("input[name='toppings']:checked").val();
    var notes = $("#message").val();

    // if the textArea is empty, summary says "None"
    if (notes == "") {
        notes = "None";
    }

    // alert if the textArea includes "vegan"
    if (notes.toLowerCase().includes("vegan")) {
        alert("Warning: Cheesecakes contain dairy!");
    }

    // remove orderForm and replace with orderSummary
    $("#orderForm").remove();
    $("#orderSummary").append(`
        <h2>Thank you! Your order has been placed.</h2>
        <pre><p><b>     Quantity:</b> ${quantity}</p></pre>
        <pre><p><b>     Topping:</b> ${topping}</p></pre>
        <pre><p><b>     Notes:</b> ${notes}</p></pre>
    `);
});

// functionality to select a month, adding even listeners for each
const monthItems = document.querySelectorAll(".month-options li");
const selectedMonth = document.getElementById("selected-month");

monthItems.forEach(month => {
    month.addEventListener("click", () => {
    selectedMonth.textContent = month.textContent;
    });
});