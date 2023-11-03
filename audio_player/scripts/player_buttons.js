class Player{
    constructor(){
        
        this.audio_file = document.getElementById("audio_file");
        this.isPlayed;

        this.play = document.getElementById("play");
        this.play.addEventListener("click",()=>{this.play_pause();});

        this.audios =[];
        this.audios[0] = "https://node-32.zeno.fm/wrh7quprzxquv?rj-ttl=5&rj-tok=AAABcmdFJoYAkbr8Ndo-nZkgnQ";
        this.audios[1] = "https://listen.radioking.com/radio/250102/stream/294397";
        this.audios[2] = "https://node-17.zeno.fm/rq40edfn3reuv.mp3";
        this.audios[3] = "https://stream.zeno.fm/uthkdw3mb";
        this.audios[4] = "https://stream.zeno.fm/z97k8ry9sxquv";      
        this.audios[5] = "http://stream.zeno.fm/rnbifn09oqotv";
        this.audios[6] = "https://rfimonde64k.ice.infomaniak.ch/rfimonde-64.mp3";
        this.audios[7] = "https://listen.senemultimedia.net:8112/stream";
        this.audios[8] = "https://betelgeuse.dribbcast.com/proxy/retrofm?mp=/stream";
        this.audios[9] = "https://betelgeuse.dribbcast.com/proxy/atidiania?mp=/stream";
        this.audios[10] = "https://betelgeuse.dribbcast.com/proxy/almaktoum?mp=/stream";      
        this.audios[11] = "https://stream-33.zeno.fm/q631qfx62neuv?zs=FjhvJ0RAT7i299KpdIXGLQ"; 
        this.audios[12] = "https://betelgeuse.dribbcast.com/proxy/xassidaonline?mp=/stream"; 
        this.audios[13] = "https://betelgeuse.dribbcast.com/proxy/aliounesall?mp=/stream"; 
        this.audios[14] = "https://betelgeuse.dribbcast.com/proxy/serignesammbaye?mp=/stream"; 
        this.audios[15] = "https://betelgeuse.dribbcast.com/proxy/coran24?mp=/stream";  
        this.audios[16] = "https://betelgeuse.dribbcast.com/proxy/tafsircoran?mp=/stream";
                     
    
        this.names = [];
        this.names[0] = "RFM 99.0";
        this.names[1] = "i RADIO";
        this.names[2] = "SUD FM 98.5";
        this.names[3] = "RADIO SÉNÉGAL 92.0";
        this.names[4] = "ZIK FM 87.9";
        this.names[5] = "AFRICA 7";
        this.names[6] = "R F I";
        this.names[7] = "RADIO THIOSSANE";
        this.names[8] = "RETRO MUSIQUE";
        this.names[9] = "AT TIDJANIYA FM";
        this.names[10] = "AL MAKTOUM FM";
        this.names[11] = "LAMP FALL FM";
        this.names[12] = "XASSIDA FM";
        this.names[13] = "OUSTAZ ALIOUNE SALL FM";
        this.names[14] = "SERIGNE SAAM MBAYE FM";
        this.names[15] = "CORAN FM";
        this.names[16] = "TAFSIR FM";
        
        this.numberAudio =0;

     

        this.next = document.getElementById("next");
        this.next.addEventListener("click",()=>{
            this.next_audio();
        });
           

        this.back = document.getElementById("back");
        this.back.addEventListener("click",()=>{
            
          this.back_audio();  
         
        });

        this.setSource();
    }
    play_pause(){
        if(this.isPlayed==false){
            this.play.src = "./img/pause.png";
            this.audio_file.play();
            this.isPlayed=true;
        }
        else{
            this.play.src = "./img/play.png";
            this.audio_file.pause();
            this.isPlayed=false;
        }
    }

    next_audio(){
         if(this.numberAudio<this.audios.length-1){
                ++this.numberAudio;
                this.isPlayed = false; 
                }
         else   {
                this.numberAudio = 0;
                }
                this.setSource();
    }
    back_audio(){
        if(this.numberAudio>0){
            --this.numberAudio;
            this.isPlayed = false; 
         }
         else{
            this.numberAudio = this.audios.length -1;
            
         }
      
         this.setSource();
    }
    setSource(){
 
    document.getElementById("radio-title").innerHTML = this.names[this.numberAudio];
    document.getElementById("audio_file").src = this.audios[this.numberAudio];

    this.play_pause();
    }

}
onload = new Player();