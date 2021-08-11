//getting all div items in the menu which contains an atribute [aria-label] with a value [Toggle to follow] 
const follows = document.querySelectorAll('div[aria-label="Toggle to follow"]')
//press the unfollow button of evry div item(person) in the menu
for (let i = 0; i < follows.length; i++) {
    //pressing statement
    setTimeout(() => follows[i].click(), i * 1500)
}