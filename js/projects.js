var small = false;
if ($(window).width() < 690) {
  shrink();
}

function shrink() {
  var text = $(".table-text");
  var pics = $(".table-image");

  for (var i = 0; i < text.length; i++) {
    var newPic = pics[i].cloneNode(true);
    newPic.classList.remove("table-image");
    newPic.style.width = "10vw";
    var wrap = document.createElement('div');
    wrap.appendChild(newPic);
    $("main").append(
      '<div style="text-align: center;">' + wrap.innerHTML + "</div>"
    );
    $("main").append(
      '<div style="text-align: left;">' +
        text[i].innerHTML +
        "<br /></div>"
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
      <tr>
        <td class="table-cell">
          <img class="table-image" src="./resources/stock.png" />
        </td>
        <td class="table-text">
          <h3>
            <a
              href="https://politicalaccountability.net/hifi/files/Conflicted-Consequences.pdf"
              target="_blank"
              rel="noreferrer noopener"
              >Conflicted Consequences</a
            >
          </h3>
          <p>
            A research report I developed while working at the Center for
            Political Accountability. We traced the donations of
            publicly-traded companies to IRS Section 527 organizations to show
            the impact of publicly-traded companies on elections and, by
            extension, the policies passed by the candidates they helped to
            elect. In the end, we proved that a lot of publicly-traded
            companies end up indirectly giving money to candidates who pass
            policies that contradict the values that they publicly espouse.
          </p>
        </td>

        <td class="table-text" style="text-align: right">
          <h3>
            <a
              href="https://github.com/benjaminbecker7/JacksaFactions"
              target="_blank"
              rel="noreferrer noopener"
              >The JacksaFactions Plugin</a
            >
          </h3>
          <p>
            A Minecraft server plugin I created using Java for the Jacksa.TV
            Minecraft server. It creates a system through which players are
            able to make factions on the server, invite their friends to their
            factions, and claim land. It was created to address the idea that
            not many full-form faction plugins in Minecraft were developed to
            maintain information across multiple servers on the same network.
            To do this, the plugin uses a common SQL database to sync faction
            and claim data across the servers. To make the plugin operations
            scalable, I implemented a caching system and used asynchronous
            threads wherever possible to minimize the amount of time the
            server would spend connecting to the SQL database on its main
            thread.
          </p>
        </td>
        <td class="table-cell">
          <img class="table-image" src="./resources/minecraft.png" />
        </td>
      </tr>
      <tr>
        <td class="table-cell">
          <img class="table-image" src="./resources/command-line.png" />
        </td>
        <td class="table-text">
          <h3>
            <a
              href="https://github.com/benjaminbecker7/Shell"
              target="_blank"
              rel="noreferrer noopener"
              >BASH: The Ben and Alex Shell</a
            >
          </h3>
          <p>
            A simple bash-like shell that I coded for a project in my
            Introduction to Computer Systems class in Fall of 2020. The
            assignment was simple: use multiprocessing to create a shell that
            is capable of running external commands in both the foreground and
            the background, display background processes, and kill processes.
            However, I decided to go above and beyond the project description
            by creating a multifile project structure, adding an ANSI-colored
            command line interface, and adding support for output redirection
            and basic bash commands such as echo, cd, and help.
          </p>
        </td>
        <td class="table-text" style="text-align: right">
          <h3>
            <a
              href="https://github.com/benjaminbecker7/CPA_ResearchClient"
              target="_blank"
              rel="noreferrer noopener"
              >The CPA Research Client</a
            >
          </h3>
          <p>
            My categorization algorithm ported to Python with a command-line
            interface and efficiency optimizations. The program allows for
            users to upload pre-categorized datasets to the system, and then
            use the system data to fill out uncategorized datasets. When a
            pre-categorized Excel file with 527 donations is fed into the
            algorithm, it records those categories into dictionaries with keys
            set as the categories and the values as lists of what donor names
            can go under that category. Upon closing, the program saves those
            dictionaries into files with custom delimiting in the resources
            directory. Upon opening, the program can then load back the
            categorization data into the dictionaries to fill uncategorized
            datasets.
          </p>
        </td>
        <td class="table-cell">
          <img class="table-image" src="./resources/research.png" />
        </td>
      </tr>
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
