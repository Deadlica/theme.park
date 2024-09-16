
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// YOU MUST ESCAPE ANY SINGLE BACKSLASHES LIKE SO: \\

let custom_text_header = `
<div class="custom-text-header"> <pre>   _____ ___    __  ___________    _____  __
  / ___//   |  /  |/  / ____/ /   /  _/ |/ /
  \__ \/ /| | / /|_/ / /_  / /    / / |   / 
 ___/ / ___ |/ /  / / __/ / /____/ / /   |  
/____/_/  |_/_/  /_/_/   /_____/___//_/|_|  
                                            </pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
