var host = "http://localhost:8080/api/car";

    function carCreationAction() {

    var obj = new Object();
    obj.name = document.getElementById("car_name").value;
    obj.model = document.getElementById("car_model").value;
    obj.manufacturer = document.getElementById("car_manufacturer").value;
    obj.year = document.getElementById("car_year").value;
    obj.color = document.getElementById("car_color").value;
    obj.fuel = document.getElementById("car_fuel").value;

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
         if (this.readyState == 4 && this.status == 200) {
             alert("The car has been successfully created");
             document.getElementById("car_form").reset();
         }
    };

    xhttp.open("POST", host, true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(obj));
}

    function carListAction() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
         if (this.readyState == 4 && this.status == 200) {
            var list = JSON.parse(this.responseText);
            var cols = [];
            cols.push("operation");
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
                            var a = document.createElement('a');
                            var link = document.createTextNode('delete');
                            a.appendChild(link);
                            a.href = host + '/' + list[i][cols[1]];
                            a.setAttribute('data-method', 'delete');
                            trow.appendChild(a);
                            for (var j = 1; j < cols.length; j++) {
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