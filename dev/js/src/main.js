(function(){

    'use strict';


    //particles.js
    particlesJS('particles-js', {
        particles: {
            color: '#2eb2c4',
            color_random: false,
            shape: 'circle', // "circle", "edge" or "triangle"
            opacity: {
                opacity: 0.5,
                anim: {
                    enable: false,
                    speed: 1.5,
                    opacity_min: 0,
                    sync: false
              }
            },
            size: 2.5,
            size_random: true,
            nb: 100,
            anim: {
                enable: true,
                speed: 1
            }
        },
        interactivity: {
            enable: true,
            mouse: {
                distance: 250
            },
            detect_on: 'canvas', // "canvas" or "window"
            mode: 'grab', // "grab" of false
            line_linked: {
                opacity: 0.5
            },
            events: {
                onclick: {
                    enable: true,
                    mode: 'push', // "push" or "remove"
                    nb: 4
                },
                onresize: {
                    enable: true,
                    mode: 'out', // "out" or "bounce"
                    density_auto: false,
                    density_area: 800 // nb_particles = particles.nb * (canvas width *  canvas height / 1000) / density_area
                }
            }
        },
        /* Retina Display Support */
        retina_detect: true
    });

    var addClass = function(el, className){
        var classesArr = el.className.split(' ');
        classesArr.push(className);
        el.className = classesArr.join(' ');
        return el;
    };

    //fade elements in on load
    (function(){
        var addClassToEl = (function(){

            var count = 0;

            return function(el, className){
                setTimeout(function(){
                    addClass(el, className);
                }, count*150);

                count++;
                return el;
            };
        }());

        var particlesWrapper = document.getElementById('particles-js'),
            allContentEls = document.getElementById('content-container').getElementsByTagName('*');

        addClassToEl(particlesWrapper, 'is-faded-in');

        for(var i = 0, l = allContentEls.length; i < l; i++){
            var el = allContentEls[i];
            addClassToEl(el, 'is-faded-in');
        }

    }());

}());