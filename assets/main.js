const mainScreen = document.getElementById("main-screen").content;
const loginScreen = document.getElementById("login-screen").content;
const registerScreen = document.getElementById("register-screen").content;
const panelScreen = document.getElementById("panel-screen").content;

const tableError = document.getElementById("table-error").content;
const tableNoData = document.getElementById("table-nodata").content;
const tableOffline = document.getElementById("table-offline").content;
const tableRecord = document.getElementById("table-record").content;

const root = document.getElementById("root");

let currentRecords = [];
let isLogged = false;
let db;
let chart;
 
const initIndexedDb = () => {
  if (!window.indexedDB) {
    console.log(`Przeglądarka nie wspiera IndexedDB`);
  } else {
    let indexedRequest = indexedDB.open("weather", 3);

    indexedRequest.onerror = (event) => {
      console.log("IndexedDB error", event.target.errorCode);
    };

    indexedRequest.onsuccess = (event) => {
      db = event.target.result;

      migrateDb();
    };

    indexedRequest.onupgradeneeded = (event) => {
      db = event.target.result;

      db.createObjectStore("records", {
        autoIncrement: true,
      });
    };
  }
};

initIndexedDb();

const clouds = [
  "bezchmurnie",
  "prawie bezchmurnie",
  "mało chmur",
  "zachmurzenie małe",
  "zachmurzenie umiarkowane",
  "pochmurnie",
  "zachmurzenie duże",
  "zachmurzenie prawie całkowite",
  "zachmurzenie całkowite",
  "niebo niewidoczne",
];

const setLogged = (logged) => {
  isLogged = logged;

  document.querySelectorAll(".no-auth-link").forEach((element) => {
    logged
      ? element.classList.add("d-none")
      : element.classList.remove("d-none");
  });

  document.querySelectorAll(".auth-link").forEach((element) => {
    !logged
      ? element.classList.add("d-none")
      : element.classList.remove("d-none");
  });

  if (logged) {
    location.hash = "#panel";
  } else {
    location.hash = "#login";
  }
};

const handleLogin = (event) => {
  event.preventDefault();

  const { target } = event;

  const formData = new FormData(target);
  const alert = target.querySelector("#alert");

  if (!navigator.onLine) {
    alert.className = "alert alert-danger";
    alert.innerHTML = "Aplikacja w trybie offline nie pozwala na logowanie!";
    return;
  }

  fetch("api/login", {
    method: "POST",
    body: formData,
  }).then((response) => {
    const { status } = response;

    if (status === 401) {
      alert.className = "alert alert-danger";
      alert.innerHTML = "Błędny adres e-mail i/lub hasło!";
    } else if (status === 200) {
      alert.className = "alert alert-success";
      alert.innerHTML = "Zalogowano";
      // przestawiam stan zalogowania
      setLogged(true);
    } else {
      alert.className = "alert alert-danger";
      alert.innerHTML = "Wystąpił nieznany błąd";
    }
  });
};

const handleRegister = (event) => {
  event.preventDefault();

  const { target } = event;

  const formData = new FormData(target);
  const alert = target.querySelector("#alert");

  if (!navigator.onLine) {
    alert.className = "alert alert-danger";
    alert.innerHTML = "Aplikacja w trybie offline nie pozwala na rejestrację!";
    return;
  }

  fetch("api/register", {
    method: "POST",
    body: formData,
  }).then((response) => {
    const { status } = response;

    if (status === 409) {
      alert.className = "alert alert-danger";
      alert.innerHTML = "Użytkownik o podanych danych istnieje!";
    } else if (status === 200) {
      alert.className = "alert alert-success";
      alert.innerHTML = "Możesz się zalogować";
    } else {
      alert.className = "alert alert-danger";
      alert.innerHTML = "Wystąpił nieznany błąd";
    }
  });
};

