var fs = require('fs');
var path = require('path');
var noparameters = 0;
var gotsomething = 0;
var firstparameternotok = 0;
var myArgs = process.argv.slice(2)                   //saving arguments from user and slicing off unnecessary part
 
   if ((myArgs == "" )){                                 // checking for empty array
    console.log("USAGE: node search [EXT] [TEXT]");    //  if empty then help options
    noparameters = 1;
    }
 
     function directoriesList(directory){
	  
	  var readFolder = fs.readdirSync(directory);
	  
	  for(var x in readFolder){
	  
	   var next = path.join(directory, readFolder[x]);
		 
	    if(path.extname(next) == ("." + myArgs[0]) ){
		 firstparameternotok = 1;	
		 gotsomething = 1;
		 var str = (myArgs[1]);
		 var contents = fs.readFileSync(next, 'utf8');
         var foundIt = contents.indexOf(myArgs[1]);
			
		  if(!(foundIt == (-1))){
			 console.log(path.dirname(next) + " " + path.basename(next))
			 gotsomething = 0;
			 }
		}
           	   
		  if(fs.lstatSync(next).isDirectory() == true){ 
			  directoriesList(next); 
		     }  
	   }  
      }
  
      directoriesList(__dirname);
 
     if(((noparameters == 0) && (gotsomething == 1)) || ((noparameters == 0) && (firstparameternotok == 0))) {
	   console.log("no file was found")
	   //the second side of the condition was just added to fix the issue of the first parameter
	   // a.k.a the file extension not fitting any file. not necessary by requirement  but nice touch i think...
      }
 
  
  ///////////////////////////////////////////////////////////////////////////////////
  ///                                                                             ///
  ///         code snippets that were removes after                               ///
  ///            the second submission of the task                                ///
  ///                                                                             ///
  ///////////////////////////////////////////////////////////////////////////////////
                                                   
   // if(((firstparameterbad == 1 )  && (!gotsomething == 0))  && (noparameters == 0)){
	//  console.log("no file was found");
	
 // }
												   
			//   if(path.extname(next) !== ("." + myArgs[0]) ){
		//	    firstparameterbad = 1;
		//  }		


		//console.log(str);
		//	if((myArgs[1])match(next) >= 0){
		//	  console.log(path.dirname(next) + " " + path.basename(next))  // fix number one!!!
		//	}
		//	fs.readFile(next, 'utf8', function(err, data){
		//		if(err) throw err;
				
				
			 //console.log(contents);
				//if((data.indexOf(myArgs[1]) >= 0) && (path.extname(next) == ("." + myArgs[0]) )){
			//     gotsomething = 1;
            //    }
			
			//  console.log( " boom " + next)
				//if (path.dirname() == path.dirname(directory))	 {
				//	console.log(next)
				//	gotsomething = 1;
				//}
	   //		});
		//	 if((myArgs[0] == null)|| (myArgs[1] == null)) {
         //     empty = 1;
			//  console.log("its rly empty");
			// }		
 
        //var firstparameterbad = 0;		
        // console.log("" + foundIt)	

/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
		
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
	