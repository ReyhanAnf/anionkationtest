let x = [];
let y = [];
let z = [];

for(let i=0;i<2000;i++){
  x.push(Math.floor((Math.random() * anionkation['ionA'].length) + 1))
  y.push(Math.floor((Math.random() * 2)))
  z.push(Math.floor((Math.random() * 2)))
}


let yy = ['ionA','ionK']
let xx = ['namaA', 'namaK']
let zz = ['n','i']

function outtest(x,y, z,xx,yy, zz){
  if(zz[z] == 'n'){
    document.querySelector('.ion').innerHTML = anionkation[yy[y]][x]
    
    
    document.querySelector('.ion').addEventListener('click', () => {
      document.querySelector('.ion').innerHTML = anionkation[xx[y]][x]
    })
  }
  else if(zz[z]=='i'){
    document.querySelector('.ion').innerHTML = anionkation[xx[y]][x]
    
    
    document.querySelector('.ion').addEventListener('click', () => {
      document.querySelector('.ion').innerHTML = anionkation[yy[y]][x]
    })
  }else{
    document.querySelector('.ion').innerHTML = anionkation[yy[y]][x]
    
    
    document.querySelector('.ion').addEventListener('click', () => {
      document.querySelector('.ion').innerHTML = anionkation[xx[y]][x]
    })
  }
}

let iganti = 0
outtest(x[iganti],y[iganti], z[iganti],xx,yy, zz)


let ganti = document.querySelector('.reload');

ganti.addEventListener('click',()=>{
  if(iganti == 2000){
    location.reload()
  }
  outtest(x[iganti],y[iganti], z[iganti],xx,yy,zz,z)
  iganti += 1
})


let mulaites = document.querySelector('.mulai-tes');
let pilihtes = document.querySelector('.pilihan-tes');
let inputnama = document.querySelector('.pilihan-tes');
let solo = document.querySelector('.solo');
let duo = document.querySelector('.duo');
let gas = document.querySelector('.gas-tes');
let cek = document.querySelector('.cek');
let skor = document.querySelector('.skor');
    

mulaites.addEventListener('click',()=>{
  mulaites.style.display = 'none';
  pilihtes.style.display = 'grid';
  
})

let nskors = 0;
let nskord1 = 0;
let nskord2 = 0;

let xip = 1;


function inputtes(x){
  if(x == 1){
    pilihtes.style.display = 'none';
    solo.style.display = 'flex';
    gas.style.display = 'block';
    xip = 1;
  }else if(x == 2){
    alert('Kela..')
  //   pilihtes.style.display = 'none';
  //   duo.style.display = 'flex';
  //   gas.style.display = 'block';
  //   xip = 2;
  }
}


function gastes(){
  if(xip == 1){
    let namas = document.querySelector('#namas').value
    
    let benartes = document.querySelector('.benar-tes');
    let salahtes = document.querySelector('.salah-tes');
    
    code = `<h2>${namas}<h2/><div class='soloskor'>${nskors}</div>`;
    solo.style.display = 'none';
    gas.style.display = 'none';
    cek.style.display = 'none';
    ganti.style.display = 'none';
    
    skor.innerHTML = code;
    countdown(iganti);
  }else if(xip == 2){
    let duonama1 = document.querySelector('#nama1').value
    let duonama2 = document.querySelector('#nama2').value
    
    let skor = document.querySelector('.skor');
    let cek = document.querySelector('.cek');
    let benartes = document.querySelector('.benar-tes');
    let salahtes = document.querySelector('.salah-tes');
    
    code = `
          <div>
            <h2>${duonama1}<h2/>
            <div>${nskord1}</div>
          </div> 
          <div >
            <h2>${duonama2}<h2/>
            <div>${nskord2}</div>
          </div>
        `;
    
    duo.style.display = 'none';
    gas.style.display = 'none';
    cek.style.display = 'flex';
    ganti.style.display = 'none';
    
    skor.innerHTML = code;
  }
  
  
}


function benartes(){
  nskors += 1;
  document.querySelector('.soloskor').innerHTML = nskors;
  iganti += 1;
  lanjuttes();
  document.querySelector('.nameit').innerHTML = '';
}

function salahtes(){
  iganti += 1;
  lanjuttes();
  document.querySelector('.nameit').innerHTML = '';
}




function countdown(ig) {
        var seconds = 3;
        function tick() {
          let counter = document.getElementById("timer");
          seconds--;
          counter.innerHTML = seconds;
          if (seconds > 0) {
            setTimeout(tick, 1000);
          }else if(seconds == 0){
            if(zz[z[ig]] == 'n'){
              document.querySelector('.nameit').innerHTML = anionkation[xx[y[ig]]][x[ig]]
            }else if(zz[z[ig]] == 'i'){
              document.querySelector('.nameit').innerHTML = anionkation[yy[y[ig]]][x[ig]]
            }
            setTimeout(tick, 1000);
            counter.style.display = 'none';
          }else if(seconds == -1){
            cek.style.display = 'flex';
            setTimeout(tick, 2000);
          }else if(seconds == -2){
            salahtes()
          }
        }
        tick();
      }

function lanjuttes(){
  let counter = document.getElementById("timer");
  outtest(x[iganti], y[iganti], z[iganti], xx, yy, zz, z)
  cek.style.display = 'none';
  counter.style.display = 'block';
  countdown(iganti)
}
