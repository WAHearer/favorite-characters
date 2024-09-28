var cnt=0;
function add(){
	cnt++;
	let newInput=document.createElement("input");
	newInput.setAttribute("id","input"+cnt);
	newInput.setAttribute("style","margin:5 10px");
	document.getElementById("input").appendChild(newInput);
	let newOption=document.createElement("option");
	newOption.text=cnt;
	newOption.setAttribute("value",cnt);
	document.getElementById("select").appendChild(newOption);
}
function del(){
	if(cnt===0)
		return;
	cnt--;
	document.getElementById("input").removeChild(document.getElementById("input").lastChild);
	document.getElementById("select").removeChild(document.getElementById("select").lastChild);
}
function start(){
	if(cnt<2){
		alert("请添加至少2名角色！");
		return;
	}
	for(let i=1;i<=cnt;i++){
		if(document.getElementById("input"+i).value===""){
			alert("请填写空白栏！");
			return;
		}
	}
	localStorage.setItem("cnt",cnt);
	localStorage.setItem("num",document.getElementById("select").value);
	for(let i=1;i<=cnt;i++){
		localStorage.setItem("character"+i,document.getElementById("input"+i).value);
	}
	window.location.href="game.html";
}