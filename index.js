var WINDOW_WIDTH;
var WINDOW_HEIGHT;
var LEFT_WIDTH;
var LEFT_HEIGHT;
var RIGHT_WIDTH;
var RIGHT_HEIGHT;
var BOTTOM_WIDTH;
var BOTTOM_HEIGHT;
var DISPLAY_WIDTH;
var DISPLAY_HEIGHT;

var top_view;
var left_pane;
var right_pane;
var display_pane;
var bottom_pane;
var left_pane_border;
var right_pane_border;
var bottom_pane_border;

var initX;
var initY;
var dragging = false;
var resize_element;
var differenceX;
var differenceY;

function initialize() {
    top_view = $('.top-view');
    left_pane = $('.left-pane');
    right_pane = $('.right-pane');
    display_pane = $('.display-pane');
    bottom_pane = $('.bottom-pane');
    left_pane_border = $('.left-pane-border');
    right_pane_border = $('.right-pane-border');
    bottom_pane_border = $('.bottom-pane-border');
    WINDOW_WIDTH = $(document).width();
    WINDOW_WIDTH = $(document).height();
    LEFT_WIDTH = left_pane.width();
    LEFT_HEIGHT = left_pane.height();
    RIGHT_WIDTH = right_pane.width();
    RIGHT_HEIGHT = right_pane.height();
    BOTTOM_WIDTH = bottom_pane.width();
    BOTTOM_HEIGHT = bottom_pane.height();
    DISPLAY_WIDTH = $(document).width();
    DISPLAY_HEIGHT = $(document).height();


    top_view.css('height', (DISPLAY_HEIGHT - BOTTOM_HEIGHT - 3) + 'px');
    display_pane.css('width', (DISPLAY_WIDTH - LEFT_WIDTH - RIGHT_WIDTH - 6) + 'px');

    left_pane_border.mousedown(function (event) {
        initX = event.pageX;
        initY = event.pageY;
        dragging = true;
        resize_element = left_pane;
    });
    right_pane_border.mousedown(function (event) {
        initX = event.pageX;
        initY = event.pageY;
        dragging = true;
        resize_element = right_pane;
    });
    bottom_pane_border.mousedown(function (event) {
        initX = event.pageX;
        initY = event.pageY;
        dragging = true;
        resize_element = bottom_pane;
    });
    $(document).mouseup(function (event) {
        dragging = false;
    });
    $(document).mousemove(function (event) {
        if (dragging) {
            differenceX = event.pageX - initX;
            differenceY = event.pageY - initY;
            left_pane.css('width', left_pane.width() + differenceX + 'px');
            initX = event.pageX;
            initY = event.pageY;
            console.log(left_pane.width());
        }
    });
}

$(document).ready(() => {
    initialize();
});