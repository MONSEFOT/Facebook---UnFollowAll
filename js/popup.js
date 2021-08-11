
//this function will get the user current taab on google chrome which the user runs the extension in 
async function getCurrentTab() {
    //this options are the requirements of a user current page in google chrome
    //this means that the tab that the user is browsing 
    let queryOptions = { active: true, currentWindow: true };

    //now we sould compare the requirements in the top with all opened tabs in the browser and return the current one
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab;
}



//this is the main process function 
//here the plugin will take the permision to get in your facebook browser page
//and run the unfollow script

document.querySelector('button[type="button"]').addEventListener('click', () => {

    //it will get the current tab on the browser
    getCurrentTab().then(tab => {

        //executing the script of unfollow all people
        chrome.scripting.executeScript(
            {
                target: { tabId: tab.id },
                files: ['js/script.js'],
            },
            () => {
                //print done when the script is executed
                console.log("[+] Done");
                
            }
        );
    });
})