export function useClipboardCopy() {
    function copyToClipboard(text: string) {
        console.log(text);
        if (navigator.clipboard) {
            navigator.clipboard.writeText(text);
        } else {
            console.error('Clipboard API not supported');
        }
        console.log('Copied', text);
    }
    return { copyToClipboard }
}