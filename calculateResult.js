module.exports = function (formData, computes) {
    const action = formData.action
    let arg1 = parseInt(formData.arg1)
    let arg2 = parseInt(formData.arg2)
    let result = null;

    if (action == 0) {
        result = arg1 + arg2
    } else if (action == 1) {
        result = arg1 - arg2
    } else if (action == 2) {
        result = arg1 * arg2
    } else if (action == 3) {
        result = arg1 / arg2
    }

    if (!isFinite(result)) {
        result = 'Ошибка'
    }

    // ЗДЕСЬ ДОЛЖНА БЫТЬ ЗАПИСЬ В БАЗУ :D
    computes.push({
        arg1,
        arg2,
        action,
        result
    })

    return result
}
