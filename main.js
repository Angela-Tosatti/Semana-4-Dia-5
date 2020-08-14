const req = new XMLHttpRequest();
req.open("GET", "https://api.github.com/users/Angela-Tosatti/repos")
req.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {

        const obj = JSON.parse(this.responseText)

        for (var i = 0; i < obj.length; i++) {
            document.getElementById('tabela').innerHTML += "<tr><td> Nome: " + obj[i].name + " </td>  <td>Linguagem: " + obj[i].language + "</td><td><a target='_blank'href='" + obj[i].html_url + "'>Link: " + obj[i].html_url + "</a></td> <td>Clonar: <button  onclick='copyToClipboard(this)'> " + obj[i].clone_url + "</button></td></tr>";
        }

        console.log(obj)
    }

}
req.send()


function copyToClipboard(botao) {
    var input = document.createElement("input");
    input.value = botao.innerText;
    console.log(botao.innerText)
    input.id = "input";
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    input.remove();
}