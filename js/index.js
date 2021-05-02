var small = false;
if ($(window).width() < 690) {
  shrink();
}

function shrink() {
  var rows = $("tr");
  var pics = rows[1].querySelectorAll("th");
  var heads = rows[2].querySelectorAll("th");
  var contents = rows[3].querySelectorAll("td");

  for (var i = 0; i < pics.length; i++) {
    $("main").append(
      '<div style="text-align: center;">' + pics[i].innerHTML + "</div>"
    );
    $("main").append(
      '<div style="text-align: center; font-weight: 900;">' +
        heads[i].innerHTML +
        "</div>"
    );
    $("main").append(
      '<div style="text-align: center;">' + contents[i].innerHTML + "<br /></div>"
    );
  }

  $("table")[1].remove();

  small = true;
}

function enlarge() {
  var divs = $("main")[0].querySelectorAll("div");
  for (var i = 1; i < divs.length; i++) {
    divs[i].remove();
  }
  $("main").append(`
    <table>
      <thead>
        <tr>
          <th class="table-head" style="text-align: center;"><img class="table-image" src="./resources/java.png"></th>
          <th class="table-head" style="text-align: center;"><img class="table-image" src="./resources/python.png"></th>
          <th class="table-head" style="text-align: center;"><img class="table-image" src="./resources/web-design.png"></th>
          <th class="table-head" style="text-align: center;"><img class="table-image" src="./resources/servers.png"></th>
          <th class="table-head" style="text-align: center;"><img class="table-image" src="./resources/database.png"></th>
        </tr>
        <tr>
          <th class="table-head">Java Development</th>
          <th class="table-head">Python Development</th>
          <th class="table-head">Web Development: Front End</th>
          <th class="table-head">Web Development: Back End</th>
          <th class="table-head">Database Development</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="table-cell">
            <p>Object-Oriented Design</p>
            <p>Swing Library</p>
            <p>JDBC</p>
            <p>APIs</p>
            <p>Maven Development</p>
            <p>Data Structures and Algorithms</p>
            <p>JSoup Web Scraping</p>
            <p>Threads and Runnables</p>
            <p>Javadocs</p>
          </td>
          <td class="table-cell">
            <p>Object-Oriented Design</p>
            <p>Tkinter Interface Design</p>
            <p>Sockets Library</p>
            <p>Data Structures</p>
            <p>Scikit-Learn</p>
            <p>TensorFlow and Keras</p>
          </td>
          <td class="table-cell">
            <p>Human-Computer Interaction</p>
            <p>UX Design</p>
            <p>HTML5</p>
            <p>CSS3</p>
            <p>Bootstrap</p>
            <p>JavaScript, jQuery, and DOM Manipulation</p>
          </td>
          <td class="table-cell">
            <p>NodeJS</p>
            <p>Express</p>
            <p>Mongoose</p>
            <p>Authentication Services</p>
          </td>
          <td class="table-cell">
            <p>SQL (MySQL and MariaDB)</p>
            <p>Relational Database Management Systems</p>
            <p>Database Connection Drivers</p>
            <p>NoSQL (MongoDB)</p>
          </td>
        </tr>
      </tbody>
    </table>
  `);

  small = false;
}

function resize() {
  if (!small && $(window).width() < 690) {
    shrink();
  } else if (small && $(window).width() >= 690) {
    enlarge();
  }
}

window.onresize = resize;
