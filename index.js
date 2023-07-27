const secd = document.querySelector('.sec');
const mind = document.querySelector('.min');
const hrd = document.querySelector('.hr');


function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secdeg = ((seconds / 60 ) * 360) + 90;
    secd.style.transform = `rotate(${secdeg}deg)`;
    
    const mins = now.getMinutes();
    const mindeg = ((mins /60 ) * 360)+90;
    mind.style.transform = `rotate(${mindeg}deg)`;

    const hrs = now.getHours()
    const hrdeg = ((hrs / 12) * 360 ) + 90;
    hrd.style.transform = `rotate(${hrdeg}deg)`;
  }

setInterval(setDate, 1000);