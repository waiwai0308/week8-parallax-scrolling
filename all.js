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
    var timeline6 = new TimelineMax({ onComplete: CommingToResult });
    timeline6.from(".titleComming", 3, {
        opacity: 0
    }, 0)
    .set(".square1", {
        bottom: '-50%',
        left: '15%',
        rotation: 55
    }, 0)
    .set(".square2", {
        bottom: '-50%',
        left: '0%',
        rotation: 45
    }, 0)
    .set(".square3", {
        bottom: '-50%',
        left: '30%',
        rotation: 45
    }, 0)
    .set(".square4", {
        bottom: '25%',
        left: '-20%',
        rotation: 10
    }, 0)
    .set(".square5", {
        bottom: '-50%',
        left: '-50%',
        rotation: -10
    }, 0)
    .set(".square6", {
        bottom: '-20%',
        left: '50%',
        rotation: -45
    }, 0)
    .set(".square7", {
        bottom: '-50%',
        left: '0%',
        rotation: 45
    }, 0)
    .set(".square8", {
        bottom: '10%',
        left: '-20%',
        rotation: -10
    }, 0)
    .set(".square9", {
        bottom: '20%',
        left: '-35%',
        rotation: 45
    }, 0)
    .set(".square10", {
        bottom: '-20%',
        left: '-20%',
        rotation: 40
    }, 0)
    .set(".square11", {
        bottom: '-100%',
        left: '-100%',
        rotation: 45
    }, 0);
    timeline6.add(
        TweenMax.to(".square1", 1, {
            bottom: '100%',
            left: '130%'
        }),
        2
    );
    timeline6.add(
        TweenMax.to(".square2", 1.5, {
            bottom: '110%',
            left: '120%'
        }),
        2.4
    );
    timeline6.add(
        TweenMax.to(".square3", 1, {
            bottom: '60%',
            left: '120%'
        }),
        2.8
    );
    timeline6.add(
        TweenMax.to(".square4", 1, {
            bottom: '110%',
            left: '70%'
        }),
        2.8
    );
    timeline6.add(
        TweenMax.to(".square5", 1.3, {
            bottom: '150%',
            left: '150%'
        }),
        3.5
    );
    timeline6.add(
        TweenMax.to(".square6", 2, {
            bottom: '50%',
            left: '130%'
        }),
        3.8
    );
    timeline6.add(
        TweenMax.to(".square7", 1.3, {
            bottom: '120%',
            left: '130%'
        }),
        4.5
    );
    timeline6.add(
        TweenMax.to(".square8", 1.3, {
            bottom: '130%',
            left: '60%'
        }),
        4.5
    );
    timeline6.add(
        TweenMax.to(".square9", 1.2, {
            bottom: '140%',
            left: '90%'
        }),
        4.9
    );
    timeline6.add(
        TweenMax.to(".square10", 1.2, {
            bottom: '120%',
            left: '100%'
        }),
        5
    );
    timeline6.add(
        TweenMax.to(".square11", 2, {
            bottom: '20%',
            left: '50%',
            scale: 5
        }),
        5.3
    );
    timeline6.add(
        TweenMax.to(".titleComming", 0.8, {
            opacity: 0
        }),
        5.2
    );
}

function CommingToResult() {
    document.querySelector(".section6").style.display = "none";
    document.querySelector(".section7").style.display = "flex";

    questionResult();
}

