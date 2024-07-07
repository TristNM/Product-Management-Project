console.log("OK")

// Trang lọc trạng thái sản phẩm
    const btnStatus = document.querySelectorAll('[button-status]');
    if(btnStatus.length > 0){
        let url = new URL( window.location.href);

        btnStatus.forEach(button => {
            button.addEventListener('click', async () =>{
                const status = button.getAttribute('button-status');
            if(status){
                url.searchParams.set("status", status);
            } else{
                url.searchParams.delete("status");
            }
            console.log(url.href)
            window.location.href = url.href
        })
    })
    }

 