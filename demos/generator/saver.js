           
           
           function replacer(key,value)
           {
               if (key=="colors") return undefined;
               else return value;
           }
           
           
           
           function f(){
                var text=document.getElementById('dict').innerText;
               console.log(text);
              /* var lines=text.split('\n');
               var fin=[];
               lines.forEach(element => {
                element=element.split('  ');
                element[1]=JSON.stringify(element[1],replacer);
               element=element.join('  ');
                fin.push(element);
               });

              fin=fin.join('\n');
              console.log(fin);*/
              

                var blob = new Blob([text], {type: "text/plain;charset=utf-8"});
              
                const url = URL.createObjectURL(blob);
                const downloadLink = downloadBlob(blob);
                downloadLink.title = 'Download Grayscale Photo';
    downloadLink.classList.add('btn-link', 'download-file');
    
    // Set the visible text content of the download link
    downloadLink.textContent = 'Download';

    // Attach the link to the DOM
    document.body.appendChild(downloadLink);




            }

                function downloadBlob(blob, filename) {
  // Create an object URL for the blob object
  const url = URL.createObjectURL(blob);
  
  // Create a new anchor element
  const a = document.createElement('a');
  
  // Set the href and download attributes for the anchor element
  // You can optionally set other attributes like `title`, etc
  // Especially, if the anchor element will be attached to the DOM
  a.href = url;
  a.download = filename || 'download';
  
  // Click handler that releases the object URL after the element has been clicked
  // This is required for one-off downloads of the blob content
  const clickHandler = function() {
    setTimeout(() => {
      // Release the object URL
      URL.revokeObjectURL(url);

      // Remove the event listener from the anchor element
      this.removeEventListener('click', clickHandler);

      // Remove the anchor element from the DOM
      (this.remove && (this.remove(), 1)) ||
      (this.parentNode && this.parentNode.removeChild(this));
    }, 150)
  };
  
  // Add the click event listener on the anchor element
  // a.addEventListener('click', clickHandler, false);
  
  // Programmatically trigger a click on the anchor element
  // Useful if you want the download to happen automatically
  // Without attaching the anchor element to the DOM
  // a.click();
  
  // Return the anchor element
  // Useful if you want a reference to the element
  // in order to attach it to the DOM or use it in some other way
  return a;
}
