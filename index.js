const maxSeat = 5;
let availableSeatscounts = 39;
let selectSeatcounts = 1;

const seats = document.querySelectorAll(".btn-seat");

for (let index = 0; index < seats.length; index++) {
  const seat = seats[index];

  const select = seat.addEventListener("click", function () {
    const bg = seat.classList.add("bg-green-500", "text-white");

    const availableSeats = document.getElementById("seats-id");
    const newSeat = availableSeatscounts--;

    availableSeats.innerText = newSeat;

    const selectedSeat = document.getElementById("select-seat-id");
    const newSelected = selectSeatcounts++;

    selectedSeat.innerText = newSelected;

    if (newSelected === maxSeat) {
        console.log("first")   
    }
  });
}
