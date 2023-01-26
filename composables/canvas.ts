// scalar
export function useRadToDeg(radius: number) {
    let degrees = radius / Math.PI * 180
    return degrees
}

export function useDegToRad(degrees: number) {
    let radius = degrees * Math.PI / 180
    return radius
}

export function useRadToSinCos(radius: number) {
    let sin = Math.sin(radius)
    let cos = Math.cos(radius)
    return {sin, cos}
}

export function useCalcPlace(sin: number, cos: number, distance: number) {
    let A = [0.0, 0.0]
    let place = [
        A[0] + cos * distance,
        A[1] + sin * distance
    ]
    return place
}

//vector
export function usePositionToVector(positionStart: Array<number>, positionEnd: Array<number>) {
    let vector = [
        positionEnd[0] - positionStart[0],
        positionEnd[1] - positionStart[1]
    ]
    return vector
}

export function useVectorToVectorLength(vector: Array<number>) {
    let V = vector.slice() //値渡し
    let vectorLength = Math.sqrt(vector[0] ** 2 + vector[1] ** 2)
    return vectorLength
}

export function useCalcUnitVector(vector: Array<number>) {
    let V = vector.slice() //値渡し
    let length = Math.sqrt(vector[0] ** 2 + vector[1] ** 2)
    let unitVector = [
        V[0] /= length,
        V[1] /= length
    ]
    return unitVector
}

export function useCalcDot(unitVectorA: Array<number>, unitVectorB: Array<number>) {
    let A = unitVectorA
    let B = unitVectorB
    console.log(A,B)
    let dot = A[0] * B[0] + A[1] * B[1]
    return dot
}

export function useDotToRadian(dot: number) {
    let radian = Math.acos(dot)
    return radian
}
