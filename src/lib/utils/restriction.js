class Restriction {
    restrict = async (element) => {
        let elType = element.nodeName.toLowerCase();
    
        switch (elType) {
            case 'iframe':
                await this.restrictIframe(element);
                break;
            default:
                break;
        }
    }

    restrictIframe = async (element) => {
        let src = element.src;
    
        if (src.includes('youtube')) {
            element.setAttribute('data-src', src);
            src = src.replace('https://www.youtube.com', 'https://www.youtube-nocookie.com');
            element.src = src;
        } else {
            element.removeAttribute('src');
            element.style.display = 'none';
        }
    }
}

export default Restriction;