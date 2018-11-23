# Speakify (aka getPronunciation)
Speakify uses the soundoftext API (https://github.com/ncpierson/soundoftext-api) in order to access Google's text-to-speech functionality.
Speakify lets you upload a list of words in CSV format and will download the corresponding pronunciations in mp3 format.

The files are saved in the same folder containing the app files in a subfolder named after the CSV file used. 

# Getting started
To run the application, simply download the application files and initiate the server.js file in your console. Administrative rights may be needed to write the mp3s to the relevant folders. 

Access the interface by going to localhost:4000 in any modern browser and upload the desired CSV file from there. 

The words should be in the first column of the CSV file in individual cells. 
