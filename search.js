var fs = require('fs');
var path = require('path');


  var myArgs = process.argv.slice(2)                   //saving arguments from user and slicing off unnecessary part
  if (myArgs == "" ){                                 // checking for empty array
   console.log("USAGE: node search [EXT] [TEXT]");   //  if empty then help options
  }
  
  function directoriesList(directory){
	 
	
	  
	  var readFolder = fs.readdirSync(directory);
	  for(var x in readFolder){
		  var next = path.join(directory, readFolder[x]);
		  if(path.extname(next) == ("." + myArgs[0]) ){
			  console.log(next);
			
			fs.readFile(next, 'utf8', function(err, data){
				if(err) throw err;
				
				if((data.indexOf(myArgs[1]) >= 0) && (path.extname(next) == ("." + myArgs[0]) )){
            console.log(next)
              }
					
			});
			
		  }

		  if(fs.lstatSync(next).isDirectory() == true){
			 
			  directoriesList(next); 
		  }  
	  }  
  }
  
  directoriesList(__dirname);
  
  
                                                   

/*
/////////////////////////////////////////////////////////////////////////////////
// JUST ADDED ALL MY VARIUOS ATTEMPTS TO WRITE THIS....I MADE ALOF OF MISTAKES //
// BUT I HOPE THE EFFORT COUNTS FOR SOMETHING.                                 //
// I KNOW I COULD HAVE CLEANED THIS UP A BIT MORE. SORRY.                      //
// I JUST GOT BACK FROM WORK(WOKING NIGHTS), AND ITS ALREADY 9:15...           //
// I NEED TO SEND IT TO YOU RIGHT NOW OR ILL MISS THE DEADLINE.                //
//                                                                             //
/////////////////////////////////////////////////////////////////////////////////
search(currentFolder, function(err, items){
	   
    	   if(err) {
	      throw err;    // exception management
	      }                                           //console.log(items);
  if(foldersFound === undefined || foldersFound == 0){
    for (var i=0; i < items.length; i++){             // loop on all items in directory
	//if(fs.statSync(items[i]).isDirectory() == 1){    // boolean condition to find diretories
	                                               	// console.log("working directory detector");
	//	localSolution = path.join(items[i]);         //gets folder names
	//	foldersFound.push(localSolution);
	//}
		
		
	if(path.extname(items[i]) == ("." + myArgs[0]) ){  // if a file matches first user  argument
	fs.readFile(items[i], 'utf8', function(err, data) {  
	//console.log("file match first argument");
	
	if(data.includes( myArgs[1])){  // find the string in file to match second parameter
		//console.log((__dirname) + (__filename)); // get full path of file
	}
});
     foundFiles.push(items[i]);
	}
	
	//	console.log(items[i]);  // list of all files in array
	}
	//	console.log(foldersFound);
	//console.log("found it: " + foundFiles);
	}
	else {
		for(i = 0 ; i <= foldersFound.length; i++){
		search(foldersFound[i]);
		}
	}
	
}
	);
	
	//console.log(data);
	
	//var buf1 = Buffer.from(myArgs[1]);
		//	var buf2 = Buffer.from(next);
		//	console.log(buf1 + "===" + buf2);
		
		
		//var second = path.basename(next);
			//console.log(second);
		 
  //console.log("" + foldersFound.length);
  // for(i = 0 ; i <= foldersFound.length; ++i){
	//  console.log("folders found:  " + foldersFound[i]);
	
	 //console.log(next);
	 
	 //console.log(directory + " x " );
	 
	 var foldersFound = [];                               // creating array to save paths of folders
	 // trying = path.join(directory);
	//  foldersFound.push(trying);
	  //console.log('myArgs: ' , myArgs)  ; 
 // }
	*/
	