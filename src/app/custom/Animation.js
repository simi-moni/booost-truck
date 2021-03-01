import gsap from 'gsap/all';
import selectors from './selectors';

export default class Animation {
    constructor() {
        this._tl = gsap.timeline({ paused: true })
            .to(selectors.list, { y: -100, id: "listUp" })
            .to(selectors.list, { y: 10, ease: "power3.out,", id: "listDown" })
            .to(selectors.listItems[0], { y: 30, opacity: 0, id: 'listItem0' }, 'listItems')
            .to(selectors.listItems[1], { y: 30, opacity: 0, id: 'listItem1' }, 'listItems')
            .to(selectors.listItems[2], { y: 30, opacity: 0, id: 'listItem2' }, 'listItems')
            .to(selectors.truckBtnBg, { scale: 1.3, transformOrigin: 'center', id: "truckBtnScaleUp" })
            .to(selectors.truckBtnBg, { scale: 1, transformOrigin: 'center', id: "truckBtnScaleDown" })
            .to(selectors.container, { opacity: 1, id: "container" }, 'container')
            .to(selectors.containerParts, { opacity: 1, id: "containerParts" }, 'container')
            .to(selectors.backWheel1, { opacity: 1, id: 'backWheel1' }, 'backWheels')
            .to(selectors.backWheelBack1, { opacity: 1, id: 'backWheelBack1', }, 'backWheels')
            .to(selectors.backWheel2, { opacity: 1, id: 'backWheel2' }, 'backWheels')
            .to(selectors.backWheelBack2, { opacity: 1, id: 'backWheelBack2', }, 'backWheels')
            .to(selectors.frontGroup, { opacity: 1, id: 'frontGroup' }, 'frontWheels')
            .to(selectors.frontWheel1, { opacity: 1, id: 'frontWheel1', }, 'frontWheels')
            .to(selectors.frontWheel2, { opacity: 1, id: 'frontWheel2', }, 'frontWheels')
            .to(selectors.frontWheelsBack, { opacity: 1, id: 'frontWheelBack' }, 'frontWheels')
            .to(selectors.truck, { ease: 'back.in(3)', x: 600, opacity: 0, duration: 2, id: 'truckMovement' })
            .to(selectors.shippedLabel, { opacity: 1, id: 'shippedLabel' })
    }

    start() {
        const self = this;
        selectors.playBtn.addEventListener('click', function () {
            if (self._tl.isActive()) {
                self._tl.progress(0);
            }
            self._tl.play();
        });

        selectors.truckBtn.addEventListener('click', function () {
            if (self._tl.isActive()) {
                self._tl.progress(0);
            }
            self._tl.play();
        });

        selectors.reverseBtn.addEventListener('click', function () {
            self._tl.reverse();
        });

        selectors.pauseBtn.addEventListener('click', function () {
            self._tl.pause();
        });
    }
}