const handleAdd = (event) => {
  event.preventDefault();

  const { target } = event;

  let formData = new FormData(target);
  formData = JSON.stringify(Object.fromEntries(formData));

  if (navigator.onLine) {
    uploadRecord(formData);
  } else {
    const alert = document.querySelector("#alert");

    if (!db) {
      alert.className = "alert alert-danger";
      alert.innerHTML =
        "Pracujesz w trybie offline, a IndexedDB nie działa poprawnie.";
      return;
    }

    const transaction = db.transaction(["records"], "readwrite");
    const records = transaction.objectStore("records");

    records.add(formData);

    alert.className = "alert alert-info";
    alert.innerHTML = "Tryb offline. Rekord zapisano w lokalnej bazie danych.";
  }
};

const uploadRecord = (formData) => {
  const alert = document.querySelector("#alert");

  fetch("api/weather", {
    method: "POST",
    body: formData,
    credentials: "same-origin",
    headers: new Headers({ "content-type": "application/json" }),
  }).then((response) => {
    const { status } = response;

    const data = response.json();

    data.then((result) => {
      const { records } = result;

      if (status === 401) {
        setLogged(false);
        location.hash = "#login";
        return;
      } else if (status === 422) {
        alert.className = "alert alert-danger";
        let alertText = "Niepoprawne dane!";
        alertText += "<ul>";

        Object.keys(records).forEach((key) => {
          const record = records[key];

          alertText += `<li>${key}: ${record}</li>`;
        });

        alertText += "</ul>";
        alert.innerHTML = alertText;
      } else if (status === 200) {
        alert.className = "alert alert-success";
        alert.innerHTML = "Rekord dodany";
        if (location.hash == "#panel") {
          handleDownload();

          const addForm = document.querySelector("#add-form");
          addForm.reset();
        }
      } else {
        alert.className = "alert alert-danger";
        alert.innerHTML = "Wystąpił nieznany błąd";
      }
    });
  });
};

const handleDownload = () => {
  const tbody = document.querySelector("#table-body");

  while (tbody.firstChild) {
    tbody.firstChild.remove();
  }

  if (!navigator.onLine) {
    tbody.append(tableOffline.cloneNode(true));

    return;
  }

  fetch("api/weather", {
    method: "GET",
    credentials: "same-origin",
  }).then((response) => {
    const { status } = response;

    const data = response.json();

    data.then((result) => {
      const { records } = result;
      currentRecords = records;

      if (status === 401) {
        setLogged(false);
        location.hash = "#login";
        return;
      } else if (status !== 200) {
        tbody.append(tableError.cloneNode(true));
        return;
      }

      if (records.length == 0) {
        tbody.append(tableNoData.cloneNode(true));
      } else {
        records.forEach((record) => {
          const {
            _id,
            city,
            datetime,
            temp,
            temp_felt,
            rainfall,
            humidity,
            atmospheric_pressure,
            wind,
            cloudy,
          } = record;

          let recordElement =
            tableRecord.cloneNode(true).firstElementChild.innerHTML;

          recordElement = recordElement.replace("{$id}", _id.$oid);
          recordElement = recordElement.replace("{$city}", city);
          recordElement = recordElement.replace("{$datetime}", datetime);
          recordElement = recordElement.replace("{$temp}", temp);
          recordElement = recordElement.replace("{$temp_felt}", temp_felt);
          recordElement = recordElement.replace("{$rainfall}", rainfall);
          recordElement = recordElement.replace("{$humidity}", humidity);
          recordElement = recordElement.replace(
            "{$atmospheric_pressure}",
            atmospheric_pressure
          );
          recordElement = recordElement.replace("{$wind}", wind);
          recordElement = recordElement.replace("{$cloudy}", clouds[cloudy]);

          // dodaję HTML do treści ciała tabeli
          tbody.innerHTML = tbody.innerHTML + recordElement;
        });
      }
    });
  });
};

