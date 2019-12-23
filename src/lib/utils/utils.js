export const showPlaceholder = () => {

}

export const selectElement = async (selector) => {
    return document.querySelector(selector);
}

export const selectElements = async (selector) => {
    return document.querySelectorAll(selector);
}

export const wrapElement = (el, wrapClass) => {
    let wrapper = document.createElement('div');
    wrapper.className = wrapClass;
    el.parentNode.insertBefore(wrapper, el.nextSibling);
    wrapper.appendChild(el);
}

export const createElement = () => {
    return document.createElement('div');
}

export const insertBefore = (targetPosition, element) => {
    targetPosition.parentNode.insertBefore(element, targetPosition);
}