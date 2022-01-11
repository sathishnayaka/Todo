const api_url="https://jsonplaceholder.typicode.com/todos";
var pend=document.getElementsByTagName("button")[0];
var fin=document.getElementsByTagName("button")[1];
var to=document.getElementsByClassName("todos")[0];
var data;
async function todo(){
    const response=await fetch(api_url);
    const data=await response.json();
// fetch(api_url)
//   .then(response => response.json())
//   .then(res =>{data=res});
//   console.log(data)
// function todo(data){
    const pending=[];
    var finish=[];
    for(let i=0;i<200;i++){
        if(data[i].completed===true){
            // console.log(data[i].title)
            finish.push(data[i].title);
        }else{
            // console.log(data[i].title)
            pending.push(data[i].title);
        }
    }
    pend.onclick=function(){
        // console.log("satheesh naayajaa kaka");
        // document.getElementsByClassName("secondul").style.display="None";
        var para=document.createElement("ul");
        para.setAttribute("class","firstul");
        for(let i=0;i<pending.length;i++){
            let li=document.createElement("li");
            li.innerText=pending[i];
            li.style.listStyleType="None";
            li.style.color="red";
            li.style.padding="5px";
            para.appendChild(li);
        }
        to.appendChild(para);
    }
    
    fin.onclick=function(){
        // console.log("satheesh naayajaa kaka");
        // document.getElementsByClassName("firstul").style.display="None";
        var para=document.createElement("ul");
        para.setAttribute("class","secondul");
        for(let i=0;i<finish.length;i++){
            let li=document.createElement("li");
            li.innerText=finish[i];
            li.style.listStyleType="None";
            li.style.color="green";
            li.style.padding="5px";
            para.appendChild(li);
        }
        to.appendChild(para);
    }
    
    }

todo();
