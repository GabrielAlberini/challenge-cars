//DOM elements
const MAIN_CONTAINER_DOM = document.querySelector(".main-content-cards");
const MODAL_CONTAINER_DOM = document.querySelector(".container-modal");
const MODAL_SUBTITLE = document.querySelector(".container-subtitle");
const checkboxs = document.querySelectorAll(".checkbox");
// Modal
const myModal = document.getElementById("myModal");
const myInput = document.getElementById("myInput");

// Array Car
const listCars = [];

// API Call
function apiCall() {
  fetch("../services/carsJSON.json")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      Object.entries(data.cars).map((entry) => {
        const [key, value] = entry;
        const cars = Object.values(value);
        cars.forEach((car) => listCars.push(car));
      });
      dataDomPrint(listCars);
      filterFunction();
    });
}

// Data DOM print
function dataDomPrint(arrCars) {
  MAIN_CONTAINER_DOM.innerHTML = "";

  arrCars.forEach((auto) => {
    // Extraction of the RateData VALUE and KEY of each car
    const rateDataKey = [];
    const rateDataValue = [];
    const estimatedTotalAmount = [];
    id = "";

    // Get rates
    Object.entries(auto.Rates).map((entry) => {
      const [key, ratesValues] = entry;

      // Rate data
      rateDataValue.push(ratesValues.RateData);
      rateDataKey.push(key);

      // Price data
      const roundPrice =
        Math.round(ratesValues.EstimatedTotalAmount * 100) / 100;
      estimatedTotalAmount.push(roundPrice);
    });

    MAIN_CONTAINER_DOM.innerHTML += `
        <article class="content-cards">
          <div class="characts-card">
            <div class="cont-ing-chracts-card">
              <img src="${auto.PictureURL}" alt="" />
            </div>
            <div class="characts-card-data">
              <p>CHARACTERISTICS</p>
              <ul>
                <li>
                  <img src="./assets/images/seats.svg" alt="img de icono" />${auto.Features2.seats} seats
                </li>
                <li>
                  <img src="./assets/images/luggage.svg" alt="img de icono" />${auto.Features2.largeSuitcase}
                  large suitcase
                </li>
                <li>
                  <img src="./assets/images/bag.svg" alt="img de icono" />${auto.Features2.smallSuitcase}
                  small suitcase
                </li>
                <li>
                  <img src="./assets/images/door.svg" alt="img de icono" />${auto.Features2.doors}
                  doors
                </li>
                <li>
                  <img
                    src="./assets/images/transmision.svg"
                    alt="img de icono"
                  />${auto.Features2.transmition} Transmition
                </li>
                <li>
                  <img
                    src="./assets/images/air-conditioning.svg"
                    alt="img de icono"
                  />${auto.Features2.air}
                </li>
              </ul>
            </div>
          </div>
          <div class="rates-card">
            <div class="head-title-card">
              <div>
                <h3>${auto.Features2.category}</h3>
                <p>GROUP ${auto.VehGroup} (${auto.Code})</p>
                <p>${auto.Name}</p>
              </div>
              <div>
                <button><i class="fa-solid fa-check"></i> Book now!</button>
              </div>
            </div>
            <div class="table-rates-card">
              <p>AVAILABLE RATES</p>
              <table class="table">
                <tbody>
                  <tr>
                    <th scope="row">
                      <input type="radio" name="rate" id="" />
                    </th>
                    <td><label for="">${rateDataKey[0]} - ${rateDataValue[0].name}</label></td>
                    <td class="rate-custom">
                      <button
                        class="internal-link"
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        onclick="showModalInclusions('${rateDataKey[0]} - ${rateDataValue[0].name}', '${rateDataValue[0].inclusions}')"
                      >
                        Rate Inclusions
                      </button>
                    </td>
                    <td class="rates-price">USD <span>${estimatedTotalAmount[0]}</span></td>
                  </tr>

                  <tr>
                    <th scope="row">
                      <input type="radio" name="rate" id="" />
                    </th>
                    <td><label for="">${rateDataKey[1]} - ${rateDataValue[1].name}</label></td>
                    <td class="rate-custom">
                      <button
                        class="internal-link"
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        onclick="showModalInclusions('${rateDataKey[1]} - ${rateDataValue[1].name}', '${rateDataValue[1].inclusions}')"
                      >
                        Rate Inclusions
                      </button>
                    </td>
                    <td class="rates-price">USD <span>${estimatedTotalAmount[1]}</span></td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <input type="radio" name="rate" id="" />
                    </th>
                    <td>
                      <label for="">${rateDataKey[2]} - ${rateDataValue[2].name}</label>
                    </td>
                    <td class="rate-custom">
                      <button
                        class="internal-link"
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        onclick="showModalInclusions('${rateDataKey[2]} - ${rateDataValue[2].name}', '${rateDataValue[2].inclusions}')"
                      >
                        Rate Inclusions
                      </button>
                    </td>
                    <td class="rates-price">USD <span>${estimatedTotalAmount[2]}</span></td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <input type="radio" name="rate" id="" />
                    </th>
                    <td>
                      <label for="">${rateDataKey[3]} - ${rateDataValue[3].name}</label>
                    </td>
                    <td class="rate-custom">
                      <button
                        class="internal-link"
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        onclick="showModalInclusions('${rateDataKey[3]} - ${rateDataValue[3].name}', '${rateDataValue[3].inclusions}')"
                      >
                        Rate Inclusions
                      </button>
                    </td>
                    <td class="rates-price">USD <span>${estimatedTotalAmount[3]}</span></td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <input type="radio" name="rate" id="" />
                    </th>
                    <td>
                      <label for="">${rateDataKey[4]} - ${rateDataValue[4].name}</label>
                    </td>
                    <td
                      class="rate-custom"
                      data-toggle="modal"
                      data-target="#exampleModal"
                    >
                      <button
                        class="internal-link"
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        onclick="showModalInclusions('${rateDataKey[4]} - ${rateDataValue[4].name}', '${rateDataValue[4].inclusions}')"
                      >
                        Rate Inclusions
                      </button>
                    </td>
                    <td class="rates-price">USD <span>${estimatedTotalAmount[4]}</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </article>
        `;
  });
}

