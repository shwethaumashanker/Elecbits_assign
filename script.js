const app = document.getElementById('root')

var request = new XMLHttpRequest()

request.open('GET', 'https://wygtwu2p2j.execute-api.ap-south-1.amazonaws.com/test', true)
request.onload = function() {

  var data = JSON.parse(this.response)

  if (request.status >= 200 && request.status < 400) {
    var dataForTopFourBoxes=data.dataForTopFourBoxes
      const tre = document.getElementById('TotalRevenue')
      tre.textContent = dataForTopFourBoxes.totalRevenue

      const ts = document.getElementById('TodaysSales')
      ts.textContent = dataForTopFourBoxes.todaysSales

      const c = document.getElementById('conversion')
      c.textContent = dataForTopFourBoxes.conversion

      const tv = document.getElementById('todaysVisits')
      tv.textContent = dataForTopFourBoxes.todaysVisits

    var dataForBottomRightTable=data.dataForBottomRightTable
    var col = [];
        for (var i = 0; i < dataForBottomRightTable.length; i++) {
            for (var key in dataForBottomRightTable[i]) {
                if (col.indexOf(key) === -1) {
                    col.push(key);
                }
            }
        }

        // Create a table.
        var table = document.createElement("table");

        // Create table header row using the extracted headers above.
        var tr = table.insertRow(-1);                   // table row.

        for (var i = 0; i < col.length; i++) {
            var th = document.createElement("th");      // table header.
            th.innerHTML = col[i];
            tr.appendChild(th);
        }

        // add json data to the table as rows.
        for (var i = 0; i < dataForBottomRightTable.length; i++) {

            tr = table.insertRow(-1);

            for (var j = 0; j < col.length; j++) {
                var tabCell = tr.insertCell(-1);
                tabCell.innerHTML = dataForBottomRightTable[i][col[j]];
            }
        }

        // Now, add the newly created table with json data, to a container.
        var divShowData = document.getElementById('prod');
        divShowData.innerHTML = "";
        divShowData.appendChild(table);

  } else {
    console.log('error')
  }
}

request.send()
