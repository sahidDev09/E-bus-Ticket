const maxSeat = 4;
let availableSeatscount = 40;
let selectSeatcount = 0;
const ticketFear = 550;
let totalPrice = 0;
let appliedCoupon = null;

const seats = document.querySelectorAll(".btn-seat");

for (let index = 0; index < seats.length; index++) {
  const seat = seats[index];

  seat.addEventListener("click", function () {
    if (selectSeatcount >= maxSeat) {
      alert("Limit reached! You can only select maximum 4 seat at once ");
      return;
    }

    seat.classList.add("bg-green-500", "text-white");
    availableSeatscount--;
    selectSeatcount++;

    // Available seat count display

    const availableSeats = document.getElementById("seats-id");
    availableSeats.innerText = availableSeatscount;

    // selected seat cound display

    const showSeat = document.getElementById("select-seat-id");
    showSeat.innerText = selectSeatcount;

    //get seat title

    const title = seat.innerText;

    // display seat tile and price details

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
          const disAmmount15 = (totalPrice * 15) / 100;
          discount.innerText = disAmmount15;

          const gPrice = document.getElementById("grand-total");
          gPrice.innerText = totalPrice - disAmmount15;
        } else if (couponCode === "COUPLE20") {
          const cuponPerent = document.getElementById("inputCuponDiv");

          cuponPerent.classList.add("hidden");

          const discount = document.getElementById("discount-price-id");
          const disAmmount20 = (totalPrice * 20) / 100;
          discount.innerText = disAmmount20;

          const gPrice = document.getElementById("grand-total");
          gPrice.innerText = totalPrice - disAmmount20;
        } else {
          alert("Invalid Coupon Code");
        }
      } else if (selectSeatcount == 0) {
        couponBtn.setAttribute("disabled", true);
      } else {
        alert("You have to buy 4 tickets for Discount");
      }
    });


    //next button and modal fucntion

   

  });
}
