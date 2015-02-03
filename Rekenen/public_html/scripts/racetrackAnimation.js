function startAnimation() {
    var path = "m 504.31672,1006.15 c 127.19159,-0.3026 235.59842,7.4756 320.99299,-23.50939 85.39457,-30.98497 216.97829,-100.07769 228.76399,-161.8528 11.7857,-61.7751 12.1487,-92.53443 -2.7125,-135.63083 -14.8613,-43.09641 -86.69689,-37.55814 -113.92999,-27.12617 -27.23311,10.43197 -102.50258,5.24888 -104.88785,-5.42524 -2.38527,-10.67411 -14.20831,-13.81197 -8.13785,-63.29439 6.07047,-49.48242 110.26048,-99.47334 86.80374,-176.3201 -23.45673,-76.84675 -134.25383,-86.13445 -201.63785,-38.88084 -67.38402,47.25362 -33.98237,139.00799 -92.22898,171.79907 -58.2466,32.79108 -123.53093,-30.17284 -114.83411,-86.80374 8.69681,-56.63091 -13.922,-119.71226 -84.99532,-136.53505 -71.07332,-16.82279 -212.1321,9.30023 -286.6332,42.49767 -74.501096,33.19743 -76.708796,62.67947 -74.144796,110.31308 2.5639,47.63362 122.355896,60.83358 167.277996,67.81542 44.92211,6.98184 70.91718,-3.01125 125.68458,21.70093 54.76739,24.71219 65.72353,79.54615 128.39719,106.69627 62.67365,27.15013 155.57255,12.09876 195.30842,49.73131 39.73586,37.63255 -5.02719,151.38704 -101.27104,154.61916 -96.24385,3.23212 -359.70615,-151.01516 -406.89255,-157.33178 -47.1864,-6.31662 -108.632096,21.96214 -119.355096,91.32476 -10.723,69.36262 22.138,108.59722 100.366796,163.66123 78.2288,55.06403 230.87384,32.85393 358.06543,32.55143 z",
        pathAnimator = new PathAnimator( path ),	// initiate a new pathAnimator object
        objToAnimate = document.getElementById('car'),	// The object that will move along the path
        speed = 6,               // seconds that will take going through the whole path
        reverse = false,	// go back of forward along the path
        startOffset = 0;	// between 0% to 100%

    pathAnimator.start( speed, step, reverse, startOffset, finish);

    function step( point, angle ){
        // do something every "frame" with: point.x, point.y & angle
        objToAnimate.style.cssText = "top:" + (point.y - 300) + "px;" +
                                                                "left:" + (point.x - 30)  + "px;" +
                                                                "transform:rotate("+ angle +"deg);" +
                                                                "-webkit-transform:rotate("+ angle +"deg);";
    }

    function finish(){
        // do something when animation is done
    }
}
    