import React, { Component } from 'react';
import {View, Text, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = (props) =>
{
    
    return (

        <Card> 
            <CardSection>

                <View>
                    <Image style={  styles.thumbnailStyle } source= { { uri : props.data.thumbnail_image } }/>
                </View>
                    
                <View style ={ styles.cardHeaderStyle}>
                    <Text style={styles.headerStyle}> { props.data.title }</Text>
                    <Text> { props.data.artist }</Text>
                </View>
            </CardSection>

            <CardSection>
                    <Image style={  styles.artworkStyle } source= { { uri : props.data.image } }/>
            </CardSection>

            <CardSection>
                <Button onPress = { () => Linking.openURL(props.data.url)} text ="Buy Album "/>
             </CardSection>

        </Card>
    );
};

const styles = {

        cardHeaderStyle :
        { 
            paddingTop:5,
            paddingBottom:5,
            marginLeft:10,
            justifyContent : 'space-around',
            flexDirection : "column",
         
        },
        thumbnailStyle : 
        {
            borderRadius:120,
            height : 60,
            width : 60
        },
        headerStyle : 
        {
            fontSize : 15,
            fontWeight: 'bold'
        },
        artworkStyle:
        {
            height : 300,
            flex: 1,
            width : null
        }




};


export default AlbumDetail;