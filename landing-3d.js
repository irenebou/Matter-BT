// module aliases
var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Body = Matter.Body,
    Bodies = Matter.Bodies,
    Composite = Matter.Composite,
    Composites = Matter.Composites,
    Common = Matter.Common,
    Constraint = Matter.Constraint,
    Mouse = Matter.Mouse,
    MouseConstraint = Matter.MouseConstraint,
    Events = Matter.Events;

// create an engine
var engine = Engine.create();
engine.gravity.y = 0;

var screenWidth = window.screen.width;
var screenHeight = window.screen.height;

// create a renderer
var render = Render.create({
    element: document.body,
    engine: engine,
    options: {
        //Set to screen-wide with screenWidth & screenHeight variables
        width: screenWidth,
        height: screenHeight,
        //showPositions: true,
        wireframes: false,
        //showBounds: true,
        background: 'transparent' //,
        //showAngleIndicator: true,
        //showPositions: true
    }
});

// Function that returns img texture size from ratio
//(ONLY USE FOR REGULAR CIRCLES AND SQUARES)
function Ratio(radX) {
    const result = (radX*13)/32000;
    return result;
}

/*-----------------
---CREATE BODIES---
-------------------
*/

/*//Sample bodies from here: ballA, ballB
var boxA = Bodies.rectangle(screenWidth/2, screenHeight/2, 80, 80);
var boxB = Bodies.rectangle(screenWidth/2.5, screenHeight/2.5, 80, 80);

const ballArad = 80;
var ballA = Bodies.circle (300, screenHeight/2.25, ballArad, {
    restitution: 0.2,
    render: {
        sprite: {
            texture: 'images/football.png',
            xScale: Ratio(ballArad),
            yScale: Ratio(ballArad)
        }
    }
});

const ballBrad = 30;
var ballB = Bodies.circle (900, screenHeight/2, ballBrad, {
    restitution: 0.2,
    render: {
        sprite: {
            texture: 'images/football.png',
            xScale: Ratio(ballBrad),
            yScale: Ratio(ballBrad)
        }
    }
})
*/

//-------LETTERS--------


//Responsive 3D letter placement through screenWidth & screenHeight ratios
//Horizontal axis formulas
var offset= 70;
var eY1 = ((85/216)*screenHeight)-offset-offset/2;
var eY2 = ((131/216)*screenHeight)-offset-offset/2;
//Vertical axis formulas
var eX1 = ((23/96)*screenWidth)-offset;
var eX2 = ((11/32)*screenWidth)-offset;
var eX3 = ((43/96)*screenWidth)-offset;
var eX4 = ((263/480)*screenWidth)-offset;
var eX5 = ((31/48)*screenWidth)-offset;
var eX6 = ((89/120)*screenWidth)-offset;

//Letter generation

/*//Sample letter
var letterD = Bodies.fromVertices((screenWidth/2)-100, screenHeight/2, [
    {x: 228.35, y: 61.5},
    {x: 218.35, y: 197.5}, 
    {x: 130.85, y: 255},
    {x: 76.85, y: 232.5},
    {x: 69.35, y: 138.5},
    {x: 61.35, y: 143.5},
    {x: 8.85, y: 136},
    {x: 29.35, y: 34},
    {x: 146.85, y: 3.5},
    {x:228.35, y: 61.5}
], {
    restitution: 0.2,
    render: {
        sprite: {
            texture: 'images/Prueba_D.png',
            xScale: 0.25,
            yScale: 0.25
        }
    }
})
*/

