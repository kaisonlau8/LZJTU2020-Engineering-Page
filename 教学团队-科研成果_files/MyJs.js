//登陆检验
function CheckLogin()
{
    if (!Check("admin_user_name","用户名不可为空"))
	{
		return false;	
	}
	if (!Check("admin_user_pasd","密码不可为空"))
	{
		return false;	
	}
	
	return true;
}


















function SeeType(str)
{		
	str1="s"+ str +"s"
	var all=document.getElementsByTagName("tr");	  
	for (i=0;i<all.length;i++)
	{			
		if (-1!=all[i].id.indexOf(str1))
		{
			if (document.getElementById(all[i].id).style.display=="block")
			{
				document.getElementById(all[i].id).style.display="none";
			}
			else
			{
				document.getElementById(all[i].id).style.display="block";
			}
		}
					
	}			
}



function biaoqian(str)
{
    document.getElementById("id21").className="";
    document.getElementById("id22").className="";
    
    document.getElementById("iid21").style.display="none";
    document.getElementById("iid22").style.display="none";
    
    document.getElementById(str).className="nav_v index";
    document.getElementById("i"+ str +"").style.display="block";
}















//---------------------------------------------------------------------------------------------------子函数部分
function Check(str,messge)
{
	var content=document.getElementById(str).value;
	if (content=="")
	{
		alert(messge);
		return false;
	}
	else
	{
		return true;
	}
}