function nav(e) {
			var navIndex = e;
			var nav_a = document.getElementsByClassName('li_a');

            for (var i = 0; i < nav_a.length; i++) {
                nav_a[i].classList.remove('active');
            }

            nav_a[navIndex].classList.add('active');
}

        start();
        
        var imgs = [
            '/public/img/body7.jpeg',
            '/public/img/body5.jpg',
            '/public/img/body10.jpg',
            '/public/img/body12.jpeg',
            '/public/img/body17.jpeg'
        ];

        // 当前是那一张图片
        var imgIndex = 0;

        var timer;

        // 切换图片
        function show()
        {
            tu.src = imgs[imgIndex];
        }

        function showDot()
        {
            var _dots = document.getElementsByClassName('dot-item');

            for (var i = 0; i < _dots.length; i++) {
                _dots[i].classList.remove('active');
            }

            _dots[imgIndex].classList.add('active');
            // console.dir(imgIndex);
        }
        
        


        function start()
        {
            timer = setInterval(function(){
                // 切换图片
                show();

                // 切换点
                showDot();

                // 改变索引
                imgIndex++;

                // 超过最后一张图则显示第一张
                if (imgIndex > imgs.length - 1) {
                    imgIndex = 0;
                }

            }, 2000);
        }


        function next()
        {
            imgIndex++;

            // 超过最后一张图则显示第一张
            if (imgIndex > imgs.length - 1) {
                imgIndex = 0;
            }

            show();

            showDot();
        }

        function prev()
        {
            imgIndex--;


            if (imgIndex < 0) {
                imgIndex = imgs.length - 1;
            }

            show();

            showDot();
        }


        body_div.onmouseenter = function() {
            clearInterval(timer);
        }

        body_div.onmouseleave = function() {

            imgIndex--;

            if (imgIndex < 0) {
                imgIndex = imgs.length - 1;
            }

            start();
        }

        function jump(dotIndex) {
           imgIndex = dotIndex;

           showDot();
           show();
           imgIndex--;

        }