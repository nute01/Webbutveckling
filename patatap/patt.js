window.onload = function() {

    let canvas = document.getElementById('myCanvas');
    paper.setup(canvas);

    var keyData = {
        a:{
            Color:"red",
            sound:new Howl({
                src: ["mp3/oof.mp3"]
            })
        },
        b:{
            Color:"blue",
            sound:new Howl({
                src: ["mp3/oof.mp3"]
            })
        },
        c:{
            Color:"green",
            sound:new Howl({
                src: ["mp3/oof.mp3"]
            })
        },
        d:{
            Color:"blue",
            sound:new Howl({
                src: ["mp3/oof.mp3"]
            })
        },
        e:{
            Color:"yellow",
            sound:new Howl({
                src: ["mp3/oof.mp3"]
            })
        },
        f:{
            Color:"red",
            sound:new Howl({
                src: ["mp3/oof.mp3"]
            })
        },
        g:{
            Color:"purple",
            sound:new Howl({
                src: ["mp3/oof.mp3"]
            })
        },
        h:{
            Color:"crimson",
            sound:new Howl({
                src: ["mp3/oof.mp3"]
            })
        },
        i:{
            Color:"aqua",
            sound:new Howl({
                src: ["mp3/oof.mp3"]
            })
        },
        j:{
            Color:"coral",
            sound:new Howl({
                src: ["mp3/oof.mp3"]
            })
        },
        k:{
            Color:"brown",
            sound:new Howl({
                src: ["mp3/oof.mp3"]
            })
        },
        l:{
            Color:"orange",
            sound:new Howl({
                src: ["mp3/oof.mp3"]
            })
        },
        m:{
            Color:"lightblue",
            sound:new Howl({
                src: ["mp3/oof.mp3"]
            })
        },
        n:{
            Color:"pink",
            sound:new Howl({
                src: ["mp3/oof.mp3"]
            })
        },
        o:{
            Color:"black",
            sound:new Howl({
                src: ["mp3/oof.mp3"]
            })
        },
        p:{
            Color:"white",
            sound:new Howl({
                src: ["mp3/oof.mp3"]
            })
        },
        q:{
            Color:"darkgray",
            sound:new Howl({
                src: ["mp3/oof.mp3"]
            })
        },
        r:{
            Color:"gray",
            sound:new Howl({
                src: ["mp3/oof.mp3"]
            })
        },
        s:{
            Color:"blueviolet",
            sound:new Howl({
                src: ["mp3/oof.mp3"]
            })
        },
        t:{
            Color:"burlywood",
            sound:new Howl({
                src: ["mp3/oof.mp3"]
            })
        },
        u:{
            Color:"chocolate",
            sound:new Howl({
                src: ["mp3/oof.mp3"]
            })
        },
        v:{
            Color:"cornsilk",
            sound:new Howl({
                src: ["mp3/oof.mp3"]
            })
        },
        w:{
            Color:"darkblue",
            sound:new Howl({
                src: ["mp3/oof.mp3"]
            })
        },
        x:{
            Color:"darkorange",
            sound:new Howl({
                src: ["mp3/oof.mp3"]
            })
        },
        y:{
            Color:"firebrick",
            sound:new Howl({
                src: ["mp3/oof.mp3"]
            })
        },
        z:{
            Color:"gold",
            sound:new Howl({
                src: ["mp3/oof.mp3"]
            })
        }
    };


    window.addEventListener("keydown", function(e){
        if(keyData[e.key]){
            var maxP = new paper.Point(paper.view.size.width, paper.view.size.height);
            var point = maxP.multiply(paper.Point.random());
            var plopp = new paper.Path.Circle(point, 500);
            plopp.fillColor = keyData[e.key].Color;
            console.log(keyData[e.key].Color);
            keyData[e.key].sound.play();
            plopp.onFrame = function(event) {
                plopp.fillColor.hue += 1;
                plopp.scale(.90);
            }
        }
    })

    window.addEventListener("keydown", function(e) {

    })
}
