var pattern=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
var i=5,count=0,clickPermission=false;
function levelMore()
{
i++;
}
function getImg(imgId)
{
	if(clickPermission)
	{
		document.getElementById(imgId).style.background="red";
		for(var y=i;y<=25;y++)
		{
			if(imgId==pattern[y])
			{
				count=0;
				alert("game over");
				clickPermission=false;
			}
		}
		count++;
			if(count>=i)
			{
				count=0;
				alert("correct");
				clickPermission=false;
			}
	}
}
function resetGrid()
{	
	for(var n=0;n<25;n++)
	{
		document.getElementById(n+1).style.background="black";
	}	
}
function makePattern()
{
	for(var n=0;n<25;n++)
	{
		document.getElementById(n+1).style.background="black";
		pattern[n]=0;
	}	
	var m;	
	var j=0;
	while(j<=25)
	{
		var rndmNum = Math.floor ((Math.random () * 100) % 25);		
		if(!pattern[rndmNum])
		{			
			pattern[rndmNum]=j++;
		}		
 	}	
	for(m=0;m<i;m++)
	{
		document.getElementById(pattern[m]).style.background="red";
		//document.getElementById(pattern[m]).style.setAttribute("style","background-color: yellow;");
		pattern[m]=-1;
	}
	setTimeout(function(){
		for(var n=0;n<25;n++)
		{
			document.getElementById(n+1).style.background="black";
		}
		clickPermission=true;
	},1000);
}
function printArray()
{
	document.write(pattern);
}