var letraB = Bodies.fromVertices(eX1, eY1, [
    {x: (184.9190000000/1920)*screenWidth, y: (134.8750000000/1080)*screenHeight}, 
    {x: (151.0030000000/1920)*screenWidth, y: (217.3480000000/1080)*screenHeight}, 
    {x: (52.6743000000/1920)*screenWidth, y: (235.6060000000/1080)*screenHeight}, 
    {x: (0.7099610000/1920)*screenWidth, y: (156.0120000000/1080)*screenHeight}, 
    {x: (72.8565000000/1920)*screenWidth, y: (12.6279000000/1080)*screenHeight}, 
    {x: (122.3100000000/1920)*screenWidth, y: (0.2753910000/1080)*screenHeight}, 
    {x: (176.2670000000/1920)*screenWidth, y: (15.7161000000/1080)*screenHeight}, 
    {x: (187.6770000000/1920)*screenWidth, y: (47.6277000000/1080)*screenHeight}, 
    {x: (143.7020000000/1920)*screenWidth, y: (100.7900000000/1080)*screenHeight}, 
    {x: (139.1240000000/1920)*screenWidth, y: (103.2550000000/1080)*screenHeight}, 
    {x: (184.9190000000/1920)*screenWidth, y: (134.8750000000/1080)*screenHeight}    
], {
    render: {
        resitution: 0.2,
        sprite: {
            texture: 'https://i.imgur.com/g9zuJhx.png',
            xScale: 0.3,
            yScale: 0.3
        }
    }
});

var letraU = Bodies.fromVertices(eX2, eY1, [
    {x: (220.7400000000/1920)*screenWidth, y: (59.0597000000/1080)*screenHeight}, 
    {x: (209.7860000000/1920)*screenWidth, y: (180.8570000000/1080)*screenHeight}, 
    {x: (161.9360000000/1920)*screenWidth, y: (221.5800000000/1080)*screenHeight}, 
    {x: (124.5700000000/1920)*screenWidth, y: (195.0250000000/1080)*screenHeight}, 
    {x: (84.1682000000/1920)*screenWidth, y: (218.5450000000/1080)*screenHeight}, 
    {x: (3.1191800000/1920)*screenWidth, y: (170.8770000000/1080)*screenHeight}, 
    {x: (34.0223000000/1920)*screenWidth, y: (13.7615000000/1080)*screenHeight}, 
    {x: (62.1369000000/1920)*screenWidth, y: (0.2556580000/1080)*screenHeight}, 
    {x: (107.8100000000/1920)*screenWidth, y: (75.4906000000/1080)*screenHeight}, 
    {x: (124.5700000000/1920)*screenWidth, y: (35.5871000000/1080)*screenHeight}, 
    {x: (173.0690000000/1920)*screenWidth, y: (5.8967500000/1080)*screenHeight},
    {x: (220.7400000000/1920)*screenWidth, y: (59.0597000000/1080)*screenHeight}
], {
    render: {
        resitution: 0.2,
        sprite: {
            texture: 'https://i.imgur.com/MeTn1M4.png',
            xScale: 0.3,
            yScale: 0.3
        }
    }
});

var letraE1 = Bodies.fromVertices(eX3, eY1, [
    {x: (196.1040000000/1920)*screenWidth, y: (56.1723000000/1080)*screenHeight}, 
    {x: (155.7480000000/1920)*screenWidth, y: (91.3051000000/1080)*screenHeight}, 
    {x: (104.3410000000/1920)*screenWidth, y: (92.5015000000/1080)*screenHeight}, 
    {x: (108.4210000000/1920)*screenWidth, y: (99.0647000000/1080)*screenHeight}, 
    {x: (109.8110000000/1920)*screenWidth, y: (126.1230000000/1080)*screenHeight}, 
    {x: (133.3860000000/1920)*screenWidth, y: (126.1230000000/1080)*screenHeight}, 
    {x: (181.0280000000/1920)*screenWidth, y: (153.1330000000/1080)*screenHeight}, 
    {x: (177.2550000000/1920)*screenWidth, y: (218.3920000000/1080)*screenHeight}, 
    {x: (68.8919000000/1920)*screenWidth, y: (251.9650000000/1080)*screenHeight}, 
    {x: (17.7023000000/1920)*screenWidth, y: (215.7330000000/1080)*screenHeight}, 
    {x: (5.4653800000/1920)*screenWidth, y: (109.9610000000/1080)*screenHeight}, 
    {x: (128.3700000000/1920)*screenWidth, y: (0.6594750000/1080)*screenHeight}, 
    {x: (196.1040000000/1920)*screenWidth, y: (56.1723000000/1080)*screenHeight}
], {
    render: {
        resitution: 0.2,
        sprite: {
            texture: 'https://i.imgur.com/ZXHKCah.png',
            xScale: 0.3,
            yScale: 0.3
        }
    }
});

