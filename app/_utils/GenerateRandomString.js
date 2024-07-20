export const generateRandomString=()=>{
    const character='QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm';
    let results='';
    for (let i=0;i<4;i++){
        results+=character.charAt(Math.floor(Math.random()*character.length));

    }
    return results

}