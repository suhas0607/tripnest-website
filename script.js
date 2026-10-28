
const form = document.getElementById("trip-form");
const result = document.getElementById("trip-result");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const destination = document.getElementById("destination").value.trim();
  const days = Number(document.getElementById("days").value);
  const budget = Number(document.getElementById("budget").value);

  if (!destination || !Number.isFinite(budget) || budget < 1000) {
    result.hidden = false;
    result.textContent = "Enter a destination and a valid budget of at least ₹1,000.";
    return;
  }

  const heading = document.createElement("h3");
  heading.textContent = "Your TripNest trip brief";

  const details = document.createElement("p");
  details.textContent =
    `Destination: ${destination} | Duration: ${days} days | Budget: ₹${budget.toLocaleString("en-IN")}`;

  const note = document.createElement("p");
  note.textContent =
    "Next step: a travel consultant should verify accommodation, transport, activities and live prices. This is a demonstration, not a confirmed booking or AI-generated itinerary.";

  result.replaceChildren(heading, details, note);
  result.hidden = false;
});
