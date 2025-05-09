<script>
    import { onMount } from "svelte";
    let { project, name } = $props();
    onMount(() => {
        var buildUrl = "/res/files/" + project + "/Build";
        var loaderUrl = buildUrl + "/" + project + ".loader.js";
        var config = {
            dataUrl: buildUrl + "/" + project + ".data",
            frameworkUrl: buildUrl + "/" + project + ".framework.js",
            codeUrl: buildUrl + "/" + project + ".wasm",
            streamingAssetsUrl: "StreamingAssets",
            companyName: "chancho.dev",
            productName: name,
            productVersion: "1.0",
        };
        var container = document.querySelector("#unity-container");
        var canvas = document.querySelector("#unity-canvas");
        var loadingBar = document.querySelector("#unity-loading-bar");
        var progressBarFull = document.querySelector(
            "#unity-progress-bar-full",
        );
        var fullscreenButton = document.querySelector(
            "#unity-fullscreen-button",
        );
        var mobileWarning = document.querySelector("#unity-mobile-warning");
        if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
            container.className = "unity-mobile";
            config.devicePixelRatio = 1;
            mobileWarning.style.display = "block";
            setTimeout(() => {
                mobileWarning.style.display = "none";
            }, 5000);
        } else {
            canvas.style.width = "100%";
            canvas.style.height = "85%";
        }
        loadingBar.style.display = "block";
        var script = document.createElement("script");
        script.src = loaderUrl;
        script.onload = () => {
            createUnityInstance(canvas, config, (progress) => {
                progressBarFull.style.width = 100 * progress + "%";
            })
                .then((unityInstance) => {
                    loadingBar.style.display = "none";
                    fullscreenButton.onclick = () => {
                        unityInstance.SetFullscreen(1);
                    };
                })
                .catch((message) => {
                    alert(message);
                });
        };
        document.body.appendChild(script);
    });
</script>

<div id="unity-container" class="unity-desktop">
    <canvas id="unity-canvas"></canvas>
    <div id="unity-loading-bar">
        <div id="unity-logo"></div>
        <div id="unity-progress-bar-empty">
            <div id="unity-progress-bar-full"></div>
        </div>
    </div>
    <div id="unity-mobile-warning"></div>
    <div id="unity-footer">
        <div id="unity-webgl-logo"></div>
        <div id="unity-fullscreen-button"></div>
        <div id="unity-build-title"></div>
    </div>
</div>