const handleChartGeneration = (event) => {
  const { target } = event;
  const { value } = target;

  const cityRecords = currentRecords
    .filter((record) => record.city === value)
    .sort((a, b) => {
      return new Date(a.datetime).getTime() < new Date(b.datetime).getTime()
        ? -1
        : 1;
    });

  const chartData = {
    datetime: [],
    temp: [],
    temp_felt: [],
    atmo: [],
  };

  cityRecords.forEach((record) => {
    chartData.datetime.push(record.datetime);
    chartData.temp.push(record.temp);
    chartData.temp_felt.push(record.temp_felt);
    chartData.atmo.push(record.atmospheric_pressure);
  });

  const ctx = document.querySelector("#chart").getContext("2d");

  if (chart) {
    chart.destroy();
  }

  chart = new Chart(ctx, {
    type: "line",
    data: {
      labels: chartData.datetime,
      datasets: [
        {
          label: "Temperatura [°C]",
          data: chartData.temp,
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 1,
          yAxisID: "temp",
        },
        {
          label: "Temperatura odczuwalna [°C]",
          data: chartData.temp_felt,
          backgroundColor: "rgba(12, 99, 132, 0.2)",
          borderColor: "rgba(12, 99, 132, 1)",
          borderWidth: 1,
          yAxisID: "temp",
        },
        {
          label: "Ciśnienie atmosferyczne [hPa]",
          data: chartData.atmo,
          backgroundColor: "rgba(50, 99, 30, 0.2)",
          borderColor: "rgba(50, 99, 30, 1)",
          borderWidth: 1,
          yAxisID: "atmo",
        },
      ],
    },
    options: {
      scales: {
        temp: {
          type: "linear",
          display: true,
          position: "left",
          beginAtZero: true,
          ticks: {
            stepSize: 1,
          },
        },
        atmo: {
          type: "linear",
          display: true,
          position: "right",
          ticks: {
            stepSize: 20,
          },
        },
      },
    },
  });
};

const getDateTime = () => {
  const dateTime = new Date();

  return `${dateTime.getFullYear()}-${(dateTime.getMonth() + 1 + "").padStart(
    2,
    "0"
  )}-${(dateTime.getDay() + "").padStart(2, "0")}T${(
    dateTime.getHours() + ""
  ).padStart(2, "0")}:${(dateTime.getMinutes() + "").padStart(2, "0")}`;
};

const checkScreen = () => {
  while (root.firstChild) {
    root.firstChild.remove();
  }

  let screen;

  if (!isLogged && location.hash == "#panel") {
    location.hash = "#login";
  }

  if (location.hash == "#logout") {
    setLogged(false);
    location.hash = "#login";
  }

  switch (location.hash) {
    default:
    case "":
    case "#":
      screen = mainScreen.cloneNode(true);
      break;
    case "#panel":
      screen = panelScreen.cloneNode(true);
      const addForm = screen.querySelector("#add-form");
      addForm.addEventListener("submit", handleAdd);
      addForm.querySelector("input[type='datetime-local']").value =
        getDateTime();
      const chartCity = screen.querySelector("#graph_city");
      chartCity.addEventListener("change", handleChartGeneration);
      const button = screen.querySelector("#refresh");
      button.addEventListener("click", handleDownload);
      break;
    case "#login":
      screen = loginScreen.cloneNode(true);
      const loginForm = screen.querySelector("#login-form");
      loginForm.addEventListener("submit", handleLogin);
      break;
    case "#register":
      screen = registerScreen.cloneNode(true);
      const registerForm = screen.querySelector("#register-form");
      registerForm.addEventListener("submit", handleRegister);
      break;
  }

  root.append(screen);

  if (location.hash == "#panel") {
    handleDownload();
  }
};

const migrateDb = () => {
  if (!navigator.onLine) {
    return;
  }

  const transaction = db.transaction(["records"], "readwrite");
  const recordsStore = transaction.objectStore("records");
  const getRequest = recordsStore.openCursor();

  getRequest.onsuccess = (event) => {
    let cursor = event.target.result;

    if (cursor) {
      let key = cursor.primaryKey;
      let value = cursor.value;

      uploadRecord(value);
      recordsStore.delete(key);

      cursor.continue();
    }
  };
};

document.addEventListener("DOMContentLoaded", checkScreen);
window.addEventListener("hashchange", checkScreen, false);

window.addEventListener("online", migrateDb);
