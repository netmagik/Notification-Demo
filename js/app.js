(async () => {

    // create and show notification
    const showNotification = () => {
        // create notification
        const notification = new Notification('Click Me!!!!!', {
            body: 'CLICK ME!!!!',
            icon: './img/irina.jpg'
        });
        
        // close the notification after 10 secons
        setTimeout(() => {
            notification.close();
        }, 10 * 1000);
        
        // navigate to a URL
        notification.addEventListener('click', () => {
            window.open('https://www.netmagik.com');
        });
    }

        // show an error message
    const showError = () => {
        const error = document.querySelector('.error');
        error.style.display = 'block';
        error.textContent = 'You blocked the notification';
    }

    // check to see if the permission is granted. 
    //If the user didn't take any action, request it

    let granted = false;

    if (Notification.permission === 'granted') {
        granted = true;
    } else if (Notification.permission !== 'denied') {
        let permission = await Notification.requestPermission();
        granted = permission === 'granted' ? true : false;
    }

    granted ? showNotification() : showError();

})();