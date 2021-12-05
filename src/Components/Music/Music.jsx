const Music =()=>{

   let jazz = [
       {id: 1, songTitle: 'Coquille du terre', performer: 'Zhenya Strigalev & Federico Dannemann', time: '05:03'},
       {id: 2, songTitle: 'Confession', performer: 'Makar Kashitsyn', time: '07:50'},
       {id: 3, songTitle: 'Far Away', performer: 'Natalia Skvortsova Trio', time: '07:29'},
       {id: 4, songTitle: 'A Rest', performer: 'Sasha Drabov', time: '04:21'},
       {id: 5, songTitle: 'Midnight Blues', performer: 'Luke Jones', time: '02:12'},
    ];
   
    let res = jazz.map(function(item) {
       return (  <div key={item.id}> 
            <div class="musicJassOne">
               <div class='songTitleOne'>
            <p> {item.songTitle}</p>
            <p>{item.performer}</p>
            </div>
            <div lass='timeOne'>
            <p>{item.time}</p></div>
            </div>
       </div>)
    });
    
   
    return ( 
    <><h1>TOP-5 Jazz Music</h1>
       <div class="musicJass">
          
          {res}</div>
       </>
    )
   }
    export default Music;