let x = [];
let y = [];

for(let i=0;i<2000;i++){
  x.push(Math.floor((Math.random() * anionkation['ionA'].length) + 1))
  y.push(Math.floor((Math.random() * 2)))
}


let yy = ['ionA','ionK']
let xx = ['namaA', 'namaK']

function outtest(x,y,xx,yy){
  document.querySelector('.ion').innerHTML = anionkation[yy[y]][x]
  
  
  document.querySelector('.ion').addEventListener('click', () => {
    document.querySelector('.ion').innerHTML = anionkation[xx[y]][x]
  })
}

let ganti = 0
outtest(x[ganti],y[ganti],xx,yy)


document.querySelector('.reload').addEventListener('click',()=>{
  if(ganti == 2000){
    location.reload()
  }
  outtest(x[ganti],y[ganti],xx,yy)
  ganti += 1
})
