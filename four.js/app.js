//programer name: Amal Jaraisy

//in this program we will read 10 files and print 
// the content of each file according to the file number
//for example if the file number is 3 we will print the first 3 lines of the file 
//and so on..

const fs=require('fs');

const namesArr = [
    'file1.txt',
    'file2.txt',
    'file3.txt',
    'file4.txt',
    'file5.txt',
    'file6.txt',
    'file7.txt',
    'file8.txt',
    'file9.txt',
    'file10.txt'
];


for(let i=0;i<10;i++)
{
        let content=fs.readFileSync(`C:/Users/fadis/OneDrive/Desktop/nodejs-homework/NodeJSMain/HomeWork4/input/${namesArr[i]}`,'utf-8');
        let ContentArray=content.split('\r\n');
        if(i+1>ContentArray.length)
        {
                for(let j=0;j<ContentArray.length;j++)
                     console.log(ContentArray[j]);

        }
        else
            for(let j=0;j<i+1;j++)
                  console.log(ContentArray[j]);
                
}