var letraN = Bodies.fromVertices(eX4, eY1, [
    {x: (216.2350000000/1920)*screenWidth, y: (64.4595000000/1080)*screenHeight}, 
    {x: (170.5340000000/1920)*screenWidth, y: (244.7960000000/1080)*screenHeight}, 
    {x: (100.5270000000/1920)*screenWidth, y: (209.6680000000/1080)*screenHeight}, 
    {x: (62.6514000000/1920)*screenWidth, y: (264.0120000000/1080)*screenHeight}, 
    {x: (4.9591400000/1920)*screenWidth, y: (186.5650000000/1080)*screenHeight}, 
    {x: (28.5958000000/1920)*screenWidth, y: (54.4912000000/1080)*screenHeight}, 
    {x: (99.2724000000/1920)*screenWidth, y: (84.8269000000/1080)*screenHeight}, 
    {x: (138.9750000000/1920)*screenWidth, y: (1.1401400000/1080)*screenHeight}, 
    {x: (216.2350000000/1920)*screenWidth, y: (64.4595000000/1080)*screenHeight}
], {
    render: {
        resitution: 0.2,
        sprite: {
            texture: 'https://i.imgur.com/I5MMZ31.png',
            xScale: 0.3,
            yScale: 0.3
        }
    }
});

var letraA1 = Bodies.fromVertices(eX5, eY1, [
    {x: (204.3520000000/1920)*screenWidth, y: (94.6375000000/1080)*screenHeight}, 
    {x: (171.5720000000/1920)*screenWidth, y: (204.6850000000/1080)*screenHeight}, 
    {x: (111.9870000000/1920)*screenWidth, y: (159.8660000000/1080)*screenHeight}, 
    {x: (44.2971000000/1920)*screenWidth, y: (239.4650000000/1080)*screenHeight}, 
    {x: (1.0162100000/1920)*screenWidth, y: (179.0890000000/1080)*screenHeight}, 
    {x: (36.2955000000/1920)*screenWidth, y: (54.3364000000/1080)*screenHeight}, 
    {x: (105.0360000000/1920)*screenWidth, y: (0.1437780000/1080)*screenHeight}, 
    {x: (204.3520000000/1920)*screenWidth, y: (94.6375000000/1080)*screenHeight}
], {
    render: {
        resitution: 0.2,
        sprite: {
            texture: 'https://i.imgur.com/MbVfH7Q.png',
            xScale: 0.3,
            yScale: 0.3
        }
    }
});

var letraS1 = Bodies.fromVertices(eX6, eY1, [
    {x: (195.2460000000/1920)*screenWidth, y: 169.3290000000}, 
    {x: (104.9550000000/1920)*screenWidth, y: 253.1360000000}, 
    {x: (8.1783000000/1920)*screenWidth, y: 221.7080000000}, 
    {x: (14.4545000000/1920)*screenWidth, y: 151.6900000000}, 
    {x: (42.8464000000/1920)*screenWidth, y: 128.9370000000}, 
    {x: (102.4600000000/1920)*screenWidth, y: 0.2197790000}, 
    {x: (186.7650000000/1920)*screenWidth, y: 28.6544000000}, 
    {x: (189.9880000000/1920)*screenWidth, y: 76.5436000000}, 
    {x: (167.3100000000/1920)*screenWidth, y: 108.4700000000}, 
    {x: (195.2460000000/1920)*screenWidth, y: 169.3290000000}
], {
    render: {
        resitution: 0.2,
        sprite: {
            texture: 'https://i.imgur.com/HQFzlOs.png',
            xScale: 0.3,
            yScale: 0.3
        }
    }
});

