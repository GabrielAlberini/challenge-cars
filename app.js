// Modal
const myModal = document.getElementById("myModal");
const myInput = document.getElementById("myInput");

myModal.addEventListener("shown.bs.modal", () => {
  myInput.focus();
});

// API Call
function traerDatos() {
  fetch("carsJSON.json")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const arrCars = Object.entries(data.cars);
      const CONTAINER = document.querySelector(".main-content-cards");
      CONTAINER.innerHTML = "";

      for (let auto of arrCars) {
        const autoCompany1 = auto[1].Company1;

        CONTAINER.innerHTML += `
        <article class="content-cards">
          <div class="characts-card">
            <div class="cont-ing-chracts-card">
              <img src="${autoCompany1.PictureURL}" alt="" />
            </div>
            <div class="characts-card-data">
              <p>CHARACTERISTICS</p>
              <ul>
                <li>
                  <img src="./assets/images/seats.svg" alt="img de icono" />${autoCompany1.Features2.seats} seats
                </li>
                <li>
                  <img src="./assets/images/luggage.svg" alt="img de icono" />${autoCompany1.Features2.largeSuitcase}
                  large suitcase
                </li>
                <li>
                  <img src="./assets/images/bag.svg" alt="img de icono" />${autoCompany1.Features2.smallSuitcase}
                  small suitcase
                </li>
                <li>
                  <img src="./assets/images/door.svg" alt="img de icono" />${autoCompany1.Features2.doors}
                  doors
                </li>
                <li>
                  <img
                    src="./assets/images/transmision.svg"
                    alt="img de icono"
                  />${autoCompany1.Features2.transmition} Transmition
                </li>
                <li>
                  <img
                    src="./assets/images/air-conditioning.svg"
                    alt="img de icono"
                  />${autoCompany1.Features2.air}
                </li>
              </ul>
            </div>
          </div>
          <div class="rates-card">
            <div class="head-title-card">
              <div>
                <h3>${autoCompany1.Features2.category}</h3>
                <p>GROUP ${autoCompany1.VehGroup} (${autoCompany1.Code})</p>
                <p>${autoCompany1.Name}</p>
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
                      <input type="radio" name="rate" id="AR" />
                    </th>
                    <td><label for="AR">AR - ${autoCompany1.Rates.AR.RateData.name}</label></td>
                    <td class="rate-custom">
                      <button
                        class="internal-link"
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        Rate Inclusions
                      </button>
                    </td>
                    <td class="rates-price">USD <span>752,99</span></td>
                  </tr>
                  
                  <tr>
                    <th scope="row">
                      <input type="radio" name="rate" id="4M" />
                    </th>
                    <td><label for="4M">4M - ${autoCompany1.Rates["4M"].RateData.name}</label></td>
                    <td class="rate-custom">
                      <button
                        class="internal-link"
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        Rate Inclusions
                      </button>
                    </td>
                    <td class="rates-price">USD <span>752,99</span></td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <input type="radio" name="rate" id="F2" />
                    </th>
                    <td>
                      <label for="F2">F2 - ${autoCompany1.Rates.F2.RateData.name}</label>
                    </td>
                    <td class="rate-custom">
                      <button
                        class="internal-link"
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        Rate Inclusions
                      </button>
                    </td>
                    <td class="rates-price">USD <span>752,99</span></td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <input type="radio" name="rate" id="SC" />
                    </th>
                    <td>
                      <label for="SC">SC - ${autoCompany1.Rates.SC.RateData.name}</label>
                    </td>
                    <td class="rate-custom">
                      <button
                        class="internal-link"
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        Rate Inclusions
                      </button>
                    </td>
                    <td class="rates-price">USD <span>752,99</span></td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <input type="radio" name="rate" id="HB" />
                    </th>
                    <td>
                      <label for="HB">HB - ${autoCompany1.Rates.H8.RateData.name}</label>
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
                      >
                        Rate Inclusions
                      </button>
                    </td>
                    <td class="rates-price">USD <span>752,99</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </article>
        `;
      }
      return arrCars;
    });
}
