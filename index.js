const btnSubmit = document.getElementById('createSong')
const errorMsg = document.getElementById('msg')

const createSong = () => {
  return new Promise((resolve, reject) => {
    const title = document.getElementById('title').value
    const artist = document.getElementById('artist').value
    const duration = parseInt(document.getElementById('duration').value)

    if (title && artist && duration) {
      const song = {
        title: title,
        artists: [{ name: artist }],
        duration: duration,
      }
      errorMsg.innerText = 'Lagi Proses Nich...'
      setTimeout(() => {
        resolve(song)
      }, 2000)
    } else {
      reject('Tolong semua data harus diisi yah!')
    }
  })
}

const displaySong = (song) => {
  console.log(song)
  const outputDiv = document.getElementById('output')
  const elTitle = document.createElement('h2')
  const elArtist = document.createElement('p')
  const elDuration = document.createElement('p')
  const createHr = document.createElement('hr')
  const cardDiv = document.createElement('div')
  const img = document.createElement('img')
  cardDiv.classList.add('card')
  elTitle.classList.add('title')
  elDuration.classList.add('duration')
  img.src =
    'https://media.istockphoto.com/id/1175435360/vector/music-note-icon-vector-illustration.jpg?s=612x612&w=0&k=20&c=R7s6RR849L57bv_c7jMIFRW4H87-FjLB8sqZ08mN0OU='

  const textTitle = document.createTextNode(song.title)
  const textArtist = document.createTextNode(song.artists[0].name)
  const textDuration = document.createTextNode(song.duration + ' Menit')

  elTitle.appendChild(textTitle)
  elArtist.appendChild(textArtist)
  elDuration.appendChild(textDuration)
  console.log(elTitle)
  console.log(elArtist)
  console.log(elDuration)

  cardDiv.appendChild(img)
  cardDiv.appendChild(elTitle)
  cardDiv.appendChild(elArtist)
  cardDiv.appendChild(elDuration)
  // outputDiv.appendChild(elTitle)
  // outputDiv.appendChild(elArtist)
  // outputDiv.appendChild(elDuration)
  outputDiv.appendChild(cardDiv)
}

btnSubmit.addEventListener('click', async () => {
  try {
    const song = await createSong()
    errorMsg.innerText = ''
    displaySong(song)
  } catch (error) {
    errorMsg.innerText = error
    console.log(error)
  }
})
