import * as Cookies from './cookies';
class Restriction {
    restrictAll = async () => {
        let elements = document.querySelectorAll('iframe, script');
    
        elements.forEach(async (element) => {
            let elType = element.nodeName.toLowerCase();

            switch (elType) {
                case 'iframe':
                    await this.restrictIframe(element);
                    break;
                case 'script':

                    break;
                default:
                    break;
            }
        });
    }

    allowAll = async () => {
        await Cookies.saveConsent();
    }

    restrictIframe = async (el) => {
        let iframe = el;

        let src = iframe.src;

        if (src.includes('youtube')) {
            iframe.setAttribute('data-src', src);
            src = src.replace('https://www.youtube.com', 'https://www.youtube-nocookie.com');
            iframe.src = src;
        } else {
            iframe.removeAttribute('src');
            iframe.style.display = 'none';
        }
    }
}

export default new Restriction();