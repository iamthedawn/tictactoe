var i = 0, j, k, l, m, n, o, p, q, r;
const element = document.querySelectorAll(".a1")
element.forEach(function (el) {
    el.addEventListener('click', function () {
        if (i === 0 && el.textContent == "_") {
            el.innerHTML = "X";
            i++;
            j = document.getElementById("c1a").textContent;

            k = document.getElementById("c1b").textContent;
            l = document.getElementById("c1c").textContent;
            m = document.getElementById("c2a").textContent;
            n = document.getElementById("c2b").textContent;
            o = document.getElementById("c2c").textContent;
            p = document.getElementById("c3a").textContent;
            q = document.getElementById("c3b").textContent;
            r = document.getElementById("c3c").textContent;
            checkwin();
           
        }

        else {
            if (el.textContent == "_") {
                el.innerHTML = "O";
                i = 0;
                j = document.getElementById("c1a").textContent;
                k = document.getElementById("c1b").textContent;
                l = document.getElementById("c1c").textContent;
                m = document.getElementById("c2a").textContent;
                n = document.getElementById("c2b").textContent;
                o = document.getElementById("c2c").textContent;
                p = document.getElementById("c3a").textContent;
                q = document.getElementById("c3b").textContent;
                r = document.getElementById("c3c").textContent;
                checkwin();
                
            }
        }

    });

});

var over;
function checkwin() {
    if (j == "X" && k == "X" && l == "X") {
        document.querySelector(".head22").innerHTML = "X WON!!! by Column1";
        gameover();
        return 0;
    }
    if (j == "O" && k == "O" && l == "O") {
        document.querySelector(".head22").innerHTML = "O WON!!! by Column1";
        gameover();
        return 0;
    }
    if (m == "O" && n == "O" && o == "O") {
        document.querySelector(".head22").innerHTML = "O WON!!! by Column2";
        gameover();
        return 0;
    }
    if (m == "X" && n == "X" && o == "X") {
        document.querySelector(".head22").innerHTML = "X WON!!! by Column2";
        gameover();
        return 0;
    }
    if (p == "X" && q == "X" && r == "X") {
        document.querySelector(".head22").innerHTML = "X WON!!! by Column3";
        gameover();
        return 0;
    }
    if (p == "O" && q == "O" && r == "O") {
        document.querySelector(".head22").innerHTML = "O WON!!! by Column3";
        gameover();
        return 0;
    }

    if (j == "X" && m == "X" && p == "X") {
        document.querySelector(".head22").innerHTML = "X WON!!! by Row1";
        gameover();
        return 0;
    }
    if (j == "O" && m == "O" && p == "O") {
        document.querySelector(".head22").innerHTML = "O WON!!! by Row1";
        gameover();
        return 0;
    }
    if (k == "O" && n == "O" && q == "O") {
        document.querySelector(".head22").innerHTML = "O WON!!! by Row2";
        gameover();
        return 0;
    }
    if (k == "X" && n == "X" && q == "X") {
        document.querySelector(".head22").innerHTML = "X WON!!! by Row2";
        gameover();
        return 0;
    }
    if (l == "O" && o == "O" && r == "O") {
        document.querySelector(".head22").innerHTML = "O WON!!! by Row3";
        gameover();
        return 0;
    }
    if (l == "X" && o == "X" && r == "X") {
        document.querySelector(".head22").innerHTML = "X WON!!! by Row3";
        gameover();
        return 0;
    }
    if (j == "O" && n == "O" && r == "O") {
        document.querySelector(".head22").innerHTML = "O WON!!! by Left Diagonal";
        gameover();
        return 0;
    }

    if (j == "X" && n == "X" && r == "X") {
        document.querySelector(".head22").innerHTML = "X WON!!! by Left Diagonal";
        gameover();
        return 0;
    }
    
    if (p == "O" && n == "O" && l == "O") {
        document.querySelector(".head22").innerHTML = "O WON!!! by Right Diagonal";
        gameover();
        return 0;
    }
    if (p == "X" && n == "X" && l == "X") {
        document.querySelector(".head22").innerHTML = "X WON!!! by Right Diagonal";
        gameover();
        return 0;
    }
 
}
function gameover(){
    document.getElementById("gameover").innerHTML="<p>GAME OVER click RESET to play a New GAME!</p>";
}
