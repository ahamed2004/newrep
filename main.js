var xhr = new XMLHttpRequest()

xhr.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        var parsed = JSON.parse(this.responseText)
        console.log(parsed)
    }
}

xhr.open('get' , "")
xhr.send()
