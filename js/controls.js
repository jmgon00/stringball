class Controls {
    constructor() {
        this.left = false;
        this.right = false;
        this.#addKeyboardListeners();
    }

    #addKeyboardListeners(){  
        document.onkeydown=(event)=>{ /*detectar cuanndo se apriete una tecla*/
            switch(event.key){ /**si aprienta izq true**/
                case "ArrowLeft":
                    this.left=true;
                    break;
                case "ArrowRight":
                    this.right=true;
                    break;
            }
        }
        document.onkeyup=(event)=>{
            switch(event.key){ /*detectar cuanndo suelte la  tecla*/
                case "ArrowLeft":
                    this.left=false;
                    break;
                case "ArrowRight":
                    this.right=false;
                    break;
            }
        }
    }

}

export { Controls };