var letraT = Bodies.fromVertices(eX1, eY2, [
    {x: (201.1960000000/1920)*screenWidth, y: (42.2417000000/1080)*screenHeight}, 
    {x: (183.2320000000/1920)*screenWidth, y: (114.8700000000/1080)*screenHeight}, 
    {x: (126.7590000000/1920)*screenWidth, y: (131.0360000000/1080)*screenHeight}, 
    {x: (153.9270000000/1920)*screenWidth, y: (204.3690000000/1080)*screenHeight}, 
    {x: (95.3935000000/1920)*screenWidth, y: (266.4370000000/1080)*screenHeight}, 
    {x: (43.0446000000/1920)*screenWidth, y: (233.5250000000/1080)*screenHeight}, 
    {x: (43.0446000000/1920)*screenWidth, y: (132.1410000000/1080)*screenHeight}, 
    {x: (12.1213000000/1920)*screenWidth, y: (113.8070000000/1080)*screenHeight}, 
    {x: (17.4749000000/1920)*screenWidth, y: (24.1485000000/1080)*screenHeight}, 
    {x: (143.9880000000/1920)*screenWidth, y: (0.7158200000/1080)*screenHeight}, 
    {x: (201.1960000000/1920)*screenWidth, y: (42.2417000000/1080)*screenHeight}
], {
    render: {
        resitution: 0.2,
        sprite: {
            texture: 'https://i.imgur.com/5h97x08.png',
            xScale: 0.3,
            yScale: 0.3
        }
    }
});

var letraA2 = Bodies.fromVertices(eX2, eY2, [
    {x: (204.3520000000/1920)*screenWidth, y: (94.6375000000/1080)*screenHeight}, 
    {x: (171.5720000000/1920)*screenWidth, y: (204.6850000000/1080)*screenHeight}, 
    {x: (111.9870000000/1920)*screenWidth, y: (159.8660000000/1080)*screenHeight}, 
    {x: (44.2971000000/1920)*screenWidth, y: (239.4650000000/1080)*screenHeight}, 
    {x: (1.0162100000/1920)*screenWidth, y: (179.0890000000/1080)*screenHeight}, 
    {x: (36.2955000000/1920)*screenWidth, y: (54.3364000000/1080)*screenHeight}, 
    {x: (105.0360000000/1920)*screenWidth, y: (0.1437780000/1080)*screenHeight}, 
    {x: (204.3520000000/1920)*screenWidth, y: (94.6375000000/1080)*screenHeight}
], {
    render: {
        resitution: 0.2,
        sprite: {
            texture: 'https://i.imgur.com/MbVfH7Q.png',
            xScale: 0.3,
            yScale: 0.3
        }
    }
});

var letraR = Bodies.fromVertices(eX3, eY2, [
    {x: (200.4850000000/1920)*screenWidth, y: (147.6140000000/1080)*screenHeight}, 
    {x: (216.0100000000/1920)*screenWidth, y: (229.4700000000/1080)*screenHeight}, 
    {x: (89.3854000000/1920)*screenWidth, y: (194.4340000000/1080)*screenHeight}, 
    {x: (74.4883000000/1920)*screenWidth, y: (229.4700000000/1080)*screenHeight}, 
    {x: (21.2449000000/1920)*screenWidth, y: (234.4360000000/1080)*screenHeight}, 
    {x: (8.1277500000/1920)*screenWidth, y: (97.5122000000/1080)*screenHeight}, 
    {x: (125.8780000000/1920)*screenWidth, y: (2.3723300000/1080)*screenHeight}, 
    {x: (209.5110000000/1920)*screenWidth, y: (32.2420000000/1080)*screenHeight}, 
    {x: (153.6630000000/1920)*screenWidth, y: (132.3630000000/1080)*screenHeight}, 
    {x: (200.4850000000/1920)*screenWidth, y: (147.6140000000/1080)*screenHeight}
], {
    render: {
        resitution: 0.2,
        sprite: {
            texture: 'https://i.imgur.com/OjspMvC.png',
            xScale: 0.3,
            yScale: 0.3
        }
    }
});

