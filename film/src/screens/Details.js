import { View, Text,  Image, Dimensions, SafeAreaView, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Details = ({route}) => {
    const [details, setDetails] =useState([])
    console.log('ini route', route.params.movie_id)
    useEffect(() => {
        axios.get(
            'https://api.themoviedb.org/3/movie/' + route.params.movie_id + '?api_key=e4eaa702872478a0a6718267a86defe7&language=en-US').then((res) => setDetails(res.data))
    })
    return (
    <View>
      <View>
        {details.genres && details.genres.map((item)=>(
          <Text key={item.id}>{item.name}</Text>
          
          )) 
        }
      </View>

      <View>
        <Text>{details.title}</Text>
        <Text>{details.release_date}</Text>
        <Text>{details.overview}</Text>
      
      </View>

    </View>
  )
}

export default Details