function start() {
    var timeline1 = new TimelineMax({ onComplete: startEnd });
    timeline1
        .set(".triangle", {
            rotation: 0
        })
        .set(".circle", {
            scale: 1
        })
        .set(".square", {
            rotation: 0
        });

    var triangleRotate = TweenMax.to(".triangle", 4, {
        rotation: -360
    });
    var circleRotateMax = TweenMax.to(".circle", 2, {
        scale: 1.13
    });
    var circleRotateMin = TweenMax.to(".circle", 2, {
        scale: 0.95
    });
    var squareRotate = TweenMax.to(".square", 4, {
        rotation: 360
    });

    timeline1.add(triangleRotate, 0);
    timeline1.add(circleRotateMax, 0);
    timeline1.add(circleRotateMin, 2);
    timeline1.add(squareRotate, 0);

    timeline1.add(
        TweenMax.to(".square", 1.5, {
            scale: 5
        }),
        3.8
    );
    timeline1.add(
        TweenMax.to(".circle", 1, {
            scale: 5
        }),
        4
    );
    timeline1.add(
        TweenMax.to(".triangle", 1, {
            scale: 5
        }),
        4.2
    );
    timeline1.add(
        TweenMax.to(".triangle", 0.5, {
            opacity: 0
        }),
        4.5
    );
    timeline1.add(
        TweenMax.to(".circle", 0.5, {
            opacity: 0
        }),
        4.5
    );
    timeline1.add(
        TweenMax.to(".square", 0.5, {
            opacity: 0
        }),
        4.5
    );
    timeline1.add(
        TweenMax.to(".title", 0.5, {
            opacity: 0
        }),
        4.5
    );
    timeline1.add(
        TweenMax.to(".section1", 0.5, {
            backgroundColor: "#1469FF"
        }),
        5
    );
}

function startEnd() {
    document.querySelector(".section1").style.display = "none";
    document.querySelector(".section2").style.display = "flex";

    question1();
}

//repeat -1 yoyo true 重複播放
function question1() {
    var timeline2 = new TimelineMax({});
    timeline2.from(".question1", 4, {
        opacity: 0
    }).set(".section2_triangle", {
        transformOrigin: "50% 50%"
    });
    timeline2.add(
        TweenMax.from(".section2_bg", 1, {
            right: '-50%'
        }),
        0
    );
    timeline2.add(
        TweenMax.from(".section2_circle", 1, {
            bottom: '-60%'
        }),
        1
    );
    timeline2.add(
        TweenMax.from(".section2_circle", 1, {
            scale: 1.1,
            repeat: -1,
            ease: Power0.easeNone,
            yoyo: true
        }),
        2
    );
    timeline2.add(
        TweenMax.from(".section2_triangle", 1, {
            bottom: '-60%'
        }),
        0.5
    );
    timeline2.add(
        TweenMax.to(".section2_triangle", 3, {
            rotation: -360,
            repeat: -1,
            ease: Power0.easeNone
        }),
        2
    );
    timeline2.add(
        TweenMax.from(".section2_square", 1, {
            bottom: '-60%'
        }),
        0.5
    );
    timeline2.add(
        TweenMax.to(".section2_square", 5, {
            rotation: 360,
            repeat: -1,
            ease: Power0.easeNone
        }),
        2
    );


    $('.btn1').click(function () {
        timeline2.pause();
        question1End();
    });
}


function question1End() {
    var timeline2_1 = new TimelineMax({ onComplete: question1to2 });

    timeline2_1.add(".question1", 0.1, {
        opacity: 0
    });
    timeline2_1.add(
        TweenMax.to(".section2_circle", 0.1, {
            opacity: 0
        }),
        0
    );
    timeline2_1.add(
        TweenMax.to(".section2_square", 0.1, {
            opacity: 0
        }),
        0
    );
    timeline2_1.add(
        TweenMax.to(".section2_triangle", 0.1, {
            opacity: 0
        }),
        0
    );
    timeline2_1.add(
        TweenMax.to(".section2_bg", 0.5, {
            width: '100%'
        }),
        0
    );
}