var letraD = Bodies.fromVertices(eX4, eY2, [
    {x: (223.5100000000/1920)*screenWidth, y: (57.3308000000/1080)*screenHeight}, 
    {x: (217.1160000000/1920)*screenWidth, y: (181.5610000000/1080)*screenHeight}, 
    {x: (151.0930000000/1920)*screenWidth, y: (232.7100000000/1080)*screenHeight}, 
    {x: (98.9223000000/1920)*screenWidth, y: (216.9920000000/1080)*screenHeight}, 
    {x: (76.5580000000/1920)*screenWidth, y: (117.0860000000/1080)*screenHeight}, 
    {x: (6.2182200000/1920)*screenWidth, y: (106.8700000000/1080)*screenHeight}, 
    {x: (32.9336000000/1920)*screenWidth, y: (27.3568000000/1080)*screenHeight}, 
    {x: (145.9400000000/1920)*screenWidth, y: (2.7786300000/1080)*screenHeight}, 
    {x: (223.5100000000/1920)*screenWidth, y: (57.3308000000/1080)*screenHeight}
], {
    render: {
        resitution: 0.2,
        sprite: {
            texture: 'https://i.imgur.com/CsS0z6I.png',
            xScale: 0.3,
            yScale: 0.3
        }
    }
});

var letraE2 = Bodies.fromVertices(eX5, eY2, [
    {x: (196.1040000000/1920)*screenWidth, y: (56.1723000000/1080)*screenHeight}, 
    {x: (155.7480000000/1920)*screenWidth, y: (91.3051000000/1080)*screenHeight}, 
    {x: (104.3410000000/1920)*screenWidth, y: (92.5015000000/1080)*screenHeight}, 
    {x: (108.4210000000/1920)*screenWidth, y: (99.0647000000/1080)*screenHeight}, 
    {x: (109.8110000000/1920)*screenWidth, y: (126.1230000000/1080)*screenHeight}, 
    {x: (133.3860000000/1920)*screenWidth, y: (126.1230000000/1080)*screenHeight}, 
    {x: (181.0280000000/1920)*screenWidth, y: (153.1330000000/1080)*screenHeight}, 
    {x: (68.8919000000/1920)*screenWidth, y: (251.9650000000/1080)*screenHeight}, 
    {x: (17.7023000000/1920)*screenWidth, y: (215.7330000000/1080)*screenHeight}, 
    {x: (5.4653800000/1920)*screenWidth, y: (109.9610000000/1080)*screenHeight}, 
    {x: (128.3700000000/1920)*screenWidth, y: (0.6594750000/1080)*screenHeight}, 
    {x: (196.1040000000/1920)*screenWidth, y: (56.1723000000/1080)*screenHeight}
], {
    render: {
        resitution: 0.2,
        sprite: {
            texture: 'https://i.imgur.com/ZXHKCah.png',
            xScale: 0.3,
            yScale: 0.3
        }
    }
});
Body.rotate(letraE2, -(Math.PI/14));


