document.getElementById('btn-completed 1')
    .addEventListener('click',function(){
        alert("Board updated Successfully");

        const taskVal = document.getElementById('task-assigned').innerText
        document.getElementById('task-assigned').innerText = taskVal-1

        const navVal = document.getElementById('nav-checkbox').innerText
        document.getElementById('nav-checkbox').innerText= parseInt(navVal) +1

        // new element create
        // const newdivelement = document.createElement('div')
        const newelment = document.createElement('p')
        newelment.className = "bg-purple-50 p-5 rounded-xl space-x-5 space-y-10 mx-5"

        // time function
        function getFormattedTime() {
            let now = new Date();
            let hours = now.getHours();
            let minutes = now.getMinutes();
            let seconds = now.getSeconds();
            let ampm = hours >= 12 ? "PM" : "AM";
        
            hours = hours % 12 || 12; // Convert 24-hour format to 12-hour format
            minutes = minutes.toString().padStart(2, "0");
            seconds = seconds.toString().padStart(2, "0");
        
            return `${hours}:${minutes}:${seconds} ${ampm}`;
        }
        
        const time = getFormattedTime();



        // add time in new element
        newelment.innerText = 'You Have completed the task fix Mobile Button Issue at' + time

        // adding newpara to new div
        // newdivelement.appendChild(newelment)

        // adding the newelement in parent 
        document.getElementById('activity-log').appendChild(newelment)


        this.disabled = true

    })
document.getElementById('btn-completed 2')
    .addEventListener('click',function(){
        alert("Board updated Successfully");

        const taskVal = document.getElementById('task-assigned').innerText
        document.getElementById('task-assigned').innerText = taskVal-1

        const navVal = document.getElementById('nav-checkbox').innerText
        document.getElementById('nav-checkbox').innerText= parseInt(navVal) +1

        // new element create
        // const newdivelement = document.createElement('div')
        const newelment = document.createElement('p')
        newelment.className = "bg-purple-50 p-5 rounded-xl space-x-5 space-y-10 mx-5"

        // time function
        function getFormattedTime() {
            let now = new Date();
            let hours = now.getHours();
            let minutes = now.getMinutes();
            let seconds = now.getSeconds();
            let ampm = hours >= 12 ? "PM" : "AM";
        
            hours = hours % 12 || 12; // Convert 24-hour format to 12-hour format
            minutes = minutes.toString().padStart(2, "0");
            seconds = seconds.toString().padStart(2, "0");
        
            return `${hours}:${minutes}:${seconds} ${ampm}`;
        }
        
        const time = getFormattedTime();

        // text part
        const taskName = document.getElementById('item-2').innerText

        // add time in new element
        newelment.innerText = 'You Have completed the ' + taskName + ' Issue at' + time

        // adding newpara to new div
        // newdivelement.appendChild(newelment)

        // adding the newelement in parent 
        document.getElementById('activity-log').appendChild(newelment)


        this.disabled = true

    })
document.getElementById('btn-completed 3')
    .addEventListener('click',function(){
        alert("Board updated Successfully");

        const taskVal = document.getElementById('task-assigned').innerText
        document.getElementById('task-assigned').innerText = taskVal-1

        const navVal = document.getElementById('nav-checkbox').innerText
        document.getElementById('nav-checkbox').innerText= parseInt(navVal) +1

        // new element create
        // const newdivelement = document.createElement('div')
        const newelment = document.createElement('p')
        newelment.className = "bg-purple-50 p-5 rounded-xl space-x-5 space-y-10 mx-5"

        // time function
        function getFormattedTime() {
            let now = new Date();
            let hours = now.getHours();
            let minutes = now.getMinutes();
            let seconds = now.getSeconds();
            let ampm = hours >= 12 ? "PM" : "AM";
        
            hours = hours % 12 || 12; // Convert 24-hour format to 12-hour format
            minutes = minutes.toString().padStart(2, "0");
            seconds = seconds.toString().padStart(2, "0");
        
            return `${hours}:${minutes}:${seconds} ${ampm}`;
        }
        
        const time = getFormattedTime();

        const taskName = document.getElementById('item-3').innerText

        // add time in new element
        newelment.innerText = 'You Have completed the ' + taskName + ' Issue at' + time

        // adding newpara to new div
        // newdivelement.appendChild(newelment)

        // adding the newelement in parent 
        document.getElementById('activity-log').appendChild(newelment)


        this.disabled = true

    })
document.getElementById('btn-completed 4')
    .addEventListener('click',function(){
        alert("Board updated Successfully");

        const taskVal = document.getElementById('task-assigned').innerText
        document.getElementById('task-assigned').innerText = taskVal-1

        const navVal = document.getElementById('nav-checkbox').innerText
        document.getElementById('nav-checkbox').innerText= parseInt(navVal) +1

        // new element create
        // const newdivelement = document.createElement('div')
        const newelment = document.createElement('p')
        newelment.className = "bg-purple-50 p-5 rounded-xl space-x-5 space-y-10 mx-5"

        // time function
        function getFormattedTime() {
            let now = new Date();
            let hours = now.getHours();
            let minutes = now.getMinutes();
            let seconds = now.getSeconds();
            let ampm = hours >= 12 ? "PM" : "AM";
        
            hours = hours % 12 || 12; // Convert 24-hour format to 12-hour format
            minutes = minutes.toString().padStart(2, "0");
            seconds = seconds.toString().padStart(2, "0");
        
            return `${hours}:${minutes}:${seconds} ${ampm}`;
        }
        
        const time = getFormattedTime();

        const taskName = document.getElementById('item-4').innerText

        // add time in new element
        newelment.innerText = 'You Have completed the ' + taskName + ' Issue at' + time

        // adding newpara to new div
        // newdivelement.appendChild(newelment)

        // adding the newelement in parent 
        document.getElementById('activity-log').appendChild(newelment)


        this.disabled = true

    })
