// deklarasi variabel
const form = document.getElementById("form");
const age = document.getElementById("age");
const height = document.getElementById("height");
const weight = document.getElementById("weight");
const male = document.getElementById("m");
const female = document.getElementById("f");
const resultArea = document.querySelector(".comment");
const modal = document.getElementById("myModal");
const span = document.getElementsByClassName("close")[0];
const modalContent = document.querySelector(".modal-content");
const modalText = document.querySelector("#modalText");

// function untuk validasi apabila inputan kosong maka akan keluar jendela/popup data tidak boleh kosong
function calculate() {
  if (
    age.value === "" ||
    height.value === "" ||
    weight.value === "" ||
    (!male.checked && !female.checked)
  ) {
    modal.style.display = "block";
    modalText.innerHTML = `Harap isi semua data jangan ada data yang kosong!`;
  } else {
    countBmi();
  }
}

//function untuk menghitung BMI
function countBmi() {
  const inputs = [age.value, height.value, weight.value];
  const gender = male.checked ? "male" : "female";
  inputs.push(gender);

  const bmi =
    Number(inputs[2]) / (((Number(inputs[1]) / 100) * Number(inputs[1])) / 100);

  let result = "";
  if (bmi < 18.5) {
    result = "Kekurangan Berat Badan";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    result = "Normal (ideal)";
  } else if (bmi >= 25 && bmi <= 29.9) {
    result = "Kelebihan Berat Badan";
  } else if (bmi >= 30 && bmi <= 34.9) {
    result = "Kegemukan";
  }

  resultArea.style.display = "block";
  resultArea.innerHTML = `Kondisi berat badan anda saat ini <span id="comment">${result}</span>`;
  document.querySelector("#result").innerHTML = bmi.toFixed(2);
}

// apabila user klik (x), tutup jendela modal
span.onclick = function () {
  modal.style.display = "none";
};
