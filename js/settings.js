var CANVAS_WIDTH = 1360;
var CANVAS_HEIGHT = 640;

var CANVAS_WIDTH_HALF = CANVAS_WIDTH * 0.5;
var CANVAS_HEIGHT_HALF = CANVAS_HEIGHT * 0.5;

var EDGEBOARD_X = 250;
var EDGEBOARD_Y = 5;

var FPS = 30;
var FPS_TIME = 1000 / FPS;
var DISABLE_SOUND_MOBILE = false;

var PRIMARY_FONT = "walibi";
var PRIMARY_FONT_COLOR = "#ffffff";
var SECONDARY_FONT_COLOR = "#004080";
var THIRD_FONT_COLOR = "#000000";

var STATE_LOADING = 0;
var STATE_MENU = 1;
var STATE_HELP = 1;
var STATE_GAME = 3;

var ON_MOUSE_DOWN = 0;
var ON_MOUSE_UP = 1;
var ON_BACK_MENU = 6;
var ON_CHECK = 7;
var ON_RESTART = 8;

var ENABLE_FULLSCREEN;
var ENABLE_CHECK_ORIENTATION;

var PERFECT_SCORE;

var MODE_SNAKES = 0;    // THE GAME WILL USE SNAKES
var MODE_CHUTES = 1;    // THE GAME WILL USE CHUTES

var MSG_GOOD = 0;
var MSG_BAD = 1;
var MSG_DICE = 2;

var HUMAN_VS_HUMAN = 0;
var HUMAN_VS_CPU = 1;
