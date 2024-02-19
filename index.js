const maxSeat = 4;
let selectSeatcount = 0;
let availableSeatscount = 40;
let totalPrice = 0;

const seats = document.querySelectorAll(".btn-seat");

for (let i = 0; i < seats.length; i++) {
  const seat = seats[i];

  seat.addEventListener("click", function () {
    if (selectSeatcount >= maxSeat || seat.classList.contains("selected")) {
      alert("You already select me please choose another one.");
      return;
    }

    seat.classList.add("bg-green-500", "text-white", "selected");
    selectSeatcount++;

    updateSeatDisplay();
    updatePrice();
  });
}

// all buttons

const couponBtn = document.getElementById("coupon-btn");
couponBtn.addEventListener("click", applyCoupon);

const nextBtn = document.getElementById("next-btn");
nextBtn.addEventListener("click", showNextModal);

const continueBtn = document.getElementById("continue-btn");
continueBtn.addEventListener("click", showPreviousModal);

function updateSeatDisplay() {
  const showSeat = document.getElementById("select-seat-id");
  showSeat.innerText = selectSeatcount;

  availableSeatscount--;
  const availableSeats = document.getElementById("seats-id");
  availableSeats.innerText = availableSeatscount;
}

//price ccalculaton

function updatePrice() {
  const ticketFear = 550;
  totalPrice = selectSeatcount * ticketFear;
  const tPrice = document.getElementById("total-price-id");
  const gPrice = document.getElementById("grand-total");
  tPrice.innerText = gPrice.innerText = totalPrice.toFixed(2);
}

//code for cupon

function applyCoupon() {
  const couponCode = document
    .getElementById("input-value")
    .value.trim()
    .toUpperCase();

  if (selectSeatcount === 4) {
    let discountPercentage = 0;

    if (couponCode === "NEW15") {
      discountPercentage = 15;
    } else if (couponCode === "COUPLE20") {
      discountPercentage = 20;
    }

    if (discountPercentage > 0) {
      const discountAmount = (totalPrice * discountPercentage) / 100;
      const discountElement = document.getElementById("discount-price-id");
      discountElement.innerText = discountAmount.toFixed(2);

      const gPrice = document.getElementById("grand-total");
      gPrice.innerText = (totalPrice - discountAmount).toFixed(2);

      const cuponPerent = document.getElementById("inputCuponDiv");
      cuponPerent.classList.add("hidden");
    } else {
      alert("Invalid Coupon Code");
    }
  } else {
    alert("You have to buy 4 tickets for a discount.");
  }
}

function showNextModal() {
  if (selectSeatcount === 0) {
    alert("Select a seat");
  } else {
    hideElement("header-id");
    hideElement("main-id");
    showElement("modal-id");
  }
}

function showPreviousModal() {
  showElement("header-id");
  showElement("main-id");
  hideElement("modal-id");
}

function hideElement(elementId) {
  document.getElementById(elementId).classList.add("hidden");
}

function showElement(elementId) {
  document.getElementById(elementId).classList.remove("hidden");
}
