	function dynamicdropdown(listindex) {
		switch (listindex) {
		case "Bear1" :
	        	document.getElementById("ME").options[0]=new Option("Select bear","");
	        	document.getElementById("ME").options[1]=new Option("Bear 9","Bear9-SF");
	        	document.getElementById("ME").options[2]=new Option("Bear 1","Bear1-SF");
	        	break;
		case "Bear2" :
	        	document.getElementById("ME").options[0]=new Option("Select bear","");
	        	document.getElementById("ME").options[1]=new Option("Bear 9","Bear9-SF");
	        	document.getElementById("ME").options[2]=new Option("Bear 2","Bear2-SF");
	        	break;

		case "Bear3" :
	        	document.getElementById("MF").options[0]=new Option("Select bear","");
	        	document.getElementById("MF").options[1]=new Option("Bear 10","Bear10-SF");
	        	document.getElementById("MF").options[2]=new Option("Bear 3","Bear3-SF");
	        	break;
		case "Bear4" :
	        	document.getElementById("MF").options[0]=new Option("Select bear","");
	        	document.getElementById("MF").options[1]=new Option("Bear 10","Bear10-SF");
	        	document.getElementById("MF").options[2]=new Option("Bear 4","Bear4-SF");
	        	break;

		case "Bear5" :
	        	document.getElementById("MG").options[0]=new Option("Select bear","");
	        	document.getElementById("MG").options[1]=new Option("Bear 11","Bear11-SF");
	        	document.getElementById("MG").options[2]=new Option("Bear 5","Bear5-SF");
	        	break;
		case "Bear6" :
	        	document.getElementById("MG").options[0]=new Option("Select bear","");
	        	document.getElementById("MG").options[1]=new Option("Bear 11","Bear11-SF");
	        	document.getElementById("MG").options[2]=new Option("Bear 6","Bear6-SF");
	        	break;

		case "Bear7" :
	        	document.getElementById("MH").options[0]=new Option("Select bear","");
	        	document.getElementById("MH").options[1]=new Option("Bear 12","Bear12-SF");
	        	document.getElementById("MH").options[2]=new Option("Bear 7","Bear7-SF");
	        	break;
		case "Bear8" :
	        	document.getElementById("MH").options[0]=new Option("Select bear","");
	        	document.getElementById("MH").options[1]=new Option("Bear 12","Bear12-SF");
	        	document.getElementById("MH").options[2]=new Option("Bear 8","Bear8-SF");
	        	break;

		//Semifinals. Matchup I
		case "Bear1-SF" :
	        	document.getElementById("MI").options[0]=new Option("Select bear","");
	        	document.getElementById("MI").options[1]=new Option("Bear 1","Bear1-F");
			break;

		case "Bear2-SF" :
	        	document.getElementById("MI").options[0]=new Option("Select bear","");
	        	document.getElementById("MI").options[1]=new Option("Bear 2","Bear2-F");
	        	break;
		case "Bear9-SF" :
	        	document.getElementById("MI").options[0]=new Option("Select bear","");
	        	document.getElementById("MI").options[1]=new Option("Bear 9","Bear9-F");
	        	break;

		case "Bear3-SF" :
			document.getElementById("MI").options[2]=new Option("Bear 3","Bear3-F");
			break;
		case "Bear4-SF" :
	        	document.getElementById("MI").options[2]=new Option("Bear 4","Bear4-F");
			break;
		case "Bear10-SF" :
	        	document.getElementById("MI").options[2]=new Option("Bear 10","Bear10-F");
			break;

		//Semifinals. Matchup J
		case "Bear5-SF" :
	        	document.getElementById("MJ").options[0]=new Option("Select bear","");
	        	document.getElementById("MJ").options[1]=new Option("Bear 5","Bear5-F");
			break;
	        case "Bear6-SF" :
	        	document.getElementById("MJ").options[0]=new Option("Select bear","");
	        	document.getElementById("MJ").options[1]=new Option("Bear 5","Bear6-F");
	        	break;
		case "Bear11-SF" :
			document.getElementById("MJ").options[0]=new Option("Select bear","");
	        	document.getElementById("MJ").options[1]=new Option("Bear 11","Bear11-F");
	        	break;

		case "Bear7-SF" :
	        	document.getElementById("MJ").options[2]=new Option("Bear 7","Bear7-F");
			break;
		case "Bear8-SF" :
	        	document.getElementById("MJ").options[2]=new Option("Bear 8","Bear8-F");
			break;
		case "Bear12-SF" :
	        	document.getElementById("MJ").options[2]=new Option("Bear 12","Bear12-F");
			break;

		//Finals. Matchup K
		case "Bear1-F" :
	        	document.getElementById("MK").options[0]=new Option("Select bear","");
	        	document.getElementById("MK").options[1]=new Option("Bear 1","Bear1-W");
			break;
		case "Bear2-F" :
	        	document.getElementById("MK").options[0]=new Option("Select bear","");
	        	document.getElementById("MK").options[1]=new Option("Bear 2","Bear2-W");
	        	break;
		case "Bear3-F" :
	        	document.getElementById("MK").options[0]=new Option("Select bear","");
	        	document.getElementById("MK").options[1]=new Option("Bear 9","Bear9-W");
			break;
		case "Bear4-F" :
	        	document.getElementById("MK").options[0]=new Option("Select bear","");
	        	document.getElementById("MK").options[1]=new Option("Bear 9","Bear9-W");
			break;
		case "Bear9-F" :
	        	document.getElementById("MK").options[0]=new Option("Select bear","");
	        	document.getElementById("MK").options[1]=new Option("Bear 9","Bear9-W");
	        	break;
		case "Bear10-F" :
	        	document.getElementById("MK").options[0]=new Option("Select bear","");
	        	document.getElementById("MK").options[1]=new Option("Bear 10","Bear10-W");
			break;

		case "Bear5-F" :
	        	document.getElementById("MK").options[2]=new Option("Bear 5","Bear5-w");
			break;
		case "Bear6" :
	        	document.getElementById("MK").options[2]=new Option("Bear 6","Bear6-W");
			break;
		case "Bear7-F" :
	        	document.getElementById("MK").options[2]=new Option("Bear 7","Bear7-W");
			break;
		case "Bear8-F" :
	        	document.getElementById("MK").options[2]=new Option("Bear 8","Bear8-W");
			break;
		case "Bear11-F" :
	        	document.getElementById("MK").options[2]=new Option("Bear 11","Bear11-W");
			break;
		case "Bear12-F" :
	        	document.getElementById("MK").options[2]=new Option("Bear 12","Bear12-W");
			break;
	        }
        return true;
	}
