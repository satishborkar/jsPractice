var ApiUtils  = {
    checkStatus:function(){
        if(res.status >= 200 && res.status < 300){
            return res.json();
        }else{
            let error = new Error(res.statusText);
            error.res = res;
            throw error;
        }
    }
}

export {ApiUtils as default };