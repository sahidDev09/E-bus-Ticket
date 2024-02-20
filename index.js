const maxSeat = 4;
let availableSeatscount = 40;
let selectSeatcount = 0;
const ticketFear = 550;
let totalPrice = 0;

const seats = document.querySelectorAll(".btn-seat");

for (let index = 0; index < seats.length; index++) {
  const seat = seats[index];

  seat.addEventListener("click", function () {
    if (selectSeatcount >= maxSeat) {
      alert("You can only select a maximum of 4 seats at once.");
      return;
    } else if (seat.classList.contains("selected")) {
      alert("Seat already selected. Please choose a different seat.");
      return;
    }

    seat.classList.add("bg-green-500", "text-white", "selected");
    availableSeatscount--;
    selectSeatcount++;

    // Available seat count display
    const availableSeats = document.getElementById("seats-id");
    availableSeats.innerText = availableSeatscount;

    // selected seat count display
    const showSeat = document.getElementById("select-seat-id");
    showSeat.innerText = selectSeatcount;

    // get seat title
    const title = seat.innerText;

    // display seat title and price details
    const seatT = document.getElementById("seatT");
    const eco = document.getElementById("eco");
    const priceT = document.getElementById("priceT");

    const p1 = document.createElement("p");
    p1.innerText = title;

    const p2 = document.createElement("p");
    p2.innerText = "Economy";

    const p3 = document.createElement("p");
    p3.innerText = "BDT 550";

    seatT.appendChild(p1);
    eco.appendChild(p2);
    priceT.appendChild(p3);

    // price calculation
    totalPrice += ticketFear;

    const tPrice = document.getElementById("total-price-id");
    const gPrice = document.getElementById("grand-total");
    tPrice.innerText = totalPrice;
    gPrice.innerText = totalPrice;

    const discount = document.getElementById("discount-price-id").innerText;
    gPrice.innerText = totalPrice - discount;

    // coupon code
    const couponBtn = document.getElementById("coupon-btn");

    couponBtn.addEventListener("click", function () {
      const couponElement = document.getElementById("input-value").value;
      const couponCode = couponElement.split(" ").join("").toUpperCase();

      if (selectSeatcount === 4) {
        if (couponCode === "NEW15") {
          const cuponPerent = document.getElementById("inputCuponDiv");
          cuponPerent.classList.add("hidden");
          const discount = document.getElementById("discount-price-id");
          const disAmount15 = (totalPrice * 15) / 100;
          discount.innerText = disAmount15;

          //show discount div

          const showDis = document.getElementById("dis-perent");
          showDis.classList.remove("hidden");

          const gPrice = document.getElementById("grand-total");
          gPrice.innerText = totalPrice - disAmount15;
        } else if (couponCode === "COUPLE20") {
          const cuponPerent = document.getElementById("inputCuponDiv");
          cuponPerent.classList.add("hidden");

          //discount show

          const showDis = document.getElementById("dis-perent");
          showDis.classList.remove("hidden");

          const discount = document.getElementById("discount-price-id");
          const disAmount20 = (totalPrice * 20) / 100;
          discount.innerText = disAmount20;

          const gPrice = document.getElementById("grand-total");
          gPrice.innerText = totalPrice - disAmount20;
        } else {
          alert("Invalid Coupon Code");
        }
      } else if (selectSeatcount == 0) {
        couponBtn.setAttribute("disabled", true);
      } else {
        alert("You have to buy 4 tickets for applying the coupon code");
      }
    });
  });
}

// Next button
const next = document.getElementById("next-btn");
next.addEventListener("click", function () {
  const inputNum = document.getElementById("numner-id");
  const inputNumber = inputNum.value.trim();

  if (selectSeatcount === 0 || inputNumber.length === 0) {
    alert("Select seat and enter passenger number");
  } else {
    const header = document.getElementById("header-id");
    header.classList.add("hidden");

    const main = document.getElementById("main-id");
    main.classList.add("hidden");

    const modal = document.getElementById("modal-id");
    modal.classList.remove("hidden");
  }
});

// Continue button
const conti = document.getElementById("continue-btn");
conti.addEventListener("click", function () {
  const header = document.getElementById("header-id");
  header.classList.remove("hidden");

  const main = document.getElementById("main-id");
  main.classList.remove("hidden");

  const modal = document.getElementById("modal-id");
  modal.classList.add("hidden");
});
