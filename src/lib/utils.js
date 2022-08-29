
import {lensProp, set} from "ramda";

export const updateState = (state, property, value) => {
    const lens = lensProp(property);
    return set(lens, value, state);
}

export const updateStateMultiple = (state, propValues) => {
    for (const prop in propValues) {
        let lens = lensProp(prop);
        state = set(lens, propValues[prop], state);
    }
    return state;
}

export const getPartyMemberHeading = (list) => {
    if (list.length === 0) {
        return "No members yet"
    }
    let plural = list.length < 2 ? "" : "s";
    return "Yaaayyy " + list.length + " member" + plural
}

export const getFoodDescription = (colas, booze, pizzas, iceCreams) => {
    return  "Yaaayyy we have " + colas + " colas, " + " " + booze + " bottles of booze, " + pizzas +" pizzas and "
        + iceCreams + " Ice creams";
}