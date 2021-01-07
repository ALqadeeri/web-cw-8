let board = [
    ['00', '01', '02'],
    ['10', '11', '12'],
    ['20', '21', '22']
]

let W = "O";

function press(x,y) {

    console.log(x,y)


    if(W == `X`){
        W = `O`;
    }
    else{
        W = `X`
    }

    board[x][y] = W;
    let cell = document.getElementById(`${x}${y}`);
    cell.innerText = W;

    if (board[0][2] == W && board[0][1] == W && board[0][0] == W){
        document.getElementById("status").innerText = `كفوووو ${W}`;
    }
    else if(board[0][0] == W && board[1][1] == W && board[2][2] == W){
        document.getElementById("status").innerText = `كفوووو ${W}`;
    }
    else if(board[0][0] == W && board[1][0] == W && board[2][0] == W){
        document.getElementById("status").innerText = `كفوووو ${W}`;
    }
    else if(board[0][1] == W && board[1][1] == W && board[2][1] == W){
        document.getElementById("status").innerText = `كفوووو ${W}`;
    }
    else if(board[0][2] == W && board[1][2] == W && board[2][2] == W){
        document.getElementById("status").innerText = `كفوووو ${W}`;
    }
    else if(board[1][0] == W && board[1][1] == W && board[1][2] == W){
        document.getElementById("status").innerText = `كفوووو ${W}`;
    }
    else if(board[2][0] == W && board[2][1] == W && board[2][2] == W){
        document.getElementById("status").innerText = `كفوووو ${W}`;
    }
        else if(board[0][2] == W && board[1][1] == W && board[2][0] == W){
        document.getElementById("status").innerText = `كفوووو ${W}`;
    }
}



    