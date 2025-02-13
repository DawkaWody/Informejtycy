function expandCollapseSection(section, instant = false) {
    tr = section.style.transition;
    if (instant) {
        section.style.transition = 'none';
    }

    if (section.style.maxHeight) {
        section.style.maxHeight = null;
    } else {
        section.style.maxHeight = section.scrollHeight + 'px';
    }

    if (instant) {
        section.offsetHeight;
        section.style.transition = tr;
    }
}

function rotateArrow(arrow, instant = false) {
    tr = arrow.style.transition;
    if (instant) {
        arrow.style.transition = 'none';
    }

    arrow.classList.toggle('rotate');

    if (instant) {
        arrow.offsetHeight;
        arrow.style.transition = tr;
    }
}

window.expandCollapseSection = expandCollapseSection;
window.rotateArrow = rotateArrow;