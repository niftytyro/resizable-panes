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
    display_pane.css('max-width', ($(document).width() - RIGHT_WIDTH - LEFT_WIDTH - 6) + 'px');
    top_view.css('max-height', ($(document).height() - 213) + 'px');
    top_view.height($(document).height() - bottom_pane.height() - 3);


    top_view.css('height', (DISPLAY_HEIGHT - BOTTOM_HEIGHT - 3) + 'px');
    display_pane.css('width', (DISPLAY_WIDTH - LEFT_WIDTH - RIGHT_WIDTH - 6) + 'px');

    left_pane_border.mousedown(function (event) {
        initX = event.pageX;
        initY = event.pageY;
        dragging = true;
        resize_element = 'left';
    });
    right_pane_border.mousedown(function (event) {
        initX = event.pageX;
        initY = event.pageY;
        dragging = true;
        resize_element = 'right';
        console.log('right')
    });
    bottom_pane_border.mousedown(function (event) {
        initX = event.pageX;
        initY = event.pageY;
        dragging = true;
        resize_element = 'bottom';
    });
    $(document).mouseup(function (event) {
        dragging = false;
    });
    $(document).mousemove(function (event) {
        if (dragging) {
            if (resize_element == 'left') {
                differenceX = event.pageX - initX;
                var max = left_pane.css('max-width').substr(0, left_pane.css('max-width').indexOf('px'));
                if (((max > left_pane.width()) && (differenceX > 0)) || (differenceX < 0)) {
                    console.log(differenceX);
                    left_pane.css('width', left_pane.width() + differenceX / 2 + 'px');
                    if (right_pane.css('min-width') <= right_pane.width()) {
                        right_pane.css('width', right_pane.width() - differenceX / 4 + 'px');
                        display_pane.css('width', display_pane.width() - differenceX / 4 + 'px');
                    } else {
                        display_pane.css('width', display_pane.width() - differenceX / 2 + 'px');
                    }
                    initX = event.pageX;
                    initY = event.pageY;
                }
            }
            else if (resize_element == 'bottom') {
                differenceY = initY - event.pageY;
                var max = bottom_pane.css('max-height').substr(0, bottom_pane.css('max-height').indexOf('px'));
                if (((max > bottom_pane.height()) && (differenceY > 0)) || (differenceY < 0)) {
                    bottom_pane.css('height', bottom_pane.height() + differenceY / 2 + 'px');
                    top_view.css('height', top_view.height() - differenceY / 2 + 'px');
                    initX = event.pageX;
                    initY = event.pageY;
                }
            }
            else if (resize_element == 'right') {
                differenceX = initX - event.pageX;
                var max = right_pane.css('max-width').substr(0, right_pane.css('max-width').indexOf('px'));
                if (((max > right_pane.width()) && (differenceX > 0)) || (differenceX < 0)) {
                    right_pane.css('width', right_pane.width() + differenceX / 2 + 'px');
                    if (left_pane.css('min-width') <= left_pane.width()) {
                        left_pane.css('width', left_pane.width() - differenceX / 4 + 'px');
                        display_pane.css('width', display_pane.width() - differenceX / 4 + 'px');
                    } else {
                        display_pane.css('width', display_pane.width() - differenceX / 2 + 'px');
                    }
                    initX = event.pageX;
                    initY = event.pageY;
                }
            }
        }
    });
}

$(document).ready(() => {
    initialize();
});