// Filter array function
function filterFunction() {
  checkboxs.forEach((checkbox) => {
    checkbox.addEventListener("change", function () {
      const listCarsFiltered = [];
      if (this.checked === true && checkbox.value == "manualTransmition") {
        const filteredCars = listCars.filter(
          (auto) => auto.TransmissionType !== "Automatic"
        );
        const listCarsFiltered = [...filteredCars];
        dataDomPrint(listCarsFiltered);
      } else if (this.checked === true && checkbox.value == "autoTransmition") {
        const filteredCars = listCars.filter(
          (auto) => auto.TransmissionType === "Automatic"
        );
        const listCarsFiltered = [...filteredCars];
        dataDomPrint(listCarsFiltered);
      } else if (this.checked === true && checkbox.value == "fiveSeats") {
        const filteredCars = listCars.filter(
          (auto) => Number(auto.Features2.seats) === 5
        );
        const listCarsFiltered = [...filteredCars];
        dataDomPrint(listCarsFiltered);
      } else if (this.checked === true && checkbox.value == "sevenSeats") {
        const filteredCars = listCars.filter(
          (auto) => Number(auto.Features2.seats) >= 7
        );
        const listCarsFiltered = [...filteredCars];
        dataDomPrint(listCarsFiltered);
      } else if (this.checked === true && checkbox.value == "convertible") {
        const filteredCars = listCars.filter(
          (auto) => auto.Features2.category === "Convertible"
        );
        const listCarsFiltered = [...filteredCars];
        dataDomPrint(listCarsFiltered);
      } else {
        dataDomPrint(listCars);
      }
    });
  });
}

// Modal show function
function showModalInclusions(nameInclusion, inclusions) {
  let strInclusions = inclusions;
  let arrInclusions = strInclusions.split(",");

  MODAL_CONTAINER_DOM.innerHTML = "";
  MODAL_SUBTITLE.innerHTML = "";

  if (inclusions !== "undefined") {
    // Subtitle Modal
    MODAL_SUBTITLE.innerHTML = `<p class="modal-subtitle">${nameInclusion}</p>`;
    // Inclusions List
    arrInclusions.forEach(
      (feature) =>
        (MODAL_CONTAINER_DOM.innerHTML += `<li>
                  <i class="fa-solid fa-chevron-right"></i>${feature}
                </li>`)
    );
  } else {
    MODAL_CONTAINER_DOM.innerHTML += `<p>Do not have inclusions.</p>`;
  }
}

// Modal function
myModal.addEventListener("shown.bs.modal", () => {
  myInput.focus();
});
