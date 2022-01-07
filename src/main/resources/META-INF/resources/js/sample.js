var host = "http://localhost:8080/api/car";
var data = '{"manufacturer":"Volkswagen","model":"SportCombi","name":"Golf","color":"white","productionYear":"2019","fuel":"Petrol"}';

    function carCreateAction() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
         if (this.readyState == 4 && this.status == 200) {
             alert(this.responseText);
         }
    };
    xhttp.open("POST", host, true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(data);
}

    function carListAction() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
         if (this.readyState == 4 && this.status == 200) {
            var list = JSON.parse(this.responseText);
            var cols = [];
            for (var i = 0; i < list.length; i++) {
                            for (var k in list[i]) {
                                if (cols.indexOf(k) === -1) {
                                    cols.push(k);
                                }
                            }
                        }

                        // Create a table element
                        var table = document.createElement("table");

                        // Create table row tr element of a table
                        var tr = table.insertRow(-1);

                        for (var i = 0; i < cols.length; i++) {

                            // Create the table header th element
                            var theader = document.createElement("th");
                            theader.innerHTML = cols[i];

                            // Append columnName to the table row
                            tr.appendChild(theader);
                        }

                        // Adding the data to the table
                        for (var i = 0; i < list.length; i++) {

                            // Create a new row
                            trow = table.insertRow(-1);
                            for (var j = 0; j < cols.length; j++) {
                                var cell = trow.insertCell(-1);

                                // Inserting the cell at particular place
                                cell.innerHTML = list[i][cols[j]];
                            }
                        }

                        // Add the newly created table containing json data
                        var el = document.getElementById("table");
                        el.innerHTML = "";
                        el.appendChild(table);
         }
    };
    xhttp.open("GET", host, true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send();
}