import "./App.scss";

function App() {
  //   const number = document.querySelector("#number");
  // const holder = document.querySelector("#holder");
  // const mono = document.querySelectorAll(".mono");
  // const year = document.querySelector("#year");
  // const month = document.querySelector("#month");
  // const cvv = document.querySelector("#cvv");
  // const cards = document.querySelectorAll(".cards");
  // const logo = document.querySelector(".pay-s-logo");
  // number.oninput = numberChange;
  // holder.oninput = holderChange;
  // month.oninput = monthChange;
  // year.oninput = yearChange;
  // cvv.oninput = cvvChange;
  // function numberChange(cvv) {
  //   number.value = number.value
  //     .replace(/(\d{4})(?!\s|$)/gm, `$1 `)
  //     .match(/(?:\d{4} ?){0,3}(?:\d{0,4})?/);
  //   mono[0].innerHTML = number.value;
  //   let anyString = mono[0].innerHTML;
  //   if (anyString.substring(0, 1) == 5) {
  //     cards[0].classList.add("active");
  //     logo.src = "./img/mastercard.png";
  //   } else if (anyString.substring(0, 1) == 4) {
  //     cards[1].classList.add("active");
  //     logo.src = "./img/visa.png";
  //   } else if (anyString.substring(0, 2) == 34) {
  //     cards[2].classList.add("active");
  //     logo.src = "./img/amex.png";
  //   } else {
  //     logo.src = "";
  //     cards[0].classList.remove("active");
  //     cards[1].classList.remove("active");
  //     cards[2].classList.remove("active");
  //   }
  // }
  // function holderChange() {
  //   holder.value = holder.value.replace(/\d/g, "");
  //   mono[1].innerHTML = holder.value;
  // }
  // function monthChange() {
  //   mono[2].innerHTML = month.value + "/" + year.value;
  // }
  // function yearChange() {
  //   mono[2].innerHTML = month.value + "/" + year.value;
  // }
  // function cvvChange() {
  //   cvv.value = cvv.value.replace(/\D/g, "");
  //   mono[3].innerHTML = cvv.value;
  // }

  return (
    <div className="Checkout">
      <div className="Card">
        <div className="front">
          <div className="card-chip"></div>
          <div className="card-logo">
            <div className="logo-img">
              <img className="pay-s-logo" src="" alt="payment-system-logo" />
            </div>
          </div>
          <div className="card-number">
            <label>Card Number</label>
            <div className="mono">0123 4567 8910 1112</div>
          </div>
          <div className="card-holder">
            <label>Card Holder</label>
            <div className="mono name">FirstName SecondName</div>
          </div>
          <div className="card-date">
            <label>Expires</label>
            <div className="mono">01/2019</div>
          </div>
        </div>
        <div className="back">
          <div className="card-strip"></div>
          <div className="card-code">
            <label>CCV</label>
            <div className="mono">000</div>
          </div>
        </div>
      </div>
      <div className="Form">
        <form>
          <div className="Input">
            <label>Card Number</label>
            <input id="number" type="text" placeholder="0123 4567 8910 1112" />
          </div>
          <div className="Input">
            <label>Card Holder</label>
            <input id="holder" type="text" placeholder="FirstName SecondName" />
          </div>
          <div className="row">
            <div className="Input">
              <label>Month</label>
              <select id="month">
                <option value="01">01</option>
                <option value="02">02</option>
                <option value="03">03</option>
                <option value="04">04</option>
                <option value="05">05</option>
                <option value="06">06</option>
                <option value="07">07</option>
                <option value="08">08</option>
                <option value="09">09</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </select>
            </div>
            <div className="Input">
              <label>Year</label>
              <select id="year">
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
              </select>
            </div>
            <div className="Input">
              <label>CCV</label>
              <input id="cvv" type="text" />
            </div>
          </div>
          <div className="Input">
            <label>Payment system</label>
            <div className="Pay-systems">
              <div className="pay-s cards">
                <img src="./mastercard.png" alt="mastercard" />
              </div>
              <div className="pay-s cards">
                <img src="./visa.png" alt="visa" />
              </div>
              <div className="pay-s cards">
                <img src="./amex.png" alt="americanExpress" />
              </div>
            </div>
          </div>
          <button>Checkout</button>
        </form>
      </div>
    </div>
  );
}

export default App;
