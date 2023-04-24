function CreateTable() {
   let rows = document.getElementById("rowsValue").value;
   let cells = document.getElementById("cellsValue").value;

   document.write(`You wanted ${rows} rows and ${cells} lines`);
   const tbl = document.createElement("table");
   const tblBody = document.createElement("tbody");

  for (let i = 0; i < cells; i++) {
    const row = document.createElement("tr");

    for (let j = 0; j < rows; j++) {
      const cell = document.createElement("td");
      const cellText = document.createTextNode(`${i+1}, ${j+1}`);
      cell.appendChild(cellText);
      row.appendChild(cell);
    }
    tblBody.appendChild(row);
  }
  tbl.appendChild(tblBody);
  document.body.appendChild(tbl);
  tbl.setAttribute("border", "2");
}
     