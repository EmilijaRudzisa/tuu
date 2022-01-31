function fetchData() {
  fetch("./dati2.json")
  .then(response => {
    if (!response.ok) {
      throw Error("error");
    }

    return response.json();
  })

  .then(data => {
    const tabula = data.map(persona => {
      return `
          <tr>
            <td>${persona.Gramatas ID}</td>
            <td>${persona.Nosaukums}</td>
            <td>${persona.Autors}</td>
            <td>${persona.Valoda}</td>            
          </tr>
      `;
    })
    .join("");

    document.querySelector('#showdata').innerHTML = tabula;
  })

  .catch(error => {
    console.log(error);
  });
}

fetchData();