function question1to2() {
    document.querySelector(".section2").style.display = "none";
    document.querySelector(".section3").style.display = "flex";

    question2();
}


function question2() {
    var timeline3 = new TimelineMax({ });
    timeline3.set(".section3_triangle", {
        transformOrigin: "40% 60%"
    }).set(".section3_triangle", {
        rotation: 30,
    }).set(".section3_square", {
        rotation: 48,
    });

    timeline3.from(".question2", 4, {
        opacity: 0
    });
    timeline3.add(
        TweenMax.from(".section3_bg", 1, {
            left: '-40%'
        }),
        0
    );
    timeline3.add(
        TweenMax.from(".section3_circle", 1, {
            bottom: '-60%'
        }),
        1
    );
    timeline3.add(
        TweenMax.to(".section3_circle", 1, {
            bottom: '170px',
            repeat: -1,
            ease: Power0.easeNone,
            yoyo: true
        }),
        2
    );
    timeline3.add(
        TweenMax.from(".section3_triangle", 1, {
            bottom: '-60%'
        }),
        0.5
    );
    timeline3.add(
        TweenMax.to(".section3_triangle", 3, {
            rotation: 390,
            repeat: -1,
            ease: Power0.easeNone
        }),
        2
    );
    timeline3.add(
        TweenMax.from(".section3_square", 1, {
            bottom: '-60%'
        }),
        0.5
    );
    timeline3.add(
        TweenMax.to(".section3_square", 5, {
            rotation: -408,
            repeat: -1,
            ease: Power0.easeNone
        }),
        2
    );

    $('.btn2').click(function () {
        timeline3.pause();
        question2End();
    });
}

function question2End() {
    var timeline3_1 = new TimelineMax({ onComplete: question2to3 });

    timeline3_1.add(".question2", 0.1, {
        opacity: 0
    });
    timeline3_1.add(
        TweenMax.to(".section3_circle", 0.1, {
            opacity: 0
        }),
        0
    );
    timeline3_1.add(
        TweenMax.to(".section3_square", 0.1, {
            opacity: 0
        }),
        0
    );
    timeline3_1.add(
        TweenMax.to(".section3_triangle", 0.1, {
            opacity: 0
        }),
        0
    );
    timeline3_1.add(
        TweenMax.to(".section3_bg", 0.5, {
            width: '100%'
        }),
        0
    );
}

function question2to3() {
    document.querySelector(".section3").style.display = "none";
    document.querySelector(".section4").style.display = "flex";

    question3();
}

function question3() {
    var timeline4 = new TimelineMax({});

    timeline4.from(".question3", 4, {
        opacity: 0
    }).set(".section4_triangle", {
        transformOrigin: "50% 50%"
    });
    timeline4.add(
        TweenMax.from(".section4_bg", 1, {
            right: '-40%'
        }),
        0
    );
    timeline4.add(
        TweenMax.from(".section4_circle", 1, {
            bottom: '-60%'
        }),
        1
    );
    timeline4.add(
        TweenMax.from(".section4_circle", 1, {
            scale: 1.1,
            repeat: -1,
            ease: Power0.easeNone,
            yoyo: true
        }),
        3
    );
    timeline4.add(
        TweenMax.from(".section4_triangle", 3, {
            bottom: '-60%'
        }),
        0.8
    );
    timeline4.add(
        TweenMax.to(".section4_triangle", 3, {
            rotation: 360,
            repeat: -1,
            ease: Power0.easeNone
        }),
        3
    );
    timeline4.add(
        TweenMax.from(".section4_square", 3, {
            bottom: '-60%'
        }),
        0.8
    );
    timeline4.add(
        TweenMax.to(".section4_square", 5, {
            rotation: 25,
            repeat: -1,
            ease: Power0.easeNone,
            yoyo: true
        }),
        3
    );


    $('.btn3').click(function () {
        timeline4.pause();
        question3End();
    });
}


