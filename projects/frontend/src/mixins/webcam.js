class Webcam {
    /**
     * Webcam constructor.
     *
     * @param {HTMLVideoElement} videoElement
     * @param {FacingMode} [facingMode = "user"]
     * @param {HTMLCanvasElement} [canvasElement]
     * @param {HTMLAudioElement} [snapSoundElement]
     */
    constructor(videoElement, facingMode = "user", canvasElement, snapSoundElement) {
        this._webcamElement = videoElement;
        this._webcamElement.width = this._webcamElement.width || 640;
        this._webcamElement.height = this._webcamElement.height || this._webcamElement.width * (3 / 4);
        this._facingMode = facingMode;
        this._webcamList = [];
        this._streamList = [];
        this._selectedDeviceId = '';
        this._canvasElement = canvasElement;
        this._snapSoundElement = snapSoundElement;
        this._devices = []
    }

    devices(){
        return navigator.mediaDevices.enumerateDevices()
    }


    list(){ 
        
     
       
        const devic = {
            videos: [],
            audios: [],
        }

        navigator.mediaDevices.enumerateDevices().value
        .then(function(devices) {
            devic = devices;
        })
        .catch(error => error);
        
        this._devices.map((device, index) => {
           if(device.kind == 'videoinput'){
                devices.videos.push(device)
           }

           if(device.kind == 'audioinput'){
                devices.audios.push(device)
            }
        })
        
        return devices
            
    }



    urltoFile(url, filename, mimeType){
        return (fetch(url)
            .then(function(res){return res.arrayBuffer();})
            .then(function(buf){return new File([buf], filename,{type:mimeType});})
        );

    }
}

export default Webcam;