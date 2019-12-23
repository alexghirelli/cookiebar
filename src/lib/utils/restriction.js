class Restriction {
    // restrict = async (element) => {
    //     let elType = element.nodeName.toLowerCase();
    
    //     switch (elType) {
    //         case 'iframe':
    //             await this.restrictIframe(element);
    //             break;
    //         default:
    //             break;
    //     }
    // }

    restrictIframes = async () => {
        let iframes = document.querySelectorAll('iframe');

        iframes.forEach((iframe) => {
            let src = iframe.src;

            if (src.includes('youtube')) {
                iframe.setAttribute('data-src', src);
                src = src.replace('https://www.youtube.com', 'https://www.youtube-nocookie.com');
                iframe.src = src;
            } else {
                iframe.removeAttribute('src');
                iframe.style.display = 'none';
            }
        });
    }
}

export default new Restriction();