# This is a simple bank card project... Maybe

It could be a **basic payment** process with a bank card.

However, I wanted to have an **elegant interface**, so I added some complexity and beauty to it.

Now it has a stunning appearance with **beautiful transitions, animations, and visual appeal**.

## How the JS code works?

Firstly, we make it possible to "see" the .js file our card's inputs we need to complete. So we define all of the inputs and other data in variables :

```js
const number = document.querySelector("#number");
const holder = document.querySelector("#holder");
const mono = document.querySelectorAll(".mono");
const year = document.querySelector("#year");
const month = document.querySelector("#month");
const cvv = document.querySelector("#cvv");
const cards = document.querySelectorAll(".cards");
const logo = document.querySelector(".pay-s-logo");
```

Secondly, we add them oninput functions to the some of the variables :

```js
number.oninput = numberChange;
holder.oninput = holderChange;
month.oninput = expiredDateChange;
year.oninput = expiredDateChange;
cvv.oninput = cvvChange;
```

Thirdly, we create this functions with validation and inner this to HTML. For example here is the validation of numbers using only for card number :

```js
function numberChange() {
  number.value = number.value
    .replace(/(\d{4})(?!\s|$)/gm, `$1 `)
    .match(/(?:\d{4} ?){0,3}(?:\d{0,4})?/);
  mono[0].innerHTML = number.value;
  let anyString = mono[0].innerHTML;
  ...
}
```

Also, we need to create an algorithm to know which card type users will try to use :
```js
if (anyString.substring(0, 1) == 5) {
    cards[0].classList.add("active");
    logo.src = "./img/mastercard.png";
  } else if (anyString.substring(0, 1) == 4) {
    cards[1].classList.add("active");
    logo.src = "./img/visa.png";
  } else if (anyString.substring(0, 2) == 34) {
    cards[2].classList.add("active");
    logo.src = "./img/amex.png";
  } else {
    logo.src = "";
    cards[0].classList.remove("active");
    cards[1].classList.remove("active");
    cards[2].classList.remove("active");
  }
```
And finally, we create more functions for other inputs and don't forget about input validation :

```js
function holderChange() {
holder.value = holder.value.replace(/\d/g, "");
mono[1].innerHTML = holder.value;
}
function expiredDateChange() {
mono[2].innerHTML = month.value + "/" + year.value;
}

function cvvChange() {
cvv.value = cvv.value.replace(/\D/g, "");
mono[3].innerHTML = cvv.value;
}
```

Almost done. The last we need to do is to setup the html file "index.html"!
