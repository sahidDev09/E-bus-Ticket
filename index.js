const maxSeat = 4;
let selectSeatcount = 0;
let totalPrice = 0;

const seats = document.querySelectorAll(".btn-seat");

seats.forEach((seat) => {
  seat.addEventListener("click", () => {
    if (selectSeatcount >= maxSeat || seat.classList.contains("selected")) {
      alert("You can only select a maximum of 4 seats at once.");
      return;
    }

    seat.classList.add("bg-green-500", "text-white", "selected");
    selectSeatcount++;

    updateSeatDisplay();
    updatePrice();
  });
});

const couponBtn = document.getElementById("coupon-btn");
couponBtn.addEventListener("click", applyCoupon);

const nextBtn = document.getElementById("next-btn");
nextBtn.addEventListener("click", showNextModal);

const continueBtn = document.getElementById("continue-btn");
continueBtn.addEventListener("click", showPreviousModal);

function updateSeatDisplay() {
  const showSeat = document.getElementById("select-seat-id");
  showSeat.innerText = selectSeatcount;
}

function updatePrice() {
  const ticketFear = 550;
  totalPrice = selectSeatcount * ticketFear;
  const tPrice = document.getElementById("total-price-id");
  const gPrice = document.getElementById("grand-total");
  tPrice.innerText = gPrice.innerText = totalPrice.toFixed(2);
}

function applyCoupon() {
  const couponCode = document
    .getElementById("input-value")
    .value.trim()
    .toUpperCase();

  if (selectSeatcount === 4) {
    const discountPercentage =
      couponCode === "NEW15" ? 15 : couponCode === "COUPLE20" ? 20 : 0;

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
