const url ="https://gorest.co.in/public-api/users?_format=json&access-token=QclmzWZ6sr21fVsUx_JgXwPnSpJG4UgLGTXb";
const syncronous = true;
const method = "GET";
const ajax = new XMLHttpRequest();
ajax.open(method,url,syncronous);
ajax.onload = () =>{
    const results = JSON.parse(ajax.response);
    const table1 = document.querySelector("#table1");
    //destructure
    const {success,code,message,totalCount,pageCount,currentPage,perPage} = results._meta;
    const {limit,remaining,reset} =results._meta.rateLimit;
    table1.innerHTML +=`
        <tr>
            <td>${success}</td>
            <td>${code}</td>
            <td>${message}</td>
            <td>${totalCount}</td>
            <td>${pageCount}</td>
            <td>${currentPage}</td>
            <td>${perPage}</td>
            <td>
                ${limit}-
                ${remaining}-
                ${reset}
             </td>
        </tr>
    `;
    //create table2
    const table2 = document.querySelector("#table2");
    //loop (reult)
    results.result.forEach(item =>{
        //destructure
        const {id,first_name,last_name,gender,dob,email,phone,website,address,status} =item;
        const {self,edit,avatar} = item._links
        table2.innerHTML += `
            <tr>
                <td>${id}</td>
                <td>${first_name}</td>
                <td>${last_name}</td>
                <td>${gender}</td>
                <td>${dob}</td>
                <td>${email}</td>
                <td>${phone}</td>
                <td>${website}</td>
                <td>${address}</td>
                <td>${status}</td>
                <td>
                    ${self.href},
                    ${edit.href},
                    ${avatar.href}
                </td>
            </tr>
        `;
    })
}
ajax.send();