document.querySelectorAll("#option a").forEach((a) => {
    // Jika nanti di klik maka akan menjalankan fungsi computerChoice()
    a.addEventListener("click", (element) => {
        computerChoice(element);
    });
})
function computerChoice(element){
    // Pilihan User
    let pilihanUser = element.target.innerText;

    // Menangkap element result dengan queryselector
    let pilihanKomputer = document.querySelector("#result");

    // Membuat array pilihan untuk komputer
    let choices = ["Rock", "Paper", "Scissors"];

    // Pilihan random komputer
    pilihanKomputer.innerHTML = choices[Math.round(Math.random() * 2)];
    pilihanKomputer = pilihanKomputer.innerHTML;

    // Jika pilihan user == komputer (draw)
    if(pilihanUser == pilihanKomputer){
        setTimeout(() => alert("DRAW"),325);
    }

    // Jika pilihan user menang
    if(pilihanUser == "Rock" && pilihanKomputer == "Scissors"){
        setTimeout(() => alert("USER WIN"),325);
    } else if(pilihanUser == "Paper" && pilihanKomputer == "Rock"){
        setTimeout(() => alert("USER WIN"),325);
    } else if(pilihanUser == "Scissors" && pilihanKomputer == "Paper"){
        setTimeout(() => alert("USER WIN"),325);
    }
    
    // Jika pilihan komputer menang
    if(pilihanKomputer == "Rock" && pilihanUser == "Scissors"){
        setTimeout(() => alert("COMPUTER WIN"),325);
    } else if(pilihanKomputer == "Paper" && pilihanUser == "Rock"){
        setTimeout(() => alert("COMPUTER WIN"),325);
    } else if(pilihanKomputer == "Scissors" && pilihanUser == "Paper"){
        setTimeout(() => alert("COMPUTER WIN"),325);
    }
}