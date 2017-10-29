
var game = new Phaser.Game(1300, 200, Phaser.AUTO, 'phaser-example', { create: create, update: update });

var filter;
var sprite;

function create() {

    var fragmentSrc = [

        "#ifdef GL_ES",
        "precision mediump float;",
        "#endif",

       " uniform float time;",
       " uniform vec2 resolution;",

       " float nrand (vec2 co)",
       " {   ",
       "     float a = fract(cos(co.x * 8.3e-3 + co.y) * 4.7e5);",
       "     float b = fract(sin(co.x * 0.3e-3 + co.y) * 1.0e5);",
       "     return a * .5 + b * .5;",
       " }",

        "float genstars (float starsize, float density, float intensity, vec2 seed)",
        "{",
        "    float rnd = nrand(floor(seed * starsize));",
        "    float stars = pow(rnd,density) * intensity;",
        "    return stars;",
        "}",
        "void main (void)",
        "{",
        "    vec2 offset = vec2(time * 8.25,0);",
        "    ",
        "    vec2 p = 2.0 * (gl_FragCoord.xy / resolution) - 1.0;",
        "    p.x *= resolution.x / resolution.y;",
        "    ",
        "    p *= 350.0;",
        "        ",
        "    float intensity = genstars(0.025, 16.0, 2.5, p + offset * 40.);",
        "    intensity += genstars(0.05, 16.0, 1.5, p + offset * 20.);",
        "    intensity += genstars(0.10, 16.0, 0.5, p + offset * 10.);",
        "    ",
        "    vec2 st = gl_FragCoord.xy/resolution;",
        "    vec3 color = vec3(st.y, 0.0, 1.0);",
        "    gl_FragColor = vec4(intensity * color, 1);",
        "}",
    ];

    filter = new Phaser.Filter(game, null, fragmentSrc);
    filter.setResolution(1300, 200);

    sprite = game.add.sprite();
    sprite.width = 1300;
    sprite.height = 200;

    sprite.filters = [ filter ];

}

function update() {

    filter.update(game.input.activePointer);

}
