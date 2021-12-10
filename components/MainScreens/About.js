import React from 'react'
import {View, Text} from 'react-native'
export default function About() {
    return (
        <View style={{padding: 20}}>
            <Text style={{fontSize: 30}}>Hello!</Text>
            <Text/>
            <Text>This is an app called Cyper (yes misspelling of cipher). I wanted to create this app because I wanted people to be able to express their thoughts and opinions without revealing who they are.</Text>
            <Text/>
            
            <Text>There were a lot of technical challeges I had to deal with creating this app. I first used my own custom server side with mongodb, but because of either my mistake or react native not being able to read server status code properly I abandoned it.</Text>
            
            <Text/>
            <Text>At the last minute I decied to switch to firebase and scrap all over to understand the basics on how it works and how to use.</Text>
            
            <Text/>
            <Text>There are components such as the search engine, that I wasnt able to figure out on how to make it work. But for now it works on showing all the posts others posted.</Text>
            
            <Text/>
            <Text>I am planning to work on this over break and make it a better app and allow users to search by hashtags, better relavency and sort by universities.</Text>
            
            <Text/>
            <Text>Thats all!</Text>
            
            <Text/>
            <Text>Naimul :)</Text>

        </View>
    )
}