var letraS2 = Bodies.fromVertices(eX6, eY2, [
    {x: (195.2460000000/1920)*screenWidth, y: 169.3290000000}, 
    {x: (104.9550000000/1920)*screenWidth, y: 253.1360000000}, 
    {x: (8.1783000000/1920)*screenWidth, y: 221.7080000000}, 
    {x: (14.4545000000/1920)*screenWidth, y: 151.6900000000}, 
    {x: (42.8464000000/1920)*screenWidth, y: 128.9370000000}, 
    {x: (102.4600000000/1920)*screenWidth, y: 0.2197790000}, 
    {x: (186.7650000000/1920)*screenWidth, y: 28.6544000000}, 
    {x: (189.9880000000/1920)*screenWidth, y: 76.5436000000}, 
    {x: (167.3100000000/1920)*screenWidth, y: 108.4700000000}, 
    {x: (195.2460000000/1920)*screenWidth, y: 169.3290000000}
], {
    render: {
        resitution: 0.2,
        sprite: {
            texture: 'https://i.imgur.com/HQFzlOs.png',
            xScale: 0.3,
            yScale: 0.3
        }
    }
});
Body.rotate(letraS2, Math.PI/11);
Body.translate(letraS2, {x: 0, y: 10});

//Create walls that constrain objects' movement
var ground = Bodies.rectangle(screenWidth/2, screenHeight/1.25, screenWidth, 1, { 
    isStatic: true,
    render: {
        fillStyle: "transparent"
    } 
});
var ceiling = Bodies.rectangle(screenWidth/2, 0, screenWidth, 1, { 
    isStatic: true,
    render: {
        fillStyle: "transparent"
    } 
});
var wallL = Bodies.rectangle(0, screenHeight/2, 1, screenHeight, { 
    isStatic: true,
    render: {
        fillStyle: "transparent"
    } 
});
var wallR = Bodies.rectangle(screenWidth, screenHeight/2, 1, screenHeight, { 
    isStatic: true,
    render: {
        fillStyle: "transparent"
    } 
});

// add all of the bodies to the world
//Composite.add(engine.world, [boxA, boxB, ballA, ballB, ground, ceiling, wallL, wallR, letterD, letterT]);
Composite.add(engine.world, [
    //Screen constraints
    ground,
    ceiling, 
    wallL, 
    wallR, 
    //3D letters
    letraB, 
    letraU, 
    letraE1, 
    letraN, 
    letraA1, 
    letraS1,
    letraT,
    letraA2,
    letraR,
    letraD,
    letraE2,
    letraS2
]);

// run the renderer
Render.run(render);

// create runner
var runner = Runner.create();

// run the engine
Runner.run(runner, engine);

// add mouse control
var mouse = Mouse.create(render.canvas),
mouseConstraint = MouseConstraint.create(engine, {
    mouse: mouse,
    constraint: {
        stiffness: 0.2,
        render: {
            visible: false
        }
    }
});

Composite.add(engine.world, mouseConstraint);

// keep the mouse in sync with rendering
render.mouse = mouse;

//Letter oscillation function
Events.on(engine, 'beforeUpdate', function() {
    //FORMULA : amplitude * Math.sin(2 * Math.PI * frequency * (elapsedTime / 1000));
    const px = 0.000045 * Math.sin(2 * Math.PI * 0.2 * (engine.timing.timestamp / 1000));
    Body.applyForce(letraB, letraB.position, {x:0, y: px});
    Body.applyForce(letraU, letraU.position, {x:0, y: px});
    Body.applyForce(letraE1, letraE1.position, {x:0, y: px});
    Body.applyForce(letraN, letraN.position, {x:0, y: px});
    Body.applyForce(letraA1, letraA1.position, {x:0, y: px});
    Body.applyForce(letraS1, letraS1.position, {x:0, y: px});
    Body.applyForce(letraT, letraT.position, {x:0, y: px});
    Body.applyForce(letraA2, letraA2.position, {x:0, y: px});
    Body.applyForce(letraR, letraR.position, {x:0, y: px});
    Body.applyForce(letraD, letraD.position, {x:0, y: px});
    Body.applyForce(letraE2, letraE2.position, {x:0, y: px});
    Body.applyForce(letraS2, letraS2.position, {x:0, y: px});
});
