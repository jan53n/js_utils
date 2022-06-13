/**
 * checks if source object exist in target object
 * property with value `undefined` get skipped to next iteration
 * 
 * @example
 * objectHasPartial({ x: { r: true, w: false }, { x: { r: true } } })
 * // returns false
 * 
 * @param {Object} source 
 * @param {Object} target
 * @return {boolean}
 */
export default function objectHasPartial(source, target) {
    for (const [k, v] of Object.entries(source)) {
        if (!target.hasOwnProperty(k)) {
            return false;
        }

        const tV = target[k];

        if (typeof v == "object") {
            return objectHasPartial(v, tV);
        } else if (tV == v || typeof v == "undefined") {
            continue;
        } else {
            return false;
        }
    }

    return true;
}