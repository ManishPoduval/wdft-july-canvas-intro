let canvas = document.querySelector('canvas')
canvas.style.border = '2px solid black';
canvas.style.backgroundColor = 'grey'

//canvas.parentNode.removeChild(canvas)

let ctx = canvas.getContext('2d')

// (x,y, width, height)
// console.log(ctx)
// ctx.fillStyle = 'blue';
// ctx.fillRect(50, 50, 100, 200)

// ctx.strokeStyle = 'green'
// ctx.strokeRect(250, 50, 100, 100)

// // ctx.clearRect(0,0, 100, 100)

// // ctx.fillStyle = 'red';
// // ctx.fillRect(70, 50, 100, 200)

// ctx.beginPath()
// ctx.moveTo(300, 300)
// ctx.lineTo(400, 300)
// ctx.lineTo(400, 400)
// ctx.lineTo(300, 500)
// ctx.closePath()

// // ctx.fillStyle = '#eb6b34';
// // ctx.fill()
// // ctx.lineTo()
// ctx.stroke()

// ctx.beginPath()
// ctx.moveTo(100, 400)
// ctx.lineTo(300, 500)
// ctx.closePath()

// // ctx.fillStyle = '#eb6b34';
// // ctx.fill()
// // ctx.lineTo()
// ctx.stroke()


// ctx.beginPath()
// ctx.arc(200, 200, 100, 0, Math.PI*2 )
// ctx.stroke()
// ctx.closePath()


// ctx.lineWidth = 10
ctx.fillStyle = 'white';
ctx.lineWidth = 10
ctx.beginPath()
ctx.arc(200, 200, 100, 0, Math.PI)
ctx.lineTo(300, 200)
ctx.fill()
ctx.stroke()
ctx.closePath()

ctx.fillStyle = 'red';
ctx.lineWidth = 10
ctx.beginPath()
ctx.arc(200, 200, 100, 0, Math.PI, true)

ctx.fill()
ctx.stroke()
ctx.closePath()

ctx.fillStyle = 'white';
ctx.lineWidth = 20
ctx.beginPath()
ctx.arc(200, 200, 20, 0, Math.PI*2, true)
ctx.stroke()
ctx.fill()
ctx.closePath()


// ctx.beginPath()
// ctx.arc(160, 160, 15, 0, Math.PI*2 )
// ctx.stroke()
// ctx.closePath()

// ctx.beginPath()
// ctx.arc(240, 160, 15, 0, Math.PI*2 )
// ctx.stroke()
// ctx.closePath()

// ctx.beginPath()
// ctx.moveTo(200, 200)
// ctx.lineTo(200, 240)
// ctx.stroke()

// ctx.font = '32px Verdana'
// ctx.fillText('Hello Ironhackers', 100, 70)

// let img = new Image()
// img.src = 'https://media.wsimag.com/attachments/8e728306596490ce126e8ac25f1889ca0b6d84ed/store/fill/1230/692/d3ea65079ad3b3a27b4ef63cc646031b58620079d7ccc91e7c8680904587/Monarch-Butterfly.jpg'

// img.addEventListener('load', function(){
//     ctx.drawImage(img , 100, 100, 300, 200)
// })

