let cells = document.querySelectorAll(`.field td`)
let modal = document.querySelector(`#modal`)

// this - обект "перед точкой", который используется для вызова метода.

function start(cells) {
    let i = 0;


    for (let cell of cells) {
        cell.addEventListener(`click`, function step() {
            // если i - чётное, то Х
            if (i % 2 == 0) {
                this.textContent = `✖`
            } else {
                this.textContent = `Ｏ`
            }
            // удалить обработку клика
            this.removeEventListener(`click`, step);

            if (isWinner(cells)) {

                modal.textContent = `Победил ${this.textContent} `
                // alert(`Победил ${this.textContent}`)

            }

            // увеличить счетчик на 
            i++;

        })
    }
}

function isWinner(cells) {
    let combs = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]

    ]
    // По очереди в цикле проверяются все возможные комбинации если есть комбинации, то true
    // В остальных случаях - False
    for (let comb of combs) {
        if (cells[comb[0]].textContent == cells[comb[1]].textContent &&
            cells[comb[1]].textContent == cells[comb[2]].textContent &&
            cells[comb[0]].textContent != ``) {

            return true;
        }
    }
}
start(cells)