
import * as R from "ramda";

export const updateState = (state, property, value) => {
    const lens = R.lensProp(property);
    return R.set(lens, value, state);
}

export const updateStateMultiple = (state, propValues) => {
    for (const prop in propValues) {
        let lens = R.lensProp(prop);
        state = R.set(lens, propValues[prop], state);
    }
    return state;
}

export const getPartyMemberHeading = (list) => {
    let plural = list.length < 2 ? "" : "s";
    return "Yaaayyy " + list.length + " member" + plural
}
