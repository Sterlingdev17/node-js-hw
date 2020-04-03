
function generate(userResponse){
    return `
    ## table of content
<html lang="en">
* [Github]
* [Title]
* [Description]
* [Liscense]
* [Installation]
* [test]
* [Contribution]

    
## Github

${userResponse.github}

## Title
       
${userResponse.title}
       
## Description 
       
${userResponse.description}

## Liscense
       
${userResponse.liscense}
       
## Installation

${userResponse.installation}

## Test

${userResponse.test}

## Usage

${userResponse.usage}

## Contribution

${userResponse.contributing}
        
       
        


   
    
    
    
    
    
    
    
    
    
    
    `
}
module.exports = generate;