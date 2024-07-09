export const validateInputForm = (requiredData: {[key: string]: string}): boolean => {
    let isValid = true;
    //TODO 알맞은 정규표현식 조건 추가해야 함. 현재는 단순히 빈 값 체크만 하고 있음.
    Object.entries(requiredData).forEach(([key, value]) => {
        if (!value) {
            console.error(`${key} is invalid`);

            isValid = false;
        }
    });

    return isValid;
}
