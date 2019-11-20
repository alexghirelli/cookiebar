class Restriction {
    selectElements = async () => {
        let elements = document.getElementsByTagName("iframe");
        for (const element of elements) {
            await this.restrict(element);
        }
    }

    wrapAllElements = async () => {

    }

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
    
            let img = document.createElement('img')
            img.src = './img/placeholder.jpg';
            element.appendChild(img);
        }
    }
}

export default Restriction;