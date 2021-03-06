var pattern=new Array();
var i=5,count=0,clickPermission=false;
var clickTimer=0,endClickTimer=false;
var curLevel=0;
localStorage.setItem("maxLevel",int);
function levelMore()
{
i++;
}
/*--------------------------------------------------------------------------------*/
function getImg(imgId)
{
	if(clickPermission)
	{
		/*
		clicked correct  -1
		clicked wrong     2
		unclicked correct 1
		unclicked wrong   0
		*/
		switch(pattern[imgId-1])
		{
			case 1:
				document.getElementById(imgId).style.background="red";
				count++;
				document.getElementById("countTag").innerHTML=i-count;
				clickTimer=0;
				pattern[imgId-1]=-1; //turn it into clicked correct one. ("-1")
			break;
			case 0:
				count++;
				document.getElementById("countTag").innerHTML=i-count;
				document.getElementById(imgId).style.background="red";
				pattern[imgId-1]=2; //turn it into clicked wrong one. ("2")
			break;
			case -1:
				//if that is one of the correct ones
				count--;
				document.getElementById("countTag").innerHTML=i-count;
				document.getElementById(imgId).style.background="black";
				pattern[imgId-1]=1; //turn it into unclicked correct one. ("1")
			break;
			case 2:
				//of if it was one of the wrong ones
				count--;
				document.getElementById("countTag").innerHTML=i-count;
				document.getElementById(imgId).style.background="black";
				pattern[imgId-1]=0;//turn it into unclicked wrong one. ("0")
			break;
		}
		//once all the clicking is over
		if(count>=i)
		{
			for(var y=0;y<25;y++) // check for a wrong tile clicked
			{
				if(pattern[y]==2) // if there is a clicked wrong ("2")
				{
					count=0;					
					document.getElementById("countTag").innerHTML="--";
					//document.getElementById("wrong-message").style.display="inline";
					//document.getElementById("wrong-message").innerHTML="wrong tiles detected";
					//Avgrund.show( "#wrong-popup" );
					clickPermission=false;
					endClickTimer=true;
					if(curLevel==0)//if the user is a fresher
					{						
						localStorage['maxLevel']=0;						
					}
					else
					{		
						if(localStorage["maxLevel"]<curLevel)//if the user scored greater than ever before
						{
							localStorage["maxLevel"]=curLevel;//make the new score as the max score
							document.getElementById("wrong-message").style.display="inline";
							document.getElementById("wrong-message").innerHTML=" congratulations!!! you have scored "
							+localStorage['maxLevel']+" you are the highest scorer!! ";
							/*alert(" congratulations!!! you have scored "+localStorage['maxLevel']+
								" you are the highest scorer!! ");*/
							Avgrund.show( "#wrong-popup" );
						}
						else
						{
							alert(" high score is "+localStorage['maxLevel']+" and you scored "+curLevel);
						}
					}
					return;
				}
			}
			count=0;
			document.getElementById("countTag").innerHTML="--";
			Avgrund.show( "#correct-popup" );
			clickPermission=false;
			endClickTimer=true;
			curLevel++;
			/* if(localStorage["maxLevel"]<curLevel)
			{
				localStorage["maxLevel"]=curLevel;
			} */
			//localStorage["maxLevel"]=curLevel;			
		}		
	}
}
/*--------------------------------------------------------------------------------*/
function resetGrid()
{	
	for(var n=0;n<25;n++)
	{
		document.getElementById(n+1).style.background="black";
	}	
	for(var n=0;n<25;n++)/*make all the array elements to zero*/
	{
		document.getElementById(n+1).style.background="black";
		pattern[n]=0;
	}	
	endClickTimer=true;
	clickTimer=0;
	count=0;
	clickPermission=false;
	document.getElementById("clickTimerTag").innerHTML="--";
	document.getElementById("countTag").innerHTML="--";
	Avgrund.show( "#reset-popup" );
	localStorage["maxLevel"]=0;
}
/*--------------------------------------------------------------------------------*/
function makePattern()
{
	
	document.getElementById("countTag").innerHTML=i-count;
	for(var n=0;n<25;n++)/*initialize all the array elements to zero*/
	{
		document.getElementById(n+1).style.background="black";
		pattern[n]=0;
	}
	var m;
	var j=0;
	while(j<i)//select 'i' elements randomly from 'pattern' array and make them true
	{
		var rndmNum = Math.floor ((Math.random () * 100) % 25);
		if(!pattern[rndmNum])
		{
			pattern[rndmNum]++;
			j++;
		}		
 	}	
	for(m=0;m<=25;m++)
	{
		if(pattern[m])
		{
			document.getElementById(m+1).style.background="red";
		}
	}
	setTimeout(function(){
		for(var n=0;n<25;n++)
		{
			document.getElementById(n+1).style.background="black";
		}
		clickTimer=0;
		startClickTimer();
		clickPermission=true;
	},1000);
}
/*--------------------------------------------------------------------------------*/
function startClickTimer()
{
	if(endClickTimer)
	{
		endClickTimer=false;
		clickTimer=0;
		document.getElementById("clickTimerTag").innerHTML="--";
		return;
	}
	if(clickTimer>=5)
	{
		count=0;
		document.getElementById("wrong-message").style.display="inline";
		document.getElementById("wrong-message").innerHTML="timeout";
		Avgrund.show( "#wrong-popup" );
		clickPermission=false;
		return;
	}
	setTimeout(function(){
		clickTimer+=1;
		document.getElementById("clickTimerTag").innerHTML=clickTimer;
		startClickTimer();
	},1000);
}
/*--------------------------------------------------------------------------------*/
function printArray()
{
	document.write(pattern);
}
function showLevel()
{
	alert(localStorage["maxLevel"]);
}