function questionResult() {
    var timeline7 = new TimelineMax({ onComplete: ResultToLastResult });
    timeline7.from(".titleResult", 3, {
        opacity: 0
    }, 0)
    .set(".circle1", {
        bottom: '0%',
        left: '-30%',
    }, 0)
    .set(".circle2", {
        bottom: '-60%',
        left: '-10%',
    }, 0)
    .set(".circle3", {
        bottom: '-50%',
        left: '30%',
    }, 0)
    .set(".circle4", {
        bottom: '20%',
        left: '-30%',
    }, 0)
    .set(".circle5", {
        bottom: '-15%',
        left: '-15%',
    }, 0)
    .set(".circle6", {
        bottom: '-40%',
        left: '-60%',
    }, 0)
    .set(".circle7", {
        bottom: '30%',
        left: '-35%',
    }, 0)
    .set(".circle8", {
        bottom: '-40%',
        left: '30%',
    }, 0)
    .set(".circle9", {
        bottom: '-20%',
        left: '30%',
    }, 0)
    .set(".circle10", {
        bottom: '-100%',
        left: '-100%',
    }, 0);

    timeline7.add(
        TweenMax.to(".circle1", 1, {
            bottom: '130%',
            left: '80%',
        }),
        2
    );
    timeline7.add(
        TweenMax.to(".circle2", 1.3, {
            bottom: '100%',
            left: '140%',
        }),
        2.6
    );
    timeline7.add(
        TweenMax.to(".circle3", 1.3, {
            bottom: '100%',
            left: '140%',
        }),
        3.1
    );
    timeline7.add(
        TweenMax.to(".circle4", 1.2, {
            bottom: '100%',
            left: '80%',
        }),
        3.3
    );
    timeline7.add(
        TweenMax.to(".circle5", 1, {
            bottom: '110%',
            left: '110%',
        }),
        4.1
    );
    timeline7.add(
        TweenMax.to(".circle6", 1, {
            bottom: '150%',
            left: '130%',
        }),
        4.8
    );
    timeline7.add(
        TweenMax.to(".circle7", 1, {
            bottom: '100%',
            left: '140%',
        }),
        5.3
    );
    timeline7.add(
        TweenMax.to(".circle8", 1, {
            bottom: '50%',
            left: '140%',
        }),
        5.3
    );
    timeline7.add(
        TweenMax.to(".circle9", 0.8, {
            bottom: '80%',
            left: '130%',
        }),
        5.8
    );
    timeline7.add(
        TweenMax.to(".circle10", 1.5, {
            bottom: '200%',
            left: '200%',
            scale: 10
        }),
        6
    );
    timeline7.add(
        TweenMax.to(".titleResult", 0.5, {
            opacity: 0
        }),
        5.8
    );
}

function ResultToLastResult() {
    document.querySelector(".section7").style.display = "none";
    document.querySelector(".section_TRIANGLE").style.display = "flex";

    lastResult();
}

function lastResult() {
    var timeline8 = new TimelineMax({ });
    timeline8.set(".triangleTitle", {
        left: '20%',
        top: '16%'
    }, 0)
    .set(".triangleInfo", {
        opacity: 0
    }, 0)
    .set(".triangleText", {
        opacity: 0
    }, 0)
    .set(".btnReStart", {
        opacity: 0
    }, 0)
    .set(".main_triangle_outline", {
        bottom: '-85%'
    }, 0)
    .set(".main_triangle_cover1", {
        bottom: '-85%'
    }, 0)
    .set(".main_triangle_cover2", {
        bottom: '-85%'
    }, 0);
    

    timeline8.add(
        TweenMax.from(".triangleTitle", 3, {
            opacity: 0
        }),
        0
    );
    timeline8.add(
        TweenMax.to(".main_triangle_outline", 3, {
            bottom: '-203px'
        }),
        3
    );
    timeline8.add(
        TweenMax.to(".main_triangle_cover1", 2, {
            bottom: '0'
        }),
        3.3
    );
    timeline8.add(
        TweenMax.to(".main_triangle_cover2", 2, {
            bottom: '0'
        }),
        3.1
    );

    timeline8.add(
        TweenMax.from(".small_triangle1", 1, {
            top: -50
        }),
        3
    );
    timeline8.add(
        TweenMax.from(".small_triangle2", 2, {
            top: -50
        }),
        3
    );
    timeline8.add(
        TweenMax.from(".small_triangle3", 1.8, {
            top: -50
        }),
        3.3
    );
    timeline8.add(
        TweenMax.from(".small_triangle4", 1.8, {
            top: -50
        }),
        3.5
    );
    timeline8.add(
        TweenMax.from(".small_triangle5", 1.5, {
            top: -50
        }),
        3.8
    );
    timeline8.add(
        TweenMax.from(".small_triangle6", 0.8, {
            top: -50
        }),
        4.2
    );
    timeline8.add(
        TweenMax.from(".small_triangle7", 0.8, {
            top: -50
        }),
        4.2
    );
}

start();