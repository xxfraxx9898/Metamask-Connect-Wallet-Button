$(document).ready(function() {
    $('button.connect').click(function() {
        if (window.ethereum) {
            ethereum.request({method: 'eth_requestAccounts'}).then((accounts) => {
                const account = accounts[0];
                $('.address').show();
                $('.address .my_address').text(account);
            })
        }
    });
});
