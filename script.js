let hands = [];
hands.push(document.querySelector('#secondhand>*'));
hands.push(document.querySelector('#hourhand>*'));
hands.push(document.querySelector('#minutehand>*'));

let cx = 100;
let cy = 100;


function shifter(val) {
    return [val, cx, cy].join('');
}

let date = new Date();
let hoursAngle = 360 * date.getHours() / 12 + date.getMinutes() / 2;
let minutesAngle = 360 * date.getMinutes() / 60 + date.getSeconds() / 2;
let secondsAngle = 360 * date.getSeconds() / 60;

hands[0].setAttribute('from',shifter(secondsAngle));
hands[0].setAttribute('to',shifter(secondsAngle + 360));

hands[1].setAttribute('from',shifter(minutesAngle));
hands[1].setAttribute('to',shifter(minutesAngle + 360));

hands[2].setAttribute('from',shifter(hoursAngle));
hands[2].setAttribute('to',shifter(hoursAngle + 360));

for(let i=1;i<=12;i++){
    let el = document.createElement('http://www.w3.org/2000/svg','line');
    el.setAttribute('x1','100');
    el.setAttribute('y1','30');
    el.setAttribute('x2','100');
    el.setAttribute('y2','40');
    el.setAttribute('transform','rotate('+(i*360/12)+' 100 100)');
    el.setAttribute('style','stroke: #ffffff');
    document.querySelector('svg').appendChild(el);

}