// throttling => 디바운싱과 같은 효과인데 throttling은 실행 횟수에 제한 두기
export const throttling = () => {
    let throttleCheck;

    return {
        throttle(callback, milliseconds) {
            if (!throttleCheck) {
                // setTimeout은 timer id를 반환한다.
                throttleCheck = setTimeout(() => {
                    callback(...arguments);
                    throttleCheck = false;
                }, milliseconds);
            }
        }
    };
};