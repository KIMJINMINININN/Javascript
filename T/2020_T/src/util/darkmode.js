const STORAGE_KEY = 'user-color-scheme';
const COLOR_MODE_KEY = '--color-mode';

const darkmodeBtn = document.querySelector('.darkmode-btn');

const getCSSCustomProp = (propKey) => {
    console.log("propKey : ", propKey);
    console.log("Computed : ", getComputedStyle(document.documentElement));
    let response = getComputedStyle(document.documentElement).getPropertyValue(propKey);
    console.log("response : ", response);

    // Tidy up the string if there’s something to work with
    if (response.length) {
        //문자열만 남을수있도록 변환
        response = response.replace(/\'|"/g, '').trim();
    }

    // Return the string response by default
    return response;
};

const applySetting = passedSetting => {
    let currentSetting = passedSetting || localStorage.getItem(STORAGE_KEY);

    if (currentSetting) {
        document.documentElement.setAttribute('data-user-color-scheme', currentSetting);
        setButtonLabel(currentSetting);
    } else {
        setButtonLabel(getCSSCustomProp(COLOR_MODE_KEY));
    }
};


const toggleSetting = () => {
    //storagekey 값으로 value 값 가져오기
    let currentSetting = localStorage.getItem(STORAGE_KEY);
    switch (currentSetting) {
        case null:
            currentSetting = getCSSCustomProp(COLOR_MODE_KEY) === 'dark' ? 'light' : 'dark';
            break;
        case 'light':
            currentSetting = 'dark';
            break;
        case 'dark':
            currentSetting = 'light';
            break;
    }

    localStorage.setItem(STORAGE_KEY, currentSetting);

    return currentSetting;
};

//dark 일땐 밝은색으로 light일땐 검정색으로
const setButtonLabel = currentSetting => {
    darkmodeBtn.innerText = currentSetting === 'dark' ? '🌕' : '🌑';
};

darkmodeBtn.addEventListener('click', evt => {
    evt.preventDefault();

    applySetting(toggleSetting());
});

applySetting();