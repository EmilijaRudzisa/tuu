function fetchData() {
  fetch("./dati2.json")
  .then(response => {
    if (!response.ok) {
      throw Error("error");
    }

    return response.json();
  })
// iegust datus no json feli 
  .then(data => {
    const tabula = data.map(persona => {
      return `
          <tr>
            <td>${persona.gramatasID}</td>
            <td>${persona.nosaukums}</td>
            <td>${persona.autors}</td>
            <td>${persona.valoda}</td>            
          </tr>
      `;
    })
    // kura tabulas vieta no json vajag ielikt datus
    .join("");

    document.querySelector('#showdata').innerHTML = tabula;
  })

  .catch(error => {
    console.log(error);
  });
}

fetchData();