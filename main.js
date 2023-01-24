let x = Math.floor((Math.random() * anionkation['ionA'].length) + 1);
let y = Math.floor((Math.random() * 2));

let yy = ['ionA','ionK']
let xx = ['namaA', 'namaK']

function outtest(x,y,xx,yy){
  document.querySelector('.ion').innerHTML = anionkation[yy[y]][x]
  
  
  document.querySelector('.ion').addEventListener('click', () => {
    document.querySelector('.ion').innerHTML = anionkation[xx[y]][x]
  })
}

outtest(x,y,xx,yy)



document.querySelector('.reload').addEventListener('click',()=>{
  location.reload()
})
