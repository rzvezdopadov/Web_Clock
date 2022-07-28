function createClock() {
    const elemClockWrapper = document.querySelector('.clock-wrapper');
    
    if (!elemClockWrapper) return;

    function createClockContent(elemParent, typeClass, count, symbol) {
        const elemClockWrapper = document.createElement('div');
        elemClockWrapper.classList.add('clock');
        
        if (typeClass) elemClockWrapper.classList.add('clock-' + typeClass + '-wrapper');
    
        for (let i = 0; i < count; i++) {
            const elemClock = document.createElement('span');
            elemClock.classList.add('clock');
            
            if (typeClass) elemClock.classList.add('clock-' + typeClass);

            symbol ?  elemClock.innerText = symbol : elemClock.innerText = i;

            elemClockWrapper.appendChild(elemClock);
        }
    
        elemParent.appendChild(elemClockWrapper);
    }

    createClockContent(elemClockWrapper, 'wand', 60, '|');
    createClockContent(elemClockWrapper, 'second', 60);
    createClockContent(elemClockWrapper, 'minute', 60);
    createClockContent(elemClockWrapper, 'hour', 24);
    createClockContent(elemClockWrapper, 'wand-in', 24, '|');

    const elemClockCenter = document.createElement('div');
    elemClockCenter.classList.add('clock');
    elemClockCenter.classList.add('clock-center');
    elemClockWrapper.appendChild(elemClockCenter);

    const elemClockArrow = document.createElement('div');
    elemClockArrow.classList.add('clock');
    elemClockArrow.classList.add('clock-arrow');
    elemClockWrapper.appendChild(elemClockArrow);
}

function startClock() { 
    function incClock() {
        const date = new Date();
        const second  = date.getSeconds();
        const minute  = date.getMinutes();
        const hour    = date.getHours();

        const elemClockSecondWrapper = document.querySelector('.clock-second-wrapper');
        elemClockSecondWrapper.style.transform = 'rotate(' + second * -6 + 'deg)';

        const elemClockMinuteWrapper = document.querySelector('.clock-minute-wrapper');
        elemClockMinuteWrapper.style.transform = 'rotate(' + minute * -6 + 'deg)';

        const elemClockHourWrapper = document.querySelector('.clock-hour-wrapper');
        elemClockHourWrapper.style.transform = 'rotate(' + hour * -15 + 'deg)';

        setTimeout(()=>{
            incClock(); 
        }, 1000);
    }

    incClock();
}

createClock();
startClock();

