export function initializeCopyToClipboard(copyButtonId, textInputId, feedbackMessageId) {
    document.getElementById(copyButtonId).addEventListener('click', function () {
        // Get the text input value
        const textToCopy = document.getElementById(textInputId).value;

        // Use Clipboard API to copy text
        navigator.clipboard.writeText(textToCopy)
            .then(() => {
                // Show feedback when the text is successfully copied
                const feedbackMessage = document.getElementById(feedbackMessageId);
                feedbackMessage.style.display = 'block';

                // Hide the feedback message after 2 seconds
                setTimeout(() => {
                    feedbackMessage.style.display = 'none';
                }, 2000);
            })
            .catch(err => {
                console.error('Failed to copy: ', err);
            });
    });
}
