 let arr=[]
  let data2=['image','name','specials','oneprice','mprice','time','payments','rating','votes','treviews']
  let data=["https://media-cdn.tripadvisor.com/media/photo-s/13/98/25/56/pizza-hut.jpg","URU Brewpark",'Continental Pizza Asian Desserts Mughal',600,50,30,{online:true,debit:true},4.3,766,512]
  let dataadd=()=>{
     let names=`Mehfil,Barbeque Nation, The Fisherman's Wharf,Bavarchi,Udipi,Nyc restro,ChaiBuiscuit,Charminar,Abu al raman,Madina,Boston restro,Neeve,Come again,Stories,Laxmi,Al darbar,Snehame,Flower,Ashok restro,Logan Paul`
     
     names=names.split(',')
     for(let i=0;i<20;i++){
       let dishes=data[2].split(" ")
        let random=Math.floor(Math.random()*4)
        let temp=dishes[0]
        dishes[0]=dishes[random]
        dishes[random]=temp
        dishes=dishes.join(" ")
        let random1=Math.floor(Math.random()*100+500)
        let random2=Math.floor(Math.random()*10+50)
        let random3=Math.floor(Math.random()*10+20)
        let random4=Math.random()*4+1
        random4=Number(random4.toFixed(1))
        let random5=Math.floor(Math.random()*200+500)
        let random6=Math.floor(Math.random()*200+400)
         let data5=['https://media-cdn.tripadvisor.com/media/photo-s/13/98/25/56/pizza-hut.jpg',names[i],dishes,random1,random2,random3,{online:Math.random()>0.4,cash:Math.random()>0.4,upi:Math.random()>0.4},random4,random5,random6]
         let data6=new restro(data5)
         arr.push(data6)
     }
    
  }
  dataadd()
  function restro(data){
    for(let i=0;i<data2.length;i++){
      this[data2[i]]=data[i]
    }
  }
  console.log(arr)
  let postdata=async ()=>{
    let res=await fetch("http://localhost:3000/todos",{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(arr)
    })
  }
postdata()
function Hello(){
  return <div>Add data</div>
}
export {Hello}