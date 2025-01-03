<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>哪吒面板音乐播放</title>
</head>
<body>
    <audio id="background-music" src="http://cr.sycdn.kuwo.cn/4d58d9a60e4c0f8f26907eeb6c24175e/6777abaa/resource/n2/26/36/2656435640.mp3" loop>
        Your browser does not support the audio element.
    </audio>

    <button id="play-button">播放</button>
    <button id="pause-button">暂停</button>
    <input type="range" id="volume-control" min="0" max="1" step="0.1" value="0.5">

    <script>
        document.addEventListener("DOMContentLoaded", function() {
            var audio = document.getElementById("background-music");
            var playButton = document.getElementById("play-button");
            var pauseButton = document.getElementById("pause-button");
            var volumeControl = document.getElementById("volume-control");

            // 自动播放音乐
            audio.play().catch(function(error) {
                console.log("自动播放被阻止，用户需要与页面交互以播放音频。");
            });

            // 播放按钮事件
            playButton.addEventListener("click", function() {
                audio.play();
            });

            // 暂停按钮事件
            pauseButton.addEventListener("click", function() {
                audio.pause();
            });

            // 音量控制事件
            volumeControl.addEventListener("input", function() {
                audio.volume = volumeControl.value;
            });
        });
    </script>
</body>
</html>
