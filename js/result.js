window.onload=function(){
	let num=localStorage.getItem("num");
	for(let i=1;i<=num;i++){
		let p=document.createElement("p");
		p.innerHTML=i+"、"+localStorage.getItem("rank"+i);
		document.getElementById("result").appendChild(p);
	}
}