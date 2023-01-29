//外部呼び出し
export function useCreateWelcomeString(s: string) {
    let string = s.split('')
    return string
}

export function useShowWelcomeString(content: object) {
    return new Promise((resolve) => {
        for (let i = 0; i < content.length; i++) {
            setTimeout(() => {
                content[i].classList.add('show')
                if (i === content.length - 1) {
                    resolve()
                }
            }, 100 * i)
        }
    })
}

export function useHideWelcomeString(row: object) {
    return new Promise((resolve) => {
        row.classList.add('hide')
        resolve()
    })
}

export function useScrollToEnd(circle: object) {
    return new Promise((resolve) => {
        circle.scrollIntoView({ behavior: 'smooth' })
        resolve()
    })
}

export function useShowRoadCircle(circle: object) {
    return new Promise((resolve) => {
        for (let i = 0; i < circle.length; i++) {
            circle[i].classList.add('show')
        }
    })
}

export function useShowChooseRow(row: object) {
    return new Promise((resolve) => {
        row.classList.add('show')
        resolve()
    })
}



//内部呼び出し
