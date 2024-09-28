let unranked=[],rank=[],characterList=[];
let cnt,num,leftnow,rightnow,rankednum,question;
window.onload=function(){
	cnt=localStorage.getItem("cnt");
	num=localStorage.getItem("num");
	for(let i=1;i<=cnt;i++){
		let character={
			id:i,
			name:localStorage.getItem("character"+i)
		}
		characterList.push(character);
	}
	document.getElementById("questionCnt").innerHTML="问题1";
	question=1;
	leftnow=1,rightnow=2;
	document.getElementById("left").innerText=characterList[0].name;
	document.getElementById("right").innerText=characterList[1].name;
}
function endGame(){
	for(let i=0;i<num;i++){
		localStorage.setItem("rank"+(i+1),rank[i]);
	}
	window.location.href="result.html";
}
function addrank(id){
	for(let i=0;i<characterList.length;i++){
		if(characterList[i].id===id){
			rank.push(characterList[i].name);
			characterList.splice(i,1);
			break;
		}
	}
	if(characterList.length===1)
		rank.push(characterList.pop().name);
	if(rank.length>=num)
		endGame();
}
function left(){
	if(rightnow==characterList[characterList.length-1].id){
		addrank(leftnow);
		let flag=0;
		while(flag===0&&unranked.length>0){
			let topcharacter=unranked.pop();
			for(let character of characterList){
				if(character.id>topcharacter.beaten){
					leftnow=topcharacter.id;
					rightnow=character.id;
					document.getElementById("left").innerText=topcharacter.name;
					document.getElementById("right").innerText=character.name;
					flag=1;
					break;
				}
			}
			if(flag===0)
				addrank(topcharacter.id);
		}
		if(flag===0&&unranked.length===0){
			leftnow=characterList[0].id;
			rightnow=characterList[1].id;
			document.getElementById("left").innerText=characterList[0].name;
			document.getElementById("right").innerText=characterList[1].name;
		}
	}
	else{
		for(let i=0;i<characterList.length;i++){
			if(characterList[i].id===rightnow){
				rightnow=characterList[i+1].id;
				document.getElementById("right").innerText=characterList[i+1].name;
				break;
			}
		}
	}
	question++;
	document.getElementById("questionCnt").innerHTML="问题"+question;
}
function right(){
	let name;
	for(let character of characterList){
		if(character.id===leftnow){
			name=character.name;
			break;
		}
	}
	let leftcharacter={
		id:leftnow,
		name:name,
		beaten:rightnow
	}
	unranked.push(leftcharacter);
	if(rightnow==characterList[characterList.length-1].id){
		addrank(rightnow);
		let flag=0;
		while(flag===0&&unranked.length>0){
			let topcharacter=unranked.pop();
			for(let character of characterList){
				if(character.id>topcharacter.beaten){
					leftnow=topcharacter.id;
					rightnow=character.id;
					document.getElementById("left").innerText=topcharacter.name;
					document.getElementById("right").innerText=character.name;
					flag=1;
					break;
				}
			}
			if(flag===0)
				addrank(topcharacter.id);
		}
		if(flag===0&&unranked.length===0){
			leftnow=characterList[0].id;
			rightnow=characterList[1].id;
			document.getElementById("left").innerText=characterList[0].name;
			document.getElementById("right").innerText=characterList[1].name;
		}
	}
	else{
		leftnow=rightnow;
		for(let i=0;i<characterList.length;i++){
			if(characterList[i].id===rightnow){
				rightnow=characterList[i+1].id;
				document.getElementById("left").innerText=characterList[i].name;
				document.getElementById("right").innerText=characterList[i+1].name;
				break;
			}
		}
	}
	
	question++;
	document.getElementById("questionCnt").innerHTML="问题"+question;
}