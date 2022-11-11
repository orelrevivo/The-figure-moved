function populateBoard() {
	game_board.innerHTML = ''

	function addBlocks() {
		var b = document.createElement('div')
		b.className = 'block'	

		var m = document.createElement('div')
		m.className = 'muncher'

		if(i == num) {
			game_board.appendChild(b).appendChild(m)
		} else {
			b.innerHTML = Math.round(Math.random()*250)
			game_board.appendChild(b)
		}	
	}

	num = Math.floor(Math.random()*30)
	for(var i=0;i<30;i++){
		addBlocks()
	}
}

window.addEventListener('click', populateBoard)
document.body.click()