function animate({ timing, draw, duration }) {
    let start = performance.now();

    requestAnimationFrame(function animateFrame(time) {
        let timeFraction = (time - start) / duration;
        if (timeFraction > 1) timeFraction = 1;

        let progress = timing(timeFraction);
        draw(progress);

        if (timeFraction < 1) {
            requestAnimationFrame(animateFrame);
        }
    });
}

function bounce(timeFraction) {
    for (let a = 0, b = 1; true; a += b, b /= 2) {
        if (timeFraction >= (7 - 4 * a) / 11) {
            return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2);
        }
    }
}

function makeEaseOut(timing) {
    return function (timeFraction) {
        return 1 - timing(1 - timeFraction);
    };
}

document.querySelector('.ellipse__orange').addEventListener('click', function () {
    // БЛОК-1 Элемент 1: .left-img-orange-2-4
    const el1 = document.querySelector('.left-img-orange-2-4');
    const baseX1 = 62;
    const baseY1 = -254;
    const dropDistance1 = 240; // Индивидуальное значение падения

    animate({
        duration: 2000,
        timing: makeEaseOut(bounce),
        draw(progress) {
            const translateY = baseY1 + dropDistance1 * progress;
            el1.style.transform = `translate(${baseX1}px, ${translateY}px)`;
        }
    });

    // Элемент 2: .left-img-flower-white-1
    const el2 = document.querySelector('.left-img-flower-white-1');
    const baseX2 = 231;
    const baseY2 = 34;
    const dropDistance2 = 890; // Индивидуальное значение падения

    animate({
        duration: 2000,
        timing: makeEaseOut(bounce),
        draw(progress) {
            const translateY = baseY2 + dropDistance2 * progress;
            el2.style.transform = `translate(${baseX2}px, ${translateY}px)`;
        }
    });

    // Элемент 3: .left-img-flower-white-2
    const el3 = document.querySelector('.left-img-flower-white-2');
    const baseX3 = 157;
    const baseY3 = 105;
    const dropDistance3 = 820; // Индивидуальное значение падения

    animate({
        duration: 2000,
        timing: makeEaseOut(bounce),
        draw(progress) {
            const translateY = baseY3 + dropDistance3 * progress;
            el3.style.transform = `translate(${baseX3}px, ${translateY}px)`;
        }
    });

    // Элемент 4: .left-img-flower-white-3
    const el4 = document.querySelector('.left-img-flower-white-3');
    const baseX4 = 227;
    const baseY4 = 185;
    const dropDistance4 = 740; // Индивидуальное значение падения

    animate({
        duration: 2000,
        timing: makeEaseOut(bounce),
        draw(progress) {
            const translateY = baseY4 + dropDistance4 * progress;
            el4.style.transform = `translate(${baseX4}px, ${translateY}px)`;
        }
    });

    // Элемент 5: .left-img-flower-white-4
    const el5 = document.querySelector('.left-img-flower-white-4');
    const baseX5 = 159;
    const baseY5 = 250;
    const dropDistance5 = 680; // Индивидуальное значение падения

    animate({
        duration: 2000,
        timing: makeEaseOut(bounce),
        draw(progress) {
            const translateY = baseY5 + dropDistance5 * progress;
            el5.style.transform = `translate(${baseX5}px, ${translateY}px)`;
        }
    });

    // Элемент 6: .left-img-flower-white-5
    const el6 = document.querySelector('.left-img-flower-white-5');
    const baseX6 = 237;
    const baseY6 = 328;
    const dropDistance6 = 608; // Индивидуальное значение падения

    animate({
        duration: 2000,
        timing: makeEaseOut(bounce),
        draw(progress) {
            const translateY = baseY6 + dropDistance6 * progress;
            el6.style.transform = `translate(${baseX6}px, ${translateY}px)`;
        }
    });

    // Элемент 7: .left-img-orange-5
    const el7 = document.querySelector('.left-img-orange-5');
    const baseX7 = 41;
    const baseY7 = 258;
    const dropDistance7 = 670; // Индивидуальное значение падения

    animate({
        duration: 2000,
        timing: makeEaseOut(bounce),
        draw(progress) {
            const translateY = baseY7 + dropDistance7 * progress;
            el7.style.transform = `translate(${baseX7}px, ${translateY}px)`;
        }
    });

    // Элемент 8: .left-img-yellow-orange-2
    const el8 = document.querySelector('.left-img-yellow-orange-2');
    const baseX8 = 265;
    const baseY8 = 270;
    const dropDistance8 = 635; // Индивидуальное значение падения

    animate({
        duration: 2000,
        timing: makeEaseOut(bounce),
        draw(progress) {
            const translateY = baseY8 + dropDistance8 * progress;
            el8.style.transform = `translate(${baseX8}px, ${translateY}px)`;
        }
    });

    // Элемент 9: .left-img-yellow-orange-1
    const el9 = document.querySelector('.left-img-yellow-orange-1');
    const baseX9 = 72;
    const baseY9 = 311;
    const dropDistance9 = 569; // Индивидуальное значение падения

    animate({
        duration: 2000,
        timing: makeEaseOut(bounce),
        draw(progress) {
            const translateY = baseY9 + dropDistance9 * progress;
            el9.style.transform = `translate(${baseX9}px, ${translateY}px)`;
        }
    });

    // Элемент 10: .left-img-flower-white-6
    const el10 = document.querySelector('.left-img-flower-white-6');
    const baseX10 = 183;
    const baseY10 = 358;
    const dropDistance10 = 569; // Индивидуальное значение падения

    animate({
        duration: 2000,
        timing: makeEaseOut(bounce),
        draw(progress) {
            const translateY = baseY10 + dropDistance10 * progress;
            el10.style.transform = `translate(${baseX10}px, ${translateY}px)`;
        }
    });

    // Элемент 11: .left-img-yellow-orange-2-1
    const el11 = document.querySelector('.left-img-yellow-orange-2-1');
    const baseX11 = 82;
    const baseY11 = 593;
    const dropDistance11 = 273; // Индивидуальное значение падения

    animate({
        duration: 2000,
        timing: makeEaseOut(bounce),
        draw(progress) {
            const translateY = baseY11 + dropDistance11 * progress;
            el11.style.transform = `translate(${baseX11}px, ${translateY}px)`;
        }
    });

    // Элемент 12: .left-img-flower-white-2-3
    const el12 = document.querySelector('.left-img-flower-white-2-3');
    const baseX12 = 188;
    const baseY12 = -331;
    const dropDistance12 = 313; // Индивидуальное значение падения

    animate({
        duration: 2000,
        timing: makeEaseOut(bounce),
        draw(progress) {
            const translateY = baseY12 + dropDistance12 * progress;
            el12.style.transform = `translate(${baseX12}px, ${translateY}px)`;
        }
    });

    // Элемент 13: .left-img-flower-white-2-5
    const el13 = document.querySelector('.left-img-flower-white-2-5');
    const baseX13 = 247;
    const baseY13 = -299;
    const dropDistance13 = 281; // Индивидуальное значение падения

    animate({
        duration: 2000,
        timing: makeEaseOut(bounce),
        draw(progress) {
            const translateY = baseY13 + dropDistance13 * progress;
            el13.style.transform = `translate(${baseX13}px, ${translateY}px)`;
        }
    });

    // Элемент 14: .left-img-yellow-orange-2-2
    const el14 = document.querySelector('.left-img-yellow-orange-2-2');
    const baseX14 = 274;
    const baseY14 = 673;
    const dropDistance14 = 231; // Индивидуальное значение падения

    animate({
        duration: 2000,
        timing: makeEaseOut(bounce),
        draw(progress) {
            const translateY = baseY14 + dropDistance14 * progress;
            el14.style.transform = `translate(${baseX14}px, ${translateY}px)`;
        }
    });

    // Элемент 15: .left-img-orange-2-8
    const el15 = document.querySelector('.left-img-orange-2-8');
    const baseX15 = 360;
    const baseY15 = -250;
    const dropDistance15 = 235; // Индивидуальное значение падения

    animate({
        duration: 2000,
        timing: makeEaseOut(bounce),
        draw(progress) {
            const translateY = baseY15 + dropDistance15 * progress;
            el15.style.transform = `translate(${baseX15}px, ${translateY}px)`;
        }
    });

    // Элемент 16: .left-img-flower-white-2-4
    const el16 = document.querySelector('.left-img-flower-white-2-4');
    const baseX16 = 169;
    const baseY16 = -241;
    const dropDistance16 = 225; // Индивидуальное значение падения

    animate({
        duration: 2000,
        timing: makeEaseOut(bounce),
        draw(progress) {
            const translateY = baseY16 + dropDistance16 * progress;
            el16.style.transform = `translate(${baseX16}px, ${translateY}px)`;
        }
    });

    // Элемент 17: .left-img-flower-white-2-6
    const el17 = document.querySelector('.left-img-flower-white-2-6');
    const baseX17 = 239;
    const baseY17 = -162;
    const dropDistance17 = 142; // Индивидуальное значение падения

    animate({
        duration: 2000,
        timing: makeEaseOut(bounce),
        draw(progress) {
            const translateY = baseY17 + dropDistance17 * progress;
            el17.style.transform = `translate(${baseX17}px, ${translateY}px)`;
        }
    });

    // Элемент 18: .left-img-orange-2-7
    const el18 = document.querySelector('.left-img-orange-2-7');
    const baseX18 = 413;
    const baseY18 = -171;
    const dropDistance18 = 155; // Индивидуальное значение падения

    animate({
        duration: 2000,
        timing: makeEaseOut(bounce),
        draw(progress) {
            const translateY = baseY18 + dropDistance18 * progress;
            el18.style.transform = `translate(${baseX18}px, ${translateY}px)`;
        }
    });

    // Элемент 19: .left-img-orange-2-1
    const el19 = document.querySelector('.left-img-orange-2-1');
    const baseX19 = 56;
    const baseY19 = -131;
    const dropDistance19 = 120; // Индивидуальное значение падения

    animate({
        duration: 2000,
        timing: makeEaseOut(bounce),
        draw(progress) {
            const translateY = baseY19 + dropDistance19 * progress;
            el19.style.transform = `translate(${baseX19}px, ${translateY}px)`;
        }
    });

    // Элемент 20: .left-img-orange-2-2
    const el20 = document.querySelector('.left-img-orange-2-2');
    const baseX20 = 111;
    const baseY20 = -75;
    const dropDistance20 = 65; // Индивидуальное значение падения

    animate({
        duration: 2000,
        timing: makeEaseOut(bounce),
        draw(progress) {
            const translateY = baseY20 + dropDistance20 * progress;
            el20.style.transform = `translate(${baseX20}px, ${translateY}px)`;
        }
    });

    // Элемент 21: .left-img-flower-white-2-1
    const el21 = document.querySelector('.left-img-flower-white-2-1');
    const baseX21 = 180;
    const baseY21 = -95;
    const dropDistance21 = 70; // Индивидуальное значение падения

    animate({
        duration: 2000,
        timing: makeEaseOut(bounce),
        draw(progress) {
            const translateY = baseY21 + dropDistance21 * progress;
            el21.style.transform = `translate(${baseX21}px, ${translateY}px)`;
        }
    });

    // БЛОК2 // Элемент 22: .right-orange-3-1
    const el22 = document.querySelector('.right-orange-3-1');
    const baseX22 = -419;
    const baseY22 = 9;
    const dropDistance22 = 909; // Индивидуальное значение падения

    animate({
        duration: 2000,
        timing: makeEaseOut(bounce),
        draw(progress) {
            const translateY = baseY22 + dropDistance22 * progress;
            el22.style.transform = `translate(${baseX22}px, ${translateY}px)`;
        }
    });

    // Элемент 23: .right-white-3-1
    const el23 = document.querySelector('.right-white-3-1');
    const baseX23 = -221;
    const baseY23 = 33;
    const dropDistance23 = 882; // Индивидуальное значение падения

    animate({
        duration: 2000,
        timing: makeEaseOut(bounce),
        draw(progress) {
            const translateY = baseY23 + dropDistance23 * progress;
            el23.style.transform = `translate(${baseX23}px, ${translateY}px)`;
        }
    });

    // Элемент 24: .right-white-3-2
    const el24 = document.querySelector('.right-white-3-2');
    const baseX24 = -160;
    const baseY24 = 102;
    const dropDistance24 = 820; // Индивидуальное значение падения

    animate({
        duration: 2000,
        timing: makeEaseOut(bounce),
        draw(progress) {
            const translateY = baseY24 + dropDistance24 * progress;
            el24.style.transform = `translate(${baseX24}px, ${translateY}px)`;
        }
    });

    // Элемент 25: .right-white-3-3
    const el25 = document.querySelector('.right-white-3-3');
    const baseX25 = -280;
    const baseY25 = 205;
    const dropDistance25 = 710; // Индивидуальное значение падения

    animate({
        duration: 2000,
        timing: makeEaseOut(bounce),
        draw(progress) {
            const translateY = baseY25 + dropDistance25 * progress;
            el25.style.transform = `translate(${baseX25}px, ${translateY}px)`;
        }
    });

    // Элемент 26: .right-white-3-4
    const el26 = document.querySelector('.right-white-3-4');
    const baseX26 = -209;
    const baseY26 = 279;
    const dropDistance26 = 634; // Индивидуальное значение падения

    animate({
        duration: 2000,
        timing: makeEaseOut(bounce),
        draw(progress) {
            const translateY = baseY26 + dropDistance26 * progress;
            el26.style.transform = `translate(${baseX26}px, ${translateY}px)`;
        }
    });

    // Элемент 27: .right-white-3-5
    const el27 = document.querySelector('.right-white-3-5');
    const baseX27 = -287;
    const baseY27 = 352;
    const dropDistance27 = 574; // Индивидуальное значение падения

    animate({
        duration: 2000,
        timing: makeEaseOut(bounce),
        draw(progress) {
            const translateY = baseY27 + dropDistance27 * progress;
            el27.style.transform = `translate(${baseX27}px, ${translateY}px)`;
        }
    });

    // Элемент 28: .right-white-3-6
    const el28 = document.querySelector('.right-white-3-6');
    const baseX28 = -233;
    const baseY28 = 383;
    const dropDistance28 = 537; // Индивидуальное значение падения

    animate({
        duration: 2000,
        timing: makeEaseOut(bounce),
        draw(progress) {
            const translateY = baseY28 + dropDistance28 * progress;
            el28.style.transform = `translate(${baseX28}px, ${translateY}px)`;
        }
    });

    // Элемент 29: .left-img-yellow-orange-3-1
    const el29 = document.querySelector('.left-img-yellow-orange-3-1');
    const baseX29 = -314;
    const baseY29 = 294;
    const dropDistance29 = 600; // Индивидуальное значение падения

    animate({
        duration: 2000,
        timing: makeEaseOut(bounce),
        draw(progress) {
            const translateY = baseY29 + dropDistance29 * progress;
            el29.style.transform = `translate(${baseX29}px, ${translateY}px)`;
        }
    });

    // Элемент 30: .left-img-yellow-orange-3-2
    const el30 = document.querySelector('.left-img-yellow-orange-3-2');
    const baseX30 = -124;
    const baseY30 = 332;
    const dropDistance30 = 538; // Индивидуальное значение падения

    animate({
        duration: 2000,
        timing: makeEaseOut(bounce),
        draw(progress) {
            const translateY = baseY30 + dropDistance30 * progress;
            el30.style.transform = `translate(${baseX30}px, ${translateY}px)`;
        }
    });

    // Элемент 31: .right-orange-3-2
    const el31 = document.querySelector('.right-orange-3-2');
    const baseX31 = -51;
    const baseY31 = 251;
    const dropDistance31 = 655; // Индивидуальное значение падения

    animate({
        duration: 2000,
        timing: makeEaseOut(bounce),
        draw(progress) {
            const translateY = baseY31 + dropDistance31 * progress;
            el31.style.transform = `translate(${baseX31}px, ${translateY}px)`;
        }
    });

    // Элемент 32: .right-white-4-1
    const el32 = document.querySelector('.right-white-4-1');
    const baseX32 = -233;
    const baseY32 = 545;
    const dropDistance32 = 352; // Индивидуальное значение падения

    animate({
        duration: 2000,
        timing: makeEaseOut(bounce),
        draw(progress) {
            const translateY = baseY32 + dropDistance32 * progress;
            el32.style.transform = `translate(${baseX32}px, ${translateY}px)`;
        }
    });

    // Элемент 33: .left-img-yellow-orange-4-2
    const el33 = document.querySelector('.left-img-yellow-orange-4-2');
    const baseX33 = -122;
    const baseY33 = 522;
    const dropDistance33 = 335; // Индивидуальное значение падения

    animate({
        duration: 2000,
        timing: makeEaseOut(bounce),
        draw(progress) {
            const translateY = baseY33 + dropDistance33 * progress;
            el33.style.transform = `translate(${baseX33}px, ${translateY}px)`;
        }
    });

    // Элемент 34: .right-white-4-2
    const el34 = document.querySelector('.right-white-4-2');
    const baseX34 = -283;
    const baseY34 = 581;
    const dropDistance34 = 331; // Индивидуальное значение падения

    animate({
        duration: 2000,
        timing: makeEaseOut(bounce),
        draw(progress) {
            const translateY = baseY34 + dropDistance34 * progress;
            el34.style.transform = `translate(${baseX34}px, ${translateY}px)`;
        }
    });

    // Элемент 35: .left-img-yellow-orange-4-1
    const el35 = document.querySelector('.left-img-yellow-orange-4-1');
    const baseX35 = -310;
    const baseY35 = 608;
    const dropDistance35 = 290; // Индивидуальное значение падения

    animate({
        duration: 2000,
        timing: makeEaseOut(bounce),
        draw(progress) {
            const translateY = baseY35 + dropDistance35 * progress;
            el35.style.transform = `translate(${baseX35}px, ${translateY}px)`;
        }
    });

    // Элемент 36: .right-white-4-3
    const el36 = document.querySelector('.right-white-4-3');
    const baseX36 = -211;
    const baseY36 = 645;
    const dropDistance36 = 275; // Индивидуальное значение падения

    animate({
        duration: 2000,
        timing: makeEaseOut(bounce),
        draw(progress) {
            const translateY = baseY36 + dropDistance36 * progress;
            el36.style.transform = `translate(${baseX36}px, ${translateY}px)`;
        }
    });

    // Элемент 37: .right-white-4-4
    const el37 = document.querySelector('.right-white-4-4');
    const baseX37 = -274;
    const baseY37 = 715;
    const dropDistance37 = 195; // Индивидуальное значение падения

    animate({
        duration: 2000,
        timing: makeEaseOut(bounce),
        draw(progress) {
            const translateY = baseY37 + dropDistance37 * progress;
            el37.style.transform = `translate(${baseX37}px, ${translateY}px)`;
        }
    });

    // Элемент 38: .right-orange-4-1
    const el38 = document.querySelector('.right-orange-4-1');
    const baseX38 = -367;
    const baseY38 = 677;
    const dropDistance38 = 242; // Индивидуальное значение падения

    animate({
        duration: 2000,
        timing: makeEaseOut(bounce),
        draw(progress) {
            const translateY = baseY38 + dropDistance38 * progress;
            el38.style.transform = `translate(${baseX38}px, ${translateY}px)`;
        }
    });

    // Элемент 39: .right-orange-4-2
    const el39 = document.querySelector('.right-orange-4-2');
    const baseX39 = -416;
    const baseY39 = 778;
    const dropDistance39 = 137; // Индивидуальное значение падения

    animate({
        duration: 2000,
        timing: makeEaseOut(bounce),
        draw(progress) {
            const translateY = baseY39 + dropDistance39 * progress;
            el39.style.transform = `translate(${baseX39}px, ${translateY}px)`;
        }
    });

    // Элемент 40: .right-orange-4-4
    const el40 = document.querySelector('.right-orange-4-4');
    const baseX40 = -60;
    const baseY40 = 689;
    const dropDistance40 = 235; // Индивидуальное значение падения

    animate({
        duration: 2000,
        timing: makeEaseOut(bounce),
        draw(progress) {
            const translateY = baseY40 + dropDistance40 * progress;
            el40.style.transform = `translate(${baseX40}px, ${translateY}px)`;
        }
    });

    // Элемент 41: .right-orange-4-6
    const el41 = document.querySelector('.right-orange-4-6');
    const baseX41 = -46;
    const baseY41 = 807;
    const dropDistance41 = 112; // Индивидуальное значение падения

    animate({
        duration: 2000,
        timing: makeEaseOut(bounce),
        draw(progress) {
            const translateY = baseY41 + dropDistance41 * progress;
            el41.style.transform = `translate(${baseX41}px, ${translateY}px)`;
        }
    });

    // Элемент 42: .right-white-4-5
    const el42 = document.querySelector('.right-white-4-5');
    const baseX42 = -173;
    const baseY42 = 830;
    const dropDistance42 = 87; // Индивидуальное значение падения

    animate({
        duration: 2000,
        timing: makeEaseOut(bounce),
        draw(progress) {
            const translateY = baseY42 + dropDistance42 * progress;
            el42.style.transform = `translate(${baseX42}px, ${translateY}px)`;
        }
    });


});