function question3End() {
    var timeline4_1 = new TimelineMax({ onComplete: question3toEnd });

    timeline4_1.add(".question3", 0.1, {
        opacity: 0
    });
    timeline4_1.add(
        TweenMax.to(".section4_circle", 0.1, {
            opacity: 0
        }),
        0
    );
    timeline4_1.add(
        TweenMax.to(".section4_square", 0.1, {
            opacity: 0
        }),
        0
    );
    timeline4_1.add(
        TweenMax.to(".section4_triangle", 0.1, {
            opacity: 0
        }),
        0
    );
    timeline4_1.add(
        TweenMax.to(".section4_bg", 0.5, {
            width: '100%'
        }),
        0
    );
}

function question3toEnd() {
    document.querySelector(".section4").style.display = "none";
    document.querySelector(".section5").style.display = "flex";

    questionDone();
}

function questionDone() {
    var timeline5 = new TimelineMax({ onComplete: doneToComming });
    timeline5.from(".titleDone", 3, {
        opacity: 0
    }, 0)
    .set(".triangle1", {
        bottom: '-30%',
        right: '80%'
    }, 0)
    .set(".triangle2", {
        bottom: '-30%',
        right: '80%',
        rotation: 45
    }, 0)
    .set(".triangle3", {
        bottom: '-30%',
        right: '40%',
        rotation: -70
    }, 0)
    .set(".triangle4", {
        bottom: '-40%',
        right: '100%',
        rotation: -70
    }, 0)
    .set(".triangle5", {
        bottom: '-40%',
        right: '100%',
        rotation: -20
    }, 0)
    .set(".triangle6", {
        bottom: '10%',
        right: '130%',
    }, 0)
    .set(".triangle7", {
        bottom: '20%',
        right: '120%',
        rotation: -35
    }, 0)
    .set(".triangle8", {
        bottom: '-30%',
        right: '100%',
        rotation: 45
    }, 0)
    .set(".triangle9", {
        bottom: '-50%',
        right: '40%',
    }, 0)
    .set(".triangle10", {
        bottom: '-80%',
        right: '70%',
        rotation: -20
    }, 0)
    .set(".triangle11", {
        bottom: '-100%',
        right: '200%',
        rotation: 45
    }, 0);

    timeline5.add(
        TweenMax.to(".triangle1", 1, {
            bottom: '80%',
            right: '-30%'
        }),
        2
    );
    timeline5.add(
        TweenMax.to(".triangle2", 0.8, {
            bottom: '100%',
            right: '-30%'
        }),
        2.4
    );
    timeline5.add(
        TweenMax.to(".triangle3", 1.6, {
            bottom: '100%',
            right: '-30%'
        }),
        2.6
    );
    timeline5.add(
        TweenMax.to(".triangle4", 1, {
            bottom: '100%',
            right: '-30%'
        }),
        2.6
    );
    timeline5.add(
        TweenMax.to(".triangle5", 1.8, {
            bottom: '60%',
            right: '-80%'
        }),
        2.8
    );
    timeline5.add(
        TweenMax.to(".triangle6", 1, {
            bottom: '100%',
            right: '-30%'
        }),
        3.6
    );
    timeline5.add(
        TweenMax.to(".triangle7", 1.2, {
            bottom: '110%',
            right: '20%'
        }),
        4.2
    );

    timeline5.add(
        TweenMax.to(".triangle8", 1, {
            bottom: '100%',
            right: '-30%'
        }),
        4.5
    );
    timeline5.add(
        TweenMax.to(".triangle9", 0.8, {
            bottom: '35%',
            right: '-50%'
        }),
        4.5
    );
    timeline5.add(
        TweenMax.to(".triangle10", 1.2, {
            bottom: '60%',
            right: '-100%'
        }),
        5.2
    );
    timeline5.add(
        TweenMax.to(".triangle11", 1.2, {
            bottom: '20%',
            right: '-60%',
            scale: 4
        }),
        6
    );
    timeline5.add(
        TweenMax.to(".titleDone", 0.5, {
            opacity: 0
        }),
        5.9
    );
}

function doneToComming() {
    document.querySelector(".section5").style.display = "none";
    document.querySelector(".section6").style.display = "flex";

    questionComming();
}

function questionComming() {
    
}
start();
