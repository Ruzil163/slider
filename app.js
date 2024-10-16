bild = document.querySelector('.img')
city = document.querySelector('#city')
meter = document.querySelector('#meter')
monate = document.querySelector('#monate')
pfeilLeft = document.querySelector('.left-pfeil')
pfeilRight = document.querySelector('.right-pfeil')

kollektionKreise = document.querySelectorAll('.btn-control')
kollektionStaedte = document.querySelectorAll('.btn-img-item')

scrollbar = 0

mass = [
    {
        Img: './img/img1.png',
        button: 'ROSTOV-ON-DON, ADMIRAL',
        Location: 'Rostov-on-Don <br> LCD admiral',
        apartmeentAra: '81 m2',
        RepairTime: '3.5 months',
    },
    {
        Img: './img/img2.png',
        button: 'SOCHI THIEVES',
        Location: 'Sochi <br> Thieves',
        apartmeentAra: '105 m2',
        RepairTime: '4 months',
    },
    {
        Img: './img/img3.png',
        button: 'ROSTOV-ON-DON PATRIOTIC',
        Location: 'Rostov-on-Don <br> Patriotic',
        apartmeentAra: '93 m2',
        RepairTime: '3 months',
    },
]

bildAendert = (arg)=>{
    bild.src = mass[arg].Img
    city.innerHTML = mass[arg].Location
    meter.innerHTML = mass[arg].apartmeentAra
    monate.innerHTML = mass[arg].RepairTime
    scrollbar = arg
    kreisFarbe()
    staedteFarbe()
}

kreisFarbe = ()=>{
    for(let i = 0; i < kollektionKreise.length; i++){
        if(scrollbar === i){
            kollektionKreise[i].classList.add('btn-control_active')
        }
        else{
            kollektionKreise[i].classList.remove('btn-control_active')
        }
    }
}

staedteFarbe = ()=>{
    for(let i = 0; i < kollektionStaedte.length; i++){
        if(scrollbar === i){
            kollektionStaedte[i].classList.add('btn-img_active')
        }
        else{
            kollektionStaedte[i].classList.remove('btn-img_active')
        }
    }
}

staedteName = ()=>{
    for(let i = 0; i < mass.length; i++){
        kollektionStaedte[i].innerHTML = mass[i].button
    }
}

pfeilRight.addEventListener(
    'click',
    ()=>{
        let a;
        if(scrollbar === mass.length - 1){
            a = 0
        }
        else{
            a = scrollbar + 1
        }
        bildAendert(a)
    }
)

pfeilLeft.addEventListener(
    'click',
    ()=>{
        let a;
        if(scrollbar === 0){
            a = mass.length - 1
        }
        else{
            a = scrollbar - 1
        }
        bildAendert(a)
    }
)

for(let i = 0; i < kollektionKreise.length; i++){
    kollektionKreise[i].addEventListener(
        'click',
        ()=>{
            bildAendert(i)
        }
    )
}

for(let i = 0; i < kollektionStaedte.length; i++){
    kollektionStaedte[i].addEventListener(
        'click',
        ()=>{
            bildAendert(i)
        }
    )
}

staedteName()
bildAendert(scrollbar)
