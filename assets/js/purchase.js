/*豆花配料*/
function onCheckBox(checkbox)
{
	var sample = document.getElementsByName("sample");
	var maxChoices = 3;
	var flag = 0;
	
	for(var i=0; i<sample.length; i++)
	{
		if(sample[i].checked)
		{
			flag ++;
		}
	}
	if(flag >= maxChoices)
	{
		for(var k=0; k<sample.length; k++)
		{
			if(!sample[k].checked)
			{
				sample[k].disabled = true;
			}
		}
	}
	else
	{
		for(var p=0; p<sample.length; p++)
		{
			if(!sample[p].checked)
			{
				sample[p].disabled = false;
			}
		}
	}
}
 
function onSubmitVote()
{
	var sample = document.getElementsByName("sample");
	var choices = 0;
	var maxChoices = 3;
	
	for(var j=0; j<sample.length; j++)
	{
		if(sample[j].checked)
		{
			choices ++;
		}
	}
	if(choices == 0)
	{
		alert("請選擇三種配料");
	}
	else if(choices > maxChoices)
	{
		alert("選項不得超過三種配料"+ maxChoices + "個");
	}
	else
	{
		alert("提交成功");
	}
}
/*冰品配料*/
function onCheckBox(checkbox)
{
	var sample1 = document.getElementsByName("sample1");
	var maxChoices_1 = 4;
	var flag_1 = 0;
	
	for(var x=0; x<sample1.length; x++)
	{
		if(sample1[x].checked)
		{
			flag_1 ++;
		}
	}
	if(flag_1 >= maxChoices_1)
	{
		for(var y=0; y<v.length; y++)
		{
			if(!sample1[y].checked)
			{
				sample1[y].disabled = true;
			}
		}
	}
	else
	{
		for(var z=0; z<sample1.length; z++)
		{
			if(!sample1[z].checked)
			{
				sample1[z].disabled = false;
			}
		}
	}
}
 
function onSubmitVote1()
{
	var sample1 = document.getElementsByName("sample1");
	var choices_1 = 0;
	var maxChoices_1 = 4;
	
	for(var w=0; w<sample1.length; w++)
	{
		if(sample1[w].checked)
		{
			choices_1 ++;
		}
	}
	if(choices_1 == 0)
	{
		alert("請選擇四種配料");
	}
	else if(choices_1 > maxChoices_1)
	{
		alert("選項不得超過四種配料"+ maxChoices_1 + "個");
	}
	else
	{
		alert("提交成功");
	}
}
/*數量增減*/
(function(){
	window.inputNumber=function(el){
		var min =el.attr('min')||false;
		var max =el.attr('max')||false;

		var els={};
		els.dec = el.prev();
		els.inc = el.next();
		el.each(function(){
			init($(this));
		});
		function init(el){
			els.dec.on('click',decrement);
			els.inc.on('click',increment);
			function decrement(){
				var value = el[0].value;
				value--;
				if(!min||value>=min){
					el[0].value=value;
				}			
			}
		}
	}
})();
inputNumber($('.input-number'));