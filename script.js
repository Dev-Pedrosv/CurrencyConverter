const select = document.querySelectorAll('.currency');
const btn = document.getElementById('convert');
const valor = document.getElementById('valor');
const result = document.getElementById('result');

fetch('https://api.frankfurter.app/currencies')
  .then((data) => data.json())
  .then((data) => {
    display(data);
  });


function display(data) {
  const entries = Object.entries(data);
  for (var i = 0; i < entries.length; i++) {
    select[0].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`;
    select[1].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`;
  }
}

function btnclick() {
  let currency1 = select[0].value;
  let currency2 = select[1].value;

  let value = valor.value;

  convert(currency1, currency2, value);

};


function convert(currency1, currency2, value) {
  const host = 'v6.exchangerate-api.com/v6/';
  fetch(`https://${host}32f6eefdd739b637ee38eb1e/pair/${currency1}/${currency2}/${value}`)
    .then((val) => val.json())
    .then((val) => {
      console.log(val)
      console.log(val.conversion_result);
      result.value = `$ ${val.conversion_result}`;
    }
    )
}
