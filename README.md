# Covid-19 Risk and Vaccine Assessment GeoLocation Application

## Description

- This is a Covid-19 Risk and Vaccine Assessment application that retrieves real time Covid-19 and Covid-19 Vaccine data based on the users geo-location. There is also formatting for manual entry of location if the user wishes to disable geo-location. 

- In preperation for future full-stack web development group projects, this application includes HTML, CSS, JS and Web-APIs to allow full functionality. 

- Upon load, the jumbotron displays the current data and time (utilizing Moment.js), Global Covid-19: Confirmed Cases, Vaccine Distribution, New Deaths, New Recovered, (New Variants?), and a prompt to confirm/deny the geo-location feature. 

- All of this data is displayed withing the HTML or in the browser by creating functions that fetch the APIs needed for the data. We then console logged the data to retrieve the data-set arrays. We were then able to apply a specific array to an HTML id that would then grab, and display the real-time data from the API. 

- If the user opts for enabling the geo-location, the broswer will then display real time Covid-19 data within the map radius. This is done by utilizing the (insert API) and creating functions and variables that loop through each set of JSON data retrieved from the API. 

- If the user opts out of the geo-location feature, a form was created to allow input of Country, State/Region, City/Zipcode in the form of drop-down boxes. A new drop-down box is generated each time the user clicks the "search" button. addEvenetListeners were utilized to create button functionality.

- The application is ideal for travelers interested in seeking information on areas with the highest amount of infection confirmed, so that they may avoid them, or prepare with proper PPI. 

- The application includes a geo-location vaccine feature that allows the user to retrieve real-time data on the amount of vaccines distributed in an area; whether that be based on their own geo-location or one that has been manually input.

- Our group was tasked with building a web application from scratch that executes a design; solving a real-world problem by integrating data recieived from multiple server-side API requests. 

- The idea was conceived and then created by our 5 group concensus. The project put each group member in a real-world coding situation and allowed us to adapt and hone our strengths and capabilities to meet the needs of the team. This enabled us to create a functional Covid-19 application with geo-location capabilities. 

- Because we were tasked with working collaboratively, we learned agile development methodologies and implement feature and bug fixes using git branch workflow and pull requests. The kanban board created in GitHub allowed us to move through each task seamlessly; alerting group members to tasks already being worked on. 

- This unit was focused mainly on:
  * Server-Side APIs
  * Git Branching Workflow
  * Agile Software Development

- Deployed Website - ""

- [Include screenshots here!]()

## Credits
- Collaborators:
  * [Bryan Bentz](https://github.com/MXDragon) 
  * [Diana Daghlas](https://github.com/ddaghlas)
  * [Drew Selden](https://github.com/selden-CBC2021)
  * [Audumn Vernon](https://github.com/audumnv)
  * [Cody Schenk]()
- Resources:
  * 📖 [API Resources](https://coding-boot-camp.github.io/full-stack/apis/api-resources)
  * [Global Covid-19 API](https://api.covid19api.com/summary)
  * [Covid-19 Vaccines Distributed per Country/Region/City API](https://covid-api.mmediagroup.fr/v1/vaccines?country=)
  * [Confirmed Covid-19 Cases per Country](https://api.covid19api.com/live/country/status/confirmed)
  * [Geo-Location API](https://api.ipdata.co?api-key=${apiKey})




