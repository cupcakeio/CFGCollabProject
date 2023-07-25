const video = document.querySelector('video')
const source = document.querySelector('source')

video.appendChild(source)
video.play()

const changeVideoButton = document.querySelector('#changeVideo')
changeVideo.addEventListener('click', e => {
  video.pause()
  
  source.setAttribute('src', 'video (1080p).mp4')
  
  video.load()
  video.play()
})