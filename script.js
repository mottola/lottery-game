var userMoney = 10;

var output = (document.getElementById('output'));
var playButton = document.getElementById('playButton');
var ticketButton = document.getElementById('ticketButton');
var playerFunds = document.getElementById('playerFunds');
playerFunds.innerHTML = "$" + userMoney;

function playHand() {
    if (userMoney == 0) {
        output.innerHTML = "<span class='error'>You are out of money!!</span>";
        return;
    }

    var userNumbers = [];
    var num1 = (document.getElementById('num1'));
    var num2 = (document.getElementById('num2'));
    var num3 = (document.getElementById('num3'));
    var num4 = (document.getElementById('num4'));

    // Makes Certain that user input is stored as an integer \\
    num1 = parseInt(num1.value);
    num2 = parseInt(num2.value);
    num3 = parseInt(num3.value);
    num4 = parseInt(num4.value);

    userNumbers.push(num1, num2, num3, num4);
    console.log(userNumbers);
    for (var i = 0; i < userNumbers.length; i++) {
        if (userNumbers[i] > 0 && userNumbers[i] < 11) {

        } else {
            output.innerHTML = "<span class='error'>Read the directions and try again!!</span>";
            return;
        }
        if (userNumbers[i] == userNumbers[i + 1]) {
            output.innerHTML = "<span class='error'>Read the directions and try again!!</span>";
            return;
        }
    }
    userMoney -= 2;
    playerFunds.innerHTML = "$" + userMoney;


    console.log("You pressed the button");
    console.log(userMoney);
    var lotteryNumbers = generateNumbers();
    compare(lotteryNumbers, userNumbers);
}

function generateNumbers() {
    var lotteryNumbers = [];
    for (var i = 0; i < 4; i++) {
        lotteryNumbers.push(Math.round(Math.random() * 10))
    }
    console.log(lotteryNumbers);
    return lotteryNumbers;

}

function compare(lottery, user) {
    var matchingNumbers = 0;
    for (var j = 0; j < user.length; j++) {
        for (var k = 0; k < lottery.length; k++) {
            if (user[j] == lottery[k]) {
                matchingNumbers++;
            }
        }
    }
    if (matchingNumbers == 0) {
        output.innerHTML = "<span class='win'>Sorry, you didn't win!!</span>";
    } else if ((matchingNumbers == 1)) {
        output.innerHTML = "<span class='win'>You won $4!!</span>";
        userMoney += 4;
    } else if ((matchingNumbers == 2)) {
        output.innerHTML = "<span class='win'>You won $16!!</span>";
        userMoney += 16;
    } else if ((matchingNumbers == 3)) {
        output.innerHTML = "<span class='win'>You won $64!!</span>";
        userMoney += 64;
    } else {
        output.innerHTML = "<span class='win'>Sweet baby Jesus!! You won $4,096!!!</span>";
        userMoney += 4096;
        console.log(matchingNumbers);
    }
    return playerFunds.innerHTML = "$" + userMoney;

}
ticketButton.onclick = playHand;