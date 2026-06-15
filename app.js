document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();

    const configModal = document.getElementById('configModal');
    const btnCloseConfigModal = document.getElementById('btnCloseConfigModal');
    const btnApplyIframeUrls = document.getElementById('btnApplyIframeUrls');
    const inputIframeVideoUrl = document.getElementById('inputIframeVideoUrl');
    const inputIframeAudioUrl = document.getElementById('inputIframeAudioUrl');
    const videoIframe = document.getElementById('videoIframe');
    const audioIframe = document.getElementById('audioIframe');

    const btnStartSync = document.getElementById('btnStartSync');
    const btnFinishSync = document.getElementById('btnFinishSync');
    const videoSelect = document.getElementById('videoSelect');
    const audioSelect = document.getElementById('audioSelect');
    const btnSwapSources = document.getElementById('btnSwapSources');

    function setVideoSrc(url) {
        if (!url || url === 'custom') return;
        try {
            const parsedUrl = new URL(url);
            parsedUrl.searchParams.set('mute', '1');
            parsedUrl.searchParams.set('muted', '1');
            parsedUrl.searchParams.set('volume', '0');
            parsedUrl.searchParams.set('autoplay', '1');
            videoIframe.src = parsedUrl.toString();
        } catch (e) {
            let finalUrl = url;
            const separator = url.includes('?') ? '&' : '?';
            if (!url.includes('mute=')) {
                finalUrl = url + separator + 'mute=1&muted=1&volume=0';
            }
            videoIframe.src = finalUrl;
        }
    }

    function setAudioSrc(url) {
        if (!url || url === 'custom') return;
        try {
            const parsedUrl = new URL(url);
            parsedUrl.searchParams.delete('mute');
            parsedUrl.searchParams.delete('muted');
            parsedUrl.searchParams.delete('volume');
            audioIframe.src = parsedUrl.toString();
        } catch (e) {
            let finalUrl = url;
            finalUrl = url.replace(/([\?&])(mute|muted|volume)=[^&]+&?/g, '$1');
            if (finalUrl.endsWith('?') || finalUrl.endsWith('&')) {
                finalUrl = finalUrl.slice(0, -1);
            }
            audioIframe.src = finalUrl;
        }
    }

    btnStartSync.addEventListener('click', () => {
        document.getElementById('iframeModeContainer').classList.add('is-sync-mode');
    });

    btnFinishSync.addEventListener('click', () => {
        document.getElementById('iframeModeContainer').classList.remove('is-sync-mode');
    });

    videoSelect.addEventListener('change', () => {
        const val = videoSelect.value;
        if (val === 'custom') {
            const options = Array.from(videoSelect.options).map(o => o.value);
            if (options.includes(inputIframeVideoUrl.value)) {
                inputIframeVideoUrl.value = '';
            }
            openConfigModal();
        } else {
            setVideoSrc(val);
            inputIframeVideoUrl.value = val;
        }
    });

    audioSelect.addEventListener('change', () => {
        const val = audioSelect.value;
        if (val === 'custom') {
            const options = Array.from(audioSelect.options).map(o => o.value);
            if (options.includes(inputIframeAudioUrl.value)) {
                inputIframeAudioUrl.value = '';
            }
            openConfigModal();
        } else {
            setAudioSrc(val);
            inputIframeAudioUrl.value = val;
        }
    });

    btnSwapSources.addEventListener('click', () => {
        const tempValVideo = videoSelect.value;
        const tempValAudio = audioSelect.value;

        videoSelect.value = tempValAudio;
        audioSelect.value = tempValVideo;

        if (!videoSelect.value) videoSelect.value = 'custom';
        if (!audioSelect.value) audioSelect.value = 'custom';

        const tempSrcVideo = videoIframe.src;
        const tempSrcAudio = audioIframe.src;
        setVideoSrc(tempSrcAudio);
        setAudioSrc(tempSrcVideo);

        const tempInputVideo = inputIframeVideoUrl.value;
        const tempInputAudio = inputIframeAudioUrl.value;
        inputIframeVideoUrl.value = tempInputAudio;
        inputIframeAudioUrl.value = tempInputVideo;
    });

    const openConfigModal = () => {
        inputIframeVideoUrl.value = videoSelect.value === 'custom' ? (inputIframeVideoUrl.value || '') : videoSelect.value;
        inputIframeAudioUrl.value = audioSelect.value === 'custom' ? (inputIframeAudioUrl.value || '') : audioSelect.value;

        configModal.classList.add('active');
    };

    const closeConfigModal = () => configModal.classList.remove('active');

    btnCloseConfigModal.addEventListener('click', closeConfigModal);
    
    configModal.addEventListener('click', (e) => {
        if (e.target === configModal) closeConfigModal();
    });

    btnApplyIframeUrls.addEventListener('click', () => {
        const videoUrl = inputIframeVideoUrl.value.trim();
        const audioUrl = inputIframeAudioUrl.value.trim();

        if (videoUrl) {
            setVideoSrc(videoUrl);
            videoSelect.value = videoUrl;
            if (!videoSelect.value) videoSelect.value = 'custom';
        }
        if (audioUrl) {
            setAudioSrc(audioUrl);
            audioSelect.value = audioUrl;
            if (!audioSelect.value) audioSelect.value = 'custom';
        }

        closeConfigModal();
    });
});