document.getElementById('btn-completed 5')
    .addEventListener('click',function(){
        alert("Board updated Successfully");

        const taskVal = document.getElementById('task-assigned').innerText
        document.getElementById('task-assigned').innerText = taskVal-1

        const navVal = document.getElementById('nav-checkbox').innerText
        document.getElementById('nav-checkbox').innerText= parseInt(navVal) +1

        // new element create
        // const newdivelement = document.createElement('div')
        const newelment = document.createElement('p')
        newelment.className = "bg-purple-50 p-5 rounded-xl space-x-5 space-y-10 mx-5"

        // time function
        function getFormattedTime() {
            let now = new Date();
            let hours = now.getHours();
            let minutes = now.getMinutes();
            let seconds = now.getSeconds();
            let ampm = hours >= 12 ? "PM" : "AM";
        
            hours = hours % 12 || 12; // Convert 24-hour format to 12-hour format
            minutes = minutes.toString().padStart(2, "0");
            seconds = seconds.toString().padStart(2, "0");
        
            return `${hours}:${minutes}:${seconds} ${ampm}`;
        }
        
        const time = getFormattedTime();

        const taskName = document.getElementById('item-5').innerText

        // add time in new element
        newelment.innerText = 'You Have completed the ' + taskName + ' Issue at' + time

        // adding newpara to new div
        // newdivelement.appendChild(newelment)

        // adding the newelement in parent 
        document.getElementById('activity-log').appendChild(newelment)


        this.disabled = true

    })
document.getElementById('btn-completed 6')
    .addEventListener('click',function(){
        alert("Board updated Successfully");
        alert("Congrats!!! You have completed all the current task");

        const taskVal = document.getElementById('task-assigned').innerText
        document.getElementById('task-assigned').innerText = taskVal-1

        const navVal = document.getElementById('nav-checkbox').innerText
        document.getElementById('nav-checkbox').innerText= parseInt(navVal) +1

        // new element create
        // const newdivelement = document.createElement('div')
        const newelment = document.createElement('p')
        newelment.className = "bg-purple-50 p-5 rounded-xl space-x-5 space-y-10 mx-5"

        // time function
        function getFormattedTime() {
            let now = new Date();
            let hours = now.getHours();
            let minutes = now.getMinutes();
            let seconds = now.getSeconds();
            let ampm = hours >= 12 ? "PM" : "AM";
        
            hours = hours % 12 || 12; // Convert 24-hour format to 12-hour format
            minutes = minutes.toString().padStart(2, "0");
            seconds = seconds.toString().padStart(2, "0");
        
            return `${hours}:${minutes}:${seconds} ${ampm}`;
        }
        
        const time = getFormattedTime();

        const taskName = document.getElementById('item-6').innerText

        // add time in new element
        newelment.innerText = 'You Have completed the ' + taskName + ' Issue at' + time

        // adding newpara to new div
        // newdivelement.appendChild(newelment)

        // adding the newelement in parent 
        document.getElementById('activity-log').appendChild(newelment)


        this.disabled = true

    })



document.getElementById('clear-history')
.addEventListener('click',function(){

    const rightSideActivity = document.getElementById('activity-log')

    rightSideActivity.innerHTML =''
    // rightSideActivity.remove()
        
})



document.getElementById('changeThemeButton')
    .addEventListener('click',function(){

        const randomNum = Math.round(Math.random()*10)

        if (randomNum === 1) {
            document.body.style.backgroundColor='MistyRose'
        }
        else if(randomNum === 2) {
            document.body.style.backgroundColor='Honeydew'
        }
        else if(randomNum === 3) {
            document.body.style.backgroundColor='LightCoral'
        }
        else if(randomNum === 4) {
            document.body.style.backgroundColor='PowderBlue'
        }
        else if(randomNum === 5) {
            document.body.style.backgroundColor='Beige'
        }
        else if(randomNum === 6) {
            document.body.style.backgroundColor='LightPink'
        }
        else if(randomNum === 7) {
            document.body.style.backgroundColor='Cyan'
        }
        else if(randomNum === 8) {
            document.body.style.backgroundColor='Lime'
        }
        else if(randomNum === 9) {
            document.body.style.backgroundColor='Gray'
        }
        else if(randomNum === 10) {
            document.body.style.backgroundColor='Lavender'
        }
        
    })




    const today = new Date();
    const options = { weekday: 'long', month: 'short', day: 'numeric', year: 'numeric' };
    const formattedDate = today.toLocaleDateString('en-US', options);
    

    document.getElementById('today-time').innerText = formattedDate